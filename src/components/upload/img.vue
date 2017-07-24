<!-- [upload_img_component 上传图片插件]   @Author: 郑君婵   @DateTime: 2017-07-19 -->
<template>
    <div class="upload_component upload_img_component clear_float">
        <div v-for="(file, index) in fileList" :id="file.id" class="file_item grey_circle_box thumbnail">
            <img :src="file.src">
            <span class="delete_btn" @click="remove(index, file.id)">
                <img src="./images/icon_delete.png">
            </span>
        </div>
        <div id="filePicker" class="upload_btn grey_circle_box" v-show="fileList.length<limitNum">
            添加图片(0/{{limitNum}})
        </div>
    </div>
</template>

<script>
import config from './config.js';

export default {
    props: {
        // 是否自动上传
        auto: {
            type: Boolean,
            default: true
        },
        // 限制上传的图片个数
        limitNum: {
            type: Number,
            default: 9
        }
    },
    data() {
        return {
            uploader: {},
            fileList: []
        }
    },
    watch: {
        fileList: function(val) {
            let textTip = '添加图片(' + val.length + '/' + this.limitNum + ')';

            $('#filePicker').find('.webuploader-pick').text(textTip);
        }
    },
    mounted(){
        let _this = this;

        this.uploader = WebUploader.create({
            auto: this.auto, // 选完文件后，是否自动上传。
            swf: config.swf, // swf文件路径
            server: config.img.api, // 上传接口
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
        this.uploader.on( 'fileQueued', function( file ) {
            // 创建缩略图
            // 如果为非图片文件，可以不用调用此方法。
            // thumbnailWidth x thumbnailHeight 为 100 x 100
            _this.uploader.makeThumb( file, function( error, src ) {
                if ( error ) {
                    return;
                }

                file.src = src;
            }, config.img.thumbnailWidth, config.img.thumbnailHeight);
        });

        // 文件上传成功，给item添加成功class, 用样式标记上传成功。
        this.uploader.on( 'uploadSuccess', function( file ) {
            _this.fileList.push(file);
            _this.imgListChange()
        });

        // 文件上传失败，显示上传出错。
        this.uploader.on( 'uploadError', function( file ) {
            var $li = $( '#'+file.id ),
                $error = $li.find('div.error');

            // 避免重复创建
            if ( !$error.length ) {
                $error = $('<div class="error"></div>').appendTo( $li );
            }

            $error.text('上传失败');
        });
    },
    methods: {
        remove (index, fileId) {
            this.fileList.splice(index, 1);
            this.uploader.removeFile(fileId, true);

            this.imgListChange();
        },
        imgListChange () {
            this.$emit('img-list-change', this.fileList);
        }
    }
};
</script>

<style lang="less">
@import './upload.less';
</style>