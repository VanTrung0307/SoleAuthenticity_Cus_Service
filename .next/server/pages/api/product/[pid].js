"use strict";
(() => {
var exports = {};
exports.id = 151;
exports.ids = [151];
exports.modules = {

/***/ 2518:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var utils_data_reviewca__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2821);
/* harmony import */ var _utils_data_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7881);
/* harmony import */ var _utils_data_stores__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1897);
/* harmony import */ var _utils_data_checked__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5708);
/* harmony import */ var _utils_data_brands__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4344);

// fake data




const getProductById = (req, res)=>{
    const { query: { pid  } ,  } = req;
    const product = _utils_data_products__WEBPACK_IMPORTED_MODULE_1__/* ["default"].find */ .Z.find((x)=>x.id === pid
    );
    res.status(200).json(product);
    const check = _utils_data_checked__WEBPACK_IMPORTED_MODULE_3__/* .checked.find */ .e.find((x)=>x.id === pid
    );
    res.status(200).json(check);
    const review = utils_data_reviewca__WEBPACK_IMPORTED_MODULE_0__/* ["default"].find */ .Z.find((x)=>x.id === pid
    );
    res.status(200).json(review);
    const store = _utils_data_stores__WEBPACK_IMPORTED_MODULE_2__/* .stores.find */ .g.find((x)=>x.id === pid
    );
    res.status(200).json(store);
    const brand = _utils_data_brands__WEBPACK_IMPORTED_MODULE_4__/* .brands.find */ .Y.find((x)=>x.id === pid
    );
    res.status(200).json(brand);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getProductById);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [881,708,897,344,821], () => (__webpack_exec__(2518)));
module.exports = __webpack_exports__;

})();