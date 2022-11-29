import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/Home'),
  },
  {
    path: '/view-case',
    name: 'viewCase',
    component: () => import('../components/Cases/ListCase'),
  },
  {
    path: '/edit-case/:id',
    name: 'editCase',
    component: () => import('../components/Cases/EditCase'),
  },
  {
    path: '/create-case',
    name: 'createCase',
    component: () => import('../components/Cases/CreateCase'),
  },

  {
    path: '/create-judge',
    name: 'createJudge',
    component: () => import('../components/Judges/CreateJudge'),
  },
  {
    path: '/view-judge',
    name: 'viewJudge',
    component: () => import('../components/Judges/ListJudge'),
  },
  {
    path: '/edit-judge/:id',
    name: 'editJudge',
    component: () => import('../components/Judges/EditJudge'),
  },

  {
    path: '/create-user',
    name: 'createUser',
    component: () => import('../components/Users/CreateUser'),
  },
  {
    path: '/view-user',
    name: 'viewUser',
    component: () => import('../components/Users/ListUser'),
  },
  {
    path: '/edit-user/:id',
    name: 'editUser',
    component: () => import('../components/Users/EditUser'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
