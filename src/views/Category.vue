<template>
    <div>
        {{cateName}}的列表页
    </div>
</template>

<script>
    export default {
        data () {
            return {
                cateName: ''
            }
        },
        // 组件内部守卫：路由进入之前的操作
        beforeRouteEnter (to, from, next) {
            // 在渲染该组件的对应路由被 confirm 前调用
            // 不！能！获取组件实例 `this`
            // 因为当守卫执行前，组件实例还没被创建
            // console.log({ to, from, next })
            // 在next（）中可以传递一个回调函数，这个回调函数的第一个形参就是this
            next(vm => {
                // console.log(vm)
                vm.cateName = to.params.cateName
                vm.getData()
            })
        },
        // 组件内部守卫：路由更新之前的操作
        beforeRouteUpdate (to, from, next) {
            // console.log({ to, from, next })
            this.cateName = to.params.cateName
            this.getData()
            next()
        },
        methods: {
            getData () {
                // 发送ajax请求渲染当前分类页
            }
        }
    }
</script>

<style>

</style>
