import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import SelfDetailInformation from './components/SelfDetailInformation.vue'
import HelloWorld from './components/HelloWorld.vue'
const routes=[
    {
        path:"/SelfDetailInformation",
        component:SelfDetailInformation,
    },
    {
        path:"/",
        component:HelloWorld,
    }
]

const router=new VueRouter({
    routes
});

export default router