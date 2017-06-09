<template>
    <div class="discuss_item_component .vux-1px-b">
    denuif
    </div>
</template>

<script>
export default {
    props: {
        id: [String],
        name: [String],
        link: [String],
        type: [String]  // @type值(默认无样式)为 fill:填充背景颜色; border:有边框
    },
    methods: {
        clickTag() {
            // this.$emit('click-tag');
            console.log(this.id);
        }
    }
};
</script>

<style lang="less">
@import '~vux/src/styles/1px.less';
.discuss_item_component{}
</style>
