/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./firebase/config.ts":
/*!****************************!*\
  !*** ./firebase/config.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"storage\": () => (/* binding */ storage)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/storage */ \"firebase/storage\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst config = {\n    apiKey: \"AIzaSyAfqo4JEu--BnaR2cCheXnhbuZTfEVBOOE\",\n    authDomain: \"soleauthenticity-8f48f.firebaseapp.com\",\n    projectId: \"soleauthenticity-8f48f\",\n    storageBucket: \"soleauthenticity-8f48f.appspot.com\",\n    messagingSenderId: \"471540007884\",\n    appId: \"1:471540007884:web:67f472ca8b49864bbe5369\",\n    measurementId: \"G-3S5T6N6CFY\"\n};\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(config);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);\nconst storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)(app);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS9jb25maWcudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBNkM7QUFDTDtBQUNVO0FBQ0o7QUFFOUMsTUFBTUksTUFBTSxHQUFHO0lBQ1hDLE1BQU0sRUFBRSx5Q0FBeUM7SUFDakRDLFVBQVUsRUFBRSx3Q0FBd0M7SUFDcERDLFNBQVMsRUFBRSx3QkFBd0I7SUFDbkNDLGFBQWEsRUFBRSxvQ0FBb0M7SUFDbkRDLGlCQUFpQixFQUFFLGNBQWM7SUFDakNDLEtBQUssRUFBRSwyQ0FBMkM7SUFDbERDLGFBQWEsRUFBRSxjQUFjO0NBQ2hDO0FBRUQsTUFBTUMsR0FBRyxHQUFHWiwyREFBYSxDQUFDSSxNQUFNLENBQUM7QUFDMUIsTUFBTVMsSUFBSSxHQUFRWixzREFBTyxDQUFDVyxHQUFHLENBQUMsQ0FBQztBQUMvQixNQUFNRSxFQUFFLEdBQUdaLGdFQUFZLENBQUNVLEdBQUcsQ0FBQyxDQUFDO0FBQzdCLE1BQU1HLE9BQU8sR0FBR1osNERBQVUsQ0FBQ1MsR0FBRyxDQUFDLENBQUM7QUFDdkMsaUVBQWVBLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtZWNvbW1lcmNlLy4vZmlyZWJhc2UvY29uZmlnLnRzPzlhNjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gJ2ZpcmViYXNlL2FwcCc7XHJcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tICdmaXJlYmFzZS9hdXRoJztcclxuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcclxuaW1wb3J0IHsgZ2V0U3RvcmFnZSB9IGZyb20gJ2ZpcmViYXNlL3N0b3JhZ2UnO1xyXG5cclxuY29uc3QgY29uZmlnID0ge1xyXG4gICAgYXBpS2V5OiAnQUl6YVN5QWZxbzRKRXUtLUJuYVIyY0NoZVhuaGJ1WlRmRVZCT09FJyxcclxuICAgIGF1dGhEb21haW46ICdzb2xlYXV0aGVudGljaXR5LThmNDhmLmZpcmViYXNlYXBwLmNvbScsXHJcbiAgICBwcm9qZWN0SWQ6ICdzb2xlYXV0aGVudGljaXR5LThmNDhmJyxcclxuICAgIHN0b3JhZ2VCdWNrZXQ6ICdzb2xlYXV0aGVudGljaXR5LThmNDhmLmFwcHNwb3QuY29tJyxcclxuICAgIG1lc3NhZ2luZ1NlbmRlcklkOiAnNDcxNTQwMDA3ODg0JyxcclxuICAgIGFwcElkOiAnMTo0NzE1NDAwMDc4ODQ6d2ViOjY3ZjQ3MmNhOGI0OTg2NGJiZTUzNjknLFxyXG4gICAgbWVhc3VyZW1lbnRJZDogJ0ctM1M1VDZONkNGWScsXHJcbn07XHJcblxyXG5jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGNvbmZpZyk7XHJcbmV4cG9ydCBjb25zdCBhdXRoOiBhbnkgPSBnZXRBdXRoKGFwcCk7XHJcbmV4cG9ydCBjb25zdCBkYiA9IGdldEZpcmVzdG9yZShhcHApO1xyXG5leHBvcnQgY29uc3Qgc3RvcmFnZSA9IGdldFN0b3JhZ2UoYXBwKTtcclxuZXhwb3J0IGRlZmF1bHQgYXBwOyJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0QXV0aCIsImdldEZpcmVzdG9yZSIsImdldFN0b3JhZ2UiLCJjb25maWciLCJhcGlLZXkiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiYXBwIiwiYXV0aCIsImRiIiwic3RvcmFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./firebase/config.ts\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ \"./store/index.ts\");\n/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rc-slider/assets/index.css */ \"./node_modules/rc-slider/assets/index.css\");\n/* harmony import */ var rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rc_slider_assets_index_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_rater_lib_react_rater_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-rater/lib/react-rater.css */ \"./node_modules/react-rater/lib/react-rater.css\");\n/* harmony import */ var react_rater_lib_react_rater_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_rater_lib_react_rater_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var swiper_swiper_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/swiper.scss */ \"./node_modules/swiper/swiper.scss\");\n/* harmony import */ var swiper_swiper_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _assets_css_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/css/styles.scss */ \"./assets/css/styles.scss\");\n/* harmony import */ var _assets_css_styles_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_css_styles_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _utils_gtag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../utils/gtag */ \"./utils/gtag.ts\");\n/* harmony import */ var _api_context_AuthContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./api/context/AuthContext */ \"./pages/api/context/AuthContext.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_context_AuthContext__WEBPACK_IMPORTED_MODULE_8__]);\n_api_context_AuthContext__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n// global styles\n\n\n\n\n\n\nconst isProduction = \"development\" === \"production\";\n// only events on production\nif (isProduction) {\n    // Notice how we track pageview when route is changed\n    next_router__WEBPACK_IMPORTED_MODULE_1___default().events.on(\"routeChangeComplete\", (url)=>_utils_gtag__WEBPACK_IMPORTED_MODULE_7__.pageview(url)\n    );\n}\nconst MyApp = ({ Component , pageProps  })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_api_context_AuthContext__WEBPACK_IMPORTED_MODULE_8__.AuthContextProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"D:\\\\Sole-Cus_Backup\\\\pages\\\\_app.tsx\",\n            lineNumber: 27,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Sole-Cus_Backup\\\\pages\\\\_app.tsx\",\n        lineNumber: 26,\n        columnNumber: 3\n    }, undefined)\n;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_store__WEBPACK_IMPORTED_MODULE_2__.wrapper.withRedux(MyApp));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBaUM7QUFDRTtBQUtuQyxnQkFBZ0I7QUFDb0I7QUFDSztBQUNiO0FBQ087QUFFSztBQUN3QjtBQUVoRSxNQUFNSSxZQUFZLEdBQUdDLGFBZlIsS0FlaUMsWUFBWTtBQUUxRCw0QkFBNEI7QUFDNUIsSUFBR0QsWUFBWSxFQUFFO0lBRWYscURBQXFEO0lBQ3JESiw0REFBZ0IsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDUSxHQUFXLEdBQUtOLGlEQUFhLENBQUNNLEdBQUcsQ0FBQztJQUFBLENBQUMsQ0FBQztDQUM5RTtBQUVELE1BQU1FLEtBQUssR0FBRyxDQUFDLEVBQUVDLFNBQVMsR0FBRUMsU0FBUyxHQUFZLGlCQUMvQyw4REFBQ1QseUVBQW1CO2tCQUNsQiw0RUFBQ1EsU0FBUztZQUFFLEdBQUdDLFNBQVM7Ozs7O3FCQUFJOzs7OztpQkFDUjtBQUN0QjtBQUVGLGlFQUFlWCxxREFBaUIsQ0FBQ1MsS0FBSyxDQUFDLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWVjb21tZXJjZS8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHdyYXBwZXIgfSBmcm9tICcuLi9zdG9yZSc7XHJcblxyXG4vLyB0eXBlc1xyXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xyXG5cclxuLy8gZ2xvYmFsIHN0eWxlc1xyXG5pbXBvcnQgJ3JjLXNsaWRlci9hc3NldHMvaW5kZXguY3NzJztcclxuaW1wb3J0ICdyZWFjdC1yYXRlci9saWIvcmVhY3QtcmF0ZXIuY3NzJztcclxuaW1wb3J0ICdzd2lwZXIvc3dpcGVyLnNjc3MnO1xyXG5pbXBvcnQgJy4uL2Fzc2V0cy9jc3Mvc3R5bGVzLnNjc3MnO1xyXG5cclxuaW1wb3J0ICogYXMgZ3RhZyBmcm9tICcuLy4uL3V0aWxzL2d0YWcnO1xyXG5pbXBvcnQgeyBBdXRoQ29udGV4dFByb3ZpZGVyIH0gZnJvbSAnLi9hcGkvY29udGV4dC9BdXRoQ29udGV4dCc7XHJcblxyXG5jb25zdCBpc1Byb2R1Y3Rpb24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nO1xyXG5cclxuLy8gb25seSBldmVudHMgb24gcHJvZHVjdGlvblxyXG5pZihpc1Byb2R1Y3Rpb24pIHtcclxuICBcclxuICAvLyBOb3RpY2UgaG93IHdlIHRyYWNrIHBhZ2V2aWV3IHdoZW4gcm91dGUgaXMgY2hhbmdlZFxyXG4gIFJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCAodXJsOiBzdHJpbmcpID0+IGd0YWcucGFnZXZpZXcodXJsKSk7XHJcbn1cclxuXHJcbmNvbnN0IE15QXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpID0+IChcclxuICA8QXV0aENvbnRleHRQcm92aWRlcj5cclxuICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICA8L0F1dGhDb250ZXh0UHJvdmlkZXI+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChNeUFwcCk7Il0sIm5hbWVzIjpbIlJvdXRlciIsIndyYXBwZXIiLCJndGFnIiwiQXV0aENvbnRleHRQcm92aWRlciIsImlzUHJvZHVjdGlvbiIsInByb2Nlc3MiLCJldmVudHMiLCJvbiIsInVybCIsInBhZ2V2aWV3IiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJ3aXRoUmVkdXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./pages/api/context/AuthContext.tsx":
