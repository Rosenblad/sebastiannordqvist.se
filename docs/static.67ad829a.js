(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(4);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(5);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Export your top level component as JSX (for static rendering)
exports.default = _App2.default;

// Render your app


// Your top level component

if (typeof document !== 'undefined') {
  var renderMethod =  false ? _reactDom2.default.render : _reactDom2.default.hydrate || _reactDom2.default.render;
  var render = function render(Comp) {
    renderMethod(_react2.default.createElement(Comp, null), document.getElementById('root'));
  };

  // Render!
  render(_App2.default);
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHotLoader = __webpack_require__(7);

__webpack_require__(8);

var _Header = __webpack_require__(9);

var _Header2 = _interopRequireDefault(_Header);

var _Intro = __webpack_require__(14);

var _Intro2 = _interopRequireDefault(_Intro);

var _ListProjects = __webpack_require__(16);

var _ListProjects2 = _interopRequireDefault(_ListProjects);

var _Experience = __webpack_require__(24);

var _Experience2 = _interopRequireDefault(_Experience);

var _Competence = __webpack_require__(25);

var _Competence2 = _interopRequireDefault(_Competence);

var _AboutMe = __webpack_require__(28);

var _AboutMe2 = _interopRequireDefault(_AboutMe);

var _Footer = __webpack_require__(29);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/prefer-stateless-function */

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'app' },
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'content' },
          _react2.default.createElement(
            'div',
            { className: 'container-fluid' },
            _react2.default.createElement(_Intro2.default, null),
            _react2.default.createElement(_ListProjects2.default, null),
            _react2.default.createElement(_Experience2.default, null),
            _react2.default.createElement(_Competence2.default, null),
            _react2.default.createElement(_AboutMe2.default, null)
          )
        ),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = (0, _reactHotLoader.hot)(module)(App);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)(module)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Header = __webpack_require__(10);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Header).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _code = __webpack_require__(11);

var _code2 = _interopRequireDefault(_code);

var _animate = __webpack_require__(12);

var _animate2 = _interopRequireDefault(_animate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Code = function (_React$Component) {
  _inherits(Code, _React$Component);

  function Code() {
    _classCallCheck(this, Code);

    return _possibleConstructorReturn(this, (Code.__proto__ || Object.getPrototypeOf(Code)).apply(this, arguments));
  }

  _createClass(Code, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('Code.componentDidMount()');
      (0, _animate2.default)();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('header', { id: 'codeRoot', dangerouslySetInnerHTML: { __html: _code2.default } });
    }
  }]);

  return Code;
}(_react2.default.Component);

