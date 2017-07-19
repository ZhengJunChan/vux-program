<!-- [upload_img_component 上传图片插件]   @Author: 郑君婵   @DateTime: 2017-07-19 -->
<template>
    <div class="upload_img_component">
        <!--dom结构部分-->
        <div id="uploader-demo">
            <!--用来存放item-->
            <div id="fileList" class="uploader-list"></div>
            <div id="filePicker">选择图片</div>
        </div>
    </div>
</template>

<script>
import {ApiUtil} from '@/utils';
export default {
    mounted(){
        var uploader = WebUploader.create({

            // 选完文件后，是否自动上传。
            auto: true,

            // swf文件路径
            swf: '/static/libs/Uploader.swf',

            // 文件接收服务端。
            server: '/files/image/upload',

            // 选择文件的按钮。可选。
            // 内部根据当前运行是创建，可能是input元素，也可能是flash.
            pick: '#filePicker',

            // 只允许选择图片文件。
            accept: {
                title: 'Images',
                extensions: 'gif,jpg,jpeg,bmp,png',
                mimeTypes: 'image/*'
            }
        });
    }
};
</script>

<style lang="less">
@import './upload.less';
</style>