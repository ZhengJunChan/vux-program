/**
 * 封装http接口
 * Created by 郑君婵 on 2017-05-24
 */

/**
 * [agents 可能的浏览器类型]
 * @type {Array}
 */
// let AGENTS = [{
//     brower: 'ios',
//     name: 'iosWeb',
//     test: !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
// }, {
//     brower: 'android',
//     name: 'androidWeb',
//     test: navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1
// }];

export default {
    /**
     * [getBrowser 获取浏览器信息]
     * @Author   郑君婵
     * @DateTime 2017-06-05
     * @param    {[type]}   obj [description]
     * @return   {[type]}       [description]
     */
    // getBrowserInfo: function(obj) {
    //     let querys = this.getQuerys();

    //     for (let index = 0; index < AGENTS.length; index++) {
    //         if (AGENTS[index].test) {
    //             return AGENTS[index];
    //         }
    //     }
    // },

    /**
     * [getQuerys 获取URL参数]
     * @Author   郑君婵
     * @DateTime 2017-06-05
     * @return   {Object}   [返回所有的残值数组]
     */
    getQuerys: function () {
        let querys = {};
        let queryList = [];

        let queryStr = window.location.search;

        if (queryStr.split('?').length === 2) {
            queryList = queryStr.split('?')[1].split('&');
        }

        for (let index = 0; index < queryList.length; index++) {
            querys[queryList[index].split('=')[0]] = queryList[index].split('=')[1];
        }

        return querys;
    }
};
