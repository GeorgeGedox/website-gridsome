import DefaultLayout from '~/layouts/App.vue'
import '~/assets/sass/main.scss'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // OpenGraph url meta
  router.beforeEach((to, _from, next) => {
    head.meta.push({
      key: 'og:url',
      name: 'og:url',
      content: process.env.GRIDSOME_APP_URL + to.path,
    })
    next()
  })

  // Umami tracking code
  if (process.env.GRIDSOME_UMAMI_ID) {
    head.script.push({
      src: process.env.GRIDSOME_UMAMI_SCRIPT_URL,
      async: true,
      defer: true,
      "data-website-id": process.env.GRIDSOME_UMAMI_ID,
    })
  }
}
