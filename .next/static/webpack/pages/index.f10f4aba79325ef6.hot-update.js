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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_cann_Desktop_work_first_tz_frontend_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_cann_Desktop_work_first_tz_frontend_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_cann_Desktop_work_first_tz_frontend_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Index = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null), password1 = ref[0], setPassword = ref[1];\n    var handleGenPassword = _asyncToGenerator(C_Users_cann_Desktop_work_first_tz_frontend_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        return C_Users_cann_Desktop_work_first_tz_frontend_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(\"http://localhost:8000/passwords\", {\n                        method: \"POST\"\n                    }).then(function(response) {\n                        console.log(response);\n                        return response.json();\n                    }).then(function(password) {\n                        console.log(password);\n                    });\n                case 2:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\cann\\\\Desktop\\\\work\\\\first_tz\\\\frontend\\\\pages\\\\index.tsx\",\n            lineNumber: 18,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\cann\\\\Desktop\\\\work\\\\first_tz\\\\frontend\\\\pages\\\\index.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"Генерация пароля\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n                onClick: handleGenPassword,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\cann\\\\Desktop\\\\work\\\\first_tz\\\\frontend\\\\pages\\\\index.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"Сгенерировать пароль\"\n            }),\n            password1 !== null ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"hr\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\cann\\\\Desktop\\\\work\\\\first_tz\\\\frontend\\\\pages\\\\index.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"\",\n                        value: 123,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\cann\\\\Desktop\\\\work\\\\first_tz\\\\frontend\\\\pages\\\\index.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        },\n                        __self: _this\n                    })\n                ]\n            }) : null\n        ]\n    }));\n};\n_s(Index, \"JX2RHXcK6vRFQX40l5qJjODCymA=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFnQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFaEMsR0FBSyxDQUFDQyxLQUFLLEdBQUcsUUFBUSxHQUFGLENBQUM7O0lBQ25CLEdBQUssQ0FBMkJELEdBQWMsR0FBZEEsK0NBQVEsQ0FBQyxJQUFJLEdBQXRDRSxTQUFRLEdBQWlCRixHQUFjLEtBQTdCRyxXQUFXLEdBQUlILEdBQWM7SUFFOUMsR0FBSyxDQUFDSSxpQkFBaUIseUpBQUcsUUFBUSxXQUFJLENBQUM7Ozs7OzJCQUMvQkMsS0FBSyxDQUFDLENBQWlDLGtDQUFFLENBQUM7d0JBQzlDQyxNQUFNLEVBQUUsQ0FBTTtvQkFDaEIsQ0FBQyxFQUFFQyxJQUFJLENBQUMsUUFBUSxDQUFQQyxRQUFRLEVBQUssQ0FBQzt3QkFDbkJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixRQUFRO3dCQUN0QixNQUFNLENBQUNBLFFBQVEsQ0FBQ0csSUFBSTtvQkFDdEIsQ0FBQyxFQUFFSixJQUFJLENBQUNMLFFBQVEsQ0FBUkEsUUFBUSxFQUFJLENBQUM7d0JBQ2pCTyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1IsUUFBUTtvQkFDeEIsQ0FBQzs7Ozs7O0lBQ0gsQ0FBQztJQUVELE1BQU0sdUVBQ0hVLENBQUc7Ozs7Ozs7O2lGQUNEQyxDQUFFOzs7Ozs7OzBCQUFDLENBQWdCOztpRkFDSkMsQ0FBVDtnQkFBQ0MsT0FBTyxFQUFFWCxpQkFBaUI7Ozs7Ozs7MEJBQUUsQ0FBb0I7O1lBQ3ZERixTQUFRLEtBQUssSUFBSTs7eUZBRWJjLENBQUU7Ozs7Ozs7O3lGQUNGQyxDQUFLO3dCQUFDQyxJQUFJLEVBQUMsQ0FBTTt3QkFBQ0MsV0FBVyxFQUFDLENBQUU7d0JBQUNDLEtBQUssRUFBRSxHQUFHOzs7Ozs7Ozs7aUJBRTVDLElBQUk7OztBQUdkLENBQUM7R0ExQktuQixLQUFLO0tBQUxBLEtBQUs7QUE0QlgsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlR2VuUGFzc3dvcmQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9wYXNzd29yZHNcIiwge1xyXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcclxuICAgIH0pLnRoZW4ocGFzc3dvcmQgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHBhc3N3b3JkKTsgICAgICAgIFxyXG4gICAgfSlcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPtCT0LXQvdC10YDQsNGG0LjRjyDQv9Cw0YDQvtC70Y88L2gxPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUdlblBhc3N3b3JkfT7QodCz0LXQvdC10YDQuNGA0L7QstCw0YLRjCDQv9Cw0YDQvtC70Yw8L2J1dHRvbj5cclxuICAgICAge3Bhc3N3b3JkICE9PSBudWxsID8gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiXCIgdmFsdWU9ezEyM30gLz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKSA6IG51bGx9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkluZGV4IiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsImhhbmRsZUdlblBhc3N3b3JkIiwiZmV0Y2giLCJtZXRob2QiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwianNvbiIsImRpdiIsImgxIiwiYnV0dG9uIiwib25DbGljayIsImhyIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});