<template lang="html">
    <div>
        <div class="columns">
            <div class="column">
                <nav class="navbar myMenu" role="navigation" aria-label="main navigation">
                    <div class="navbar-brand">
                        <a class="navbar-item" v-bind:href="getHomeUrl">
                            <img class="imglogo" src="/images/logo-menu.png" alt="SosHereNow.com">
                        </a>

                        <button class="button navbar-burger" onclick="document.querySelector('.navbar-menu').classList.toggle('is-active');">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                    <div class="navbar-menu">
                        <div class="navbar-end">
                            <a class="navbar-item" href="/it">IT</a>
                            <a class="navbar-item" href="/en">EN</a>
                        </div>
                    </div>
                </nav>
            </div>

        </div>


    </div>

</template>

<script>
export default {
    //props: ['isActive'],
    components: {
    },
    data: function () {
        return {
            lang: this.$store.getters.getLocale,
            menuItems: '',
            logo: ''
        }
    },
    computed: {
        // a computed getter
        getHomeUrl: function () {

            return '/' + this.lang;
        }
    },
}
</script>

<style lang="scss">
.logo {
    padding-top: 0px;
}


.myMenu {
    margin-bottom: 10px;
    border-bottom: 1px solid;
    border-bottom-color: $grey-ligh;
    //margin-top: 10px;
    //border-top: 1px solid;
    //border-top-color: $grey;

    .imglogo {
        padding: 0px;
        max-height: 3.3rem;
    }

    .active {
        background-color: #f1f1f1;
    }
}
</style>
