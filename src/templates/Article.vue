<template>
  <Layout>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-10 col-lg-8">
          <div class="heading mb-5">
            <span>{{ $page.article.date }}</span>
            <h1 class="title">{{ $page.article.title }}</h1>
            <small>
              Tags:
              <g-link v-for="tag in $page.article.tags" :to="tag.path" :key="tag.id">
                #{{ tag.title }}
              </g-link>
            </small>
          </div>
          <div
            class="markdown-body article-content"
            v-html="$page.article.content"
          />
        </div>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Article ($path: String!) {
  article: article (path: $path) {
    title
    date (format: "MMMM D, Y")
    content
    path
    summary
    image
    tags {
      title
      path
    }
  }
}
</page-query>

<static-query>
  query {
    metadata {
      siteName
      siteDescription
      siteUrl
    }
  }
</static-query>

<script>
export default {
  metaInfo () {
    const siteUrl = this.$static.metadata.siteUrl
    const postPath = this.$page.article.path
    const image = this.$page.article.image || null
    const imagePath = (image && `${siteUrl}${image.src}`) || `${this.$static.metadata.siteUrl}/images/og_banner.png`

    return {
      title: this.$page.article.title,
      bodyAttrs: {
        class: "article-view",
      },
      meta: [
        { key: 'description', name: 'description', content: this.$page.article.summary },
        { key: 'og:url', property: 'og:url', content: `${siteUrl}${postPath}` },
        {
          key: 'og:title',
          property: 'og:title',
          content: this.$page.article.title
        },
        {
          key: 'og:type',
          property: 'og:type',
          content: 'article'
        },
        {
          key: 'og:description',
          property: 'og:description',
          content: this.$page.article.summary
        },
        {
          key: 'og:image',
          property: 'og:image',
          content: imagePath
        },
        {
          key: 'og:image:width',
          property: 'og:image:width',
          content: (image && image.size.width) || ''
        },
        {
          key: 'og:image:height',
          property: 'og:image:height',
          content: (image && image.size.height) || ''
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: this.$page.article.summary
        },
        {
          key: 'twitter:card',
          name: 'twitter:card',
          content: image ? 'summary_large_image' : 'summary'
        },
        {
          key: 'twitter:image',
          property: 'twitter:image',
          content: imagePath
        },
        {
          key: 'twitter:title',
          property: 'twitter:title',
          content: this.$page.article.title
        }
      ],
      script: [
        {
          type: 'application/ld+json',
          json: {
            '@context': 'http://schema.org',
            '@type': 'BlogPosting',
            description: this.$page.article.summary,
            datePublished: this.$page.article.date,
            headline: this.$page.article.title,
            image: imagePath
          }
        }
      ]
    }
  }
}
</script>