/*!*******************************************!*\
  !*** ./pages/api/context/AuthContext.tsx ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AuthContextProvider\": () => (/* binding */ AuthContextProvider),\n/* harmony export */   \"UseAuth\": () => (/* binding */ UseAuth)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../firebase/config */ \"./firebase/config.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, _firebase_config__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, _firebase_config__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)({\n    user: null,\n    setUser: ()=>{},\n    logOut: ()=>{}\n});\nfunction UseAuth() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(AuthContext);\n}\nconst AuthContextProvider = ({ children  })=>{\n    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const logOut = ()=>{\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(_firebase_config__WEBPACK_IMPORTED_MODULE_2__.auth);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            setUser,\n            logOut\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\Sole-Cus_Backup\\\\pages\\\\api\\\\context\\\\AuthContext.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n}; // export const UserAuth = () => {\n //   return useContext(AuthContext);\n // };\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvY29udGV4dC9BdXRoQ29udGV4dC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUF3QztBQUNRO0FBRXVCO0FBY3ZFLE1BQU1LLFdBQVcsaUJBQUdGLG9EQUFhLENBQW1CO0lBQ2xERyxJQUFJLEVBQUUsSUFBSTtJQUNWQyxPQUFPLEVBQUUsSUFBTSxFQUFFO0lBQ2pCQyxNQUFNLEVBQUUsSUFBTSxFQUFFO0NBQ2pCLENBQUM7QUFFSyxTQUFTQyxPQUFPLEdBQUc7SUFDeEIsT0FBT1AsaURBQVUsQ0FBQ0csV0FBVyxDQUFDLENBQUM7Q0FDaEM7QUFFTSxNQUFNSyxtQkFBbUIsR0FBRyxDQUFDLEVBQUVDLFFBQVEsR0FBMkIsR0FBSztJQUM1RSxNQUFNLEVBNUJSLEdBNEJTTCxJQUFJLEdBNUJiLEdBNEJlQyxPQUFPLE1BQUlILCtDQUFRLENBQWtCLElBQUksQ0FBQztJQUV2RCxNQUFNSSxNQUFNLEdBQUcsSUFBTTtRQUNuQlIsc0RBQU8sQ0FBQ0Msa0RBQUksQ0FBQyxDQUFDO0tBQ2Y7SUFFRCxxQkFDRSw4REFBQ0ksV0FBVyxDQUFDTyxRQUFRO1FBQUNDLEtBQUssRUFBRTtZQUFFUCxJQUFJO1lBQUVDLE9BQU87WUFBRUMsTUFBTTtTQUFFO2tCQUNuREcsUUFBUTs7Ozs7aUJBQ1ksQ0FDdkI7Q0FDSCxDQUFDLENBRUYsa0NBQWtDO0NBQ2xDLG9DQUFvQztDQUNwQyxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1lY29tbWVyY2UvLi9wYWdlcy9hcGkvY29udGV4dC9BdXRoQ29udGV4dC50c3g/YjhjMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaWduT3V0IH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuaW1wb3J0IHsgYXV0aCB9IGZyb20gXCIuLi8uLi8uLi9maXJlYmFzZS9jb25maWdcIjtcclxuXHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbnR5cGUgVXNlckluZm8gPSB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgcm9sZTogc3RyaW5nO1xyXG59XHJcblxyXG50eXBlIEF1dGhDb250ZXh0UHJvcHMgPSB7XHJcbiAgdXNlcjogVXNlckluZm8gfCBudWxsO1xyXG4gIHNldFVzZXI6ICh1c2VyOiBVc2VySW5mbyB8IG51bGwpID0+IHZvaWQ7XHJcbiAgbG9nT3V0OiAoKSA9PiB2b2lkO1xyXG59O1xyXG5cclxuY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0PEF1dGhDb250ZXh0UHJvcHM+KHtcclxuICB1c2VyOiBudWxsLFxyXG4gIHNldFVzZXI6ICgpID0+IHt9LFxyXG4gIGxvZ091dDogKCkgPT4ge30sXHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFVzZUF1dGgoKSB7XHJcbiAgcmV0dXJuIHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0Tm9kZSB9KSA9PiB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlckluZm8gfCBudWxsPihudWxsKTtcclxuICBcclxuICBjb25zdCBsb2dPdXQgPSAoKSA9PiB7XHJcbiAgICBzaWduT3V0KGF1dGgpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyB1c2VyLCBzZXRVc2VyLCBsb2dPdXQgfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vIGV4cG9ydCBjb25zdCBVc2VyQXV0aCA9ICgpID0+IHtcclxuLy8gICByZXR1cm4gdXNlQ29udGV4dChBdXRoQ29udGV4dCk7XHJcbi8vIH07XHJcbiJdLCJuYW1lcyI6WyJzaWduT3V0IiwiYXV0aCIsInVzZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJBdXRoQ29udGV4dCIsInVzZXIiLCJzZXRVc2VyIiwibG9nT3V0IiwiVXNlQXV0aCIsIkF1dGhDb250ZXh0UHJvdmlkZXIiLCJjaGlsZHJlbiIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/context/AuthContext.tsx\n");