exports.default = Code;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "<div class=\"code\">\n<pre>\n 1 <span class=\"storage type\">var</span> _react<span class=\"keyword operator assignment\">=</span><span class=\"variable function\">__webpack_require__</span>(<span class=\"constant numeric\">1</span>);<span class=\"storage type\">var</span> _react2<span class=\"keyword operator assignment\">=</span><span class=\"variable function\">_interopRequireDefault</span>(<span class=\"variable parameter\">_react</span>);<span class=\"variable function\">var</span> _reactDom<span class=\"keyword operator assignment\">=</span>\n 2 <span class=\"variable function\">__webpack_require__</span>(<span class=\"constant numeric\">32</span>);<span class=\"storage type\">var</span> _reactDom2<span class=\"keyword operator\">=</span><span class=\"variable function\">_interopRequireDefault</span>(<span class=\"variable parameter\">_reactDom</span>);<span class=\"storage type function\">function</span> \n 3 <span class=\"variable function\">_interopRequireDefault</span>(<span class=\"variable parameter function\">obj</span>){<span class=\"keyword control\">return</span> obj <span class=\"keyword operator assignment\">&&</span>obj<span class=\"keyword operator\">.</span><span class=\"variable other object\">__esModule</span><span class=\"keyword operator ternary\">?</span>obj:{<span class=\"variable other object\">default</span>:<span class=\"variable other object\">obj</span>}};<span class=\"storage type\">var</span> App<span class=\"keyword operator\">=</span><span class=\"storage type function\">function</span> \n 4 <span class=\"variable function\">App</span>(){<span class=\"keyword control\">return</span> _react2<span class=\"keyword operator\">.</span>default<span class=\"keyword operator\">.</span><span class=\"variable function\">createElement</span>(<span class=\"string quoted\">'div'</span>,<span class=\"variable parameter function\">null</span>,<span class=\"string quoted\">'calendar'</span>)};<span class=\"storage type\">var</span> rootCalendar\n 5 <span class=\"keyword operator\">=</span>document<span class=\"keyword operator\">.</span><span class=\"variable function\">getElementById</span>(<span class=\"string quoted\">'rootCalendar'</span>);_reactDom2<span class=\"keyword operator\">.</span>default<span class=\"keyword operator\">.</span><span class=\"variable function\">render</span>(<span class=\"variable parameter\">_react2</span><span class=\"keyword operator\">.</span>default\n 6 <span class=\"keyword operator\">.</span><span class=\"variable function\">createElement</span>(<span class=\"variable parameter\">App</span>,<span class=\"variable parameter\">null</span>),<span class=\"variable parameter\">rootCalendar</span>)},<span class=\"storage type function\">function</span>(<span class=\"variable parameter function\">module</span>,<span class=\"variable parameter function\">exports</span>,<span class=\"variable parameter function\">__webpack_require__</span>){\n 7 <span class=\"string quoted\">'use strict'</span>;module<span class=\"keyword operator assignment\">.</span><span class=\"support type\">exports</span><span class=\"keyword operator assignment\">=</span><span class=\"variable function\">__webpack_require__</span>(<span class=\"constant numeric\">2</span>)},\n 8 <span class=\"storage type function\">function</span>(<span class=\"variable parameter\">module</span>, <span class=\"variable parameter\">exports</span>,<span class=\"variable parameter\">__webpack_require__</span>){(<span class=\"storage type function\">function</span>(<span class=\"variable parameter function\">process</span>){<span class=\"string quoted\">'use strict'</span>;<span class=\"storage type\">var</span> _assign<span class=\"keyword operator assignment\">=</span>\n 9 <span class=\"variable function\">__webpack_require__</span>(<span class=\"constant numeric\">4</span>);<span class=\"storage type\">var</span> <span class=\"variable other readwrite\">ReactChildren</span>=<span class=\"variable function\">__webpack_require__</span>(<span class=\"constant numeric\">5</span>);<span class=\"storage type\">var</span> <span class=\"variable other object\">ReactComponent</span><span class=\"keyword operator assignment\">=</span>\n10 <span class=\"variable function\">__webpack_require__</span>(<span class=\"constant numeric\">18</span>);<span class=\"storage type\">var</span> ReactPureComponent<span class=\"keyword operator\">=</span><span class=\"variable function\">__webpack_require__</span>(<span class=\"constant numeric\">21</span>);<span class=\"storage type\">var</span> ReactClass<span class=\"keyword operator assignment\">=</span>\n11 <span class=\"variable function\">__webpack_require__</span>(<span class=\"constant numeric\">22</span>);<span class=\"storage type\">var</span><span class=\"variable other readwrite\">ReactDOMFactories</span><span class=\"keyword operator assignment\">=</span><span class=\"variable function\">__webpack_require__</span>(<span class=\"constant numeric\">24</span>);<span class=\"storage type\">var</span> ReactElement<span class=\"keyword operator assignment\">=</span>\n12 <span class=\"variable function\">__webpack_require__</span>(<span class=\"constant numeric\">9</span>);<span class=\"storage type=\">var</span> ReactPropTypes<span class=\"keyword operator assignment\">=</span>__webpack_require__(<span class=\"constant numeric\">29</span>);<span class=\"storage type\">var</span> ReactVersion<span class=\"keyword operator assignment\">=</span>\n13 <span class=\"variable function\">__webpack_require__</span>(<span class=\"constant numeric\">30</span>);<span class=\"keyword control\">var</span> <span class=\"variable other readwrite\">onlyChild</span><span class=\"keyword operator assignment\">=</span><span class=\"variable function\">__webpack_require__</span>(<span class=\"constant numeric\">31</span>);<span class=\"storage type\">var</span> warning<span class=\"keyword operator assignment\">=</span>\n14 <span class=\"variable function\">__webpack_require__</span>(<span class=\"constant numeric\">11</span>);<span class=\"storage type\">var</span> createElement<span class=\"keyword operator assignment\">=</span>ReactElement<span class=\"keyword operator\">.</span><span class=\"variable other object\">createElement</span>;<span class=\"storage type\">var</span> <span class=\"variable other object\">createFactory</span><span class=\"keyword operator\">=</span>\n15 ReactElement<span class=\"keyword operator\">.</span>createFactory;<span class=\"storage type\">var</span> <span class=\"variable other readwrite\">cloneElement</span>=ReactElement<span class=\"keyword operator\">.</span><span class=\"variable other object\">cloneElement</span>;<span class=\"keyword control conditional\">if</span>(process<span class=\"keyword operator\">.</span>env\n16 <span class=\"keyword operator\">.</span>NODE_ENV<span class=\"keyword operator\">!==</span><span class=\"string quoted\">'production'</span>){<span class=\"type storage\">var</span> ReactElementValidator<span class=\"keyword operator\">=</span><span class=\"variable function\">__webpack_require__</span>(<span class=\"constant numeric\">25</span>);createElement<span class=\"keyword operator assignment\">=</span>\n17 ReactElementValidator<span class=\"keyword operator\">.</span><span class=\"variable other readwrite\">createElement</span>;createFactory<span class=\"keyword operator\">=</span>ReactElementValidator<span class=\"keyword operator\">.</span>createFactory;\n18 <span class=\"variable other object\">cloneElement</span><span class=\"keyword operator assignment\">=</span>ReactElementValidator<span class=\"keyword opreator\">.</span><span class=\"variable other object\">cloneElement</span>};<span class=\"storage type\">var</span> __spread<span class=\"keyword operator\">=</span>_assign;<span class=\"keyword control conditional\">if</span>(process<span class=\"keyword operator\">.</span>env\n</pre>\n</div>";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _animejs = __webpack_require__(13);

