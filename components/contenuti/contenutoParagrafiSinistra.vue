<template lang="html">
    <section>
        <!-- <pre>
            {{contenuto}}
        </pre> -->
        <div  class="box columns">
            <div class="column content is-6">
                <span v-for="(contenutoParagrafo, key, index) in contenuto.contenuti">
                    <paragrafo  v-bind:contenuto="contenutoParagrafo" />
                    <br>
                </span>
            </div>
            <div class="column">
                <img v-bind:src="getImage" alt="Subito visibile" />
            </div>
        </div>
    </section>

</template>

<script>
import paragrafo from '~/components/contenuti/paragrafo.vue'
import {getImageBuilder} from '~/tools/sanity.js'


export default {
    props: ['contenuto'],
    components: {
        paragrafo
    },
    computed: {
        // a computed getter
        getImage: function () {
            let imageBuilder = getImageBuilder('dev')

            let width = 1000;
            let height = 500;

            if (this.contenuto.immagine.presentazione == 'quadrata'){
                width = 500;
            }

            //console.log(imageBuilder.image(this.landing.testata.immagine).width(1000).url());
            let immagineUrl = imageBuilder.image(this.contenuto.immagine).width(width).height(height).url();
            return immagineUrl;
        }
    },
}
</script>

<style lang="scss">
</style>
