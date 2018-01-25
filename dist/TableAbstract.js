'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _SortComponent = require('./SortComponent');

var _SortComponent2 = _interopRequireDefault(_SortComponent);

var _constants = require('./constants');

var _TableBuilder = require('ui-package--table-component/dist/Builders/TableBuilder/TableBuilder');

var _TableBuilder2 = _interopRequireDefault(_TableBuilder);

var _TableBuilderAbstract = require('ui-package--table-component/dist/Builders/TableBuilder/TableBuilderAbstract');

var _TableBuilderAbstract2 = _interopRequireDefault(_TableBuilderAbstract);

var _ColumnManager = require('ui-package--table-component/dist/Models/ColumnManager/ColumnManager');

var _ColumnManager2 = _interopRequireDefault(_ColumnManager);

var _TableFacadeAbstract = require('ui-package--table-component/dist/Facades/TableFacadeAbstract');

var _TableFacadeAbstract2 = _interopRequireDefault(_TableFacadeAbstract);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableAbstract = function (_React$Component) {
  _inherits(TableAbstract, _React$Component);

  function TableAbstract() {
    _classCallCheck(this, TableAbstract);

    var _this = _possibleConstructorReturn(this, (TableAbstract.__proto__ || Object.getPrototypeOf(TableAbstract)).call(this));

    _this.state = {};
    _this._table = null;
    _this._builder = null;
    return _this;
  }

  /**
   * @return {null|TableBuilderAbstract}
   */


  _createClass(TableAbstract, [{
    key: 'getBuilder',
    value: function getBuilder() {
      var _this2 = this;

      var _props = this.props,
          _props$createHeadColu = _props.createHeadColumns,
          createHeadColumns = _props$createHeadColu === undefined ? null : _props$createHeadColu,
          _props$createBodyColu = _props.createBodyColumns,
          createBodyColumns = _props$createBodyColu === undefined ? null : _props$createBodyColu;

      if (createHeadColumns !== null && createBodyColumns !== null) {
        var columnManager = new _ColumnManager2.default(createBodyColumns, createHeadColumns());
        this._builder = new _TableBuilder2.default(function () {
          return _this2.forceUpdate();
        }, columnManager);
      }
      return this._builder;
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _props2 = this.props,
          _props2$tableModel = _props2.tableModel,
          tableModel = _props2$tableModel === undefined ? null : _props2$tableModel,
          _props2$size = _props2.size,
          size = _props2$size === undefined ? null : _props2$size,
          _props2$density = _props2.density,
          density = _props2$density === undefined ? size : _props2$density,
          _props2$maxItems = _props2.maxItems,
          maxItems = _props2$maxItems === undefined ? _constants.TABLE_LIMIT_ROWS_BY_DEFAULT : _props2$maxItems;

      if (this._table === null) {
        if (this.getBuilder() !== null) {
          this._table = this.getBuilder().getTableFacade();
        } else {
          this._table = tableModel;
        }
      }
      this.getTable().getDensityManager().setDensity(density);
      this.getTable().getPaginationManager().setLimitRows(maxItems);
    }
  }, {
    key: 'getCheckbox',
    value: function getCheckbox(entity, index) {
      throw new Error('Method "getCheckbox" should be defined');
    }
  }, {
    key: 'getNoItems',
    value: function getNoItems() {
      throw new Error('Method "getNoItems" should be defined');
    }
    /**
     * @return {TableFacadeAbstract}
     */

  }, {
    key: 'getTable',
    value: function getTable() {
      return this._table;
    }
    /**
     * @return {Array}
     */

  }, {
    key: 'getData',
    value: function getData() {
      return this.props.entities || [];
    }
    /**
     * @return {boolean}
     */

  }, {
    key: 'isLoading',
    value: function isLoading() {
      var entities = this.getData();
      return entities.length === 0;
    }
  }, {
    key: 'row',
    value: function row(entity, checkbox, key) {
      var _props3 = this.props,
          _props3$onChoose = _props3.onChoose,
          onChoose = _props3$onChoose === undefined ? null : _props3$onChoose,
          _props3$onSelectEntit = _props3.onSelectEntity,
          onSelectEntity = _props3$onSelectEntit === undefined ? onChoose : _props3$onSelectEntit,
          _props3$onContextMenu = _props3.onContextMenu,
          _onContextMenu = _props3$onContextMenu === undefined ? function (e, entity) {} : _props3$onContextMenu,
          _props3$onClick = _props3.onClick,
          _onClick = _props3$onClick === undefined ? function (e, entity) {} : _props3$onClick,
          _props3$onDoubleClick = _props3.onDoubleClick,
          _onDoubleClick = _props3$onDoubleClick === undefined ? function (e, entity) {} : _props3$onDoubleClick;

      var columns = this.getTable().getColumnManager().createBodyColumns(entity);
      var headers = this.getTable().getColumnManager().getHeadColumns();
      var result = [];
      if (onSelectEntity !== null) {
        result.push(_react2.default.createElement(
          'td',
          {
            className: 'table-component__body-field table-component__column-checkbox',
            key: 0 },
          checkbox
        ));
      }
      columns.map(function (column, index) {
        var isHidden = false;
        var header = headers.find(function (curHeader) {
          return curHeader.getFieldName() === column.getName();
        });

        if (header !== undefined) {
          isHidden = header.isHidden();
        }
        if (isHidden !== true) {
          result.push(_react2.default.createElement(
            'td',
            {
              className: 'table-component__body-field',
              onDoubleClick: function onDoubleClick(e) {
                return _onDoubleClick(e, entity);
              },
              onContextMenu: function onContextMenu(e) {
                return _onContextMenu(e, entity);
              },
              onClick: function onClick(e) {
                return _onClick(e, entity);
              },
              key: index },
            column.getHtmlValue()
          ));
        }
      });
      return _react2.default.createElement(
        'tr',
        { className: 'table-component__body-row', key: key + 1 },
        result
      );
    }
  }, {
    key: 'getClassName',
    value: function getClassName() {
      return this.props.className || '';
    }
  }, {
    key: 'getTheme',
    value: function getTheme() {
      return '';
    }
    /**
     * @param header {ColumnHeadEntityInterface}
     */

  }, {
    key: 'handleSortingBy',
    value: function handleSortingBy(header) {
      var _props$onSort = this.props.onSort,
          onSort = _props$onSort === undefined ? function () {} : _props$onSort;

      var field = header.getFieldName();
      if (header.needSort() === false) {
        return;
      }
      this.getTable().getSortManager().by(field);
      onSort(field);
    }
    /**
     * @param header {ColumnHeadEntityInterface}
     * @param key
     */

  }, {
    key: 'renderHeaderField',
    value: function renderHeaderField(header, key) {
      var _this3 = this;

      if (header.isHidden() === true) {
        return null;
      }
      return _react2.default.createElement(
        'th',
        {
          className: 'table-component__header-field',
          onClick: function onClick() {
            return _this3.handleSortingBy(header);
          },
          key: key },
        _react2.default.createElement(
          'span',
          { className: (0, _classnames2.default)(['table-component__field-name', { 'table-component__field-name_sortable': header.needSort() }]) },
          header.getLabel()
        ),
        header.needSort() === true && _react2.default.createElement(_SortComponent2.default, {
          reversed: header.isReverse(),
          active: header.isActive() })
      );
    }
    /**
     * @param entities {Array}
     */

  }, {
    key: 'handleSelectEntities',
    value: function handleSelectEntities(entities) {
      var _props4 = this.props,
          _props4$onChoose = _props4.onChoose,
          onChoose = _props4$onChoose === undefined ? null : _props4$onChoose,
          _props4$onSelectEntit = _props4.onSelectEntity,
          onSelectEntity = _props4$onSelectEntit === undefined ? onChoose : _props4$onSelectEntit;

      var selectManager = this.getTable().getDataSelectorManager();
      selectManager.set(entities);
      onSelectEntity(selectManager.get());
    }
    /**
     * @param entity
     */

  }, {
    key: 'handleSelectEntity',
    value: function handleSelectEntity(entity) {
      var _props5 = this.props,
          _props5$onChoose = _props5.onChoose,
          onChoose = _props5$onChoose === undefined ? null : _props5$onChoose,
          _props5$onSelectEntit = _props5.onSelectEntity,
          onSelectEntity = _props5$onSelectEntit === undefined ? onChoose : _props5$onSelectEntit;

      var selectManager = this.getTable().getDataSelectorManager();
      selectManager.add(entity);
      onSelectEntity(selectManager.get());
    }
  }, {
    key: 'getHeader',
    value: function getHeader() {
      var _this4 = this;

      var _props6 = this.props,
          _props6$onChoose = _props6.onChoose,
          onChoose = _props6$onChoose === undefined ? null : _props6$onChoose,
          _props6$onSelectEntit = _props6.onSelectEntity,
          onSelectEntity = _props6$onSelectEntit === undefined ? onChoose : _props6$onSelectEntit;

      var columnManager = this.getTable().getColumnManager();
      return _react2.default.createElement(
        'thead',
        { className: 'table-component__head' },
        _react2.default.createElement(
          'tr',
          null,
          onSelectEntity !== null && _react2.default.createElement(
            'th',
            { className: 'table-component__header-field table-component__column-checkbox' },
            this.getCheckbox(null)
          ),
          columnManager.getHeadColumns().map(function (column, key) {
            return _this4.renderHeaderField(column, key);
          })
        )
      );
    }

    /**
     * @return {Number}
     */

  }, {
    key: 'getDensity',
    value: function getDensity() {
      return this.getTable().getDensityManager().getDensity();
    }
    /**
     * @param density {Number}
     */

  }, {
    key: 'handleChangeDensity',
    value: function handleChangeDensity(density) {
      var _props$onChangeDensit = this.props.onChangeDensity,
          onChangeDensity = _props$onChangeDensit === undefined ? function () {} : _props$onChangeDensit;

      var densityManager = this.getTable().getDensityManager();
      densityManager.setDensity(density);
      onChangeDensity(densityManager.getDensity());
    }
  }, {
    key: 'getTop',
    value: function getTop() {
      return null;
    }
  }, {
    key: 'getBottom',
    value: function getBottom() {
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var entities = this.getTable().getEntities(this.getData());
      if (this.getTable() === null) {
        return null;
      }
      return _react2.default.createElement(
        'div',
        { className: 'table-page-component' },
        _react2.default.createElement(
          'div',
          { className: 'table-page-component__Header' },
          this.getTop()
        ),
        _react2.default.createElement(
          'div',
          { className: 'table-page-component__data' },
          _react2.default.createElement(
            'table',
            { className: (0, _classnames2.default)(['table-component', this.getTheme(), this.getClassName()]) },
            this.getHeader(),
            _react2.default.createElement(
              'tbody',
              { className: 'table-component__body' },
              this.isLoading() ? this.getNoItems() : entities.map(function (entity, index) {
                return _this5.row(entity, _this5.getCheckbox(entity, index), index);
              })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'table-page-component__bottom' },
          this.getBottom()
        )
      );
    }
  }]);

  return TableAbstract;
}(_react2.default.Component);

TableAbstract.propTypes = {
  entities: _propTypes2.default.array,
  createHeadColumns: _propTypes2.default.func,
  createBodyColumns: _propTypes2.default.func,
  tableModel: _propTypes2.default.instanceOf(_TableFacadeAbstract2.default),
  onChoose: _propTypes2.default.func,
  onSelectEntity: _propTypes2.default.func,
  onChangeDensity: _propTypes2.default.func,
  onSort: _propTypes2.default.func,
  onDoubleClick: _propTypes2.default.func,
  onClick: _propTypes2.default.func,
  onContextMenu: _propTypes2.default.func,
  className: _propTypes2.default.string
};
exports.default = TableAbstract;