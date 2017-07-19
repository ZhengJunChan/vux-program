<template>
    <div class="home_page">
        <group title="组件">
            <cell title="Swiper" value="图片轮播" link="/component/swiper"></cell>
            <cell title="pagination" value="分页" link="/component/pagination"></cell>
            <cell title="content-layout" value="左右布局" link="/component/content-layout"></cell>
            <cell title="upload" value="上传" link="/component/upload"></cell>
        </group>
        <group title="util-api">
            <cell title="CommonUtil" link="/component/pagination"></cell>
        </group>
    </div>
</template>

<script>
import { CommonUtil } from '@/utils';
import { Group, Cell } from 'vux';

export default {
    components: {
        Group,
        Cell
    }
};
</script>
