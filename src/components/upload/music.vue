<!-- [upload_music_component 上传音乐插件]   @Author: 郑君婵   @DateTime: 2017-07-19 -->
<template>
    <div class="upload_component upload_music_component">
        <!--   初始化   -->
        <div :class="fileList.length ? 'success_box' : 'init_box'">
            <div id="musicQueueList" class="music_query">
                <p class="desc tip_text">（支持mp3,wma,wav,m4a,ape,flac主流音频文件，最大不超过50m，最低码率128kbps）</p>
            </div>
            <div class="success_file" v-for="(file, index) in fileList">
                <p class="file_name">
                    上传完成：<span v-text="file.name"></span>
                </p>
                <p class="file_size" v-text="(file.size/1024/1024).toFixed(1) + 'bm'"></p>
            </div>
            <div class="upload_btn">
                <div id="uploadMusic"></div>
            </div>
        </div>
        <!--   /  初始化   -->

        <!--   上传完成   -->
        <!-- <div class="success_box"  v-show="fileList.length">
            <div>
                <button class="reupload" @click="reUpload">重新上传</button>
            </div>
        </div> -->
        <!--   /  上传完成   -->
    </div>
</template>

<script>
import config from './config.js';

export default {
    props: {
        auto: {
            type: Boolean,
            default: true
        }
    },
    data() {
        return {
            limitNum: 1,
            fileList: [],
            uploader: {}
        }
    },
    watch: {
        fileList: function(val) {
            let textTip = '重新上传';

            $('#uploadMusic').find('.webuploader-pick').text(textTip);
            $('.upload_music_component>div').removeClass('init_box');
            $('.upload_music_component>div').addClass('success_box');
        }
    },
    mounted(){
        let _this = this;

        this.uploader = WebUploader.create({
            auto: _this.auto,
            swf: config.swf,
            server: config.music.api,
            accept: config.music.accept,
            pick: {
                id: '#uploadMusic',
                label: '拖拽或点击上传音乐'
            },
            paste: document.body,
            disableGlobalDnd: true,   // 是否允许拖拽
            dnd: '#musicQueueList',   // 允许拖拽事件的div
            fileNumLimit: _this.limitNum, // 限制上传文件个数
            fileSingleSizeLimit: 50 * 1024 * 1024 // 50 M
        });

        // 当有文件添加进来的时候
        this.uploader.on( 'fileQueued', function( file ) {
            console.log(file)
        });

        // 文件上传过程中创建进度条实时显示。
        this.uploader.on( 'uploadProgress', function( file, percentage ) {
            var $li = $( '#'+file.id ),
                $percent = $li.find('.progress .progress-bar');

            // 避免重复创建
            if ( !$percent.length ) {
                $percent = $('<div class="progress progress-striped active">' +
                  '<div class="progress-bar" role="progressbar" style="width: 0%">' +
                  '</div>' +
                '</div>').appendTo( $li ).find('.progress-bar');
            }

            $li.find('p.state').text('上传中');

            $percent.css( 'width', percentage * 100 + '%' );
        });

        this.uploader.on( 'uploadSuccess', function( file ) {
            _this.fileList = [];
            _this.fileList.push(file);
        });

        this.uploader.on( 'uploadError', function( file ) {
            $( '#'+file.id ).find('p.state').text('上传出错');
        });

        this.uploader.on( 'uploadComplete', function( file ) {
            _this.uploader.reset();
        });
    },
    methods: {
        reUpload: function (uploadFile) {
            this.uploader.removeFile(this.fileList[0], true);
            this.fileList = [];

            this.uploader.upload();
        }
    }
};
</script>

<style lang="less">
@import './upload.less';
.queueList{
    background: red;
    height: 100px;
}
</style>