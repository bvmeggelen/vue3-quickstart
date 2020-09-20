const app = {
    namespaced: true,
    state () {
        return {
            init: false
        }
    },
    getters: {
        init (state) {
            return state.init;
        }
    },
    mutations: {
        init_complete (state) {
            state.init = true;
        }
    },
    actions: {}
};

export default app;
