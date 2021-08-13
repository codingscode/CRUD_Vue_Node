import Vue from 'vue'
import VueRouter from 'vue-router'


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

export default router



