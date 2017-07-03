<template>
<div class="swiper_page">
    <swiper :aspect-ratio="200/200" :list="demo01_list"></swiper>
</div>
</template>

<script>
import { SwiperItem } from 'vux';
import { Swiper } from '@/components';

const baseList = [{
  url: 'javascript:',
  img: 'https://static.vux.li/demo/1.jpg',
  title: '送你一朵fua'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/2.jpg',
  title: '送你一辆车'
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/3.jpg',
  title: '送你一次旅行'
}]


export default {
    components: {
        Swiper,
        SwiperItem
    },
    data() {
    	return {
    		demo01_list: baseList
    	}
    },
    mounted() {
      //   var test = {};
      // function Person(){
      //   this.height = 60;
      // }
      // Person.prototype.name = "Nicholas";
      // Person.prototype.age = 29;
      // Person.prototype.job = "Software Engineer";
      // Person.prototype.sayName = function(){
      //     alert(this.height);
      // };
      // Person.sex = 'girl';

      // var person1 = new Person();
      // var person2 = new Person();

      // person1.sayName();
      // // console.log(test);
      // console.log(person1);

      // person1.name = "Greg";
      // alert(Person.hasOwnProperty("name"));//false
      // alert("name" in Person);//true

      // alert(person1.name);//"Greg"
      // alert(person1.hasOwnProperty("name"));//true
      // alert("name" in person1);//true

      // delete person1.name;
      // alert(person1.name);//"Nicholas"
      // alert(person1.hasOwnProperty("name"));//false
      // alert("name" in person1);//true
        // var a = 5;
        // function fn(){
        //     a = 0 ;
        //     alert(a);
        //     var a;
        //     // alert(this.a)
        //     console.log(this);
        // }

        // fn();
        // new fn();
    }
};
</script>

<style lang="less">
@itemColor: #ff7982;

.swiper_page{
  width: 400px;
  .vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-swiper-desc{
  	padding-bottom: 30px;
  }
}
</style>
