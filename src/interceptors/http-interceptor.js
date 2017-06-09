/**
 * http请求拦截器
 * Created by 郑君婵 on 2017-05-25
 */

import { CheckUtil, BrowserUtil } from '@/utils';

/**
 * [rebiuldResponse 重构分页数据]
 * @Author   郑君婵
 * @DateTime 2017-06-01
 * @param    {object}   response [response]
 */
function rebiuldPaginationResponse(response) {
    var page = {};

    if (response.headers.hasOwnProperty('x-pagination-current-page')) {
        page.currentPage = response.headers['x-pagination-current-page'];
    }

    if (response.headers.hasOwnProperty('x-pagination-page-count')) {
        page.pageCount = response.headers['x-pagination-page-count'];
    }

    if (response.headers.hasOwnProperty('x-pagination-per-page')) {
        page.perPage = response.headers['x-pagination-per-page'];
    }

    if (response.headers.hasOwnProperty('x-pagination-total-count')) {
        page.totalCount = response.headers['x-pagination-total-count'];
    }

    if (!CheckUtil.isEmptyObject(page)) {
        response.data.page = page;
    }
}

/**
 * [rebiuldResponse 重构数据]
 * @Author   郑君婵
 * @DateTime 2017-06-01
 */
function rebiuldResponse(response) {
    // if (response.) {}
    rebiuldPaginationResponse(response);
}

/**
 * [goLogin 跳转到登录页面]
 * @Author   郑君婵
 * @DateTime 2017-06-05
 */
function goLogin() {
    let pcParams = {};
    let appParams = {
        funcName: 'gotoLogin'
    };

    require(pcParams, appParams);
}

/**
 * [requireToken token无效时，重新请求]
 * @Author   郑君婵
 * @DateTime 2017-06-05
 */
function requireToken() {
    let pcParams = {};
    let appParams = {
        funcName: 'regetToken'
    };

    require(pcParams, appParams);
}

/**
 * [require 请求]
 * @Author   郑君婵
 * @DateTime 2017-06-05
 * @param    {[type]}   pcParams  [web也请求参数]
 * @param    {[type]}   appParams [app也请求参数]
 */
function require(pcParams, appParams) {
    let querys = BrowserUtil.getQuerys();

    // 不在app打开
    if (!querys.app) {
        // todo web页请求token;
    }

    // ios app 中打开页面
    if (querys.app === 'ios') {
        window.webkit.messageHandlers.callAppFunction.postMessage(appParams);
    }

    // android app 中打开页面
    if (querys.app === 'android') {
        window.android.funtionAndroid(JSON.stringify(appParams));
    }
}

export default function (vue) {
    // request 拦截器
    vue.http.interceptors.request.use(
        config => {
            var token = window.localStorage.getItem('token');

            // 判断是否存在token，如果存在的话，则每个http header都加上token
            if (token) {
                config.headers.accesstoken = token;
            }

            return config;
        },
        err => {
            return Promise.reject(err);
        }
    );

    // response 拦截器
    vue.http.interceptors.response.use(
        response => {
            rebiuldResponse(response);

            return response.data;
        },
        error => {
            if (error.response) {
                switch (error.response.status) {
                case 401:
                    // 返回 401 清除token信息并跳转到登录页面
                    // store.commit(types.LOGOUT);
                    // router.replace({
                    //     path: 'login',
                    //     query: { redirect: router.currentRoute.fullPath }
                    // })
                    // app在别处登录
                    goLogin();
                    break;
                case 402:
                    // token授权失败或者已过期
                    requireToken();
                    break;
                }
            }

            // 返回接口返回的错误信息
            return Promise.reject(error.response.data);
        }
    );
};
