<template>
  <Layout>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="py-5 text-center">
            <g-image class="img-fluid mb-3" src="/images/404.png" alt="404" />
            <p>The page you were searching is no longer here. But here is a cat for your trouble :)</p>
            <img class="img-fluid" style="max-width: 250px" src="https://cataas.com/cat/gif" alt="cat gif" />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: '404',
    bodyAttr: {
      class: 'not-found'
    }
  }
}
</script>
