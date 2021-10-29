<template>
  <div class="home">
      <div class="container">
        
            <menu-page/>
            <!-- <div class="overflow-auto">
            <div class="m-2">
              <b-pagination v-model="currentPage" pills :total-rows="rows" size="sm" align="center" ></b-pagination>
            </div>
          </div> -->
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import MenuPage from '../cards/MenuPage-card.vue'
export default {
    name: "Home",
    components: {
    MenuPage
  },
  data(){
    return{
      rows: 100,
      currentPage: 1,
      search: ''
    }
  },
  mounted() {
    axios
    .get('http://localhost:8000/menus')
    .then(res => {
      this.allMenu = res.data
    })
  },
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