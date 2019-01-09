<template lang="html">
    <section>
        <span v-if="contenuto.posizioneImmagine == 'sopra'">
            <immagineTmpl  v-bind:immagine="contenuto.immagine" />
            <p v-if="contenuto.titolo">
                <span class="title is-4">{{$t(contenuto.titolo)}}</span>
            </p>
            <testoTmpl  v-bind:contenuto="contenuto.testo" />

        </span>

        <span v-if="contenuto.posizioneImmagine == 'sotto'">
            <p v-if="contenuto.titolo">
                <span class="title is-4">{{$t(contenuto.titolo)}}</span>
            </p>
            <testoTmpl  v-bind:contenuto="contenuto.testo" />

            <immagineTmpl  v-bind:immagine="contenuto.immagine" />

        </span>

        <span v-if="contenuto.posizioneImmagine == 'dopo_titolo'">
            <p v-if="contenuto.titolo">
                <span class="title is-4">{{$t(contenuto.titolo)}}</span>
            </p>
            <immagineTmpl  v-bind:immagine="contenuto.immagine" />
            <testoTmpl  v-bind:contenuto="contenuto.testo" />

        </span>

        <span v-if="(contenuto.posizioneImmagine == 'nessuna' || contenuto.posizioneImmagine == null)">
            <p v-if="contenuto.titolo">
                <span class="title is-4">{{$t(contenuto.titolo)}}</span>
            </p>
            <testoTmpl  v-bind:contenuto="contenuto.testo" />
        </span>

    </section>


</template>

<script>
import {getBlockHtml} from '~/tools/sanity.js'
import myMarked from 'marked';
import immagineTmpl from '~/components/immagine.vue'
import testoTmpl from '~/components/contenuti/testoHtml.vue'

export default {
    props: ['contenuto'],
    components: {
        immagineTmpl,
        testoTmpl
    },
    computed: {
        getBlockHtml: function () {
            let testo = this.$t(this.contenuto.testo);

            return getBlockHtml(testo);


        }
    },
}
</script>

<style lang="scss">
</style>
