const config = {
    swf: '/static/libs/Uploader.swf', // swf文件路径
    imgApi: '/files/image/upload',  // 图片上传接口
    img: {
    	api: '/files/image/upload',
    	thumbnailWidth: 100, // 缩略图的宽度
    	thumbnailHeight: 100, // 缩略图的高度
    },
    music: {
    	api: '/files/music/upload',  // 歌曲上传接口
    	thumbnailWidth: 100, // 缩略图的宽度
    	thumbnailHeight: 100, // 缩略图的高度
    	accept: {
            title: '支持类型wma,wav,ape,flac,mp3,m4a',
            extensions: 'mp3,wma,wav,m4a,ape,flac',
            mimeTypes: 'audio/*'
        },
    }
};

export default config;
