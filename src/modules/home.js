import {combineReducers} from 'redux-immutable'
import request from 'superagent'
// action types
// -------------
export const HOME_LOAD_SUCCESS = 'HOME_LOAD_SUCCESS'
export const HOME_LOAD_FAILED = 'HOME_LOAD_FAILED'
export const HOME_LOADING = 'HOME_LOADING'

// reducers
// ---------
const isLoading = (state = false, action) => {
  switch (action.type) {

    case HOME_LOADING:
      return true;

    case HOME_LOAD_SUCCESS:
    case HOME_LOAD_FAILED:
      return false;

    default:
      return state;
  }
}

/**
 * home state reducers
 * @type {function(state, action)}
 */
export default combineReducers({isLoading});

// actions
// --------
export const onLoad = (dispatch) => () => {
  dispatch({type: HOME_LOADING});
  setTimeout(() => {
    dispatch({type: HOME_LOAD_SUCCESS});
  }, 1500)
}
