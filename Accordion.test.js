import React from 'react';
import Accordion from './Accordion';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Accordion Component',() => {
    const sections = [
        {
        title: 'The title',
        content: 'The content is here'
      },
      {
        title: 'The second title',
        content: 'The content is here too'
      },
      {
        title: 'The third title',
        content: 'The content is here also'
      }
      ]
    it('renders an empty li when the sections prop is not supplied', () => {
        const wrapper = shallow(<Accordion />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
    it('renders no sections as active by default', () => {
        const wrapper = shallow(<Accordion sections={sections} />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })
    it('opens a clicked section', () => {
        const wrapper = shallow(<Accordion sections={sections} />)
        wrapper.find('button').at(1).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })
    it('only opens the last section when multiple sections have been clicked', () => {
        const wrapper = shallow(<Accordion sections={sections} />)
        wrapper.find('button').at(0).simulate('click')
        wrapper.find('button').at(1).simulate('click')
        expect(toJson(wrapper)).toMatchSnapshot()
    })
})
