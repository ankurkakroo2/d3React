import { call, put, takeLatest } from 'redux-saga/effects';
import { FETCH_DASHBOARD_DATA } from './constants';
import { fetchDashboardDataSuccess, fetchDashboardDataError } from './actions';

import request from '../../utils/request';

export function* getData() {
  const requestURL = 'http://konuxdata.getsandbox.com/data';

  try {
    const { values } = yield call(request, requestURL);
    yield put(fetchDashboardDataSuccess(values));
  } catch (err) {
    yield put(fetchDashboardDataError(err));
  }
}

export default function* getDashboardData() {
  yield takeLatest(FETCH_DASHBOARD_DATA, getData);
}
