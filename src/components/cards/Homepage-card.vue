<template>
  <div>
                <b-row cols="4" class="ml-5 justify-item-center">
                    <b-col v-for="menu in menus" :key="menu">
                        <div class="menu">
                            <b-card
                            :title= "menu.menuName"
                            :img-src= "menu.picURL"
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
                       <b-button size="sm" @click="cooking(menu.menuName)" id="menu.menuName">สูตรอาหาร</b-button>
                          </b-col>
                        </b-row>
                        </b-card>
                            </div>
                    </b-col>
                </b-row>
            </div>
</template>

<script>

import Router from 'vue-router'
const router = new Router({
    mode: "history"
})

export default {
    name: 'homePageCard',
    data(){
      return{
          fav: null,
          menus: [
              {
                id: '0001',
                menuName: 'ราเมนหมูชาชู',
                picURL: 'https://media.discordapp.net/attachments/860069885724065792/898090546223013908/ramen.jpg'
              },
              {
                id: '0002',
                menuName: 'บิบิมบับ',
                picURL: 'https://media.discordapp.net/attachments/860069885724065792/898090517789835355/pibimbap.jpg'
              },
              {
                id: '0003',
                menuName: 'ไก่ทอด',
                picURL: 'https://media.discordapp.net/attachments/860069885724065792/898090517856936017/friedchick.jpg'
              },
              {
                id: '0004',
                menuName: 'ดังโงะ',
                picURL: 'https://media.discordapp.net/attachments/860069885724065792/898167284055560262/c991128c1e2ba5f6.jpg'
              },
              {
                id: '0005',
                menuName: 'ต้มยำกุ้ง',
                picURL: 'https://media.discordapp.net/attachments/860069885724065792/898167312987865109/10f17250e2eab153.jpg'
              },
              {
                id: '0006',
                menuName: 'วาราบิโมจิ',
                picURL: 'https://media.discordapp.net/attachments/860069885724065792/898167394806161419/da42f2fddac10b97.jpg'
              },
              {
                id: '0007',
                menuName: 'พุดดิ้งคาราเมล',
                picURL: 'https://media.discordapp.net/attachments/860069885724065792/898167359674662942/40a75fccdbca52c7.jpg'
              },
              {
                id: '0008',
                menuName: 'กิมจิ',
                picURL: 'https://media.discordapp.net/attachments/860069885724065792/898170827160289340/2242ea950e215d9c.jpg'
              },
          ]
      }
  },
  methods: {
    cooking(paramMenuName){
      router.push(`/cooking/${paramMenuName}`)
      router.go()
    }
  }
}
</script>

<style>
.menu{
    font-family: 'Athiti';
}
</style>