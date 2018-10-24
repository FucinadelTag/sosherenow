<template lang="html">
    <span v-if="contenuto.posizioneImmagine == 'dopo_titolo'">
        <p v-if="contenuto.titolo">
            <span class="title is-4">{{$t(contenuto.titolo)}}</span>
        </p>
        <img v-bind:src="getImage" alt="Subito visibile" />
        <span v-if="contenuto.testo" v-html="getBlockHtml" />
        <!-- <pre v-if="contenuto.testo">
            {{$t(contenuto.testo)}}
        </pre> -->

    </span>

</template>

<script>
import {getImageBuilder, getBlockHtml} from '~/tools/sanity.js'
import myMarked from 'marked';

export default {
    props: ['contenuto'],
    computed: {
        // a computed getter
        getImage: function () {
            let imageBuilder = getImageBuilder('dev')
            //console.log(imageBuilder.image(this.landing.testata.immagine).width(1000).url());
            let immagineUrl = imageBuilder.image(this.contenuto.immagine).width(500).height(500).url();
            return immagineUrl;
        },
        getBlockHtml: function () {
            let testo = this.$t(this.contenuto.testo);

            return getBlockHtml(testo);


        }
    },
}
</script>

<style lang="scss">
</style>
