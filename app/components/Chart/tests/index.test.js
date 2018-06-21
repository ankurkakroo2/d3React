import React from 'react';
import { shallow } from 'enzyme';

import Chart from '../Chart';

describe('<Chart />', () => {
  it('should render Chart component', () => {
    const renderedComponent = shallow(<Chart />);
    expect(renderedComponent.length).toBe(1);
  });
});
