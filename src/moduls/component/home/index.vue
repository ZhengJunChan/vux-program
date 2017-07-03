<template>
    <div class="home_page">
        <group title="demo">
            <cell title="Swiper" value="图片轮播" link="/component/swiper"></cell>
        </group>
        <group title="demo">
            <cell title="pagination" value="分页" link="/component/pagination"></cell>
        </group>
    </div>
</template>

<script>
import { Group, Cell } from 'vux';

export default {
    components: {
        Group,
        Cell
    }
};
</script>
