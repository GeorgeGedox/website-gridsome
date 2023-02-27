// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const siteName = 'GeorgeV'
const siteDescription = 'A place where I can share my thoughts and discoveries.'

module.exports = {
  siteName: siteName,
  siteDescription: siteDescription,
  titleTemplate: '%s | GeorgeV',
  siteUrl: process.env.GRIDSOME_APP_URL,
  metadata: {
    secureEmail: "e48c8da483818b96838192ca8081978d838a",
    social: {
      github: "GeorgeGedox",
      dribbble: "GeorgeGedox",
      discord: "GeorgeGedox#7782",
      linkedin: "georgegedox",
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
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Article',
        latest: true,
        feedOptions: {
          title: siteName + ' Blog RSS Feed',
          description: siteDescription,
          feed_url: process.env.GRIDSOME_APP_URL + '/rss.xml',
          site_url: process.env.GRIDSOME_APP_URL
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.summary,
          url: process.env.GRIDSOME_APP_URL + node.path,
        }),
        output: {
          dir: './dist',
          name: 'rss.xml'
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
      externalLinksRel: ['noopener'],
      anchorClassName: 'icon icon-link',
      plugins: [
        [
          '@gridsome/remark-prismjs', {
            showLineNumbers: true
          }
        ]
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
