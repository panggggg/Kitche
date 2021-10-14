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
                        <b-button variant="outline-light">
                            <img src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" width="20px"/>
                        </b-button>
                        </b-card>
                            </div>
                    </b-col>
                </b-row>
            </div>
</template>

<script>
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
              
          ]
      }
  }
}
</script>

<style>
.menu{
    font-family: 'Athiti';
}
</style>