'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TableSizeEntity = require('./Entities/TableSizeEntity');

var _TableSizeEntity2 = _interopRequireDefault(_TableSizeEntity);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableSizeComponent = function (_React$Component) {
  _inherits(TableSizeComponent, _React$Component);

  function TableSizeComponent() {
    _classCallCheck(this, TableSizeComponent);

    return _possibleConstructorReturn(this, (TableSizeComponent.__proto__ || Object.getPrototypeOf(TableSizeComponent)).apply(this, arguments));
  }

  _createClass(TableSizeComponent, [{
    key: 'getSizes',

    /**
     *
     * @return {TableSizeEntityInterface[]}
     */
    value: function getSizes() {
      return [new _TableSizeEntity2.default(3, 'table-size-component__switcher_biggest'), new _TableSizeEntity2.default(2, 'table-size-component__switcher_middle'), new _TableSizeEntity2.default(1, 'table-size-component__switcher_littlest')];
    }
  }, {
    key: 'getActiveClass',
    value: function getActiveClass(neededSize) {
      var _props$size = this.props.size,
          size = _props$size === undefined ? 3 : _props$size;

      return neededSize === size ? 'table-size-component__switcher_active' : '';
    }
  }, {
    key: 'onChange',
    value: function onChange(size) {
      var _props$onChange = this.props.onChange,
          onChange = _props$onChange === undefined ? function (value) {} : _props$onChange;

      onChange(size);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'span',
        { className: 'table-size-component' },
        this.getSizes().map(function (tableSize, index) {
          var size = tableSize.getSize();
          return _react2.default.createElement('button', {
            key: index,
            onClick: function onClick() {
              return _this2.onChange(size);
            },
            className: (0, _classnames2.default)(['table-size-component__switcher', tableSize.getClassName(), _this2.getActiveClass(size)]) });
        })
      );
    }
  }]);

  return TableSizeComponent;
}(_react2.default.Component);

TableSizeComponent.propTypes = {
  onChange: _propTypes2.default.func,
  size: _propTypes2.default.number
};
exports.default = TableSizeComponent;