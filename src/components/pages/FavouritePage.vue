<template>
    <div class="container">
    <h1 class="text-center">รายการโปรด</h1>
    <div class="pb-5">
                <b-row cols="4" class="ml-5 justify-item-center">
                    <b-col v-for="menu in menus" :key="menu">
                        <div class="menu text-center">
                            <b-card
                            :title= "menu.menuName"
                            :img-src= "menu.picURL"
                            style="max-width: 30rem;"
                            class="mb-2"
                        >
                        <b-row>
                          <b-col>
                        <b-button variant="outline-light" class="text-right">
                            <img src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png" width="20px"/>
                        </b-button>
                          </b-col>
                          <b-col>
                       <b-button size="sm"  id="menu.menuName" style="background-color:#8A736C">สูตรอาหาร</b-button>
                          </b-col>
                        </b-row>
                        </b-card>
                            </div>
                    </b-col>
                </b-row>
            </div>
    </div>
</template>

<script>
export default {
    name: 'FavouritePage',
    data(){
        return{
            menus: [
              {
                id: '616d35a567c4701f4ffd4491',
                menuName: 'ราเมนหมูชาชู',
                picURL: 'https://media.discordapp.net/attachments/860069885724065792/898090546223013908/ramen.jpg'
              },
              {
                id: '616d36dc67c4701f4ffd4493',
                menuName: 'บิบิมบับ',
                picURL: 'https://media.discordapp.net/attachments/860069885724065792/898090517789835355/pibimbap.jpg'
              },
              {
                id: '616d375567c4701f4ffd4495',
                menuName: 'ไก่ทอด',
                picURL: 'https://media.discordapp.net/attachments/860069885724065792/898090517856936017/friedchick.jpg'
              },
              {
                id: '616d380167c4701f4ffd4497',
                menuName: 'ดังโงะ',
                picURL: 'https://media.discordapp.net/attachments/860069885724065792/898167284055560262/c991128c1e2ba5f6.jpg'
              },
              {
                id: '616d38f367c4701f4ffd4499',
                menuName: 'ต้มยำกุ้ง',
                picURL: 'https://media.discordapp.net/attachments/860069885724065792/898167312987865109/10f17250e2eab153.jpg'
              },
              {
                id: '616d3ac667c4701f4ffd449e',
                menuName: 'วาราบิโมจิ',
                picURL: 'https://media.discordapp.net/attachments/860069885724065792/898167394806161419/da42f2fddac10b97.jpg'
              },
              {
                id: '616d3a0b67c4701f4ffd449b',
                menuName: 'พุดดิ้งคาราเมล',
                picURL: 'https://media.discordapp.net/attachments/860069885724065792/898167359674662942/40a75fccdbca52c7.jpg'
              },
              {
                id: '616d3c0667c4701f4ffd44a2',
                menuName: 'กิมจิผักกาดขาว',
                picURL: 'https://media.discordapp.net/attachments/860069885724065792/898170827160289340/2242ea950e215d9c.jpg'
              },
          ]
        }
    }
}
</script>

<style>

</style>