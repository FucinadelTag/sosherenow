<template>
    <span>
        <section class="hero is-medium is-hidden-mobile">
            <div class="hero-body" v-bind:style="testataStyle">
                <div v-bind:class="titoloStyle">
                    <h1 class="title bianco is-1">{{$t(testata.riga1)}}</h1>
                    <h2 class="subtitle is-2">{{$t(testata.riga2)}}</h2>
                </div>
            </div>
        </section>

        <div class="container">

            <div class="spazio_bianco"></div>

            <span itemprop="landigBody" v-if="contenuti.length" v-for="(contenuto, key, index) in contenuti" :key="id">

                <banner v-if="contenuto._type == 'banner'"  v-bind:contenuto="contenuto" v-bind:indice="key" />

                <contenutoRipetibile v-if="contenuto._type == 'contenutoRipetibile'"  v-bind:contenuto="contenuto" v-bind:indice="key" />

                <componentInclude v-if="contenuto._type == 'componentInclude'"  v-bind:contenuto="contenuto" v-bind:indice="key" />

            </span>

        </div>


    </span>
</template>

<script>
import {getImageBuilder} from '~/tools/sanity.js'
import banner from '~/components/Banner.vue'
import contenutoRipetibile from '~/components/contenuti/contenutoRipetibile.vue'
import componentInclude from '~/components/contenuti/componentInclude.vue'

export default {
    middleware: 'getLandingPage',
    components: {
        banner,
        contenutoRipetibile,
        componentInclude
    },
    data (context) {
        //console.log(this.$store);
        return {
            testata: this.$store.getters['landing/getTestata'],
            metadata: this.$store.getters['landing/getMetadata'],
            contenuti: this.$store.getters['landing/getContenuti'],
            id: this.$store.getters['landing/getId'],
            context: context
        }
    },
    computed: {
        // a computed getter
        testataStyle: function () {
            let imageBuilder = getImageBuilder('dev')
            //console.log(imageBuilder.image(this.landing.testata.immagine).width(1000).url());
            let immagineUrl = imageBuilder.image(this.testata.immagine).width(1500).height(500).url();
            let styleString = `background: url(${immagineUrl}) center no-repeat; background-size: cover;`
            return styleString;
        },
        titoloStyle: function () {
            return this.testata.stileTestata;
        },
        immagine_principale: function () {
            let imageBuilder = getImageBuilder('dev')
            //console.log(imageBuilder.image(this.landing.testata.immagine).width(1000).url());
            let immagineUrl = imageBuilder.image(this.testata.immagine).url();
            return immagineUrl;
        }
    },
    head () {
        return {
            title:  this.$t(this.metadata.title) != null ? this.$t(this.metadata.title) : 'Prova',
            meta: [
                { hid: 'description', name: 'description', content: this.$t(this.metadata.description) != null ? this.$t(this.metadata.description) : 'this.mainDescription' },
                { hid: 'og:title', property: 'og:title', content: this.$t(this.metadata.title)},
                { hid: 'og:image', property: 'og:image', content: this.immagine_principale},
                { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: this.immagine_principale},
            ]
        }
    }

}
</script>

<style lang="scss">
    .sfondo {
        background-color: rgba(255,255,255,0.8);
        letter-spacing: 1px;
        padding: 2%;
        display:inline-block;
    }
</style>
