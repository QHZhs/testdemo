import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import SelfDetailInformation from './components/SelfDetailInformation.vue'
import HelloWorld from './components/HelloWorld.vue'
import loginInform from './components/loginInform.vue'
import ChooseHosipital from './components/ChooseHosipital.vue'
import UserTip from './components/UserTip.vue'
const routes=[
    {
        path:"/SelfDetailInformation",
        component:SelfDetailInformation,
    },
    {
        path:"/",
        component:HelloWorld,
    },
    {
        path:"/loginInform",
        component:loginInform,
    },
    {
        path:"/ChooseHosipital",
        component:ChooseHosipital,
    },
    {
        path:"/UserTip",
        component:UserTip,
    }
]

const router=new VueRouter({
    routes
});

export default router