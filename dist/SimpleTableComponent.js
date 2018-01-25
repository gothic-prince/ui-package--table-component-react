'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TableAbstract2 = require('./TableAbstract');

var _TableAbstract3 = _interopRequireDefault(_TableAbstract2);

var _TablePagination = require('./TablePagination');

var _TablePagination2 = _interopRequireDefault(_TablePagination);

var _TableFacadeAbstract = require('ui-package--table-component/dist/Facades/TableFacadeAbstract');

var _TableFacadeAbstract2 = _interopRequireDefault(_TableFacadeAbstract);

var _TableSizeComponent = require('./TableSizeComponent');

var _TableSizeComponent2 = _interopRequireDefault(_TableSizeComponent);

var _TableResetComponent = require('./TableResetComponent');

var _TableResetComponent2 = _interopRequireDefault(_TableResetComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleTableComponent = function (_TableAbstract) {
  _inherits(SimpleTableComponent, _TableAbstract);

  function SimpleTableComponent() {
    _classCallCheck(this, SimpleTableComponent);

    return _possibleConstructorReturn(this, (SimpleTableComponent.__proto__ || Object.getPrototypeOf(SimpleTableComponent)).call(this));
  }

  /**
   * @return {boolean}
   */


  _createClass(SimpleTableComponent, [{
    key: 'isLoading',
    value: function isLoading() {
      var loaded = this.props.loaded;

      if (loaded === undefined) {
        return this.getData().length === 0;
      }
      return this.getData().length === 0 || loaded === false;
    }
  }, {
    key: 'getCheckbox',
    value: function getCheckbox(entity, index) {
      var _this2 = this;

      var idSelected = this.getTable().getDataSelectorManager().isChosen(entity);
      if (entity === null) {
        var entities = this.getTable().getDataSelectorManager().get().length === 0 ? this.getTable().getDataSelectorManager().get() : [];
        return _react2.default.createElement('input', {
          className: 'checkbox',
          onChange: function onChange(e) {
            return _this2.handleSelectEntities(entities);
          },
          type: 'checkbox',
          value: idSelected });
      }
      return _react2.default.createElement('input', {
        key: index,
        className: 'checkbox',
        onChange: function onChange(e) {
          return _this2.handleSelectEntity(entity);
        },
        type: 'checkbox',
        value: idSelected });
    }
  }, {
    key: 'getNoItems',
    value: function getNoItems() {
      var _props$loaded = this.props.loaded,
          loaded = _props$loaded === undefined ? true : _props$loaded;

      var text = 'No Items to Show';
      if (loaded === false) {
        text = 'Loading...';
      }
      return _react2.default.createElement(
        'tr',
        { className: 'table-component__body-row' },
        _react2.default.createElement(
          'td',
          { className: 'table-component__body-field', colSpan: '200' },
          _react2.default.createElement(
            'b',
            null,
            text
          )
        )
      );
    }
  }, {
    key: 'getClassName',
    value: function getClassName() {
      var _state = this.state,
          _state$size = _state.size,
          size = _state$size === undefined ? this.getDensity() : _state$size,
          _state$quantity = _state.quantity,
          quantity = _state$quantity === undefined ? 10 : _state$quantity;

      var sizeClass = 'table-component__size_' + size + 'x ';
      var quantityClass = 'table-component__quantity-' + quantity + '';
      return _get(SimpleTableComponent.prototype.__proto__ || Object.getPrototypeOf(SimpleTableComponent.prototype), 'getClassName', this).call(this) + sizeClass + quantityClass;
    }
  }, {
    key: 'getTheme',
    value: function getTheme() {
      return 'table-component__theme_default';
    }
  }, {
    key: 'getChildren',
    value: function getChildren() {
      return this.props.children;
    }
  }, {
    key: 'handleReset',
    value: function handleReset() {
      var _props$onReset = this.props.onReset,
          onReset = _props$onReset === undefined ? function () {} : _props$onReset;

      onReset();
    }
  }, {
    key: 'getTop',
    value: function getTop() {
      var _this3 = this;

      var _props = this.props,
          _props$loaded2 = _props.loaded,
          loaded = _props$loaded2 === undefined ? true : _props$loaded2,
          _props$onReset2 = _props.onReset,
          onReset = _props$onReset2 === undefined ? null : _props$onReset2,
          _props$needDensity = _props.needDensity,
          needDensity = _props$needDensity === undefined ? true : _props$needDensity;

      return _react2.default.createElement(
        'div',
        null,
        needDensity === true && _react2.default.createElement(_TableSizeComponent2.default, {
          size: this.getDensity(),
          onChange: function onChange(density) {
            return _this3.handleChangeDensity(density);
          } }),
        onReset === null && _react2.default.createElement(_TableResetComponent2.default, {
          loaded: loaded,
          onReset: function onReset() {
            return _this3.handleReset();
          } }),
        this.getChildren()
      );
    }
  }, {
    key: 'getBottom',
    value: function getBottom() {
      var _props2 = this.props,
          _props2$onChangeMaxIt = _props2.onChangeMaxItems,
          _onChangeMaxItems = _props2$onChangeMaxIt === undefined ? function () {} : _props2$onChangeMaxIt,
          _props2$onChangeCurre = _props2.onChangeCurrentPage,
          onChangeCurrentPage = _props2$onChangeCurre === undefined ? function () {} : _props2$onChangeCurre;

      var entities = this.getData();
      var pagination = this.getTable().getPaginationManager();
      return _react2.default.createElement(_TablePagination2.default, {
        onInputPage: function onInputPage(value) {
          var page = Number.isNaN(Number(value)) ? 1 : Number(value);
          pagination.setCurrentPage(page);
          onChangeCurrentPage(page);
        },
        onChangeMaxItems: function onChangeMaxItems(value) {
          pagination.setLimitRows(value);
          _onChangeMaxItems(value);
        },
        hasPrev: pagination.hasPrev(entities),
        hasNext: pagination.hasNext(entities),
        onFirst: function onFirst() {
          return pagination.first(entities);
        },
        onPrev: function onPrev() {
          return pagination.prev(entities);
        },
        onNext: function onNext() {
          return pagination.next(entities);
        },
        onLast: function onLast() {
          return pagination.latest(entities);
        },
        limitRows: pagination.getLimitRows(),
        arrayLimitRows: pagination.getArrayLimitRows(),
        page: pagination.getCurrentPage() });
    }
  }]);

  return SimpleTableComponent;
}(_TableAbstract3.default);

SimpleTableComponent.propTypes = {
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
  needDensity: _propTypes2.default.func
};
exports.default = SimpleTableComponent;