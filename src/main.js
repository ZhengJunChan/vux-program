/**
 * 项目入口文件
 * Created by 郑君婵 on 2017-05-24
 */

import Vue from 'vue';
import Router from 'vue-router';
import FastClick from 'fastclick';

import App from '@/moduls';
import routers from '@/router';

FastClick.attach(document.body);

Vue.config.productionTip = false;

/* 路由配置 */
Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: routers
});
/* / 路由配置 */

/* 项目启动 */
new Vue({
    router,
    render: h => h(App)
}).$mount('#chan');
