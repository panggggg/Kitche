<template>
    <div class="nav">
    <div class="">
    <b-navbar>
        <b-navbar-brand class="header" :style="{ color: 'white', fontSize: '50px' }">Kitche</b-navbar-brand>
        <b-row cols-xl="4" class="mt-3 ml-5">
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
                 <b-button variant="light" size="sm" @click="login">เข้าสู่ระบบ</b-button>
            </b-col>
        </b-row>
        <!-- <b-navbar-brand class="header" :style="{ color: 'white', fontSize: '50px' }">Kitche</b-navbar-brand>
        <div class="m-10">
        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="nav-item">
            <b-button variant="light" size="sm" class="ml-10" @click="home">หน้าแรก</b-button>
            <b-button variant="light" size="sm" class="ml-10" @click="menu">เมนูอาหาร</b-button>
            <b-button variant="light" size="sm" class="ml-10" @click="favourite">รายการโปรด</b-button>
        </b-navbar-nav>
        </b-collapse>
        </div>
        <div class="p-10 d-flex justify-content-end">
        <b-button variant="light" size="sm" @click="login">เข้าสู่ระบบ</b-button>
        </div> -->
    </b-navbar>
    </div>
    <div>
    </div>
    </div>
</template>

<script>
import Router from 'vue-router'
const router = new Router({
    mode: "history"
})
export default {
    name: 'Navbar',
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
        }
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