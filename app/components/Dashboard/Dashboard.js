import React from 'react';
import { bool, func } from 'prop-types';
import { Helmet } from 'react-helmet';
import Chart from '../../containers/Chart';
import './style.scss';


class Dashboard extends React.PureComponent {
  componentDidMount() {
    const { fetchDashboardData } = this.props;
    fetchDashboardData();
  }
  render() {
    const { error } = this.props;
    return (
      <article>
        <Helmet>
          <title>Dashboard</title>
          <meta name="description" content="Data Visualiser" />
        </Helmet>
        <div className="home-page">
          <section className="centered">
            <h2>Dashboard</h2>
            <Chart />
            {error}
          </section>
        </div>
      </article>
    );
  }
}

Dashboard.propTypes = {
  fetchDashboardData: func,
  error: bool
};

Dashboard.defaultProps = {
  fetchDashboardData: () => {},
};

export default Dashboard;
