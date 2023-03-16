import { evaluationService } from 'src/api/services/evaluationService/evaluationService'

export const Endpoints = {
  generate: {
    product: {
      wb: '/generate/product/wb/',
      ozon: '/generate/product/ozon/',
      amazon: '/generate/product/amazon/',
    },
    post: {
      telegram: '/generate/post/telegram'
    },
    title: {
      tiktok: '/generate/tiktok/title'
    }
  },
  evaluation: '/evaluation/',
  post: {
    text: '/rewrite/news'
  },
  rewrite: {
    text: '/rewrite/text'
  },
  docs : {
    getAll: '/docs',
    getOne: '/docs',
    create: '/docs',
    save: '/docs',
    add: '/docs/add'
  },
  auth: {
    singInWithPasswordAndEmail: '/auth/sign-in',
    signInWithToken: '/auth/token',
    signUpWithPasswordAndEmail: '/auth/sign-up',
  },
  user: {
    fetchUserById: '/user/',
    fetchBalance: '/balance/own',
    fetchStatistic: '/user/statistic'
  },
  admin: {
    users: '/admin/users',
    statistic: '/admin/statistic',
    history: '/admin/history',
  },
  service: {
    schema: '/services/schema/',
    history: '/services/history/'
  }
}