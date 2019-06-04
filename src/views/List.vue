<template>
    <div>
        <p class="word">
            <router-link to="/list/man">男装</router-link>&nbsp;&nbsp;&nbsp;
            <router-link tag="span" to="/list/woman" class="text">女装</router-link>&nbsp;&nbsp;&nbsp;
            <router-link :to="{name: 'category', params: {cateName: 'kid'}}">童装</router-link>
        </p>
        <router-view></router-view>
        <router-view name="a"></router-view>
    </div>
</template>

<script>
    export default {
        created () {
        }
    }
</script>

<style spoced>
.word {
    color: #f00;
}
.text {
    font-size: 20px;
}
</style>
