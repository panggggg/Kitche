<template>
  <div class="home">
      <div class="container">
        <b-row cols="4">
          <b-col>
          <h1 :style="{ fontFamily: 'Athiti', fontSize: '70px'}" >เมนูอาหาร</h1>
          </b-col>
          <b-col>
          </b-col>
          <b-col>
          </b-col>
          <b-col class="mt-3 ml-10">
          <b-row>
          <b-col>
          <span><b-form-input size="sm" class="mr-sm-2 w-200 mt-3 mb-2  flex-end" placeholder="Search">
            <span>
             <b-button size="sm" class="mr-150" :style="{backgroundColor: '#8A736C'}">
            <i class="fas fa-search"></i>
          </b-button>
          </span></b-form-input></span>
          </b-col>
          <b-col class="mt-3">
          <b-button size="sm" class="mr-150" :style="{backgroundColor: '#8A736C'}">
            <i class="fas fa-search"></i>
          </b-button>
          </b-col>
          </b-row>
          </b-col>
        </b-row>
            <home-page-card/>
            <div class="overflow-auto">
            <div class="m-2">
              <b-pagination v-model="currentPage" pills :total-rows="rows" size="sm" align="center" ></b-pagination>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import homePageCard from '../cards/Homepage-card.vue'
export default {
    name: "Home",
    components: {
    homePageCard
  },
  data(){
    return{
      rows: 100,
      currentPage: 1,
      allMenu: []
    }
  },
  mounted() {
    axios
    .get('http://localhost:3000/menus')
    .then(res => {
      const menu = res.data
      this.allMenu 
      console.log(menu)
    })
  }
}
</script>

<style>
.home{
    background-color: #f8ecdf;
}
.flex-item {
  justify-content: right;
}
</style>