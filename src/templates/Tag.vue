<template>
  <Layout>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="page-title mb-5 text-center">
            <h1>Articles tagged "{{ $page.tag.title }}"</h1>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-12 col-md-10 col-lg-7">
          <div class="articles">
            <article class="mb-3" v-for="article in $page.tag.belongsTo.edges" :key="article.node.id">
              <div class="title">
                <span><time>{{ article.node.date }}</time></span>
                <h2><g-link :to="article.node.path">{{ article.node.title }}</g-link></h2>
              </div>
              <div class="body">
                <p>{{ article.node.summary }}</p>
                <g-link :to="article.node.path" class="button">Read more</g-link>
              </div>
              <div class="divider"><ArticleSeparatorSVG/></div>
            </article>
          </div>
          <div class="pagination">
            <Pager :info="$page.tag.belongsTo.pageInfo"/>
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
  metaInfo() {
    return {
      title: `Posts tagged with "${this.$page.tag.title}"`,
      bodyAttrs: {
        class: "blog",
      },
    }
  },
};
</script>

<page-query>
query Tag ($page: Int, $id: ID!) {
  tag: tag (id: $id) {
    title
    belongsTo (page: $page, perPage: 30) @paginate {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
        node {
          ...on Article {
            title
            path
            date (format: "MMMM D, Y")
            summary
            tags {
              title
            }
          }
        }
      }
    }
  }
}
</page-query>
