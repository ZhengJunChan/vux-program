<!-- [upload_img_component 上传图片插件]   @Author: 郑君婵   @DateTime: 2017-07-19 -->
<template>
    <div class="upload_component upload_img_component">
        <!--用来存放item-->
        <div>
            <div v-for="file in fileList" :id="file.id" class="file-item thumbnail">
                <img :src="file.src" v-if="file.src">
                <span v-if="!file.src">不能预览</span>
                <div class="info" v-text="file.name"></div>
            </div>
        </div>
        <div id="filePicker">选择图片</div>
    </div>
</template>

<script>
import config from './config.js';

export default {
    props: {
        auto: {
            type: Boolean,
            default: true
        },
        limitNum: {
            type: Number,
            default: 1
        }
    },
    data() {
        return {
            fileList: []
        }
    },
    mounted(){
        let _this = this;
        let uploader = WebUploader.create({
            auto: this.auto, // 选完文件后，是否自动上传。
            swf: config.swf, // swf文件路径
            server: config.imgApi, // 上传接口
            fileNumLimit: _this.limitNum, // 限制上传文件个数

            // 选择文件的按钮。可选。
            // 内部根据当前运行是创建，可能是input元素，也可能是flash.
            pick: '#filePicker',

            // 只允许选择图片文件。
            accept: {
                title: 'Images',
                extensions: 'gif,jpg,jpeg,bmp,png',
                mimeTypes: 'image/*'
            },

            thumb: {
                width: 100,
                height: 100,
                quality: 70,
                crop: true
            }
        });

        // 当有文件添加进来的时候
        uploader.on( 'fileQueued', function( file ) {
            console.log(file);
            let thumbnailWidth = 100;
            let thumbnailHeight = 100;

            // 创建缩略图
            // 如果为非图片文件，可以不用调用此方法。
            // thumbnailWidth x thumbnailHeight 为 100 x 100
            uploader.makeThumb( file, function( error, src ) {
                if ( error ) {
                    return;
                }

                file.scr = src;
            }, thumbnailWidth, thumbnailHeight );
            console.log(_this.fileList);
            _this.fileList.push(file);
        });

        // 文件上传成功，给item添加成功class, 用样式标记上传成功。
        uploader.on( 'uploadSuccess', function( file ) {
            $( '#'+file.id ).addClass('upload-state-done');
        });

        // 文件上传失败，显示上传出错。
        uploader.on( 'uploadError', function( file ) {
            var $li = $( '#'+file.id ),
                $error = $li.find('div.error');

            // 避免重复创建
            if ( !$error.length ) {
                $error = $('<div class="error"></div>').appendTo( $li );
            }

            $error.text('上传失败');
        });
    }
};
</script>

<style lang="less">
@import './upload.less';
</style>