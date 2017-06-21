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
        path: 'scroller',
        component: resolve => require(['@/moduls/component/scroller'], resolve)
    }]
};

export default component;
