<template>
  <transition>
    <router-view />
  </transition>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
    siteUrl
    social {
      twitter
    }
  }
}
</static-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$static.metadata.siteDescription
        },
        {
          key: 'og:description',
          name: 'og:description',
          content: this.$static.metadata.siteDescription
        },
        {
          key: 'og:title',
          name: 'og:title',
          content: this.$static.metadata.siteName
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: this.$static.metadata.siteName
        },
        {
          key: 'twitter:creator',
          name: 'twitter:creator',
          content: `@${this.$static.metadata.social.twitter}`
        },
        {
          key: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        },
        {
          key: 'og:image',
          name: 'og:image',
          content: `${this.$static.metadata.siteUrl}/images/og_banner.png`
        },
      ]
    }
  }
}
</script>
