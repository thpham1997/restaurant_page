/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./dist/css/main.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./dist/css/main.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nbody {\n  background-color: rgba(0, 0, 0, 0.9);\n}\n\n.nav {\n  color: red;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 3fr 7fr;\n  height: 25rem;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  background-position: 50% 30%;\n}\n.nav__logo {\n  display: grid;\n  place-items: center;\n}\n.nav__logo__icon {\n  width: 10rem;\n  background-color: rgba(0, 0, 0, 0.1);\n  border-radius: 1rem;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);\n  transition: 0.7s;\n}\n.nav__logo__icon:hover {\n  cursor: pointer;\n  width: 8rem;\n}\n.nav__tab {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: flex-end;\n}\n.nav__tab * {\n  width: 7rem;\n  height: 2rem;\n  margin: 2rem 3rem;\n  border-radius: 2rem;\n  border-style: none;\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);\n  transition: 0.5s;\n}\n.nav__tab *:hover {\n  background-color: rgba(161, 163, 36, 0.801);\n  box-shadow: none;\n  font-size: 1.3rem;\n  cursor: pointer;\n}\n.nav__tab *:focus {\n  height: 2.2rem;\n  font-size: 1.1rem;\n  background-color: rgba(161, 163, 36, 0.801);\n}\n\n.about {\n  font-size: 1.5rem;\n  color: white;\n}\n.about__ramen {\n  width: 100%;\n  height: 30rem;\n  display: block;\n  padding: 2rem 0;\n}\n.about__ramen__pic {\n  float: left;\n  width: 25rem;\n  height: 25rem;\n  margin-left: 15rem;\n  margin-right: 1rem;\n  border-radius: 4rem;\n}\n.about__ramen__para {\n  margin-right: 15rem;\n  text-indent: 3rem;\n  text-align: justify;\n}\n.about__sushi {\n  width: 100%;\n  height: 30rem;\n  display: block;\n  padding: 2rem 0;\n}\n.about__sushi__pic {\n  float: right;\n  width: 25rem;\n  height: 25rem;\n  margin-left: 1rem;\n  margin-right: 15rem;\n  border-radius: 4rem;\n}\n.about__sushi__para {\n  margin-left: 15rem;\n  text-indent: 3rem;\n  text-align: justify;\n}\n\n.menu__title {\n  line-height: 4rem;\n  width: 80%;\n  margin: 0.5rem auto;\n  transform: skewX(-30deg);\n  text-align: center;\n  font-size: 2rem;\n  font-weight: bold;\n  color: #d6b354;\n  background-color: #0f1c3e;\n  border-radius: 1rem;\n}\n\n.menu__ramen {\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n  place-items: center;\n  margin: 0 auto;\n  border-radius: 1rem;\n  border-style: solid;\n  border-width: 2px;\n  border-color: rgba(0, 0, 0, 0.1);\n  width: 85%;\n  padding: 1rem;\n  background-color: rgba(0, 0, 0, 0.1);\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);\n}\n.menu__ramen__1 {\n  width: 20rem;\n  height: 20rem;\n  margin-bottom: 2rem;\n  transition: all 1.5s;\n  transition-delay: 0.5s;\n}\n.menu__ramen__1:hover {\n  background-color: rgba(221, 208, 143, 0.829);\n  border-radius: 4rem;\n  cursor: pointer;\n}\n.menu__ramen__1:hover :first-child {\n  border-radius: 4rem;\n  width: 14rem;\n  margin-top: 1rem;\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);\n}\n.menu__ramen__1:hover :last-child {\n  font-size: 1.5rem;\n  display: block;\n  color: black;\n}\n.menu__ramen__2 {\n  width: 20rem;\n  height: 20rem;\n  margin-bottom: 2rem;\n  transition: all 1.5s;\n  transition-delay: 0.5s;\n}\n.menu__ramen__2:hover {\n  background-color: rgba(221, 208, 143, 0.829);\n  border-radius: 4rem;\n  cursor: pointer;\n}\n.menu__ramen__2:hover :first-child {\n  border-radius: 4rem;\n  width: 14rem;\n  margin-top: 1rem;\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);\n}\n.menu__ramen__2:hover :last-child {\n  font-size: 1.5rem;\n  display: block;\n  color: black;\n}\n.menu__ramen__3 {\n  width: 20rem;\n  height: 20rem;\n  margin-bottom: 2rem;\n  transition: all 1.5s;\n  transition-delay: 0.5s;\n}\n.menu__ramen__3:hover {\n  background-color: rgba(221, 208, 143, 0.829);\n  border-radius: 4rem;\n  cursor: pointer;\n}\n.menu__ramen__3:hover :first-child {\n  border-radius: 4rem;\n  width: 14rem;\n  margin-top: 1rem;\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);\n}\n.menu__ramen__3:hover :last-child {\n  font-size: 1.5rem;\n  display: block;\n  color: black;\n}\n.menu__ramen__4 {\n  width: 20rem;\n  height: 20rem;\n  margin-bottom: 2rem;\n  transition: all 1.5s;\n  transition-delay: 0.5s;\n}\n.menu__ramen__4:hover {\n  background-color: rgba(221, 208, 143, 0.829);\n  border-radius: 4rem;\n  cursor: pointer;\n}\n.menu__ramen__4:hover :first-child {\n  border-radius: 4rem;\n  width: 14rem;\n  margin-top: 1rem;\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);\n}\n.menu__ramen__4:hover :last-child {\n  font-size: 1.5rem;\n  display: block;\n  color: black;\n}\n.menu__ramen__img {\n  display: block;\n  width: 20rem;\n  margin: 0 auto 0 auto;\n  border-radius: 1rem;\n  transition: all 1.5s;\n}\n.menu__ramen__des {\n  display: none;\n  margin: 0.2rem 0.5rem;\n  color: rgba(255, 255, 255, 0);\n  font-size: 1rem;\n  transition-property: all;\n  transition-duration: 2s;\n  transition-delay: 1s;\n}\n\n.menu__sushi {\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n  place-items: center;\n  margin: 0 auto;\n  border-radius: 1rem;\n  width: 85%;\n  padding: 1rem;\n  background-color: rgba(0, 0, 0, 0.1);\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);\n}\n.menu__sushi__1 {\n  width: 20rem;\n  height: 20rem;\n  margin-bottom: 2rem;\n  transition: all 1.5s;\n  transition-delay: 0.5s;\n}\n.menu__sushi__1:hover {\n  background-color: rgba(221, 208, 143, 0.829);\n  border-radius: 4rem;\n}\n.menu__sushi__1:hover :first-child {\n  border-radius: 4rem;\n  width: 14rem;\n  height: 14rem;\n  margin-top: 1rem;\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);\n}\n.menu__sushi__1:hover :last-child {\n  font-size: 1.5rem;\n  display: block;\n  color: black;\n}\n.menu__sushi__2 {\n  width: 20rem;\n  height: 20rem;\n  margin-bottom: 2rem;\n  transition: all 1.5s;\n  transition-delay: 0.5s;\n}\n.menu__sushi__2:hover {\n  background-color: rgba(221, 208, 143, 0.829);\n  border-radius: 4rem;\n}\n.menu__sushi__2:hover :first-child {\n  border-radius: 4rem;\n  width: 14rem;\n  height: 14rem;\n  margin-top: 1rem;\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);\n}\n.menu__sushi__2:hover :last-child {\n  font-size: 1.5rem;\n  display: block;\n  color: black;\n}\n.menu__sushi__3 {\n  width: 20rem;\n  height: 20rem;\n  margin-bottom: 2rem;\n  transition: all 1.5s;\n  transition-delay: 0.5s;\n}\n.menu__sushi__3:hover {\n  background-color: rgba(221, 208, 143, 0.829);\n  border-radius: 4rem;\n}\n.menu__sushi__3:hover :first-child {\n  border-radius: 4rem;\n  width: 14rem;\n  height: 14rem;\n  margin-top: 1rem;\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);\n}\n.menu__sushi__3:hover :last-child {\n  font-size: 1.5rem;\n  display: block;\n  color: black;\n}\n.menu__sushi__4 {\n  width: 20rem;\n  height: 20rem;\n  margin-bottom: 2rem;\n  transition: all 1.5s;\n  transition-delay: 0.5s;\n}\n.menu__sushi__4:hover {\n  background-color: rgba(221, 208, 143, 0.829);\n  border-radius: 4rem;\n}\n.menu__sushi__4:hover :first-child {\n  border-radius: 4rem;\n  width: 14rem;\n  height: 14rem;\n  margin-top: 1rem;\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);\n}\n.menu__sushi__4:hover :last-child {\n  font-size: 1.5rem;\n  display: block;\n  color: black;\n}\n.menu__sushi__img {\n  display: block;\n  width: 20rem;\n  height: 20rem;\n  margin: 0 auto 0 auto;\n  border-radius: 1rem;\n  transition: all 1.5s;\n}\n.menu__sushi__des {\n  display: none;\n  margin: 0.2rem 0.5rem;\n  color: rgba(255, 255, 255, 0);\n  font-size: 1rem;\n  transition-property: all;\n  transition-duration: 2s;\n  transition-delay: 1s;\n}\n\n.contact {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 2rem auto;\n}\n.contact__information {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: column;\n  width: 25rem;\n  height: 20rem;\n  font-size: 1.5rem;\n  margin: 0.2rem 0.5rem;\n  border-width: 0.1rem;\n  border-color: brown;\n  border-style: double;\n}\n.contact__information * {\n  margin: 0.4rem 0.3rem;\n  color: white;\n}\n.contact__embed {\n  width: 40rem;\n}\n.contact__embed__map {\n  width: inherit;\n}\n", "",{"version":3,"sources":["webpack://./dist/css/main.css"],"names":[],"mappings":"AAAA;;;CAGC;AACD;;;;;;;;;;;;;EAaE,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB;AAC1B;;AAEA,gDAAgD;AAChD;;EAEE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;;AAEA;;EAEE,WAAW;EACX,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,UAAU;EACV,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,aAAa;EACb,qBAAqB;EACrB,4BAA4B;EAC5B,4BAA4B;AAC9B;AACA;EACE,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,YAAY;EACZ,oCAAoC;EACpC,mBAAmB;EACnB,0CAA0C;EAC1C,gBAAgB;AAClB;AACA;EACE,eAAe;EACf,WAAW;AACb;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,yBAAyB;EACzB,qBAAqB;AACvB;AACA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB;EAClB,2CAA2C;EAC3C,gBAAgB;AAClB;AACA;EACE,2CAA2C;EAC3C,gBAAgB;EAChB,iBAAiB;EACjB,eAAe;AACjB;AACA;EACE,cAAc;EACd,iBAAiB;EACjB,2CAA2C;AAC7C;;AAEA;EACE,iBAAiB;EACjB,YAAY;AACd;AACA;EACE,WAAW;EACX,aAAa;EACb,cAAc;EACd,eAAe;AACjB;AACA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,aAAa;EACb,cAAc;EACd,eAAe;AACjB;AACA;EACE,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,UAAU;EACV,mBAAmB;EACnB,wBAAwB;EACxB,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mBAAmB;EACnB,cAAc;EACd,mBAAmB;EACnB,mBAAmB;EACnB,iBAAiB;EACjB,gCAAgC;EAChC,UAAU;EACV,aAAa;EACb,oCAAoC;EACpC,0CAA0C;AAC5C;AACA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,oBAAoB;EACpB,sBAAsB;AACxB;AACA;EACE,4CAA4C;EAC5C,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,2CAA2C;AAC7C;AACA;EACE,iBAAiB;EACjB,cAAc;EACd,YAAY;AACd;AACA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,oBAAoB;EACpB,sBAAsB;AACxB;AACA;EACE,4CAA4C;EAC5C,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,2CAA2C;AAC7C;AACA;EACE,iBAAiB;EACjB,cAAc;EACd,YAAY;AACd;AACA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,oBAAoB;EACpB,sBAAsB;AACxB;AACA;EACE,4CAA4C;EAC5C,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,2CAA2C;AAC7C;AACA;EACE,iBAAiB;EACjB,cAAc;EACd,YAAY;AACd;AACA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,oBAAoB;EACpB,sBAAsB;AACxB;AACA;EACE,4CAA4C;EAC5C,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,2CAA2C;AAC7C;AACA;EACE,iBAAiB;EACjB,cAAc;EACd,YAAY;AACd;AACA;EACE,cAAc;EACd,YAAY;EACZ,qBAAqB;EACrB,mBAAmB;EACnB,oBAAoB;AACtB;AACA;EACE,aAAa;EACb,qBAAqB;EACrB,6BAA6B;EAC7B,eAAe;EACf,wBAAwB;EACxB,uBAAuB;EACvB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mBAAmB;EACnB,cAAc;EACd,mBAAmB;EACnB,UAAU;EACV,aAAa;EACb,oCAAoC;EACpC,0CAA0C;AAC5C;AACA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,oBAAoB;EACpB,sBAAsB;AACxB;AACA;EACE,4CAA4C;EAC5C,mBAAmB;AACrB;AACA;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,2CAA2C;AAC7C;AACA;EACE,iBAAiB;EACjB,cAAc;EACd,YAAY;AACd;AACA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,oBAAoB;EACpB,sBAAsB;AACxB;AACA;EACE,4CAA4C;EAC5C,mBAAmB;AACrB;AACA;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,2CAA2C;AAC7C;AACA;EACE,iBAAiB;EACjB,cAAc;EACd,YAAY;AACd;AACA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,oBAAoB;EACpB,sBAAsB;AACxB;AACA;EACE,4CAA4C;EAC5C,mBAAmB;AACrB;AACA;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,2CAA2C;AAC7C;AACA;EACE,iBAAiB;EACjB,cAAc;EACd,YAAY;AACd;AACA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,oBAAoB;EACpB,sBAAsB;AACxB;AACA;EACE,4CAA4C;EAC5C,mBAAmB;AACrB;AACA;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,2CAA2C;AAC7C;AACA;EACE,iBAAiB;EACjB,cAAc;EACd,YAAY;AACd;AACA;EACE,cAAc;EACd,YAAY;EACZ,aAAa;EACb,qBAAqB;EACrB,mBAAmB;EACnB,oBAAoB;AACtB;AACA;EACE,aAAa;EACb,qBAAqB;EACrB,6BAA6B;EAC7B,eAAe;EACf,wBAAwB;EACxB,uBAAuB;EACvB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,iBAAiB;AACnB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,uBAAuB;EACvB,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,qBAAqB;EACrB,oBAAoB;EACpB,mBAAmB;EACnB,oBAAoB;AACtB;AACA;EACE,qBAAqB;EACrB,YAAY;AACd;AACA;EACE,YAAY;AACd;AACA;EACE,cAAc;AAChB","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nbody {\n  background-color: rgba(0, 0, 0, 0.9);\n}\n\n.nav {\n  color: red;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 3fr 7fr;\n  height: 25rem;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  background-position: 50% 30%;\n}\n.nav__logo {\n  display: grid;\n  place-items: center;\n}\n.nav__logo__icon {\n  width: 10rem;\n  background-color: rgba(0, 0, 0, 0.1);\n  border-radius: 1rem;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);\n  transition: 0.7s;\n}\n.nav__logo__icon:hover {\n  cursor: pointer;\n  width: 8rem;\n}\n.nav__tab {\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  align-items: flex-end;\n}\n.nav__tab * {\n  width: 7rem;\n  height: 2rem;\n  margin: 2rem 3rem;\n  border-radius: 2rem;\n  border-style: none;\n  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);\n  transition: 0.5s;\n}\n.nav__tab *:hover {\n  background-color: rgba(161, 163, 36, 0.801);\n  box-shadow: none;\n  font-size: 1.3rem;\n  cursor: pointer;\n}\n.nav__tab *:focus {\n  height: 2.2rem;\n  font-size: 1.1rem;\n  background-color: rgba(161, 163, 36, 0.801);\n}\n\n.about {\n  font-size: 1.5rem;\n  color: white;\n}\n.about__ramen {\n  width: 100%;\n  height: 30rem;\n  display: block;\n  padding: 2rem 0;\n}\n.about__ramen__pic {\n  float: left;\n  width: 25rem;\n  height: 25rem;\n  margin-left: 15rem;\n  margin-right: 1rem;\n  border-radius: 4rem;\n}\n.about__ramen__para {\n  margin-right: 15rem;\n  text-indent: 3rem;\n  text-align: justify;\n}\n.about__sushi {\n  width: 100%;\n  height: 30rem;\n  display: block;\n  padding: 2rem 0;\n}\n.about__sushi__pic {\n  float: right;\n  width: 25rem;\n  height: 25rem;\n  margin-left: 1rem;\n  margin-right: 15rem;\n  border-radius: 4rem;\n}\n.about__sushi__para {\n  margin-left: 15rem;\n  text-indent: 3rem;\n  text-align: justify;\n}\n\n.menu__title {\n  line-height: 4rem;\n  width: 80%;\n  margin: 0.5rem auto;\n  transform: skewX(-30deg);\n  text-align: center;\n  font-size: 2rem;\n  font-weight: bold;\n  color: #d6b354;\n  background-color: #0f1c3e;\n  border-radius: 1rem;\n}\n\n.menu__ramen {\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n  place-items: center;\n  margin: 0 auto;\n  border-radius: 1rem;\n  border-style: solid;\n  border-width: 2px;\n  border-color: rgba(0, 0, 0, 0.1);\n  width: 85%;\n  padding: 1rem;\n  background-color: rgba(0, 0, 0, 0.1);\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);\n}\n.menu__ramen__1 {\n  width: 20rem;\n  height: 20rem;\n  margin-bottom: 2rem;\n  transition: all 1.5s;\n  transition-delay: 0.5s;\n}\n.menu__ramen__1:hover {\n  background-color: rgba(221, 208, 143, 0.829);\n  border-radius: 4rem;\n  cursor: pointer;\n}\n.menu__ramen__1:hover :first-child {\n  border-radius: 4rem;\n  width: 14rem;\n  margin-top: 1rem;\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);\n}\n.menu__ramen__1:hover :last-child {\n  font-size: 1.5rem;\n  display: block;\n  color: black;\n}\n.menu__ramen__2 {\n  width: 20rem;\n  height: 20rem;\n  margin-bottom: 2rem;\n  transition: all 1.5s;\n  transition-delay: 0.5s;\n}\n.menu__ramen__2:hover {\n  background-color: rgba(221, 208, 143, 0.829);\n  border-radius: 4rem;\n  cursor: pointer;\n}\n.menu__ramen__2:hover :first-child {\n  border-radius: 4rem;\n  width: 14rem;\n  margin-top: 1rem;\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);\n}\n.menu__ramen__2:hover :last-child {\n  font-size: 1.5rem;\n  display: block;\n  color: black;\n}\n.menu__ramen__3 {\n  width: 20rem;\n  height: 20rem;\n  margin-bottom: 2rem;\n  transition: all 1.5s;\n  transition-delay: 0.5s;\n}\n.menu__ramen__3:hover {\n  background-color: rgba(221, 208, 143, 0.829);\n  border-radius: 4rem;\n  cursor: pointer;\n}\n.menu__ramen__3:hover :first-child {\n  border-radius: 4rem;\n  width: 14rem;\n  margin-top: 1rem;\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);\n}\n.menu__ramen__3:hover :last-child {\n  font-size: 1.5rem;\n  display: block;\n  color: black;\n}\n.menu__ramen__4 {\n  width: 20rem;\n  height: 20rem;\n  margin-bottom: 2rem;\n  transition: all 1.5s;\n  transition-delay: 0.5s;\n}\n.menu__ramen__4:hover {\n  background-color: rgba(221, 208, 143, 0.829);\n  border-radius: 4rem;\n  cursor: pointer;\n}\n.menu__ramen__4:hover :first-child {\n  border-radius: 4rem;\n  width: 14rem;\n  margin-top: 1rem;\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);\n}\n.menu__ramen__4:hover :last-child {\n  font-size: 1.5rem;\n  display: block;\n  color: black;\n}\n.menu__ramen__img {\n  display: block;\n  width: 20rem;\n  margin: 0 auto 0 auto;\n  border-radius: 1rem;\n  transition: all 1.5s;\n}\n.menu__ramen__des {\n  display: none;\n  margin: 0.2rem 0.5rem;\n  color: rgba(255, 255, 255, 0);\n  font-size: 1rem;\n  transition-property: all;\n  transition-duration: 2s;\n  transition-delay: 1s;\n}\n\n.menu__sushi {\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n  place-items: center;\n  margin: 0 auto;\n  border-radius: 1rem;\n  width: 85%;\n  padding: 1rem;\n  background-color: rgba(0, 0, 0, 0.1);\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);\n}\n.menu__sushi__1 {\n  width: 20rem;\n  height: 20rem;\n  margin-bottom: 2rem;\n  transition: all 1.5s;\n  transition-delay: 0.5s;\n}\n.menu__sushi__1:hover {\n  background-color: rgba(221, 208, 143, 0.829);\n  border-radius: 4rem;\n}\n.menu__sushi__1:hover :first-child {\n  border-radius: 4rem;\n  width: 14rem;\n  height: 14rem;\n  margin-top: 1rem;\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);\n}\n.menu__sushi__1:hover :last-child {\n  font-size: 1.5rem;\n  display: block;\n  color: black;\n}\n.menu__sushi__2 {\n  width: 20rem;\n  height: 20rem;\n  margin-bottom: 2rem;\n  transition: all 1.5s;\n  transition-delay: 0.5s;\n}\n.menu__sushi__2:hover {\n  background-color: rgba(221, 208, 143, 0.829);\n  border-radius: 4rem;\n}\n.menu__sushi__2:hover :first-child {\n  border-radius: 4rem;\n  width: 14rem;\n  height: 14rem;\n  margin-top: 1rem;\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);\n}\n.menu__sushi__2:hover :last-child {\n  font-size: 1.5rem;\n  display: block;\n  color: black;\n}\n.menu__sushi__3 {\n  width: 20rem;\n  height: 20rem;\n  margin-bottom: 2rem;\n  transition: all 1.5s;\n  transition-delay: 0.5s;\n}\n.menu__sushi__3:hover {\n  background-color: rgba(221, 208, 143, 0.829);\n  border-radius: 4rem;\n}\n.menu__sushi__3:hover :first-child {\n  border-radius: 4rem;\n  width: 14rem;\n  height: 14rem;\n  margin-top: 1rem;\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);\n}\n.menu__sushi__3:hover :last-child {\n  font-size: 1.5rem;\n  display: block;\n  color: black;\n}\n.menu__sushi__4 {\n  width: 20rem;\n  height: 20rem;\n  margin-bottom: 2rem;\n  transition: all 1.5s;\n  transition-delay: 0.5s;\n}\n.menu__sushi__4:hover {\n  background-color: rgba(221, 208, 143, 0.829);\n  border-radius: 4rem;\n}\n.menu__sushi__4:hover :first-child {\n  border-radius: 4rem;\n  width: 14rem;\n  height: 14rem;\n  margin-top: 1rem;\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);\n}\n.menu__sushi__4:hover :last-child {\n  font-size: 1.5rem;\n  display: block;\n  color: black;\n}\n.menu__sushi__img {\n  display: block;\n  width: 20rem;\n  height: 20rem;\n  margin: 0 auto 0 auto;\n  border-radius: 1rem;\n  transition: all 1.5s;\n}\n.menu__sushi__des {\n  display: none;\n  margin: 0.2rem 0.5rem;\n  color: rgba(255, 255, 255, 0);\n  font-size: 1rem;\n  transition-property: all;\n  transition-duration: 2s;\n  transition-delay: 1s;\n}\n\n.contact {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 2rem auto;\n}\n.contact__information {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: column;\n  width: 25rem;\n  height: 20rem;\n  font-size: 1.5rem;\n  margin: 0.2rem 0.5rem;\n  border-width: 0.1rem;\n  border-color: brown;\n  border-style: double;\n}\n.contact__information * {\n  margin: 0.4rem 0.3rem;\n  color: white;\n}\n.contact__embed {\n  width: 40rem;\n}\n.contact__embed__map {\n  width: inherit;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./dist/css/main.css":
/*!***************************!*\
  !*** ./dist/css/main.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./dist/css/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/about-tab.js":
/*!**************************!*\
  !*** ./src/about-tab.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_ramen_about_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/ramen-about.jpg */ "./src/img/ramen-about.jpg");
