<template>
  <div class="home">
        <div class="ml-5 mr-5  mb-2">
            <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="3000"
      controls
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        caption=""
        text=""
        img-src="https://media.discordapp.net/attachments/860069885724065792/898082431750537236/lasagne.jpg"
      ></b-carousel-slide>

      <b-carousel-slide img-src="https://media.discordapp.net/attachments/860069885724065792/898085745946935296/jajangmyeon.jpg">
        <h1>Kitche</h1>
      </b-carousel-slide>
      <b-carousel-slide img-src="https://media.discordapp.net/attachments/860069885724065792/898082434057404446/spaghetti.jpg"></b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <img
            class="d-block img-fluid w-100"
            src="https://media.discordapp.net/attachments/860069885724065792/898085748534816768/kimbap.jpg"
            alt="image slot"
          >
        </template>
      </b-carousel-slide>
    </b-carousel>
        </div>
        
  </div>
</template>

<script>
export default {
    name: "Carousel",
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
}
</script>

<style>
.home{
    background-color: #f8ecdf;
}
</style>