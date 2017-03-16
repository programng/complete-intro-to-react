import React from 'react'
import { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'
import Search from './Search'
import ShowCard from './ShowCard'
import preload from '../public/data.json'
// import renderer from 'react-test-renderer'

test('Search snapshot test', () => {
  const component = shallow(<Search />)
  const tree = shallowToJson(component)
  // shallow only render this component and when it comes across a child component it doesn't render that component.
  // shallow to json dumps it to json
  expect(tree).toMatchSnapshot()
})


test('Search should render a ShowCard for each show', () => {
  const component = shallow(<Search />)
  expect(component.find(ShowCard).length).toEqual(preload.shows.length)
})

test('Search should render correct amount of shows based on search', () => {
  const searchWord = 'house'
  const component = shallow(<Search />)
  component.find('input').simulate('change', {target: {value: searchWord}})
  const showCount = preload.shows
            .filter((show) => {
              return `${show.title} ${show.description}`.toUpperCase().indexOf(searchWord.toUpperCase()) >= 0
            }).length
  expect(component.find(ShowCard).length).toEqual(showCount)
  // could get more specific and expect certain shows, for example, but count is a good quick test
  // does not do event bubbling (propogation)
})

// test('Search snapshot test', () => {
//   const component = renderer.create(<Search />)
//   const tree = component.toJSON()
//   expect(tree).toMatchSnapshot()
// })

// anything you can dump to json you can snapshot test on... for example, a server response
