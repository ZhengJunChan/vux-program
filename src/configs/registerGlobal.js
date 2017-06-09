import Vue from 'vue';
// import { CheckUtil } from '@/utils';

export default function () {
    /**
     * [callAppFunction 调用APP公共接口]
     * @Author   郑君婵
     * @DateTime 2017-06-05
     * @param    {string}   funName [要调用的函数名称]
     * @param    {object}   params  [参数对象]
     */
    Vue.prototype.callAppFunction = function (funName, params) {
        var query = this.$route.query;
        var APP_TYPE = {
            ios: 'ios',
            android: 'android'
        };

        if (!query.app) {
            console.error('url中没有检查到关键字app');
            return;
        }

        if (query.app === APP_TYPE.ios) {
            let iosParams = {
                funcName: funName,
                params: params || ''
            };

            window.webkit.messageHandlers.callAppFunction.postMessage(iosParams);
        } else if (query.app === APP_TYPE.android) {
            let androidParams = {
                funname: funName,
                params: params || ''
            };
            window.android.funtionAndroid(JSON.stringify(androidParams));
        } else {
            console.error('无法识别app类型');
        }
    };
};
