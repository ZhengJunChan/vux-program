const component = {
    path: '/component',
    component: resolve => require(['@/moduls/component'], resolve),
    children: [{
        path: 'scroller',
        component: resolve => require(['@/moduls/component/scroller'], resolve)
    }]
};

export default component;