/***/ }),

/***/ "./store/index.ts":
/*!************************!*\
  !*** ./store/index.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"wrapper\": () => (/* binding */ wrapper)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducers_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/cart */ \"./store/reducers/cart.ts\");\n/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/user */ \"./store/reducers/user.ts\");\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-persist/lib/storage */ \"redux-persist/lib/storage\");\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-persist */ \"redux-persist\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n//COMBINING ALL REDUCERS\nconst reducer = {\n    cart: _reducers_cart__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    user: _reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n};\nconst rootReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n    cart: _reducers_cart__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    user: _reducers_user__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n});\nlet store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer\n});\nconst makeStore = ({ isServer  })=>{\n    if (isServer) {\n        //If it's on server side, create a store\n        return store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n            reducer\n        });\n    } else {\n        //If it's on client side, create a store which will persist\n        const persistConfig = {\n            key: \"shoppingcart\",\n            whitelist: [\n                \"cart\",\n                \"user\"\n            ],\n            storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_4___default())\n        };\n        const persistedReducer = (0,redux_persist__WEBPACK_IMPORTED_MODULE_5__.persistReducer)(persistConfig, rootReducer); // Create a new reducer with our existing reducer\n        store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n            reducer: persistedReducer\n        }); // Creating the store again\n        // @ts-ignore:next-line\n        store.__persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_5__.persistStore)(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature\n        return store;\n    }\n};\n// export an assembled wrapper\n// @ts-ignore:next-line\nconst wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__.createWrapper)(makeStore, {\n    debug: true\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFrRTtBQUNmO0FBQ1Q7QUFDQTtBQUNLO0FBSXpCO0FBRXRCLHdCQUF3QjtBQUN4QixNQUFNUSxPQUFPLEdBQUc7SUFDZEMsSUFBSSxFQUFFTixzREFBVztJQUNqQk8sSUFBSSxFQUFFTixzREFBVztDQUNsQjtBQUVELE1BQU1PLFdBQVcsR0FBR1YsaUVBQWUsQ0FBQztJQUNsQ1EsSUFBSSxFQUFFTixzREFBVztJQUNqQk8sSUFBSSxFQUFFTixzREFBVztDQUNsQixDQUFDO0FBRUYsSUFBSVEsS0FBSyxHQUFHWixnRUFBYyxDQUFDO0lBQ3pCUSxPQUFPO0NBQ1IsQ0FBQztBQUVGLE1BQU1LLFNBQVMsR0FBRyxDQUFDLEVBQUVDLFFBQVEsR0FBeUIsR0FBSztJQUN6RCxJQUFJQSxRQUFRLEVBQUU7UUFDWix3Q0FBd0M7UUFDeEMsT0FBT0YsS0FBSyxHQUFHWixnRUFBYyxDQUFDO1lBQzVCUSxPQUFPO1NBQ1IsQ0FBQyxDQUFDO0tBQ0osTUFBTTtRQUNMLDJEQUEyRDtRQUMzRCxNQUFNTyxhQUFhLEdBQUc7WUFDcEJDLEdBQUcsRUFBRSxjQUFjO1lBQ25CQyxTQUFTLEVBQUU7Z0JBQUMsTUFBTTtnQkFBRSxNQUFNO2FBQUM7WUFDM0JaLE9BQU87U0FDUjtRQUVELE1BQU1hLGdCQUFnQixHQUFHWCw2REFBYyxDQUFDUSxhQUFhLEVBQUVKLFdBQVcsQ0FBQyxFQUFFLGlEQUFpRDtRQUV0SEMsS0FBSyxHQUFHWixnRUFBYyxDQUFDO1lBQ3JCUSxPQUFPLEVBQUVVLGdCQUFnQjtTQUMxQixDQUFDLENBQUMsQ0FBQywyQkFBMkI7UUFFL0IsdUJBQXVCO1FBQ3ZCTixLQUFLLENBQUNPLFdBQVcsR0FBR2IsMkRBQVksQ0FBQ00sS0FBSyxDQUFDLENBQUMsQ0FBQyxnSUFBZ0k7UUFFekssT0FBT0EsS0FBSyxDQUFDO0tBQ2Q7Q0FDRjtBQUVELDhCQUE4QjtBQUM5Qix1QkFBdUI7QUFDaEIsTUFBTVEsT0FBTyxHQUFHbEIsaUVBQWEsQ0FBQ1csU0FBUyxFQUFFO0lBQUNRLEtBQUssRUFBRSxJQUFJO0NBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1lY29tbWVyY2UvLi9zdG9yZS9pbmRleC50cz9iNWIzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5pbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcclxuaW1wb3J0IGNhcnRSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMvY2FydCc7XHJcbmltcG9ydCB1c2VyUmVkdWNlciBmcm9tICcuL3JlZHVjZXJzL3VzZXInO1xyXG5pbXBvcnQgc3RvcmFnZSBmcm9tICdyZWR1eC1wZXJzaXN0L2xpYi9zdG9yYWdlJ1xyXG5pbXBvcnQge1xyXG4gIHBlcnNpc3RTdG9yZSxcclxuICBwZXJzaXN0UmVkdWNlcixcclxufSBmcm9tICdyZWR1eC1wZXJzaXN0J1xyXG5cclxuLy9DT01CSU5JTkcgQUxMIFJFRFVDRVJTXHJcbmNvbnN0IHJlZHVjZXIgPSB7XHJcbiAgY2FydDogY2FydFJlZHVjZXIsXHJcbiAgdXNlcjogdXNlclJlZHVjZXJcclxufVxyXG5cclxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xyXG4gIGNhcnQ6IGNhcnRSZWR1Y2VyLFxyXG4gIHVzZXI6IHVzZXJSZWR1Y2VyLFxyXG59KVxyXG5cclxubGV0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoeyBcclxuICByZWR1Y2VyLFxyXG59KTtcclxuXHJcbmNvbnN0IG1ha2VTdG9yZSA9ICh7IGlzU2VydmVyIH06IHsgaXNTZXJ2ZXI6IEJvb2xlYW4gfSkgPT4ge1xyXG4gIGlmIChpc1NlcnZlcikge1xyXG4gICAgLy9JZiBpdCdzIG9uIHNlcnZlciBzaWRlLCBjcmVhdGUgYSBzdG9yZVxyXG4gICAgcmV0dXJuIHN0b3JlID0gY29uZmlndXJlU3RvcmUoeyBcclxuICAgICAgcmVkdWNlcixcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvL0lmIGl0J3Mgb24gY2xpZW50IHNpZGUsIGNyZWF0ZSBhIHN0b3JlIHdoaWNoIHdpbGwgcGVyc2lzdFxyXG4gICAgY29uc3QgcGVyc2lzdENvbmZpZyA9IHtcclxuICAgICAga2V5OiBcInNob3BwaW5nY2FydFwiLFxyXG4gICAgICB3aGl0ZWxpc3Q6IFtcImNhcnRcIiwgXCJ1c2VyXCJdLCAvLyBvbmx5IGNvdW50ZXIgd2lsbCBiZSBwZXJzaXN0ZWQsIGFkZCBvdGhlciByZWR1Y2VycyBpZiBuZWVkZWRcclxuICAgICAgc3RvcmFnZSwgLy8gaWYgbmVlZGVkLCB1c2UgYSBzYWZlciBzdG9yYWdlXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHBlcnNpc3RlZFJlZHVjZXIgPSBwZXJzaXN0UmVkdWNlcihwZXJzaXN0Q29uZmlnLCByb290UmVkdWNlcik7IC8vIENyZWF0ZSBhIG5ldyByZWR1Y2VyIHdpdGggb3VyIGV4aXN0aW5nIHJlZHVjZXJcclxuXHJcbiAgICBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKHsgXHJcbiAgICAgIHJlZHVjZXI6IHBlcnNpc3RlZFJlZHVjZXIsXHJcbiAgICB9KTsgLy8gQ3JlYXRpbmcgdGhlIHN0b3JlIGFnYWluXHJcblxyXG4gICAgLy8gQHRzLWlnbm9yZTpuZXh0LWxpbmVcclxuICAgIHN0b3JlLl9fcGVyc2lzdG9yID0gcGVyc2lzdFN0b3JlKHN0b3JlKTsgLy8gVGhpcyBjcmVhdGVzIGEgcGVyc2lzdG9yIG9iamVjdCAmIHB1c2ggdGhhdCBwZXJzaXN0ZWQgb2JqZWN0IHRvIC5fX3BlcnNpc3Rvciwgc28gdGhhdCB3ZSBjYW4gYXZhaWwgdGhlIHBlcnNpc3RhYmlsaXR5IGZlYXR1cmVcclxuXHJcbiAgICByZXR1cm4gc3RvcmU7XHJcbiAgfVxyXG59O1xyXG5cclxuLy8gZXhwb3J0IGFuIGFzc2VtYmxlZCB3cmFwcGVyXHJcbi8vIEB0cy1pZ25vcmU6bmV4dC1saW5lXHJcbmV4cG9ydCBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihtYWtlU3RvcmUsIHtkZWJ1ZzogdHJ1ZX0pO1xyXG5cclxuLy8gSW5mZXIgdGhlIGBSb290U3RhdGVgIGFuZCBgQXBwRGlzcGF0Y2hgIHR5cGVzIGZyb20gdGhlIHN0b3JlIGl0c2VsZlxyXG5leHBvcnQgdHlwZSBSb290U3RhdGUgPSBSZXR1cm5UeXBlPHR5cGVvZiBzdG9yZS5nZXRTdGF0ZT5cclxuXHJcbi8vIEluZmVycmVkIHR5cGU6IHtwb3N0czogUG9zdHNTdGF0ZSwgY29tbWVudHM6IENvbW1lbnRzU3RhdGUsIHVzZXJzOiBVc2Vyc1N0YXRlfVxyXG5leHBvcnQgdHlwZSBBcHBEaXNwYXRjaCA9IHR5cGVvZiBzdG9yZS5kaXNwYXRjaCJdLCJuYW1lcyI6WyJjb25maWd1cmVTdG9yZSIsImNvbWJpbmVSZWR1Y2VycyIsImNyZWF0ZVdyYXBwZXIiLCJjYXJ0UmVkdWNlciIsInVzZXJSZWR1Y2VyIiwic3RvcmFnZSIsInBlcnNpc3RTdG9yZSIsInBlcnNpc3RSZWR1Y2VyIiwicmVkdWNlciIsImNhcnQiLCJ1c2VyIiwicm9vdFJlZHVjZXIiLCJzdG9yZSIsIm1ha2VTdG9yZSIsImlzU2VydmVyIiwicGVyc2lzdENvbmZpZyIsImtleSIsIndoaXRlbGlzdCIsInBlcnNpc3RlZFJlZHVjZXIiLCJfX3BlcnNpc3RvciIsIndyYXBwZXIiLCJkZWJ1ZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/index.ts\n");

