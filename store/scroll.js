export const state = () => ({
    classify: {},
});

export const getters = {
};

export const mutations = {
    SET_STATE(state, { prop, data }) {
        state[prop] = data;
        console.log(state[prop]);
    },
};

export const actions = {
    async setStyle({ commit }, payload) {
        commit('SET_STATE', { prop: 'classify', data: payload });
    },
};
