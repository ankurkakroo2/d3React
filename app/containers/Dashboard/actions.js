import {
  FETCH_DASHBOARD_DATA,
  FETCH_DASHBOARD_DATA_SUCCESS,
  FETCH_DASHBOARD_DATA_ERROR
} from './constants';

/**
 * Requests dashboard data in redux store
 * @return {object} An action object with a type of FETCH_DASHBOARD_DATA
 */
export function fetchDashboardData() {
  return {
    type: FETCH_DASHBOARD_DATA
  };
}


/**
 * Updates dashboard data in redux store
 * @param  {object} data Dashboard data
 * @return {object} An action object with a type of FETCH_DATA_SUCCESS
 */
export function fetchDashboardDataSuccess(data) {
  return {
    type: FETCH_DASHBOARD_DATA_SUCCESS,
    data
  };
}

/**
 * Updates dashboard error data in redux store
 * @param  {object} data Dashboard data
 * @return {object} An action object with a type of FETCH_DATA_SUCCESS
 */
export function fetchDashboardDataError(error) {
  return {
    type: FETCH_DASHBOARD_DATA_ERROR,
    error
  };
}
