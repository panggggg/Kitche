<template>
<div class="profile p-5">
<div class="card text-center">
  <h3 class="card-header" style="background-color:#695853; color: #FFFFFF; font-size:40px">
    ข้อมูลผู้ใช้
  </h3>
  <div class="bgcard">
    <p class="card-title">ชื่อ : {{info.firstname}}</p>
    <p class="card-text"> นามสกุล : {{info.lastname}}</p>
    <p class="card-text">อีเมล : {{info.email}}</p>
    <p class="card-text"> ชื่อผู้ใช้ : {{info.username}}</p>
  </div>
</div>

div class="card text-center">
  <h3 class="card-header" style="background-color:#695853; color: #FFFFFF; font-size:40px">
    ข้อมูลผู้ใช้
  </h3>
  <div class="bgcard">
    <p class="card-title">ชื่อ : {{info.firstname}}</p>
    <p class="card-text"> นามสกุล : {{info.lastname}}</p>
    <p class="card-text">อีเมล : {{info.email}}</p>
    <p class="card-text"> ชื่อผู้ใช้ : {{info.username}}</p>
  </div>
</div>

</div>

</template>

<script>
import axios from 'axios'
export default {
    name:"UserProfile",
  data() {
    return {
      info: {
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        phone: "",
      },
    }
    },
    mounted() {
        axios.get('http://localhost:3000/user', {headers: {token: localStorage.getItem('token')}})
        .then(res => {
            this.info.firstname = res.data.user.first_name
            this.info.lastname = res.data.user.last_name
            this.info.email = res.data.user.email
            this.info.username = res.data.user.username
            console.log(res.data)
        })
    }
}
</script>
<style >
.bgcard {
  background-color: #8A736C;
  color:#FFFFFF;
  padding-bottom: 30px;
   padding-top: 30px;
   font-size: 20px;
}

.profile{
    font-family: 'Athiti';
    font-size: 50px;
    margin-left: 10px;
}

</style>