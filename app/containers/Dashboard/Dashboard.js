import { connect } from 'react-redux';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { fetchDashboardData } from './actions';
import reducer from './reducer';
import saga from './saga';
import Dashboard from '../../components/Dashboard';

const mapDispatchToProps = (dispatch) => ({
  fetchDashboardData: () => dispatch(fetchDashboardData())
});

const withConnect = connect(null, mapDispatchToProps);

const withReducer = injectReducer({ key: 'dashboard', reducer });
const withSaga = injectSaga({ key: 'dashboard', saga });

export default compose(withReducer, withSaga, withConnect)(Dashboard);
export { mapDispatchToProps };
