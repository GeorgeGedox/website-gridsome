<template>
  <Layout>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-md-10 col-lg-8">
          <div class="heading mb-5">
            <h1 class="title">Stack</h1>
          </div>
          <div class="article-content">
            <p>
              This is a continuously changing list of the technologies, tools and hardware I use at the moment. The list will unquestionably change over time, so I'll try to update
              it in here as often as I can. If you have any questions in regards to anything on this list, feel free to <g-link to="/contact">get in touch with me</g-link>.
            </p>

            <h1 id="tech">.tech</h1>
            <ul>
              <li><a href="https://ansible.com">Ansible</a> is my tool of choice for deployments, configuration management and provisioning of any server I work on. My home
                infrastructure is deployed with Ansible, available <a href="https://github.com/GeorgeGedox/infrastructure">here</a>.</li>
              <li><a href="https://docker.com">Docker</a> for containerizing almost anything. It's my favorite way of deploying things currently.</li>
              <li><a href="https://torsion.org/borgmatic/">borgmatic</a> for backups, simple to use, can be provisioned with Ansible, really solid.</li>
              <li><a href="https://grafana.com">Grafana</a> anytime I need to visualize server and application metrics or even logs sometimes.</li>
              <li><a href="https://prometheus.io/">Prometheus</a> for exporting metrics of any kind, fits perfectly with Grafana.</li>
              <li><a href="https://www.python.org/">Python</a> for cases where <strong>Bash</strong> is not enough.</li>
            </ul>

            <h1 id="web-dev-not-very-active-these-days">.web-dev (not very active these days)</h1>
            <ul>
              <li>
                <a href="https://laravel.com">Laravel</a> is the web framework I use the most, I started using it at around the time version 5.2 came out and I never looked back.
              </li>
              <li><a href="https://vuejs.org/">Vue.js</a> when I'm building applications relying on reactivity and user interaction.</li>
              <li>
                <strike>
                  <a href="https://jigsaw.tighten.co/">Jigsaw</a> for static sites, it lets me focus on my frontend and content instead of the underlying components. This website has
                  been built on it.
                </strike>
              </li>
              <li>
                <a href="https://gridsome.org/">Gridsome</a> for static sites, moved away from <strong>Jigsaw</strong> since it's slower and not as powerful.
              </li>
              <li>
                <a href="https://getbootstrap.com/">Bootstrap</a> as my starter layout skeleton or quick prototype projects. On this very website I'm using it for the grid
                component and a few other utilities.
              </li>
            </ul>

            <h1 id="software">.software</h1>
            <ul>
              <li><a href="https://www.jetbrains.com/phpstorm/">PHPStorm</a> for when I'm working on complex applications. It's heavy, but it does its job very well.</li>
              <li>
                <a href="https://code.visualstudio.com/">Visual Studio Code</a>
                for lighter projects such as creating a docker image, bash scripts or just plain text editing.
              </li>
              <li>
                <a href="https://www.microsoft.com/en-us/windows/">Windows 10</a>
                as the main OS, <strike>various Linux distibutions in VMs</strike> (Moved to docker and WSL2), MacOS for work.
              </li>
              <li>
                <a href="https://www.mozilla.org/en-US/firefox/new/">Firefox</a>
                main browser with uBlock Origin, Privacy Badger and DuckDuckGo Privacy Essentials extensions.
              </li>
              <li>
                <a href="https://www.adobe.com/creativecloud.html">Adobe CC</a>
                for design work.
              </li>
            </ul>

            <h1 id="hardware">.hardware</h1>
            <ul>
              <li>
                My main rig contains a Ryzen 3800X AMD CPU, NVIDIA GeForge RTX 3070 graphics card, 32GB of RAM, 2.5TB of SSD storage and 2TB of HDD storage. I'm quite happy with it
                and I don't plan on doing any upgrades anytime soon.
              </li>
              <li>A Raspberry Pi 4 4GB that's currently used to run <a href="https://www.home-assistant.io/">Home Assistant</a>.</li>
              <li>An old Intel NUC with a dual-core i5-4250U CPU which acts as the reverse proxy for all my services.</li>
              <li>
                I also have a main server that I use for many things, from being a simple NAS to handling audio and video streaming, hosting my private git repository and so on. It
                has a Ryzen 3200G APU, 32GB of RAM, 256GB of SSD storage and 11TB of HDD storage.
              </li>
              <li>
                <a href="https://www.amazon.com/Huawei-Matebook-D14-Laptop-International/dp/B084DDBXVL">Huawei Matebook D14 Laptop</a>
                running <a href="https://linuxmint.com/">Linux Mint</a> for portable development.
              </li>
              <li><a href="https://www.elgato.com/en/stream-deck">Elgato Stream Deck</a> for macros</li>
            </ul>

            <h1 id="audio">.audio</h1>
            <ul>
              <li>
                Currently, I'm using a pair of
                <a href="https://en-us.sennheiser.com/best-audio-headphones-high-end-stereo-hifi-hd-600">Sennheiser HD 600</a>
                headphones. No external speakers.
              </li>
              <li>ifi Zen CAN/DAC stack</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Stack',
    bodyAttrs: {
      class: 'article-view'
    }
  }
}
</script>
