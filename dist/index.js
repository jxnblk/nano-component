'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _id = 0;
var insert = function insert(n) {
  return n;
};
var cache = {};
var hyphenate = function hyphenate(str) {
  return ('' + str).replace(/[A-Z]|^ms/g, '-$&').toLowerCase();
};
var px = function px(n) {
  return typeof n === 'number' ? n + 'px' : n;
};
var mx = function mx(rule, media) {
  return media ? media + '{' + rule + '}' : rule;
};
var rx = function rx(cn, prop, val, media) {
  return mx('.' + cn + '{' + hyphenate(prop) + ':' + px(val) + '}', media);
};

if (typeof window !== 'undefined') {
  var tag = document.createElement('style');
  document.head.appendChild(tag);
  var sheet = tag.sheet;
  insert = function insert(rule) {
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
    if (val !== null && typeof val === 'object') {
      var m2 = /^@/.test(key) ? key : null;
      var c2 = m2 ? child : child + key;
      classnames.push(parse(val, c2, m2));
      continue;
    }
    var cacheKey = key + val + media;
    if (cache[cacheKey]) {
      classnames.push(cache[cacheKey]);
      continue;
    }
    var cn = 'x' + (_id++).toString(36);
    var rule = rx(cn + child, key, val, media);
    insert(rule);
    cache[cacheKey] = cn;
    classnames.push(cn);
  }
  return classnames.join(' ');
};

var comp = function comp(Comp) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return function (props) {
      var styles = args.map(function (arg) {
        return typeof arg === 'function' ? arg(props) : arg;
      });
      var className = styles.map(function (s) {
        return parse(s);
      }).join(' ');
      return (0, _react.createElement)(Comp, Object.assign({}, props, { className: className }));
    };
  };
};

exports.default = comp;