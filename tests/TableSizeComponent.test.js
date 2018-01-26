import Enzyme, { shallow } from 'enzyme'
import Adapter from "enzyme-adapter-react-16"
Enzyme.configure({ adapter: new Adapter() });
import React from 'react'
import TableSizeComponent from '../dist/TableSizeComponent'

describe('<TableSizeComponent />' , () => {
  let density = 0
  const wrapper = shallow(<TableSizeComponent size={3} onChange={(value) => {
    density = value
  }} />)
  it('It has .table-size-component__switcher_littlest' , () => {
    expect(wrapper.find('.table-size-component__switcher_littlest').exists()).toBe(true)
  })
  it('It has .table-size-component__switcher_middle' , () => {
    expect(wrapper.find('.table-size-component__switcher_middle').exists()).toBe(true)
  })
  it('It has .table-size-component__switcher_biggest' , () => {
    expect(wrapper.find('.table-size-component__switcher_biggest').exists()).toBe(true)
  })
  it('Biggest should be active' , () => {
    expect(
      wrapper.find('.table-size-component__switcher_biggest').hasClass('table-size-component__switcher_active')
    ).toBe(true)
  })
  it('should return 2' , () => {
    wrapper.find('.table-size-component__switcher_middle').simulate('click')
    expect(density).toBe(2)
  })
  it('should return 1' , () => {
    wrapper.find('.table-size-component__switcher_littlest').simulate('click')
    expect(density).toBe(1)
  })
  it('should return 3' , () => {
    wrapper.find('.table-size-component__switcher_biggest').simulate('click')
    expect(density).toBe(3)
  })
})
