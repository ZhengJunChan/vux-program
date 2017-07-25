<!-- [upload_music_component 上传音乐插件]   @Author: 郑君婵   @DateTime: 2017-07-19 -->
<template>
    <div class="upload_component upload_music_component">
        <!--   初始化   -->
        <div class="init_box">
        <!-- <div :class="fileList.length ? 'success_box' : 'init_box'" class="init_box"> -->
            <div id="musicQueueList" class="music_query">
                <p class="desc tip_text">（支持mp3,wma,wav,m4a,ape,flac主流音频文件，最大不超过50m，最低码率128kbps）</p>
            </div>
            <div class="success_file" v-for="(file, index) in fileList">
                <p class="file_name">
                    <span v-text="currentStatus.text"></span>
                    <span v-text="file.name"></span>
                </p>
                <p class="file_size" v-html="currentStatus.tip"></p>
            </div>
            <!-- <div class="success_file">
                <p class="file_name">
                    <span>正在上传：</span>
                    <span>crfdgfvrde</span>
                </p>
                <p class="file_size">已上传38%&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.3mb/12.3mb&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;657kb/s</p>
            </div> -->
            <div class="upload_btn">
                <div id="uploadMusic"></div>
            </div>
            <div class="progress active" v-show="currentStatus.class === status.progress.class">
                <div class="progress-bar" role="progressbar" :style="{width: status.progress.percentage}"></div>
            </div>
        </div>
    </div>
</template>

<script>
import config from './config.js';
import { CommonUtil } from '@/utils';

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
            uploader: {},
            progress: {
                tag: '0%'
            },
            status: {
                init: {
                    class: 'init_box',
                    text: '支持mp3,wma,wav,m4a,ape,flac主流音频文件，最大不超过50m，最低码率128kbps'
                },
                progress: {
                    class: 'progress_box',
                    text: '正在上传：',
                    percentage: '0%',
                    tip: ''
                },
                success: {
                    class: 'success_box',
                    text: '上传成功：',
                    tip: ''
                },
                error: {
                    class: 'error_box',
                    text: '失败原因：',
                    tip: '支持mp3,wma,wav,m4a,ape,flac主流音频文件，最大不超过50m，最低码率128kbps'
                }
            },
            currentStatus: {},
            speed: {
                start: 0,
                end: 0
            }
        }
    },
    watch: {
        fileList: function(val) {
            let textTip = '重新上传';

            $('#uploadMusic').find('.webuploader-pick').text(textTip);
            // $('.upload_music_component>div').removeClass('init_box');
            // $('.upload_music_component>div').addClass('success_box');
        }
    },
    mounted(){
        let _this = this;
        this.currentStatus = CommonUtil.deepCopy(this.status.init);
        console.log()

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
        this.uploader.on('fileQueued', this.updataFileList);

        this.uploader.on('startUpload', function () {
            _this.speed.start = (new Date()).valueOf();
        })

        // 文件上传过程中创建进度条实时显示。
        this.uploader.on('uploadProgress', this.onProgress);

        this.uploader.on('uploadSuccess', this.onSuccess);

        this.uploader.on( 'uploadError', this.onError);

        this.uploader.on( 'uploadComplete', function( file ) {
            _this.uploader.reset();
        });
    },
    methods: {
        /**
         * [onProgress 正在上传回调]
         * @Author   郑君婵
         * @DateTime 2017-07-25
         * @param    {[type]}   file       [上传文件对象]
         * @param    {[type]}   percentage [上传进度百分比]
         */
        onProgress: function(file, percentage) {
            this.speed.end = (new Date()).valueOf();
            this.setStatus('progress');
            

            let kbSize = file.size / 1024;
            let mbSize = kbSize / 1024;
            let speed = (kbSize * percentage / (this.speed.end - this.speed.start) * 1000).toFixed(1);
            let uploadedSize = (mbSize * percentage).toFixed(1);
            // 设置进度条进度
            this.status.progress.percentage = parseInt(percentage * 100) + '%';

            this.currentStatus.tip = '已上传' + this.status.progress.percentage + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + uploadedSize + 'mb/' + mbSize.toFixed(1) + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + speed + 'kb/s';
        },
        /**
         * [onSuccess 上传成功回调]
         * @Author   郑君婵
         * @DateTime 2017-07-25
         * @param    {[type]}   file [description]
         * @return   {[type]}        [description]
         */
        onSuccess: function(file) {
            console.log(file)
            this.status.success.tip = (file.size / 1024 / 1024).toFixed(1) + 'mb';
            // 更新当前状态
            this.setStatus('success');
        },
        /**
         * [onError 上传失败回调]
         * @Author   郑君婵
         * @DateTime 2017-07-25
         * @param    {[type]}   file [description]
         * @return   {[type]}        [description]
         */
        onError: function(file, reason) {
            this.status.success.tip = reason;
            // 更新当前状态
            this.setStatus('error');
        },
        updataFileList: function(file) {
            this.fileList = [];
            this.fileList.push(file);
        },
        setStatus: function(status) {
            let oldClass = this.currentStatus.class;

            // 更新当前状态
            this.currentStatus = CommonUtil.deepCopy(this.status[status]);

            if (this.currentStatus.class !== oldClass) {
                $('.upload_music_component>div').addClass(this.currentStatus.class).removeClass(oldClass);
            }

        },
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