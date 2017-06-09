<template>
    <div class="app">
	    <p>
		    <!-- 使用 router-link 组件来导航. -->
		    <!-- 通过传入 `to` 属性指定链接. -->
		    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
		    <router-link to="/pc">Go to Foo</router-link>
		    <router-link to="/pc/home">Go to Bar</router-link>
	    </p>
    	<router-view></router-view>
    </div>
</template>
