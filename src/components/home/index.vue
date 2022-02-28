<template>
  <div class="home-container">
    <div class="name-container">
      <span>Forecast Name</span>
    </div>
    <div class="view-container">
      <div class="button-dropdown">
        <button class="btn">VIEW</button>
        <div class="icon-wrap">
          <svg class="icon">
            <use xlink:href="./../../assets/img/icons.svg#caret-down"></use>
          </svg>
        </div>
        <div class="dropdown-items">
          <ul class="items">
            <li class="item">
              <svg class="icon">
                <use xlink:href="./../../assets/img/icons.svg#checkmark"></use>
              </svg>
              <span>Show full attributes</span>
            </li>
            <li class="item" :class="{'selected': showMonthlySummary}" @click="selectMonthlySummary()">
              <svg class="icon">
                <use xlink:href="./../../assets/img/icons.svg#checkmark"></use>
              </svg>
              <span>
                Show monthly summary
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="table-container">
      <forecasting-table :showMonthlySummary="showMonthlySummary"></forecasting-table>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ForecastingTable from './forecasting-table.vue'

export default {
  components: {
    ForecastingTable
  },
  data () {
    return {
      showMonthlySummary: false
    }
  },
  methods: {
    ...mapActions({
      fetchLineItems: 'home/fetchLineItems',
      fetchMonthlySummary: 'home/fetchMonthlySummary',
      fetchYearlySummary: 'home/fetchYearlySummary'
    }),
    selectMonthlySummary () {
      this.showMonthlySummary = !this.showMonthlySummary
    }
  },
  mounted () {
    this.fetchLineItems()
    this.fetchMonthlySummary()
    this.fetchYearlySummary()
  }
}
</script>

<style lang="scss" scoped>
  .home-container {
    .name-container {
      height: 89px;
      padding: 0 30px;
      display: flex;
      align-items: center;
      span {
        font-weight: bold;
        font-size: 19px;
        color: #0a0a0a;
      }
    }
    .view-container {
      height: 61px;
      background-color: #f8f8f8;
      border-top: 1px solid #ededed;
      border-bottom: 1px solid #ededed;
      display: flex;
      align-items: center;
      padding: 0 30px;
      .button-dropdown {
        display: flex;
        height: 34px;
        margin: 0 0 0 auto;
        position: relative;
        .btn {
          width: 71px;
          color: #ffffff;
          background-color: #acacac;
          border: none;
          font-size: 11px;
          font-weight: bold;
          border-top-left-radius: 3px;
          border-bottom-left-radius: 3px;
          border-right: 1px solid #ededed;
          cursor: pointer;
        }
        .icon-wrap {
          width: 40px;
          display: flex;
          background-color: #acacac;
          display: flex;
          align-items: center;
          justify-content: center;
          border-top-right-radius: 3px;
          border-bottom-right-radius: 3px;
          cursor: pointer;
          .icon {
            width: 20px;
            height: 20px;
            fill: #ffffff;
          }
        }
        .dropdown-items {
          position: absolute;
          top: 34px;
          right: 0;
          display: none;
          z-index: 99;
          .items {
            width: 203px;
            background-color: #ffffff;
            border: 1px solid #f2f2f2;
            color: #5f5f5f;
            list-style: none;
            border-radius: 3px;
            padding: 0;
            margin: 0;
            .item {
              height: 42px;
              display: flex;
              align-items: center;
              padding: 0 0 0 40px;
              position: relative;
              cursor: pointer;
              .icon {
                fill: #acacac;
                position: absolute;
                left: 16px;
                width: 16px;
                height: 16px;
                display: none;
              }
              span {
                font-size: 13px;
              }
              &:first-child {
                border-bottom: 1px solid #f2f2f2;
              }
              &.selected {
                .icon {
                  display: block;
                }
              }
            }
          }
        }
        &:hover {
          .btn, .icon-wrap {
            background-color: #5f5f5f;
          }
          .dropdown-items {
            display: block;
          }
        }
      }
    }
  }
</style>
