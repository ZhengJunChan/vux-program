<template>
  <group class="discuss_list_component">
    <div class="item weui-cells" v-for="(sitem,sindex) in discussListData" :key="sitem">
      <div class="header">
        <div class="head_img"  @click="gotoPersonCenterFn(sitem.uid)">
          <header-img :size="30" :headerImg="sitem"></header-img>
        </div>
        <div>
          <p class="name">
            <span class="other_discuss" v-text="sitem.nickname" @click="changeToSayName(sitem.nickname,sitem.uid)"></span>
            <span v-if="sitem.to_nickname">回复</span>
            <span class="first_disuss" v-text="sitem.to_nickname" v-if="sitem.to_nickname" @click="changeToSayName(sitem.to_nickname,sitem.to_uid)"></span>
          </p>
          <p class="desc" v-text="sitem.create_time"></p>
        </div>
      </div>

      <div class="body">
        <div class="topic_text" v-text="sitem.content">
        </div>

        <div class="icons">
          <div class="zan_icon" v-text="sitem.agrees+' '" :class="{'is_zan_icon':sitem.is_agree}" @click="isSelectAgree(6,sitem.id,sindex)"></div>
        </div>

        <!--<div class="discusses" v-if="sitem.com_lists.length>=1">-->
          <!--<p v-for="(pitem,pindex) in sitem.com_lists" :key="pitem" @click="thisDiscussIdFn(pitem.nickname,sitem.id,sitem.fid)">-->
            <!--<span class="other_discuss" v-text="pitem.nickname"></span><span v-if="pitem.to_nickname">回复</span> <span class="first_disuss" v-text="pitem.to_nickname" v-if="pitem.to_nickname"></span>-->
            <!--<span v-text="pitem.content"></span>-->
          <!--</p>-->
        <!--</div>-->
      </div>

    </div>
  </group>
</template>

<script>
  import { Group } from 'vux';

  import CCell from './../c-cell';
  import HeaderImg from './../header-img';
  // import CScroller from './../c-scroller';

  import Peronalhead from '@/components/peronalhead/headimg.vue';
  import Nineimg from '@/components/nineimg/nineimg.vue';
  import Music from '@/components/music/music.vue';

  export default {
      components: {
          Group,
          CCell,
          HeaderImg,
          Peronalhead,
          Nineimg,
          Music
      },
      props: {
          notShowHead: [Boolean],
          discussListData: '',
          id: [String],
          name: [String],
          link: [String],
          type: [String]  // @type值(默认无样式)为 fill:填充背景颜色; border:有边框
      },
      methods: {
          isSelectAgree(type, oid, oindex) {
              this.$emit('isSelectAgree', [type, oid, oindex]);
          },
          changeToSayName(oname, oid) {
              // oid 代表回复id，pid代表回复评论id
              this.$emit('saySomeThingToName', [oname, oid]);
              console.log(`${oname}||${oid}`);
          },
          clickTag() {
              // this.$emit('click-tag');
              console.log(this.id);
          },
          gotoPersonCenterFn(oid) {
              /*
               * 点击进入我的页面
               * */
              this.callAppFunction('gotoUser', {'userID': oid});
              console.log(oid);
          }
      }
  };
</script>

<style lang="less" scoped>
  @import '~vux/src/styles/1px.less';
  @import './discuss.less';
  .other_discuss{
    color:#ff8aa0 ;
  }
  .first_disuss{
    color:#83c3ff ;
  }
</style>
