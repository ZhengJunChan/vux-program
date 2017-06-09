<template>
  <div class="link_arrow_component weui-cell__ft" @click="go()"></div>
</template>

<script>
import { RouterUtil } from '@/utils';

export default {
    props: {
        link: {
            type: [String, Object]
        }
    },
    methods: {
        go() {
            this.$emit('go');
            
            if (this.link) {
                RouterUtil.go(this.link, this.$router);
            }
        }
    }
};

</script>

<style lang="less">
.link_arrow_component.weui-cell__ft:after {
    width: 13px;
    height: 13px;
    border-width: 2px 2px 0 0;
    border-color: #ff7982;
}
</style>
