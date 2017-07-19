import dinner from './dinner.js';

const pc = {
    path: '/pc',
    component: resolve => require(['@/moduls/pc'], resolve),
    children: [{
        path: 'home',
        component: resolve => require(['@/moduls/pc/home'], resolve)
    },
    dinner
    ]
};

export default pc;
