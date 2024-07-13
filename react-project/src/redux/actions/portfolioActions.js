import { SAVE_PORTFOLIO, SAVE_TO_LOCAL_STORAGE, SET_THEME, UPDATE_PORTFOLIO } from "./portfolioActionTypes";




export const setTheme = (theme) => ({
  type: SET_THEME,
  payload: theme,
});

export const updatePortfolio = (portfolio) => ({
  type: UPDATE_PORTFOLIO,
  payload: portfolio,
});

export const savePortfolio = (portfolio) => ({
  type: SAVE_PORTFOLIO,
  payload: portfolio,
});

export const saveToLocalStorage = (portfolios) => ({
  type: SAVE_TO_LOCAL_STORAGE,
  payload: portfolios,
});


