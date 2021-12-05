<template>
  <Layout>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="page-title mb-5 text-center">
                    <h1>Contact</h1>
                    <span>Here's how you can find me</span>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="pr-md-5 col-sm-6">
                <p>I'm quite easy to get in contact with given that most of my time is spent interacting with some form of computer.</p>
                <p>The easiest way to get in contact would probably be either via email (<SecureMail :emailHash="$static.metadata.secureEmail"/>) or Discord (<a href="https://discord.com" target="_blank">{{ $static.metadata.social.discord }}</a>).</p>
                <p>I'm open to discussions about almost anything, from projects and programming stuff to movies, music and games.</p>
            </div>
            <div class="pl-md-5 col-sm-6">
                <ul class="social">
                    <li class="anim-fadeInRight"><a :href="`https://github.com/${$static.metadata.social.github}`" target="_blank" title="Github"><i class="bx bxl-github"></i> {{ $static.metadata.social.github }}</a></li>
                    <li class="anim-fadeInRight anim-delay-100"><a :href="`https://dribbble.com/${$static.metadata.social.dribbble}`" target="_blank" title="Dribbble"><i class="bx bxl-dribbble"></i> {{ $static.metadata.social.dribbble }}</a></li>
                    <li class="anim-fadeInRight anim-delay-200"><a :href="`https://www.linkedin.com/in/${$static.metadata.social.linkedin}`" target="_blank" title="LinkedIn"><i class="bx bxl-linkedin"></i> {{ $static.metadata.social.linkedin }}</a></li>
                    <li class="anim-fadeInRight anim-delay-300"><a href="https://discord.com" target="_blank" title="Discord"><i class="bx bxl-discord"></i> {{ $static.metadata.social.discord }}</a></li>
                    <li class="anim-fadeInRight anim-delay-400"><a :href="`https://twitter.com/${$static.metadata.social.twitter}`" target="_blank" title="Twitter"><i class="bx bxl-twitter"></i> @{{ $static.metadata.social.twitter }}</a></li>
                </ul>
            </div>
        </div>
    </div>
  </Layout>
</template>

<script>
import SecureMail from '../components/SecureMail.vue';

export default {
  components: { SecureMail },
  metaInfo: {
    title: "Contact",
    bodyAttrs: {
      class: "contact",
    },
  },
};
</script>

<static-query>
query {
  metadata {
    secureEmail
    social {
      github
      dribbble
      linkedin
      discord
      twitter
    }
  }
}
</static-query>