/* harmony import */ var _img_sushi_about_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/sushi-about.jpg */ "./src/img/sushi-about.jpg");


function about() {
  let aboutDiv = document.createElement('div');

  let aboutRamen = document.createElement('div');
  let aboutPicRamen = new Image();
  let aboutParaRamen = document.createElement('p');
  aboutParaRamen.innerHTML = 'Lorem ipsum dolor sit amet, nostrum constituto te sit, has ea eirmod invenire. Habeo noster ancillae ad duo, eum idque nostrud abhorreant id, ornatus noluisse pro no. Qui ne zril delenit. Ocurreret accusamus nam at. Eam cu elitr liberavisse, nec at feugait oportere, cu audire epicurei periculis eos. Feugiat laboramus complectitur eu per, pro ei aperiri aliquando. Erant consectetuer et sea, at vidisse aliquando his.';
  aboutPicRamen.src = _img_ramen_about_jpg__WEBPACK_IMPORTED_MODULE_0__;
  aboutRamen.appendChild(aboutPicRamen);
  aboutRamen.appendChild(aboutParaRamen);
  aboutDiv.appendChild(aboutRamen);

  let aboutSushi = document.createElement('div');
  let aboutPicSushi = new Image();
  let aboutParaSushi = document.createElement('p');
  aboutPicSushi.src = _img_sushi_about_jpg__WEBPACK_IMPORTED_MODULE_1__;
  aboutParaSushi.innerHTML = 'Et duo mentitum consetetur, ea per vivendo officiis. Per aeterno fierent inciderint et, pri eu tantas comprehensam. At case nulla eum, an pri nulla tempor maiorum. Eius posidonium pri cu, ad vix patrioque expetendis necessitatibus. Vis corpora accumsan verterem an, vis quot perpetua comprehensam ad. An assum suscipit vel, an saepe scripserit contentiones duo, civibus deleniti ut per. Usu vero reque graece eu.';
  aboutSushi.appendChild(aboutPicSushi);
  aboutSushi.appendChild(aboutParaSushi);
  aboutDiv.appendChild(aboutSushi);
  // class adding
  aboutDiv.classList.add('about');
  aboutRamen.classList.add('about__ramen')
  aboutPicRamen.classList.add('about__ramen__pic');
  aboutParaRamen.classList.add('about__ramen__para');
  aboutSushi.classList.add('about__sushi')
  aboutPicSushi.classList.add('about__sushi__pic');
  aboutParaSushi.classList.add('about__sushi__para');

  // end of class adding
  

  return aboutDiv;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (about);

/***/ }),

