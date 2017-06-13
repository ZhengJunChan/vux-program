<template>
<div class="scroller_component">
    <div class="wrapper">
        <slot></slot>
    </div>
</div>
</template>

<script>
import './iscroll/iscroll.js';

export default {
    data() {
        return {
            scroller: {}
        };
    },
    mounted() {
        this.scroller = new window.IScroll('.wrapper', { mouseWheel: true, click: true });

        document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    },
    methods: {
        // clickTag() {
        //     this.$emit('click-tag');
        // }
    }
};
</script>

<style lang="less">
.scroller_component{
    height: 100vh;
    position: relative;
    .wrapper{
        // position: absolute;
        // top: 0;
        // bottom: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
}
</style>
