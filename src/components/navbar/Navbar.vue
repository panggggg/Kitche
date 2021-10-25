<template>
    <div class="nav">
    <div class="">
    <b-navbar>
        <b-navbar-brand class="header" :style="{ color: 'white', fontSize: '50px' }">Kitche</b-navbar-brand>
        <b-row cols-xl="7" class="mt-3 ml-5">
            <b-col class="">
                <b-button variant="light" size="sm" class="mt-10 d-flex justify-content-center" @click="home">หน้าแรก</b-button>
            </b-col>
            <b-col>
                <b-button variant="light" size="sm" class="ml-10" @click="menu">เมนูอาหาร</b-button>
            </b-col>
            <b-col>
                <b-button variant="light" size="sm" class="ml-10"  @click="favourite">รายการโปรด</b-button>
            </b-col>
            <b-col>
                <b-button variant="light" size="sm" class="ml-10"  @click="addMenu">เพิ่มเมนูอาหาร</b-button>
            </b-col>
            <b-col>
                 <p>{{ username }}</p>
            </b-col>
            <b-col v-if="!username">
                 <b-button variant="light" size="sm" @click="login">เข้าสู่ระบบ</b-button>
            </b-col>
            <b-col v-if="username">
                 <b-button variant="light" size="sm" @click="logout">ออกจากระบบ</b-button>
            </b-col>
        </b-row>
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
        menu(){
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
        }
    }, 
    mounted() {
        axios.get('http://localhost:3000/user', {headers: {token: localStorage.getItem('token')}})
        .then(res => {
            this.username = res.data.user.username
        })
    }
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