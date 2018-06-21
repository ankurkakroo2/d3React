import { fromJS } from 'immutable';
import {
  FETCH_DASHBOARD_DATA,
  FETCH_DASHBOARD_DATA_ERROR,
  FETCH_DASHBOARD_DATA_SUCCESS
} from './constants';


// The initial state of Dashboard Container
const initialState = fromJS({
  isFetching: true,
  data: null,
  error: null
});

function homeReducer(state = initialState, {
  type,
  data,
  error
}) {
  switch (type) {
    case FETCH_DASHBOARD_DATA:
      return state.set('isFetching', true);
    case FETCH_DASHBOARD_DATA_SUCCESS:
      return state.set('data', data).set('isFetching', false).set('error', null);
    case FETCH_DASHBOARD_DATA_ERROR:
      return state.set('error', error).set('isFetching', false);
    default:
      return state;
  }
}

export default homeReducer;
