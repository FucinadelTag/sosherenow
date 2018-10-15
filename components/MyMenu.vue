<template lang="html">
    <div>
        <div class="columns">
            <div class="column">
                <nav class="navbar myMenu" role="navigation" aria-label="main navigation">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="/">
                            <img class="imglogo" src="http://www.sosherenow.com/wp-content/uploads/2017/08/logo-menu.png" alt="SosHereNow.com">
                        </a>

                        <button class="button navbar-burger" onclick="document.querySelector('.navbar-menu').classList.toggle('is-active');">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                    <div class="navbar-menu">
                        <div class="navbar-start">
                            <!-- <a v-for="item in menuItems" class="navbar-item" v-bind:href="item.link" v-bind:class="item.isActive">{{item.name}}</a> -->
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
            menuItems: '',
            logo: ''
        }
    }
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
