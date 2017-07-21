<!-- [upload_music_component 上传音乐插件]   @Author: 郑君婵   @DateTime: 2017-07-19 -->
<template>
    <div class="upload_component upload_music_component">
        <div id="uploader" class="wu-example">
		    <!--用来存放文件信息-->
		    <div id="thelist" class="uploader-list"></div>
            <!--用来存放item-->
            <div>
                <div v-for="file in fileList" :id="file.id" class="item">
                    <img :src="file.src" v-if="file.src">
                    <span v-if="!file.src">不能预览</span>
                    <div class="info" v-text="file.name"></div>

                    <h4 class="info" v-text="file.name"></h4>
                    <p class="state">等待上传...</p>
                </div>
            </div>
		    <div class="btns">
		        <div id="picker">选择文件</div>
		    </div>
		</div>
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
            fileList: []
        }
    },
    mounted(){
        let _this = this;
        let uploader = WebUploader.create({
            auto: true,
            swf: config.swf, // swf文件路径
            server: config.musicApi, // 上传接口
            resize: false, // 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！

            // 选择文件的按钮。可选。
            // 内部根据当前运行是创建，可能是input元素，也可能是flash.
            pick: '#picker',

            // 只允许选择图片文件。
            accept: {
                title: 'Musics',
                extensions: 'mp3,wma,wav,m4a,ape,flac',
                mimeTypes: 'audio/*'
            },
        });

        // 当有文件添加进来的时候
        uploader.on( 'fileQueued', function( file ) {
            console.log(file)
            _this.fileList.push(file);
        });

        // 文件上传过程中创建进度条实时显示。
        uploader.on( 'uploadProgress', function( file, percentage ) {
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

        uploader.on( 'uploadSuccess', function( file ) {
            $( '#'+file.id ).find('p.state').text('已上传');
        });

        uploader.on( 'uploadError', function( file ) {
            $( '#'+file.id ).find('p.state').text('上传出错');
        });

        uploader.on( 'uploadComplete', function( file ) {
            $( '#'+file.id ).find('.progress').fadeOut();
        });
    }
};
</script>

<style lang="less">
@import './upload.less';
</style>