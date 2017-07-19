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
  deepCopy: function(data) {
    if (typeof data === 'object') {
      return JSON.parse(JSON.stringify(data));
    }

    return data;
  },
  /**
   * [getRandom 获取随机数(包括min和max)]
   * @Author   郑君婵
   * @DateTime 2017-07-19
   * @param    {[int]}   max [最大值]
   * @param    {[int]}   min [最小值]
   * @return   {[int]}       [随机数]
   */
  getRandom: function(min, max) {
    let differ = max - min;
    let num = Math.random() * differ + min;

    return Math.round(num)
  }
};
