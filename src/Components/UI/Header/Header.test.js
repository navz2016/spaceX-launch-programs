import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from './Header';

configure({ adapter: new Adapter() });

describe('Header loads with information', () => {
    it('should container header text', () => {
        const wrapper = shallow(<Header />);
        const header = (<b>SpaceX Launch Programs</b>);
        expect(wrapper.contains(header));
    })
})