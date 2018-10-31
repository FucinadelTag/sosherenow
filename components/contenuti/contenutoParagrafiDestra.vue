<template lang="html">
    <section>
        <!-- <pre>
            {{contenuto}}
        </pre> -->
        <div  class="box columns">
            <div class="column">
                <immagineTmpl  v-bind:immagine="contenuto.immagine" />
            </div>
            <div class="column content is-6">
                <span v-for="(contenutoParagrafo, key, index) in contenuto.contenuti">
                    <paragrafo  v-bind:contenuto="contenutoParagrafo" />
                    <br>
                </span>
            </div>
        </div>
    </section>

</template>

<script>
import paragrafo from '~/components/contenuti/paragrafo.vue'
import immagineTmpl from '~/components/immagine.vue'


export default {
    props: ['contenuto'],
    components: {
        paragrafo,
        immagineTmpl
    }
}
</script>

<style lang="scss">
</style>
