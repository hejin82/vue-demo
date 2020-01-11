import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import CartModule from "./cart";

Vue.use(Vuex);

const baseUrl = "http://localhost:3500";
const productsUrl = `${baseUrl}/products`;
const categoriesUrl = `${baseUrl}/categories`;

export default new Vuex.Store({
  strict: true,
  modules: { cart: CartModule },
  state: {
    products: [],
    categoriesData: [],
    purductTotal: 0,
    currentPage: 1,
    pageSize: 4,
    currentCategory: "All"
  },
  getters: {
    productsFilteredByCategory: state =>
      state.products.filter(
        p =>
          state.currentCategory == "All" || p.category == state.currentCategory
      ),
    processedProducts: (state, getters) => {
      let index = (state.currentPage - 1) * state.pageSize;
      // return state.products.slice(index, index + state.pageSize);
      return getters.productsFilteredByCategory.slice(
        index,
        index + state.pageSize
      );
    },
    // pageCount: state => Math.ceil(state.purductTotal / state.pageSize)
    pageCount: (state, getters) =>
      Math.ceil(getters.productsFilteredByCategory.length / state.pageSize),
    categories: state => ["All", ...new Set(state.categoriesData)]
  },
  mutations: {
    setCurrentPage(state, page) {
      state.currentPage = page;
    },
    setPageSize(state, size) {
      state.pageSize = size;
      state.currentPage = 1;
    },
    setCurrentCategory(state, category) {
      state.currentCategory = category;
      state.currentPage = 1;
    },
    setData(state, data) {
      state.products = data.pdata;
      state.purductTotal = data.pdata.length;
      state.categoriesData = data.cdata.sort();
    }
  },
  actions: {
    async getData(context) {
      let pdata = (await Axios.get(productsUrl)).data;
      let cdata = (await Axios.get(categoriesUrl)).data;
      context.commit("setData", { pdata, cdata });
    }
  }
});