/***/ }),

/***/ "./store/reducers/cart.ts":
/*!********************************!*\
  !*** ./store/reducers/cart.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProduct\": () => (/* binding */ addProduct),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"removeProduct\": () => (/* binding */ removeProduct),\n/* harmony export */   \"setCount\": () => (/* binding */ setCount)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    cartItems: []\n};\nconst indexSameProduct = (state, action)=>{\n    const sameProduct = (product)=>product.id === action.id && //product.color === action.color && \n        product.size === action.size\n    ;\n    return state.cartItems.findIndex(sameProduct);\n};\nconst cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"cart\",\n    initialState,\n    reducers: {\n        addProduct: (state, action)=>{\n            const cartItems = state.cartItems;\n            // find index of product\n            const index = indexSameProduct(state, action.payload.product);\n            if (index !== -1) {\n                cartItems[index].count += action.payload.count;\n                return;\n            }\n            return {\n                ...state,\n                cartItems: [\n                    ...state.cartItems,\n                    action.payload.product\n                ]\n            };\n        },\n        removeProduct (state, action) {\n            // find index of product\n            state.cartItems.splice(indexSameProduct(state, action.payload), 1);\n        },\n        setCount (state, action) {\n            // find index and add new count on product count\n            const indexItem = indexSameProduct(state, action.payload.product);\n            state.cartItems[indexItem].count = action.payload.count;\n        }\n    }\n});\nconst { addProduct , removeProduct , setCount  } = cartSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cartSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2Vycy9jYXJ0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE4RDtBQU85RCxNQUFNQyxZQUFZLEdBQUc7SUFDbkJDLFNBQVMsRUFBRSxFQUFFO0NBQ2Q7QUFFRCxNQUFNQyxnQkFBZ0IsR0FBRyxDQUFDQyxLQUFnQixFQUFFQyxNQUF3QixHQUFLO0lBQ3ZFLE1BQU1DLFdBQVcsR0FBRyxDQUFDQyxPQUF5QixHQUM1Q0EsT0FBTyxDQUFDQyxFQUFFLEtBQUtILE1BQU0sQ0FBQ0csRUFBRSxJQUN4QixvQ0FBb0M7UUFDcENELE9BQU8sQ0FBQ0UsSUFBSSxLQUFLSixNQUFNLENBQUNJLElBQUk7SUFDNUI7SUFFRixPQUFPTCxLQUFLLENBQUNGLFNBQVMsQ0FBQ1EsU0FBUyxDQUFDSixXQUFXLENBQUM7Q0FDOUM7QUFPRCxNQUFNSyxTQUFTLEdBQUdYLDZEQUFXLENBQUM7SUFDNUJZLElBQUksRUFBRSxNQUFNO0lBQ1pYLFlBQVk7SUFDWlksUUFBUSxFQUFFO1FBQ1JDLFVBQVUsRUFBRSxDQUFDVixLQUFLLEVBQUVDLE1BQXFDLEdBQUs7WUFDNUQsTUFBTUgsU0FBUyxHQUFHRSxLQUFLLENBQUNGLFNBQVM7WUFFakMsd0JBQXdCO1lBQ3hCLE1BQU1hLEtBQUssR0FBR1osZ0JBQWdCLENBQUNDLEtBQUssRUFBRUMsTUFBTSxDQUFDVyxPQUFPLENBQUNULE9BQU8sQ0FBQztZQUU3RCxJQUFHUSxLQUFLLEtBQUssQ0FBQyxDQUFDLEVBQUU7Z0JBQ2ZiLFNBQVMsQ0FBQ2EsS0FBSyxDQUFDLENBQUNFLEtBQUssSUFBSVosTUFBTSxDQUFDVyxPQUFPLENBQUNDLEtBQUssQ0FBQztnQkFDL0MsT0FBTzthQUNSO1lBRUQsT0FBTztnQkFDTCxHQUFHYixLQUFLO2dCQUNSRixTQUFTLEVBQUU7dUJBQUlFLEtBQUssQ0FBQ0YsU0FBUztvQkFBRUcsTUFBTSxDQUFDVyxPQUFPLENBQUNULE9BQU87aUJBQUU7YUFDekQsQ0FBQztTQUNIO1FBQ0RXLGFBQWEsRUFBQ2QsS0FBSyxFQUFFQyxNQUF1QyxFQUFFO1lBQzVELHdCQUF3QjtZQUN4QkQsS0FBSyxDQUFDRixTQUFTLENBQUNpQixNQUFNLENBQUNoQixnQkFBZ0IsQ0FBQ0MsS0FBSyxFQUFFQyxNQUFNLENBQUNXLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3BFO1FBQ0RJLFFBQVEsRUFBQ2hCLEtBQUssRUFBRUMsTUFBcUMsRUFBRTtZQUNyRCxnREFBZ0Q7WUFDaEQsTUFBTWdCLFNBQVMsR0FBR2xCLGdCQUFnQixDQUFDQyxLQUFLLEVBQUVDLE1BQU0sQ0FBQ1csT0FBTyxDQUFDVCxPQUFPLENBQUM7WUFDakVILEtBQUssQ0FBQ0YsU0FBUyxDQUFDbUIsU0FBUyxDQUFDLENBQUNKLEtBQUssR0FBR1osTUFBTSxDQUFDVyxPQUFPLENBQUNDLEtBQUssQ0FBQztTQUN6RDtLQUNGO0NBQ0YsQ0FBQztBQUVLLE1BQU0sRUFBRUgsVUFBVSxHQUFFSSxhQUFhLEdBQUVFLFFBQVEsR0FBRSxHQUFHVCxTQUFTLENBQUNXLE9BQU87QUFDeEUsaUVBQWVYLFNBQVMsQ0FBQ1ksT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtZWNvbW1lcmNlLy4vc3RvcmUvcmVkdWNlcnMvY2FydC50cz9hMjM4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCB7IFByb2R1Y3RTdG9yZVR5cGUgfSBmcm9tICd0eXBlcyc7XHJcblxyXG5pbnRlcmZhY2UgQ2FydFR5cGVzIHtcclxuICBjYXJ0SXRlbXM6IFByb2R1Y3RTdG9yZVR5cGVbXVxyXG59XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7IFxyXG4gIGNhcnRJdGVtczogW10gXHJcbn0gYXMgQ2FydFR5cGVzO1xyXG5cclxuY29uc3QgaW5kZXhTYW1lUHJvZHVjdCA9IChzdGF0ZTogQ2FydFR5cGVzLCBhY3Rpb246IFByb2R1Y3RTdG9yZVR5cGUpID0+IHtcclxuICBjb25zdCBzYW1lUHJvZHVjdCA9IChwcm9kdWN0OiBQcm9kdWN0U3RvcmVUeXBlKSA9PiAoXHJcbiAgICBwcm9kdWN0LmlkID09PSBhY3Rpb24uaWQgJiYgXHJcbiAgICAvL3Byb2R1Y3QuY29sb3IgPT09IGFjdGlvbi5jb2xvciAmJiBcclxuICAgIHByb2R1Y3Quc2l6ZSA9PT0gYWN0aW9uLnNpemVcclxuICApO1xyXG5cclxuICByZXR1cm4gc3RhdGUuY2FydEl0ZW1zLmZpbmRJbmRleChzYW1lUHJvZHVjdClcclxufTtcclxuXHJcbnR5cGUgQWRkUHJvZHVjdFR5cGUgPSB7XHJcbiAgcHJvZHVjdDogUHJvZHVjdFN0b3JlVHlwZSxcclxuICBjb3VudDogbnVtYmVyLFxyXG59XHJcblxyXG5jb25zdCBjYXJ0U2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogJ2NhcnQnLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgYWRkUHJvZHVjdDogKHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248QWRkUHJvZHVjdFR5cGU+KSA9PiB7XHJcbiAgICAgIGNvbnN0IGNhcnRJdGVtcyA9IHN0YXRlLmNhcnRJdGVtcztcclxuXHJcbiAgICAgIC8vIGZpbmQgaW5kZXggb2YgcHJvZHVjdFxyXG4gICAgICBjb25zdCBpbmRleCA9IGluZGV4U2FtZVByb2R1Y3Qoc3RhdGUsIGFjdGlvbi5wYXlsb2FkLnByb2R1Y3QpO1xyXG5cclxuICAgICAgaWYoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgY2FydEl0ZW1zW2luZGV4XS5jb3VudCArPSBhY3Rpb24ucGF5bG9hZC5jb3VudDtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgY2FydEl0ZW1zOiBbLi4uc3RhdGUuY2FydEl0ZW1zLCBhY3Rpb24ucGF5bG9hZC5wcm9kdWN0IF1cclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVQcm9kdWN0KHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248UHJvZHVjdFN0b3JlVHlwZT4pIHtcclxuICAgICAgLy8gZmluZCBpbmRleCBvZiBwcm9kdWN0XHJcbiAgICAgIHN0YXRlLmNhcnRJdGVtcy5zcGxpY2UoaW5kZXhTYW1lUHJvZHVjdChzdGF0ZSwgYWN0aW9uLnBheWxvYWQpLCAxKTtcclxuICAgIH0sXHJcbiAgICBzZXRDb3VudChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPEFkZFByb2R1Y3RUeXBlPikge1xyXG4gICAgICAvLyBmaW5kIGluZGV4IGFuZCBhZGQgbmV3IGNvdW50IG9uIHByb2R1Y3QgY291bnRcclxuICAgICAgY29uc3QgaW5kZXhJdGVtID0gaW5kZXhTYW1lUHJvZHVjdChzdGF0ZSwgYWN0aW9uLnBheWxvYWQucHJvZHVjdCk7XHJcbiAgICAgIHN0YXRlLmNhcnRJdGVtc1tpbmRleEl0ZW1dLmNvdW50ID0gYWN0aW9uLnBheWxvYWQuY291bnQ7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgeyBhZGRQcm9kdWN0LCByZW1vdmVQcm9kdWN0LCBzZXRDb3VudCB9ID0gY2FydFNsaWNlLmFjdGlvbnNcclxuZXhwb3J0IGRlZmF1bHQgY2FydFNsaWNlLnJlZHVjZXIiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJjYXJ0SXRlbXMiLCJpbmRleFNhbWVQcm9kdWN0Iiwic3RhdGUiLCJhY3Rpb24iLCJzYW1lUHJvZHVjdCIsInByb2R1Y3QiLCJpZCIsInNpemUiLCJmaW5kSW5kZXgiLCJjYXJ0U2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJhZGRQcm9kdWN0IiwiaW5kZXgiLCJwYXlsb2FkIiwiY291bnQiLCJyZW1vdmVQcm9kdWN0Iiwic3BsaWNlIiwic2V0Q291bnQiLCJpbmRleEl0ZW0iLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/reducers/cart.ts\n");

