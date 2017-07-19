<template>
	<div>
    	<tab-nav :navs="tabs" @tab-clicked="tabClicked"></tab-nav>
    	<div class="choose_panel">
    		<div>
		        <button @click="randomDishes">吃啥呢？</button>
		        <button @click="resetDishes">重置</button>
    		</div>
    		<ul>
    			<li v-for="dish in selectedDishes">
    				<a v-text="dish.name" :href="dish.link" target="_blank"></a>
    			</li>
    		</ul>
    	</div>
    </div>
</template>

<script>
import tabs from './data.js';
import { XButton } from 'vux'
import { CommonUtil } from '@/utils';
import { TabNav } from '@/components';

export default {
    components: {
    	TabNav,
    	XButton
    },
    data() {
    	return {
    		tabs: tabs, // 菜单栏
    		currentTabIndex: 0, // 当前选中菜单索引
    		selectedDishes: [], // 已选择菜品
    		dishes: [] // 可选菜品
    	}
    },
    created () {
    	this.init();
    },
    methods: {
    	init() {
    		this.resetDishes()
    	},
    	tabClicked (index) {
    		if (this.currentTabIndex === index) {
    			return;
    		}

    		this.currentTabIndex = index;
    		this.resetDishes();
	    },
	    randomDishes () {
	    	let index = CommonUtil.getRandom(0, this.dishes.length-1);

	    	this.selectedDishes.push(this.dishes[index]);
	    },
	    resetDishes(){
	    	this.selectedDishes = [];

    		this.dishes = CommonUtil.deepCopy(this.tabs[this.currentTabIndex].dishes);
	    }
    }
};
</script>

<style lang="less">
@import './../../../../styles/configs.less';
	.choose_panel{
		height: 100%;
		position: relative;
		padding: @normal-space @normal-space @normal-space @large-space;
	}
</style>
