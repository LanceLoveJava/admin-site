import router from './router'
import store from './store'

router.beforeEach((to, from, next) => {
    if (to.meta.auth) {
        if (store.state?.common.loginStart) {
            next()
        } else {
            next({ path: '/login', query: { redirect: to.fullPath }, replace: true })
        }
    } else {
        next()
    }
})