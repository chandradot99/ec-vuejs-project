import lineItems from './../../mock-data/forecastingLineItem'
import summaryYears from './../../mock-data/forecastingSummaryYears'
import summaryMonths from './../../mock-data/forecastingSummaryMonths'

export default {
  namespaced: true,
  state: {
    lineItems: [],
    summaryYears: [],
    summaryMonths: {}
  },
  getters: {
    lineItems: state => state.lineItems,
    summaryYears: state => state.summaryYears,
    summaryMonths: state => state.summaryMonths
  },
  mutations: {
    SET_LINE_ITEMS (state, payload) {
      state.lineItems = payload
    },
    SET_MONTHLY_SUMMARY (state, payload) {
      console.log('payload', payload)
      state.summaryMonths = payload
    },
    SET_YEARLY_SUMMARY (state, payload) {
      state.summaryYears = payload
    }
  },
  actions: {
    async fetchLineItems ({ commit }) {
      let data = lineItems.responseData
      commit('SET_LINE_ITEMS', data)
    },
    async fetchMonthlySummary ({ commit }) {
      let data = summaryMonths.responseData
      commit('SET_MONTHLY_SUMMARY', data)
    },
    async fetchYearlySummary ({ commit }) {
      let data = summaryYears.responseData.yearsData
      commit('SET_YEARLY_SUMMARY', data)
    }
  }
}
