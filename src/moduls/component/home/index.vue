<template>
    <div class="home_page">
        <group title="组件">
            <cell title="content-layout" value="左右布局" link="/component/content-layout"></cell>
            <cell title="fullpage" value="单页滚动" link="/component/fullpage"></cell>
            <cell title="pagination" value="分页" link="/component/pagination"></cell>
            <cell title="Swiper" value="图片轮播" link="/component/swiper"></cell>
            <cell title="upload-img" value="上传图片" link="/component/upload-img"></cell>
            <cell title="upload-music" value="上传音乐" link="/component/upload-music"></cell>
            <cell title="粘贴复制" value="粘贴复制" link="/component/copy-paste"></cell>
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
