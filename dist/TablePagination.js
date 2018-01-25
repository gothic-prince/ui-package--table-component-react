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

var TablePagination = function (_React$Component) {
  _inherits(TablePagination, _React$Component);

  function TablePagination() {
    _classCallCheck(this, TablePagination);

    return _possibleConstructorReturn(this, (TablePagination.__proto__ || Object.getPrototypeOf(TablePagination)).apply(this, arguments));
  }

  _createClass(TablePagination, [{
    key: 'getOptionsByDefault',
    value: function getOptionsByDefault() {
      return this.props.arrayLimitRows || [10, 25, 50, 100];
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$onPrev = _props.onPrev,
          onPrev = _props$onPrev === undefined ? function () {} : _props$onPrev,
          _props$onNext = _props.onNext,
          onNext = _props$onNext === undefined ? function () {} : _props$onNext,
          _props$onFirst = _props.onFirst,
          onFirst = _props$onFirst === undefined ? function () {} : _props$onFirst,
          _props$onLast = _props.onLast,
          onLast = _props$onLast === undefined ? function () {} : _props$onLast,
          _props$onChangeMaxIte = _props.onChangeMaxItems,
          onChangeMaxItems = _props$onChangeMaxIte === undefined ? function () {} : _props$onChangeMaxIte,
          _props$onChangeCurren = _props.onChangeCurrentPage,
          onChangeCurrentPage = _props$onChangeCurren === undefined ? function () {} : _props$onChangeCurren,
          _props$page = _props.page,
          page = _props$page === undefined ? 1 : _props$page,
          _props$limitRows = _props.limitRows,
          limitRows = _props$limitRows === undefined ? null : _props$limitRows,
          _props$hasPrev = _props.hasPrev,
          hasPrev = _props$hasPrev === undefined ? true : _props$hasPrev,
          _props$hasNext = _props.hasNext,
          hasNext = _props$hasNext === undefined ? true : _props$hasNext;

      return _react2.default.createElement(
        'div',
        { className: 'table-pagination' },
        _react2.default.createElement(
          'div',
          { className: 'table-pagination__switchPage' },
          _react2.default.createElement(
            'select',
            {
              className: 'table-pagination__select_limit_rows',
              value: limitRows,
              onChange: function onChange(e) {
                return onChangeMaxItems(Number(e.target.value));
              } },
            this.getOptionsByDefault().map(function (value, key) {
              return _react2.default.createElement(
                'option',
                { key: key },
                value
              );
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'table-pagination__nav' },
          _react2.default.createElement('button', {
            disabled: !hasPrev,
            className: 'table-pagination__button table-pagination__first',
            onClick: function onClick(e) {
              return onFirst(e);
            } }),
          _react2.default.createElement('button', {
            disabled: !hasPrev,
            className: 'table-pagination__button table-pagination__prev',
            onClick: function onClick(e) {
              return onPrev(e);
            } }),
          _react2.default.createElement('input', {
            onChange: function onChange(e) {
              return onChangeCurrentPage(Number(e.target.value));
            },
            children: page,
            className: (0, _classnames2.default)(['table-pagination__button', 'table-pagination__set-page', 'inline-block'])
          }),
          _react2.default.createElement('button', {
            disabled: !hasNext,
            className: 'table-pagination__button table-pagination__next',
            onClick: function onClick(e) {
              return onNext(e);
            } }),
          _react2.default.createElement('button', {
            disabled: !hasNext,
            className: 'table-pagination__button table-pagination__last',
            onClick: function onClick(e) {
              return onLast(e);
            } })
        )
      );
    }
  }]);

  return TablePagination;
}(_react2.default.Component);

TablePagination.propTypes = {
  hasPrev: _propTypes2.default.bool,
  hasNext: _propTypes2.default.bool,
  onPrev: _propTypes2.default.func,
  onNext: _propTypes2.default.func,
  onFirst: _propTypes2.default.func,
  onLast: _propTypes2.default.func,
  onChangeMaxItems: _propTypes2.default.func,
  onChangeCurrentPage: _propTypes2.default.func,
  page: _propTypes2.default.number,
  limitRows: _propTypes2.default.number,
  arrayLimitRows: _propTypes2.default.array
};
exports.default = TablePagination;