<template>
<div class="copy_paste_page">
  <input type="text" id="copyText" v-model="webUrl">
	<input @click="copyCode('copyText')" type="button" value="复制">
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
          webUrl: '测试复制'
        }
    },
    mounted() {
    },
    methods: {
        copyCode(id) {
            let url = document.getElementById(id);
            url.select(); // 选择对象

            document.execCommand("Copy"); // 执行浏览器复制命令
            alert("已复制好，可贴粘。");
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
