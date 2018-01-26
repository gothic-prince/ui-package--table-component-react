import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from "enzyme-adapter-react-16"
Enzyme.configure({ adapter: new Adapter() });
import SimpleTableComponent from '../dist/SimpleTableComponent'
import ColumnEntityFactory from 'ui-package--table-component/dist/Factories/ColumnEntityFactory'
import SortComponent from '../dist/SortComponent'

describe('<SimpleTableComponent />', () => {
  describe('Header', () => {
    describe('Fields: name, phone', () => {
      const wrapper = shallow(
        <SimpleTableComponent
          createBodyColumns={(entity) => {}}
          createHeadColumns={() => {
            return new ColumnEntityFactory()
              .addHeader('name')
              .addHeader('phone')
              .getHeaders()
          }} />
      )
      it('Should not has checkbox', () => {
        expect(wrapper.find('.table-component__head').find('.table-component__column-checkbox').exists()).toBe(false)
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
      it('Should has field with label "phone"', () => {
        expect(
          wrapper
            .find('.table-component__head')
            .find('.table-component__header-field')
            .at(1)
            .find('.table-component__field-name')
            .text()
        ).toBe('phone')
      })
    })
    describe('Fields: customer, id, emails', () => {
      const wrapper = shallow(
        <SimpleTableComponent
          createBodyColumns={(entity) => {}}
          createHeadColumns={() => {
            return new ColumnEntityFactory()
              .addHeader('customer', 'Customer')
              .addHeader('id', '#id')
              .addHeader('emails', 'emails')
              .addHeader('phone', 'phone', true, true)
              .getHeaders()
          }} />
      )
      it('Should not has checkbox', () => {
        expect(wrapper.find('.table-component__head').find('.table-component__column-checkbox').exists()).toBe(false)
      })
      it('Should has field with label "Customer"', () => {
        expect(
          wrapper
            .find('.table-component__head')
            .find('.table-component__header-field')
            .at(0)
            .find('.table-component__field-name')
            .text()
        ).toBe('Customer')
      })
      it('Should has field with label "#id"', () => {
        expect(
          wrapper
            .find('.table-component__head')
            .find('.table-component__header-field')
            .at(1)
            .find('.table-component__field-name')
            .text()
        ).toBe('#id')
      })
      it('Should has field with label "emails"', () => {
        expect(
          wrapper
            .find('.table-component__head')
            .find('.table-component__header-field')
            .at(2)
            .find('.table-component__field-name')
            .text()
        ).toBe('emails')
      })
      it('Should\'nt has field with label "phone"', () => {
        expect(
          wrapper
            .find('.table-component__head')
            .find('.table-component__header-field')
            .at(3)
            .find('.table-component__field-name')
            .exists()
        ).toBe(false)
      })
    })
  })
  describe('Body', () => {
    describe('Default function row with structure: name, phone', () => {
      const data = [
        {name: 'Alex', phone: '98234798234'},
        {name: 'Jimmy', phone: '09856745'},
        {name: 'Albert', phone: '02138366322132'},
        {name: 'Jone', phone: '76235464'},
        {name: 'Paul', phone: '627363'}
      ]
      const wrapper = shallow(
        <SimpleTableComponent
          entities={data}
          onSelectEntity={() => {}}
          createBodyColumns={(entity) => {
            return new ColumnEntityFactory()
              .addBody('name', entity.name)
              .addBody('phone', entity.phone)
              .getBodies()
          }}
          createHeadColumns={() => {
            return new ColumnEntityFactory()
              .addHeader('name')
              .addHeader('phone')
              .getHeaders()
          }} />
      )
      const rows = wrapper.find('.table-component__body').find('.table-component__body-row')
      it('Should return 5', () => {
        expect(rows.length).toBe(5)
      })
      describe('Each row should has 2 fields: "name" and "phone"', () => {
        rows.forEach((row, index) => {
          it('It should has field name with value "' + data[index].name + '"', () => {
            expect(row.find('.table-component__body-field').at(1).text()).toBe(data[index].name)
          })
          it('It should has field phone with value "' + data[index].phone + '"', () => {
            expect(row.find('.table-component__body-field').at(2).text()).toBe(data[index].phone)
          })
        })
      })
    })
    describe('Default function row with structure: name, id, email', () => {
      const data = [
        {name: 'Alex', id: 100001, any: '123', email: 'alex@gmail.com'},
        {name: 'Jimmy', id: 100002, any: '456', email: 'jim475@gmail.com'},
        {name: 'Albert', id: 100003, any: '789', email: 'alb@bk.com'},
        {name: 'Jone', id: 100004, any: '012', email: 'jone@email.uk'},
        {name: 'Paul', id: 100005, any: '345', email: 'paul@yandex.com'},
        {name: 'Max', id: 100006, any: '678', email: 'max@gmail.com'}
      ]

      const wrapper = shallow(
        <SimpleTableComponent
          entities={data}
          onSelectEntity={() => {}}
          createBodyColumns={(entity) => {
            return new ColumnEntityFactory()
              .addBody('name', entity.name)
              .addBody('id', entity.id)
              .addBody('any', entity.any)
              .addBody('email', entity.email)
              .getBodies()
          }}
          createHeadColumns={() => {
            return new ColumnEntityFactory()
              .addHeader('name')
              .addHeader('id','#id')
              .addHeader('any', 'any', true, true)
              .addHeader('email')
              .getHeaders()
          }} />
      )
      const rows = wrapper.find('.table-component__body').find('.table-component__body-row')
      it('Should return 6', () => {
        expect(rows.length).toBe(6)
      })
      describe('Each row should has 3 fields: "name", "id" and "email"', () => {
        rows.forEach((row, index) => {
          it('It should has field name with value "' + data[index].name + '"', () => {
            expect(row.find('.table-component__body-field').at(1).text()).toBe(data[index].name)
          })
          it('It should has field id with value "' + data[index].id + '"', () => {
            expect(row.find('.table-component__body-field').at(2).text()).toBe(String(data[index].id))
          })
          it('It should has field email with value "' + data[index].email + '"', () => {
            expect(row.find('.table-component__body-field').at(3).text()).toBe(data[index].email)
          })
        })
      })
    })
  })

  describe('Checkbox', () => {
    const entitiesInit = [
      'Alex',
      'Paul',
      'Jone'
    ]
    let entities = []
    const wrapper = shallow(
      <SimpleTableComponent
        entities={entitiesInit}
        onSelectEntity={(data) => {
          entities = data
        }}
        createBodyColumns={(entity) => {
          return new ColumnEntityFactory()
            .addBody('name', entity)
            .getBodies()
        }}
        createHeadColumns={() => {
          return new ColumnEntityFactory()
            .addHeader('name')
            .getHeaders()
        }} />
    )


    const chooseAll = wrapper.find('.table-component__head').find('.checkbox')
    const bodyRows = wrapper.find('.table-component__body').find('.table-component__body-row')
    it('Elements "Choose all" should exists', () => {
      expect(chooseAll.exists()).toBe(true)
    })
    it('Body rows should be length 3', () => {
      expect(bodyRows.length).toBe(3)
    })

    it('it should return array with one item "Paul"', () => {
      const clickedCheckboxByIndex = 1
      const row = bodyRows.at(clickedCheckboxByIndex)
      const checkbox = row.find('.checkbox')
      expect(checkbox.exists()).toBe(true)
      checkbox.simulate('change', {target: {checked: true}})
      expect(entities.length).toBe(1)
      expect(entities[0]).toBe('Paul')
    })
    it('it should return array with two item "Paul", "Alex"', () => {
      // >>> settings
      const clickedCheckboxByIndex = 0
      const chosenRowsBiIndex = [0, 1]
      const expectedEntities = ['Paul', 'Alex']
      // <<< settings

      const row = bodyRows.at(clickedCheckboxByIndex)
      const checkbox = row.find('.checkbox')
      expect(checkbox.exists()).toBe(true)

      checkbox.simulate('change', {target: {checked: true}})

      expect(entities.length).toBe(expectedEntities.length)

      expectedEntities.map((value) => {
        expect(entities.indexOf(value) !== -1).toBe(true)
      })
      chosenRowsBiIndex.map((index) => {
        expect(
          wrapper
          .find('.table-component__body')
          .find('.table-component__body-row')
          .at(index)
          .find('.checkbox')
          .html()
        ).toBe('<input type="checkbox" checked="" class="checkbox" value="true"/>')
      })
    })
    it('it should return array with two item "Paul", "Alex", "Jone"', () => {
      // >>> settings
      const clickedCheckboxByIndex = 2
      const chosenRowsBiIndex = [0, 1, 2]
      const expectedEntities = ['Paul', 'Alex', 'Jone']
      // <<< settings

      const row = bodyRows.at(clickedCheckboxByIndex)
      const checkbox = row.find('.checkbox')
      expect(checkbox.exists()).toBe(true)
      checkbox.simulate('change', {target: {checked: true}})

      expect(entities.length).toBe(expectedEntities.length)

      expectedEntities.map((value) => {
        expect(entities.indexOf(value) !== -1).toBe(true)
      })
      chosenRowsBiIndex.map((index) => {
        expect(
          wrapper
          .find('.table-component__body')
          .find('.table-component__body-row')
          .at(index)
          .find('.checkbox')
          .html()
        ).toBe('<input type="checkbox" checked="" class="checkbox" value="true"/>')
      })
    })
    it('it should return array with two item "Paul", "Alex" and without "Jone"', () => {
      // >>> settings
      const clickedCheckboxByIndex = 2
      const chosenRowsBiIndex = [0, 1]
      const expectedEntities = ['Paul', 'Alex']
      // <<< settings

      const row = bodyRows.at(clickedCheckboxByIndex)
      const checkbox = row.find('.checkbox')
      expect(checkbox.exists()).toBe(true)

      checkbox.simulate('change', {target: {checked: true}})

      expect(entities.length).toBe(expectedEntities.length)
      expectedEntities.map((value) => {
        expect(entities.indexOf(value) !== -1).toBe(true)
      })
      chosenRowsBiIndex.map((index) => {
        expect(
          wrapper
          .find('.table-component__body')
          .find('.table-component__body-row')
          .at(index)
          .find('.checkbox')
          .html()
        ).toBe('<input type="checkbox" checked="" class="checkbox" value="true"/>')
      })
    })
    it('it should return array with two item "Paul" and without "Jone", "Alex"', () => {
      // >>> settings
      const clickedCheckboxByIndex = 0
      const chosenRowsBiIndex = [1]
      const expectedEntities = ['Paul']
      // <<< settings

      const row = bodyRows.at(clickedCheckboxByIndex)
      const checkbox = row.find('.checkbox')
      expect(checkbox.exists()).toBe(true)

      checkbox.simulate('change', {target: {checked: true}})

      expect(entities.length).toBe(expectedEntities.length)
      expectedEntities.map((value) => {
        expect(entities.indexOf(value) !== -1).toBe(true)
      })
      chosenRowsBiIndex.map((index) => {
        expect(
          wrapper
          .find('.table-component__body')
          .find('.table-component__body-row')
          .at(index)
          .find('.checkbox')
          .html()
        ).toBe('<input type="checkbox" checked="" class="checkbox" value="true"/>')
      })
    })
    it('it should return array length 3', () => {
      // >>> settings
      const chosenRowsBiIndex = [0, 1, 2]
      const expectedEntities = ['Alex', 'Paul', 'Jone']
      // <<< settings
      const checkbox = chooseAll
      expect(checkbox.exists()).toBe(true)

      expect(wrapper.find('.table-component__head').find('.checkbox').html()).toBe('<input type="checkbox" class="checkbox" value="false"/>')

      checkbox.simulate('change', {target: {checked: true}})

      expect(wrapper.find('.table-component__head').find('.checkbox').html()).toBe('<input type="checkbox" checked="" class="checkbox" value="true"/>')

      expect(entities.length).toBe(expectedEntities.length)
      expectedEntities.map((value) => {
        expect(entities.indexOf(value) !== -1).toBe(true)
      })


      chosenRowsBiIndex.map((index) => {
        expect(
          wrapper
          .find('.table-component__body')
          .find('.table-component__body-row')
          .at(index)
          .find('.checkbox')
          .html()
        ).toBe('<input type="checkbox" checked="" class="checkbox" value="true"/>')
      })
    })
    it('it should return array length 0', () => {
      // >>> settings
      const chosenRowsBiIndex = []
      const expectedEntities = []
      // <<< settings
      const checkbox = chooseAll
      expect(checkbox.exists()).toBe(true)

      expect(wrapper.find('.table-component__head').find('.checkbox').html()).toBe('<input type="checkbox" checked="" class="checkbox" value="true"/>')

      checkbox.simulate('change', {target: {checked: true}})

      expect(wrapper.find('.table-component__head').find('.checkbox').html()).toBe('<input type="checkbox" class="checkbox" value="false"/>')

      expect(entities.length).toBe(expectedEntities.length)
      expectedEntities.map((value) => {
        expect(entities.indexOf(value) !== -1).toBe(true)
      })
      chosenRowsBiIndex.map((index) => {
        expect(
          wrapper
          .find('.table-component__body')
          .find('.table-component__body-row')
          .at(index)
          .find('.checkbox')
          .html()
        ).toBe('<input type="checkbox" checked="" class="checkbox" value="true"/>')
      })
    })
    it('it should return array length 3: again', () => {
      // >>> settings
      const chosenRowsBiIndex = [0, 1, 2]
      const expectedEntities = ['Alex', 'Paul', 'Jone']
      // <<< settings
      const checkbox = chooseAll
      expect(checkbox.exists()).toBe(true)

      expect(wrapper.find('.table-component__head').find('.checkbox').html()).toBe('<input type="checkbox" class="checkbox" value="false"/>')

      checkbox.simulate('change', {target: {checked: true}})

      expect(wrapper.find('.table-component__head').find('.checkbox').html()).toBe('<input type="checkbox" checked="" class="checkbox" value="true"/>')

      expect(entities.length).toBe(expectedEntities.length)
      expectedEntities.map((value) => {
        expect(entities.indexOf(value) !== -1).toBe(true)
      })
      chosenRowsBiIndex.map((index) => {
        expect(
          wrapper
          .find('.table-component__body')
          .find('.table-component__body-row')
          .at(index)
          .find('.checkbox')
          .html()
        ).toBe('<input type="checkbox" checked="" class="checkbox" value="true"/>')
      })
    })
  })

  describe('Sorting', () => {
    const wrapper = shallow(
      <SimpleTableComponent
        entities={[]}
        onSelectEntity={() => {}}
        createBodyColumns={(entity) => {
          return new ColumnEntityFactory()
            .addBody('name', entity.name)
            .addBody('address', entity.address)
            .addBody('phone', entity.phone)
            .getBodies()
        }}
        createHeadColumns={() => {
          return new ColumnEntityFactory()
            .addHeader('name')
            .addHeader('phone')
            .addHeader('address')
            .getHeaders()
        }} />
    )
    const fields = wrapper.find('.table-component__head').find('.table-component__header-field')
    const fieldName = fields.at(1)
    const fieldPhone = fields.at(2)
    const fieldAddress = fields.at(3)
    it('Should has 4 columns: name and phone', () => {
      expect(fields.length).toBe(4)
    })
    it('Second field should has label: name', () => {
      expect(fieldName.find('.table-component__field-name').text()).toBe('name')
    })
    it('3-th field should has label: phone', () => {
      expect(fieldPhone.find('.table-component__field-name').text()).toBe('phone')
    })
    it('4-th field should has label: address', () => {
      expect(fieldAddress.find('.table-component__field-name').text()).toBe('address')
    })
    it('sortEntity should has fieldName = "name" and reverse = true', () => {
      fieldName.simulate('click')
      const sortWrapper =  wrapper
        .find('.table-component__head')
        .find('.table-component__header-field')
        .at(1)
        .find(SortComponent)
        .shallow()
      expect(
        sortWrapper
          .find('.sort-component_active')
          .exists()
      ).toBe(true)
      expect(
        sortWrapper
          .find('.sort-component_reversed')
          .exists()
      ).toBe(true)
    })
    it('sortEntity should has fieldName = "name" and reverse = false', () => {
      fieldName.simulate('click')
      const sortWrapper =  wrapper
        .find('.table-component__head')
        .find('.table-component__header-field')
        .at(1)
        .find(SortComponent)
        .shallow()
      expect(
        sortWrapper
          .find('.sort-component_active')
          .exists()
      ).toBe(true)
      expect(
        sortWrapper
          .find('.sort-component_no-reversed')
          .exists()
      ).toBe(true)
    })
    it('sortEntity should has fieldName = "phone" and reverse = true', () => {
      fieldPhone.simulate('click')
      const sortWrapper =  wrapper
        .find('.table-component__head')
        .find('.table-component__header-field')
        .at(2)
        .find(SortComponent)
        .shallow()
      expect(
        sortWrapper
          .find('.sort-component_active')
          .exists()
      ).toBe(true)
      expect(
        sortWrapper
          .find('.sort-component_reversed')
          .exists()
      ).toBe(true)

    })
    it('sortEntity should has fieldName = "phone" and reverse = false', () => {
      fieldPhone.simulate('click')
      const sortWrapper =  wrapper
        .find('.table-component__head')
        .find('.table-component__header-field')
        .at(2)
        .find(SortComponent)
        .shallow()
      expect(
        sortWrapper
          .find('.sort-component_active')
          .exists()
      ).toBe(true)
      expect(
        sortWrapper
          .find('.sort-component_no-reversed')
          .exists()
      ).toBe(true)
    })
  })
})
