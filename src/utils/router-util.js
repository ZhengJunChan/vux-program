export default {
    /**
     * http get 请求
     * @Author   郑君婵
     * @DateTime 2017-05-24
     * @param {string} url    [参考request.url]
     * @param {Object} params [参考request.params]
     * @returns {promise}     [参考 request 返回值]
     */
    go: function (url, $router) {
        if (/^javas/.test(url) || !url) {
            return;
        }

        const useRouter = typeof url === 'object' || ($router && typeof url === 'string' && !/http/.test(url));

        if (useRouter) {
            $router.push(url);
        } else {
            window.location.href = url;
        }
    },
    /**
     * http post 请求
     * @Author   郑君婵
     * @DateTime 2017-05-24
     * @param {string} url    [参考request.url]
     * @param {Object} params [参考request.params]
     * @returns {promise}     [参考 request 返回值]
     */
    getUrl: function (url, $router) {
        // Make sure the href is right in hash mode
        if ($router && !$router._history && typeof url === 'string' && !/http/.test(url)) {
            return `#!${url}`;
        }

        return url && typeof url !== 'object' ? url : 'javascript:void(0);';
    }
};
