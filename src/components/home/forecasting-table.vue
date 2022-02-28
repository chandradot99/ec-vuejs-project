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
        <tr v-for="(lineItem, index) in lineItemData" :key="index">
          <td v-for="(header, index) in headers" :key="index">
            {{lineItem[header.field]}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      headers: [
        {
          field: 'productItemName',
          label: 'Product'
        },
        {
          field: 'optionItemName',
          label: 'Option'
        },
        {
          field: 'attributes',
          label: 'Attribute'
        },
        {
          field: 'revenueType',
          label: 'Revenue Type'
        },
        {
          field: 'qty',
          label: 'QTY'
        },
        {
          field: 'unitPrice',
          label: 'Unit Price'
        },
        {
          field: 'startMonth',
          label: 'Start Month'
        },
        {
          field: 'months',
          label: 'Months'
        },
        {
          field: 'revenueRecognitionName',
          label: 'Revenue Recognition'
        },
        {
          field: 'committed',
          label: 'Commited'
        }
      ],
      lineItemData: [
        {
          unitPrice: 95,
          startMonth: "2/1/2019",
          revenueType: "MRC",
          revenueRecognitionName: null,
          revenueRecognitionId: null,
          qty: 1,
          productItemName: "Captio User Delegation",
          productItemId: "a01A000001gmFXZIA2",
          productFLIId: "a2m2G000000AJKQQA4",
          priorMRR: null,
          optionItemName: null,
          optionItemId: null,
          optionFLIId: null,
          monthsVR: null,
          monthsNRC: null,
          monthsMRC: null,
          months: 18,
          displayUnitPrice: "$95.00",
          displayQty: "1",
          displayPriorMRR: null,
          committed: "No",
          attributesWithValues: null,
          attributes: null
        },
        {
          unitPrice: 55,
          startMonth: "3/1/2019",
          revenueType: "NRC",
          revenueRecognitionName: null,
          revenueRecognitionId: null,
          qty: 1,
          productItemName: "TNS Link",
          productItemId: "a01A000001utm3RIAQ",
          productFLIId: "a2m2G000009H0fHQAS",
          priorMRR: null,
          optionItemName: null,
          optionItemId: null,
          optionFLIId: null,
          monthsVR: null,
          monthsNRC: null,
          monthsMRC: null,
          months: 12,
          displayUnitPrice: "$55.00",
          displayQty: "1",
          displayPriorMRR: null,
          committed: "No",
          attributesWithValues: null,
          attributes: null
        },
        {
          unitPrice: 100,
          startMonth: "2/1/2019",
          revenueType: "MRC",
          revenueRecognitionName: null,
          revenueRecognitionId: null,
          qty: 1,
          productItemName: "TNS Link",
          productItemId: "a01A000001utm3RIAQ",
          productFLIId: "a2m2G000009H0fIQAS",
          priorMRR: null,
          optionItemName: null,
          optionItemId: null,
          optionFLIId: null,
          monthsVR: null,
          monthsNRC: null,
          monthsMRC: null,
          months: 24,
          displayUnitPrice: "$100.00",
          displayQty: "1",
          displayPriorMRR: null,
          committed: "No",
          attributesWithValues: null,
          attributes: null
        }
      ],
      yearsData: [
        {
          year: "2019",
          summaryAmount: "$2,190.80",
          lineData: [
            {
              recordId: "a2m2G000000AJKQQA4",
              amount: "$1,045.00"
            },
            {
              recordId: "a2m2G000009H0fIQAS",
              amount: "$1,100.00"
            },
            {
              recordId: "a2m2G000009H0fHQAS",
              amount: "$45.80"
            }
          ]
        },
        {
          year: "2020",
          summaryAmount: "$1,874.20",
          lineData: [
            {
              recordId: "a2m2G000000AJKQQA4",
              amount: "$665.00"
            },
            {
              recordId: "a2m2G000009H0fIQAS",
              amount: "$1,200.00"
            },
            {
              recordId: "a2m2G000009H0fHQAS",
              amount: "$9.20"
            }
          ]
        },
        {
          year: "2021",
          summaryAmount: "$100.00",
          lineData: [
            {
              recordId: "a2m2G000009H0fIQAS",
              amount: "$100.00"
            }
          ]
        }
      ],
      monthlyData: {
        summaryAmount: [
          "$195.00",
          "$199.58",
          "$199.58",
          "$199.58",
          "$199.58",
          "$199.58",
          "$199.58",
          "$199.58",
          "$199.58",
          "$199.58",
          "$199.58",
          "$199.58",
          "$199.62",
          "$195.00",
          "$195.00",
          "$195.00",
          "$195.00",
          "$195.00",
          "$100.00",
          "$100.00",
          "$100.00",
          "$100.00",
          "$100.00",
          "$100.00"
        ],
        startYear: 2019,
        startMonth: 2,
        linesData: [
          {
            startYear: 2019,
            startMonth: 2,
            recordId: "a2m2G000000AJKQQA4",
            data: [
              "$95.00",
              "$95.00",
              "$95.00",
              "$95.00",
              "$95.00",
              "$95.00",
              "$95.00",
              "$95.00",
              "$95.00",
              "$95.00",
              "$95.00",
              "$95.00",
              "$95.00",
              "$95.00",
              "$95.00",
              "$95.00",
              "$95.00",
              "$95.00"
            ]
          },
          {
            startYear: 2019,
            startMonth: 2,
            recordId: "a2m2G000009H0fIQAS",
            data: [
              "$100.00",
              "$100.00",
              "$100.00",
              "$100.00",
              "$100.00",
              "$100.00",
              "$100.00",
              "$100.00",
              "$100.00",
              "$100.00",
              "$100.00",
              "$100.00",
              "$100.00",
              "$100.00",
              "$100.00",
              "$100.00",
              "$100.00",
              "$100.00",
              "$100.00",
              "$100.00",
              "$100.00",
              "$100.00",
              "$100.00",
              "$100.00"
            ]
          },
          {
            startYear: 2019,
            startMonth: 3,
            recordId: "a2m2G000009H0fHQAS",
            data: [
              "$4.58",
              "$4.58",
              "$4.58",
              "$4.58",
              "$4.58",
              "$4.58",
              "$4.58",
              "$4.58",
              "$4.58",
              "$4.58",
              "$4.58",
              "$4.62"
            ]
          }
        ]
      },
      lineItemMapData: {},
      yearlyDataHeaders: [],
      monthlyDataHeaders: [],
      lineItemYearlyMapData: {},
      lineItemMonthlyMapData: {}
    }
  },
  methods: {
    createLineItemsMapData () {
      this.lineItemData.forEach((itemData) => {
        this.lineItemMapData[itemData.productFLIId] = itemData
        this.lineItemYearlyMapData[itemData.productFLIId] = {}
        this.lineItemMonthlyMapData[itemData.productFLIId] = {}
      })
    },
    createLineItemsYearlyData () {
      this.yearsData.forEach((data) => {
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
      let year = this.monthlyData.startYear
      let month = this.monthlyData.startMonth

      this.monthlyData.summaryAmount.forEach(() => {
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

      this.monthlyData.linesData.forEach((lineData) => {
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
  mounted () {
    this.createLineItemsMapData()
    this.createLineItemsYearlyData()
    this.createLineItemsMonthlyData()

    this.headers = this.headers.concat(this.monthlyDataHeaders)
    console.log('headers', this.monthlyDataHeaders)
    console.log('monthly data', this.lineItemMonthlyMapData)
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
