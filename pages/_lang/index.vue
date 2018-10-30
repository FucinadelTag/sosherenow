<template>
    <span>
        <section class="hero is-medium is-hidden-mobile">
            <div class="hero-body" v-bind:style="testataStyle">
                <div class="container">
                    <h1 class="title is-1">{{$t(testata.riga1)}}</h1>
                    <h2 class="subtitle is-2">{{$t(testata.riga2)}}</h2>
                    <p>
                        <br><br>
                    </p>

                </div>
            </div>
        </section>

        <div class="container">

            <div class="spazio_bianco"></div>

            <span itemprop="landigBody" v-for="(contenuto, key, index) in contenuti" :key="id">

                <banner v-if="contenuto._type == 'banner'"  v-bind:contenuto="contenuto" v-bind:indice="key" />

                <contenutoRipetibile v-if="contenuto._type == 'contenutoRipetibile'"  v-bind:contenuto="contenuto" v-bind:indice="key" />

            </span>


            <!-- <div class="spazio_bianco"></div>
            <h2 class="title is-2"><i class="fas fa-wrench"></i> Lo stato del progetto:</h2>
                <div  class="box columns">
                    <div class="column">
                        <div class="steps">
                            <div class="step-item is-completed is-success">
                                <div class="step-marker">
                                    <span class="icon">
                                        <i class="fa fa-check"></i>
                                    </span>
                                </div>
                                <div class="step-details">
                                    <p class="step-title">Progettazione</p>
                                    <p>Progettazione e studio dei materiali</p>
                                </div>
                            </div>
                            <div class="step-item is-completed is-success">
                                <div class="step-marker">
                                    <i class="fa fa-check"></i>
                                </div>
                                <div class="step-details">
                                    <p class="step-title">Brevetto</p>
                                    <p>Ottenimento del brevetto internazionale</p>
                                </div>
                            </div>
                            <div class="step-item is-completed is-success">
                                <div class="step-marker">
                                    <i class="fa fa-check"></i>
                                </div>
                                <div class="step-details">
                                    <p class="step-title">Certificazioni</p>
                                    <p>Ottenimento certificazione CE e Sicurezza</p>
                                </div>
                            </div>
                            <div class="step-item is-completed is-success">
                                <div class="step-marker">
                                    <span class="icon">
                                        <i class="fa fa-check"></i>
                                    </span>
                                </div>
                                <div class="step-details">
                                    <p class="step-title">Prototipo</p>
                                    <p>Relizzazione prototipo funzionante</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="spazio_bianco"></div>
                </div>

            <div class="spazio_bianco"></div>
            <h2 class="title is-2"><i class="fas fa-hands-helping"></i> Ci serve il tuo aiuto:</h2>
            <div  class="box columns">
                <div class="column">
                    <span class="padding">
                        <span class="title is-4">Cosa ci manca:</span><br><br>
                        <p>
                            Per poter commercializzare il prodotto ci manca ancora:
                        </p>
                        <ul>
                            <li>La realizzazione degli stampi per le parti in plastica</li>
                            <li>L'acquisto delle materie prime</li>
                        </ul>
                        <hr>
                        <span class="title is-4">Cosa abbiamo oggi:</span><br><br>
                        <p>
                            Un prototipo funzionanete realizzato in ogni sua parte con stampa 3D
                        </p>

                        <img src="https://placehold.it/700x350?text=Foto o gallery dei prototipi" alt="" />
                    </span>
                </div>
                <div class="column is-two-fifths timeline">
                    <span class="title is-4">I prossimi sviluppi:</span>
                    <header class="timeline-header">
                        <span class="tag is-medium is-primary">Prevendita</span>
                    </header>
                    <div class="timeline-item">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <p class="heading">Ottobre 2018</p>
                            <p>Inizio prevendita</p>
                        </div>
                    </div>
                    <header class="timeline-header">
                        <span class="tag is-primary">2019</span>
                    </header>
                    <div class="timeline-item">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <p class="heading">Febbraio 2019</p>
                            <p>Conclusione campagna di prevendita</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <p class="heading">Febbraio 2019</p>
                            <p>Avvio produzione</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-marker"></div>
                        <div class="timeline-content">
                            <p class="heading">Maggio 2019</p>
                            <p>Spedizione prodotti ai primi clienti</p>
                        </div>
                    </div>
                    <div class="timeline-header">
                        <span class="tag is-medium is-primary">Spedizione</span>
                    </div>
                </div>
            </div> -->



            <div class="spazio_bianco"></div>

            <h2 class="title is-2"><i class="fas fa-shopping-cart"></i> Acquista oggi SOS HERE NOW</h2>
            <div  class="box columns">
                <div class="column">
                    <p>
                        <span class="title is-4">Ottieni uno sconto del 30%</span>
                        <br>I primi 500 che ordinano SOS HERE NOW avranno uno sconoto del 300%
                    </p>
                    <p>
                        <span class="title is-4">Finanzi il nostro progetto</span>
                        <br>Ci aiuti così a finanziare il progetto dandoci l'opportiunità di andare in produzione.
                    </p>
                </div>
                <div class="column">
                    DA inserire: BOTTONE per carrello - Prezzi ecc..
                </div>
            </div>



            <div class="spazio_bianco"></div>

            <h2 class="title is-2"><i class="fas fa-question"></i> Le risposte alle tue domande</h2>

            <div  class="box columns is-multiline">
                <div class="column is-half">
                    <p>
                        <span class="title is-4">Quando spedirete il prodotto?</span>
                    </p>
                    <p>
                        Il prodotto verrà spedito a <strong>Maggio del 2019</strong>
                    </p>
                </div>
                <div class="column is-half">
                    <p>
                        <span class="title is-4">Perchè dobbiamo aspettare 6 mesi?</span>
                    </p>
                    <p>
                        Per produrre SOS HERE NOW dobbiamo sostenere costi per:
                    </p>
                    <ul>
                        <li>Realizzazione stampi per parti in plastica</li>
                        <li>Acquisto delle materie prime</li>
                    </ul>
                </div>
                <div class="column is-half">
                    <p>
                        <span class="title is-4">E se non riuscite a produrre, perdo i miei soldi?</span>
                    </p>
                    <p>
                        <strong>NO</strong>, in caso di mancato raggiungimento del budget e quindi della possibilità di produrre SOS HERE NOW, restituiremo tutti i soldi raccolti nella fase di prevendita.
                    </p>
                </div>
                <div class="column is-half">
                    <p>
                        <span class="title is-4">Di quanti soldi avete bisogno?</span>
                    </p>
                    <p>
                        Ci servono circa <strong>100.000 Euro</strong> per essere pronti a spedire SOS HERE NOW. In caso di mancato raggiungimento di questa cifra, restituiremo tutti i soldi raccolti nella fase di prevendita.
                    </p>
                </div>
            </div>
        </div>


    </span>
</template>

<script>
import {getImageBuilder} from '~/tools/sanity.js'
import banner from '~/components/Banner.vue'
import contenutoRipetibile from '~/components/contenuti/contenutoRipetibile.vue'

export default {
    middleware: 'getLandingPage',
    components: {
        banner,
        contenutoRipetibile
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
        }
    },
    head () {
        return {
            title:  this.$t(this.metadata.title) != null ? this.$t(this.metadata.title) : 'Prova',
            meta: [
                { hid: 'description', name: 'description', content: this.$t(this.metadata.description) != null ? this.$t(this.metadata.description) : 'this.mainDescription' }
            ]
        }
    }

}
</script>

<style>
</style>
