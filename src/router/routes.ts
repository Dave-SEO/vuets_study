import Home from '../views/Home.vue'; // 注意这里的路径，有原来的./开头改为../，因为此时views文件夹在routes.ts文件所在文件夹的上一级

export default [
  {
    path: '/',
    component: () => import('@/components/TMain/index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: Home,
      },
      {
          path: '/about',
          name: 'about',
          component: () => import('../views/About.vue'),
      },
    ],
  },
  {
      path: '/login',
      name: 'name',
      component : () => import('@/views/login/index'),
  },
];
