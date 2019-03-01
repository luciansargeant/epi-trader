// TODO: 2 - Add 'stocksModule' to the state; and add this module to the store

import stocksData from '../../data/stocks-data';

const state = {
    stocks: [],
};

const mutations = {
    setStocks(state, stocks) {
      state.stocks = stocks;
    },
};

const actions = {
    initStocks({ commit }) {
      console.log('Being called', stocksData  );
      commit('setStocks', stocksData);
    },
};

const getters = {
    stocks(state)  {
        console.log("AHHHHHH");
        return state.stocks;
    },
};

export default {
    state,
    mutations,
    actions,
    getters,
};
