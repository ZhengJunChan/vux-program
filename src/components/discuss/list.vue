<template>
    <group class="discuss_list_component" :title="notShowHead == true?'':'评论'">
        <div class="item weui-cells" v-for="(sitem,sindex) in discussListData" :key="sitem">
            <div class="header">
                <div class="head_img"  @click="gotoPersonCenterFn(sitem.uid)">
                    <header-img :size="30" :headerImg="sitem"></header-img>
                </div>
                <div>
                    <p class="name" @click="gotoPersonCenterFn(sitem.uid)" v-text="sitem.nickname"></p>
                    <p class="desc" v-text="sitem.create_time"></p>
                </div>
            </div>

            <div class="body">
                <div class="topic_text" v-text="sitem.content">
                </div>

                <nineimg :imgArry="sitem.imglist_link"></nineimg>

                <music></music>

                <div class="icons">
                    <div class="discuss_icon" @click="quickReview(sitem.id)" v-text="sitem.com_count+' '"></div>
                  <div class="zan_icon" v-text="sitem.agrees+' '" :class="{'is_zan_icon':sitem.is_agree}" @click="isSelectAgree(5,sitem.id,sindex)"></div>
                </div>

                <div class="discusses" v-if="sitem.com_lists.length>=1">
                  <p v-for="(pitem,pindex) in sitem.com_lists " :key="pitem" >
                        <span class="other_discuss" v-text="pitem.nickname" @click="quickReview(pitem.uid)"></span> 回复
                    <span @click="quickReview(pitem.to_uid)" class="first_disuss" v-text="pitem.to_nickname" v-if="pitem.to_nickname"></span>
                        <span v-text="pitem.content" @click="quickReview(pitem.fid)"></span>
                    </p>
                  <p class="see" v-show="sitem.com_lists.length>=3">查看全部<span v-text="sitem.com_count"></span>评论</p>
                </div>
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
    mounted: function () {
        this.getList();
    },
    methods: {
        isSelectAgree(type, oid, oindex) {
            this.$emit('isSelectAgree', [type, oid, oindex]);
        },
        thisDiscussIdFn(oid, pid) {
            // oid 代表回复id，pid代表回复评论id
            console.log(`${oid}||${pid}`);
        },
        clickTag() {
            // this.$emit('click-tag');
            console.log(this.id);
        },
        getList() {
            console.log(0);
            // var response = [];

            // for(let i = 0; i < 20; i++) {
            //     response.push({
            //         date: "2017-06-1"+i,
            //         portfolio: "1.5195"+i,
            //         drop: i+"+.00 %" ,
            //         state: 1
            //     })
            // }

            // this.listdata = response.slice(0, this.num);
        },
        gotoPersonCenterFn(oid) {
          /*
           * 点击进入我的页面
           * */
            this.callAppFunction('gotoUser', {'userID': oid});
            console.log(oid);
        },
        quickReview(reviewid) {
            console.log(reviewid);
        }
    }
};
</script>

<style lang="less">
@import '~vux/src/styles/1px.less';
@import './discuss.less';
</style>
