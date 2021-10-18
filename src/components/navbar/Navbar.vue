<template>
    <div class="nav">
    <div>
    <b-navbar variant="faded" type="light">
        <b-navbar-brand class="header" :style="{ color: 'white', fontSize: '50px' }">Kitche</b-navbar-brand>
        <div class="m-10">
        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="nav-item">
            <router-link to="/home">หน้าแรก</router-link>          |
            <router-link to="/menu" class="">เมนูอาหาร</router-link> |
            <router-link to="" class="">รายการโปรด</router-link>
        </b-navbar-nav>
        </b-collapse>
        </div>
        <div class="p-10">
        <!-- <b-button variant="light">เข้าสู่ระบบ</b-button> -->
        </div>
    </b-navbar>
    </div>
    <div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar'
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
    font-size: 20px;
    margin-left: 10px;
}

.nav-item.active{
    color: #8A736C;
}
</style>