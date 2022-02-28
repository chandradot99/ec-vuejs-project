<template>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th v-for="(header, index) in headers" :key="index">
            {{header.label}}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(lineItem, index) in lineItems" :key="index">
          <td v-for="(header, index) in headers" :key="index">
            {{lineItem[header.field]}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import lineItemHeaders from './lineItemHeaders.js'

export default {
  props: {
    showMonthlySummary: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      headers: [],
      data: [],
      monthlyDataHeaders: [],
      yearlyDataHeaders: [],
      lineItemYearlyMapData: {},
      lineItemMonthlyMapData: {}
    }
  },
  methods: {
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

        data.lineData.forEach((lineData) => {
          this.lineItemYearlyMapData[lineData.recordId][data.year] = lineData.amount
        })
      })
    },
    createLineItemsMonthlyData () {
      let year = this.summaryMonths.startYear
      let month = this.summaryMonths.startMonth

      this.summaryMonths.summaryAmount.forEach(() => {
        let field = `${month}/1/${year}`
        this.monthlyDataHeaders.push({
          field: field,
          label: field
        })
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
      this.data = this.getData(type)
    },
    showMonthlySummary() {
      let type = this.showMonthlySummary ? 'monthly' : 'yearly'

      this.headers = this.getHeaders(type)
      this.data = this.getData(type)
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

<style lang="scss" scoped>
  .table-container {
    overflow: scroll;
    table {
      border-collapse: collapse;
      margin: 10px 30px;
      thead {
        height: 51px;
        font-size: 13px;
        color: #0a0a0a;
        border-bottom: 2px solid #c3eb5b;
        th {
          min-width: 93px;
          padding-left: 35px;
          text-align: left;
          position: sticky;
          top: 0;
          z-index: 1;
          background-color: #ffffff;
          &:first-child {
            padding-left: 25px;
            position: sticky;
            left: 0;
            z-index: 2;
          }
        }
      }
      tbody {
        tr {
          border-bottom: 1px solid #ededed;
        }
        td {
          height: 53px;
          padding-left: 35px;
          color: #5f5f5f;
          font-size: 13px;
          position: sticky;
          top: 0;
          z-index: 1;
          background-color: #ffffff;
          &:first-child {
            padding-left: 25px;
            position: sticky;
            left: 0;
            z-index: 2;
          }
        }
      }
    }
  }
</style>
