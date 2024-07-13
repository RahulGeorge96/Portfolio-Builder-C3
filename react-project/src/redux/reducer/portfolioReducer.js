import { SAVE_PORTFOLIO, SAVE_TO_LOCAL_STORAGE, SET_THEME, UPDATE_PORTFOLIO } from "../actions/portfolioActionTypes";

const initialState = {
  theme: {
    background: "",
    foreground: "",
  },
  portfolio: {
    name: "",
    designation: "",
    location: "",
    bio: "",
    imageURL: "", // Add imageURL field
  },
  savedPortfolios: JSON.parse(localStorage.getItem("portfolios")) || [],
};

export const portfolioReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    case UPDATE_PORTFOLIO:
      return {
        ...state,
        portfolio: {
          ...state.portfolio,
          ...action.payload,
        },
      };
    case SAVE_PORTFOLIO:
      return {
        ...state,
        savedPortfolios: [...state.savedPortfolios, action.payload],
      };
    case SAVE_TO_LOCAL_STORAGE:
      localStorage.setItem("portfolios", JSON.stringify(action.payload));
      return state;
    default:
      return state;
  }
};
