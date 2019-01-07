import React from 'react';
import {shallow} from 'enzyme';
import DashbordPage from '../../components/DashboardPage';

test('should render DashbordPage correctly', () => {
    const wrapper = shallow(<DashbordPage />);
    expect(wrapper).toMatchSnapshot();
});