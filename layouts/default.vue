<template>
    <div class="default">
        <div class="container">
            <div class="content">
                <div class="">
                    <MyMenu/>
                    <nuxt/>
                </div>
            </div>
        </div>
    </div>
</template>

<script charset="utf-8">
    import MyMenu from '~/components/MyMenu.vue'

    export default {
        components: {
            MyMenu,
        },
        data (context) {
            //console.log(this.$store);
            return {
                title: 'Sos Here Now',
                description: 'Prova'
            }
        },
        head () {
            return {
                title: this.title,
                meta: [
                    { hid: 'description', name: 'description', content: this.description }
                ]
            }
        },
    }
</script>

<style>
</style>
