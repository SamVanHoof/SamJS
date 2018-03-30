'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Network = function () {
    function Network() {
        _classCallCheck(this, Network);
    }

    _createClass(Network, null, [{
        key: 'getToken',
        value: function getToken() {
            return localStorage.get('session');
        }
    }, {
        key: 'isFormData',
        value: function isFormData(body) {
            return body instanceof FormData;
        }
    }, {
        key: 'basicHeaders',
        value: function basicHeaders(extraHeaders) {
            var formData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var headers = {};
            var token = this.getToken();

            if (!formData) {
                headers['content-type'] = 'application/json';
            }

            if (token && token !== 'undefined') {
                headers.authorization = 'Bearer ' + token;
            }

            return _extends({}, headers, extraHeaders);
        }
    }, {
        key: 'errorHandler',
        value: function errorHandler(err) {
            if (err.errors && Array.isArray(err.errors)) {
                throw {
                    errors: err.errors,
                    meta: JSON.stringify(err)
                };
            } else {
                throw {
                    errors: [{ code: '0', status: 500, title: 'Unknown error' }],
                    meta: JSON.stringify(err)
                };
            }
        }
    }, {
        key: 'get',
        value: function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(route) {
                var extraHeaders = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var headers, result, jsonResult;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.prev = 0;
                                headers = this.basicHeaders(extraHeaders);
                                _context.next = 4;
                                return (0, _isomorphicFetch2.default)('' + process.env.REACT_APP_API_HOST + route, { method: 'GET', headers: headers });

                            case 4:
                                result = _context.sent;
                                _context.next = 7;
                                return result.json();

                            case 7:
                                jsonResult = _context.sent;

                                if (!result.ok) {
                                    _context.next = 10;
                                    break;
                                }

                                return _context.abrupt('return', jsonResult);

                            case 10:
                                throw jsonResult;

                            case 13:
                                _context.prev = 13;
                                _context.t0 = _context['catch'](0);

                                this.errorHandler(_context.t0);

                            case 16:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[0, 13]]);
            }));

            function get(_x2) {
                return _ref.apply(this, arguments);
            }

            return get;
        }()
    }, {
        key: 'put',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(route) {
                var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var extraHeaders = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                var isFormData, headers, result, jsonResult;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.prev = 0;
                                isFormData = this.isFormData(body);
                                headers = this.basicHeaders(extraHeaders, isFormData);
                                _context2.next = 5;
                                return (0, _isomorphicFetch2.default)('' + process.env.REACT_APP_API_HOST + route, { method: 'PUT', headers: headers, body: isFormData ? body : JSON.stringify(body) });

                            case 5:
                                result = _context2.sent;
                                _context2.next = 8;
                                return result.json();

                            case 8:
                                jsonResult = _context2.sent;

                                if (!result.ok) {
                                    _context2.next = 11;
                                    break;
                                }

                                return _context2.abrupt('return', jsonResult);

                            case 11:
                                throw jsonResult;

                            case 14:
                                _context2.prev = 14;
                                _context2.t0 = _context2['catch'](0);

                                this.errorHandler(_context2.t0);

                            case 17:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this, [[0, 14]]);
            }));

            function put(_x4) {
                return _ref2.apply(this, arguments);
            }

            return put;
        }()
    }, {
        key: 'post',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(route) {
                var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var extraHeaders = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                var isFormData, headers, result, jsonResult;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.prev = 0;
                                isFormData = this.isFormData(body);
                                headers = this.basicHeaders(extraHeaders, isFormData);
                                _context3.next = 5;
                                return (0, _isomorphicFetch2.default)('' + process.env.REACT_APP_API_HOST + route, { method: 'POST', headers: headers, body: isFormData ? body : JSON.stringify(body) });

                            case 5:
                                result = _context3.sent;
                                _context3.next = 8;
                                return result.json();

                            case 8:
                                jsonResult = _context3.sent;

                                if (!result.ok) {
                                    _context3.next = 11;
                                    break;
                                }

                                return _context3.abrupt('return', jsonResult || true);

                            case 11:
                                throw jsonResult;

                            case 14:
                                _context3.prev = 14;
                                _context3.t0 = _context3['catch'](0);

                                this.errorHandler(_context3.t0);

                            case 17:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this, [[0, 14]]);
            }));

            function post(_x7) {
                return _ref3.apply(this, arguments);
            }

            return post;
        }()
    }, {
        key: 'delete',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(route) {
                var headers, result, jsonResult;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.prev = 0;
                                headers = this.basicHeaders();
                                _context4.next = 4;
                                return (0, _isomorphicFetch2.default)('' + process.env.REACT_APP_API_HOST + route, { method: 'DELETE', headers: headers });

                            case 4:
                                result = _context4.sent;

                                if (!(result.status === 204 || result.status === 200)) {
                                    _context4.next = 7;
                                    break;
                                }

                                return _context4.abrupt('return', true);

                            case 7:
                                _context4.next = 9;
                                return result.json();

                            case 9:
                                jsonResult = _context4.sent;
                                throw jsonResult;

                            case 13:
                                _context4.prev = 13;
                                _context4.t0 = _context4['catch'](0);

                                this.errorHandler(_context4.t0);

                            case 16:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this, [[0, 13]]);
            }));

            function _delete(_x10) {
                return _ref4.apply(this, arguments);
            }

            return _delete;
        }()
    }]);

    return Network;
}();

exports.default = Network;