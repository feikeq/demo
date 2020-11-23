export default {
    // ssr: false,//仅限客户端渲染
    server: {
        port: 8888, // default: 3000
        host: '0.0.0.0' // default: localhost
      },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: '网站标题',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content:'black'},
      { name: 'apple-mobile-web-app-title', content:"网站标题"},
      { hid: 'og:title', name: 'og:title', content: '网站标题1' },
      { hid: 'og:site_name', name: 'og:site_name', content: '网站标题2' },
      { name: 'msapplication-TileImage', content: '/exp.png' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/exp.png' },
      { rel: 'apple-touch-icon', type: 'image/x-icon', href: `/exp.png` },
      { rel:"apple-touch-icon",href:"/exp.png",sizes:"512x512"}
      
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'ant-design-vue/dist/antd.css',
    '~assets/main.css' //你必须在 url CSS 引用中使用~assets（没有斜杠）或@别名，即background:url("~assets/banner.svg")
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/antd-ui',
    '~/plugins/FKaxios'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios', //您现在可以在Nuxt应用中使用$axios✨
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    proxy: true, // 跨域请求代理
    // baseURL: 'http://www.baidu.com/', //定义用于请求服务器端请求的基本URL。
  },

  proxy: {
    '/api': {
      target: 'http://www.baidu.com/',
      pathRewrite: {
        '^/api' : '/'
      }
    }
  },

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
