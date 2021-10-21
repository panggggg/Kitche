<template>
<div class="container p-2">
    <div class="font">
    <div class="text-center">
        <h1 class="m-10" :style="{fontSize: '70px'}">{{menuName}}</h1>
    </div>
    <div v-for="menu in allMenu" :key="menu">
        <div class="m-10 text-center">
            <img :src="menu.pic_url" width="500"/>
        </div>
    <div class="mt-5 text-center">
        <h2 :style="{fontSize: '50px'}">วัตถุดิบ</h2>
    </div>
    <div >
    <div class="text-left" :style="{fontSize: '20px'}">
        <p>{{menu.ingredient}}</p>
    </div>
    </div>
    <div class="mt-5 text-center">
        <h2 :style="{fontSize: '50px'}">วิธีทำ</h2>
    </div>
    <div class="text-left">
        <p :style="{fontSize: '20px'}">{{ menu.how_to }}</p>
    </div>
    </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: "Recipe",
    data(){
        return{
            menuName: this.$route.params.menuName,
            id: this.$route.params.id,
            allMenu: [],
        }
    },
    mounted() {
        axios
        .get('http://localhost:3000/menus')
        .then(res => {
            const menu = res.data
            this.allMenu = menu.filter((menu) => menu._id === this.id)
            console.log(this.allMenu)
        })
    }
    
}
</script>

<style>
.font{
    font-family: 'Athiti' ;
}
</style>