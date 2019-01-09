export const state = () => ({
    articoli: false,
    articolo: false
})



export const mutations = {
    SET_DATA (state, articoli) {
      state.articoli = articoli || false
  },
  SET_ARTICOLO (state, articolo) {
    state.articolo = articolo || false
}
}


export const getters = {
    getArticoli: state => {

        let articoli = state.articoli;
        return articoli;
    },
    getArticolo: state => {

        let articolo = state.articolo;
        return articolo;
    }


}
