<template>
<div class="full_page">
    <full-page>
    </full-page>
</div>
</template>

<script>
import { FullPage } from '@/components';

export default {
    components: {
        FullPage
    },
    data() {
        return {
        }
    },
    mounted() {
    },
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
    }
};
</script>

<style type="text/css">
   /*  分页  */

.full_page {
  position: fixed;
  top: 0;
  overflow: hidden;
  .page_contain {
    overflow: hidden;
  }
  .page {
    width: 100%;
    height: 100%;
    display: none;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
  }
  .slide {
    display: block;
    z-index: 2;
  }
  .contain {
    width: 100%;
    height: 100%;
    display: none;
    position: relative;
    z-index: 0;
  }
  .current .contain,
  .slide .contain {
    display: block;
  }
  .current {
    display: block;
    z-index: 1;
  }
  .nav_bar {
    z-index: 3;
    position: absolute;
    top: 10%;
    right: 3%;
    .active {
      background: #ccc;
    }
    li {
      cursor: pointer;
      margin-bottom: 10px;
      transition: all .7s ease;
      border-radius: 50%;
      line-height: 40px;
      text-align: center;
      width: 40px;
      height: 40px;
    }
  }
}

</style>
