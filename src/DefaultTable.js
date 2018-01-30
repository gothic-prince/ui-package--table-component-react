import PropTypes from 'prop-types';
import React from 'react'
import TableAbstract from './TableAbstract'
import TableFacadeAbstract from 'ui-package--table-component/dist/Facades/TableFacadeAbstract'
class DefaultTable extends TableAbstract {
  getCheckbox(entity, index){
    if (entity === null) {
      const allSelected = (
        this.getTable().getDataSelectorManager().get().length === this.getData().length &&
        this.getTable().getDataSelectorManager().get().length !== 0
      )
      return (
        <input
          checked={allSelected ? 'checked' : ''}
          className="checkbox"
          onChange={(e) => this.handleSelectEntities()}
          type="checkbox"
          value={allSelected} />
      )
    }
    const idSelected = this.getTable().getDataSelectorManager().isChosen(entity)
    return (
      <input
        checked={idSelected ? 'checked' : ''}
        key={index}
        className="checkbox"
        onChange={(e) => this.handleSelectEntity(entity)}
        type="checkbox"
        value={idSelected} />
    )
  }
  getNoItems () {
    const { loaded = true } = this.props
    let text = 'No Items to Show'
    if (loaded === false) {
      text = 'Loading...'
    }
    return (
      <tr className='table-component__body-row'>
        <td className='table-component__body-field' colSpan='200'>
          <b>{text}</b>
        </td>
      </tr>
    )
  }
  getClassName () {
    const {
      size = this.getDensity(),
      quantity = 10
    } = this.state
    const sizeClass = 'table-component__size_' + size + 'x '
    const quantityClass = 'table-component__quantity-' + quantity + ''
    return super.getClassName() + sizeClass + quantityClass
  }
  getTheme () {
    return this.props.theme || 'table-component__theme_default'
  }
}
DefaultTable.propTypes = {
  createHeadColumns: PropTypes.func,
  createBodyColumns: PropTypes.func,
  table: PropTypes.instanceOf(TableFacadeAbstract),
  entities: PropTypes.array,
  onChoose: PropTypes.func,
  onSelectEntity: PropTypes.func,
  onSort: PropTypes.func,
  onDoubleClick: PropTypes.func,
  onClick: PropTypes.func,
  onContextMenu: PropTypes.func,
  className: PropTypes.string,
  loaded: PropTypes.bool,
  comparison: PropTypes.func,
  theme: PropTypes.string
}
export default DefaultTable
