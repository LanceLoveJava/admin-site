import { createStore } from 'vuex'
import getters from './getters'

const modulesFiles = require.context('./modules', false, /\.[jt]+s$/)

const modules = modulesFiles.keys().reduce((modules: any, modulePath: string) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})
const store = createStore({
  modules,
  getters,
})

export default store
