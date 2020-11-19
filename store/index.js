export const state = () => ({
    someValue: '',
    counter: 0,
  })
  
  export const mutations = {
    increment(state) {
        state.counter++
      },
    changeSomeValue(state, newValue) {
      this.$myInjectedFunction('accessible in mutations')
      state.someValue = newValue
    }
  }
  
  export const actions = {
    setSomeValueToWhatever({ commit }) {
      this.$myInjectedFunction('accessible in actions')
      const newValue = 'whatever'
      commit('changeSomeValue', newValue)
    }
  }
 