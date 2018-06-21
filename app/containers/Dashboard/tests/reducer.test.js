import { fromJS } from 'immutable';

import dashboardReducer from '../reducer';
import { fetchDashboardData, fetchDashboardDataSuccess, fetchDashboardDataError } from '../actions';

describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      isFetching: true,
      data: null,
      error: null
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(dashboardReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the fetchDashboardData action correctly', () => {
    const expectedResult = state.set('isFetching', true);

    expect(dashboardReducer(state, fetchDashboardData())).toEqual(expectedResult);
  });

  it('should handle the fetchDashboardDataSuccess action correctly', () => {
    const data = [
      {
        x: 'abc',
        y: 23
      }
    ];
    const expectedResult = state.set('data', data).set('isFetching', false);

    expect(dashboardReducer(state, fetchDashboardDataSuccess(data))).toEqual(expectedResult);
  });

  it('should handle the fetchDashboardDataError action correctly', () => {
    const error = {};
    const expectedResult = state.set('error', error).set('isFetching', false);

    expect(dashboardReducer(state, fetchDashboardDataError(error))).toEqual(expectedResult);
  });
});
