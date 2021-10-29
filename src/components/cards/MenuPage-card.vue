<template>
  <div class="pb-3">
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
          <span><b-form-input size="sm" class="mr-sm-2 w-200 mt-3 mb-2" style="font-family: Athiti" placeholder="ค้นหาเมนูอาหาร" v-model="searchQuery">
            <span>
             <b-button size="sm" class="mr-150" :style="{backgroundColor: '#8A736C'}">
            <i class="fas fa-search"></i>
          </b-button>
          </span></b-form-input></span>
          </b-col>
          
          </b-row>
          </b-col>
        </b-row>

                <b-row cols="4" class="ml-5 justify-item-center">
                    <b-col v-for="menu in resultQuery" :key="menu">
                        <div class="menu text-center">
                            <b-card
                            :title= menu.menu_name
                            :img-src="menu.pic_url"
                            style="max-width: 30rem;"
                            class="mb-2"
                        >
                        <b-row>
                         
                          <b-col>
                       <b-button size="sm" @click="cooking(menu.menu_name, menu._id)" id="menu.menu_name" style="background-color:#8A736C">สูตรอาหาร</b-button>
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
    components: {
    },
    data(){
      return{
          allMenu: [],
          username: '',
          searchQuery: ''
      }
  },
  methods: {
    cooking(paramMenuName, id){
      router.push(`/cooking/${paramMenuName}/${id}`)
      router.go()
    },
  },
  mounted() {
    axios
    .get('http://localhost:8000/menus')
    .then(res => {
      this.allMenu = res.data
      // console.log(this.allMenu)
    })

    axios.get('http://localhost:8000/user', {headers: {token: localStorage.getItem('token')}})
        .then(res => {
            this.username = res.data.user.username
        })
  },
  computed: {
    resultQuery(){
      if(this.searchQuery){
        return this.allMenu.filter(item => {
          return this.searchQuery
          .toLowerCase()
          .split(" ")
          .every(v => item.menu_name.toLowerCase().includes(v))
        })
      }
      else {
        return this.allMenu
      }
    },
  }
}
</script>

<style>
.menu{
    font-family: 'Athiti';
}
</style>