<template>
<div class="thinking_component">
    <p v-text="title"></p>
    <img src="./imgs/thinking.gif">
</div>
</template>

<script>
export default {
	props: {
        title: [String]
    }
};
</script>

<style lang="less">
.thinking_component{
    text-align: center;
}
</style>