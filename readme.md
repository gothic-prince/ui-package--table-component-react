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
