<template class="tag_component">
  <a
  class="tag_component"
  :class="{
    'fill': type === 'fill',
    'border': type === 'border',
    'black_border': type === 'black_border'
  }"
  @click="clickTag()">{{name}}</a>
</template>

<script>
export default {
    props: {
        id: [Number],
        name: [String],
        link: [String],
        type: [String]  // @type值(默认无样式)为 fill:填充背景颜色; border:有边框
    },
    methods: {
        clickTag() {
            this.$emit('click-tag');
        }
    }
};
</script>

<style lang="less">
@itemColor: #ff7982;

.tag_component{
  color: #333333;
  font-size: 12/14rem;
  // overflow: hidden;
  padding: 3/14rem 9/14rem;
  margin-right: 10/14rem;
  white-space: nowrap;
  background: #ffffff;
  line-height: normal;
  border-radius: 14/14rem;
  display: inline-block;
  border: 1/14rem solid #ffffff;


  &.fill{
    color: #ffffff;
    background-color: @itemColor;
    border: 1/14rem solid @itemColor;
  }

  &.border{
    color: @itemColor;
    border: 1/14rem solid @itemColor;
  }

  &.black_border{
    border: 1/14rem solid #7d7d7d;
  }
}
</style>
