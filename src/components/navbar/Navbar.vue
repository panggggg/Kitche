<template>
    <div class="nav">
    <div>
    <b-navbar variant="faded" type="light">
        <b-navbar-brand class="header" :style="{ color: 'white', fontSize: '50px' }">Kitche</b-navbar-brand>
        <div class="m-10">
        <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="nav-item">
            <b-nav-item href="#" >หน้าแรก</b-nav-item>
            <b-nav-item href="#" >เมนูอาหาร</b-nav-item>
        </b-navbar-nav>
        </b-collapse>
        </div>
        <div class="p-10">
        <b-button variant="light">เข้าสู่ระบบ</b-button>
        </div>
    </b-navbar>
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
    margin-left: 100px;
}

.header{
    font-family: 'Dancing Script';
}

.nav-item{
    font-family: 'Athiti';
    font-size: 20px;
}
</style>