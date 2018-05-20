import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import classify from '@/page/classify'
import videoA from '@/page/videoA'
import pcenter from '@/page/pcenter'
import videoPlay from '@/page/videoPlay'
import guide from '@/page/guide'
import detail from '@/page/detail'
import swiperDemo from '@/page/swiperDemo'
import searchResult from '@/page/searchResult'
import videoerror from '@/page/videoerror'
import authorc from '@/page/authorc'
import myfocus from '@/page/myfocus'
import myfensi from '@/page/myfensi'
import diserror from '@/page/diserror'
import focuserror from '@/page/focuserror'
import allworks from '@/page/allworks'


import AmazeVue from 'amaze-vue'
import 'amaze-vue/dist/amaze-vue.css'


import 'vue2-animate/dist/vue2-animate.min.css';
Vue.use(AmazeVue)


import jQuery from 'jquery'



import wcSwiper from 'wc-swiper'
import 'wc-swiper/style.css'
Vue.use(wcSwiper);

require('swiper/dist/css/swiper.css')
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)



Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: '',
            component: guide
        },{
            path: '/guide',
            name: '/guide',
            component: guide
        },{
            path: '/index',
            name: 'index',
            component: index
        },
        {
            path: '/classify',
            name: 'classify',
            component: classify
        },
        {
            path: '/videoA',
            name: 'videoA',
            component: videoA
        },
        {
            path: '/pcenter',
            name: 'pcenter',
            component: pcenter
        },
        {
            path: '/videoPlay',
            name: 'videoPlay',
            component: videoPlay
        },
        {
            path: '/searchResult',
            name: 'searchResult',
            component: searchResult
        },
        {
            path: '/detail',
            name: 'detail',
            component: detail
        },
        {
            path: '/swiperDemo',
            name: 'swiperDemo',
            component: swiperDemo
        },
        {
            path: '/videoerror',
            name: 'videoerror',
            component: videoerror
        },
        {
            path: '/authorc',
            name: 'authorc',
            component: authorc
        },
        {
            path: '/diserror',
            name: 'diserror',
            component: diserror
        },
        {
            path: '/myfocus',
            name: 'myfocus',
            component: myfocus
        },
        {
            path: '/myfensi',
            name: 'myfensi',
            component: myfensi
        },
        {
            path: '/focuserror',
            name: 'focuserror',
            component: focuserror
        },
        {
            path: '/allworks',
            name: 'allworks',
            component: allworks
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})
