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
    _this.reRender = _this.reRender.bind(_this);
    return _this;
  }

  _createClass(TableAbstract, [{
    key: 'reRender',
    value: function reRender() {
      this.forceUpdate();
    }
    /**
     * @return {null|TableBuilderAbstract}
     */

  }, {
    key: 'getBuilder',
    value: function getBuilder() {
      var _props = this.props,
          _props$createHeadColu = _props.createHeadColumns,
          createHeadColumns = _props$createHeadColu === undefined ? null : _props$createHeadColu,
          _props$createBodyColu = _props.createBodyColumns,
          createBodyColumns = _props$createBodyColu === undefined ? null : _props$createBodyColu,
          _props$comparison = _props.comparison,
          comparison = _props$comparison === undefined ? null : _props$comparison;

      if (createHeadColumns !== null && createBodyColumns !== null) {
        var columnManager = new _ColumnManager2.default(createBodyColumns, createHeadColumns());
        this._builder = this.createBuilder(columnManager);
      }
      if (comparison !== null) {
        this.getTable().getDataSelectorManager().comparison = comparison;
      }
      return this._builder;
    }

    /**
     * @param columnManager {ColumnManagerInterface}
     * @return {TableBuilderAbstract}
     */

  }, {
    key: 'createBuilder',
    value: function createBuilder(columnManager) {
      var _this2 = this;

      return new _TableBuilder2.default(function () {
        return _this2.reRender();
      }, columnManager);
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var _this3 = this;

      var _props$table = this.props.table,
          table = _props$table === undefined ? null : _props$table;

      if (this._table === null) {
        if (this.getBuilder() !== null) {
          this._table = this.getBuilder().getTableFacade();
        } else {
          this._table = table;
          this._table.getRenderManager().addEvent(function () {
            return _this3.reRender();
          });
        }
      }
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
     * @return {Array}
     */

  }, {
    key: 'getPaginatedData',
    value: function getPaginatedData() {
      return this.getTable().getPaginationManager().getCutEntities(this.getData());
    }
    /**
     * @return {boolean}
     */

  }, {
    key: 'isLoading',
    value: function isLoading() {
      var loaded = this.props.loaded;

      if (loaded === undefined) {
        return this.getData().length === 0;
      }
      return this.getData().length === 0 || loaded === false;
    }
  }, {
    key: 'row',
    value: function row(entity, checkbox, key) {
      var _this4 = this;

      var _props2 = this.props,
          _props2$onChoose = _props2.onChoose,
          onChoose = _props2$onChoose === undefined ? null : _props2$onChoose,
          _props2$onSelectEntit = _props2.onSelectEntity,
          onSelectEntity = _props2$onSelectEntit === undefined ? onChoose : _props2$onSelectEntit,
          _props2$onContextMenu = _props2.onContextMenu,
          _onContextMenu = _props2$onContextMenu === undefined ? function (e, entity) {} : _props2$onContextMenu,
          _props2$onClick = _props2.onClick,
          _onClick = _props2$onClick === undefined ? function (e, entity) {} : _props2$onClick,
          _props2$onDoubleClick = _props2.onDoubleClick,
          _onDoubleClick = _props2$onDoubleClick === undefined ? function (e, entity) {} : _props2$onDoubleClick;

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
                return _onDoubleClick(e, entity, _this4.getTable());
              },
              onContextMenu: function onContextMenu(e) {
                return _onContextMenu(e, entity, _this4.getTable());
              },
              onClick: function onClick(e) {
                return _onClick(e, entity, _this4.getTable());
              },
              key: index + 1 },
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
      onSort(field, this.getTable());
    }
    /**
     * @param header {ColumnHeadEntityInterface}
     * @param key
     */

  }, {
    key: 'renderHeaderField',
    value: function renderHeaderField(header, key) {
      var _this5 = this;

      if (header.isHidden() === true) {
        return null;
      }
      return _react2.default.createElement(
        'th',
        {
          className: 'table-component__header-field',
          onClick: function onClick() {
            return _this5.handleSortingBy(header);
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
  }, {
    key: 'handleSelectEntities',
    value: function handleSelectEntities() {
      var _props3 = this.props,
          _props3$onChoose = _props3.onChoose,
          onChoose = _props3$onChoose === undefined ? null : _props3$onChoose,
          _props3$onSelectEntit = _props3.onSelectEntity,
          onSelectEntity = _props3$onSelectEntit === undefined ? onChoose : _props3$onSelectEntit;

      var selectManager = this.getTable().getDataSelectorManager();
      var entities = [];
      switch (selectManager.get().length) {
        case 0:
          entities = this.getPaginatedData();
          break;
        case this.getPaginatedData().length:
          entities = [];
          break;
        default:
          entities = this.getPaginatedData();
          break;
      }
      selectManager.set(entities);
      onSelectEntity(selectManager.get());
    }
    /**
     * @param entity
     */

  }, {
    key: 'handleSelectEntity',
    value: function handleSelectEntity(entity) {
      var _props4 = this.props,
          _props4$onChoose = _props4.onChoose,
          onChoose = _props4$onChoose === undefined ? null : _props4$onChoose,
          _props4$onSelectEntit = _props4.onSelectEntity,
          onSelectEntity = _props4$onSelectEntit === undefined ? onChoose : _props4$onSelectEntit;

      var selectManager = this.getTable().getDataSelectorManager();
      selectManager.add(entity);
      onSelectEntity(selectManager.get(), this.getTable());
    }
  }, {
    key: 'getHeader',
    value: function getHeader() {
      var _this6 = this;

      var _props5 = this.props,
          _props5$onChoose = _props5.onChoose,
          onChoose = _props5$onChoose === undefined ? null : _props5$onChoose,
          _props5$onSelectEntit = _props5.onSelectEntity,
          onSelectEntity = _props5$onSelectEntit === undefined ? onChoose : _props5$onSelectEntit;

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
            return _this6.renderHeaderField(column, key);
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
  }, {
    key: 'render',
    value: function render() {
      var _this7 = this;

      var entities = this.getTable().getEntities(this.getData());
      return _react2.default.createElement(
        'table',
        { className: (0, _classnames2.default)(['table-component', this.getTheme(), this.getClassName()]) },
        this.getHeader(),
        _react2.default.createElement(
          'tbody',
          { className: 'table-component__body' },
          this.isLoading() === true || entities.length === 0 ? this.getNoItems() : entities.map(function (entity, index) {
            return _this7.row(entity, _this7.getCheckbox(entity, index), index);
          })
        )
      );
    }
  }]);

  return TableAbstract;
}(_react2.default.Component);

TableAbstract.propTypes = {
  createHeadColumns: _propTypes2.default.func,
  createBodyColumns: _propTypes2.default.func,
  table: _propTypes2.default.instanceOf(_TableFacadeAbstract2.default),
  entities: _propTypes2.default.array,
  onChoose: _propTypes2.default.func,
  onSelectEntity: _propTypes2.default.func,
  onSort: _propTypes2.default.func,
  onDoubleClick: _propTypes2.default.func,
  onClick: _propTypes2.default.func,
  onContextMenu: _propTypes2.default.func,
  className: _propTypes2.default.string,
  loaded: _propTypes2.default.bool,
  comparison: _propTypes2.default.func,
  theme: _propTypes2.default.string
};
exports.default = TableAbstract;