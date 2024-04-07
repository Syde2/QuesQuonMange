
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/menu', component: () => import('pages/MenuPage.vue') },
      { path: '/ingredients', component: () => import('pages/IngredientsPage.vue') },
      { path: '/plats', component: () => import('pages/PlatsPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
