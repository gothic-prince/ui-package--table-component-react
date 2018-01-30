### Introduction:
This package implements [models](https://github.com/ui-package/table-component).

![DefaultTable](https://raw.githubusercontent.com/gothic-prince/ui-package--table-component-react/master/images/DefaultTableComponent.png)

### Example: 
```javascript
import DefaultTable from 'ui-package--table-component-react'
import 'ui-package--table-component-react/src/Styles/SortComponent.scss'
import 'ui-package--table-component-react/src/Styles/TableComponent.scss'

const data = [
    {name: 'Alex', phone: '98234798234'},
    {name: 'Jimmy', phone: '09856745'},
    {name: 'Albert', phone: '02138366322132'},
    {name: 'Jone', phone: '76235464'},
    {name: 'Paul', phone: '627363'}
]

const builder = new TableBuilder()
const createColumnHeadFunc = () => (
  builder
    .getFactory()
    .addHeader('name')
    .addHeader('phone')
    .getHeaders()
)
const createColumnBodyFunc = () => (
  builder
    .getFactory()
    .addBody('name', entity.name)
    .addBody('phone', entity.phone)
    .getBodies()
)
builder.buildColumnManager(
  createColumnHeadFunc,
  createColumnBodyFunc
)
const table = builder.getTableFacade()
```
```javascript
<DefaultTable
  entities={data}
  onSelectEntity={() => {}}
  table={table} />
```


### Props:

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| table | [TableFacadeAbstract](https://github.com/ui-package/table-component/blob/master/src/Facades/TableFacadeAbstract.js) | null | You can get its via [TableBuilder](https://github.com/ui-package/table-component/tree/master/src/Builders/TableBuilder) |
| entities | Array | [] | You need input your data |
| createHeadColumns | Function | null | Should return array of [ColumnHeadEntityInterface](https://github.com/ui-package/table-component/blob/master/src/Entities/HeadColumn/ColumnHeadEntityInterface.js) |
| createBodyColumns | Function`<Object>` | null | Should return array of [ColumnBodyEntityInterface](https://github.com/ui-package/table-component/blob/master/src/Entities/BodyColumn/ColumnBodyEntityInterface.js)  |
| onSelectEntity | Function`<Object[]>` |  |  |
| onSort | Function`<String>` | | |
| onDoubleClick | Function`<Event>` | | |
| onClick | Function`<Event>` | | |
| onContextMenu | Function`<Event>` | | |
| comparison | Function`<Object, Object>` | (e, e2) => e === e2 | |
| className | String | | |
| loaded | Boolean | | It need you if you use async |
| theme | String | table-component__theme_default |  |
