import PropTypes from 'prop-types';
import React from 'react'
import TableAbstract from './TableAbstract'
import TablePagination from './TablePagination'
import TableFacadeAbstract from 'ui-package--table-component/dist/Facades/TableFacadeAbstract'
import TableSizeComponent from './TableSizeComponent';
import TableResetComponent from './TableResetComponent';
class SimpleTableComponent extends TableAbstract {
  constructor() {
    super()
  }

  /**
   * @return {boolean}
   */
  isLoading () {
    const {
      loaded
    } = this.props
    if (loaded === undefined) {
      return this.getData().length === 0
    }
    return this.getData().length === 0 || loaded === false
  }
  getCheckbox(entity, index){
    const idSelected = this.getTable().getDataSelectorManager().isChosen(entity)
    if (entity === null) {
      return (
        <input
          checked={idSelected ? 'checked' : ''}
          className="checkbox"
          onChange={(e) => this.handleSelectEntities()}
          type="checkbox"
          value={idSelected} />
      )
    }
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
    return 'table-component__theme_default'
  }
  getChildren() {
    return this.props.children
  }
  handleReset(){
    const {
      onReset = () => {}
    } = this.props
    onReset()
  }
  getTop () {
    const {
      loaded = true,
      onReset = null,
      needDensity = true,
    } = this.props
    return (
      <div>
        {needDensity === true &&
        <TableSizeComponent
          size={this.getDensity()}
          onChange={(density) => this.handleChangeDensity(density)} />
        }
        {onReset === null &&
        <TableResetComponent
          loaded={loaded}
          onReset={() => this.handleReset()} />
        }
        {this.getChildren()}
      </div>
    )
  }
  getBottom () {
    const {
      onChangeMaxItems = () => {},
      onChangeCurrentPage = () => {},
    } = this.props
    const entities = this.getData()
    const pagination = this.getTable().getPaginationManager()
    return (
      <TablePagination
        onChangeCurrentPage={(value) => {
          const page = Number.isNaN(Number(value)) ? 1 : Number(value)
          pagination.setCurrentPage(page)
          onChangeCurrentPage(page)
        }}
        onChangeMaxItems={(value) => {
          pagination.setLimitRows(value)
          onChangeMaxItems(value)
        }}
        hasPrev={pagination.hasPrev(entities)}
        hasNext={pagination.hasNext(entities)}
        onFirst={() => pagination.first(entities)}
        onPrev={() => pagination.prev(entities)}
        onNext={() => pagination.next(entities)}
        onLast={() => pagination.latest(entities)}
        limitRows={pagination.getLimitRows()}
        arrayLimitRows={pagination.getArrayLimitRows()}
        page={pagination.getCurrentPage()} />
    )
  }
}
SimpleTableComponent.propTypes = {
  createHeadColumns: PropTypes.func,
  createBodyColumns: PropTypes.func,
  tableModel: PropTypes.instanceOf(TableFacadeAbstract),
  entities: PropTypes.array,
  onChoose: PropTypes.func,
  onSelectEntity: PropTypes.func,
  onChangeDensity: PropTypes.func,
  onSort: PropTypes.func,
  onDoubleClick: PropTypes.func,
  onClick: PropTypes.func,
  onContextMenu: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.any,
  onChangeMaxItems: PropTypes.func,
  loaded: PropTypes.bool,
  quantity: PropTypes.number,
  onReset: PropTypes.func,
  onChangeCurrentPage: PropTypes.func,
  comparison: PropTypes.func,
  needDensity: PropTypes.bool,
}
export default SimpleTableComponent
