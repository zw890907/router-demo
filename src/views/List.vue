<template>
    <div>
        <p>
            <router-link to="/list/man">男装</router-link>&nbsp;&nbsp;&nbsp;
            <router-link to="/list/woman">女装</router-link>&nbsp;&nbsp;&nbsp;
            <router-link :to="{name: 'category', params: {cateName: 'kid'}}">童装</router-link>
        </p>
        <router-view></router-view>
        <router-view name="a"></router-view>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
