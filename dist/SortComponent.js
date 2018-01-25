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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SortComponent = function (_React$Component) {
  _inherits(SortComponent, _React$Component);

  function SortComponent() {
    _classCallCheck(this, SortComponent);

    return _possibleConstructorReturn(this, (SortComponent.__proto__ || Object.getPrototypeOf(SortComponent)).apply(this, arguments));
  }

  _createClass(SortComponent, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$reversed = _props.reversed,
          reversed = _props$reversed === undefined ? false : _props$reversed,
          _props$active = _props.active,
          active = _props$active === undefined ? false : _props$active;

      return _react2.default.createElement(
        'span',
        { className: 'sort-component' },
        _react2.default.createElement('span', {
          className: (0, _classnames2.default)(['sort-component__angle', reversed ? 'sort-component_reversed' : 'sort-component_no-reversed', active ? 'sort-component_active' : 'sort-component_no-active']) })
      );
    }
  }]);

  return SortComponent;
}(_react2.default.Component);

SortComponent.propTypes = {
  reversed: _propTypes2.default.bool,
  active: _propTypes2.default.bool
};
exports.default = SortComponent;