/***/ }),

/***/ "./store/reducers/user.ts":
/*!********************************!*\
  !*** ./store/reducers/user.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"setUserLogged\": () => (/* binding */ setUserLogged),\n/* harmony export */   \"toggleFavProduct\": () => (/* binding */ toggleFavProduct)\n/* harmony export */ });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst initialState = {\n    user: {\n        name: \"Lucas Pulliese\"\n    },\n    favProducts: []\n};\nconst userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"user\",\n    initialState,\n    reducers: {\n        toggleFavProduct (state, action) {\n            const index = state.favProducts.includes(action.payload.id);\n            if (!index) {\n                state.favProducts.push(action.payload.id);\n                return;\n            }\n            (0,lodash__WEBPACK_IMPORTED_MODULE_0__.remove)(state.favProducts, (id)=>id === action.payload.id\n            );\n        },\n        setUserLogged (state, action) {\n            const index = state.favProducts.includes(action.payload.id);\n            if (!index) {\n                state.favProducts.push(action.payload.id);\n                return {\n                    ...state,\n                    favProducts: state.favProducts\n                };\n            }\n            (0,lodash__WEBPACK_IMPORTED_MODULE_0__.remove)(state.favProducts, (id)=>id === action.payload.id\n            );\n            return {\n                ...state,\n                favProducts: state.favProducts\n            };\n        }\n    }\n});\nconst { toggleFavProduct , setUserLogged  } = userSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9yZWR1Y2Vycy91c2VyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBZ0M7QUFFNkI7QUFzQjdELE1BQU1FLFlBQVksR0FBRztJQUNuQkMsSUFBSSxFQUFFO1FBQ0pDLElBQUksRUFBRSxnQkFBZ0I7S0FDdkI7SUFDREMsV0FBVyxFQUFFLEVBQUU7Q0FDaEI7QUFFRCxNQUFNQyxTQUFTLEdBQUdMLDZEQUFXLENBQUM7SUFDNUJHLElBQUksRUFBRSxNQUFNO0lBQ1pGLFlBQVk7SUFDWkssUUFBUSxFQUFFO1FBQ1JDLGdCQUFnQixFQUFDQyxLQUFLLEVBQUVDLE1BQW9DLEVBQUU7WUFDNUQsTUFBTUMsS0FBSyxHQUFHRixLQUFLLENBQUNKLFdBQVcsQ0FBQ08sUUFBUSxDQUFDRixNQUFNLENBQUNHLE9BQU8sQ0FBQ0MsRUFBRSxDQUFDO1lBRTNELElBQUcsQ0FBQ0gsS0FBSyxFQUFFO2dCQUNURixLQUFLLENBQUNKLFdBQVcsQ0FBQ1UsSUFBSSxDQUFDTCxNQUFNLENBQUNHLE9BQU8sQ0FBQ0MsRUFBRSxDQUFDLENBQUM7Z0JBRTFDLE9BQU87YUFDUjtZQUVEZCw4Q0FBTSxDQUFDUyxLQUFLLENBQUNKLFdBQVcsRUFBRVMsQ0FBQUEsRUFBRSxHQUFJQSxFQUFFLEtBQUtKLE1BQU0sQ0FBQ0csT0FBTyxDQUFDQyxFQUFFO1lBQUEsQ0FBQyxDQUFDO1NBQzNEO1FBQ0RFLGFBQWEsRUFBQ1AsS0FBSyxFQUFFQyxNQUFrQyxFQUFFO1lBQ3ZELE1BQU1DLEtBQUssR0FBR0YsS0FBSyxDQUFDSixXQUFXLENBQUNPLFFBQVEsQ0FBQ0YsTUFBTSxDQUFDRyxPQUFPLENBQUNDLEVBQUUsQ0FBQztZQUUzRCxJQUFHLENBQUNILEtBQUssRUFBRTtnQkFDVEYsS0FBSyxDQUFDSixXQUFXLENBQUNVLElBQUksQ0FBQ0wsTUFBTSxDQUFDRyxPQUFPLENBQUNDLEVBQUUsQ0FBQyxDQUFDO2dCQUUxQyxPQUFPO29CQUNMLEdBQUdMLEtBQUs7b0JBQ1JKLFdBQVcsRUFBRUksS0FBSyxDQUFDSixXQUFXO2lCQUMvQixDQUFDO2FBQ0g7WUFFREwsOENBQU0sQ0FBQ1MsS0FBSyxDQUFDSixXQUFXLEVBQUVTLENBQUFBLEVBQUUsR0FBSUEsRUFBRSxLQUFLSixNQUFNLENBQUNHLE9BQU8sQ0FBQ0MsRUFBRTtZQUFBLENBQUMsQ0FBQztZQUUxRCxPQUFPO2dCQUNMLEdBQUdMLEtBQUs7Z0JBQ1JKLFdBQVcsRUFBRUksS0FBSyxDQUFDSixXQUFXO2FBQy9CLENBQUM7U0FDSDtLQUNGO0NBQ0YsQ0FBQztBQUVLLE1BQU0sRUFBRUcsZ0JBQWdCLEdBQUVRLGFBQWEsR0FBRSxHQUFHVixTQUFTLENBQUNXLE9BQU87QUFDcEUsaUVBQWVYLFNBQVMsQ0FBQ1ksT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtZWNvbW1lcmNlLy4vc3RvcmUvcmVkdWNlcnMvdXNlci50cz82NzdhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbW92ZSB9IGZyb20gJ2xvZGFzaCc7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVTbGljZSwgUGF5bG9hZEFjdGlvbiB9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnXHJcblxyXG50eXBlIFByb2R1Y3RUeXBlID0ge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHRodW1iOiBzdHJpbmc7XHJcbiAgcHJpY2U6IHN0cmluZztcclxuICBjb3VudDogbnVtYmVyO1xyXG4gIGNvbG9yOiBzdHJpbmc7XHJcbiAgc2l6ZTogc3RyaW5nO1xyXG59XHJcblxyXG50eXBlIFRvZ2dsZUZhdlR5cGUgPSB7XHJcbiAgaWQ6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIFVzZXJTbGljZVR5cGVzIHtcclxuICB1c2VyOiBhbnk7XHJcbiAgZmF2UHJvZHVjdHM6IGFueTtcclxuICBmYXZSZXZpZXdzOiBhbnk7XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICB1c2VyOiB7XHJcbiAgICBuYW1lOiAnTHVjYXMgUHVsbGllc2UnLFxyXG4gIH0sXHJcbiAgZmF2UHJvZHVjdHM6IFtdLFxyXG59IGFzIFVzZXJTbGljZVR5cGVzXHJcblxyXG5jb25zdCB1c2VyU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogJ3VzZXInLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgdG9nZ2xlRmF2UHJvZHVjdChzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPFRvZ2dsZUZhdlR5cGU+KSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUuZmF2UHJvZHVjdHMuaW5jbHVkZXMoYWN0aW9uLnBheWxvYWQuaWQpO1xyXG5cclxuICAgICAgaWYoIWluZGV4KSB7XHJcbiAgICAgICAgc3RhdGUuZmF2UHJvZHVjdHMucHVzaChhY3Rpb24ucGF5bG9hZC5pZCk7XHJcblxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmVtb3ZlKHN0YXRlLmZhdlByb2R1Y3RzLCBpZCA9PiBpZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQpO1xyXG4gICAgfSxcclxuICAgIHNldFVzZXJMb2dnZWQoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxQcm9kdWN0VHlwZT4pIHtcclxuICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS5mYXZQcm9kdWN0cy5pbmNsdWRlcyhhY3Rpb24ucGF5bG9hZC5pZCk7XHJcblxyXG4gICAgICBpZighaW5kZXgpIHtcclxuICAgICAgICBzdGF0ZS5mYXZQcm9kdWN0cy5wdXNoKGFjdGlvbi5wYXlsb2FkLmlkKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgZmF2UHJvZHVjdHM6IHN0YXRlLmZhdlByb2R1Y3RzXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmVtb3ZlKHN0YXRlLmZhdlByb2R1Y3RzLCBpZCA9PiBpZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQpO1xyXG4gICAgICBcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBmYXZQcm9kdWN0czogc3RhdGUuZmF2UHJvZHVjdHNcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgfSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB7IHRvZ2dsZUZhdlByb2R1Y3QsIHNldFVzZXJMb2dnZWQgfSA9IHVzZXJTbGljZS5hY3Rpb25zXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJTbGljZS5yZWR1Y2VyIl0sIm5hbWVzIjpbInJlbW92ZSIsImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwidXNlciIsIm5hbWUiLCJmYXZQcm9kdWN0cyIsInVzZXJTbGljZSIsInJlZHVjZXJzIiwidG9nZ2xlRmF2UHJvZHVjdCIsInN0YXRlIiwiYWN0aW9uIiwiaW5kZXgiLCJpbmNsdWRlcyIsInBheWxvYWQiLCJpZCIsInB1c2giLCJzZXRVc2VyTG9nZ2VkIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/reducers/user.ts\n");

