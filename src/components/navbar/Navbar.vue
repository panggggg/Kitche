<template>
    <div class="nav">
    <div class="">
    <b-navbar>
        <b-navbar-brand class="header" :style="{ color: 'white', fontSize: '50px' }">Kitche</b-navbar-brand>
        <b-row class="col-8 nav-item">
            <b-col class="col-md-12 mt-3">
            </b-col>
             <b-col class="nav-link text-center">
                <p variant="light" size="md" class="ml-10" @click="home" style="color:white">หน้าแรก</p>
                </b-col>
            <b-col class="nav-link text-center">
                <p variant="light" size="md" class="ml-10" @click="allMenu"  style="color:white">เมนูอาหาร</p>
            </b-col>

        </b-row>

         <b-col class="col-md-2 nav-item">
                 <p variant="light" size="sm" class="ml-10 text-right mt-3"  v-if="!username" @click="login" style="color:white">เข้าสู่ระบบ</p>
                  <div style="color: white; " class="text-left w-125">
                  <b-nav-item-dropdown right
                    variant="light"
                    v-if="username"
                    id="my-nav-dropdown"
                    :text= username
                    class="text-center "
                    >
                    <b-dropdown-item @click="profile">
                        <i class="fas fa-user"></i>
                        โปรไฟล์
                        </b-dropdown-item>
                    <b-dropdown-item @click="addMenu">
                        <i class="fas fa-plus"></i>
                        เพิ่มเมนูอาหาร
                        </b-dropdown-item>
                    <b-dropdown-divider></b-dropdown-divider>
                    <b-dropdown-item @click="logout">
                        <i class="fas fa-sign-out-alt"></i>
                        ออกจากระบบ
                        </b-dropdown-item>
                    </b-nav-item-dropdown>
                  </div>
            </b-col>

    </b-navbar>
    </div>
    <div>
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
    name: 'Navbar',
    data() {
        return{
            user: null,
            username: ''
        }
    },
    methods: {
        login(){
            router.push(`/login`)
            router.go()
        },
        home(){
            router.push(`/home`)
            router.go()
        },
        allMenu(){
            router.push(`/menu`)
            router.go()
        },
        addMenu(){
            router.push(`/addmenu`)
            router.go()
        },
        logout(){
            localStorage.clear()
            router.push(`/login`)
            router.go()
        },
        profile(){
            router.push(`/profile`)
            router.go()
        },
        
    }, 
    mounted() {
        axios.get('http://localhost:8000/user', {headers: {token: localStorage.getItem('token')}})
        .then(res => {
            this.username = res.data.user.username
        })
    },
}

</script>

<style>
.nav{
    background-color:  #8A736C;
}

.header{
    font-family: 'Dancing Script';
    padding-left: 50px;
}

.nav-item{
    font-family: 'Athiti';
    font-size: 50px;
    margin-left: 10px;
}

.nav-item.active{
    color: #8A736C;
}
</style>