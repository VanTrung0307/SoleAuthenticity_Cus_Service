"use strict";
exports.id = 239;
exports.ids = [239];
exports.modules = {

/***/ 8927:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I8": () => (/* binding */ auth),
/* harmony export */   "tO": () => (/* binding */ storage)
/* harmony export */ });
/* unused harmony export db */
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(401);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1492);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3392);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_storage__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const config = {
    apiKey: "AIzaSyAfqo4JEu--BnaR2cCheXnhbuZTfEVBOOE",
    authDomain: "soleauthenticity-8f48f.firebaseapp.com",
    projectId: "soleauthenticity-8f48f",
    storageBucket: "soleauthenticity-8f48f.appspot.com",
    messagingSenderId: "471540007884",
    appId: "1:471540007884:web:67f472ca8b49864bbe5369",
    measurementId: "G-3S5T6N6CFY"
};
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(config);
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(app);
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(app);
const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_3__.getStorage)(app);
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (app)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 239:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ AuthContextProvider),
/* harmony export */   "J": () => (/* binding */ UseAuth)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(401);
/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8927);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, _firebase_config__WEBPACK_IMPORTED_MODULE_2__]);
([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, _firebase_config__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)({
    user: null,
    setUser: ()=>{},
    logOut: ()=>{}
});
function UseAuth() {
    return (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(AuthContext);
}
const AuthContextProvider = ({ children  })=>{
    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const logOut = ()=>{
        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(_firebase_config__WEBPACK_IMPORTED_MODULE_2__/* .auth */ .I8);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AuthContext.Provider, {
        value: {
            user,
            setUser,
            logOut
        },
        children: children
    });
}; // export const UserAuth = () => {
 //   return useContext(AuthContext);
 // };

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;