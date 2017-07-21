<template>
	<content-layout>
		<nav-list slot="left" :navs="navs"></nav-list>
		<router-view slot="right"></router-view>
	</content-layout>
</template>

<script>
import { navList } from './data.js';
import { NavList, ContentLayout } from '@/components';

export default {
    components: {
    	NavList,
        ContentLayout
    },
    data() {
    	return {
    		navs: navList
    	}
    }
};
</script>

<style lang="less">
</style>
