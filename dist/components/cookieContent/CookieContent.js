'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CookieContent = function (_React$Component) {
  _inherits(CookieContent, _React$Component);

  function CookieContent() {
    _classCallCheck(this, CookieContent);

    return _possibleConstructorReturn(this, (CookieContent.__proto__ || Object.getPrototypeOf(CookieContent)).apply(this, arguments));
  }

  _createClass(CookieContent, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: 'cookie-container' },
        _react2.default.createElement(
          'h1',
          null,
          this.props.title
        ),
        _react2.default.createElement(
          'p',
          null,
          this.props.text
        ),
        _react2.default.createElement(
          'a',
          { href: this.props.linkUrl },
          this.props.linkText
        ),
        this.props.linkUrl && this.props.linkText && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'button',
            { onClick: function onClick() {
                return _this2.props.hide(false);
              } },
            this.props.btnDeclineText
          ),
          _react2.default.createElement(
            'button',
            { onClick: function onClick() {
                return _this2.props.hide(true);
              } },
            this.props.btnAcceptText
          )
        )
      );
    }
  }]);

  return CookieContent;
}(_react2.default.Component);

CookieContent.propTypes = {
  title: _react.PropTypes.string.isRequired,
  text: _react.PropTypes.string.isRequired,
  btnDeclineText: _react.PropTypes.string.isRequired,
  btnAcceptText: _react.PropTypes.string.isRequired,
  hide: _react.PropTypes.func.isRequired,
  linkUrl: _react.PropTypes.string,
  linkText: _react.PropTypes.string
};

CookieContent.dfaultProps = {
  linkUrl: '',
  linkText: ''
};

exports.default = CookieContent;