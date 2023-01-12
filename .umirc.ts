import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  exportStatic: {
    htmlSuffix: true,
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    {
      path: '/test',
      component: '@/pages/testa' 
    },
    {
      component: '@/pages/404' 
    }
  ],
  fastRefresh: {},
});