var _animejs2 = _interopRequireDefault(_animejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  console.log('running animate');

  var body = document.querySelector('body');
  var code = document.querySelector('.code');

  var codeHeight = parseInt(window.getComputedStyle(code).height, 10);

  code.style.willChange = 'transform';

  document.addEventListener('scroll', function () {
    if (body.scrollTop < codeHeight) {
      requestAnimationFrame(function () {
        code.style.transform = 'translateY(' + body.scrollTop * 0.06 + 'px)';
      });
    }
  });

  (0, _animejs2.default)({
    targets: ['.storage.type.function', '.variable.function', '.variable.parameter', '.constant.numeric', '.keyword.operator', '.storage.type', '.keyword.control', '.string.quoted', '.red'],
    opacity: [0.2, 1],
    duration: 100,
    delay: function delay(el, index, total) {
      return _animejs2.default.random(1, total) * 100;
    },

    easing: 'linear'
  });
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("animejs");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _sebastianNordqvist = __webpack_require__(15);

var _sebastianNordqvist2 = _interopRequireDefault(_sebastianNordqvist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Intro = function Intro(props) {
  return _react2.default.createElement(
    'section',
    { className: 'row center-xs' },
    _react2.default.createElement(
      'div',
      { className: 'cx12' },
      _react2.default.createElement(
        'div',
        { className: 'portrait' },
        _react2.default.createElement('img', {
          src: _sebastianNordqvist2.default,
          alt: 'Sebastian Nordqvist'
        })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'cx12' },
      _react2.default.createElement(
        'h1',
        null,
        props.name
      ),
      _react2.default.createElement(
        'p',
        null,
        props.about
      )
    )
  );
};

Intro.propTypes = {
  name: _propTypes2.default.string,
  about: _propTypes2.default.string
};

Intro.defaultProps = {
  name: 'Sebastian Nordqvist',
  about: 'Analytical, curious, positive and driven. Agile learner and problem solver. Thrives when being challenged and is always looking for ways to improve myself and people around me.'
};

exports.default = Intro;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/sebastian-nordqvist.adde47b9.jpg";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _uuid = __webpack_require__(2);

var _uuid2 = _interopRequireDefault(_uuid);

var _holmhenningScreenshot_1062x = __webpack_require__(17);

var _holmhenningScreenshot_1062x2 = _interopRequireDefault(_holmhenningScreenshot_1062x);

var _arkipolScreenshot_1062x = __webpack_require__(18);

var _arkipolScreenshot_1062x2 = _interopRequireDefault(_arkipolScreenshot_1062x);

var _davideberhardScreenshot_1062x = __webpack_require__(19);

var _davideberhardScreenshot_1062x2 = _interopRequireDefault(_davideberhardScreenshot_1062x);

var _hotelDjupvik_screenshot_1068x = __webpack_require__(20);

var _hotelDjupvik_screenshot_1068x2 = _interopRequireDefault(_hotelDjupvik_screenshot_1068x);

var _kendiScreenshot_1062x = __webpack_require__(21);

var _kendiScreenshot_1062x2 = _interopRequireDefault(_kendiScreenshot_1062x);

var _ngeniaScreenshot_1062x = __webpack_require__(22);

var _ngeniaScreenshot_1062x2 = _interopRequireDefault(_ngeniaScreenshot_1062x);

var _Project = __webpack_require__(23);

var _Project2 = _interopRequireDefault(_Project);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var projects = [{
  name: 'Holmhenning',
  permalink: 'http://hhpes.se/',
  imageSrc: _holmhenningScreenshot_1062x2.default,
  imageAlt: 'holmhenning & partners website screenshot'
}, {
  name: 'David Eberhard',
  permalink: 'http://eberhard.se/',
  imageSrc: _davideberhardScreenshot_1062x2.default,
  imageAlt: 'david eberhard website screenshot'
}, {
  name: 'Arkipol',
  permalink: 'http://arkipol.se/',
  imageSrc: _arkipolScreenshot_1062x2.default,
  imageAlt: 'arkipol website screenshot'
}, {
  name: 'Ngenia',
  permalink: 'http://ngenia.se',
  imageSrc: _ngeniaScreenshot_1062x2.default,
  imageAlt: 'ngenia website screenshot'
}, {
  name: 'Kendi',
  permalink: 'http://kendi.konsulterna.nu/',
  imageSrc: _kendiScreenshot_1062x2.default,
  imageAlt: 'kendi website screenshot'
}, {
  name: 'Djupvik',
  imageSrc: _hotelDjupvik_screenshot_1068x2.default,
  imageAlt: 'djupvik hotell website screenshot'
}];

var ListProjects = function ListProjects() {
  return _react2.default.createElement(
    'section',
    { className: 'projects' },
    _react2.default.createElement(
      'h2',
      null,
      'Projects'
    ),
    _react2.default.createElement(
      'div',
      { className: 'row' },
      projects.map(function (project) {
        return _react2.default.createElement(_Project2.default, _extends({ key: _uuid2.default.v4() }, project));
      })
    )
  );
};

exports.default = ListProjects;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/holmhenning-screenshot_1062x518.aac0197a.jpg";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/arkipol-screenshot_1062x518.866e9837.jpg";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/davideberhard-screenshot_1062x518.dd5dbd16.jpg";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/hotel-djupvik_screenshot_1068x518.4856fda9.jpg";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/kendi-screenshot_1062x518.a94a418a.jpg";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/ngenia-screenshot_1062x518.8e15f557.jpg";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Project = function Project(_ref) {
  var permalink = _ref.permalink,
      imageSrc = _ref.imageSrc,
      imageAlt = _ref.imageAlt;

  var image = void 0;

  if (permalink) {
    image = _react2.default.createElement(
      'a',
      { href: permalink, target: '_blank' },
      _react2.default.createElement('img', { src: imageSrc, alt: imageAlt })
    );
  } else {
    image = _react2.default.createElement('img', { src: imageSrc, alt: imageAlt });
  }

  return _react2.default.createElement(
    'div',
    { className: 'cx12' },
    _react2.default.createElement(
      'div',
      { className: 'project' },
      image
    )
  );
};

Project.propTypes = {
  permalink: _propTypes2.default.string.isRequired,
  imageSrc: _propTypes2.default.string.isRequired,
  imageAlt: _propTypes2.default.string.isRequired
};

exports.default = Project;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Experience = function Experience() {
  return _react2.default.createElement(
    "section",
    { className: "experience" },
    _react2.default.createElement(
      "h2",
      null,
      "Experience"
    ),
    _react2.default.createElement(
      "h3",
      null,
      "Webbyr\xE5n Konsulterna"
    ),
    _react2.default.createElement(
      "span",
      { className: "caption" },
      "July 2015 - April 2017"
    ),
    _react2.default.createElement(
      "p",
      null,
      "Project manager, server admin, front-end developer."
    ),
    _react2.default.createElement(
      "h3",
      null,
      "118100"
    ),
    _react2.default.createElement(
      "span",
      { className: "caption" },
      "2008 - 2009"
    ),
    _react2.default.createElement(
      "p",
      null,
      "Internship web development 40%."
    ),
    _react2.default.createElement(
      "a",
      {
        target: "_blank",
        href: "https://docs.google.com/document/d/1IadnojWoM5wjDWOjhOXrqONKedEEaGUFp8Nj8yaK5XM/edit?usp=sharing",
        rel: "noopener noreferrer"
      },
      "Letter of recommendation (in swedish)"
    )
  );
};

exports.default = Experience;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactInlinesvg = __webpack_require__(26);

var _reactInlinesvg2 = _interopRequireDefault(_reactInlinesvg);

var _uuid = __webpack_require__(2);

var _uuid2 = _interopRequireDefault(_uuid);

var _svg = __webpack_require__(27);

var _svg2 = _interopRequireDefault(_svg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Competence = function Competence() {
  return _react2.default.createElement(
    'section',
    { className: 'competence' },
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _svg2.default.map(function (icon) {
        return _react2.default.createElement(
          'div',
          { className: 'competency cx2 cs2', key: _uuid2.default.v4() },
          _react2.default.createElement(_reactInlinesvg2.default, { src: 'assets/icons/' + icon + '.svg' })
        );
      })
    )
  );
};

exports.default = Competence;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-inlinesvg");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ['babel', 'centos-icon', 'debian', 'docker', 'electron', 'es6', 'express', 'graphql', 'illustrator-logo', 'javascript', 'jira', 'laravel', 'mysql', 'nginx', 'nodejs-icon', 'npm', 'photoshop', 'php', 'postgresql', 'react', 'redux', 'rethinkdb', 'sass', 'stripe', 'vagrant', 'vue', 'webpack'];

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AboutMe = function AboutMe() {
  return _react2.default.createElement(
    "section",
    { className: "about-me", style: { paddingBottom: 0 } },
    _react2.default.createElement(
      "h2",
      null,
      "About me"
    ),
    _react2.default.createElement(
      "ul",
      null,
      _react2.default.createElement(
        "li",
        null,
        _react2.default.createElement(
          "strong",
          null,
          "Age:"
        ),
        " 25"
      ),
      _react2.default.createElement(
        "li",
        null,
        _react2.default.createElement(
          "strong",
          null,
          "Location:"
        ),
        " Stockholm, Sweden"
      ),
      _react2.default.createElement(
        "li",
        null,
        _react2.default.createElement(
          "strong",
          null,
          "Languages:"
        ),
        " Swedish, English"
      ),
      _react2.default.createElement(
        "li",
        null,
        _react2.default.createElement(
          "strong",
          null,
          "Education:"
        ),
        " IT-Media"
      )
    ),
    _react2.default.createElement(
      "p",
      null,
      "Feel free to contact me if you have any questions.",
      _react2.default.createElement("br", null)
    )
  );
};

exports.default = AboutMe;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
  return _react2.default.createElement(
    "footer",
    null,
    _react2.default.createElement(
      "div",
      { className: "container-fluid" },
      _react2.default.createElement(
        "div",
        { className: "row" },
        _react2.default.createElement(
          "div",
          { className: "cx12 cs6" },
          _react2.default.createElement(
            "h3",
            null,
            "Social"
          ),
          _react2.default.createElement(
            "ul",
            null,
            _react2.default.createElement(
              "li",
              null,
              _react2.default.createElement(
                "a",
                { href: "https://github.com/rosenblad", target: "_blank", rel: "noopener noreferrer" },
                "GitHub"
              )
            ),
            _react2.default.createElement(
              "li",
              null,
              _react2.default.createElement(
                "a",
                { href: "https://www.linkedin.com/in/sebastian-nordqvist-a46533b9/", target: "_blank", rel: "noopener noreferrer" },
                "LinkedIn"
              )
            ),
            _react2.default.createElement(
              "li",
              null,
              _react2.default.createElement(
                "a",
                { href: "https://www.facebook.com/nordqvistsebastian", target: "_blank", rel: "noopener noreferrer" },
                "Facebook"
              )
            )
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "cx12 cs6" },
          _react2.default.createElement(
            "h3",
            null,
            "Contact"
          ),
          _react2.default.createElement(
            "ul",
            null,
            _react2.default.createElement(
              "li",
              null,
              _react2.default.createElement(
                "a",
                { href: "mailto:nordqvist.sebastian@gmail.com" },
                "nordqvist.sebastian@gmail.com"
              )
            ),
            _react2.default.createElement(
              "li",
              null,
              _react2.default.createElement(
                "a",
                { href: "tel:+46734236358" },
                "+46 734 23 63 58"
              )
            )
          )
        )
      )
    )
  );
};

exports.default = Footer;

/***/ })
/******/ ]);
});
//# sourceMappingURL=static.67ad829a.js.map