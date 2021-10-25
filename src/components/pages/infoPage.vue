<template>
<div>
<div class="card text-center">
  <h3 class="card-header" style="background-color:#695853; color: #FFFFFF;">
ข้อมูลผู้ใช้
  </h3>
  <div class="bgcard">
    <p class="card-title">ชื่อ : {{info.firstname}} นามสกุล : {{info.lastname}}</p>
    <p class="card-text">Email : {{info.email}}</p>
    <p class="card-text"> ชื่อผู้ใช้ : {{info.username}}</p>
    <p class="card-text"> เบอร์โทร : {{info.phone}}</p>
    <p class="card-text"> รหัสผ่าน : {{info.password}}</p>
  </div>
</div>
</div>
</template>
<script>
export default {
    name:"user",
  data() {
    return {
      info: {
        firstname: "Firstname",
        lastname: "Lastname",
        email: "Example@gmail.com",
        username: "UserName",
        phone: "0849064783",
        password: "Password",
      },
}}}
</script>
<style >
.bgcard {
  background-color: #8A736C;
  color:#FFFFFF;
  padding-bottom: 30px;
   padding-top: 30px;
}

</style>