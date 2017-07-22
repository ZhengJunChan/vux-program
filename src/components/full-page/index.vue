<!-- [full_page_component 布局插件]   @Author: 郑君婵   @DateTime: 2017-07-22 -->
<template>
<div class="full_page_component">
    <div id="FullPageContain" class="page_contain">
        <div class="page page1 current">
            gfrtgr
        </div>

        <div class="page page2">
            589648
        </div>

        <div class="page page3">
            21859
        </div>

        <div class="page page4">
            1586f
        </div>
    </div>
    <ul id="navBar" class="nav_bar">
        <li><span></span></li>
        <li><span></span></li>
        <li><span></span></li>
        <li><span></span></li>
        <li><span></span></li>
        <li><span></span></li>
        <li><span></span></li>
    </ul>
</div>
</template>

<script type="text/javascript">
export default {
    props: {
    	configs: {
            type: Object,
            default () {
                return {}
            }
        }
    },
    data () {
    	return {
    		fullPage: null
    	}
    },
    mounted () {
    	this.fullPage = new window.FullPage({
    		id: 'FullPageContain',
    		slideTime: 800,
    		height: -45,
    		continuous: false,
    		mode: 'wheel,nav:navBar',
    		start: 0,
    		easing: 'ease',
    		effect: {
    			transform: {
    				translate: 'Y',
    				scale: [0.1, 1],
    				rotate: [0, 0]
    			},
    			opacity: [0, 1]
    		}
    	});
    }
};
</script>

<style lang="less">
@import './full-page.less';
</style>

