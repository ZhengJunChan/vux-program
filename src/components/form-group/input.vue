<!-- [form_input_component]   @Author: 郑君婵   @DateTime: 2017-07-11 -->
<template>
<div class="clear_float form_input_component">
  <label class="fl width_22" v-text="header"></label>
  <div class="fr width_77">
    <input type="text" name="" :placeholder="placeholder">
  </div>
</div>
</template>

<script>
export default {
  props: {
    header: String,
    placeholder: String
  },
  methods: {
    // showPrevious () {
    //   return this.config.alwaysShowPrevNext || this.pagination.current_page > 1
    // }
  }
}
</script>
