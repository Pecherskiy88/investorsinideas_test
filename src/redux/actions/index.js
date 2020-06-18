import { getNewsApi } from '../api';
import { ActionType } from '../constants';

const {
  GET_NEWS_INIT,
  GET_NEWS_SUCCESS,
  GET_NEWS_FAILURE,
  SET_USER,
  REMOVE_USER,
} = ActionType;

export const getNews = () => (dispatch) => {
  dispatch({
    type: GET_NEWS_INIT,
  });
  getNewsApi()
    .then((response) => {
      dispatch({
        type: GET_NEWS_SUCCESS,
        payload: { ...response.data },
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_NEWS_FAILURE,
        payload: { ...error },
      });
    });
};

export const setUser = (data) => ({
  type: SET_USER,
  payload: data,
});

export const removeUser = () => ({
  type: REMOVE_USER,
});
