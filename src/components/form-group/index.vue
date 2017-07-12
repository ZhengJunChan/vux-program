<!-- [form_group_component]   @Author: 郑君婵   @DateTime: 2017-07-11 -->
<template>
<form class="form_group_component">
	<slot></slot>
</form>
</template>

<script>
export default {
  props: {
    options: {
      type: Object,
      default () {
        return {
          qq: {
            title: 'title'
          },
          weixin: {
            title: 'title'
          },
          weibo: {
            title: 'title'
          },
          kongjian: {
            title: 'title'
          }
        }
      }
    }
  },
  methods: {
    // showPrevious () {
    //   return this.config.alwaysShowPrevNext || this.pagination.current_page > 1
    // }
  }
}
</script>

<style lang="less">
@import './form-group.less';
</style>
