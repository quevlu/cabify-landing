<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-11">
          <img src="@/images/frase.png" width="261" height="148" class="img-fluid" />
        </div>
      </div>
      <div class="row buttons-wrapper">
        <div class="col-md-1"></div>
        <div class="col-md-5">
          <router-link to="/video">
            <img src="@/images/video.png" width="174" height="107" class="img-fluid" />
          </router-link>
        </div>
        <div class="col-md-6">
          <router-link to="/prospects">
            <img src="@/images/conocer.png" width="330" height="107" class="img-fluid" />
          </router-link>
        </div>
      </div>
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
.buttons-wrapper {
  margin: 100px 0 150px;
}
</style>
