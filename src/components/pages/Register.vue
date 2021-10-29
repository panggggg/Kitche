<template>
  <div class="container register" style="padding: 100px;">
    <div style="border-radius: 25px;">
    <div class="bgcard " style="border-radius: 25px;">
  <div  class="card-body" style="padding: 30px;">
  <h3 class="text-center" :style="{fontSize: '60px'}">สมัครสมาชิก</h3>
  <form>
  <div class="" :style="{fontSize: '20px'}">
    <b-row class="m-5" cols="2">
        <b-col class="text-left">
            <label for="firstname" class="form-label">ชื่อ</label>
            <input type="text" class="form-control" id="firstname" placeholder="กรุณากรอกชื่อ" v-model="info.firstName" required>
        </b-col>
        <b-col>
            <label for="lastname" class="form-label">นามสกุล</label>
            <input type="text" class="form-control" id="lastname" placeholder="กรุณากรอกนามสกุล"  v-model="info.lastName" required>
        </b-col>
        <b-col>
            <label for="email" class="form-label">อีเมล</label>
            <input type="email" class="form-control " id="email" placeholder="กรุณากรอกอีเมล"  v-model="info.email" required>
            <span style="font-size: 15px; color: #B9344C">{{error}}</span>
        </b-col>
        <b-col>
            <label for="mobileNo" class="form-label">เบอร์โทร</label>
            <input type="email" class="form-control " id="mobileNo" placeholder="กรุณากรอกเบอร์โทร" v-model="info.mobileNo" >
        </b-col>
        <b-col>
            <label for="username" class="form-label">ชื่อผู้ใช้</label>
            <input type="text" class="form-control" id="username" placeholder="กรุณากรอกชื่อผู้ใช้"  v-model="info.username" required>
        </b-col>
        <b-col>
            <label for="password" class="form-label">รหัสผ่าน</label>
            <input type="password" class="form-control" id="password" placeholder="กรุณากรอกรหัสผ่าน"  v-model="info.password" required>
            <span style="font-size: 15px; color: #B9344C">{{msg}}</span>
        </b-col>
    </b-row>
    <div class="text-center mt-3 mb-3">
        <b-button size="sm" :style="{backgroundColor: '#D3C0AC', fontSize: '20px', color: '#695853'}" @click="addToDatabase" >สมัครสมาชิก</b-button>
        </div>
  </div>
  </form>
  </div></div>
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
  name:"Register",
  data() {
    return {
      info: {
        firstName: '',
        lastName: '',
        email: '',
        mobileNo: '',
        username: '',
        password: '',
      },
      msg: '',
      error: ''
    };
  },
  methods: {
    addToDatabase(){
      if(!this.info.password || !this.info.firstName || !this.info.lastName || !this.info.email || !this.info.username || !this.info.password){
        alert('กรุณากรอกข้อมูลให้ครบถ้วน')
      }
      if(this.info.password.length < 6){
        this.msg = '*กรุณากรอกรหัสผ่านอย่างน้อย 6 ตัว'
      }
      else{
      axios.post('http://localhost:8000/user', {
        first_name: this.info.firstName,
        last_name: this.info.lastName,
        email: this.info.email,
        mobile_no: this.info.mobileNo,
        username: this.info.username,
        password: this.info.password
      })
      .then(res => {
        console.log(res)
        this.error = ''
        router.push(`/login`)
        router.go()
      })
      .catch(err => {
        console.log(err.response)
        this.error = err.response.data.error
      })
      }
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
.register{
    font-family: 'Athiti';
}
</style>