<template>
    <section>
        <div class="home">
            <div class="principale" itemprop="blogPost" itemscope itemtype="http://schema.org/BlogPosting">
                <a itemprop="url" v-bind:href="articoloUrl(firstArticle.titoloGenerico.slug)">
                    <article class="box tile is-child">
                        <div class="columns">
                            <div class="colum">
                                <h1 itemprop="title headline" class="title is-2" v-html="$t(firstArticle.titoloGenerico.titolo)"/>
                            </div>
                        </div>
                        <hr>
                        <div class="columns">
                            <div class="column is-one-third">
                                <testoTmpl  v-bind:contenuto="firstArticle.testo" />
                            </div>
                            <div class="column">
                                <figure class="image">
                                  <immagineTmpl  v-bind:immagine="firstArticle.immagine" />
                                </figure>
                            </div>
                        </div>
                    </article>
                </a>
            </div>
            <div class="columns is-multiline">
                <div v-for="articolo in altriArticoli" :key="articolo._id" class="column is-half" itemprop="blogPost" itemscope itemtype="http://schema.org/BlogPosting">
                    <a itemprop="url" v-bind:href="articoloUrl(articolo.titoloGenerico.slug)">
                        <article class="boxArticolo">
                            <div class="columns">
                                <!-- <div class="column">
                                    <h1 class="title is-6" v-html="PrismicDom.RichText.asText(articolo.data.titolo)"/>
                                    <a class="linkMore" v-bind:href="'/' + articolo.data.categoria.uid + '/' + articolo.uid">Leggi Tutto</a>
                                </div> -->
                                <div class="column">
                                    <figure class="" itemscope itemtype="https://schema.org/ImageObject">
                                        <immagineTmpl  v-bind:immagine="articolo.immagine" />
                                    </figure>
                                    <!-- <dataArticolo v-bind:articolo="articolo"/> -->
                                </div>
                            </div>
                            <div class="columns">
                                <div class="column">
                                    <h2 itemprop="title headline" class="title is-4" v-html="$t(articolo.titoloGenerico.titolo)"/>
                                </div>
                            </div>

                        </article>
                    </a>
                </div>
            </div>
            
        </div>
    </section>
    
</template>

<script>
import {getBlockHtml} from '~/tools/sanity.js'
import immagineTmpl from '~/components/immagine.vue'
import testoTmpl from '~/components/contenuti/testoHtml.vue'
import _ from 'lodash'

export default {
    layout: 'blog',
    middleware: 'getArticoli',
    data: function () {
        return {
            lang: this.$store.getters.getLocale,
            articoli: this.$store.getters['articoli/getArticoli'],
        }
    },
    components: {
        immagineTmpl,
        testoTmpl
    },
    methods : {
        articoloUrl (slug) {
            let localSlug = this.$t(slug).current;

            let url = '/' + this.lang + '/blog/' + localSlug;

            return (url);
        },
    },
    computed: {
        // a computed getter
        firstArticle: function () {
            return this.articoli[0];
        },
        altriArticoli: function () {
            return _.drop (this.articoli, 1);
        }
    },
    
}
</script>

<style lang="scss" scoped>
.home {
    padding: 0rem 1rem 1rem 1rem;
    a {
        color: inherit;
    }
    .box {
        border-top-color: $rosso;
        border-top-width: .2rem;
        border-top-style: solid;
    }
    .boxArticolo {
        padding: 1rem;
        border-top-color: $rosso;
        border-top-width: .2rem;
        border-top-style: solid;
    }

    .linkMore {
        font-style: italic;
    }
    .principale {
        margin-bottom: 1.5rem;
    }
}

</style>


