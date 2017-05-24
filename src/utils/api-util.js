/**
 * 封装http接口
 * Created by 郑君婵 on 2017-05-24
 */

import Vue from 'vue';
import { AjaxPlugin } from 'vux';

Vue.use(AjaxPlugin);

export default {
    /**
     * http get 请求
     * @Author   郑君婵
     * @DateTime 2017-05-24
     * @param {string} url    [参考request.url]
     * @param {Object} params [参考request.params]
     * @returns {promise}     [参考 request 返回值]
     */
    get: function (url, params) {
        return Vue.http.get(url, {params: params});
    },
    /**
     * http post 请求
     * @Author   郑君婵
     * @DateTime 2017-05-24
     * @param {string} url    [参考request.url]
     * @param {Object} params [参考request.params]
     * @returns {promise}     [参考 request 返回值]
     */
    post: function (url, params) {
        // return Vue.http.post(url, {emulateJSON: true}, {params: params});
        return Vue.http.post(url, {params: params});
    }
};
