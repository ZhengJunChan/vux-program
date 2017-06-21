<template>
    <div class="swiper_page">
    <swiper :list="demo01_list" :aspect-ratio="200/200"></swiper>
      <!--   <swiper :aspect-ratio="300/800" @on-index-change="onSwiperItemIndexChange" v-model="swiperItemIndex">
      <swiper-item class="swiper-demo-img" v-for="(item, index) in demo04_list" :key="index">
        <img :src="item">
      </swiper-item> -->
    </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperItem } from 'vux'

const baseList = [{
  url: 'javascript:',
  img: 'https://static.vux.li/demo/1.jpg',
  title: '送你一朵fua'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/2.jpg',
  title: '送你一辆车'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/3.jpg',
  title: '送你一次旅行'
}]


export default {
    components: {
        Swiper,
        SwiperItem
    },
    data() {
    	return {
    		demo01_list: baseList
    	}
    }
};
</script>

<style lang="less">
@itemColor: #ff7982;

.swiper_page{
  width: 400px;
  .vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-swiper-desc{
  	padding-bottom: 30px;
  }
}
</style>
