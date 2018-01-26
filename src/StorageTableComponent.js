import React from 'react'
import PropTypes from 'prop-types'
import TableBuilderLocalStorage from 'ui-package--table-component/dist/Builders/TableBuilder/TableBuilderLocalStorage'
import TableBuilderAbstract from 'ui-package--table-component/dist/Builders/TableBuilder/TableBuilderAbstract'
import ColumnManager from 'ui-package--table-component/dist/Models/ColumnManager/ColumnManager'
import DefaultTableComponent from './DefaultTableComponent'
import StorageInterface from 'storage-manager-es/dist/StorageInterface'
import StorageLocal from 'storage-manager-es/dist/StorageLocal'
import {TABLE_BUILD_STORAGE} from 'ui-package--table-component/dist/Builders/TableBuilder/constants'
import TableFacadeAbstract from 'ui-package--table-component/dist/Facades/TableFacadeAbstract'
class StorageTableComponent extends DefaultTableComponent {
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
      comparison = null,
      tableName = null,
      storage = new StorageLocal(),
    } = this.props
    if (createHeadColumns !== null && createBodyColumns !== null) {
      const columnManager = new ColumnManager(createBodyColumns, createHeadColumns())
      this._builder = new TableBuilderLocalStorage(() => this.forceUpdate(), columnManager, tableName, storage)
      this._builder.buildDensityManager(TABLE_BUILD_STORAGE)
    }
    if (comparison !== null) {
      this.getTable().getDataSelectorManager().comparison = comparison
    }
    return this._builder
  }
}
StorageTableComponent.propTypes = {
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
  theme: PropTypes.string,
  tableName: PropTypes.string.isRequired,
  storage: PropTypes.instanceOf(StorageInterface),
}
export default StorageTableComponent