/***/ }),

/***/ "./utils/gtag.ts":
/*!***********************!*\
  !*** ./utils/gtag.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GA_TRACKING_ID\": () => (/* binding */ GA_TRACKING_ID),\n/* harmony export */   \"event\": () => (/* binding */ event),\n/* harmony export */   \"pageview\": () => (/* binding */ pageview)\n/* harmony export */ });\nconst GA_TRACKING_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID // This is your GA Tracking ID\n;\n// https://developers.google.com/analytics/devguides/collection/gtagjs/pages\nconst pageview = (url)=>{\n    window.gtag(\"config\", GA_TRACKING_ID, {\n        page_path: url\n    });\n};\n// https://developers.google.com/analytics/devguides/collection/gtagjs/events\nconst event = ({ action , category , label , value  })=>{\n    window.gtag(\"event\", action, {\n        event_category: category,\n        event_label: label,\n        value: value\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9ndGFnLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUVPLE1BQU1BLGNBQWMsR0FBR0MsT0FBTyxDQUFDQyxHQUFHLENBQUNDLHdCQUF3QixDQUFDLDhCQUE4QjtBQUEvQjtBQUdsRSw0RUFBNEU7QUFDckUsTUFBTUMsUUFBUSxHQUFHLENBQUNDLEdBQVcsR0FBSztJQUN2Q0MsTUFBTSxDQUFDQyxJQUFJLENBQUMsUUFBUSxFQUFFUCxjQUFjLEVBQUU7UUFDcENRLFNBQVMsRUFBRUgsR0FBRztLQUNmLENBQUM7Q0FDSDtBQUVELDZFQUE2RTtBQUN0RSxNQUFNSSxLQUFLLEdBQUcsQ0FBQyxFQUFFQyxNQUFNLEdBQUVDLFFBQVEsR0FBRUMsS0FBSyxHQUFFQyxLQUFLLEdBQWlCLEdBQUs7SUFDMUVQLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLE9BQU8sRUFBRUcsTUFBTSxFQUFFO1FBQzNCSSxjQUFjLEVBQUVILFFBQVE7UUFDeEJJLFdBQVcsRUFBRUgsS0FBSztRQUNsQkMsS0FBSyxFQUFFQSxLQUFLO0tBQ2IsQ0FBQztDQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1lY29tbWVyY2UvLi91dGlscy9ndGFnLnRzPzEwZDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3RhZ0V2ZW50VHlwZSB9IGZyb20gJ3R5cGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCBHQV9UUkFDS0lOR19JRCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FOQUxZVElDU19JRCAvLyBUaGlzIGlzIHlvdXIgR0EgVHJhY2tpbmcgSURcclxuZGVjbGFyZSB2YXIgd2luZG93OiBhbnlcclxuXHJcbi8vIGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL2FuYWx5dGljcy9kZXZndWlkZXMvY29sbGVjdGlvbi9ndGFnanMvcGFnZXNcclxuZXhwb3J0IGNvbnN0IHBhZ2V2aWV3ID0gKHVybDogc3RyaW5nKSA9PiB7XHJcbiAgd2luZG93Lmd0YWcoJ2NvbmZpZycsIEdBX1RSQUNLSU5HX0lELCB7XHJcbiAgICBwYWdlX3BhdGg6IHVybCxcclxuICB9KVxyXG59XHJcblxyXG4vLyBodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9hbmFseXRpY3MvZGV2Z3VpZGVzL2NvbGxlY3Rpb24vZ3RhZ2pzL2V2ZW50c1xyXG5leHBvcnQgY29uc3QgZXZlbnQgPSAoeyBhY3Rpb24sIGNhdGVnb3J5LCBsYWJlbCwgdmFsdWUgfTogR3RhZ0V2ZW50VHlwZSkgPT4ge1xyXG4gIHdpbmRvdy5ndGFnKCdldmVudCcsIGFjdGlvbiwge1xyXG4gICAgZXZlbnRfY2F0ZWdvcnk6IGNhdGVnb3J5LFxyXG4gICAgZXZlbnRfbGFiZWw6IGxhYmVsLFxyXG4gICAgdmFsdWU6IHZhbHVlLFxyXG4gIH0pXHJcbn0iXSwibmFtZXMiOlsiR0FfVFJBQ0tJTkdfSUQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQU5BTFlUSUNTX0lEIiwicGFnZXZpZXciLCJ1cmwiLCJ3aW5kb3ciLCJndGFnIiwicGFnZV9wYXRoIiwiZXZlbnQiLCJhY3Rpb24iLCJjYXRlZ29yeSIsImxhYmVsIiwidmFsdWUiLCJldmVudF9jYXRlZ29yeSIsImV2ZW50X2xhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/gtag.ts\n");

/***/ }),

/***/ "./assets/css/styles.scss":
/*!********************************!*\
  !*** ./assets/css/styles.scss ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/rc-slider/assets/index.css":
/*!*************************************************!*\
  !*** ./node_modules/rc-slider/assets/index.css ***!
  \*************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/react-rater/lib/react-rater.css":
/*!******************************************************!*\
  !*** ./node_modules/react-rater/lib/react-rater.css ***!
  \******************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/swiper/swiper.scss":
/*!*****************************************!*\
  !*** ./node_modules/swiper/swiper.scss ***!
  \*****************************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/lib/storage":
/*!********************************************!*\
  !*** external "redux-persist/lib/storage" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ }),

/***/ "firebase/storage":
/*!***********************************!*\
  !*** external "firebase/storage" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/storage");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();