import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

export const eventBus = new Vue({
  methods:{
    attMovie(movieAtt){
      this.$emit('attMovie', movieAtt)
    }
  }
  
})

new Vue({
  render: h => h(App),
}).$mount('#app')