/***/ "./src/contact-tab.js":
/*!****************************!*\
  !*** ./src/contact-tab.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_map_contact_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/map-contact.png */ "./src/img/map-contact.png");

function contact(){
  let contactDiv = document.createElement('div');
  let textDiv = document.createElement('div');
  let embedMapDiv = document.createElement('div');
  let name = document.createElement('p');
  let address = document.createElement('p');
  let phone = document.createElement('p');
  let email = document.createElement('p');
  let map = document.createElement('div');

  name.innerHTML = "TP's Ramen and sushi";
  address.innerHTML = 'Addres: this is an address';
  phone.innerHTML='Phone: (443)-111-2222';
  email.innerHTML='Email: tprs@gmail.com';
  map = new Image();
  map.src = _img_map_contact_png__WEBPACK_IMPORTED_MODULE_0__;

  
  textDiv.appendChild(name);
  textDiv.appendChild(address);
  textDiv.appendChild(phone);
  textDiv.appendChild(email);
  embedMapDiv.appendChild(map);
  contactDiv.appendChild(textDiv);
  contactDiv.appendChild(embedMapDiv);
  // class adding
  contactDiv.classList.add('contact');
  textDiv.classList.add('contact__information');
  embedMapDiv.classList.add('contact__embed');
  name.classList.add('contact__information__name');
  address.classList.add('contact__information__address');
  phone.classList.add('contact__information__phone');
  email.classList.add('contact__information__email');
  map.classList.add('contact__embed__map');
  
  // end of class adding
  return contactDiv;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);

/***/ }),

/***/ "./src/img/1-menu-ramen.jpg":
/*!**********************************!*\
  !*** ./src/img/1-menu-ramen.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6a2f891404f86ed351b1.jpg";

/***/ }),

/***/ "./src/img/1-menu-sushi.jpg":
/*!**********************************!*\
  !*** ./src/img/1-menu-sushi.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dd79bd7f105e7e4ecf86.jpg";

/***/ }),

/***/ "./src/img/2-menu-ramen.png":
/*!**********************************!*\
  !*** ./src/img/2-menu-ramen.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a5a28cf382d24c4ad40d.png";

/***/ }),

/***/ "./src/img/2-menu-sushi.jpg":
/*!**********************************!*\
  !*** ./src/img/2-menu-sushi.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "22f470a7ff25034d6289.jpg";

/***/ }),

/***/ "./src/img/3-menu-ramen.png":
/*!**********************************!*\
  !*** ./src/img/3-menu-ramen.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "62c035ad01b880358b0d.png";

/***/ }),

/***/ "./src/img/3-menu-sushi.jpg":
/*!**********************************!*\
  !*** ./src/img/3-menu-sushi.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cf667c8262e658dffcd0.jpg";

/***/ }),

/***/ "./src/img/4-menu-ramen.jpg":
/*!**********************************!*\
  !*** ./src/img/4-menu-ramen.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c67d40391f7223e20ebf.jpg";

/***/ }),

/***/ "./src/img/4-menu-sushi.jpg":
/*!**********************************!*\
  !*** ./src/img/4-menu-sushi.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "aaabca8f63109c1506a7.jpg";

/***/ }),

/***/ "./src/img/map-contact.png":
/*!*********************************!*\
  !*** ./src/img/map-contact.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b77b3790d06d17a4263a.png";

/***/ }),

