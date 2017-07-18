<!-- [tab_nav_component 布局插件]   @Author: 郑君婵   @DateTime: 2017-07-18 -->
<template>
    <nav class="tab_nav_component">
        <ul>
            <li v-for="nav in navs">
                <router-link active-class="active" :to="nav.link" v-text="nav.name"></router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    props: {
    	navs: {
            type: Array,
            default: []
        }
    },
    methods: {
    	setStyle () {
    		let style = {
    			height: this.height || '100%'
    		};

    		if (this.margin) {
    			style.margin = this.margin;
    		}

	        return style;
	    }
    }
};
</script>

<style lang="less">
@import './tab-nav.less';
</style>
