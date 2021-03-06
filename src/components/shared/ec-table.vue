<template>
  <div class="ec-table-container">
    <table>
      <thead>
        <tr>
          <th v-for="(header, index) in headers" :key="index">
            {{(header.type === 'date') ? formatDate(header.label) : header.label}}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(lineItem, index) in rowItems" :key="index">
          <td v-for="(header, index) in headers" :key="index" :class="{'border-right': header.borderRight}">
            <span v-if="$scopedSlots[header.field]">
              <slot :name="header.field" :rowData="lineItem"></slot>
            </span>
            <span v-else>
              {{lineItem[header.field] || (header.emptyLabel || '-')}}
            </span>
          </td>
        </tr>
        <tr>
          <td v-for="(header, index) in headers" :key="index" class="summary-row" :class="{'border-right': header.borderRight}">
            {{summaryRowData[header.field]}}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { format } from 'date-fns'

export default {
  props: {
    headers: {
      type: Array,
      required: true
    },
    rowItems: {
      type: Array,
      required: true
    },
    showSummaryRow: {
      type: Boolean,
      default: false
    },
    summaryRowData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  methods: {
    formatDate(date) {
      return format(new Date(date), 'MMM yyyy')
    }
  }
}
</script>

<style lang="scss" scoped>
  .ec-table-container {
    overflow: scroll;
    margin: 10px 30px;
    table {
      border-collapse: collapse;
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
          white-space: nowrap;
          padding-right: 15px;
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
          white-space: nowrap;
          padding-right: 15px;
          &:first-child {
            padding-left: 25px;
            position: sticky;
            left: 0;
            z-index: 2;
          }
          &.summary-row {
            height: 55px;
            background-color: #f8f8f8;
            border-bottom: 1px solid #ededed;
          }
          &.border-right {
            border-right: 1px solid #ededed;
          }
        }
      }
    }
  }

  @media (max-width: 768px) {
    .ec-table-container {
      margin: 10px;
      table {
      border-collapse: collapse;
      thead {
        th {
          padding-left: 5px;
          padding-right: 5px;
          min-width: 60px;
          &:first-child {
            padding-left: 5px;
          }
        }
      }
      tbody {
        td {
          padding-left: 5px;
          padding-right: 5px;
          &:first-child {
            padding-left: 5px;
          }
        }
      }
    }
    }
  }
</style>
