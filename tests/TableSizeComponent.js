import { shallow } from 'enzyme'
import React from 'react'
import TableSizeComponent from '../src/TableSizeComponent'

describe('<TableSizeComponent />' , () => {
  const wrapper = shallow(<TableSizeComponent size={3} />)
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
  it('Middle should be active' , () => {
    wrapper.find('.table-size-component__switcher_middle').simulate('click')
    expect(
      wrapper.find('.table-size-component__switcher_middle').hasClass('table-size-component__switcher_active')
    ).toBe(true)
  })
  it('Littlest should be active' , () => {
    wrapper.find('.table-size-component__switcher_littlest').simulate('click')
    expect(
      wrapper.find('.table-size-component__switcher_littlest').hasClass('table-size-component__switcher_active')
    ).toBe(true)
  })
  it('Littlest should be active again' , () => {
    wrapper.find('.table-size-component__switcher_littlest').simulate('click')
    expect(
      wrapper.find('.table-size-component__switcher_littlest').hasClass('table-size-component__switcher_active')
    ).toBe(true)
  })
})
