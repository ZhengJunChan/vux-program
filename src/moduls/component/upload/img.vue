<template>
<div class="upload_page">
    <upload-img></upload-img>
</div>
</template>

<script>
import { UploadImg } from '@/components';

export default {
    components: {
        UploadImg
    },
    data() {
    	return {
    		// demo01_list: baseList
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
// @itemColor: #ff7982;

// .upload{
//   width: 400px;
//   .vux-slider > .vux-swiper > .vux-swiper-item > a > .vux-swiper-desc{
//   	padding-bottom: 30px;
//   }
// }
</style>
