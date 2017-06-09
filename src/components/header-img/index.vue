<template>
  <div class="heder_img_component"
  :style="setBoxStyle()" @click="gotoPersonCenterFn(headerImg.uid)">
    <img class="vip" src="./imgs/vip.png" :style="setVipStyle()" v-if="headerImg.member_type"/>
  </div>
</template>

<script>
export default {
    props: {
        size: [Number],
        headerImg: ''
    },
    methods: {
        setBoxStyle() {
            return {
                padding: this.size / 2 + 'px',
                backgroundImage: `url(${this.headerImg.head_link})`
            };
        },
        setVipStyle() {
            let right = 0 - this.size * 0.2;

            return {
                right: right + 'px'
            };
        },
        gotoPersonCenterFn(oid) {
          /*
           * 点击进入我的页面
           * */
            console.log(oid);
        }
    }
};
</script>

<style lang="less" scoped>
.heder_img_component {
    width: 0;
    position: relative;
    border-radius: 50%;
    background-image: url(./imgs/defualt-head.png);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    .vip {
        height: 40%;
        width: auto;
        bottom: 0;
        position: absolute;
    }
}
</style>
