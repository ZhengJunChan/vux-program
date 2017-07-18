<template>
	<content-layout margin="0 400px" height="100vh">
		<div slot="left">左边栏内容</div>
		<div slot="right">右边栏内容</div>
	</content-layout>
</template>

<script>
import { ContentLayout } from '@/components';

export default {
    components: {
        ContentLayout
    }
};
</script>