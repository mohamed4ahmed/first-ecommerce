import { createSlice } from "@reduxjs/toolkit";
import { API } from "../ItemTypes";

const fetchApi = createSlice({
  name: API,
  initialState: {
    about: null,
    products: {
      special: null,
      fiberLaser: null,
      pressBrakes: null,
      automation: null,
      // fourCategory: null,
      // fiveCategory: null,
      // sixCategory: null,
      // sevenCategory: null,
      // eightCategory: null,
      // nineCategory: null,
      // tenCategory: null,
    },
    productsList: null,
    posts: null,
    instaPosts: null,
    hero: null,
    heroProduct: null,
    heroBlog: null,
  },
  reducers: {
    setAboutData: (state, action) => {
      state.about = action.payload;
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },
    setInstaPosts: (state, action) => {
      state.instaPosts = action.payload;
    },
    setHero: (state, action) => {
      state.hero = action.payload;
    },
    setProductSpecial: (state, action) => {
      state.products.special = action.payload;
    },
    setProductFiberLaser: (state, action) => {
      state.products.fiberLaser = action.payload;
    },
    setProductPressBrakes: (state, action) => {
      state.products.pressBrakes = action.payload;
    },
    setProductAutomation: (state, action) => {
      state.products.automation = action.payload;
    },
    // setProductFourCategory: (state, action) => {
    //   state.products.fourCategory = action.payload;
    // },
    // setProductFiveCategory: (state, action) => {
    //   state.products.fiveCategory = action.payload;
    // },
    // setProductSixCategory: (state, action) => {
    //   state.products.sixCategory = action.payload;
    // },
    // setProductSevenCategory: (state, action) => {
    //   state.products.sevenCategory = action.payload;
    // },
    // setProductEightCategory: (state, action) => {
    //   state.products.eightCategory = action.payload;
    // },
    // setProductNineCategory: (state, action) => {
    //   state.products.nineCategory = action.payload;
    // },
    // setProductTenCategory: (state, action) => {
    //   state.products.tenCategory = action.payload;
    // },

    setHeroProduct: (state, action) => {
      state.heroProduct = action.payload;
    },
    setProductsList: (state, action) => {
      state.productsList = action.payload;
    },
    setHeroBlog: (state, action) => {
      state.heroBlog = action.payload;
    },
  },
});

const { reducer, actions } = fetchApi;

export const {
  setAboutData,
  setPosts,
  setInstaPosts,
  setHero,
  setProductSpecial,
  setProductFiberLaser,
  setProductPressBrakes,
  setProductAutomation,
  // setProductFourCategory,
  // setProductFiveCategory,
  // setProductSixCategory,
  // setProductSevenCategory,
  // setProductEightCategory,
  // setProductNineCategory,
  // setProductTenCategory,

  setHeroProduct,
  setProductsList,
  setHeroBlog,
} = actions;

export default reducer;
