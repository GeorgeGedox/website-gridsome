<template>
  <Layout>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="page-title mb-5 text-center">
            <h1>Blog</h1>
            <span>Sacred place of ramblings</span>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-12">
          <div class="row articles">
            <article class="col-12 col-md-4 mb-3" v-for="article in $page.articles.edges.slice(0, 20)" :key="article.id">
              <div class="image">
                <g-link :to="article.node.path"><g-image :alt="article.node.title" :src="article.node.image"/></g-link>
              </div>
              <div class="title">
                <span><time>{{ article.node.date }}</time> - {{ article.node.timeToRead }} minute read</span>
                <h2><g-link :to="article.node.path">{{ article.node.title }}</g-link></h2>
              </div>
              <div class="body">
                <p>{{ article.node.summary }}</p>
                <g-link :to="article.node.path" class="button">Read more</g-link>
              </div>
            </article>
          </div>
          <div class="pagination">
            <Pager :info="$page.articles.pageInfo"/>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import ArticleSeparatorSVG from '~/assets/svg/separator.svg'
import { Pager } from 'gridsome'

export default {
  components: { ArticleSeparatorSVG, Pager },
  metaInfo: {
    title: "Blog",
    bodyAttrs: {
      class: "blog",
    },
  },
};
</script>

<page-query>
query Articles ($page: Int) {
  articles: allArticle (sortBy: "date", order: DESC, perPage: 10, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date (format: "MMMM D, Y")
        summary
        path
        image (width: 1200, quality: 85)
        timeToRead
      }
    }
  }
}
</page-query>
