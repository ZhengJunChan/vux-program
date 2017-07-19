const dinner = {
  path: 'dinner',
  component: resolve => require(['@/moduls/pc/dinner'], resolve),
  children: [{
    path: 'random',
    component: resolve => require(['@/moduls/pc/dinner/random'], resolve)
  }, {
    path: 'breakfast',
    component: resolve => require(['@/moduls/pc/dinner/breakfast'], resolve)
  }, {
    path: 'home-cooking',
    component: resolve => require(['@/moduls/pc/dinner/home-cooking'], resolve)
  }, {
    path: 'hot-pot',
    component: resolve => require(['@/moduls/pc/dinner/hot-pot'], resolve)
  }, {
    path: 'barbecue',
    component: resolve => require(['@/moduls/pc/dinner/barbecue'], resolve)
  }, {
    path: 'snack',
    component: resolve => require(['@/moduls/pc/dinner/snack'], resolve)
  }]
};

export default dinner;
