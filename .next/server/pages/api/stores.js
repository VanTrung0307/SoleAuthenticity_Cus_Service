"use strict";
(() => {
var exports = {};
exports.id = 698;
exports.ids = [698];
exports.modules = {

/***/ 5593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_data_stores__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1897);

// fake data
const getStores = (req, res)=>{
    console.log(req);
    // fake loading time
    setTimeout(()=>{
        res.status(200).json(_utils_data_stores__WEBPACK_IMPORTED_MODULE_0__/* .stores */ .g);
    }, 800);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getStores);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [897], () => (__webpack_exec__(5593)));
module.exports = __webpack_exports__;

})();