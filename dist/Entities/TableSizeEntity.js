'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TableSizeEntityInterface = require('./TableSizeEntityInterface');

var _TableSizeEntityInterface2 = _interopRequireDefault(_TableSizeEntityInterface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableSizeEntity = function (_TableSizeEntityInter) {
  _inherits(TableSizeEntity, _TableSizeEntityInter);

  function TableSizeEntity(size, className) {
    _classCallCheck(this, TableSizeEntity);

    var _this = _possibleConstructorReturn(this, (TableSizeEntity.__proto__ || Object.getPrototypeOf(TableSizeEntity)).call(this));

    _this._size = size;
    _this._className = className;
    return _this;
  }

  _createClass(TableSizeEntity, [{
    key: 'getSize',
    value: function getSize() {
      return this._size;
    }
  }, {
    key: 'getClassName',
    value: function getClassName() {
      return this._className;
    }
  }]);

  return TableSizeEntity;
}(_TableSizeEntityInterface2.default);

exports.default = TableSizeEntity;