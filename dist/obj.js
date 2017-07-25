'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sheet = {};
var cache = {};
var _id = 0;
var uuid = function uuid() {
  return _id++;
};
var name = function name() {
  return 'y' + uuid().toString(36);
};
var hyphenate = function hyphenate(str) {
  return ('' + str).replace(/[A-Z]|^ms/g, '-$&').toLowerCase();
};
var px = function px(n) {
  return typeof n === 'number' ? n + 'px' : n;
};
var rx = function rx(cn, prop, val, media) {
  return media ? media + '{.' + cn + '{' + hyphenate(prop) + ':' + px(val) + '}}' : '.' + cn + '{' + hyphenate(prop) + ':' + px(val) + '}';
};

if (typeof window === 'undefined') {
  sheet.insert = function (n) {
    return n;
  };
} else {
  var tag = document.createElement('style');
  document.head.appendChild(tag);
  sheet = tag.sheet;
  sheet.insert = function (rule) {
    var i = sheet.cssRules.length;
    sheet.insertRule(rule, i);
  };
}

var parse = function parse(obj) {
  var child = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var media = arguments[2];

  var classnames = [];
  for (var key in obj) {
    var val = obj[key];
    if (val !== null && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
      var m2 = /^@/.test(key) ? key : null;
      var c2 = m2 ? child : child + key;
      classnames.push(parse(val, c2, m2));
      continue;
    }
    var cn = name();
    var rule = rx(cn + child, key, val, media);
    sheet.insert(rule);
    classnames.push(cn);
  }
  return classnames.join(' ');
};

var comp = function comp(args) {
  return function (Comp) {
    return function (props) {
      var style = typeof args === 'function' ? args(props) : args;
      var cn = parse(style);
      return _react2.default.createElement(Comp, _extends({}, props, { className: cn }));
    };
  };
};

exports.default = comp;