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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_Users_cann_Desktop_work_first_tz_frontend_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_cann_Desktop_work_first_tz_frontend_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_cann_Desktop_work_first_tz_frontend_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\n/* В данном ТЗ не стал использовать Redux, с ним здесь только возни больше. */ var Index = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null), password = ref[0], setPassword = ref[1];\n    // Генерация пароля.\n    var handleGenPassword = _asyncToGenerator(C_Users_cann_Desktop_work_first_tz_frontend_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        return C_Users_cann_Desktop_work_first_tz_frontend_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(\"http://localhost:8000/passwords\", {\n                        method: \"POST\"\n                    }).then(function(response) {\n                        return response.json();\n                    }).then(function(genered_pass) {\n                        // Устанавливаем результат на фронте\n                        setPassword(genered_pass.password);\n                    });\n                case 2:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n        __source: {\n            fileName: \"C:\\\\Users\\\\cann\\\\Desktop\\\\work\\\\first_tz\\\\frontend\\\\pages\\\\index.tsx\",\n            lineNumber: 24,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h1\", {\n                __source: {\n                    fileName: \"C:\\\\Users\\\\cann\\\\Desktop\\\\work\\\\first_tz\\\\frontend\\\\pages\\\\index.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"Генерация пароля\"\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"button\", {\n                onClick: handleGenPassword,\n                __source: {\n                    fileName: \"C:\\\\Users\\\\cann\\\\Desktop\\\\work\\\\first_tz\\\\frontend\\\\pages\\\\index.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 7\n                },\n                __self: _this,\n                children: \"Сгенерировать пароль\"\n            }),\n            password !== null ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"hr\", {\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\cann\\\\Desktop\\\\work\\\\first_tz\\\\frontend\\\\pages\\\\index.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"input\", {\n                        style: {\n                            width: \"100%\"\n                        },\n                        type: \"text\",\n                        placeholder: \"\",\n                        defaultValue: password,\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\cann\\\\Desktop\\\\work\\\\first_tz\\\\frontend\\\\pages\\\\index.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        },\n                        __self: _this\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/passwords\",\n                        __source: {\n                            fileName: \"C:\\\\Users\\\\cann\\\\Desktop\\\\work\\\\first_tz\\\\frontend\\\\pages\\\\index.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"a\", {\n                            __source: {\n                                fileName: \"C:\\\\Users\\\\cann\\\\Desktop\\\\work\\\\first_tz\\\\frontend\\\\pages\\\\index.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            },\n                            __self: _this,\n                            children: \"Посмотреть сгенерированные пароли\"\n                        })\n                    })\n                ]\n            }) : null\n        ]\n    }));\n};\n_s(Index, \"JX2RHXcK6vRFQX40l5qJjODCymA=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ0k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhDLEVBQThFOztJQUc1RSxHQUFLLENBQTJCQyxHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxHQUF0Q0UsUUFBUSxHQUFpQkYsR0FBYyxLQUE3QkcsV0FBVyxHQUFJSCxHQUFjO0lBRTlDLEVBQW9CO0lBQ0wsR0FBVixDQUFDSSxpQkFBaUIseUpBQUcsUUFBUSxXQUFJLENBQUM7Ozs7OzJCQUMvQkMsS0FBSyxDQUFDLENBQWlDLGtDQUFFLENBQUM7d0JBQzlDQyxNQUFNLEVBQUUsQ0FBTTtvQkFDaEIsQ0FBQyxFQUNFQyxJQUFJLENBQUMsUUFBUSxDQUFQQyxRQUFRLEVBQUssQ0FBQzt3QkFDbkIsTUFBTSxDQUFDQSxRQUFRLENBQUNDLElBQUk7b0JBQ3RCLENBQUMsRUFDQUYsSUFBSSxDQUFDLFFBQVEsQ0FBUEcsWUFBWSxFQUFLLENBQUM7d0JBQ3ZCLEVBQW9DO3dCQUNOUCxXQUFuQixDQUFDTyxZQUFZLENBQUNSLFFBQVE7b0JBQ25DLENBQUM7Ozs7OztJQUNMLENBQUM7SUFFRCxNQUFNLHVFQUNIUyxDQUFHOzs7Ozs7OztpRkFDREMsQ0FBRTs7Ozs7OzswQkFBQyxDQUFnQjs7aUZBQ0pDLENBQVQ7Z0JBQUNDLE9BQU8sRUFBRVYsaUJBQWlCOzs7Ozs7OzBCQUFFLENBQW9COztZQUNwQ0YsUUFBWCxLQUFLLElBQUk7O3lGQUViYSxDQUFFOzs7Ozs7Ozt5RkFDRkMsQ0FBSzt3QkFDSkMsS0FBSyxFQUFFLENBQUM7NEJBQUNDLEtBQUssRUFBRSxDQUFNO3dCQUFDLENBQUM7d0JBQ3hCQyxJQUFJLEVBQUMsQ0FBTTt3QkFDWEMsV0FBVyxFQUFDLENBQUU7d0JBQ2RDLFlBQVksRUFBRW5CLFFBQVE7Ozs7Ozs7O3lGQUV2Qkgsa0RBQUk7d0JBQUN1QixJQUFJLEVBQUMsQ0FBWTs7Ozs7Ozt1R0FDcEJDLENBQUM7Ozs7Ozs7c0NBQUMsQ0FBaUM7Ozs7aUJBR3RDLElBQUk7OztBQUdkLENBQUM7R0FyQ0t0QixLQUFLO0tBQUxBLEtBQUs7QUF1Q1gsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vKiDQkiDQtNCw0L3QvdC+0Lwg0KLQlyDQvdC1INGB0YLQsNC7INC40YHQv9C+0LvRjNC30L7QstCw0YLRjCBSZWR1eCwg0YEg0L3QuNC8INC30LTQtdGB0Ywg0YLQvtC70YzQutC+INCy0L7Qt9C90Lgg0LHQvtC70YzRiNC1LiAqL1xyXG5cclxuY29uc3QgSW5kZXggPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgLy8g0JPQtdC90LXRgNCw0YbQuNGPINC/0LDRgNC+0LvRjy5cclxuICBjb25zdCBoYW5kbGVHZW5QYXNzd29yZCA9IGFzeW5jICgpID0+IHtcclxuICAgIGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL3Bhc3N3b3Jkc1wiLCB7XHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoZ2VuZXJlZF9wYXNzKSA9PiB7XHJcbiAgICAgICAgLy8g0KPRgdGC0LDQvdCw0LLQu9C40LLQsNC10Lwg0YDQtdC30YPQu9GM0YLQsNGCINC90LAg0YTRgNC+0L3RgtC1XHJcbiAgICAgICAgc2V0UGFzc3dvcmQoZ2VuZXJlZF9wYXNzLnBhc3N3b3JkKTtcclxuICAgICAgfSk7XHJcbiAgfTsgIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPtCT0LXQvdC10YDQsNGG0LjRjyDQv9Cw0YDQvtC70Y88L2gxPlxyXG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUdlblBhc3N3b3JkfT7QodCz0LXQvdC10YDQuNGA0L7QstCw0YLRjCDQv9Cw0YDQvtC70Yw8L2J1dHRvbj5cclxuICAgICAge3Bhc3N3b3JkICE9PSBudWxsID8gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlwiXHJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9wYXNzd29yZHNcIj5cclxuICAgICAgICAgICAgPGE+0J/QvtGB0LzQvtGC0YDQtdGC0Ywg0YHQs9C10L3QtdGA0LjRgNC+0LLQsNC90L3Ri9C1INC/0LDRgNC+0LvQuDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKSA6IG51bGx9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwidXNlU3RhdGUiLCJJbmRleCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJoYW5kbGVHZW5QYXNzd29yZCIsImZldGNoIiwibWV0aG9kIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImdlbmVyZWRfcGFzcyIsImRpdiIsImgxIiwiYnV0dG9uIiwib25DbGljayIsImhyIiwiaW5wdXQiLCJzdHlsZSIsIndpZHRoIiwidHlwZSIsInBsYWNlaG9sZGVyIiwiZGVmYXVsdFZhbHVlIiwiaHJlZiIsImEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

});