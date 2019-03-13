<template>
    <span>
        <myMenu/>

        <section class="section">
                <div class="container">
                    <nuxt/>
                </div>
        </section>

        <myFooter/>

    </span>

</template>

<script charset="utf-8">
    import myMenu from '~/components/myMenu.vue'
    import myFooter from '~/components/myFooter.vue'
    import axios from 'axios'

    export default {
        components: {
            myMenu,
            myFooter,
        },
        data (context) {
            //console.log(this.$store);
            return {
                lang: this.$store.getters.getLocale,
                title: 'Sos Here Now',
                description: 'Prova',
                email:'',
                message:'',
                traduzioni: this.$store.getters['traduzioni/getTraduzioni'],
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
