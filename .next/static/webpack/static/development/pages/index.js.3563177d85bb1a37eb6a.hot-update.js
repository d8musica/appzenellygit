webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/Main/Banner.js":
false,

/***/ "./components/Main/Banner1.js":
/*!************************************!*\
  !*** ./components/Main/Banner1.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Banner; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rc_scroll_anim_lib_ScrollElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rc-scroll-anim/lib/ScrollElement */ "./node_modules/rc-scroll-anim/lib/ScrollElement.js");
/* harmony import */ var rc_scroll_anim_lib_ScrollElement__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rc_scroll_anim_lib_ScrollElement__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var rc_queue_anim__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rc-queue-anim */ "./node_modules/rc-queue-anim/es/index.js");
var _jsxFileName = "C:\\Users\\ek-mo\\Documents\\Zenith\\zenelly\\components\\Main\\Banner1.js";






function typeFunc(a) {
  if (a.key === 'line') {
    return 'right';
  } else if (a.key === 'button') {
    return 'bottom';
  }

  return 'left';
}

function Banner(_ref) {
  var onEnterChange = _ref.onEnterChange;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "page banner-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rc_scroll_anim_lib_ScrollElement__WEBPACK_IMPORTED_MODULE_2___default.a, {
    className: "page",
    id: "banner",
    onChange: function onChange(_ref2) {
      var mode = _ref2.mode;
      return onEnterChange(mode);
    },
    playScale: 0.9,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(rc_queue_anim__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "banner-text-wrapper",
    type: typeFunc,
    delay: 400,
    key: "banner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    key: "h2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Hola, nuestro sitio est\xE1 en construcci\xF3n"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    key: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Si necesitas informaci\xF3n sobre", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), " Zenelly puedes escribirnos ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), " para atender tus inquietudes ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), "tus bitcoins de forma \xE1gil y eficiente.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
    type: "down",
    className: "down",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })));
}
Banner.propTypes = {
  onEnterChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ }),

/***/ "./components/Main/index.js":
/*!**********************************!*\
  !*** ./components/Main/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_document_title__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-document-title */ "./node_modules/react-document-title/index.js");
/* harmony import */ var react_document_title__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_document_title__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var enquire_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! enquire-js */ "./node_modules/enquire-js/main.js");
/* harmony import */ var enquire_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(enquire_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Header */ "./components/Main/Header.js");
/* harmony import */ var _Banner1__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Banner1 */ "./components/Main/Banner1.js");
/* harmony import */ var _Page1__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Page1 */ "./components/Main/Page1.js");
/* harmony import */ var _Page2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Page2 */ "./components/Main/Page2.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Footer */ "./components/Main/Footer.js");
/* harmony import */ var _static_style__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./static/style */ "./components/Main/static/style.js");







var _jsxFileName = "C:\\Users\\ek-mo\\Documents\\Zenith\\zenelly\\components\\Main\\index.js";









var isMobile = false;
Object(enquire_js__WEBPACK_IMPORTED_MODULE_9__["enquireScreen"])(function (b) {
  isMobile = b;
});

var Home =
/*#__PURE__*/
function (_React$PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Home, _React$PureComponent);

  function Home() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Home)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      isFirstScreen: true,
      isMobile: isMobile
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onEnterChange", function (mode) {
      _this.setState({
        isFirstScreen: mode === 'enter'
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      Object(enquire_js__WEBPACK_IMPORTED_MODULE_9__["enquireScreen"])(function (b) {
        _this2.setState({
          isMobile: !!b
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return [react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_10__["default"], {
        key: "header",
        isFirstScreen: this.state.isFirstScreen,
        isMobile: this.state.isMobile,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Banner1__WEBPACK_IMPORTED_MODULE_11__["default"], {
        key: "banner",
        onEnterChange: this.onEnterChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Page1__WEBPACK_IMPORTED_MODULE_12__["default"], {
        key: "page1",
        isMobile: this.state.isMobile,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Page2__WEBPACK_IMPORTED_MODULE_13__["default"], {
        key: "page2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_14__["default"], {
        key: "footer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_document_title__WEBPACK_IMPORTED_MODULE_8___default.a, {
        title: "Zenith Software",
        key: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      })];
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.PureComponent);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.3563177d85bb1a37eb6a.hot-update.js.map