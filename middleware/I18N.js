export default function (context) {

    let locale = null;


    if (context.route.params.lang === undefined) {

        locale = context.store.getters.getLocale;

        context.store.commit('SET_LOCALE', locale)

        return (
            context.redirect(301, '/' + locale)
        )

    } else {

        locale = context.route.params.lang;

        if (context.store.getters.getAllLocales.indexOf(locale) !== -1) {
            locale = locale
        }else {
            locale = context.store.getters.getLocale;
            return (

                context.redirect(301, '/' + locale)
            )
        }

        context.store.commit('SET_LOCALE', locale)
    }




        //getLanding ('home-page', store);
}
