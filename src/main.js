import DefaultLayout from '~/layouts/App.vue'
import '~/assets/sass/main.scss'
import 'prismjs/themes/prism-tomorrow.css'

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

  // Microanalytics code
  if (process.env.GRIDSOME_MICROAN_ID) {
    head.script.push({
      src: "https://microanalytics.io/js/script.js",
      id: process.env.GRIDSOME_MICROAN_ID,
      async: true,
      defer: true,
      "data-dnt": false,
      "data-host": "https://microanalytics.io"
    })
  }
}
