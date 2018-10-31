<template lang="html">
    <section>
        <span v-if="contenuto.posizioneImmagine == 'sopra'">
            <immagineTmpl  v-bind:immagine="contenuto.immagine" />
            <p v-if="contenuto.titolo">
                <span class="title is-4">{{$t(contenuto.titolo)}}</span>
            </p>
            <span v-if="contenuto.testo" v-html="getBlockHtml" />

        </span>

        <span v-if="contenuto.posizioneImmagine == 'sotto'">
            <p v-if="contenuto.titolo">
                <span class="title is-4">{{$t(contenuto.titolo)}}</span>
            </p>
            <span v-if="contenuto.testo" v-html="getBlockHtml" />

            <immagineTmpl  v-bind:immagine="contenuto.immagine" />

        </span>

        <span v-if="contenuto.posizioneImmagine == 'dopo_titolo'">
            <p v-if="contenuto.titolo">
                <span class="title is-4">{{$t(contenuto.titolo)}}</span>
            </p>
            <immagineTmpl  v-bind:immagine="contenuto.immagine" />
            <span v-if="contenuto.testo" v-html="getBlockHtml" />

        </span>

        <span v-if="contenuto.posizioneImmagine == 'nessuna'">
            <p v-if="contenuto.titolo">
                <span class="title is-4">{{$t(contenuto.titolo)}}</span>
            </p>
            <span v-if="contenuto.testo" v-html="getBlockHtml" />

        </span>

    </section>


</template>

<script>
import {getBlockHtml} from '~/tools/sanity.js'
import myMarked from 'marked';
import immagineTmpl from '~/components/immagine.vue'

export default {
    props: ['contenuto'],
    components: {
        immagineTmpl
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
