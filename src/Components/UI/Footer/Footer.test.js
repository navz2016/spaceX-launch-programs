import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Footer from './Footer';

configure({ adapter: new Adapter() });

describe('Footer loads with information', () => {
    it('should container developer name', () => {
        const wrapper = shallow(<Footer />);
        const footer = ("Navjeet Singh");
        expect(wrapper.contains(footer));
    })
})