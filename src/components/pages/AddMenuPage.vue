<template>
  <div class="container register" style="padding: 100px;">
    <div style="border-radius: 25px;">
    <div class="bgcard " style="border-radius: 25px;">
  <div  class="card-body" style="padding: 30px;">
  <h3 class="text-center" :style="{fontSize: '60px'}">เพิ่มเมนูอาหาร</h3>
  <div class="" :style="{fontSize: '20px'}">
    <b-row class="m-5" cols="2">

        <h3>
        <b-col class="text-left">
            <label for="menuName" class="form-label">ชื่อเมนู</label>
            <input type="text" class="form-control" id="menuName" placeholder="กรุณากรอกชื่อเมนู" value="" v-model="info.menuName" required>
            
        </b-col>
        </h3>

        <h3>
        <b-col>
            <label for="writer" class="form-label">ชื่อผู้เขียน</label>
            <br>
            <label for="writer" class="form-label w-100 p-2" style="background-color: white; border-radius: 3px; color:black; font-size:18px" >{{username}}</label>
        </b-col>
        </h3>

        <h3>
        <b-col>
            <label for="ingredients" class="form-label">วัตถุดิบ</label>
            <textarea v-model="info.ingredients" input type="text" class="form-control" id="ingredients" placeholder="กรุณากรอกวัตถุดิบ" value="" required rows="8" cols="31.5"> </textarea>
        </b-col>
        </h3>

        <h3>
        <b-col>
            <label for="method" class="form-label">วิธีทำ</label>
            <textarea v-model="info.method" input type="text" class="form-control" id="method" placeholder="กรุณากรอกวิธีทำ" value="" required rows="8" cols="31.5"> </textarea>
        </b-col>
        </h3>
        <h3>
        <b-col>
            <label for="image" class="form-label">รูปอาหาร</label>
        <div class="form-group" style="font-size:20px">
          <label for="method" class="form-label">เพิ่ม URL รูปภาพ</label>
            <input v-model="info.image" input type="text" class="form-control" id="method" placeholder="กรุณากรอกลิงค์รูปภาพ"  required />
        </div>
        </b-col>
        </h3>
    </b-row>

    <div class="text-center mt-3 mb-3">
        <b-button size="md" class="bt m-2" @click="save" >ตกลง</b-button>
        <b-button size="md" class="bt m-2" >ยกเลิก</b-button>
        </div>
  </div>
  </div>
  </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import Router from 'vue-router'
const router = new Router({
    mode: "history"
})
export default {
  name:"AddMenu",
  data() {
    return {
      info: {
        menuName: null,
        ingredients: null,
        method: null,
        writer: null,
        image: null,
      },
      username: ''
    };
  },
  methods: {
    save(){
      axios.post('http://localhost:3000/menus', {
        menu_name: this.info.menuName,
        ingredient: this.info.ingredients,
        how_to: this.info.method,
        writer: this.username,
        pic_url: this.info.image
      })
      .then(res => {
        console.log(res)
        alert('เพิ่มเมนูอาหารเรียบร้อย')
        router.push(`/menu`)
      })
    },
  },
  mounted() {
        axios.get('http://localhost:3000/user', {headers: {token: localStorage.getItem('token')}})
        .then(res => {
            this.username = res.data.user.username
            console.log(this.username)
        })
    }
  
}
</script>
<style>
.bgcard {
  background-color: #8A736C;
  color:#FFFFFF;
}
.bt{ 
  background-color:#695853;
  color: #FFFFFF;
  border-radius: 15px;
  padding: 10px;
}
.bt2{ 
  background-color:#AA575B;
  color:#FFFFFF;
  border-radius: 15px;
  padding: 10px;
}
.register{
    font-family: 'Athiti';
}
</style>