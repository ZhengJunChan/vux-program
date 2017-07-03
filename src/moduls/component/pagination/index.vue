<template>
<div class="pagination_page">
    <pagination :pagination="pagination" :callback="loadData" :options="paginationOptions"></pagination>
</div>
</template>

<script>
import { Pagination } from '@/components';
console.log(Pagination)

export default {
    components: {
        Pagination
    },
    data() {
        return {
            pagination: {
                total: 0,
                per_page: 12, // required 
                current_page: 1, // required 
                last_page: 2, // required 
                from: 1,
                to: 12 // required 
            },
            paginationOptions: {
                offset: 4,
                previousText: 'Prev',
                nextText: 'Next',
                alwaysShowPrevNext: true
            }
        }
    },
    mounted() {},
    methods: {
        loadData() {
          alert('ss')
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
