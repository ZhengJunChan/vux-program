<template>
  <div class="home_page">
    主页
  </div>
</template>

<script>
import { Group, Cell } from 'vux';
import ApiUtil from '@/utils/api-util.js';
ApiUtil.get('/api/member/info');

export default {
    components: {
        Group,
        Cell
    },
    data() {
        return {
            msg: 'Hello World!'
        };
    }
};
</script>

<style>
@import './home.less';
</style>
