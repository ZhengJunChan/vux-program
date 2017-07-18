<template>
    <div class="home_page">
        <group title="乱搞">
            <cell title="吃神马！" value="吃神马！" link="/pc/dinner"></cell>
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
