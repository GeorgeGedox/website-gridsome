// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'GeorgeV',
  siteDescription: 'A place where I can share my thoughts and discoveries.',
  titleTemplate: '%s | GeorgeV',
  siteUrl: process.env.GRIDSOME_APP_URL,
  metadata: {
    secureEmail: "e48c8da483818b96838192ca8081978d838a",
    social: {
      github: "GeorgeGedox",
      dribbble: "GeorgeGedox",
      discord: "GeorgeGedox#7782",
      linkedin: "iamgeorgevi",
      twitter: "IamGeorgeVi"
    }
  },
  permalinks: {
    trailingSlash: false
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Article',
        path: './content/**/*.md',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000,
        config: {
          '/blog/*': {
            changefreq: 'weekly',
            priority: 0.5
          }
        }
      }
    }
  ],
  templates: {
    Article: "/blog/:title",
    Tag: "/blog/tag/:id"
  },
  transformers: {
    remark: {
      autolinkClassName: 'bx bx-link-alt heading-anchor',
      externalLinksTarget: '_blank',
      externalLinksRel: ['noopener', ],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader')
  }
}
