<template lang="html">
    <section>
        <!-- <pre>
            {{contenuto}}
        </pre> -->
        <div  class="box columns">
            <div class="column" v-for="(contenutoParagrafo, key, index) in contenuto.contenuti">
                <paragrafoImmaginiQuadrate  v-bind:contenuto="contenutoParagrafo" />
            </div>
        </div>
    </section>

</template>

<script>
import paragrafoImmaginiQuadrate from '~/components/contenuti/paragrafoImmaginiQuadrate.vue'

export default {
    props: ['contenuto'],
    components: {
        paragrafoImmaginiQuadrate
    },
}
</script>

<style lang="scss">
</style>
