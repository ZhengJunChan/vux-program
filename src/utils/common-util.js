/**
 * 封装公共接口
 * Created by 郑君婵 on 2017-07-15
 */

export default {
    /**
     * [deepCopy 深复制]
     * @Author   郑君婵
     * @DateTime 2017-07-15
     * @param    {[type]}   data [被复制的变量]
     * @return   {[type]}        [被复制的变量的值]
     */
    deepCopy: function (data) {
        if (typeof data === 'object') {
            return JSON.parse(JSON.stringify(data));
        }

        return data;
    }
};