import DefaultLayout from '~/layouts/App.vue'
import '~/assets/sass/main.scss'
import 'prismjs/themes/prism-tomorrow.css'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
}
