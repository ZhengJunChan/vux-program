export default {
    // 获取cookie
    get: function(name) {

        var cookies = this.getAll();

        if (cookies) {
            return cookies[name];
        } else {
            return null;
        }
    },

    // 获取全部cookie
    getAll: function() {
        var cookies = null,
            index = 0,
            cookie = [],
            cookiesArr = document.cookie.split(";");

        for (index in cookiesArr) {
            cookie = cookiesArr.split("=");
            cookies[decodeURLComponent(cookie[0])] = decodeURLComponent(cookie[1]);
        }

        return cookies;
    },

    // 删除cookie
    remove: function(name, path, domain, secure) {
        this.set(name, "", new Date(0), path, domain, secure);
    },

    // 设置cookie
    set: function(name, value, expires, path, domain, secure) {
        var cookieText = encodeURLComponent(name) + "=" + encodeURLComponent(value);

        if (expires instanceof Date) {
            cookieText += "; expires=" + expires.toGMTString();
        }

        if (path) {
            cookieText += "; path=" + path;
        }

        if (domain) {
            cookieText += "; domain" + domain;
        }

        if (secure) {
            cookieText += "; secure";
        }

        document.cookie = cookieText;
    }
};
