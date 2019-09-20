webpackHotUpdate("static\\development\\pages\\index.js",{

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
  }, "Si necesitas informaci\xF3n sobre Zenelly puedes escribirnos para atender tus inquietudes ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
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

/***/ })

})
//# sourceMappingURL=index.js.da512cb00cbbe90b7b48.hot-update.js.map