import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { makeSelectDashBoardData, makeSelectIsFetching, makeSelectError } from '../Dashboard/selectors';

import Chart from '../../components/Chart';


const mapStateToProps = createStructuredSelector({
  data: makeSelectDashBoardData(),
  isFetching: makeSelectIsFetching(),
  error: makeSelectError()
});

export default connect(mapStateToProps)(Chart);

