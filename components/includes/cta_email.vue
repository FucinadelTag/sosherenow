<template lang="html">
    <section class="banner">
        <div class="has-text-centered">
            <span class="title is-2 has-text-danger">{{$t(traduzioni.calltoaction.inprevendita50)}}</span>
        </div>
        <br>
        <div class="columns is-centered">
            <div class="column is-half">
                <form v-on:submit.prevent ="submitForm($event)">
                    <div class="field">
                        <div class="control has-icons-left has-icons-right">
                            <input class="input is-info is-medium" v-model="email" type="email" v-bind:placeholder="$t(traduzioni.calltoaction.addemail)" required>
                            <span class="icon is-small is-left">
                                <i class="fas fa-envelope"></i>
                            </span>

                        </div>
                    </div>
                    <div class="field">
                        <div class="control has-text-centered">
                            <button class="button is-large is-warning">
                                <i class="fas fa-envelope"></i>&nbsp;{{$t(traduzioni.calltoaction.ricordamilaprevendita)}}!
                            </button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
        <div class="has-text-centered">
            <span class="subtitle is-4"><strong>{{$t(traduzioni.calltoaction.affrettati)}}</strong>! {{$t(traduzioni.calltoaction.soloprimi100)}}</span>
        </div>
    </section>

</template>

<script>
import axios from 'axios'

export default {
    data (context) {
        //console.log(this.$store);
        return {
            lang: this.$store.getters.getLocale,
            traduzioni: this.$store.getters['traduzioni/getTraduzioni'],
            email: '',
        }
    },
    methods: {
        submitForm: function (e) {
            //let item = prepareItem (this.prodotto);
            let actionUrl = "https://hooks.zapier.com/hooks/catch/178342/emhivv/";

            // const store = this.$store;
            var self = this;
            //
            axios.post(actionUrl, {
                email: this.email,
            }, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            })
            .then(function (response) {
                console.log(response);
                window.location.href = '/'+ self.lang +'/grazie';
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
    }
}
</script>

<style lang="scss">
</style>
