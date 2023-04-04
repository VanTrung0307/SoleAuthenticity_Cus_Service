"use strict";
exports.id = 930;
exports.ids = [930];
exports.modules = {

/***/ 3930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Post)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);



function Post(props) {
    let rid = props.productId.toString();
    // let slug = props.title?.toLowerCase().replaceAll(" ","-")
    // console.log(slug);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "product-item",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "product__image",
            style: {
                borderRadius: "30px",
                width: "400px",
                height: "200px",
                margin: "0px 80px 100px 0px"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: `/review/${rid}`,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                src: props.avatar,
                                alt: "product",
                                width: 300,
                                height: 200,
                                layout: "responsive",
                                objectFit: "cover",
                                className: "rounded-t-3xl"
                            }),
                            props.tag && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                style: {
                                    backgroundColor: props.tag === "Guides" ? "orange" : props.tag === "Reviews" ? "black" : ""
                                },
                                className: "product__discount",
                                children: props.tag
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                    href: `/review/${rid}`,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            backgroundColor: "black",
                            borderRadius: "0px 0px 30px 30px",
                            width: "100%",
                            height: "130px",
                            cursor: "pointer",
                            display: "flex",
                            flexDirection: "column"
                        },
                        className: "product__description",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                style: {
                                    fontWeight: "bold",
                                    fontSize: "20px",
                                    paddingBottom: "20px",
                                    color: "white",
                                    fontFamily: "arial",
                                    textAlign: "left",
                                    paddingLeft: "10px",
                                    paddingTop: "10px",
                                    flexWrap: "wrap"
                                },
                                children: props.title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                style: {
                                    fontSize: "15px",
                                    fontFamily: "arial",
                                    color: "white",
                                    textAlign: "left",
                                    paddingLeft: "10px",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    flexWrap: "wrap"
                                },
                                children: props.description
                            })
                        ]
                    })
                })
            ]
        })
    });
};


/***/ })

};
;