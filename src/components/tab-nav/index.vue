<!-- [tab_nav_component 布局插件]   @Author: 郑君婵   @DateTime: 2017-07-18 -->
<template>
    <nav class="tab_nav_component">
        <ul class="clear_float">
            <li class="fl" v-for="(nav, index) in navs">
                <a :class="{active: index===currentIndex}" v-text="nav.name" @click="tabClicked(index)"></a>
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
    data() {
        return {
            currentIndex: 0
        }
    },
    methods: {
    	tabClicked (index) {
    		this.currentIndex = index;

            this.$emit('tab-clicked', index);
	    }
    }
};
</script>

<style lang="less">
@import './tab-nav.less';
</style>
