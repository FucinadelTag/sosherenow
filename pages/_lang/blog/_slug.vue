<template lang="html">
    <article class="content slug" itemprop="blogPost" itemscope itemtype="http://schema.org/BlogPosting">
        <meta itemprop="mainEntityOfPage" :content="articoloAbsoluteUrl">
        <header class="testata">
            <h1 class="title is-2" itemprop="name headline" v-html="$t(articolo.titoloGenerico.titolo)"></h1>

        </header>
        <div class="columns barraShare">
            <div class="column is-3 addthis_inline_share_toolbox"></div>
            <div class="column">
                <span class="is-pulled-left">
                    <dataArticoloTmpl v-bind:articolo="articolo"/>
                </span>

            </div>

        </div>
        <figure>
            <immagineTmpl  v-bind:immagine="articolo.immagine" />
        </figure>

        <i><testoTmpl  v-bind:contenuto="articolo.testo" /></i>

        <!-- <span itemprop="landigBody" v-if="contenuti.length" v-for="(contenuto, key, index) in contenuti" :key="id">

                <banner v-if="contenuto._type == 'banner'"  v-bind:contenuto="contenuto" v-bind:indice="key" />

                <contenutoRipetibile v-if="contenuto._type == 'contenutoRipetibile'"  v-bind:contenuto="contenuto" v-bind:indice="key" />

                <componentInclude v-if="contenuto._type == 'componentInclude'"  v-bind:contenuto="contenuto" v-bind:indice="key" />

            </span> -->

        <section itemprop="articleBody"  class="section" v-for="(contenuto, key, index) in articolo.contenuti" :key="articolo.id">
                <paragrafo v-if="contenuto._type == 'paragrafo'"  v-bind:contenuto="contenuto" v-bind:indice="key" />
        </section>


            <!-- <section class="section comments">
                <hr>
                <vue-disqus shortname="https-www-burocraziafacile-it" :identifier="articolo.uid" :url="articoloAbsoluteUrl"></vue-disqus>
            </section> -->

            <!-- <hr>
            <section id="disqus_thread"></section>
            <script>

                /**
                *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
                *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
                var disqus_config = function () {
                    this.page.url = articoloAbsoluteUrl;  // Replace PAGE_URL with your page's canonical URL variable
                    this.page.identifier = articolo.uid; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
                };
                (function() { // DON'T EDIT BELOW THIS LINE
                var d = document, s = d.createElement('script');
                s.src = 'https://https-www-burocraziafacile-it.disqus.com/embed.js';
                s.setAttribute('data-timestamp', +new Date());
                (d.head || d.body).appendChild(s);
                })();
            </script>
            <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript> -->

    </article>




</template>

<script>
import paragrafo from '~/components/contenuti/paragrafo.vue'
import immagineTmpl from '~/components/immagine.vue'
import testoTmpl from '~/components/contenuti/testoHtml.vue'
import dataArticoloTmpl from '~/components/contenuti/dataArticolo.vue'
import {getImageBuilder} from '~/tools/sanity.js'


export default {
    layout: 'blog',
    middleware: 'getArticolo',
    data: function () {
        return {
            lang: this.$store.getters.getLocale,
            articolo: this.$store.getters['articoli/getArticolo'],
        }

    },
    computed: {
        // a computed getter
        immagine_url: function () {
            let imageBuilder = getImageBuilder('dev')
            let immagineUrl = imageBuilder.image(this.articolo.immagine).url();
            return immagineUrl;
        },
        articoloAbsoluteUrl: function () {

            let localSlug = this.$t(this.articolo.titoloGenerico.slug).current;


            return 'https://www.sosherenow.it/' + this.lang + '/blog/' + localSlug;
        }
    },
    components: {
        paragrafo,
        immagineTmpl,
        testoTmpl,
        dataArticoloTmpl
    },
    head () {
        return {
            title:  this.articolo.metadata.title != null ? this.$t(this.articolo.metadata.title) : this.$t(this.articolo.titoloGenerico.title),
            meta: [
                { hid: 'description', name: 'description', content: this.articolo.metadata.description != null ? this.$t(this.articolo.metadata.description) : ''},
                { hid: 'og:title', property: 'og:title', content: this.$t(this.articolo.titoloGenerico.titolo)},
                { hid: 'og:type', property: 'og:type', content: 'article'},
                { hid: 'og:description', property: 'og:description', content: this.$t(this.articolo.titoloGenerico.titolo)},
                { hid: 'og:image', property: 'og:image', content: this.immagine_url},
                { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: this.immagine_url},
                { hid: 'og:url', property: 'og:url', content: this.articoloAbsoluteUrl},
                { hid: 'fb:app_id', property: 'fb:app_id', content: '1888065901523051'},

            ],
            script: [
                { src: 'https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5a3005a731053dc2' }
            ]
        }
    }
}
</script>

<style lang="scss">
.slug {
    .section {
        padding-left: 7rem;
        padding-right: 7rem;
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
    }

    @media screen and (max-width: 768px) {

    	.section {
            padding-left: 0rem;
            padding-right: 0rem;
    	}

    }

    .listIntro {
        margin-bottom: 20px;
        text-transform: uppercase;
        font-size: 90%;
    }

    .barraShare {
        margin-bottom: 1.2rem;
    }

    .testata {
        .title {
            font-weight: 700;
            font-size: 2.6rem;
        }
    }


    .abstract {
        font-style: italic;
    }

    .testata {
        margin-bottom: 1rem;
    }

}


</style>