/***/ "./src/img/nav-bg.jpg":
/*!****************************!*\
  !*** ./src/img/nav-bg.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5597e1d5bb7a1177890e.jpg";

/***/ }),

/***/ "./src/img/ramen-about.jpg":
/*!*********************************!*\
  !*** ./src/img/ramen-about.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "55eaf5feef7d25187471.jpg";

/***/ }),

/***/ "./src/img/ramen-logo.png":
/*!********************************!*\
  !*** ./src/img/ramen-logo.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4bc007dfe3481c545a63.png";

/***/ }),

/***/ "./src/img/sushi-about.jpg":
/*!*********************************!*\
  !*** ./src/img/sushi-about.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "afc83599c2b3c1b36f66.jpg";

/***/ }),

/***/ "./src/menu-tab.js":
/*!*************************!*\
  !*** ./src/menu-tab.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _img_1_menu_ramen_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/1-menu-ramen.jpg */ "./src/img/1-menu-ramen.jpg");
/* harmony import */ var _img_2_menu_ramen_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/2-menu-ramen.png */ "./src/img/2-menu-ramen.png");
/* harmony import */ var _img_3_menu_ramen_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/3-menu-ramen.png */ "./src/img/3-menu-ramen.png");
/* harmony import */ var _img_4_menu_ramen_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/4-menu-ramen.jpg */ "./src/img/4-menu-ramen.jpg");
/* harmony import */ var _img_1_menu_sushi_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/1-menu-sushi.jpg */ "./src/img/1-menu-sushi.jpg");
/* harmony import */ var _img_2_menu_sushi_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/2-menu-sushi.jpg */ "./src/img/2-menu-sushi.jpg");
/* harmony import */ var _img_3_menu_sushi_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/3-menu-sushi.jpg */ "./src/img/3-menu-sushi.jpg");
/* harmony import */ var _img_4_menu_sushi_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/4-menu-sushi.jpg */ "./src/img/4-menu-sushi.jpg");








const RAMEN_IMGS = [_img_1_menu_ramen_jpg__WEBPACK_IMPORTED_MODULE_0__, _img_2_menu_ramen_png__WEBPACK_IMPORTED_MODULE_1__, _img_3_menu_ramen_png__WEBPACK_IMPORTED_MODULE_2__, _img_4_menu_ramen_jpg__WEBPACK_IMPORTED_MODULE_3__];
const SUSHI_IMGS = [_img_1_menu_sushi_jpg__WEBPACK_IMPORTED_MODULE_4__, _img_2_menu_sushi_jpg__WEBPACK_IMPORTED_MODULE_5__, _img_3_menu_sushi_jpg__WEBPACK_IMPORTED_MODULE_6__, _img_4_menu_sushi_jpg__WEBPACK_IMPORTED_MODULE_7__];
function menu() {
  let menuDiv = document.createElement('div');
  let menuRamen = document.createElement('div');
  let menuSushi = document.createElement('div');

  let ramenTitle = document.createElement('h2');
  ramenTitle.innerHTML = 'Ramen';
  menuDiv.appendChild(ramenTitle);
  for (let i = 1; i <= 4; i++) {
    let ramenDiv = document.createElement('div');
    let ramenImg = new Image();
    ramenImg.src = RAMEN_IMGS[i - 1];
    let ramenDescription = document.createElement('p');
    ramenDescription.innerHTML = 'Description ramen' + i;
    ramenDiv.appendChild(ramenImg);
    ramenDiv.appendChild(ramenDescription);
    menuRamen.appendChild(ramenDiv);

    // class adding
    ramenDiv.classList.add('menu__ramen__' + i);
    ramenImg.classList.add('menu__ramen__img');
    ramenDescription.classList.add('menu__ramen__des');
    // end of class adding
  }
  menuDiv.appendChild(menuRamen);

  let sushiTitle = document.createElement('h2');
  sushiTitle.innerHTML = 'Sushi';
  menuDiv.appendChild(sushiTitle);
  for (let i = 1; i <= 4; i++) {
    let sushiDiv = document.createElement('div');
    let sushiImg = new Image();
    sushiImg.src = SUSHI_IMGS[i - 1];
    let sushiDescription = document.createElement('p');
    sushiDescription.innerHTML = 'Description sushi' + i;
    sushiDiv.appendChild(sushiImg);
    sushiDiv.appendChild(sushiDescription);
    menuSushi.appendChild(sushiDiv);
    // class adding
    sushiDiv.classList.add('menu__sushi__' + i);
    sushiImg.classList.add('menu__sushi__img');
    sushiDescription.classList.add('menu__sushi__des');
    // end of class adding
  }
  menuDiv.appendChild(menuSushi);

  // class adding
  menuDiv.classList.add('menu');
  menuRamen.classList.add('menu__ramen');
  menuSushi.classList.add('menu__sushi')
  ramenTitle.classList.add('menu__title');
  sushiTitle.classList.add('menu__title');

  // end of class adding
  return menuDiv;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ }),

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _about_tab_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-tab.js */ "./src/about-tab.js");
/* harmony import */ var _menu_tab_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-tab.js */ "./src/menu-tab.js");
/* harmony import */ var _contact_tab_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-tab.js */ "./src/contact-tab.js");
/* harmony import */ var _img_nav_bg_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/nav-bg.jpg */ "./src/img/nav-bg.jpg");
/* harmony import */ var _src_img_ramen_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/img/ramen-logo.png */ "./src/img/ramen-logo.png");






function navbar() {
  const CONTENT = document.getElementById('content');
  let navBar = document.createElement('div');
  let logo = document.createElement('div');
  let icon = new Image();
  let tabDiv = document.createElement('div');
  let aboutTab = document.createElement('button');
  let menuTab = document.createElement('button');
  let contactTab = document.createElement('button');

  aboutTab.innerHTML = 'ABOUT';
  aboutTab.addEventListener('click', (e) => {
    CONTENT.removeChild(CONTENT.lastChild);
    CONTENT.appendChild((0,_about_tab_js__WEBPACK_IMPORTED_MODULE_0__.default)());
  })
  menuTab.innerHTML = 'MENU';
  menuTab.addEventListener('click', (e) => {
    CONTENT.removeChild(CONTENT.lastChild);
    CONTENT.appendChild((0,_menu_tab_js__WEBPACK_IMPORTED_MODULE_1__.default)());
  })
  contactTab.innerHTML = 'CONTACT';
  contactTab.addEventListener('click', (e) => {
    CONTENT.removeChild(CONTENT.lastChild);
    CONTENT.appendChild((0,_contact_tab_js__WEBPACK_IMPORTED_MODULE_2__.default)());
  })
  // can added img here
  navBar.style.backgroundImage = `url(${_img_nav_bg_jpg__WEBPACK_IMPORTED_MODULE_3__})`;
  icon.src = _src_img_ramen_logo_png__WEBPACK_IMPORTED_MODULE_4__;
  logo.appendChild(icon);
  tabDiv.appendChild(aboutTab);
  tabDiv.appendChild(menuTab);
  tabDiv.appendChild(contactTab);
  navBar.appendChild(logo);
  navBar.appendChild(tabDiv);
  // class adding
  navBar.classList.add('nav');
  logo.classList.add('nav__logo');
  icon.classList.add('nav__logo__icon');
  tabDiv.classList.add('nav__tab');
  aboutTab.classList.add('nav__tab__about');
  menuTab.classList.add('nav__tab__menu');
  contactTab.classList.add('nav__tab__contact');
  // end of class adding

  console.log(_img_nav_bg_jpg__WEBPACK_IMPORTED_MODULE_3__);
  return navBar;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navbar);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar.js */ "./src/navbar.js");
/* harmony import */ var _about_tab_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-tab.js */ "./src/about-tab.js");
/* harmony import */ var _menu_tab_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-tab.js */ "./src/menu-tab.js");
/* harmony import */ var _contact_tab_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-tab.js */ "./src/contact-tab.js");
/* harmony import */ var _dist_css_main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dist/css/main.css */ "./dist/css/main.css");





// import './scss/index.scss'
function main(){
  const CONTENT = document.getElementById('content');
  CONTENT.appendChild((0,_navbar_js__WEBPACK_IMPORTED_MODULE_0__.default)());
  CONTENT.appendChild((0,_about_tab_js__WEBPACK_IMPORTED_MODULE_1__.default)());
}

