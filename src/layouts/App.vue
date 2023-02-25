<template>
  <div class="layout">
    <div class="decoration top_left"><DecorationSVG /></div>
    <header>
      <div class="container">
        <div
          class="
            row
            justify-content-center justify-content-sm-between
            align-items-center
            flex-column flex-sm-row
          "
        >
          <div class="logo">
            <a href="/"><LogoSVG /></a>
          </div>
          <nav class="navigation"><Navigation/></nav>
        </div>
      </div>
    </header>
    <transition name="fade" appear>
      <main>
        <slot></slot>
      </main>
    </transition>
    <footer>
      <p>&copy; georgev.design</p>
      <div class="decoration bottom_right d-none d-md-block">
        <DecorationSVG />
      </div>
    </footer>
  </div>
</template>

<script>
import DecorationSVG from "~/assets/svg/decoration.svg";
import LogoSVG from "~/assets/svg/logo.svg";
import Navigation from "~/layouts/Navigation.vue"
export default {
  components: {
    DecorationSVG,
    LogoSVG,
    Navigation
  },
};
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}
</style>
