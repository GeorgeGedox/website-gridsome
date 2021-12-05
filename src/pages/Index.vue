<template>
  <Layout>
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="jumbo-logo">
            <g-image alt="Large Logo" src="/images/logo.png" />
          </div>
          <p class="intro">Hey there! I’m <strong>George</strong>.</p>
          <p>
            I’m a Full-Stack Web Developer, Web Designer and DevOps Engineer. Feel free to check out my <g-link to="/blog">blog</g-link> or the
            <g-link to="/stack">stack</g-link> page to see what I'm currently using. Most of my code can be found on GitHub, including the code for this website.
          </p>
          <p class="mb-5">
            Currently, I work at <a href="https://ro.deloittedigital.com/" target="_blank">Deloitte Digital</a> as a DevOps Engineer. My previous work history can be found on my
            LinkedIn profile.
          </p>
          <ul class="social">
            <li class="anim-fadeInLeft">
              <SecureMail :emailHash="$static.metadata.secureEmail"><i class="bx bx-envelope"></i></SecureMail>
            </li>
            <li class="anim-fadeInLeft anim-delay-100">
              <a :href="`https://github.com/${$static.metadata.social.github}`" target="_blank" title="Github"><i class="bx bxl-github"></i> Github</a>
            </li>
            <li class="anim-fadeInLeft anim-delay-200">
              <a :href="`https://dribbble.com/${$static.metadata.social.dribbble}`" target="_blank" title="Dribbble"><i class="bx bxl-dribbble"></i> Dribbble</a>
            </li>
            <li class="anim-fadeInLeft anim-delay-300">
              <a :href="`https://www.linkedin.com/in/${$static.metadata.social.linkedin}`" target="_blank" title="LinkedIn"><i class="bx bxl-linkedin"></i> LinkedIn</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-6 d-none d-lg-block">
          <div class="laptop-special">
            <div class="laptop-image">
              <g-image src="/images/laptop.png" alt="Laptop" />
            </div>
            <div class="laptop-decor">
              <LaptopBaseSVG />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import LaptopBaseSVG from '../assets/svg/laptop_base.svg'
import SecureMail from '../components/SecureMail.vue'

export default {
  components: {
    LaptopBaseSVG,
    SecureMail
  },
  metaInfo: {
    title: 'Personal Website',
    bodyAttrs: {
      class: 'homepage'
    }
  }
}
</script>

<static-query>
query {
  metadata {
    secureEmail
    social {
      github
      dribbble
      linkedin
    }
  }
}
</static-query>