main();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbG9uZWRfcmVzdGF1cmFudF9wYWdlLy4vZGlzdC9jc3MvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vY2xvbmVkX3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vY2xvbmVkX3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL2Nsb25lZF9yZXN0YXVyYW50X3BhZ2UvLi9kaXN0L2Nzcy9tYWluLmNzcz9hN2I1Iiwid2VicGFjazovL2Nsb25lZF9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY2xvbmVkX3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY2xvbmVkX3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jbG9uZWRfcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Nsb25lZF9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9jbG9uZWRfcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vY2xvbmVkX3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9hYm91dC10YWIuanMiLCJ3ZWJwYWNrOi8vY2xvbmVkX3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9jb250YWN0LXRhYi5qcyIsIndlYnBhY2s6Ly9jbG9uZWRfcmVzdGF1cmFudF9wYWdlLy4vc3JjL21lbnUtdGFiLmpzIiwid2VicGFjazovL2Nsb25lZF9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbmF2YmFyLmpzIiwid2VicGFjazovL2Nsb25lZF9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2xvbmVkX3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jbG9uZWRfcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jbG9uZWRfcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vY2xvbmVkX3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nsb25lZF9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jbG9uZWRfcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2Nsb25lZF9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDeUg7QUFDN0I7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLDJvQkFBMm9CLGNBQWMsZUFBZSxjQUFjLG9CQUFvQixrQkFBa0IsNkJBQTZC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QVksT0FBTyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFB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LCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxub2wsIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGUsIHEge1xcbiAgcXVvdGVzOiBub25lO1xcbn1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGNvbnRlbnQ6IG5vbmU7XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOSk7XFxufVxcblxcbi5uYXYge1xcbiAgY29sb3I6IHJlZDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIDdmcjtcXG4gIGhlaWdodDogMjVyZW07XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDMwJTtcXG59XFxuLm5hdl9fbG9nbyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuLm5hdl9fbG9nb19faWNvbiB7XFxuICB3aWR0aDogMTByZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgdHJhbnNpdGlvbjogMC43cztcXG59XFxuLm5hdl9fbG9nb19faWNvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogOHJlbTtcXG59XFxuLm5hdl9fdGFiIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuLm5hdl9fdGFiICoge1xcbiAgd2lkdGg6IDdyZW07XFxuICBoZWlnaHQ6IDJyZW07XFxuICBtYXJnaW46IDJyZW0gM3JlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDJyZW07XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBib3gtc2hhZG93OiA1cHggNXB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgdHJhbnNpdGlvbjogMC41cztcXG59XFxuLm5hdl9fdGFiICo6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjEsIDE2MywgMzYsIDAuODAxKTtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm5hdl9fdGFiICo6Zm9jdXMge1xcbiAgaGVpZ2h0OiAyLjJyZW07XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTYxLCAxNjMsIDM2LCAwLjgwMSk7XFxufVxcblxcbi5hYm91dCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmFib3V0X19yYW1lbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzByZW07XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDJyZW0gMDtcXG59XFxuLmFib3V0X19yYW1lbl9fcGljIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgd2lkdGg6IDI1cmVtO1xcbiAgaGVpZ2h0OiAyNXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxNXJlbTtcXG4gIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDRyZW07XFxufVxcbi5hYm91dF9fcmFtZW5fX3BhcmEge1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXJlbTtcXG4gIHRleHQtaW5kZW50OiAzcmVtO1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuLmFib3V0X19zdXNoaSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzByZW07XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmc6IDJyZW0gMDtcXG59XFxuLmFib3V0X19zdXNoaV9fcGljIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIHdpZHRoOiAyNXJlbTtcXG4gIGhlaWdodDogMjVyZW07XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gIG1hcmdpbi1yaWdodDogMTVyZW07XFxuICBib3JkZXItcmFkaXVzOiA0cmVtO1xcbn1cXG4uYWJvdXRfX3N1c2hpX19wYXJhIHtcXG4gIG1hcmdpbi1sZWZ0OiAxNXJlbTtcXG4gIHRleHQtaW5kZW50OiAzcmVtO1xcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuXFxuLm1lbnVfX3RpdGxlIHtcXG4gIGxpbmUtaGVpZ2h0OiA0cmVtO1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogMC41cmVtIGF1dG87XFxuICB0cmFuc2Zvcm06IHNrZXdYKC0zMGRlZyk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDJyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjZDZiMzU0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBmMWMzZTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi5tZW51X19yYW1lbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgYXV0byk7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gIGJvcmRlci13aWR0aDogMnB4O1xcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICB3aWR0aDogODUlO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG59XFxuLm1lbnVfX3JhbWVuX18xIHtcXG4gIHdpZHRoOiAyMHJlbTtcXG4gIGhlaWdodDogMjByZW07XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDEuNXM7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjVzO1xcbn1cXG4ubWVudV9fcmFtZW5fXzE6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjEsIDIwOCwgMTQzLCAwLjgyOSk7XFxuICBib3JkZXItcmFkaXVzOiA0cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubWVudV9fcmFtZW5fXzE6aG92ZXIgOmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDRyZW07XFxuICB3aWR0aDogMTRyZW07XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuLm1lbnVfX3JhbWVuX18xOmhvdmVyIDpsYXN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbi5tZW51X19yYW1lbl9fMiB7XFxuICB3aWR0aDogMjByZW07XFxuICBoZWlnaHQ6IDIwcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAxLjVzO1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMC41cztcXG59XFxuLm1lbnVfX3JhbWVuX18yOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIxLCAyMDgsIDE0MywgMC44MjkpO1xcbiAgYm9yZGVyLXJhZGl1czogNHJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1lbnVfX3JhbWVuX18yOmhvdmVyIDpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXItcmFkaXVzOiA0cmVtO1xcbiAgd2lkdGg6IDE0cmVtO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcbi5tZW51X19yYW1lbl9fMjpob3ZlciA6bGFzdC1jaGlsZCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG4ubWVudV9fcmFtZW5fXzMge1xcbiAgd2lkdGg6IDIwcmVtO1xcbiAgaGVpZ2h0OiAyMHJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMS41cztcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuNXM7XFxufVxcbi5tZW51X19yYW1lbl9fMzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMSwgMjA4LCAxNDMsIDAuODI5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDRyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5tZW51X19yYW1lbl9fMzpob3ZlciA6Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLXJhZGl1czogNHJlbTtcXG4gIHdpZHRoOiAxNHJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG4ubWVudV9fcmFtZW5fXzM6aG92ZXIgOmxhc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLm1lbnVfX3JhbWVuX180IHtcXG4gIHdpZHRoOiAyMHJlbTtcXG4gIGhlaWdodDogMjByZW07XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDEuNXM7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjVzO1xcbn1cXG4ubWVudV9fcmFtZW5fXzQ6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjEsIDIwOCwgMTQzLCAwLjgyOSk7XFxuICBib3JkZXItcmFkaXVzOiA0cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubWVudV9fcmFtZW5fXzQ6aG92ZXIgOmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDRyZW07XFxuICB3aWR0aDogMTRyZW07XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuLm1lbnVfX3JhbWVuX180OmhvdmVyIDpsYXN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbi5tZW51X19yYW1lbl9faW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDIwcmVtO1xcbiAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAxLjVzO1xcbn1cXG4ubWVudV9fcmFtZW5fX2RlcyB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbWFyZ2luOiAwLjJyZW0gMC41cmVtO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAycztcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDFzO1xcbn1cXG5cXG4ubWVudV9fc3VzaGkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIGF1dG8pO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHdpZHRoOiA4NSU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG4ubWVudV9fc3VzaGlfXzEge1xcbiAgd2lkdGg6IDIwcmVtO1xcbiAgaGVpZ2h0OiAyMHJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMS41cztcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuNXM7XFxufVxcbi5tZW51X19zdXNoaV9fMTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMSwgMjA4LCAxNDMsIDAuODI5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDRyZW07XFxufVxcbi5tZW51X19zdXNoaV9fMTpob3ZlciA6Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLXJhZGl1czogNHJlbTtcXG4gIHdpZHRoOiAxNHJlbTtcXG4gIGhlaWdodDogMTRyZW07XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuLm1lbnVfX3N1c2hpX18xOmhvdmVyIDpsYXN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbi5tZW51X19zdXNoaV9fMiB7XFxuICB3aWR0aDogMjByZW07XFxuICBoZWlnaHQ6IDIwcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAxLjVzO1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMC41cztcXG59XFxuLm1lbnVfX3N1c2hpX18yOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIxLCAyMDgsIDE0MywgMC44MjkpO1xcbiAgYm9yZGVyLXJhZGl1czogNHJlbTtcXG59XFxuLm1lbnVfX3N1c2hpX18yOmhvdmVyIDpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXItcmFkaXVzOiA0cmVtO1xcbiAgd2lkdGg6IDE0cmVtO1xcbiAgaGVpZ2h0OiAxNHJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG4ubWVudV9fc3VzaGlfXzI6aG92ZXIgOmxhc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLm1lbnVfX3N1c2hpX18zIHtcXG4gIHdpZHRoOiAyMHJlbTtcXG4gIGhlaWdodDogMjByZW07XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDEuNXM7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjVzO1xcbn1cXG4ubWVudV9fc3VzaGlfXzM6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjEsIDIwOCwgMTQzLCAwLjgyOSk7XFxuICBib3JkZXItcmFkaXVzOiA0cmVtO1xcbn1cXG4ubWVudV9fc3VzaGlfXzM6aG92ZXIgOmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDRyZW07XFxuICB3aWR0aDogMTRyZW07XFxuICBoZWlnaHQ6IDE0cmVtO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcbi5tZW51X19zdXNoaV9fMzpob3ZlciA6bGFzdC1jaGlsZCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG4ubWVudV9fc3VzaGlfXzQge1xcbiAgd2lkdGg6IDIwcmVtO1xcbiAgaGVpZ2h0OiAyMHJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMS41cztcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuNXM7XFxufVxcbi5tZW51X19zdXNoaV9fNDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMSwgMjA4LCAxNDMsIDAuODI5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDRyZW07XFxufVxcbi5tZW51X19zdXNoaV9fNDpob3ZlciA6Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLXJhZGl1czogNHJlbTtcXG4gIHdpZHRoOiAxNHJlbTtcXG4gIGhlaWdodDogMTRyZW07XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuLm1lbnVfX3N1c2hpX180OmhvdmVyIDpsYXN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbi5tZW51X19zdXNoaV9faW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDIwcmVtO1xcbiAgaGVpZ2h0OiAyMHJlbTtcXG4gIG1hcmdpbjogMCBhdXRvIDAgYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMS41cztcXG59XFxuLm1lbnVfX3N1c2hpX19kZXMge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG1hcmdpbjogMC4ycmVtIDAuNXJlbTtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMnM7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAxcztcXG59XFxuXFxuLmNvbnRhY3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMnJlbSBhdXRvO1xcbn1cXG4uY29udGFjdF9faW5mb3JtYXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDI1cmVtO1xcbiAgaGVpZ2h0OiAyMHJlbTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbWFyZ2luOiAwLjJyZW0gMC41cmVtO1xcbiAgYm9yZGVyLXdpZHRoOiAwLjFyZW07XFxuICBib3JkZXItY29sb3I6IGJyb3duO1xcbiAgYm9yZGVyLXN0eWxlOiBkb3VibGU7XFxufVxcbi5jb250YWN0X19pbmZvcm1hdGlvbiAqIHtcXG4gIG1hcmdpbjogMC40cmVtIDAuM3JlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmNvbnRhY3RfX2VtYmVkIHtcXG4gIHdpZHRoOiA0MHJlbTtcXG59XFxuLmNvbnRhY3RfX2VtYmVkX19tYXAge1xcbiAgd2lkdGg6IGluaGVyaXQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2Rpc3QvY3NzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQztBQUNEOzs7Ozs7Ozs7Ozs7O0VBYUUsU0FBUztFQUNULFVBQVU7RUFDVixTQUFTO0VBQ1QsZUFBZTtFQUNmLGFBQWE7RUFDYix3QkFBd0I7QUFDMUI7O0FBRUEsZ0RBQWdEO0FBQ2hEOztFQUVFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOztFQUVFLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsNEJBQTRCO0VBQzVCLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIsMENBQTBDO0VBQzFDLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLDJDQUEyQztFQUMzQyxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLDJDQUEy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LFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLDJDQUEyQztBQUM3QztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0VBQ1osYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLDZCQUE2QjtFQUM3QixlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsY0FBYztBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG5vbCwgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSwgcSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC45KTtcXG59XFxuXFxuLm5hdiB7XFxuICBjb2xvcjogcmVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgN2ZyO1xcbiAgaGVpZ2h0OiAyNXJlbTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgMzAlO1xcbn1cXG4ubmF2X19sb2dvIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbn1cXG4ubmF2X19sb2dvX19pY29uIHtcXG4gIHdpZHRoOiAxMHJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICB0cmFuc2l0aW9uOiAwLjdzO1xcbn1cXG4ubmF2X19sb2dvX19pY29uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHdpZHRoOiA4cmVtO1xcbn1cXG4ubmF2X190YWIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG4ubmF2X190YWIgKiB7XFxuICB3aWR0aDogN3JlbTtcXG4gIGhlaWdodDogMnJlbTtcXG4gIG1hcmdpbjogMnJlbSAzcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIGJveC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICB0cmFuc2l0aW9uOiAwLjVzO1xcbn1cXG4ubmF2X190YWIgKjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE2MSwgMTYzLCAzNiwgMC44MDEpO1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubmF2X190YWIgKjpmb2N1cyB7XFxuICBoZWlnaHQ6IDIuMnJlbTtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNjEsIDE2MywgMzYsIDAuODAxKTtcXG59XFxuXFxuLmFib3V0IHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uYWJvdXRfX3JhbWVuIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMHJlbTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMnJlbSAwO1xcbn1cXG4uYWJvdXRfX3JhbWVuX19waWMge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB3aWR0aDogMjVyZW07XFxuICBoZWlnaHQ6IDI1cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDE1cmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNHJlbTtcXG59XFxuLmFib3V0X19yYW1lbl9fcGFyYSB7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cmVtO1xcbiAgdGV4dC1pbmRlbnQ6IDNyZW07XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG4uYWJvdXRfX3N1c2hpIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMHJlbTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMnJlbSAwO1xcbn1cXG4uYWJvdXRfX3N1c2hpX19waWMge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgd2lkdGg6IDI1cmVtO1xcbiAgaGVpZ2h0OiAyNXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDRyZW07XFxufVxcbi5hYm91dF9fc3VzaGlfX3BhcmEge1xcbiAgbWFyZ2luLWxlZnQ6IDE1cmVtO1xcbiAgdGV4dC1pbmRlbnQ6IDNyZW07XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG5cXG4ubWVudV9fdGl0bGUge1xcbiAgbGluZS1oZWlnaHQ6IDRyZW07XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiAwLjVyZW0gYXV0bztcXG4gIHRyYW5zZm9ybTogc2tld1goLTMwZGVnKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICNkNmIzNTQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYxYzNlO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLm1lbnVfX3JhbWVuIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcXG4gIHdpZHRoOiA4NSU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbn1cXG4ubWVudV9fcmFtZW5fXzEge1xcbiAgd2lkdGg6IDIwcmVtO1xcbiAgaGVpZ2h0OiAyMHJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMS41cztcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuNXM7XFxufVxcbi5tZW51X19yYW1lbl9fMTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMSwgMjA4LCAxNDMsIDAuODI5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDRyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5tZW51X19yYW1lbl9fMTpob3ZlciA6Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLXJhZGl1czogNHJlbTtcXG4gIHdpZHRoOiAxNHJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG4ubWVudV9fcmFtZW5fXzE6aG92ZXIgOmxhc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLm1lbnVfX3JhbWVuX18yIHtcXG4gIHdpZHRoOiAyMHJlbTtcXG4gIGhlaWdodDogMjByZW07XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDEuNXM7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjVzO1xcbn1cXG4ubWVudV9fcmFtZW5fXzI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjEsIDIwOCwgMTQzLCAwLjgyOSk7XFxuICBib3JkZXItcmFkaXVzOiA0cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubWVudV9fcmFtZW5fXzI6aG92ZXIgOmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDRyZW07XFxuICB3aWR0aDogMTRyZW07XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuLm1lbnVfX3JhbWVuX18yOmhvdmVyIDpsYXN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbi5tZW51X19yYW1lbl9fMyB7XFxuICB3aWR0aDogMjByZW07XFxuICBoZWlnaHQ6IDIwcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAxLjVzO1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMC41cztcXG59XFxuLm1lbnVfX3JhbWVuX18zOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIxLCAyMDgsIDE0MywgMC44MjkpO1xcbiAgYm9yZGVyLXJhZGl1czogNHJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLm1lbnVfX3JhbWVuX18zOmhvdmVyIDpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXItcmFkaXVzOiA0cmVtO1xcbiAgd2lkdGg6IDE0cmVtO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcbi5tZW51X19yYW1lbl9fMzpob3ZlciA6bGFzdC1jaGlsZCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG4ubWVudV9fcmFtZW5fXzQge1xcbiAgd2lkdGg6IDIwcmVtO1xcbiAgaGVpZ2h0OiAyMHJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMS41cztcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuNXM7XFxufVxcbi5tZW51X19yYW1lbl9fNDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMSwgMjA4LCAxNDMsIDAuODI5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDRyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5tZW51X19yYW1lbl9fNDpob3ZlciA6Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLXJhZGl1czogNHJlbTtcXG4gIHdpZHRoOiAxNHJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG4ubWVudV9fcmFtZW5fXzQ6aG92ZXIgOmxhc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLm1lbnVfX3JhbWVuX19pbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMjByZW07XFxuICBtYXJnaW46IDAgYXV0byAwIGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDEuNXM7XFxufVxcbi5tZW51X19yYW1lbl9fZGVzIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBtYXJnaW46IDAuMnJlbSAwLjVyZW07XFxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IGFsbDtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDJzO1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMXM7XFxufVxcblxcbi5tZW51X19zdXNoaSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgYXV0byk7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbiAgd2lkdGg6IDg1JTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XFxufVxcbi5tZW51X19zdXNoaV9fMSB7XFxuICB3aWR0aDogMjByZW07XFxuICBoZWlnaHQ6IDIwcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAxLjVzO1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMC41cztcXG59XFxuLm1lbnVfX3N1c2hpX18xOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIxLCAyMDgsIDE0MywgMC44MjkpO1xcbiAgYm9yZGVyLXJhZGl1czogNHJlbTtcXG59XFxuLm1lbnVfX3N1c2hpX18xOmhvdmVyIDpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXItcmFkaXVzOiA0cmVtO1xcbiAgd2lkdGg6IDE0cmVtO1xcbiAgaGVpZ2h0OiAxNHJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG4ubWVudV9fc3VzaGlfXzE6aG92ZXIgOmxhc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLm1lbnVfX3N1c2hpX18yIHtcXG4gIHdpZHRoOiAyMHJlbTtcXG4gIGhlaWdodDogMjByZW07XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDEuNXM7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjVzO1xcbn1cXG4ubWVudV9fc3VzaGlfXzI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjEsIDIwOCwgMTQzLCAwLjgyOSk7XFxuICBib3JkZXItcmFkaXVzOiA0cmVtO1xcbn1cXG4ubWVudV9fc3VzaGlfXzI6aG92ZXIgOmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDRyZW07XFxuICB3aWR0aDogMTRyZW07XFxuICBoZWlnaHQ6IDE0cmVtO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcbi5tZW51X19zdXNoaV9fMjpob3ZlciA6bGFzdC1jaGlsZCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG4ubWVudV9fc3VzaGlfXzMge1xcbiAgd2lkdGg6IDIwcmVtO1xcbiAgaGVpZ2h0OiAyMHJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMS41cztcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuNXM7XFxufVxcbi5tZW51X19zdXNoaV9fMzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMSwgMjA4LCAxNDMsIDAuODI5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDRyZW07XFxufVxcbi5tZW51X19zdXNoaV9fMzpob3ZlciA6Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLXJhZGl1czogNHJlbTtcXG4gIHdpZHRoOiAxNHJlbTtcXG4gIGhlaWdodDogMTRyZW07XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuLm1lbnVfX3N1c2hpX18zOmhvdmVyIDpsYXN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbi5tZW51X19zdXNoaV9fNCB7XFxuICB3aWR0aDogMjByZW07XFxuICBoZWlnaHQ6IDIwcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAxLjVzO1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMC41cztcXG59XFxuLm1lbnVfX3N1c2hpX180OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIxLCAyMDgsIDE0MywgMC44MjkpO1xcbiAgYm9yZGVyLXJhZGl1czogNHJlbTtcXG59XFxuLm1lbnVfX3N1c2hpX180OmhvdmVyIDpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXItcmFkaXVzOiA0cmVtO1xcbiAgd2lkdGg6IDE0cmVtO1xcbiAgaGVpZ2h0OiAxNHJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG4ubWVudV9fc3VzaGlfXzQ6aG92ZXIgOmxhc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLm1lbnVfX3N1c2hpX19pbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMjByZW07XFxuICBoZWlnaHQ6IDIwcmVtO1xcbiAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAxLjVzO1xcbn1cXG4ubWVudV9fc3VzaGlfX2RlcyB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbWFyZ2luOiAwLjJyZW0gMC41cmVtO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAycztcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDFzO1xcbn1cXG5cXG4uY29udGFjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAycmVtIGF1dG87XFxufVxcbi5jb250YWN0X19pbmZvcm1hdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMjVyZW07XFxuICBoZWlnaHQ6IDIwcmVtO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBtYXJnaW46IDAuMnJlbSAwLjVyZW07XFxuICBib3JkZXItd2lkdGg6IDAuMXJlbTtcXG4gIGJvcmRlci1jb2xvcjogYnJvd247XFxuICBib3JkZXItc3R5bGU6IGRvdWJsZTtcXG59XFxuLmNvbnRhY3RfX2luZm9ybWF0aW9uICoge1xcbiAgbWFyZ2luOiAwLjRyZW0gMC4zcmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uY29udGFjdF9fZW1iZWQge1xcbiAgd2lkdGg6IDQwcmVtO1xcbn1cXG4uY29udGFjdF9fZW1iZWRfX21hcCB7XFxuICB3aWR0aDogaW5oZXJpdDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHJhbWVuSW1nIGZyb20gJy4vaW1nL3JhbWVuLWFib3V0LmpwZyc7XG5pbXBvcnQgc3VzaGlJbWcgZnJvbSAnLi9pbWcvc3VzaGktYWJvdXQuanBnJztcbmZ1bmN0aW9uIGFib3V0KCkge1xuICBsZXQgYWJvdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBsZXQgYWJvdXRSYW1lbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgYWJvdXRQaWNSYW1lbiA9IG5ldyBJbWFnZSgpO1xuICBsZXQgYWJvdXRQYXJhUmFtZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGFib3V0UGFyYVJhbWVuLmlubmVySFRNTCA9ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgbm9zdHJ1bSBjb25zdGl0dXRvIHRlIHNpdCwgaGFzIGVhIGVpcm1vZCBpbnZlbmlyZS4gSGFiZW8gbm9zdGVyIGFuY2lsbGFlIGFkIGR1bywgZXVtIGlkcXVlIG5vc3RydWQgYWJob3JyZWFudCBpZCwgb3JuYXR1cyBub2x1aXNzZSBwcm8gbm8uIFF1aSBuZSB6cmlsIGRlbGVuaXQuIE9jdXJyZXJldCBhY2N1c2FtdXMgbmFtIGF0LiBFYW0gY3UgZWxpdHIgbGliZXJhdmlzc2UsIG5lYyBhdCBmZXVnYWl0IG9wb3J0ZXJlLCBjdSBhdWRpcmUgZXBpY3VyZWkgcGVyaWN1bGlzIGVvcy4gRmV1Z2lhdCBsYWJvcmFtdXMgY29tcGxlY3RpdHVyIGV1IHBlciwgcHJvIGVpIGFwZXJpcmkgYWxpcXVhbmRvLiBFcmFudCBjb25zZWN0ZXR1ZXIgZXQgc2VhLCBhdCB2aWRpc3NlIGFsaXF1YW5kbyBoaXMuJztcbiAgYWJvdXRQaWNSYW1lbi5zcmMgPSByYW1lbkltZztcbiAgYWJvdXRSYW1lbi5hcHBlbmRDaGlsZChhYm91dFBpY1JhbWVuKTtcbiAgYWJvdXRSYW1lbi5hcHBlbmRDaGlsZChhYm91dFBhcmFSYW1lbik7XG4gIGFib3V0RGl2LmFwcGVuZENoaWxkKGFib3V0UmFtZW4pO1xuXG4gIGxldCBhYm91dFN1c2hpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBhYm91dFBpY1N1c2hpID0gbmV3IEltYWdlKCk7XG4gIGxldCBhYm91dFBhcmFTdXNoaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgYWJvdXRQaWNTdXNoaS5zcmMgPSBzdXNoaUltZztcbiAgYWJvdXRQYXJhU3VzaGkuaW5uZXJIVE1MID0gJ0V0IGR1byBtZW50aXR1bSBjb25zZXRldHVyLCBlYSBwZXIgdml2ZW5kbyBvZmZpY2lpcy4gUGVyIGFldGVybm8gZmllcmVudCBpbmNpZGVyaW50IGV0LCBwcmkgZXUgdGFudGFzIGNvbXByZWhlbnNhbS4gQXQgY2FzZSBudWxsYSBldW0sIGFuIHByaSBudWxsYSB0ZW1wb3IgbWFpb3J1bS4gRWl1cyBwb3NpZG9uaXVtIHByaSBjdSwgYWQgdml4IHBhdHJpb3F1ZSBleHBldGVuZGlzIG5lY2Vzc2l0YXRpYnVzLiBWaXMgY29ycG9yYSBhY2N1bXNhbiB2ZXJ0ZXJlbSBhbiwgdmlzIHF1b3QgcGVycGV0dWEgY29tcHJlaGVuc2FtIGFkLiBBbiBhc3N1bSBzdXNjaXBpdCB2ZWwsIGFuIHNhZXBlIHNjcmlwc2VyaXQgY29udGVudGlvbmVzIGR1bywgY2l2aWJ1cyBkZWxlbml0aSB1dCBwZXIuIFVzdSB2ZXJvIHJlcXVlIGdyYWVjZSBldS4nO1xuICBhYm91dFN1c2hpLmFwcGVuZENoaWxkKGFib3V0UGljU3VzaGkpO1xuICBhYm91dFN1c2hpLmFwcGVuZENoaWxkKGFib3V0UGFyYVN1c2hpKTtcbiAgYWJvdXREaXYuYXBwZW5kQ2hpbGQoYWJvdXRTdXNoaSk7XG4gIC8vIGNsYXNzIGFkZGluZ1xuICBhYm91dERpdi5jbGFzc0xpc3QuYWRkKCdhYm91dCcpO1xuICBhYm91dFJhbWVuLmNsYXNzTGlzdC5hZGQoJ2Fib3V0X19yYW1lbicpXG4gIGFib3V0UGljUmFtZW4uY2xhc3NMaXN0LmFkZCgnYWJvdXRfX3JhbWVuX19waWMnKTtcbiAgYWJvdXRQYXJhUmFtZW4uY2xhc3NMaXN0LmFkZCgnYWJvdXRfX3JhbWVuX19wYXJhJyk7XG4gIGFib3V0U3VzaGkuY2xhc3NMaXN0LmFkZCgnYWJvdXRfX3N1c2hpJylcbiAgYWJvdXRQaWNTdXNoaS5jbGFzc0xpc3QuYWRkKCdhYm91dF9fc3VzaGlfX3BpYycpO1xuICBhYm91dFBhcmFTdXNoaS5jbGFzc0xpc3QuYWRkKCdhYm91dF9fc3VzaGlfX3BhcmEnKTtcblxuICAvLyBlbmQgb2YgY2xhc3MgYWRkaW5nXG4gIFxuXG4gIHJldHVybiBhYm91dERpdjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWJvdXQ7IiwiaW1wb3J0IG15TWFwIGZyb20gJy4vaW1nL21hcC1jb250YWN0LnBuZydcbmZ1bmN0aW9uIGNvbnRhY3QoKXtcbiAgbGV0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IHRleHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IGVtYmVkTWFwRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBsZXQgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbGV0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBsZXQgZW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGxldCBtYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBuYW1lLmlubmVySFRNTCA9IFwiVFAncyBSYW1lbiBhbmQgc3VzaGlcIjtcbiAgYWRkcmVzcy5pbm5lckhUTUwgPSAnQWRkcmVzOiB0aGlzIGlzIGFuIGFkZHJlc3MnO1xuICBwaG9uZS5pbm5lckhUTUw9J1Bob25lOiAoNDQzKS0xMTEtMjIyMic7XG4gIGVtYWlsLmlubmVySFRNTD0nRW1haWw6IHRwcnNAZ21haWwuY29tJztcbiAgbWFwID0gbmV3IEltYWdlKCk7XG4gIG1hcC5zcmMgPSBteU1hcDtcblxuICBcbiAgdGV4dERpdi5hcHBlbmRDaGlsZChuYW1lKTtcbiAgdGV4dERpdi5hcHBlbmRDaGlsZChhZGRyZXNzKTtcbiAgdGV4dERpdi5hcHBlbmRDaGlsZChwaG9uZSk7XG4gIHRleHREaXYuYXBwZW5kQ2hpbGQoZW1haWwpO1xuICBlbWJlZE1hcERpdi5hcHBlbmRDaGlsZChtYXApO1xuICBjb250YWN0RGl2LmFwcGVuZENoaWxkKHRleHREaXYpO1xuICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGVtYmVkTWFwRGl2KTtcbiAgLy8gY2xhc3MgYWRkaW5nXG4gIGNvbnRhY3REaXYuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xuICB0ZXh0RGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RfX2luZm9ybWF0aW9uJyk7XG4gIGVtYmVkTWFwRGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RfX2VtYmVkJyk7XG4gIG5hbWUuY2xhc3NMaXN0LmFkZCgnY29udGFjdF9faW5mb3JtYXRpb25fX25hbWUnKTtcbiAgYWRkcmVzcy5jbGFzc0xpc3QuYWRkKCdjb250YWN0X19pbmZvcm1hdGlvbl9fYWRkcmVzcycpO1xuICBwaG9uZS5jbGFzc0xpc3QuYWRkKCdjb250YWN0X19pbmZvcm1hdGlvbl9fcGhvbmUnKTtcbiAgZW1haWwuY2xhc3NMaXN0LmFkZCgnY29udGFjdF9faW5mb3JtYXRpb25fX2VtYWlsJyk7XG4gIG1hcC5jbGFzc0xpc3QuYWRkKCdjb250YWN0X19lbWJlZF9fbWFwJyk7XG4gIFxuICAvLyBlbmQgb2YgY2xhc3MgYWRkaW5nXG4gIHJldHVybiBjb250YWN0RGl2O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb250YWN0OyIsImltcG9ydCBySW1nMSBmcm9tICcuL2ltZy8xLW1lbnUtcmFtZW4uanBnJztcbmltcG9ydCBySW1nMiBmcm9tICcuL2ltZy8yLW1lbnUtcmFtZW4ucG5nJztcbmltcG9ydCBySW1nMyBmcm9tICcuL2ltZy8zLW1lbnUtcmFtZW4ucG5nJztcbmltcG9ydCBySW1nNCBmcm9tICcuL2ltZy80LW1lbnUtcmFtZW4uanBnJztcbmltcG9ydCBzSW1nMSBmcm9tICcuL2ltZy8xLW1lbnUtc3VzaGkuanBnJztcbmltcG9ydCBzSW1nMiBmcm9tICcuL2ltZy8yLW1lbnUtc3VzaGkuanBnJztcbmltcG9ydCBzSW1nMyBmcm9tICcuL2ltZy8zLW1lbnUtc3VzaGkuanBnJztcbmltcG9ydCBzSW1nNCBmcm9tICcuL2ltZy80LW1lbnUtc3VzaGkuanBnJztcbmNvbnN0IFJBTUVOX0lNR1MgPSBbckltZzEsIHJJbWcyLCBySW1nMywgckltZzRdO1xuY29uc3QgU1VTSElfSU1HUyA9IFtzSW1nMSwgc0ltZzIsIHNJbWczLCBzSW1nNF07XG5mdW5jdGlvbiBtZW51KCkge1xuICBsZXQgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgbWVudVJhbWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBtZW51U3VzaGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBsZXQgcmFtZW5UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHJhbWVuVGl0bGUuaW5uZXJIVE1MID0gJ1JhbWVuJztcbiAgbWVudURpdi5hcHBlbmRDaGlsZChyYW1lblRpdGxlKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNDsgaSsrKSB7XG4gICAgbGV0IHJhbWVuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IHJhbWVuSW1nID0gbmV3IEltYWdlKCk7XG4gICAgcmFtZW5JbWcuc3JjID0gUkFNRU5fSU1HU1tpIC0gMV07XG4gICAgbGV0IHJhbWVuRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcmFtZW5EZXNjcmlwdGlvbi5pbm5lckhUTUwgPSAnRGVzY3JpcHRpb24gcmFtZW4nICsgaTtcbiAgICByYW1lbkRpdi5hcHBlbmRDaGlsZChyYW1lbkltZyk7XG4gICAgcmFtZW5EaXYuYXBwZW5kQ2hpbGQocmFtZW5EZXNjcmlwdGlvbik7XG4gICAgbWVudVJhbWVuLmFwcGVuZENoaWxkKHJhbWVuRGl2KTtcblxuICAgIC8vIGNsYXNzIGFkZGluZ1xuICAgIHJhbWVuRGl2LmNsYXNzTGlzdC5hZGQoJ21lbnVfX3JhbWVuX18nICsgaSk7XG4gICAgcmFtZW5JbWcuY2xhc3NMaXN0LmFkZCgnbWVudV9fcmFtZW5fX2ltZycpO1xuICAgIHJhbWVuRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnbWVudV9fcmFtZW5fX2RlcycpO1xuICAgIC8vIGVuZCBvZiBjbGFzcyBhZGRpbmdcbiAgfVxuICBtZW51RGl2LmFwcGVuZENoaWxkKG1lbnVSYW1lbik7XG5cbiAgbGV0IHN1c2hpVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBzdXNoaVRpdGxlLmlubmVySFRNTCA9ICdTdXNoaSc7XG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQoc3VzaGlUaXRsZSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDQ7IGkrKykge1xuICAgIGxldCBzdXNoaURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBzdXNoaUltZyA9IG5ldyBJbWFnZSgpO1xuICAgIHN1c2hpSW1nLnNyYyA9IFNVU0hJX0lNR1NbaSAtIDFdO1xuICAgIGxldCBzdXNoaURlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHN1c2hpRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gJ0Rlc2NyaXB0aW9uIHN1c2hpJyArIGk7XG4gICAgc3VzaGlEaXYuYXBwZW5kQ2hpbGQoc3VzaGlJbWcpO1xuICAgIHN1c2hpRGl2LmFwcGVuZENoaWxkKHN1c2hpRGVzY3JpcHRpb24pO1xuICAgIG1lbnVTdXNoaS5hcHBlbmRDaGlsZChzdXNoaURpdik7XG4gICAgLy8gY2xhc3MgYWRkaW5nXG4gICAgc3VzaGlEaXYuY2xhc3NMaXN0LmFkZCgnbWVudV9fc3VzaGlfXycgKyBpKTtcbiAgICBzdXNoaUltZy5jbGFzc0xpc3QuYWRkKCdtZW51X19zdXNoaV9faW1nJyk7XG4gICAgc3VzaGlEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdtZW51X19zdXNoaV9fZGVzJyk7XG4gICAgLy8gZW5kIG9mIGNsYXNzIGFkZGluZ1xuICB9XG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQobWVudVN1c2hpKTtcblxuICAvLyBjbGFzcyBhZGRpbmdcbiAgbWVudURpdi5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XG4gIG1lbnVSYW1lbi5jbGFzc0xpc3QuYWRkKCdtZW51X19yYW1lbicpO1xuICBtZW51U3VzaGkuY2xhc3NMaXN0LmFkZCgnbWVudV9fc3VzaGknKVxuICByYW1lblRpdGxlLmNsYXNzTGlzdC5hZGQoJ21lbnVfX3RpdGxlJyk7XG4gIHN1c2hpVGl0bGUuY2xhc3NMaXN0LmFkZCgnbWVudV9fdGl0bGUnKTtcblxuICAvLyBlbmQgb2YgY2xhc3MgYWRkaW5nXG4gIHJldHVybiBtZW51RGl2O1xufVxuXG5leHBvcnQgZGVmYXVsdCBtZW51OyIsIlxuaW1wb3J0IGFib3V0IGZyb20gXCIuL2Fib3V0LXRhYi5qc1wiO1xuaW1wb3J0IG1lbnUgZnJvbSBcIi4vbWVudS10YWIuanNcIjtcbmltcG9ydCBjb250YWN0IGZyb20gXCIuL2NvbnRhY3QtdGFiLmpzXCI7XG5pbXBvcnQgYmdJbWcgZnJvbSBcIi4vaW1nL25hdi1iZy5qcGdcIjtcbmltcG9ydCBsb2dvSWNvbiBmcm9tIFwiLi4vc3JjL2ltZy9yYW1lbi1sb2dvLnBuZ1wiO1xuZnVuY3Rpb24gbmF2YmFyKCkge1xuICBjb25zdCBDT05URU5UID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgbGV0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgaWNvbiA9IG5ldyBJbWFnZSgpO1xuICBsZXQgdGFiRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBhYm91dFRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBsZXQgbWVudVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBsZXQgY29udGFjdFRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gIGFib3V0VGFiLmlubmVySFRNTCA9ICdBQk9VVCc7XG4gIGFib3V0VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBDT05URU5ULnJlbW92ZUNoaWxkKENPTlRFTlQubGFzdENoaWxkKTtcbiAgICBDT05URU5ULmFwcGVuZENoaWxkKGFib3V0KCkpO1xuICB9KVxuICBtZW51VGFiLmlubmVySFRNTCA9ICdNRU5VJztcbiAgbWVudVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgQ09OVEVOVC5yZW1vdmVDaGlsZChDT05URU5ULmxhc3RDaGlsZCk7XG4gICAgQ09OVEVOVC5hcHBlbmRDaGlsZChtZW51KCkpO1xuICB9KVxuICBjb250YWN0VGFiLmlubmVySFRNTCA9ICdDT05UQUNUJztcbiAgY29udGFjdFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgQ09OVEVOVC5yZW1vdmVDaGlsZChDT05URU5ULmxhc3RDaGlsZCk7XG4gICAgQ09OVEVOVC5hcHBlbmRDaGlsZChjb250YWN0KCkpO1xuICB9KVxuICAvLyBjYW4gYWRkZWQgaW1nIGhlcmVcbiAgbmF2QmFyLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtiZ0ltZ30pYDtcbiAgaWNvbi5zcmMgPSBsb2dvSWNvbjtcbiAgbG9nby5hcHBlbmRDaGlsZChpY29uKTtcbiAgdGFiRGl2LmFwcGVuZENoaWxkKGFib3V0VGFiKTtcbiAgdGFiRGl2LmFwcGVuZENoaWxkKG1lbnVUYWIpO1xuICB0YWJEaXYuYXBwZW5kQ2hpbGQoY29udGFjdFRhYik7XG4gIG5hdkJhci5hcHBlbmRDaGlsZChsb2dvKTtcbiAgbmF2QmFyLmFwcGVuZENoaWxkKHRhYkRpdik7XG4gIC8vIGNsYXNzIGFkZGluZ1xuICBuYXZCYXIuY2xhc3NMaXN0LmFkZCgnbmF2Jyk7XG4gIGxvZ28uY2xhc3NMaXN0LmFkZCgnbmF2X19sb2dvJyk7XG4gIGljb24uY2xhc3NMaXN0LmFkZCgnbmF2X19sb2dvX19pY29uJyk7XG4gIHRhYkRpdi5jbGFzc0xpc3QuYWRkKCduYXZfX3RhYicpO1xuICBhYm91dFRhYi5jbGFzc0xpc3QuYWRkKCduYXZfX3RhYl9fYWJvdXQnKTtcbiAgbWVudVRhYi5jbGFzc0xpc3QuYWRkKCduYXZfX3RhYl9fbWVudScpO1xuICBjb250YWN0VGFiLmNsYXNzTGlzdC5hZGQoJ25hdl9fdGFiX19jb250YWN0Jyk7XG4gIC8vIGVuZCBvZiBjbGFzcyBhZGRpbmdcblxuICBjb25zb2xlLmxvZyhiZ0ltZyk7XG4gIHJldHVybiBuYXZCYXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5hdmJhcjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBuYXZiYXIgZnJvbSBcIi4vbmF2YmFyLmpzXCI7XG5pbXBvcnQgYWJvdXQgZnJvbSBcIi4vYWJvdXQtdGFiLmpzXCI7XG5pbXBvcnQgbWVudSBmcm9tIFwiLi9tZW51LXRhYi5qc1wiO1xuaW1wb3J0IGNvbnRhY3QgZnJvbSBcIi4vY29udGFjdC10YWIuanNcIjtcbmltcG9ydCAnLi4vZGlzdC9jc3MvbWFpbi5jc3MnXG4vLyBpbXBvcnQgJy4vc2Nzcy9pbmRleC5zY3NzJ1xuZnVuY3Rpb24gbWFpbigpe1xuICBjb25zdCBDT05URU5UID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgQ09OVEVOVC5hcHBlbmRDaGlsZChuYXZiYXIoKSk7XG4gIENPTlRFTlQuYXBwZW5kQ2hpbGQoYWJvdXQoKSk7XG59XG5cbm1haW4oKTsiXSwic291cmNlUm9vdCI6IiJ9