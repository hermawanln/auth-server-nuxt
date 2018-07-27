import Vuex from 'vuex'
import jwtDecode from "jwt-decode";

const createStore = () => {
  return new Vuex.Store({
    state: {
      token: null,
      authInfo: null
    },
    mutations: {
      SET_TOKEN (state, token) {
        state.token = token
      },
      CLEAR_TOKEN (state) {
        state.token = null;
      },
      SET_AUTH_INFO (state, data) {
        state.authInfo = data
      }
    },
    actions: {
      reauth ({ commit }) {
        console.log('init auth');
        let token = localStorage.getItem('token')
        let dataUser = localStorage.getItem('authInfo')

        commit('SET_TOKEN', token)
        commit('SET_AUTH_INFO', JSON.parse(dataUser))
      },
      setToken({ commit }, token) {
        commit('SET_TOKEN', token)
        localStorage.setItem('token', token)
      },
      setAuthInfo({ commit }, token) {
        commit('SET_AUTH_INFO', jwtDecode(token))
        localStorage.setItem('authInfo', jwtDecode(token))
      },
      logout ({ commit }) {
        commit('CLEAR_TOKEN');
        localStorage.removeItem('token')
        localStorage.removeItem('authInfo')
      }
    },
    getters: {
      isLogedIn(state) {
        return state.token !== null ? true : false;
      }
    }
  })
}

export default createStore
