import React from 'react'
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FilterContainer from './FilterContainer';
import FilterItem from './FilterItem';
import FlagFilter from './FlagFilter';
import YearFilter from './YearFilter';
import FilterButton from './FilterButton';

configure({ adapter: new Adapter() });

const filterData = new Array(3).fill({type:"test"});

describe('rendering <FilterContainer/>', () => {
    it(`should render ${filterData.length} <FilterItem/> elements`, () => {
        const wrapper = shallow(<FilterContainer FILTER_TYPES={filterData} />);
        expect(wrapper.find(FilterItem)).toHaveLength(filterData.length);
    })
})

describe('rendering filter buttons', () => {
    it(`should render 2 flag filter buttons elements`, () => {
        const wrapper = shallow(<FlagFilter type={{'displayName': 'flag'}}/>);
        expect(wrapper.find(FilterButton));
    })
    it(`should render 15 year filter buttons elements till date`, () => {
        const wrapper = shallow(<YearFilter type={{'displayName': 'year','minRange': 2006}}/>);
        expect(wrapper.find(FilterButton));
    })
})
