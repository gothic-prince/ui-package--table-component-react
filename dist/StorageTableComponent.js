'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TableBuilderLocalStorage = require('ui-package--table-component/dist/Builders/TableBuilder/TableBuilderLocalStorage');

var _TableBuilderLocalStorage2 = _interopRequireDefault(_TableBuilderLocalStorage);

var _TableBuilderAbstract = require('ui-package--table-component/dist/Builders/TableBuilder/TableBuilderAbstract');

var _TableBuilderAbstract2 = _interopRequireDefault(_TableBuilderAbstract);

var _ColumnManager = require('ui-package--table-component/dist/Models/ColumnManager/ColumnManager');

var _ColumnManager2 = _interopRequireDefault(_ColumnManager);

var _DefaultTableComponent = require('./DefaultTableComponent');

var _DefaultTableComponent2 = _interopRequireDefault(_DefaultTableComponent);

var _StorageInterface = require('storage-manager-es/dist/StorageInterface');

var _StorageInterface2 = _interopRequireDefault(_StorageInterface);

var _StorageLocal = require('storage-manager-es/dist/StorageLocal');

var _StorageLocal2 = _interopRequireDefault(_StorageLocal);

var _constants = require('ui-package--table-component/dist/Builders/TableBuilder/constants');

var _TableFacadeAbstract = require('ui-package--table-component/dist/Facades/TableFacadeAbstract');

var _TableFacadeAbstract2 = _interopRequireDefault(_TableFacadeAbstract);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StorageTableComponent = function (_DefaultTableComponen) {
  _inherits(StorageTableComponent, _DefaultTableComponen);

  function StorageTableComponent() {
    _classCallCheck(this, StorageTableComponent);

    return _possibleConstructorReturn(this, (StorageTableComponent.__proto__ || Object.getPrototypeOf(StorageTableComponent)).apply(this, arguments));
  }

  _createClass(StorageTableComponent, [{
    key: 'getBuilder',

    /**
     * @return {null|TableBuilderAbstract}
     */
    value: function getBuilder() {
      var _this2 = this;

      var _props = this.props,
          _props$createHeadColu = _props.createHeadColumns,
          createHeadColumns = _props$createHeadColu === undefined ? null : _props$createHeadColu,
          _props$createBodyColu = _props.createBodyColumns,
          createBodyColumns = _props$createBodyColu === undefined ? null : _props$createBodyColu,
          _props$comparison = _props.comparison,
          comparison = _props$comparison === undefined ? null : _props$comparison,
          _props$tableName = _props.tableName,
          tableName = _props$tableName === undefined ? null : _props$tableName,
          _props$storage = _props.storage,
          storage = _props$storage === undefined ? new _StorageLocal2.default() : _props$storage;

      if (createHeadColumns !== null && createBodyColumns !== null) {
        var columnManager = new _ColumnManager2.default(createBodyColumns, createHeadColumns());
        this._builder = new _TableBuilderLocalStorage2.default(function () {
          return _this2.forceUpdate();
        }, columnManager, tableName, storage);
        this._builder.buildDensityManager(_constants.TABLE_BUILD_STORAGE);
      }
      if (comparison !== null) {
        this.getTable().getDataSelectorManager().comparison = comparison;
      }
      return this._builder;
    }
  }]);

  return StorageTableComponent;
}(_DefaultTableComponent2.default);

StorageTableComponent.propTypes = {
  createHeadColumns: _propTypes2.default.func,
  createBodyColumns: _propTypes2.default.func,
  tableModel: _propTypes2.default.instanceOf(_TableFacadeAbstract2.default),
  entities: _propTypes2.default.array,
  onChoose: _propTypes2.default.func,
  onSelectEntity: _propTypes2.default.func,
  onChangeDensity: _propTypes2.default.func,
  onSort: _propTypes2.default.func,
  onDoubleClick: _propTypes2.default.func,
  onClick: _propTypes2.default.func,
  onContextMenu: _propTypes2.default.func,
  className: _propTypes2.default.string,
  children: _propTypes2.default.any,
  onChangeMaxItems: _propTypes2.default.func,
  loaded: _propTypes2.default.bool,
  quantity: _propTypes2.default.number,
  onReset: _propTypes2.default.func,
  onChangeCurrentPage: _propTypes2.default.func,
  comparison: _propTypes2.default.func,
  needDensity: _propTypes2.default.bool,
  theme: _propTypes2.default.string,
  tableName: _propTypes2.default.string.isRequired,
  storage: _propTypes2.default.instanceOf(_StorageInterface2.default)
};
exports.default = StorageTableComponent;