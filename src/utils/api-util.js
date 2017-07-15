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
    },
    /**
     * [all 同时请求多个接口]
     * @Author   郑君婵
     * @DateTime 2017-06-15
     * @param    {[arr]}   arr [需要请求的数组 eg: [this.get('https://api.github.com/xxx/1'), this.get('https://api.github.com/xxx/2')]]
     * @return   {[type]}       [description]
     */
    all: function (arr) {
        return Vue.http.all(arr);
    }
};
