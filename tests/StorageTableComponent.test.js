import React from 'react'
import Enzyme, { mount } from 'enzyme'
import Adapter from "enzyme-adapter-react-16"
Enzyme.configure({ adapter: new Adapter() });
import StorageTableComponent from '../dist/StorageTableComponent'
import StorageMock from 'storage-manager-es/dist/StorageMock'
import ColumnEntityStorageFactory from 'ui-package--table-component/dist/Factories/ColumnEntityStorageFactory'
import { COLUMN_STORAGE_HIDDEN as HIDDEN } from 'ui-package--table-component/dist/Entities/HeadColumn/constants'
import TableSizeComponent from '../dist/TableSizeComponent'

describe('StorageTableComponent', () => {
  describe('Fields: name, phone', () => {
    const TABLE_NAME = 'TestTable'
    const storage = new StorageMock()
    let density = 0

    storage.setData(`${TABLE_NAME}__phone__${HIDDEN}`, true)
    const wrapper = mount(
      <StorageTableComponent
        onChangeDensity={(value) => {
          density = value
        }}
        storage={storage}
        tableName={TABLE_NAME}
        createBodyColumns={(entity) => {}}
        createHeadColumns={() => {
          return new ColumnEntityStorageFactory(TABLE_NAME, [HIDDEN], storage)
            .addHeader('name')
            .addHeader('phone')
            .getHeaders()
        }} />
    )
    it('Should not has checkbox', () => {
      expect(wrapper.find('.table-component__head').find('.table-component__column-checkbox').exists()).toBe(false)
    })
    it('should return true', () => {
      expect(wrapper.find(TableSizeComponent).find('.table-size-component__switcher_middle').hasClass('table-size-component__switcher_active')).toBe(true)
    })
    it('Should has field with label "name"', () => {
      expect(
        wrapper
          .find('.table-component__head')
          .find('.table-component__header-field')
          .at(0)
          .find('.table-component__field-name')
          .text()
      ).toBe('name')
    })
    it('should return false', () => {
      expect(
        wrapper
          .find('.table-component__head')
          .find('.table-component__header-field')
          .length
      ).toBe(1)
    })
    it('should return 3', () => {
      wrapper.find(TableSizeComponent).find('.table-size-component__switcher_biggest').simulate('click')

      expect(storage.getData('TestTable__density')).toBe(3)
      expect(density).toBe(3)
    })
  })
})
