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
      initAuth ({ commit }) {
        console.log('init auth');
        if (process.browser) {
          let token = localStorage.getItem('token')
          let dataUser = localStorage.getItem('authInfo')
          commit('SET_TOKEN', token)
          commit('SET_AUTH_INFO', JSON.parse(JSON.stringify(dataUser)))
        }

      },
      setToken({ commit }, token) {
        commit('SET_TOKEN', token)
        if (process.browser) localStorage.setItem('token', token)
      },
      setAuthInfo({ commit }, token) {
        commit('SET_AUTH_INFO', jwtDecode(token))
        if (process.browser) localStorage.setItem('authInfo', jwtDecode(token))
      },
      logout ({ commit }) {
        commit('CLEAR_TOKEN');
        if (process.browser) {
          localStorage.removeItem('token')
          localStorage.removeItem('authInfo')
        }
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
