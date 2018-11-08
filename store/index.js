export const state = () => ({
    locales: ['it', 'en'],
    locale: 'en',
})


export const mutations = {
    SET_LOCALE (state, locale) {
        if (state.locales.indexOf(locale) !== -1) {
            state.locale = locale
        }else {
            state.locale = 'en'
        }
    }

}

export const getters = {
    getLocale: state => {

        let locale = state.locale;

        return locale;
    },
    getAllLocales: state => {

        let locales = state.locales;

        return locales;
    },
    getDafaultLocale: state => {

        return 'en';
    },
}
