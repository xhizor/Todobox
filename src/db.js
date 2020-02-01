import Vue from 'vue'
import VueIdb from 'vue-idb'

Vue.use(VueIdb)

export default new VueIdb({
  database: 'todobox',
  schemas: [{
    task: '++id, name, status, image'
  }]
})
