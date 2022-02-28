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
          <td v-for="(header, index) in headers" :key="index">
            <span v-if="$scopedSlots[header.field]">
              <slot :name="header.field" :rowData="lineItem"></slot>
            </span>
            <span v-else>
              {{lineItem[header.field] || (header.emptyLabel || '-')}}
            </span>
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
    table {
      border-collapse: collapse;
      // margin: 10px 30px;
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
        }
      }
    }
  }
</style>
