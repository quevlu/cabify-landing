<template>
  <div>
    <div class="container">
      <div class="video-container">
        <iframe
          src="https://player.vimeo.com/video/288534941?byline=0&amp;portrait=0&amp;title=0"
          frameborder="0"
          webkitallowfullscreen=""
          mozallowfullscreen=""
          allowfullscreen=""
        ></iframe>
      </div>
    </div>
    <div class="container know-container text-center">
      <router-link to="/prospects">
        <img src="@/images/conocer.png" width="330" height="107" class="img-fluid" />
      </router-link>
    </div>
    <footerComponent />
  </div>
</template>

<script>
import footerComponent from "common/components/footer.component";

export default {
  components: {
    footerComponent
  }
};
</script>

<style lang="scss" scoped>
.video-container {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
  height: auto;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

.know-container {
  margin: 100px auto 150px;

  a {
    display: inline-block;
  }
}

@media (max-width: 1024px) and (min-width: 768px) {
  .know-container {
    margin: 20px auto 10px;
  }
}
</style>
