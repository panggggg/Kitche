<template>
  <div class="home">
      <div>
          <b-row class="mt-10">
              <b-col>
              </b-col>
              <b-col>
                <span>
                    <!-- <b-form-input size="sm" class="mr-sm-2 w-50 mt-2 mb-2" placeholder="Search"></b-form-input> -->
                </span>
              </b-col>
          </b-row>
      </div>
      <div class="mt-5">
      <carousel/>
      </div>
      <div class="container mt-5">
          <h1 :style="{ fontFamily: 'Dancing Script', fontSize: '70px' }">Popular Menu</h1>
            <home-page-card/>
      </div>
  </div>
</template>

<script>
import Carousel from '../carousel/Carousel.vue'
import homePageCard from '../cards/Homepage-card.vue'
export default {
    name: "Home",
    components: {
    Carousel,
    homePageCard
  }
}
</script>

<style>
.home{
    background-color: #f8ecdf;
}
</style>