'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CookieContent = require('../cookieContent/CookieContent');

var _CookieContent2 = _interopRequireDefault(_CookieContent);

require('./styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CookieToaster = function (_React$Component) {
  _inherits(CookieToaster, _React$Component);

  function CookieToaster() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, CookieToaster);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CookieToaster.__proto__ || Object.getPrototypeOf(CookieToaster)).call.apply(_ref, [this].concat(args))), _this), _this.state = { hidden: true }, _this.accept = function () {
      localStorage.setItem('cookieHasPopped', true);
    }, _this.hide = function (accepted) {
      _this.setState({ hidden: true }, function () {
        if (accepted) {
          _this.accept();
          _this.props.accept();
        } else {
          _this.props.decline();
        }
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CookieToaster, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var cookieHasPopped = localStorage.getItem('cookieHasPopped');

      if (!cookieHasPopped) {
        setTimeout(function () {
          _this2.setState({ hidden: false });
        }, 3000);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        !this.props.popped && _react2.default.createElement(
          'div',
          { className: 'pop-over-effect ' + (this.state.hidden ? 'hidden' : 'pop-over-show') },
          _react2.default.createElement(
            'div',
            {
              className: 'cookie-toaster ' + ((this.props.type === 'top' || this.props.type === 'modal') && 'cookie-toaster-' + this.props.type) },
            _react2.default.createElement(_CookieContent2.default, { title: this.props.title,
              text: this.props.text,
              btnDeclineText: this.props.btnDeclineText,
              btnAcceptText: this.props.btnAcceptText,
              hide: this.hide,
              linkUrl: this.props.linkUrl,
              linkText: this.props.linkText
            })
          )
        )
      );
    }
  }]);

  return CookieToaster;
}(_react2.default.Component);

CookieToaster.propTypes = {
  title: _react.PropTypes.string,
  text: _react.PropTypes.string,
  btnDeclineText: _react.PropTypes.string,
  btnAcceptText: _react.PropTypes.string,
  accept: _react.PropTypes.func,
  decline: _react.PropTypes.func,
  popped: _react.PropTypes.bool,
  linkUrl: _react.PropTypes.string,
  linkText: _react.PropTypes.string,
  type: _react.PropTypes.string
};

CookieToaster.defaultProps = {
  title: 'Give me a property "title" to change this.',
  text: 'Give me a property "text" to change this.',
  btnAcceptText: 'Give me a property "btnAcceptText" to change this.',
  btnDeclineText: 'Give me a property "btnDeclineText" to change this.',
  accept: function accept() {},
  decline: function decline() {},
  popped: false,
  linkUrl: '#',
  linkText: 'Give me a property "linkText" to change this.',
  type: 'bottom'
};

exports.default = CookieToaster;