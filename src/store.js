import { createStore } from 'vuex';
import app from './store/app';

const store = createStore({
    modules: {
        app
    }
});

export default store;
