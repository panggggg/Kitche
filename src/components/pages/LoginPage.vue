<template>
<div class="login container p-5">
   <div class="d-flex justify-content-center">
    <div class="card text-center" style="border-radius: 25px;" >
    <div class="bgcard" style="border-radius: 25px;">
  <div  class="card-body" style="padding: 50px;">
  <h3 :style="{fontSize: '60px'}">เข้าสู่ระบบ</h3><br>
  <form>
  <div class="mb-3">
  <label for="formGroupExampleInput" style="font-size: 15pt" class="form-label">อีเมล</label><br>
  <input type="text" class="form-control"  style="font-size: 18sm" id="formGroupExampleInput" placeholder="อีเมล" require v-model="info.email">
</div>
<div class="mb-3" >
  <label for="formGroupExampleInput2" style="font-size: 15pt" class="form-label">รหัสผ่าน</label><br>
  <input type="password" class="form-control" style="font-size: 18sm" id="formGroupExampleInput2" placeholder="รหัสผ่าน" require v-model="info.password">
  <span style="font-size: 15px; color: #B9344C" class="text-left">{{error}}</span>
</div>
    <br>
    <button class="bt" type="button" style="font-size: 12pt" v-on:click="login" >เข้าสู่ระบบ</button>
    <br><br>
    <button class="bt2" type="button" style="font-size: 12pt" v-on:click="register">สมัครสมาชิก</button>
  </form>
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
  name:"Login",
  data() {
    return {
      info:{
      email:null,
      password:null,
      },
      error: ''
    };
  },
  methods: {
    async login(){
      let user = {
        email: this.info.email,
        password: this.info.password
      }
      await axios.post('http://localhost:8000/login', user)
      .then(res => {
        if(res.status === 200){
          console.log(res)
          localStorage.setItem('token', res.data.token)
          router.push(`/home`)
          router.go()
        }
      })
      .catch(err => {
        console.log(err.response)
        this.error = err.response.data.error
      })
      // router.push(`/home`)
      // router.go()
    },
    register(){
      router.push(`/register`)
      router.go()
    }
  },
  
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
.login{
   font-family: 'Athiti';
}
</style>