import { combineReducers } from 'redux';

import { ActionType } from '../constants';

const {
  GET_NEWS_INIT,
  GET_NEWS_SUCCESS,
  GET_NEWS_FAILURE,
  SET_USER,
  REMOVE_USER,
} = ActionType;

const newsDataInitialState = {
  articles: [],
  loading: false,
  loaded: false,
  error: false,
  errorData: {},
};

const newsDataReducer = (state = newsDataInitialState, { type, payload }) => {
  switch (type) {
    case GET_NEWS_INIT:
      return {
        ...state,
        loading: true,
        loaded: false,
        error: false,
        errorData: {},
      };
    case GET_NEWS_SUCCESS: {
      const { articles } = payload;
      return {
        ...state,
        articles,
        loading: false,
        loaded: true,
        error: false,
        errorData: {},
      };
    }
    case GET_NEWS_FAILURE: {
      return {
        ...state,
        loading: false,
        loaded: false,
        error: true,
        errorData: payload,
      };
    }
    default:
      return state;
  }
};

const userInitialState = {
  name: '',
  email: '',
  imageUrl: '',
  googleId: '',
};

export const userDataReducer = (
  state = userInitialState,
  { type, payload },
) => {
  switch (type) {
    case SET_USER: {
      return { ...payload };
    }
    case REMOVE_USER:
      return { ...userInitialState };
    default:
      return state;
  }
};

export default combineReducers({
  newsData: newsDataReducer,
});
