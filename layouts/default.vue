<template>
    <span>
        <MyMenu/>
        <section class="section">
                <div class="content">
                    <nuxt/>
                </div>
        </section>

        <footer class="footer">
            <div class="container">

                <div class="columns">
                    <div class="column content">
                        <p class="title is-4">
                            Chi Siamo
                        </p>
                        <p>
                            Solede è una giovane realtà nata nel 2015 allo scopo di diffondere la cultura della prevenzione attraverso la diffusione di strumenti elettronici di facile utilizzo.
                        </p>
                        <p>
                            Unitamente ad un grosso lavoro di formazione e culturale, cerchiamo di rendere disponibili al grande pubblico degli strumenti di monitoraggio della propria salute.
                        </p>
                        <p>
                            Avvalendosi della consulenza di medici affermati e professionisti del soccorso, Solede propone al proprio pubblico strumenti semplici e funzionali a prezzi competitivi
                        </p>



                        </p>
                    </div>
                    <div id="form" class="column">
                        <p class="title is-4">
                            Contattaci
                        </p>
                        <p class="subtitle is-6">
                            Scrivici un messaggio e ti risponderemo il prima possibile.
                        </p>
                        <section>
                            <form accept-charset="UTF-8" action="https://formkeep.com/f/d5d9ebc89681" method="POST">
                                <input type="hidden" id="url_redirect" name="url_redirect" value="https://www.solede.com/grazie">
                                <div class="field">
                                    <label class="label is-small">Email:</label>
                                    <p class="control">
                                        <input required class="input" type="email" name="email" placeholder="Email">
                                    </p>
                                </div>
                                <div class="field">
                                    <label class="label is-small">Messaggio:</label>
                                    <p class="control">
                                        <textarea required class="textarea" name="messaggio" placeholder="Messaggio"></textarea>
                                    </p>
                                </div>
                                <div class="control has-text-centered">
                                    <button class="button is-warning">Invia la tua richiesta!</button>
                                </div>
                            </form>

                        </section>
                    </div>
                    <div class="column has-text-centered">

                        <div class="has-text-centered">
                            <strong>Solede</strong><br>
                             Progetto di Fucina del Tag
                                <br> Via Pastrengo 14
                                <br>20159 Milano
                                <br>P.IVA 03201900960


                        </div>
                        <br>
                        <div>
                                <a href="/privacy" title="Privacy Policy">Privacy Policy</a>
                        </div>
                    </div>

                </div>
            </div>
        </footer>

    </span>

</template>

<script charset="utf-8">
    import MyMenu from '~/components/MyMenu.vue'

    export default {
        components: {
            MyMenu,
        },
        data (context) {
            //console.log(this.$store);
            return {
                title: 'Sos Here Now',
                description: 'Prova'
            }
        },
        head () {
            return {
                title: this.title,
                meta: [
                    { hid: 'description', name: 'description', content: this.description }
                ]
            }
        },
    }
</script>

<style>
</style>
