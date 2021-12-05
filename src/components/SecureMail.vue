<template>
  <a
    class="email-secure"
    :href="`mailto:${emailAddress}`"
    target="_blank"
    title="email"
    ><slot></slot>{{ emailAddress }}</a
  >
</template>

<script>
import mailProtect from "~/assets/js/mail_protect.js";

export default {
  props: ["emailHash"],
  data: function () {
    return {
      emailAddress: null,
    };
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.emailAddress = mailProtect.decodeEmail(this.emailHash)
    }
  }
};
</script>
