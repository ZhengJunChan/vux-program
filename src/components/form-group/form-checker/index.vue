<!-- [form_checker_component]   @Author: 郑君婵   @DateTime: 2017-07-12 -->
<template>
  <div class="form_checker_component">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    defaultItemClass: String,
    selectedItemClass: String,
    disabledItemClass: String,
    type: {
      type: String,
      default: 'radio'
    },
    value: [String, Number, Array, Object],
    max: Number
  },
  watch: {
    value (newValue) {
      this.currentValue = newValue
      this.$emit('on-change', newValue)
    },
    currentValue (val) {
      this.$emit('input', val)
    }
  },
  data () {
    return {
      currentValue: this.value
    }
  }
}
</script>

<style lang="less">
@import './form-checker.less';
</style>
