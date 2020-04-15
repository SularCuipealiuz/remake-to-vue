const state = {
  loginPanel: false
};

const mutations = {
  SET_LOGIN_STATE: (state, boolean) => {
    state.loginPanel = boolean;
  }
};

const actions = {
  setLoginState({ commit }, boolean) {
    commit("SET_LOGIN_STATE", boolean);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
