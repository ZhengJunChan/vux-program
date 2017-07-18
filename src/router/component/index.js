const component = {
    path: '/component',
    component: resolve => require(['@/moduls/component'], resolve),
    children: [{
        path: '',
        component: resolve => require(['@/moduls/component/home'], resolve)
    }, {
        path: 'swiper',
        component: resolve => require(['@/moduls/component/swiper'], resolve)
    }, {
        path: 'pagination',
        component: resolve => require(['@/moduls/component/pagination'], resolve)
    }, {
        path: 'scroller',
        component: resolve => require(['@/moduls/component/scroller'], resolve)
    }, {
        path: 'content-layout',
        component: resolve => require(['@/moduls/component/content-layout'], resolve)
    }]
};

export default component;
