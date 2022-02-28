<template>
  <ec-table :headers="headers" :rowItems="rowItems" :showSummaryRow="true" :summaryRowData="summaryRow">
    <template slot="startMonth" slot-scope="slotProps">
      {{formatDate(slotProps.rowData.startMonth)}}
    </template>
  </ec-table>
</template>

<script>
import { mapGetters } from 'vuex'
import { format } from 'date-fns'
import ecTable from '../shared/ec-table.vue'
import lineItemHeaders from './lineItemHeaders.js'

export default {
  components: {
    ecTable
  },
  props: {
    showMonthlySummary: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      headers: [],
      rowItems: [],
      summaryRow: {},
      monthlyDataHeaders: [],
      yearlyDataHeaders: [],
      lineItemYearlyMapData: {},
      lineItemMonthlyMapData: {},
      monthlySummaryData: {},
      yearlySummaryData: {}
    }
  },
  methods: {
    formatDate(date) {
      return format(new Date(date), 'MMM yyyy')
    },
    getHeaders(type) {
      if (type === 'monthly') {
        return lineItemHeaders.concat(this.monthlyDataHeaders)
      } else if(type === 'yearly') {
        return lineItemHeaders.concat(this.yearlyDataHeaders)
      } else {
        return lineItemHeaders
      }
    },
    getData(type) {
      if (type === 'monthly') {
        return this.lineItems.map((lineItem) => {
          return Object.assign(lineItem, this.lineItemMonthlyMapData[lineItem.productFLIId])
        })
      } else if(type === 'yearly') {
        return this.lineItems.map((lineItem) => {
          return Object.assign(lineItem, this.lineItemYearlyMapData[lineItem.productFLIId])
        })
      } else {
        return this.lineItems
      }
    },
    getSummaryRow(type) {
      if (type === 'monthly') {
        return Object.assign({}, this.monthlySummaryData)
      } else if(type === 'yearly') {
        return Object.assign({}, this.yearlySummaryData)
      } else {
        return {}
      }
    },
    createLineItemsMapData () {
      this.lineItems.forEach((itemData) => {
        this.lineItemYearlyMapData[itemData.productFLIId] = {}
        this.lineItemMonthlyMapData[itemData.productFLIId] = {}
      })
    },
    createLineItemsYearlyData () {
      this.summaryYears.forEach((data) => {
        this.yearlyDataHeaders.push({
          field: data.year,
          label: data.year
        })

        this.yearlySummaryData[data.year] = data.summaryAmount

        data.lineData.forEach((lineData) => {
          this.lineItemYearlyMapData[lineData.recordId][data.year] = lineData.amount
        })
      })
    },
    createLineItemsMonthlyData () {
      let year = this.summaryMonths.startYear
      let month = this.summaryMonths.startMonth

      this.summaryMonths.summaryAmount.forEach((amount) => {
        let field = `${month}/1/${year}`
        this.monthlyDataHeaders.push({
          field: field,
          label: field,
          type: 'date'
        })

        this.monthlySummaryData[field] = amount

        if (month === 12) {
          month = 1,
          year = year + 1
        } else {
          month = month + 1
        }
      })

      this.summaryMonths.linesData.forEach((lineData) => {
        let year = lineData.startYear
        let month = lineData.startMonth

        lineData.data.forEach((amount) => {
          let key = `${month}/1/${year}`
          
          this.lineItemMonthlyMapData[lineData.recordId][key] = amount

          if (month === 12) {
            month = 1,
            year = year + 1
          } else {
            month = month + 1
          }
        })
      })
    }
  },
  watch: {
    lineItems() {
      this.createLineItemsMapData()
      this.createLineItemsMonthlyData()
      this.createLineItemsYearlyData()

      let type = this.showMonthlySummary ? 'monthly' : 'yearly'

      this.headers = this.getHeaders(type)
      this.rowItems = this.getData(type)
      this.summaryRow = this.getSummaryRow(type)
      console.log('row', this.summaryRow)
    },
    showMonthlySummary() {
      let type = this.showMonthlySummary ? 'monthly' : 'yearly'

      this.headers = this.getHeaders(type)
      this.rowItems = this.getData(type)
      this.summaryRow = this.getSummaryRow(type)
    }
  },
  computed: {
    ...mapGetters({
      lineItems: 'home/lineItems',
      summaryYears: 'home/summaryYears',
      summaryMonths: 'home/summaryMonths'
    })
  }
}
</script>
