<template>
    <div class="content_layout_component" :style="setStyle()">
	    <div class="left_layer">
	    	<slot name="left"></slot>
	    </div>
	    <div class="right_layer">
	    	<slot name="right"></slot>
	    </div>
    </div>
</template>

<script>
export default {
    props: {
    	height: String,
		margin: String
    },
    methods: {
    	setStyle () {
    		let style = {
    			height: this.height || '100%'
    		};

    		if (this.margin) {
    			style.margin = this.margin;
    		}

	        return style;
	    }
    }
};
</script>

<style lang="less">
@import './content-layout.less';
</style>
