/**
 * 项目入口文件
 * Created by 郑君婵 on 2017-05-24
 */

import Vue from 'vue';
import FastClick from 'fastclick';

import App from '@/pages/app';

import router from '@/router';

FastClick.attach(document.body);

Vue.config.productionTip = false;

/* 项目启动 */
new Vue({
    router,
    render: h => h(App)
}).$mount('#app-box');
