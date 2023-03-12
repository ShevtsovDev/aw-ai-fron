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
  post: {
    text: '/rewrite/news'
  },
  rewrite: {
    text: '/rewrite/text'
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