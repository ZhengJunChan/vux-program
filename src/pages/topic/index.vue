<template>
  <div class="topic_page">
    话题
  </div>
</template>

<script>
import { Group, Cell } from 'vux';

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
@import './topic.less';
</style>
