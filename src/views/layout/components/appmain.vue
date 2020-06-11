<template>
    <div class="main-box">
        <router-view :key="key"/>
    </div>
</template>

<script>
export default {
    computed: {
        key() {
        return this.$route.path
        }
   }
}
</script>

<style lang="scss" scoped>
.main-box{
    height:100%;
    width:100%;
}
</style>