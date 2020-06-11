import Vue from 'vue'
import VueRouter from 'vue-router'
import pageA from './pages/a.vue'
import pageB from './pages/b.vue'
import App from './App.vue'

Vue.use(VueRouter)

const routes=[
    {
        path:'/',
        component:App
    },
    {
        path:'/pagea',
        name:'pagea',
        component:pageA
    },
    {
        path:'/pageb',
        name:'pageb',
        component:pageB
    },
]

const router=new VueRouter({
    routes
})

export default router