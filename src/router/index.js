/**
 * 项目路由
 * Created by 郑君婵 on 2017-05-24
 */

import Vue from 'vue';
import Router from 'vue-router';

const routers = [{
    path: '*',
    component: resolve => require(['@/pages/home'], resolve)
}, {
    path: '/topic',
    name: 'topic',
    component: resolve => require(['@/pages/topic'], resolve)
}];

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: routers
});
