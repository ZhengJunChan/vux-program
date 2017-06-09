/**
 * 项目路由
 * Created by 郑君婵 on 2017-05-24
 */

import Vue from 'vue';
import Router from 'vue-router';

import pc from './pc';
import { RouterInterceptor } from '@/interceptors';

const routers = [pc];

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: routers
});

RouterInterceptor(router, Vue);

export default router;
