<template>
<swiper :auto="auto" :loop="loop" :aspect-ratio="aspectRatio" :show-dots="false">
    <swiper-item class="swiper-demo-img" v-for="(item, index) in list" :key="index">
        <a href="javascript:">
          <div class="vux-img" :style="{backgroundImage: buildBackgroundUrl(item.img)}"></div>
          <p class="vux-swiper-desc" v-if="showDescMask">{{item.title}}</p>
        </a>
    </swiper-item>

    <div :class="['vux-indicator', 'vux-indicator-' + dotsPosition]" v-show="showDots">
      <a href="javascript:" v-for="key in length">
        <i class="vux-icon-dot" :class="{'active': key - 1 === current}"></i>
      </a>
    </div>
</swiper>
</template>

<script>
import { Swiper, SwiperItem } from 'vux';

export default {
    components: {
        Swiper,
        SwiperItem
    },
    props: {
		loop: Boolean,
        title: [String],
        aspectRatio: Number,
        list: {
            type: Array,
            default () {
                return []
            }
        },
        dotsPosition: {
            type: String,
            default: 'right'
        },
        showDots: {
            type: Boolean,
            default: true
        },
        showDescMask: {
	        type: Boolean,
	        default: true
	    },
		auto: {
			type: Boolean,
			default: false
		}
    },
    data() {
        return {
            current: this.index || 0,
            length: this.list.length,
            index: 0
        }
    },
    methods: {
    	buildBackgroundUrl (url) {
	        return `url(${url})`;
	    }
    }
};
</script>

<style lang="less">
</style>
