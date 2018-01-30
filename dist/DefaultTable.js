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

var _TableFacadeAbstract = require('ui-package--table-component/dist/Facades/TableFacadeAbstract');

var _TableFacadeAbstract2 = _interopRequireDefault(_TableFacadeAbstract);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DefaultTable = function (_TableAbstract) {
  _inherits(DefaultTable, _TableAbstract);

  function DefaultTable() {
    _classCallCheck(this, DefaultTable);

    return _possibleConstructorReturn(this, (DefaultTable.__proto__ || Object.getPrototypeOf(DefaultTable)).apply(this, arguments));
  }

  _createClass(DefaultTable, [{
    key: 'getCheckbox',
    value: function getCheckbox(entity, index) {
      var _this2 = this;

      if (entity === null) {
        var allSelected = this.getTable().getDataSelectorManager().get().length === this.getData().length && this.getTable().getDataSelectorManager().get().length !== 0;
        return _react2.default.createElement('input', {
          checked: allSelected ? 'checked' : '',
          className: 'checkbox',
          onChange: function onChange(e) {
            return _this2.handleSelectEntities();
          },
          type: 'checkbox',
          value: allSelected });
      }
      var idSelected = this.getTable().getDataSelectorManager().isChosen(entity);
      return _react2.default.createElement('input', {
        checked: idSelected ? 'checked' : '',
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
      return _get(DefaultTable.prototype.__proto__ || Object.getPrototypeOf(DefaultTable.prototype), 'getClassName', this).call(this) + sizeClass + quantityClass;
    }
  }, {
    key: 'getTheme',
    value: function getTheme() {
      return this.props.theme || 'table-component__theme_default';
    }
  }]);

  return DefaultTable;
}(_TableAbstract3.default);

DefaultTable.propTypes = {
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
exports.default = DefaultTable;