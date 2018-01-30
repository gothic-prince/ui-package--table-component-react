import PropTypes from 'prop-types';
import React from 'react'
import classnames from 'classnames'
import SortComponent from './SortComponent'
import TableBuilder from 'ui-package--table-component/dist/Builders/TableBuilder/TableBuilder'
import TableBuilderAbstract from 'ui-package--table-component/dist/Builders/TableBuilder/TableBuilderAbstract'
import ColumnManager from 'ui-package--table-component/dist/Models/ColumnManager/ColumnManager';
import TableFacadeAbstract from 'ui-package--table-component/dist/Facades/TableFacadeAbstract';
class TableAbstract extends React.Component {
  constructor() {
    super()
    this.state = {}
    this._table = null
    this._builder = null
    this.reRender = this.reRender.bind(this)
  }
  reRender () {
    this.forceUpdate()
  }
  /**
   * @return {null|TableBuilderAbstract}
   */
  getBuilder () {
    const {
      /**
       * @return {ColumnHeadEntityInterface[]}
       */
      createHeadColumns = null,
      /**
       * @param entity
       * @return {ColumnBodyEntityInterface[]}
       */
      createBodyColumns = null,
      comparison = null
    } = this.props
    if (createHeadColumns !== null && createBodyColumns !== null) {
      const columnManager = new ColumnManager(createBodyColumns, createHeadColumns())
      this._builder = new TableBuilder(() => this.reRender(), columnManager)
    }
    if (comparison !== null) {
      this.getTable().getDataSelectorManager().comparison = comparison
    }
    return this._builder
  }
  componentWillMount() {
    const {
      table = null
    } = this.props
    if (this._table === null) {
      if (this.getBuilder() !== null) {
        this._table = this.getBuilder().getTableFacade()
      } else {
        this._table = table
        this._table.getRenderManager().addEvent(() => this.reRender())
      }
    }
  }
  getCheckbox(entity, index){
    throw new Error('Method "getCheckbox" should be defined')
  }
  getNoItems () {
    throw new Error('Method "getNoItems" should be defined')
  }
  /**
   * @return {TableFacadeAbstract}
   */
  getTable () {
    return this._table
  }
  /**
   * @return {Array}
   */
  getData(){
    return this.props.entities || []
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
  row(entity, checkbox, key){
    const {
      onChoose = null,
      onSelectEntity = onChoose,
      onContextMenu = (e, entity) => {},
      onClick = (e, entity) => {},
      onDoubleClick = (e, entity) => {},
    } = this.props
    const columns = this.getTable().getColumnManager().createBodyColumns(entity)
    const headers = this.getTable().getColumnManager().getHeadColumns()
    const result = []
    if (onSelectEntity !== null) {
      result.push(
        <td
          className='table-component__body-field table-component__column-checkbox'
          key={0}>{checkbox}</td>
      )
    }
    columns.map((column, index) => {
      let isHidden = false
      const header = headers.find((curHeader) => {
        return curHeader.getFieldName() === column.getName()
      })

      if (header !== undefined) {
        isHidden = header.isHidden()
      }
      if (isHidden !== true) {
        result.push(
          <td
            className='table-component__body-field'
            onDoubleClick={(e) => onDoubleClick(e, entity)}
            onContextMenu={(e) => onContextMenu(e, entity)}
            onClick={(e) => onClick(e, entity)}
            key={index+1}>{column.getHtmlValue()}</td>
        )
      }
    })
    return (
      <tr className='table-component__body-row' key={key+1}>
        {result}
      </tr>
    )
  }
  getClassName(){
    return this.props.className || ''
  }
  getTheme(){
    return ''
  }
  /**
   * @param header {ColumnHeadEntityInterface}
   */
  handleSortingBy(header){
    const {
      onSort = () => {}
    } = this.props
    const field = header.getFieldName()
    if (header.needSort() === false) {
      return
    }
    this.getTable().getSortManager().by(field)
    onSort(field)
  }
  /**
   * @param header {ColumnHeadEntityInterface}
   * @param key
   */
  renderHeaderField (header, key) {
    if (header.isHidden() === true) {
      return null
    }
    return (
      <th
        className='table-component__header-field'
        onClick={() => this.handleSortingBy(header)}
        key={key}>
        <span className={classnames([
          'table-component__field-name',
          {'table-component__field-name_sortable': header.needSort()}
        ])}>
          {header.getLabel()}
        </span>
          {
            (header.needSort() === true) &&
            <SortComponent
              reversed={header.isReverse()}
              active={header.isActive()} />
          }
      </th>
    )
  }

  handleSelectEntities () {
    const {
      onChoose = null,
      onSelectEntity = onChoose
    } = this.props
    const selectManager = this.getTable().getDataSelectorManager()
    let entities = []
    switch (selectManager.get().length) {
      case 0:
        entities = this.getData()
        break
      case this.getData().length:
        entities = []
        break
      default:
        entities = this.getData()
        break
    }
    selectManager.set(entities)
    onSelectEntity(selectManager.get())
  }
  /**
   * @param entity
   */
  handleSelectEntity (entity) {
    const {
      onChoose = null,
      onSelectEntity = onChoose
    } = this.props
    const selectManager = this.getTable().getDataSelectorManager()
    selectManager.add(entity)
    onSelectEntity(selectManager.get())
  }
  getHeader () {
    const {
      onChoose = null,
      onSelectEntity = onChoose
    } = this.props
    const columnManager = this.getTable().getColumnManager()
    return (
      <thead className='table-component__head'>
      <tr>
        {
          (onSelectEntity !== null) &&
          <th className='table-component__header-field table-component__column-checkbox'>
            {this.getCheckbox(null)}
          </th>
        }
        {columnManager.getHeadColumns().map((column, key) => {
          return this.renderHeaderField(column, key)
        })}
      </tr>
      </thead>
    )
  }

  /**
   * @return {Number}
   */
  getDensity () {
    return this.getTable().getDensityManager().getDensity()
  }
  /**
   * @param density {Number}
   */
  handleChangeDensity (density) {
    const {
      onChangeDensity = () => {}
    } = this.props
    const densityManager = this.getTable().getDensityManager()
    densityManager.setDensity(density)
    onChangeDensity(densityManager.getDensity())
  }
  render(){
    const entities = this.getTable().getEntities(this.getData())
    return (
      <table className={classnames([
        'table-component',
        this.getTheme(),
        this.getClassName()
      ])}>
        {this.getHeader()}
        <tbody className='table-component__body'>
        {(this.isLoading() ?
            this.getNoItems() :
            entities.map((entity, index) => this.row(entity, this.getCheckbox(entity, index), index))
        )}
        </tbody>
      </table>
    )
  }
}
TableAbstract.propTypes = {
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
export default TableAbstract
