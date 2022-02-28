<template>
  <div class="ec-table-container">
    <table>
      <thead>
        <tr>
          <th v-for="(header, index) in headers" :key="index">
            {{header.label}}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(lineItem, index) in rowItems" :key="index">
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
  props: {
    headers: {
      type: Array,
      required: true
    },
    rowItems: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .ec-table-container {
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
