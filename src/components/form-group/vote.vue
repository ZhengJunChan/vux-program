<!-- [form_vote_component]   @Author: 郑君婵   @DateTime: 2017-07-11 -->
<template>
<div class="clear_float form_vote_component">
  <label class="fl width_22" v-text="header"></label>
  <div class="fr width_77">
    <div class="checkbox_item clear_float">
      <input type="checkbox" v-model="showVotePanel">
      <span>开启投票</span>
    </div>
  	<div class="vote_body clear_float" v-show="showVotePanel">
      <div class="fl">
        <div class="vote_label">
          <div class="header">投票类型</div>
          <div>
            <div class="checkbox_item clear_float">
              <input type="radio" value="单选" v-model="vote.type">
              <span>单选</span>
            </div>
            <div class="checkbox_item clear_float">
              <input type="radio" value="多选" v-model="vote.type">
              <span>多选</span>
              <input type="number" class="type_num">
              <span>个</span>
            </div>
          </div>
        </div>
        <div class="vote_label">
          <div class="header">投票前投票结果是否显示 </div>
          <div>
            <div class="checkbox_item clear_float">
              <input type="radio" value="单选" v-model="vote.type">
              <span>显示</span>
            </div>
            <div class="checkbox_item clear_float">
              <input type="radio" value="多选" v-model="vote.type">
              <span>投票后显示</span>
            </div>
          </div>
        </div>
      </div> 
      <div class="fr">
        <div class="vote_label">
          <div class="header">投票标题</div>
          <input type="text" placeholder="投票标题">
        </div>
        <div class="vote_label">
          <div class="header">选项1</div>
          <input type="text" placeholder="选项1">
        </div>
        <div class="vote_label">
          <div class="header">选项2</div>
          <input type="text" placeholder="选项2">
        </div>
        <div class="vote_label">
          <div class="header">
            选项3
            <span class="bule_text btn fr">删除</span>
          </div>
          <input type="text" placeholder="选项2">
        </div>
        <span class="bule_text add_btn btn">添加选项</span>
      </div> 
    </div>
  </div>
</div>
</template>

<script>
import { Checker, CheckerItem } from 'vux'

export default {
  components: {
    Checker,
    CheckerItem
  },
  props: {
    header: String,
    placeholder: String
  },
  data () {
    return {
      showVotePanel: false,
      vote: {
        type: '单选'
      },
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
