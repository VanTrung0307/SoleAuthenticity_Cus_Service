"use strict";
exports.id = 9952;
exports.ids = [9952];
exports.modules = {

/***/ 9952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ products_featured)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/product-item/index.tsx
var product_item = __webpack_require__(8362);
// EXTERNAL MODULE: external "swiper/react"
var react_ = __webpack_require__(3630);
;// CONCATENATED MODULE: ./components/products-featured/carousel/index.tsx



let slidesPerView = 1.3;
let centeredSlides = true;
let spaceBetween = 30;
if (false) {}
const ProductsCarousel = ({ products  })=>{
    if (!products) return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: "Loading"
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "products-carousel",
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Swiper, {
            spaceBetween: spaceBetween,
            loop: true,
            centeredSlides: centeredSlides,
            watchOverflow: true,
            slidesPerView: slidesPerView,
            className: "swiper-wrapper",
            children: products.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.SwiperSlide, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(product_item/* default */.Z, {
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        color: item.color,
                        imgPath: item.imgPath
                    }, item.id)
                }, item.id)
            )
        })
    });
};
/* harmony default export */ const carousel = (ProductsCarousel);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/products-featured/index.tsx




const ProductsFeatured = ()=>{
    const { 0: data , 1: setData  } = (0,external_react_.useState)();
    (0,external_react_.useEffect)(()=>{
        const fetchData = async ()=>{
            const res = await fetch("https://soleauthenticity.azurewebsites.net/api/products/cus");
            const resData = await res.json();
            setData(resData.data);
        };
        fetchData();
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "section section-products-featured",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                    className: "section-products-featured__header",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: "Footwear"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/products",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                children: [
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "btn btn--rounded btn--border",
                                        children: "Show All"
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(carousel, {
                    products: data
                })
            ]
        })
    });
};
/* harmony default export */ const products_featured = (ProductsFeatured);


/***/ })

};
;