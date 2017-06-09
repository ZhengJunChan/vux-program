const pc = {
    path: '/pc',
    component: resolve => require(['@/moduls/pc'], resolve),
    children: [{
        path: 'home',
        component: resolve => require(['@/moduls/pc/home'], resolve)
    }]
};

console.log('pc');

export default pc;
