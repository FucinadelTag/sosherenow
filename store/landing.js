export const state = () => ({
    landing: false,
})



export const mutations = {
    SET_DATA (state, landing) {
      state.landing = landing || false
  }
}


export const getters = {
    getLanding: state => {

        let landing = state.landing;
        return landing;
    },
    getContenuti: state => {

        let contenuti = state.landing.contenuti;
        return contenuti;
    },
    getMetadata: state => {

        let metadata = state.landing.metadata;
        return metadata;
    },
    getTestata: state => {

        let testata = state.landing.testata;
        return testata;
    },
    getId : state => {

        let id = state.landing._id;
        return id;

    }


}
