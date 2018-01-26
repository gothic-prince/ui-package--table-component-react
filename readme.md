### Introduction:
This package implements [models](https://github.com/ui-package/table-component).

![SimpleTableComponent](https://raw.githubusercontent.com/gothic-prince/ui-package--table-component-react/master/images/SimpleTableComponent.png)

### Example: 
```javascript
import ColumnEntityFactory from 'ui-package--table-component/dist/Factories/ColumnEntityFactory'
import SimpleTableComponent from 'ui-package--table-component-react/dist/SimpleTableComponent'

const data = [
    {name: 'Alex', phone: '98234798234'},
    {name: 'Jimmy', phone: '09856745'},
    {name: 'Albert', phone: '02138366322132'},
    {name: 'Jone', phone: '76235464'},
    {name: 'Paul', phone: '627363'}
]
```

```javascript
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
```


### Props:

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| tableModel | [TableFacadeAbstract](https://github.com/ui-package/table-component/blob/master/src/Facades/TableFacadeAbstract.js) | null | You can get its via [TableBuilder](https://github.com/ui-package/table-component/tree/master/src/Builders/TableBuilder) |
| entities | Array | [] | You need input your data |
| createHeadColumns | Function | null | Should return array of [ColumnHeadEntityInterface](https://github.com/ui-package/table-component/blob/master/src/Entities/HeadColumn/ColumnHeadEntityInterface.js) |
| createBodyColumns | Function`<Object>` | null | Should return array of [ColumnBodyEntityInterface](https://github.com/ui-package/table-component/blob/master/src/Entities/BodyColumn/ColumnBodyEntityInterface.js)  |
| onSelectEntity | Function`<Object[]>` |  |  |
| onChangeDensity | Function`<Number>` | | |
| onSort | Function`<String>` | | |
| onDoubleClick | Function`<Event>` | | |
| onClick | Function`<Event>` | | |
| onContextMenu | Function`<Event>` | | |
| onChangeMaxItems | Function`<Number>` | | |
| onChangeCurrentPage | Function`<Number>` | | |
| onReset | Function | | |
| comparison | Function`<Object, Object>` | (e, e2) => e === e2 | |
| className | String | | |
| children | | | |
| loaded | Boolean | | It need you if you use async |
| needDensity | Boolean | |  |
| theme | String | table-component__theme_default |  |


