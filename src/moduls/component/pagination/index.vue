<template>
<div class="pagination_page">
    <pagination :pagination="pagination" :configs="paginationConfigs" :callback="loadData"></pagination>
</div>
</template>

<script>
import { Pagination } from '@/components';

export default {
    components: {
        Pagination
    },
    data() {
        return {
            pagination: {
                total: 321, // 总页数
                per_page: 24, // 每页显示条数
                current_page: 1, // 当前页
                last_page: 321 // 最后一页
            },
            paginationConfigs: {
                offset: 2, // 左右偏离多少个页面按钮
                previousText: '上一页', // 上一页按钮显示文字
                nextText: '下一页', // 下一页按钮显示文字
                alwaysShowPrevNext: true // 是否显示上一页、下一页按钮
            }
        }
    },
    mounted() {},
    methods: {
        loadData() {
          // alert('ss')
            // let options = {
            //     params: {
            //         paginate: this.pagination.per_page,
            //         page: this.pagination.current_page,
            //         /* additional parameters */
            //     }
            // };

            // this.$http.get('/getData', options).then(response => {
            //     this.items = response.data.data;

            //     // Overwrite pagination object 
            //     this.pagination = response.data.pagination; // API response edited to have pagination data under pagination object 

            //     // Or overwrite only values 
            //     /*
            //       this.pagination.current_page = response.data.current_page;
            //       this.pagination.last_page = response.data.last_page;
            //       ...
            //     */
            // }, error => {
            //     // handle error 
            // });
        }
    },
};
</script>

<style lang="less">
.pagination{
  
}
</style>
