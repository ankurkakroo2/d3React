import React from 'react';
import { shallow } from 'enzyme';

import VisualizationWrapper from '../VisualizationWrapper';

describe('<Chart />', () => {
  it('should render VisualizationWrapper component', () => {
    const renderedComponent = shallow(<VisualizationWrapper />);
    expect(renderedComponent.length).toBe(1);
  });
});
