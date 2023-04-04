"use strict";
exports.id = 1394;
exports.ids = [1394];
exports.modules = {

/***/ 2418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Breadcrumb = ()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "breadcrumb",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                className: "breadcrumb-list",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                            href: "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "icon-home"
                                    })
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: "All Products"
                    })
                ]
            })
        })
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Breadcrumb);


/***/ }),

/***/ 6895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ products_filter)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "rc-slider"
var external_rc_slider_ = __webpack_require__(1817);
var external_rc_slider_default = /*#__PURE__*/__webpack_require__.n(external_rc_slider_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/products-filter/form-builder/checkbox/index.tsx

const Checkbox = ({ type ="" , label , name , onChange  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("label", {
        htmlFor: label + "-" + name,
        className: `checkbox ${type ? "checkbox--" + type : ""}`,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                name: name,
                onChange: onChange,
                type: "checkbox",
                id: label + "-" + name
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "checkbox__check"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                style: {
                    fontWeight: "normal",
                    fontSize: "18px"
                },
                children: label
            })
        ]
    })
;
/* harmony default export */ const form_builder_checkbox = (Checkbox);

// EXTERNAL MODULE: ./utils/data/products-sizes.ts
var products_sizes = __webpack_require__(5250);
;// CONCATENATED MODULE: ./utils/data/products-types.ts
const productsTypes = [
    {
        id: "1",
        name: "Nike",
        count: "172"
    },
    {
        id: "2",
        name: "Jordan",
        count: "131"
    },
    {
        id: "3",
        name: "Adidas",
        count: "56"
    },
    {
        id: "4",
        name: "New Balance",
        count: "8"
    }, 
];
/* harmony default export */ const products_types = (productsTypes);

;// CONCATENATED MODULE: ./components/products-filter/index.tsx




// data


const { createSliderWithTooltip  } = (external_rc_slider_default());
const Range = createSliderWithTooltip((external_rc_slider_default()).Range);
const ProductsFilter = ()=>{
    const { 0: filtersOpen , 1: setFiltersOpen  } = (0,external_react_.useState)(false);
    const addQueryParams = ()=>{
    // query params changes
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        className: "products-filter",
        onChange: addQueryParams,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                type: "button",
                onClick: ()=>setFiltersOpen(!filtersOpen)
                ,
                className: `products-filter__menu-btn ${filtersOpen ? "products-filter__menu-btn--active" : ""}`,
                children: [
                    "Add Filter ",
                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "icon-down-open"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `products-filter__wrapper ${filtersOpen ? "products-filter__wrapper--open" : ""}`,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "products-filter__block",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "button",
                                children: "Product type"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "products-filter__block__content",
                                children: products_types.map((type)=>/*#__PURE__*/ jsx_runtime_.jsx(form_builder_checkbox, {
                                        name: "product-type",
                                        label: type.name
                                    }, type.id)
                                )
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "products-filter__block",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "button",
                                children: "Price"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "products-filter__block__content",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Range, {
                                    min: 0,
                                    max: 20,
                                    defaultValue: [
                                        3,
                                        10
                                    ],
                                    tipFormatter: (value)=>`${value}%`
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "products-filter__block",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "button",
                                children: "Size"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "products-filter__block__content checkbox-square-wrapper",
                                children: products_sizes/* default.map */.Z.map((type)=>/*#__PURE__*/ jsx_runtime_.jsx(form_builder_checkbox, {
                                        type: "square",
                                        name: "product-size",
                                        label: type.label
                                    }, type.id)
                                )
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "submit",
                        className: "btn btn-submit btn--rounded btn--yellow",
                        children: "Apply"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const products_filter = (ProductsFilter);


/***/ }),

/***/ 5250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export productsSizes */
const productsSizes = [
    {
        id: "1",
        label: "36"
    },
    {
        id: "2",
        label: "37"
    },
    {
        id: "3",
        label: "38"
    },
    {
        id: "4",
        label: "39"
    },
    {
        id: "5",
        label: "40"
    },
    {
        id: "6",
        label: "41"
    },
    {
        id: "7",
        label: "42"
    },
    {
        id: "8",
        label: "43"
    },
    {
        id: "9",
        label: "44"
    }, 
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (productsSizes);


/***/ })

};
;