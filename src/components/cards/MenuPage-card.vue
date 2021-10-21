<template>
  <div>
                <b-row cols="4" class="ml-5 justify-item-center">
                    <b-col v-for="menu in allMenu" :key="menu">
                        <div class="menu text-center">
                            <b-card
                            :title= "menu.menu_name"
                            :img-src= "menu.pic_url"
                            style="max-width: 30rem;"
                            class="mb-2"
                        >
                        <b-row>
                          <b-col>
                        <b-button variant="outline-light">
                            <img src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" width="20px"/>
                        </b-button>
                          </b-col>
                          <b-col>
                       <b-button size="sm" @click="cooking(menu.menu_name, menu._id)" id="menu.menu_name">สูตรอาหาร</b-button>
                          </b-col>
                        </b-row>
                        </b-card>
                            </div>
                    </b-col>
                </b-row>
            </div>
</template>

<script>
import axios from 'axios'
import Router from 'vue-router'
const router = new Router({
    mode: "history"
})

export default {
    name: 'MenuPageCard',
    data(){
      return{
          fav: null,
          allMenu: []
      }
  },
  methods: {
    cooking(paramMenuName, id){
      router.push(`/cooking/${paramMenuName}/${id}`)
      router.go()
    }
  },
  mounted() {
    axios
    .get('http://localhost:3000/menus')
    .then(res => {
      this.allMenu = res.data
    })
  }
}
</script>

<style>
.menu{
    font-family: 'Athiti';
}
</style>