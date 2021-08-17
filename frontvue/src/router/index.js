import Vue from 'vue'
import VueRouter from 'vue-router'

import NProgress from 'nprogress'



Vue.use(VueRouter)

const routes = [
   {
      path: '/',
      name: 'Criar Empregado',
      component: () => import('../components/pages/criarEmpregado/CriarEmpregado.vue')
   },
   {
      path: '/editar-empregado/:id',
      name: 'Atualizar Empregado',
      component: () => import('../components/pages/editarEmpregado/EditarEmpregado.vue')
   },
   {
      path: '/listar-empregado',
      name: 'Listar Empregados',
      component: () => import('../components/pages/listarEmpregado/ListarEmpregado')
   }
]

const router = new VueRouter({
   mode: 'history',
   base: process.env.BASE_URL,
   routes
})



router.beforeResolve((to, from, next) => {
   if (to.name) {
      // quando houver carregamento de uma página inicial, então usar o NProgress
      NProgress.start()
      
   }
   next()
})

router.afterEach(() => {  // router.afterEach((to, from) => {
   // completando a animação da rota do nprogress
   NProgress.done()
})




export default router



