<template>
  <div class="home-container">
    <div class="name-container">
      <span>Forecast Name</span>
    </div>
    <div class="view-container">
      <button-dropdown :buttonText="buttonText" :dropdownItems=dropdownItems @on-select="selectDropdownItem"></button-dropdown>
    </div>
    <div class="table-container">
      <forecasting-table :showMonthlySummary="showMonthlySummary"></forecasting-table>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import ButtonDropdown from './../shared/button-dropdown.vue'
import ForecastingTable from './forecasting.vue'

export default {
  components: {
    ForecastingTable,
    ButtonDropdown
  },
  data () {
    return {
      buttonText: 'VIEW',
      dropdownItems: [
        {
          key: 'show_full_attributes',
          displayName: 'Show full attributes',
          selected: false
        },
        {
          key: 'show_monthly_summary',
          displayName: 'Show monthly summary',
          selected: false
        }
      ],
      showMonthlySummary: false
    }
  },
  methods: {
    ...mapActions({
      fetchLineItems: 'home/fetchLineItems',
      fetchMonthlySummary: 'home/fetchMonthlySummary',
      fetchYearlySummary: 'home/fetchYearlySummary'
    }),
    selectDropdownItem (key) {
      switch(key) {
        case 'show_monthly_summary':
          this.showMonthlySummary = !this.showMonthlySummary
          break
        default:
          console.log('selected', key)
      }
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
    }
  }
</style>
