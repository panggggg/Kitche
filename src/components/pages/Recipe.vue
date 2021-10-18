<template>
<div class="container">
    <div>
        <h1 class="m-10">{{menuName}}</h1>
    </div>
</div>
</template>

<script>
export default {
    name: "Recipe",
    data(){
        return{
            menuName: this.$route.params.menuName
        }
    },
    
}
</script>

<style>

</style>