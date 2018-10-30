<template lang="html">
    <section>
        <div class="has-text-centered">
            <span class="title is-2">Rimani informato sullo stato del progetto:</span>
        </div>
        <br>
        <div class="columns is-centered">
            <div class="column is-half">
                <div class="field">
                    <div class="control has-icons-left has-icons-right">
                        <input class="input is-info" type="email" placeholder="Inserisci Il tuo indirizzo email" value="">
                        <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                        </span>

                    </div>
                </div>
                <div class="field">
                    <div class="control has-text-centered">
                        <button class="button is-primary">
                            Tienimi informato
                        </button>
                    </div>
                </div>
            </div>

        </div>
    </section>

</template>

<script>
export default {
    data (context) {
        //console.log(this.$store);
        return {
            lang: this.$store.getters.getLocale,
        }
    },
}
</script>

<style lang="scss">
</style>
