"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/passwords",{

/***/ "./pages/passwords.tsx":
/*!*****************************!*\
  !*** ./pages/passwords.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined;\nvar Passwords = function(param1) {\n    var passwords = param1.passwords;\n    var _this1 = _this;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\cann\\\\Desktop\\\\work\\\\first_tz\\\\frontend\\\\pages\\\\passwords.tsx\",\n            lineNumber: 6,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\cann\\\\Desktop\\\\work\\\\first_tz\\\\frontend\\\\pages\\\\passwords.tsx\",\n                    lineNumber: 7,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"Страница сгенерированных паролей\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/\",\n                __source: {\n                    fileName: \"C:\\\\Users\\\\cann\\\\Desktop\\\\work\\\\first_tz\\\\frontend\\\\pages\\\\passwords.tsx\",\n                    lineNumber: 8,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"Назад\"\n            }),\n            passwords.map(function(param, key) {\n                var date = param.date, password = param.password;\n                return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\cann\\\\Desktop\\\\work\\\\first_tz\\\\frontend\\\\pages\\\\passwords.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 11\n                    },\n                    __self: _this1,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\cann\\\\Desktop\\\\work\\\\first_tz\\\\frontend\\\\pages\\\\passwords.tsx\",\n                                lineNumber: 14,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"b\", {\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\cann\\\\Desktop\\\\work\\\\first_tz\\\\frontend\\\\pages\\\\passwords.tsx\",\n                                        lineNumber: 15,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: \"Дата\"\n                                }),\n                                \": \",\n                                new Date(parseInt(date)).toLocaleString()\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"p\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\cann\\\\Desktop\\\\work\\\\first_tz\\\\frontend\\\\pages\\\\passwords.tsx\",\n                                lineNumber: 17,\n                                columnNumber: 13\n                            },\n                            __self: _this1,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"b\", {\n                                    __source: {\n                                        fileName: \"C:\\\\Users\\\\cann\\\\Desktop\\\\work\\\\first_tz\\\\frontend\\\\pages\\\\passwords.tsx\",\n                                        lineNumber: 18,\n                                        columnNumber: 15\n                                    },\n                                    __self: _this1,\n                                    children: \"Пароль\"\n                                }),\n                                \": \",\n                                password,\n                                \".\"\n                            ]\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"hr\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\cann\\\\Desktop\\\\work\\\\first_tz\\\\frontend\\\\pages\\\\passwords.tsx\",\n                                lineNumber: 20,\n                                columnNumber: 13\n                            },\n                            __self: _this1\n                        })\n                    ]\n                }, key));\n            })\n        ]\n    }));\n};\n_c = Passwords;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Passwords);\nvar _c;\n$RefreshReg$(_c, \"Passwords\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wYXNzd29yZHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBNEI7O0FBRzVCLEdBQUssQ0FBQ0MsU0FBUyxHQUFHLFFBQVEsU0FBVyxDQUFDO1FBQWpCQyxTQUFTLFVBQVRBLFNBQVM7O0lBQzVCLE1BQU0sdUVBQ0hDLENBQUc7Ozs7Ozs7O2lGQUNEQyxDQUFFOzs7Ozs7OzBCQUFDLENBQWdDOztpRkFDTEosa0RBQTFCO2dCQUFDSyxJQUFJLEVBQUMsQ0FBRzs7Ozs7OzswQkFBQyxDQUFLOztZQUdkSCxTQUFJLENBQUNJLEdBQUcsQ0FBQyxRQUFRLFFBQWFDLEdBQVcsRUFBSyxDQUFDO29CQUFuQ0MsSUFBSSxTQUFKQSxJQUFJLEVBQUVDLFFBQVEsU0FBUkEsUUFBUTtnQkFDOUIsTUFBTSx1RUFDSE4sQ0FBRzs7Ozs7Ozs7OEZBQ0RPLENBQUM7Ozs7Ozs7O3FHQUNDQyxDQUFDOzs7Ozs7OzhDQUFDLENBQUk7O2dDQUFRLENBQUU7Z0NBQUMsR0FBRyxDQUFDQyxJQUFJLENBQUNDLFFBQVEsQ0FBQ0wsSUFBSSxHQUFHTSxjQUFjOzs7OEZBRXRESixDQUFIOzs7Ozs7OztxR0FDQ0MsQ0FBQzs7Ozs7Ozs4Q0FBQyxDQUFNOztnQ0FBSSxDQUFFO2dDQUFDRixRQUFRO2dDQUFDLENBQzNCOzs7NkZBQ0NNLENBQUU7Ozs7Ozs7OzttQkFQS1IsR0FBRztZQVVqQixDQUFDOzs7QUFHUCxDQUFDO0tBdEJLTixTQUFTOztBQWlDZiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Bhc3N3b3Jkcy50c3g/NzRiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5cclxuY29uc3QgUGFzc3dvcmRzID0gKHsgcGFzc3dvcmRzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPtCh0YLRgNCw0L3QuNGG0LAg0YHQs9C10L3QtdGA0LjRgNC+0LLQsNC90L3Ri9GFINC/0LDRgNC+0LvQtdC5PC9oMT5cclxuICAgICAgPExpbmsgaHJlZj1cIi9cIj7QndCw0LfQsNC0PC9MaW5rPlxyXG5cclxuICAgICAgey8qINCvINGB0YDQsNC30YMg0LLRi9GC0LDRgdC60LjQstCw0Y4g0LTQsNGC0YMg0Lgg0L/QsNGA0L7Qu9GMINC40Lcg0L/RgNC+0L/RgdC+0LIsINC40LHQviDRgtC+0LvRjNC60L4g0L7QvdC4INC4INC80L7Qs9GD0YIg0L/RgNC40LnRgtC4ICovfVxyXG4gICAgICB7cGFzc3dvcmRzLm1hcCgoeyBkYXRlLCBwYXNzd29yZCB9LCBrZXk6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17a2V5fT5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgPGI+0JTQsNGC0LA8L2I+OiB7bmV3IERhdGUocGFyc2VJbnQoZGF0ZSkpLnRvTG9jYWxlU3RyaW5nKCl9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgPGI+0J/QsNGA0L7Qu9GMPC9iPjoge3Bhc3N3b3JkfS5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL3Bhc3N3b3Jkc1wiKTtcclxuICBjb25zdCBwYXNzd29yZHMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBwYXNzd29yZHMgfSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYXNzd29yZHM7XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiUGFzc3dvcmRzIiwicGFzc3dvcmRzIiwiZGl2IiwiaDEiLCJocmVmIiwibWFwIiwia2V5IiwiZGF0ZSIsInBhc3N3b3JkIiwicCIsImIiLCJEYXRlIiwicGFyc2VJbnQiLCJ0b0xvY2FsZVN0cmluZyIsImhyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/passwords.tsx\n");

/***/ })

});