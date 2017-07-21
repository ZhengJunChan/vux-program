<template>
	<div>
    	<tab-nav :navs="tabs" @tab-clicked="tabClicked"></tab-nav>
    	<div class="choose_panel">
    		<!-- <flexbox>
                <flexbox-item>
                    <x-button type="primary" @click="randomDishes()">吃啥呢？</x-button>
                </flexbox-item>
                <flexbox-item>
                    <x-button type="warn" @click="resetDishes()">重置</x-button>
                </flexbox-item>
    		</flexbox> -->
            <button @click="randomDishes">吃啥呢？</button>
            <button @click="resetDishes">重置</button>
            <panel header="已选择菜品" :list="selectedDishes" type="1" v-show="selectedDishes.length"></panel>
    	</div>
    </div>
</template>

<script>
import tabs from './data.js';
import { XButton, Panel, Flexbox, FlexboxItem } from 'vux';
import { CommonUtil } from '@/utils';
import { TabNav } from '@/components';

export default {
    components: {
    	TabNav,
    	XButton,
        Panel,
        Flexbox,
        FlexboxItem
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
	    },
	    randomDishes () {
            let dishes = this.dishes[this.currentTabIndex].dishes;

            if (!dishes.length) {
                window.alert('当前无菜品可选');
                return;
            }

            let index = CommonUtil.getRandom(0, this.dishes.length-1);
            console.log(dishes[index])

	    	this.selectedDishes.push(dishes[index]);

            dishes.splice(index, 1);
	    },
	    resetDishes(){
	    	this.selectedDishes = [];

    		this.dishes = CommonUtil.deepCopy(this.tabs);
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
