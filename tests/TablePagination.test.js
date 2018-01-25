import * as React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from "enzyme-adapter-react-16"
import TablePagination from '../src/TablePagination'
Enzyme.configure({ adapter: new Adapter() });

describe('<TablePagination />', () => {
  let prev = false
  let next = false
  let page = 1
  let maxItems = 10
  const wrapper = shallow(
    <TablePagination
      onLast={() => {
        next = false
        prev = true
      }}
      onFirst={() => {
        next = true
        prev = false
      }}
      onChangeCurrentPage={(value) => {
        page = value
      }}
      onChangeMaxItems={(value) => {
        maxItems = value
      }}
      page={9}
      max={10}
      onNext={() => {
       next = true
       prev = false
     }} onPrev={() => {
      prev = true
      next = false
    }} />
  )
  it('onPrev is runnable' , () => {
    wrapper.find('.table-pagination__prev').simulate('click')
    expect(prev).toBe(true)
    expect(next).toBe(false)
  })
  it('onNext is runnable' , () => {
    wrapper.find('.table-pagination__next').simulate('click')
    expect(prev).toBe(false)
    expect(next).toBe(true)
  })
  it('onFirst is runnable' , () => {
    wrapper.find('.table-pagination__first').simulate('click')
    expect(prev).toBe(false)
    expect(next).toBe(true)
  })
  it('onLast is runnable' , () => {
    wrapper.find('.table-pagination__last').simulate('click')
    expect(prev).toBe(true)
    expect(next).toBe(false)
  })

  it('set page on 2' , () => {
    wrapper.find('.table-pagination__set-page').simulate('change', {target: { value : '2'}})
    expect(page).toBe(2)
  })
  it('set page on 8' , () => {
    wrapper.find('.table-pagination__set-page').simulate('change', {target: { value : '8'}})
    expect(page).toBe(8)
  })

  it('set maxItems on 25' , () => {
    wrapper.find('.table-pagination__select_limit_rows').simulate('change', {target: { value : '25'}})
    expect(maxItems).toBe(25)
  })
  it('set maxItems on 50' , () => {
    wrapper.find('.table-pagination__select_limit_rows').simulate('change', {target: { value : '50'}})
    expect(maxItems).toBe(50)
  })
  it('set maxItems on 100' , () => {
    wrapper.find('.table-pagination__select_limit_rows').simulate('change', {target: { value : '100'}})
    expect(maxItems).toBe(100)
  })
  it('set maxItems on 10' , () => {
    wrapper.find('.table-pagination__select_limit_rows').simulate('change', {target: { value : '10'}})
    expect(maxItems).toBe(10)
  })
})
