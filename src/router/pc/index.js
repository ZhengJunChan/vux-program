const pc = {
    path: '/pc',
    component: resolve => require(['@/moduls/pc'], resolve),
    children: [{
        path: 'home',
        component: resolve => require(['@/moduls/pc/home'], resolve)
    }]
};

export default pc;
