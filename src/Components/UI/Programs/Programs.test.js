import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ProgramList from './ProgramList';
import Program from './Program';


configure({ adapter: new Adapter() });

const launchData = new Array(10).fill().map((_, i) => { return { flight_number: i } });

describe('<ProgramList/>', () => {
    beforeEach(() => {
        global.IntersectionObserver = class IntersectionObserver {
            constructor() { }

            disconnect() {
                return null;
            }

            observe() {
                return null;
            }

            takeRecords() {
                return null;
            }

            unobserve() {
                return null;
            }
        };
    })
    it(`should render ${launchData.length} <Program/> elements`, () => {
        const wrapper = shallow(<ProgramList programs={launchData} />);
        expect(wrapper.find(Program)).toHaveLength(launchData.length);
    })
})