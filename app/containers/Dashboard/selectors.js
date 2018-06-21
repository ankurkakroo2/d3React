import { createSelector } from 'reselect';

const selectDashboard = (state) => state.get('dashboard');

const makeSelectDashBoardData = () => createSelector(
  selectDashboard,
  (dashboardState) => dashboardState.get('data')
);

const makeSelectIsFetching = () => createSelector(
  selectDashboard,
  (dashboardState) => dashboardState.get('isFetching')
);

const makeSelectError = () => createSelector(
  selectDashboard,
  (dashboardState) => dashboardState.get('error')
);

export { makeSelectDashBoardData, makeSelectIsFetching, makeSelectError };
