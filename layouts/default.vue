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
                            Comments
                        </p>
                        <section class="">
                            <section id="disqus_thread"></section>
                            <vue-disqus shortname="www-sosherenow-it" v-bind:identifier="getIdentifier" v-bind:url="getAbsoluteUrl"></vue-disqus>
                        </section>
                    </div>
                    <div id="form" class="column">
                        <p class="title is-4">
                            {{$t(traduzioni.contatti.contattaci)}}
                        </p>
                        <p class="subtitle is-6">
                            {{$t(traduzioni.contatti.scrivimessaggio)}}
                        </p>
                        <section>
                            <form v-on:submit.prevent ="submitForm($event)">
                                <input type="hidden" id="url_redirect" name="url_redirect" value="https://www.solede.com/grazie">
                                <div class="field">
                                    <label class="label is-small">Email:</label>
                                    <p class="control">
                                        <input required class="input" v-model="email" type="email" name="email" placeholder="Email" required>
                                    </p>
                                </div>
                                <div class="field">
                                    <label class="label is-small">{{$t(traduzioni.contatti.messaggio)}}:</label>
                                    <p class="control">
                                        <textarea required class="textarea" v-model="message" name="message" v-bind:placeholder="$t(traduzioni.contatti.messaggio)"></textarea>
                                    </p>
                                </div>
                                <div class="control has-text-centered">
                                    <button class="button is-warning">{{$t(traduzioni.contatti.inviarichiesta)}}</button>
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
                                <a v-bind:href="getPrivacyUrl" title="Privacy Policy">Privacy Policy</a>
                        </div>
                    </div>

                </div>
            </div>
        </footer>

    </span>

</template>

<script charset="utf-8">
    import MyMenu from '~/components/MyMenu.vue'
    import axios from 'axios'

    export default {
        components: {
            MyMenu,
        },
        data (context) {
            //console.log(this.$store);
            return {
                lang: this.$store.getters.getLocale,
                title: 'Sos Here Now',
                description: 'Prova',
                email:'',
                message:'',
                traduzioni: this.$store.getters['traduzioni/getTraduzioni'],
            }
        },
        computed: {
            // a computed getter
            getIdentifier: function () {

                return 'sos-here-now';
            },
            getAbsoluteUrl: function () {

                return 'https://www.sosherenow.it/';
            },
            getPrivacyUrl: function () {

                return '/' + this.lang + '/privacy';
            }
        },
        methods: {
            submitForm: function (e) {
                //let item = prepareItem (this.prodotto);
                let actionUrl = "https://hooks.zapier.com/hooks/catch/178342/em1xqq/";

                // const store = this.$store;
                var self = this;
                //
                axios.post(actionUrl, {
                    email: this.email,
                    message: this.message,
                }, {
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    }
                })
                .then(function (response) {
                    console.log(response);
                    window.location.href = '/'+ self.lang +'/grazie-contatto';
                })
                .catch(function (error) {
                    console.log(error);
                });
                //
                // ga('send', {
                //     hitType: 'event',
                //     eventCategory: 'Cart',
                //     eventAction: 'add'
                // });

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
