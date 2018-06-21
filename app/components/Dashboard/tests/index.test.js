import React from 'react';
import { shallow } from 'enzyme';

import Dashboard from '../index';

describe('<Dashboard />', () => {
  it('should render Dashboard component', () => {
    const renderedComponent = shallow(<Dashboard />);
    expect(renderedComponent.length).toBe(1);
  });
});
