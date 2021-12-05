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
    tags {
      title
      path
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.article.title,
      bodyAttrs: {
        class: "article-view",
      },
    };
  },
};
</script>
