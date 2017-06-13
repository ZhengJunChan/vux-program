<template>
	<div class="home_page">
		<thinking title="今天要吃什么呢？"></thinking>
		<div class="food_type">
			<div>
				<img src="./../../../imgs/barbecue.png">
			</div>
			<div>
				<img src="./../../../imgs/home-dishes.png">
			</div>
			<div>
				<img src="./../../../imgs/hot-pot.png">
			</div>
		</div>
	</div>
</template>

<script>
    import { Thinking } from '@/components'
    export default {
        components: {
        	Thinking
        }
    };
</script>

<style  lang="less">
	.home_page{
		h2{
			text-align: center;
		}
		.choose_box{
		}
		.food_type{
			display: flex;
			max-width: 400px;
			margin: 15px auto;
			justify-content: space-between;
		}
	}
</style>
