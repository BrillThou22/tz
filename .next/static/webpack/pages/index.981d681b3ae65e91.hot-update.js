"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_cann_Desktop_work_first_tz_frontend_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_cann_Desktop_work_first_tz_frontend_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_cann_Desktop_work_first_tz_frontend_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Index = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), is_pass_generated = ref[0], setPassGenerated = ref[1];\n    var handleGenPassword = _asyncToGenerator(C_Users_cann_Desktop_work_first_tz_frontend_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        return C_Users_cann_Desktop_work_first_tz_frontend_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    fetch(\"http://localhost:8000/passwords\", {\n                        method: \"POST\"\n                    }).then(function(response) {\n                        console.log(response);\n                    });\n                case 1:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    if (is_pass_generated === false) {\n        return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n            __source: {\n                fileName: \"C:\\\\Users\\\\cann\\\\Desktop\\\\work\\\\first_tz\\\\frontend\\\\pages\\\\index.tsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h1\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\cann\\\\Desktop\\\\work\\\\first_tz\\\\frontend\\\\pages\\\\index.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"Генерация пароля\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\cann\\\\Desktop\\\\work\\\\first_tz\\\\frontend\\\\pages\\\\index.tsx\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: \"Сгенерировать пароль\"\n                })\n            ]\n        }));\n    } else {\n        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n            __source: {\n                fileName: \"C:\\\\Users\\\\cann\\\\Desktop\\\\work\\\\first_tz\\\\frontend\\\\pages\\\\index.tsx\",\n                lineNumber: 22,\n                columnNumber: 5\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h1\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\cann\\\\Desktop\\\\work\\\\first_tz\\\\frontend\\\\pages\\\\index.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 7\n                    },\n                    __self: _this,\n                    children: \"Генерация пароля\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\cann\\\\Desktop\\\\work\\\\first_tz\\\\frontend\\\\pages\\\\index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 7\n                    },\n                    __self: _this,\n                    children: \"Сгенерировать пароль\"\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"2123\",\n                    __source: {\n                        fileName: \"C:\\\\Users\\\\cann\\\\Desktop\\\\work\\\\first_tz\\\\frontend\\\\pages\\\\index.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 7\n                    },\n                    __self: _this\n                })\n            ]\n        });\n    }\n};\n_s(Index, \"Hdw5EO+DplCNBEJcNuH8tsP7WZ4=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFnQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEMsR0FBSyxDQUFDQyxLQUFLLEdBQUcsUUFBUSxHQUFGLENBQUM7O0lBQ25CLEdBQUssQ0FBeUNELEdBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLEdBQXJERSxpQkFBaUIsR0FBc0JGLEdBQWUsS0FBbkNHLGdCQUFnQixHQUFJSCxHQUFlO0lBRTdELEdBQUssQ0FBQ0ksaUJBQWlCLHlKQUFHLFFBQVEsV0FBSSxDQUFDOzs7O29CQUNyQ0MsS0FBSyxDQUFDLENBQWlDLGtDQUFFLENBQUM7d0JBQ3hDQyxNQUFNLEVBQUUsQ0FBTTtvQkFDaEIsQ0FBQyxFQUFFQyxJQUFJLENBQUMsUUFBUSxDQUFQQyxRQUFRLEVBQUssQ0FBQzt3QkFDckJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixRQUFRO29CQUN0QixDQUFDOzs7Ozs7SUFDSCxDQUFDO0lBRUQsRUFBRSxFQUFFTixpQkFBaUIsS0FBSyxLQUFLLEVBQUUsQ0FBQztRQUNoQyxNQUFNLHVFQUNIUyxDQUFHOzs7Ozs7OztxRkFDREMsQ0FBRTs7Ozs7Ozs4QkFBQyxDQUFnQjs7cUZBQ0pDLENBQVQ7Ozs7Ozs7OEJBQUMsQ0FBb0I7Ozs7SUFHZixDQUFsQixNQUFNLENBQUM7OEVBQ0xGLENBQUc7Ozs7Ozs7O3FGQUNEQyxDQUFFOzs7Ozs7OzhCQUFDLENBQWdCOztxRkFDSkMsQ0FBVDs7Ozs7Ozs4QkFBQyxDQUFvQjs7cUZBQzNCQyxDQUFLO29CQUFDQyxJQUFJLEVBQUMsQ0FBTTtvQkFBQ0MsV0FBVyxFQUFDLENBQU07Ozs7Ozs7Ozs7SUFFekMsQ0FBQztBQUNILENBQUM7R0F6QktmLEtBQUs7S0FBTEEsS0FBSztBQTJCWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuICBjb25zdCBbaXNfcGFzc19nZW5lcmF0ZWQsIHNldFBhc3NHZW5lcmF0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVHZW5QYXNzd29yZCA9IGFzeW5jICgpID0+IHtcclxuICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL3Bhc3N3b3Jkc1wiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBpZiAoaXNfcGFzc19nZW5lcmF0ZWQgPT09IGZhbHNlKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxoMT7Qk9C10L3QtdGA0LDRhtC40Y8g0L/QsNGA0L7Qu9GPPC9oMT5cclxuICAgICAgICA8YnV0dG9uPtCh0LPQtdC90LXRgNC40YDQvtCy0LDRgtGMINC/0LDRgNC+0LvRjDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT7Qk9C10L3QtdGA0LDRhtC40Y8g0L/QsNGA0L7Qu9GPPC9oMT5cclxuICAgICAgPGJ1dHRvbj7QodCz0LXQvdC10YDQuNGA0L7QstCw0YLRjCDQv9Cw0YDQvtC70Yw8L2J1dHRvbj5cclxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCIyMTIzXCIgLz5cclxuICAgIDwvZGl2PjtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSW5kZXgiLCJpc19wYXNzX2dlbmVyYXRlZCIsInNldFBhc3NHZW5lcmF0ZWQiLCJoYW5kbGVHZW5QYXNzd29yZCIsImZldGNoIiwibWV0aG9kIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImRpdiIsImgxIiwiYnV0dG9uIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});