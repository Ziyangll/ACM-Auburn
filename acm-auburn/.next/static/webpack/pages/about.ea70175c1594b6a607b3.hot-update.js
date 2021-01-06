webpackHotUpdate_N_E("pages/about",{

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Footer; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/ziyangli/_/GitHub/ACM-Auburn/acm-auburn/components/Footer.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\nfunction Footer() {\n  var currentYear = new Date().getFullYear();\n  return __jsx(\"footer\", {\n    className: \"text-center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    \"class\": \"socials\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 4\n    }\n  }, __jsx(\"button\", {\n    \"class\": \"flex bg-white px-4 py-4 w-auto h-auto rounded-full active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    href: \"https://discord.gg/prNnwtV\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 6\n    }\n  }, __jsx(\"img\", {\n    src: \"/discord.svg\",\n    alt: \"discord\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  })), __jsx(\"span\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 6\n    }\n  }, \"Extended\"))), __jsx(\"div\", {\n    className: \"socials\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 4\n    }\n  }, __jsx(\"a\", {\n    href: \"https://discord.gg/prNnwtV\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }\n  }, __jsx(\"img\", {\n    src: \"/discord.svg\",\n    alt: \"discord\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 6\n    }\n  })), __jsx(\"a\", {\n    href: \"https://twitter.com/AuburnACM\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, __jsx(\"img\", {\n    src: \"/twitter.png\",\n    alt: \"twitter\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 6\n    }\n  })), __jsx(\"a\", {\n    href: \"https://www.facebook.com/auburnu/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }, __jsx(\"img\", {\n    src: \"/facebook.png\",\n    alt: \"facebook\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 6\n    }\n  }))), __jsx(\"a\", {\n    href: \"/\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 4\n    }\n  }, currentYear, \" ACM Auburn\"));\n}\n_c = Footer;\n\nvar _c;\n\n$RefreshReg$(_c, \"Footer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb290ZXIuanM/ZjI1NiJdLCJuYW1lcyI6WyJGb290ZXIiLCJjdXJyZW50WWVhciIsIkRhdGUiLCJnZXRGdWxsWWVhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFlLFNBQVNBLE1BQVQsR0FBa0I7QUFDaEMsTUFBSUMsV0FBVyxHQUFHLElBQUlDLElBQUosR0FBV0MsV0FBWCxFQUFsQjtBQUNBLFNBQ0M7QUFBUSxhQUFTLEVBQUMsYUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssYUFBTSxTQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFRLGFBQU0scUlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUcsUUFBSSxFQUFDLDRCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQztBQUFLLE9BQUcsRUFBQyxjQUFUO0FBQXdCLE9BQUcsRUFBQyxTQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREQsQ0FERCxFQUlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkQsQ0FERCxDQURELEVBU0M7QUFBSyxhQUFTLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0M7QUFBRyxRQUFJLEVBQUMsNEJBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssT0FBRyxFQUFDLGNBQVQ7QUFBd0IsT0FBRyxFQUFDLFNBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQURELEVBS0M7QUFBRyxRQUFJLEVBQUMsK0JBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssT0FBRyxFQUFDLGNBQVQ7QUFBd0IsT0FBRyxFQUFDLFNBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQUxELEVBUUM7QUFBRyxRQUFJLEVBQUMsbUNBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNDO0FBQUssT0FBRyxFQUFDLGVBQVQ7QUFBeUIsT0FBRyxFQUFDLFVBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERCxDQVJELENBVEQsRUFxQkM7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWFGLFdBQWIsZ0JBckJELENBREQ7QUF5QkE7S0EzQnVCRCxNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Gb290ZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XG5cdGxldCBjdXJyZW50WWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcblx0cmV0dXJuIChcblx0XHQ8Zm9vdGVyIGNsYXNzTmFtZT0ndGV4dC1jZW50ZXInPlxuXHRcdFx0PGRpdiBjbGFzcz0nc29jaWFscyc+XG5cdFx0XHRcdDxidXR0b24gY2xhc3M9J2ZsZXggYmctd2hpdGUgcHgtNCBweS00IHctYXV0byBoLWF1dG8gcm91bmRlZC1mdWxsIGFjdGl2ZTpzaGFkb3ctbGcgbW91c2Ugc2hhZG93IHRyYW5zaXRpb24gZWFzZS1pbiBkdXJhdGlvbi0yMDAgZm9jdXM6b3V0bGluZS1ub25lJz5cblx0XHRcdFx0XHQ8YSBocmVmPSdodHRwczovL2Rpc2NvcmQuZ2cvcHJObnd0Vic+XG5cdFx0XHRcdFx0XHQ8aW1nIHNyYz0nL2Rpc2NvcmQuc3ZnJyBhbHQ9J2Rpc2NvcmQnPjwvaW1nPlxuXHRcdFx0XHRcdDwvYT5cblx0XHRcdFx0XHQ8c3Bhbj5FeHRlbmRlZDwvc3Bhbj5cblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdzb2NpYWxzJz5cblx0XHRcdFx0PGEgaHJlZj0naHR0cHM6Ly9kaXNjb3JkLmdnL3ByTm53dFYnPlxuXHRcdFx0XHRcdDxpbWcgc3JjPScvZGlzY29yZC5zdmcnIGFsdD0nZGlzY29yZCc+PC9pbWc+XG5cdFx0XHRcdDwvYT5cblxuXHRcdFx0XHQ8YSBocmVmPSdodHRwczovL3R3aXR0ZXIuY29tL0F1YnVybkFDTSc+XG5cdFx0XHRcdFx0PGltZyBzcmM9Jy90d2l0dGVyLnBuZycgYWx0PSd0d2l0dGVyJz48L2ltZz5cblx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8YSBocmVmPSdodHRwczovL3d3dy5mYWNlYm9vay5jb20vYXVidXJudS8nPlxuXHRcdFx0XHRcdDxpbWcgc3JjPScvZmFjZWJvb2sucG5nJyBhbHQ9J2ZhY2Vib29rJz48L2ltZz5cblx0XHRcdFx0PC9hPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8YSBocmVmPScvJz57Y3VycmVudFllYXJ9IEFDTSBBdWJ1cm48L2E+XG5cdFx0PC9mb290ZXI+XG5cdCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Footer.js\n");

/***/ })

})