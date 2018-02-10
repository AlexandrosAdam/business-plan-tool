import Vue from 'vue'
import Router from 'vue-router'
import TwoIdentity from '@/components/2_business-model/TwoIdentity'
import TwoDescription from '@/components/2_business-model/TwoDescription'
import MarketGeneral from '@/components/6_market/MarketGeneral'
import Managers from '@/components/3_human-resources/Managers'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/2a-identity', name: 'TwoIdentity', component: TwoIdentity,
      path: '/2b-description', name: 'TwoDescription', component: TwoDescription,
      path: '/market-general', name: 'MarketGeneral', component: MarketGeneral,
      path: '/managers', name: 'Managers', component: Managers
    }
  ],
  mode: 'history'
})
