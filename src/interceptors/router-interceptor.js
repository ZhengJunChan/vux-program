/*  获取token Created by 郑君婵 on 2017-05-25  */

/**
 * [setAppRouter app页面跳转时，加上token及app]
 * @Author   郑君婵
 * @DateTime 2017-06-01
 * @param    {object}   to   [页面跳转后组件信息]
 * @param    {object}   from [页面跳转前组件信息]
 * @param    {Function} next [出发页面跳转的方法]
 */
function setAppRouter(to, from, next) {
    if (!to.query.app && from.query.app) {
        to.query.app = from.query.app;
    }

    if (!to.query.token && from.query.token) {
        to.query.token = from.query.token;
    }
    
    window.localStorage.setItem('token', to.query.token);

    next();
}

export default function (router, vue) {
    router.beforeEach((to, from, next) => {
        // 如果页面在app中打开
        if (to.query.app || from.query.app) {
            setAppRouter(to, from, next);
        }

        // next();
        // if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
        //     if (store.state.token) { // 通过vuex state获取当前的token是否存在
        //         next();
        //     } else {
        //         next({
        //             path: '/login',
        //             query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
        //         })
        //     }
        // } else {
        //     next();
        // }
    });
};
