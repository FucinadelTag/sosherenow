export const state = () => ({
    traduzioni: false,
})



export const mutations = {
    SET_DATA (state, traduzioni) {
      state.traduzioni = traduzioni || false
  }
}


export const getters = {
    getTraduzioni: state => {

        let traduzioni = state.traduzioni;
        return traduzioni;
    }


}
