<template lang="html">
    <section>
        <!-- <pre>
            {{contenuto}}
        </pre> -->
        <div  class="box columns">
            <div class="column" v-for="(contenutoParagrafo, key, index) in contenuto.contenuti">
                <paragrafo  v-bind:contenuto="contenutoParagrafo" />
            </div>
        </div>
    </section>

</template>

<script>
import paragrafo from '~/components/contenuti/paragrafo.vue'

export default {
    props: ['contenuto'],
    components: {
        paragrafo
    },
}
</script>

<style lang="scss">
</style>
