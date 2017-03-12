import React from 'react'
import Search from './Search'
// import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

test('Search snapshot test', () => {
  const component = shallow(<Search />)
  const tree = shallowToJson(component)
  // shallow only render this component and when it comes across a child component it doesn't render that component.
  // shallow to json dumps it to json
  expect(tree).toMatchSnapshot()
})


// test('Search snapshot test', () => {
//   const component = renderer.create(<Search />)
//   const tree = component.toJSON()
//   expect(tree).toMatchSnapshot()
// })

// anything you can dump to json you can snapshot test on... for example, a server response
