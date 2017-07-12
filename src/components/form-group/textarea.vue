<!-- [form_textarea_component]   @Author: 郑君婵   @DateTime: 2017-07-11 -->
<template>
<div class="clear_float form_textarea_component">
  <label class="fl width_22" v-text="header"></label>
  <div class="fr width_77">
  	<textarea :placeholder="placeholder"></textarea>
  </div>
</div>
</template>

<script>
import TagList from './../tag/list.vue'
export default {
  components: {
    TagList
  },
  props: {
    header: String,
    placeholder: String
  },
  data () {
    return {
      hotTags: [{
        link: '',
        name: '据诶'
      }, {
        link: '',
        name: '纷纷为'
      }, {
        link: '',
        name: '解读那我去'
      }]
    }
  },
  methods: {
    // showPrevious () {
    //   return this.config.alwaysShowPrevNext || this.pagination.current_page > 1
    // }
  }
}
</script>
