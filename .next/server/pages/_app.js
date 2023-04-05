(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 446:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ChatBox = ({ page_id  })=>{
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const customWindow = window;
        customWindow.fbAsyncInit = function() {
            customWindow.FB?.init({
                xfbml: true,
                version: "v12.0"
            });
        };
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s);
            js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
            if (fjs.parentNode) {
                fjs.parentNode.insertBefore(js, fjs);
            }
        })(document, "script", "facebook-jssdk");
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "fb-customerchat",
        "data-page_id": page_id
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChatBox);


/***/ }),

/***/ 3847:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6089);
/* harmony import */ var swiper_swiper_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9076);
/* harmony import */ var swiper_swiper_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_gtag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(687);
/* harmony import */ var _api_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(239);
/* harmony import */ var _components_chatbox_chatbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(446);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__]);
_api_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



// global styles







const isProduction = "production" === "production";
// only events on production
if (isProduction) {
    // Notice how we track pageview when route is changed
    next_router__WEBPACK_IMPORTED_MODULE_1___default().events.on("routeChangeComplete", (url)=>_utils_gtag__WEBPACK_IMPORTED_MODULE_4__/* .pageview */ .LV(url)
    );
}
const MyApp = ({ Component , pageProps  })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_api_context_AuthContext__WEBPACK_IMPORTED_MODULE_5__/* .AuthContextProvider */ .H, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_chatbox_chatbox__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                page_id: "100090712598917"
            })
        ]
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_store__WEBPACK_IMPORTED_MODULE_2__/* .wrapper.withRedux */ .Y.withRedux(MyApp));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6089:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Y": () => (/* binding */ wrapper)
});

// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
;// CONCATENATED MODULE: external "next-redux-wrapper"
const external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");
// EXTERNAL MODULE: ./store/reducers/cart.ts
var cart = __webpack_require__(1502);
// EXTERNAL MODULE: ./store/reducers/user.ts
var user = __webpack_require__(4912);
;// CONCATENATED MODULE: external "redux-persist/lib/storage"
const storage_namespaceObject = require("redux-persist/lib/storage");
var storage_default = /*#__PURE__*/__webpack_require__.n(storage_namespaceObject);
;// CONCATENATED MODULE: external "redux-persist"
const external_redux_persist_namespaceObject = require("redux-persist");
;// CONCATENATED MODULE: ./store/index.ts






//COMBINING ALL REDUCERS
const reducer = {
    cart: cart/* default */.ZP,
    user: user/* default */.ZP
};
const rootReducer = (0,toolkit_.combineReducers)({
    cart: cart/* default */.ZP,
    user: user/* default */.ZP
});
let store = (0,toolkit_.configureStore)({
    reducer
});
const makeStore = ({ isServer  })=>{
    if (isServer) {
        //If it's on server side, create a store
        return store = (0,toolkit_.configureStore)({
            reducer
        });
    } else {
        //If it's on client side, create a store which will persist
        const persistConfig = {
            key: "shoppingcart",
            whitelist: [
                "cart",
                "user"
            ],
            storage: (storage_default())
        };
        const persistedReducer = (0,external_redux_persist_namespaceObject.persistReducer)(persistConfig, rootReducer); // Create a new reducer with our existing reducer
        store = (0,toolkit_.configureStore)({
            reducer: persistedReducer
        }); // Creating the store again
        // @ts-ignore:next-line
        store.__persistor = (0,external_redux_persist_namespaceObject.persistStore)(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature
        return store;
    }
};
// export an assembled wrapper
// @ts-ignore:next-line
const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(makeStore, {
    debug: true
});


/***/ }),

/***/ 687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LV": () => (/* binding */ pageview),
/* harmony export */   "vt": () => (/* binding */ GA_TRACKING_ID)
/* harmony export */ });
/* unused harmony export event */
const GA_TRACKING_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID // This is your GA Tracking ID
;
// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
const pageview = (url)=>{
    window.gtag("config", GA_TRACKING_ID, {
        page_path: url
    });
};
// https://developers.google.com/analytics/devguides/collection/gtagjs/events
const event = ({ action , category , label , value  })=>{
    window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value
    });
};


/***/ }),

/***/ 9076:
/***/ (() => {



/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 6517:
/***/ ((module) => {

"use strict";
module.exports = require("lodash");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3745:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ 401:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ 1492:
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ }),

/***/ 3392:
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
var __webpack_exports__ = __webpack_require__.X(0, [239,1502,4912], () => (__webpack_exec__(3847)));
module.exports = __webpack_exports__;

})();