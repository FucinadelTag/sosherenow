const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
    head: {
        title: 'SOS HERE NOW',
        htmlAttrs: {
            lang: 'it',
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Sos here now' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700' }
        ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
      { src: '~plugins/iconFonts.js', ssr: false },
      { src: '~plugins/fdtI18n.js', ssr: true },
      { src: '~plugins/disqus.js', ssr: false },
      { src: '~plugins/iubenda.js', ssr: false },
  ],

    /*
    ** Nuxt.js modules
    */
    modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
        '@nuxtjs/google-gtag',
        '@nuxtjs/axios',
        ['nuxt-sass-resources-loader',
            [
                './assets/scss/variables.scss'
            ]
        ],
    ],

    // example config
    'google-gtag':{
        id: 'UA-19846103-44', // required
        config:{
            anonymize_ip: true, // anonymize IP
            send_page_view: true, // might be necessary to avoid duplicated page track on page reload
        },
        debug: true, // enable to track in dev mode
        disableAutoPageTrack: false, // disable if you don't want to track each page route with router.afterEach(...)

    },
    /*
    ** Global CSS
    */
    css: [
        {src: '~/assets/scss/main.scss', lang: 'scss'}
    ],
    /*
    ** Axios module configuration
    */
    axios: {
      // See https://github.com/nuxt-community/axios-module#options
    },
    env: {
      dataset: process.env.DATASET || 'dev'
    },
    router: {
        middleware: ['I18N','getTraduzioni']
    },
    render: {
        bundleRenderer: {
            shouldPreload: (file, type) => {
                return ['script', 'style', 'font'].includes(type)
            }
        }
    },

    /*
    ** Build configuration
    */
    build: {
        postcss: {
            preset: {
                features: {
                    customProperties: false
                }
            }
        },
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {

        }
    },
    performance: {
        gzip: false
    },
    dev: false
}
