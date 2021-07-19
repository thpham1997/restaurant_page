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
___CSS_LOADER_EXPORT___.push([module.id, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n.nav {\n  color: red;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 3fr 7fr;\n  height: 50vh;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  background-position: 50% 30%;\n}\n\n.about {\n  font-size: 1.5rem;\n}\n.about__ramen {\n  width: 100%;\n  height: 30rem;\n  display: block;\n  padding: 2rem 0;\n}\n.about__ramen__pic {\n  float: left;\n  width: 25rem;\n  height: 25rem;\n  margin-left: 15rem;\n  margin-right: 1rem;\n  border-radius: 4rem;\n}\n.about__ramen__para {\n  margin-right: 15rem;\n  text-indent: 3rem;\n  text-align: justify;\n}\n.about__sushi {\n  width: 100%;\n  height: 30rem;\n  display: block;\n  padding: 2rem 0;\n}\n.about__sushi__pic {\n  float: right;\n  width: 25rem;\n  height: 25rem;\n  margin-left: 1rem;\n  margin-right: 15rem;\n  border-radius: 4rem;\n}\n.about__sushi__para {\n  margin-left: 15rem;\n  text-indent: 3rem;\n  text-align: justify;\n}\n\n.menu__title {\n  line-height: 4rem;\n  width: 80%;\n  margin: 0.5rem auto;\n  transform: skewX(-30deg);\n  text-align: center;\n  font-size: 2rem;\n  font-weight: bold;\n  color: #d6b354;\n  background-color: #0f1c3e;\n  border-radius: 1rem;\n}\n\n.menu__ramen {\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n  place-items: center;\n  margin: 0 auto;\n  border-style: solid;\n  border-color: #0f1c3e;\n  border-width: 0.1rem;\n  border-radius: 1rem;\n  width: 85%;\n  padding: 1rem;\n  background-color: #444444;\n}\n.menu__ramen__1 {\n  width: 20rem;\n  height: 20rem;\n  margin-bottom: 2rem;\n  transition: all 1.5s;\n  transition-delay: 0.5s;\n}\n.menu__ramen__1:hover {\n  background-color: rgba(177, 167, 115, 0.829);\n  border-radius: 4rem;\n}\n.menu__ramen__1:hover :first-child {\n  border-radius: 4rem;\n  width: 14rem;\n  margin-top: 1rem;\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);\n}\n.menu__ramen__1:hover :last-child {\n  font-size: 1.5rem;\n  display: block;\n  color: black;\n}\n.menu__ramen__2 {\n  width: 20rem;\n  height: 20rem;\n  margin-bottom: 2rem;\n  transition: all 1.5s;\n  transition-delay: 0.5s;\n}\n.menu__ramen__2:hover {\n  background-color: rgba(177, 167, 115, 0.829);\n  border-radius: 4rem;\n}\n.menu__ramen__2:hover :first-child {\n  border-radius: 4rem;\n  width: 14rem;\n  margin-top: 1rem;\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);\n}\n.menu__ramen__2:hover :last-child {\n  font-size: 1.5rem;\n  display: block;\n  color: black;\n}\n.menu__ramen__3 {\n  width: 20rem;\n  height: 20rem;\n  margin-bottom: 2rem;\n  transition: all 1.5s;\n  transition-delay: 0.5s;\n}\n.menu__ramen__3:hover {\n  background-color: rgba(177, 167, 115, 0.829);\n  border-radius: 4rem;\n}\n.menu__ramen__3:hover :first-child {\n  border-radius: 4rem;\n  width: 14rem;\n  margin-top: 1rem;\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);\n}\n.menu__ramen__3:hover :last-child {\n  font-size: 1.5rem;\n  display: block;\n  color: black;\n}\n.menu__ramen__4 {\n  width: 20rem;\n  height: 20rem;\n  margin-bottom: 2rem;\n  transition: all 1.5s;\n  transition-delay: 0.5s;\n}\n.menu__ramen__4:hover {\n  background-color: rgba(177, 167, 115, 0.829);\n  border-radius: 4rem;\n}\n.menu__ramen__4:hover :first-child {\n  border-radius: 4rem;\n  width: 14rem;\n  margin-top: 1rem;\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);\n}\n.menu__ramen__4:hover :last-child {\n  font-size: 1.5rem;\n  display: block;\n  color: black;\n}\n.menu__ramen__img {\n  display: block;\n  width: 20rem;\n  margin: 0 auto 0 auto;\n  border-radius: 1rem;\n  transition: all 1.5s;\n}\n.menu__ramen__des {\n  display: none;\n  margin: 0.2rem 0.5rem;\n  color: rgba(255, 255, 255, 0);\n  font-size: 1rem;\n  transition-property: all;\n  transition-duration: 2s;\n  transition-delay: 1s;\n}\n\n.menu__sushi {\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n  place-items: center;\n  margin: 0 auto;\n  border-style: solid;\n  border-color: #0f1c3e;\n  border-width: 0.1rem;\n  border-radius: 1rem;\n  width: 85%;\n  padding: 1rem;\n  background-color: #444444;\n}\n.menu__sushi__1 {\n  width: 20rem;\n  height: 20rem;\n  margin-bottom: 2rem;\n  transition: all 1.5s;\n  transition-delay: 0.5s;\n}\n.menu__sushi__1:hover {\n  background-color: rgba(177, 167, 115, 0.829);\n  border-radius: 4rem;\n}\n.menu__sushi__1:hover :first-child {\n  border-radius: 4rem;\n  width: 14rem;\n  height: 14rem;\n  margin-top: 1rem;\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);\n}\n.menu__sushi__1:hover :last-child {\n  font-size: 1.5rem;\n  display: block;\n  color: black;\n}\n.menu__sushi__2 {\n  width: 20rem;\n  height: 20rem;\n  margin-bottom: 2rem;\n  transition: all 1.5s;\n  transition-delay: 0.5s;\n}\n.menu__sushi__2:hover {\n  background-color: rgba(177, 167, 115, 0.829);\n  border-radius: 4rem;\n}\n.menu__sushi__2:hover :first-child {\n  border-radius: 4rem;\n  width: 14rem;\n  height: 14rem;\n  margin-top: 1rem;\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);\n}\n.menu__sushi__2:hover :last-child {\n  font-size: 1.5rem;\n  display: block;\n  color: black;\n}\n.menu__sushi__3 {\n  width: 20rem;\n  height: 20rem;\n  margin-bottom: 2rem;\n  transition: all 1.5s;\n  transition-delay: 0.5s;\n}\n.menu__sushi__3:hover {\n  background-color: rgba(177, 167, 115, 0.829);\n  border-radius: 4rem;\n}\n.menu__sushi__3:hover :first-child {\n  border-radius: 4rem;\n  width: 14rem;\n  height: 14rem;\n  margin-top: 1rem;\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);\n}\n.menu__sushi__3:hover :last-child {\n  font-size: 1.5rem;\n  display: block;\n  color: black;\n}\n.menu__sushi__4 {\n  width: 20rem;\n  height: 20rem;\n  margin-bottom: 2rem;\n  transition: all 1.5s;\n  transition-delay: 0.5s;\n}\n.menu__sushi__4:hover {\n  background-color: rgba(177, 167, 115, 0.829);\n  border-radius: 4rem;\n}\n.menu__sushi__4:hover :first-child {\n  border-radius: 4rem;\n  width: 14rem;\n  height: 14rem;\n  margin-top: 1rem;\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);\n}\n.menu__sushi__4:hover :last-child {\n  font-size: 1.5rem;\n  display: block;\n  color: black;\n}\n.menu__sushi__img {\n  display: block;\n  width: 20rem;\n  height: 20rem;\n  margin: 0 auto 0 auto;\n  border-radius: 1rem;\n  transition: all 1.5s;\n}\n.menu__sushi__des {\n  display: none;\n  margin: 0.2rem 0.5rem;\n  color: rgba(255, 255, 255, 0);\n  font-size: 1rem;\n  transition-property: all;\n  transition-duration: 2s;\n  transition-delay: 1s;\n}\n\n.contact {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.contact__information {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: column;\n  width: 25rem;\n  height: 20rem;\n  font-size: 1.5rem;\n  margin: 0.2rem 0.5rem;\n  border-width: 0.1rem;\n  border-color: brown;\n  border-style: double;\n}\n.contact__information * {\n  margin: 0.4rem 0.3rem;\n}\n.contact__embed {\n  width: 40rem;\n}\n.contact__embed__map {\n  width: inherit;\n}\n", "",{"version":3,"sources":["webpack://./dist/css/main.css"],"names":[],"mappings":"AAAA;;;CAGC;AACD;;;;;;;;;;;;;EAaE,SAAS;EACT,UAAU;EACV,SAAS;EACT,eAAe;EACf,aAAa;EACb,wBAAwB;AAC1B;;AAEA,gDAAgD;AAChD;;EAEE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;;AAEA;;EAEE,WAAW;EACX,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,YAAY;EACZ,qBAAqB;EACrB,4BAA4B;EAC5B,4BAA4B;AAC9B;;AAEA;EACE,iBAAiB;AACnB;AACA;EACE,WAAW;EACX,aAAa;EACb,cAAc;EACd,eAAe;AACjB;AACA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;AACrB;AACA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,aAAa;EACb,cAAc;EACd,eAAe;AACjB;AACA;EACE,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,mBAAmB;EACnB,mBAAmB;AACrB;AACA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,UAAU;EACV,mBAAmB;EACnB,wBAAwB;EACxB,kBAAkB;EAClB,eAAe;EACf,iBAAiB;EACjB,cAAc;EACd,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mBAAmB;EACnB,cAAc;EACd,mBAAmB;EACnB,qBAAqB;EACrB,oBAAoB;EACpB,mBAAmB;EACnB,UAAU;EACV,aAAa;EACb,yBAAyB;AAC3B;AACA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,oBAAoB;EACpB,sBAAsB;AACxB;AACA;EACE,4CAA4C;EAC5C,mBAAmB;AACrB;AACA;EACE,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,2CAA2C;AAC7C;AACA;EACE,iBAAiB;EACjB,cAAc;EACd,YAAY;AACd;AACA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,oBAAoB;EACpB,sBAAsB;AACxB;AACA;EACE,4CAA4C;EAC5C,mBAAmB;AACrB;AACA;EACE,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,2CAA2C;AAC7C;AACA;EACE,iBAAiB;EACjB,cAAc;EACd,YAAY;AACd;AACA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,oBAAoB;EACpB,sBAAsB;AACxB;AACA;EACE,4CAA4C;EAC5C,mBAAmB;AACrB;AACA;EACE,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,2CAA2C;AAC7C;AACA;EACE,iBAAiB;EACjB,cAAc;EACd,YAAY;AACd;AACA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,oBAAoB;EACpB,sBAAsB;AACxB;AACA;EACE,4CAA4C;EAC5C,mBAAmB;AACrB;AACA;EACE,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,2CAA2C;AAC7C;AACA;EACE,iBAAiB;EACjB,cAAc;EACd,YAAY;AACd;AACA;EACE,cAAc;EACd,YAAY;EACZ,qBAAqB;EACrB,mBAAmB;EACnB,oBAAoB;AACtB;AACA;EACE,aAAa;EACb,qBAAqB;EACrB,6BAA6B;EAC7B,eAAe;EACf,wBAAwB;EACxB,uBAAuB;EACvB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,sCAAsC;EACtC,mBAAmB;EACnB,cAAc;EACd,mBAAmB;EACnB,qBAAqB;EACrB,oBAAoB;EACpB,mBAAmB;EACnB,UAAU;EACV,aAAa;EACb,yBAAyB;AAC3B;AACA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,oBAAoB;EACpB,sBAAsB;AACxB;AACA;EACE,4CAA4C;EAC5C,mBAAmB;AACrB;AACA;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,2CAA2C;AAC7C;AACA;EACE,iBAAiB;EACjB,cAAc;EACd,YAAY;AACd;AACA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,oBAAoB;EACpB,sBAAsB;AACxB;AACA;EACE,4CAA4C;EAC5C,mBAAmB;AACrB;AACA;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,2CAA2C;AAC7C;AACA;EACE,iBAAiB;EACjB,cAAc;EACd,YAAY;AACd;AACA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,oBAAoB;EACpB,sBAAsB;AACxB;AACA;EACE,4CAA4C;EAC5C,mBAAmB;AACrB;AACA;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,2CAA2C;AAC7C;AACA;EACE,iBAAiB;EACjB,cAAc;EACd,YAAY;AACd;AACA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,oBAAoB;EACpB,sBAAsB;AACxB;AACA;EACE,4CAA4C;EAC5C,mBAAmB;AACrB;AACA;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,2CAA2C;AAC7C;AACA;EACE,iBAAiB;EACjB,cAAc;EACd,YAAY;AACd;AACA;EACE,cAAc;EACd,YAAY;EACZ,aAAa;EACb,qBAAqB;EACrB,mBAAmB;EACnB,oBAAoB;AACtB;AACA;EACE,aAAa;EACb,qBAAqB;EACrB,6BAA6B;EAC7B,eAAe;EACf,wBAAwB;EACxB,uBAAuB;EACvB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,uBAAuB;EACvB,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,iBAAiB;EACjB,qBAAqB;EACrB,oBAAoB;EACpB,mBAAmB;EACnB,oBAAoB;AACtB;AACA;EACE,qBAAqB;AACvB;AACA;EACE,YAAY;AACd;AACA;EACE,cAAc;AAChB","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n.nav {\n  color: red;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 3fr 7fr;\n  height: 50vh;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  background-position: 50% 30%;\n}\n\n.about {\n  font-size: 1.5rem;\n}\n.about__ramen {\n  width: 100%;\n  height: 30rem;\n  display: block;\n  padding: 2rem 0;\n}\n.about__ramen__pic {\n  float: left;\n  width: 25rem;\n  height: 25rem;\n  margin-left: 15rem;\n  margin-right: 1rem;\n  border-radius: 4rem;\n}\n.about__ramen__para {\n  margin-right: 15rem;\n  text-indent: 3rem;\n  text-align: justify;\n}\n.about__sushi {\n  width: 100%;\n  height: 30rem;\n  display: block;\n  padding: 2rem 0;\n}\n.about__sushi__pic {\n  float: right;\n  width: 25rem;\n  height: 25rem;\n  margin-left: 1rem;\n  margin-right: 15rem;\n  border-radius: 4rem;\n}\n.about__sushi__para {\n  margin-left: 15rem;\n  text-indent: 3rem;\n  text-align: justify;\n}\n\n.menu__title {\n  line-height: 4rem;\n  width: 80%;\n  margin: 0.5rem auto;\n  transform: skewX(-30deg);\n  text-align: center;\n  font-size: 2rem;\n  font-weight: bold;\n  color: #d6b354;\n  background-color: #0f1c3e;\n  border-radius: 1rem;\n}\n\n.menu__ramen {\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n  place-items: center;\n  margin: 0 auto;\n  border-style: solid;\n  border-color: #0f1c3e;\n  border-width: 0.1rem;\n  border-radius: 1rem;\n  width: 85%;\n  padding: 1rem;\n  background-color: #444444;\n}\n.menu__ramen__1 {\n  width: 20rem;\n  height: 20rem;\n  margin-bottom: 2rem;\n  transition: all 1.5s;\n  transition-delay: 0.5s;\n}\n.menu__ramen__1:hover {\n  background-color: rgba(177, 167, 115, 0.829);\n  border-radius: 4rem;\n}\n.menu__ramen__1:hover :first-child {\n  border-radius: 4rem;\n  width: 14rem;\n  margin-top: 1rem;\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);\n}\n.menu__ramen__1:hover :last-child {\n  font-size: 1.5rem;\n  display: block;\n  color: black;\n}\n.menu__ramen__2 {\n  width: 20rem;\n  height: 20rem;\n  margin-bottom: 2rem;\n  transition: all 1.5s;\n  transition-delay: 0.5s;\n}\n.menu__ramen__2:hover {\n  background-color: rgba(177, 167, 115, 0.829);\n  border-radius: 4rem;\n}\n.menu__ramen__2:hover :first-child {\n  border-radius: 4rem;\n  width: 14rem;\n  margin-top: 1rem;\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);\n}\n.menu__ramen__2:hover :last-child {\n  font-size: 1.5rem;\n  display: block;\n  color: black;\n}\n.menu__ramen__3 {\n  width: 20rem;\n  height: 20rem;\n  margin-bottom: 2rem;\n  transition: all 1.5s;\n  transition-delay: 0.5s;\n}\n.menu__ramen__3:hover {\n  background-color: rgba(177, 167, 115, 0.829);\n  border-radius: 4rem;\n}\n.menu__ramen__3:hover :first-child {\n  border-radius: 4rem;\n  width: 14rem;\n  margin-top: 1rem;\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);\n}\n.menu__ramen__3:hover :last-child {\n  font-size: 1.5rem;\n  display: block;\n  color: black;\n}\n.menu__ramen__4 {\n  width: 20rem;\n  height: 20rem;\n  margin-bottom: 2rem;\n  transition: all 1.5s;\n  transition-delay: 0.5s;\n}\n.menu__ramen__4:hover {\n  background-color: rgba(177, 167, 115, 0.829);\n  border-radius: 4rem;\n}\n.menu__ramen__4:hover :first-child {\n  border-radius: 4rem;\n  width: 14rem;\n  margin-top: 1rem;\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);\n}\n.menu__ramen__4:hover :last-child {\n  font-size: 1.5rem;\n  display: block;\n  color: black;\n}\n.menu__ramen__img {\n  display: block;\n  width: 20rem;\n  margin: 0 auto 0 auto;\n  border-radius: 1rem;\n  transition: all 1.5s;\n}\n.menu__ramen__des {\n  display: none;\n  margin: 0.2rem 0.5rem;\n  color: rgba(255, 255, 255, 0);\n  font-size: 1rem;\n  transition-property: all;\n  transition-duration: 2s;\n  transition-delay: 1s;\n}\n\n.menu__sushi {\n  display: grid;\n  grid-template-columns: repeat(2, auto);\n  place-items: center;\n  margin: 0 auto;\n  border-style: solid;\n  border-color: #0f1c3e;\n  border-width: 0.1rem;\n  border-radius: 1rem;\n  width: 85%;\n  padding: 1rem;\n  background-color: #444444;\n}\n.menu__sushi__1 {\n  width: 20rem;\n  height: 20rem;\n  margin-bottom: 2rem;\n  transition: all 1.5s;\n  transition-delay: 0.5s;\n}\n.menu__sushi__1:hover {\n  background-color: rgba(177, 167, 115, 0.829);\n  border-radius: 4rem;\n}\n.menu__sushi__1:hover :first-child {\n  border-radius: 4rem;\n  width: 14rem;\n  height: 14rem;\n  margin-top: 1rem;\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);\n}\n.menu__sushi__1:hover :last-child {\n  font-size: 1.5rem;\n  display: block;\n  color: black;\n}\n.menu__sushi__2 {\n  width: 20rem;\n  height: 20rem;\n  margin-bottom: 2rem;\n  transition: all 1.5s;\n  transition-delay: 0.5s;\n}\n.menu__sushi__2:hover {\n  background-color: rgba(177, 167, 115, 0.829);\n  border-radius: 4rem;\n}\n.menu__sushi__2:hover :first-child {\n  border-radius: 4rem;\n  width: 14rem;\n  height: 14rem;\n  margin-top: 1rem;\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);\n}\n.menu__sushi__2:hover :last-child {\n  font-size: 1.5rem;\n  display: block;\n  color: black;\n}\n.menu__sushi__3 {\n  width: 20rem;\n  height: 20rem;\n  margin-bottom: 2rem;\n  transition: all 1.5s;\n  transition-delay: 0.5s;\n}\n.menu__sushi__3:hover {\n  background-color: rgba(177, 167, 115, 0.829);\n  border-radius: 4rem;\n}\n.menu__sushi__3:hover :first-child {\n  border-radius: 4rem;\n  width: 14rem;\n  height: 14rem;\n  margin-top: 1rem;\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);\n}\n.menu__sushi__3:hover :last-child {\n  font-size: 1.5rem;\n  display: block;\n  color: black;\n}\n.menu__sushi__4 {\n  width: 20rem;\n  height: 20rem;\n  margin-bottom: 2rem;\n  transition: all 1.5s;\n  transition-delay: 0.5s;\n}\n.menu__sushi__4:hover {\n  background-color: rgba(177, 167, 115, 0.829);\n  border-radius: 4rem;\n}\n.menu__sushi__4:hover :first-child {\n  border-radius: 4rem;\n  width: 14rem;\n  height: 14rem;\n  margin-top: 1rem;\n  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);\n}\n.menu__sushi__4:hover :last-child {\n  font-size: 1.5rem;\n  display: block;\n  color: black;\n}\n.menu__sushi__img {\n  display: block;\n  width: 20rem;\n  height: 20rem;\n  margin: 0 auto 0 auto;\n  border-radius: 1rem;\n  transition: all 1.5s;\n}\n.menu__sushi__des {\n  display: none;\n  margin: 0.2rem 0.5rem;\n  color: rgba(255, 255, 255, 0);\n  font-size: 1rem;\n  transition-property: all;\n  transition-duration: 2s;\n  transition-delay: 1s;\n}\n\n.contact {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.contact__information {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  flex-direction: column;\n  width: 25rem;\n  height: 20rem;\n  font-size: 1.5rem;\n  margin: 0.2rem 0.5rem;\n  border-width: 0.1rem;\n  border-color: brown;\n  border-style: double;\n}\n.contact__information * {\n  margin: 0.4rem 0.3rem;\n}\n.contact__embed {\n  width: 40rem;\n}\n.contact__embed__map {\n  width: inherit;\n}\n"],"sourceRoot":""}]);
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





function navbar() {
  const CONTENT = document.getElementById('content');
  let navBar = document.createElement('div');
  let logo = document.createElement('div');
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
  
  tabDiv.appendChild(aboutTab);
  tabDiv.appendChild(menuTab);
  tabDiv.appendChild(contactTab);
  navBar.appendChild(logo);
  navBar.appendChild(tabDiv);
  // class adding
  navBar.classList.add('nav');
  logo.classList.add('nav__logo');
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
  CONTENT.appendChild((0,_contact_tab_js__WEBPACK_IMPORTED_MODULE_3__.default)());
}

main();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbG9uZWRfcmVzdGF1cmFudF9wYWdlLy4vZGlzdC9jc3MvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vY2xvbmVkX3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vY2xvbmVkX3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovL2Nsb25lZF9yZXN0YXVyYW50X3BhZ2UvLi9kaXN0L2Nzcy9tYWluLmNzcz9hN2I1Iiwid2VicGFjazovL2Nsb25lZF9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vY2xvbmVkX3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY2xvbmVkX3Jlc3RhdXJhbnRfcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9jbG9uZWRfcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2Nsb25lZF9yZXN0YXVyYW50X3BhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9jbG9uZWRfcmVzdGF1cmFudF9wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vY2xvbmVkX3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9hYm91dC10YWIuanMiLCJ3ZWJwYWNrOi8vY2xvbmVkX3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9jb250YWN0LXRhYi5qcyIsIndlYnBhY2s6Ly9jbG9uZWRfcmVzdGF1cmFudF9wYWdlLy4vc3JjL21lbnUtdGFiLmpzIiwid2VicGFjazovL2Nsb25lZF9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbmF2YmFyLmpzIiwid2VicGFjazovL2Nsb25lZF9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2xvbmVkX3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9jbG9uZWRfcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jbG9uZWRfcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vY2xvbmVkX3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nsb25lZF9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jbG9uZWRfcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2Nsb25lZF9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDeUg7QUFDN0I7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLHdHQUFxQztBQUMvRjtBQUNBLDJvQkFBMm9CLGNBQWMsZUFBZSxjQUFjLG9CQUFvQixrQkFBa0IsNkJBQTZC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YSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFB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aW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG5vbCwgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSwgcSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4ubmF2IHtcXG4gIGNvbG9yOiByZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciA3ZnI7XFxuICBoZWlnaHQ6IDUwdmg7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDMwJTtcXG59XFxuXFxuLmFib3V0IHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG4uYWJvdXRfX3JhbWVuIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMHJlbTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMnJlbSAwO1xcbn1cXG4uYWJvdXRfX3JhbWVuX19waWMge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB3aWR0aDogMjVyZW07XFxuICBoZWlnaHQ6IDI1cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDE1cmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNHJlbTtcXG59XFxuLmFib3V0X19yYW1lbl9fcGFyYSB7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cmVtO1xcbiAgdGV4dC1pbmRlbnQ6IDNyZW07XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG4uYWJvdXRfX3N1c2hpIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMHJlbTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMnJlbSAwO1xcbn1cXG4uYWJvdXRfX3N1c2hpX19waWMge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgd2lkdGg6IDI1cmVtO1xcbiAgaGVpZ2h0OiAyNXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDRyZW07XFxufVxcbi5hYm91dF9fc3VzaGlfX3BhcmEge1xcbiAgbWFyZ2luLWxlZnQ6IDE1cmVtO1xcbiAgdGV4dC1pbmRlbnQ6IDNyZW07XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG5cXG4ubWVudV9fdGl0bGUge1xcbiAgbGluZS1oZWlnaHQ6IDRyZW07XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiAwLjVyZW0gYXV0bztcXG4gIHRyYW5zZm9ybTogc2tld1goLTMwZGVnKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICNkNmIzNTQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYxYzNlO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLm1lbnVfX3JhbWVuIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6ICMwZjFjM2U7XFxuICBib3JkZXItd2lkdGg6IDAuMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICB3aWR0aDogODUlO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ0NDQ7XFxufVxcbi5tZW51X19yYW1lbl9fMSB7XFxuICB3aWR0aDogMjByZW07XFxuICBoZWlnaHQ6IDIwcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAxLjVzO1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMC41cztcXG59XFxuLm1lbnVfX3JhbWVuX18xOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc3LCAxNjcsIDExNSwgMC44MjkpO1xcbiAgYm9yZGVyLXJhZGl1czogNHJlbTtcXG59XFxuLm1lbnVfX3JhbWVuX18xOmhvdmVyIDpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXItcmFkaXVzOiA0cmVtO1xcbiAgd2lkdGg6IDE0cmVtO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcbi5tZW51X19yYW1lbl9fMTpob3ZlciA6bGFzdC1jaGlsZCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG4ubWVudV9fcmFtZW5fXzIge1xcbiAgd2lkdGg6IDIwcmVtO1xcbiAgaGVpZ2h0OiAyMHJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMS41cztcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuNXM7XFxufVxcbi5tZW51X19yYW1lbl9fMjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3NywgMTY3LCAxMTUsIDAuODI5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDRyZW07XFxufVxcbi5tZW51X19yYW1lbl9fMjpob3ZlciA6Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLXJhZGl1czogNHJlbTtcXG4gIHdpZHRoOiAxNHJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG4ubWVudV9fcmFtZW5fXzI6aG92ZXIgOmxhc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLm1lbnVfX3JhbWVuX18zIHtcXG4gIHdpZHRoOiAyMHJlbTtcXG4gIGhlaWdodDogMjByZW07XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDEuNXM7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjVzO1xcbn1cXG4ubWVudV9fcmFtZW5fXzM6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzcsIDE2NywgMTE1LCAwLjgyOSk7XFxuICBib3JkZXItcmFkaXVzOiA0cmVtO1xcbn1cXG4ubWVudV9fcmFtZW5fXzM6aG92ZXIgOmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDRyZW07XFxuICB3aWR0aDogMTRyZW07XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuLm1lbnVfX3JhbWVuX18zOmhvdmVyIDpsYXN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbi5tZW51X19yYW1lbl9fNCB7XFxuICB3aWR0aDogMjByZW07XFxuICBoZWlnaHQ6IDIwcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAxLjVzO1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMC41cztcXG59XFxuLm1lbnVfX3JhbWVuX180OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc3LCAxNjcsIDExNSwgMC44MjkpO1xcbiAgYm9yZGVyLXJhZGl1czogNHJlbTtcXG59XFxuLm1lbnVfX3JhbWVuX180OmhvdmVyIDpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXItcmFkaXVzOiA0cmVtO1xcbiAgd2lkdGg6IDE0cmVtO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcbi5tZW51X19yYW1lbl9fNDpob3ZlciA6bGFzdC1jaGlsZCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG4ubWVudV9fcmFtZW5fX2ltZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAyMHJlbTtcXG4gIG1hcmdpbjogMCBhdXRvIDAgYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMS41cztcXG59XFxuLm1lbnVfX3JhbWVuX19kZXMge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG1hcmdpbjogMC4ycmVtIDAuNXJlbTtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMnM7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAxcztcXG59XFxuXFxuLm1lbnVfX3N1c2hpIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6ICMwZjFjM2U7XFxuICBib3JkZXItd2lkdGg6IDAuMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICB3aWR0aDogODUlO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ0NDQ7XFxufVxcbi5tZW51X19zdXNoaV9fMSB7XFxuICB3aWR0aDogMjByZW07XFxuICBoZWlnaHQ6IDIwcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAxLjVzO1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMC41cztcXG59XFxuLm1lbnVfX3N1c2hpX18xOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc3LCAxNjcsIDExNSwgMC44MjkpO1xcbiAgYm9yZGVyLXJhZGl1czogNHJlbTtcXG59XFxuLm1lbnVfX3N1c2hpX18xOmhvdmVyIDpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXItcmFkaXVzOiA0cmVtO1xcbiAgd2lkdGg6IDE0cmVtO1xcbiAgaGVpZ2h0OiAxNHJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG4ubWVudV9fc3VzaGlfXzE6aG92ZXIgOmxhc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLm1lbnVfX3N1c2hpX18yIHtcXG4gIHdpZHRoOiAyMHJlbTtcXG4gIGhlaWdodDogMjByZW07XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDEuNXM7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjVzO1xcbn1cXG4ubWVudV9fc3VzaGlfXzI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzcsIDE2NywgMTE1LCAwLjgyOSk7XFxuICBib3JkZXItcmFkaXVzOiA0cmVtO1xcbn1cXG4ubWVudV9fc3VzaGlfXzI6aG92ZXIgOmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDRyZW07XFxuICB3aWR0aDogMTRyZW07XFxuICBoZWlnaHQ6IDE0cmVtO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcbi5tZW51X19zdXNoaV9fMjpob3ZlciA6bGFzdC1jaGlsZCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG4ubWVudV9fc3VzaGlfXzMge1xcbiAgd2lkdGg6IDIwcmVtO1xcbiAgaGVpZ2h0OiAyMHJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMS41cztcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuNXM7XFxufVxcbi5tZW51X19zdXNoaV9fMzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3NywgMTY3LCAxMTUsIDAuODI5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDRyZW07XFxufVxcbi5tZW51X19zdXNoaV9fMzpob3ZlciA6Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLXJhZGl1czogNHJlbTtcXG4gIHdpZHRoOiAxNHJlbTtcXG4gIGhlaWdodDogMTRyZW07XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuLm1lbnVfX3N1c2hpX18zOmhvdmVyIDpsYXN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbi5tZW51X19zdXNoaV9fNCB7XFxuICB3aWR0aDogMjByZW07XFxuICBoZWlnaHQ6IDIwcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAxLjVzO1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMC41cztcXG59XFxuLm1lbnVfX3N1c2hpX180OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc3LCAxNjcsIDExNSwgMC44MjkpO1xcbiAgYm9yZGVyLXJhZGl1czogNHJlbTtcXG59XFxuLm1lbnVfX3N1c2hpX180OmhvdmVyIDpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXItcmFkaXVzOiA0cmVtO1xcbiAgd2lkdGg6IDE0cmVtO1xcbiAgaGVpZ2h0OiAxNHJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG4ubWVudV9fc3VzaGlfXzQ6aG92ZXIgOmxhc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLm1lbnVfX3N1c2hpX19pbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMjByZW07XFxuICBoZWlnaHQ6IDIwcmVtO1xcbiAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAxLjVzO1xcbn1cXG4ubWVudV9fc3VzaGlfX2RlcyB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbWFyZ2luOiAwLjJyZW0gMC41cmVtO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAycztcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDFzO1xcbn1cXG5cXG4uY29udGFjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uY29udGFjdF9faW5mb3JtYXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDI1cmVtO1xcbiAgaGVpZ2h0OiAyMHJlbTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbWFyZ2luOiAwLjJyZW0gMC41cmVtO1xcbiAgYm9yZGVyLXdpZHRoOiAwLjFyZW07XFxuICBib3JkZXItY29sb3I6IGJyb3duO1xcbiAgYm9yZGVyLXN0eWxlOiBkb3VibGU7XFxufVxcbi5jb250YWN0X19pbmZvcm1hdGlvbiAqIHtcXG4gIG1hcmdpbjogMC40cmVtIDAuM3JlbTtcXG59XFxuLmNvbnRhY3RfX2VtYmVkIHtcXG4gIHdpZHRoOiA0MHJlbTtcXG59XFxuLmNvbnRhY3RfX2VtYmVkX19tYXAge1xcbiAgd2lkdGg6IGluaGVyaXQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL2Rpc3QvY3NzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQztBQUNEOzs7Ozs7Ozs7Ozs7O0VBYUUsU0FBUztFQUNULFVBQVU7RUFDVixTQUFTO0VBQ1QsZUFBZTtFQUNmLGFBQWE7RUFDYix3QkFB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QUNqQixjQUFjO0VBQ2QsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSw0Q0FBNEM7RUFDNUMsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsMkNBQTJDO0FBQzdDO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLFlBQVk7QUFDZDtBQUNBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsNkJBQTZCO0VBQzdCLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLG9CQUFvQjtFQUNwQixtQkFBbUI7RUFDbkIsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsY0FBYztBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG5vbCwgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuYmxvY2txdW90ZSwgcSB7XFxuICBxdW90ZXM6IG5vbmU7XFxufVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgY29udGVudDogbm9uZTtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cXG4ubmF2IHtcXG4gIGNvbG9yOiByZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciA3ZnI7XFxuICBoZWlnaHQ6IDUwdmg7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDMwJTtcXG59XFxuXFxuLmFib3V0IHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG4uYWJvdXRfX3JhbWVuIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMHJlbTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMnJlbSAwO1xcbn1cXG4uYWJvdXRfX3JhbWVuX19waWMge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB3aWR0aDogMjVyZW07XFxuICBoZWlnaHQ6IDI1cmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDE1cmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNHJlbTtcXG59XFxuLmFib3V0X19yYW1lbl9fcGFyYSB7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cmVtO1xcbiAgdGV4dC1pbmRlbnQ6IDNyZW07XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG4uYWJvdXRfX3N1c2hpIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAzMHJlbTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcGFkZGluZzogMnJlbSAwO1xcbn1cXG4uYWJvdXRfX3N1c2hpX19waWMge1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgd2lkdGg6IDI1cmVtO1xcbiAgaGVpZ2h0OiAyNXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDRyZW07XFxufVxcbi5hYm91dF9fc3VzaGlfX3BhcmEge1xcbiAgbWFyZ2luLWxlZnQ6IDE1cmVtO1xcbiAgdGV4dC1pbmRlbnQ6IDNyZW07XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG5cXG4ubWVudV9fdGl0bGUge1xcbiAgbGluZS1oZWlnaHQ6IDRyZW07XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiAwLjVyZW0gYXV0bztcXG4gIHRyYW5zZm9ybTogc2tld1goLTMwZGVnKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICNkNmIzNTQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGYxYzNlO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLm1lbnVfX3JhbWVuIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6ICMwZjFjM2U7XFxuICBib3JkZXItd2lkdGg6IDAuMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICB3aWR0aDogODUlO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ0NDQ7XFxufVxcbi5tZW51X19yYW1lbl9fMSB7XFxuICB3aWR0aDogMjByZW07XFxuICBoZWlnaHQ6IDIwcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAxLjVzO1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMC41cztcXG59XFxuLm1lbnVfX3JhbWVuX18xOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc3LCAxNjcsIDExNSwgMC44MjkpO1xcbiAgYm9yZGVyLXJhZGl1czogNHJlbTtcXG59XFxuLm1lbnVfX3JhbWVuX18xOmhvdmVyIDpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXItcmFkaXVzOiA0cmVtO1xcbiAgd2lkdGg6IDE0cmVtO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcbi5tZW51X19yYW1lbl9fMTpob3ZlciA6bGFzdC1jaGlsZCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG4ubWVudV9fcmFtZW5fXzIge1xcbiAgd2lkdGg6IDIwcmVtO1xcbiAgaGVpZ2h0OiAyMHJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMS41cztcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuNXM7XFxufVxcbi5tZW51X19yYW1lbl9fMjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3NywgMTY3LCAxMTUsIDAuODI5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDRyZW07XFxufVxcbi5tZW51X19yYW1lbl9fMjpob3ZlciA6Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLXJhZGl1czogNHJlbTtcXG4gIHdpZHRoOiAxNHJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG4ubWVudV9fcmFtZW5fXzI6aG92ZXIgOmxhc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLm1lbnVfX3JhbWVuX18zIHtcXG4gIHdpZHRoOiAyMHJlbTtcXG4gIGhlaWdodDogMjByZW07XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDEuNXM7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjVzO1xcbn1cXG4ubWVudV9fcmFtZW5fXzM6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzcsIDE2NywgMTE1LCAwLjgyOSk7XFxuICBib3JkZXItcmFkaXVzOiA0cmVtO1xcbn1cXG4ubWVudV9fcmFtZW5fXzM6aG92ZXIgOmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDRyZW07XFxuICB3aWR0aDogMTRyZW07XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuLm1lbnVfX3JhbWVuX18zOmhvdmVyIDpsYXN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbi5tZW51X19yYW1lbl9fNCB7XFxuICB3aWR0aDogMjByZW07XFxuICBoZWlnaHQ6IDIwcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAxLjVzO1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMC41cztcXG59XFxuLm1lbnVfX3JhbWVuX180OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc3LCAxNjcsIDExNSwgMC44MjkpO1xcbiAgYm9yZGVyLXJhZGl1czogNHJlbTtcXG59XFxuLm1lbnVfX3JhbWVuX180OmhvdmVyIDpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXItcmFkaXVzOiA0cmVtO1xcbiAgd2lkdGg6IDE0cmVtO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcbi5tZW51X19yYW1lbl9fNDpob3ZlciA6bGFzdC1jaGlsZCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG4ubWVudV9fcmFtZW5fX2ltZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAyMHJlbTtcXG4gIG1hcmdpbjogMCBhdXRvIDAgYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMS41cztcXG59XFxuLm1lbnVfX3JhbWVuX19kZXMge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG1hcmdpbjogMC4ycmVtIDAuNXJlbTtcXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYWxsO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMnM7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAxcztcXG59XFxuXFxuLm1lbnVfX3N1c2hpIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBhdXRvKTtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItY29sb3I6ICMwZjFjM2U7XFxuICBib3JkZXItd2lkdGg6IDAuMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxuICB3aWR0aDogODUlO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQ0NDQ7XFxufVxcbi5tZW51X19zdXNoaV9fMSB7XFxuICB3aWR0aDogMjByZW07XFxuICBoZWlnaHQ6IDIwcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAxLjVzO1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMC41cztcXG59XFxuLm1lbnVfX3N1c2hpX18xOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc3LCAxNjcsIDExNSwgMC44MjkpO1xcbiAgYm9yZGVyLXJhZGl1czogNHJlbTtcXG59XFxuLm1lbnVfX3N1c2hpX18xOmhvdmVyIDpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXItcmFkaXVzOiA0cmVtO1xcbiAgd2lkdGg6IDE0cmVtO1xcbiAgaGVpZ2h0OiAxNHJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG4ubWVudV9fc3VzaGlfXzE6aG92ZXIgOmxhc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLm1lbnVfX3N1c2hpX18yIHtcXG4gIHdpZHRoOiAyMHJlbTtcXG4gIGhlaWdodDogMjByZW07XFxuICBtYXJnaW4tYm90dG9tOiAycmVtO1xcbiAgdHJhbnNpdGlvbjogYWxsIDEuNXM7XFxuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjVzO1xcbn1cXG4ubWVudV9fc3VzaGlfXzI6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzcsIDE2NywgMTE1LCAwLjgyOSk7XFxuICBib3JkZXItcmFkaXVzOiA0cmVtO1xcbn1cXG4ubWVudV9fc3VzaGlfXzI6aG92ZXIgOmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDRyZW07XFxuICB3aWR0aDogMTRyZW07XFxuICBoZWlnaHQ6IDE0cmVtO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGJveC1zaGFkb3c6IDJweCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxufVxcbi5tZW51X19zdXNoaV9fMjpob3ZlciA6bGFzdC1jaGlsZCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG4ubWVudV9fc3VzaGlfXzMge1xcbiAgd2lkdGg6IDIwcmVtO1xcbiAgaGVpZ2h0OiAyMHJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxuICB0cmFuc2l0aW9uOiBhbGwgMS41cztcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuNXM7XFxufVxcbi5tZW51X19zdXNoaV9fMzpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3NywgMTY3LCAxMTUsIDAuODI5KTtcXG4gIGJvcmRlci1yYWRpdXM6IDRyZW07XFxufVxcbi5tZW51X19zdXNoaV9fMzpob3ZlciA6Zmlyc3QtY2hpbGQge1xcbiAgYm9yZGVyLXJhZGl1czogNHJlbTtcXG4gIHdpZHRoOiAxNHJlbTtcXG4gIGhlaWdodDogMTRyZW07XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuLm1lbnVfX3N1c2hpX18zOmhvdmVyIDpsYXN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbi5tZW51X19zdXNoaV9fNCB7XFxuICB3aWR0aDogMjByZW07XFxuICBoZWlnaHQ6IDIwcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAxLjVzO1xcbiAgdHJhbnNpdGlvbi1kZWxheTogMC41cztcXG59XFxuLm1lbnVfX3N1c2hpX180OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc3LCAxNjcsIDExNSwgMC44MjkpO1xcbiAgYm9yZGVyLXJhZGl1czogNHJlbTtcXG59XFxuLm1lbnVfX3N1c2hpX180OmhvdmVyIDpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXItcmFkaXVzOiA0cmVtO1xcbiAgd2lkdGg6IDE0cmVtO1xcbiAgaGVpZ2h0OiAxNHJlbTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbn1cXG4ubWVudV9fc3VzaGlfXzQ6aG92ZXIgOmxhc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLm1lbnVfX3N1c2hpX19pbWcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMjByZW07XFxuICBoZWlnaHQ6IDIwcmVtO1xcbiAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG4gIHRyYW5zaXRpb246IGFsbCAxLjVzO1xcbn1cXG4ubWVudV9fc3VzaGlfX2RlcyB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgbWFyZ2luOiAwLjJyZW0gMC41cmVtO1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XFxuICBmb250LXNpemU6IDFyZW07XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBhbGw7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAycztcXG4gIHRyYW5zaXRpb24tZGVsYXk6IDFzO1xcbn1cXG5cXG4uY29udGFjdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uY29udGFjdF9faW5mb3JtYXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDI1cmVtO1xcbiAgaGVpZ2h0OiAyMHJlbTtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgbWFyZ2luOiAwLjJyZW0gMC41cmVtO1xcbiAgYm9yZGVyLXdpZHRoOiAwLjFyZW07XFxuICBib3JkZXItY29sb3I6IGJyb3duO1xcbiAgYm9yZGVyLXN0eWxlOiBkb3VibGU7XFxufVxcbi5jb250YWN0X19pbmZvcm1hdGlvbiAqIHtcXG4gIG1hcmdpbjogMC40cmVtIDAuM3JlbTtcXG59XFxuLmNvbnRhY3RfX2VtYmVkIHtcXG4gIHdpZHRoOiA0MHJlbTtcXG59XFxuLmNvbnRhY3RfX2VtYmVkX19tYXAge1xcbiAgd2lkdGg6IGluaGVyaXQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCByYW1lbkltZyBmcm9tICcuL2ltZy9yYW1lbi1hYm91dC5qcGcnO1xuaW1wb3J0IHN1c2hpSW1nIGZyb20gJy4vaW1nL3N1c2hpLWFib3V0LmpwZyc7XG5mdW5jdGlvbiBhYm91dCgpIHtcbiAgbGV0IGFib3V0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgbGV0IGFib3V0UmFtZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IGFib3V0UGljUmFtZW4gPSBuZXcgSW1hZ2UoKTtcbiAgbGV0IGFib3V0UGFyYVJhbWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBhYm91dFBhcmFSYW1lbi5pbm5lckhUTUwgPSAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIG5vc3RydW0gY29uc3RpdHV0byB0ZSBzaXQsIGhhcyBlYSBlaXJtb2QgaW52ZW5pcmUuIEhhYmVvIG5vc3RlciBhbmNpbGxhZSBhZCBkdW8sIGV1bSBpZHF1ZSBub3N0cnVkIGFiaG9ycmVhbnQgaWQsIG9ybmF0dXMgbm9sdWlzc2UgcHJvIG5vLiBRdWkgbmUgenJpbCBkZWxlbml0LiBPY3VycmVyZXQgYWNjdXNhbXVzIG5hbSBhdC4gRWFtIGN1IGVsaXRyIGxpYmVyYXZpc3NlLCBuZWMgYXQgZmV1Z2FpdCBvcG9ydGVyZSwgY3UgYXVkaXJlIGVwaWN1cmVpIHBlcmljdWxpcyBlb3MuIEZldWdpYXQgbGFib3JhbXVzIGNvbXBsZWN0aXR1ciBldSBwZXIsIHBybyBlaSBhcGVyaXJpIGFsaXF1YW5kby4gRXJhbnQgY29uc2VjdGV0dWVyIGV0IHNlYSwgYXQgdmlkaXNzZSBhbGlxdWFuZG8gaGlzLic7XG4gIGFib3V0UGljUmFtZW4uc3JjID0gcmFtZW5JbWc7XG4gIGFib3V0UmFtZW4uYXBwZW5kQ2hpbGQoYWJvdXRQaWNSYW1lbik7XG4gIGFib3V0UmFtZW4uYXBwZW5kQ2hpbGQoYWJvdXRQYXJhUmFtZW4pO1xuICBhYm91dERpdi5hcHBlbmRDaGlsZChhYm91dFJhbWVuKTtcblxuICBsZXQgYWJvdXRTdXNoaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgYWJvdXRQaWNTdXNoaSA9IG5ldyBJbWFnZSgpO1xuICBsZXQgYWJvdXRQYXJhU3VzaGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGFib3V0UGljU3VzaGkuc3JjID0gc3VzaGlJbWc7XG4gIGFib3V0UGFyYVN1c2hpLmlubmVySFRNTCA9ICdFdCBkdW8gbWVudGl0dW0gY29uc2V0ZXR1ciwgZWEgcGVyIHZpdmVuZG8gb2ZmaWNpaXMuIFBlciBhZXRlcm5vIGZpZXJlbnQgaW5jaWRlcmludCBldCwgcHJpIGV1IHRhbnRhcyBjb21wcmVoZW5zYW0uIEF0IGNhc2UgbnVsbGEgZXVtLCBhbiBwcmkgbnVsbGEgdGVtcG9yIG1haW9ydW0uIEVpdXMgcG9zaWRvbml1bSBwcmkgY3UsIGFkIHZpeCBwYXRyaW9xdWUgZXhwZXRlbmRpcyBuZWNlc3NpdGF0aWJ1cy4gVmlzIGNvcnBvcmEgYWNjdW1zYW4gdmVydGVyZW0gYW4sIHZpcyBxdW90IHBlcnBldHVhIGNvbXByZWhlbnNhbSBhZC4gQW4gYXNzdW0gc3VzY2lwaXQgdmVsLCBhbiBzYWVwZSBzY3JpcHNlcml0IGNvbnRlbnRpb25lcyBkdW8sIGNpdmlidXMgZGVsZW5pdGkgdXQgcGVyLiBVc3UgdmVybyByZXF1ZSBncmFlY2UgZXUuJztcbiAgYWJvdXRTdXNoaS5hcHBlbmRDaGlsZChhYm91dFBpY1N1c2hpKTtcbiAgYWJvdXRTdXNoaS5hcHBlbmRDaGlsZChhYm91dFBhcmFTdXNoaSk7XG4gIGFib3V0RGl2LmFwcGVuZENoaWxkKGFib3V0U3VzaGkpO1xuICAvLyBjbGFzcyBhZGRpbmdcbiAgYWJvdXREaXYuY2xhc3NMaXN0LmFkZCgnYWJvdXQnKTtcbiAgYWJvdXRSYW1lbi5jbGFzc0xpc3QuYWRkKCdhYm91dF9fcmFtZW4nKVxuICBhYm91dFBpY1JhbWVuLmNsYXNzTGlzdC5hZGQoJ2Fib3V0X19yYW1lbl9fcGljJyk7XG4gIGFib3V0UGFyYVJhbWVuLmNsYXNzTGlzdC5hZGQoJ2Fib3V0X19yYW1lbl9fcGFyYScpO1xuICBhYm91dFN1c2hpLmNsYXNzTGlzdC5hZGQoJ2Fib3V0X19zdXNoaScpXG4gIGFib3V0UGljU3VzaGkuY2xhc3NMaXN0LmFkZCgnYWJvdXRfX3N1c2hpX19waWMnKTtcbiAgYWJvdXRQYXJhU3VzaGkuY2xhc3NMaXN0LmFkZCgnYWJvdXRfX3N1c2hpX19wYXJhJyk7XG5cbiAgLy8gZW5kIG9mIGNsYXNzIGFkZGluZ1xuICBcblxuICByZXR1cm4gYWJvdXREaXY7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFib3V0OyIsImltcG9ydCBteU1hcCBmcm9tICcuL2ltZy9tYXAtY29udGFjdC5wbmcnXG5mdW5jdGlvbiBjb250YWN0KCl7XG4gIGxldCBjb250YWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCB0ZXh0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBlbWJlZE1hcERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbGV0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGxldCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbGV0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBsZXQgbWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgbmFtZS5pbm5lckhUTUwgPSBcIlRQJ3MgUmFtZW4gYW5kIHN1c2hpXCI7XG4gIGFkZHJlc3MuaW5uZXJIVE1MID0gJ0FkZHJlczogdGhpcyBpcyBhbiBhZGRyZXNzJztcbiAgcGhvbmUuaW5uZXJIVE1MPSdQaG9uZTogKDQ0MyktMTExLTIyMjInO1xuICBlbWFpbC5pbm5lckhUTUw9J0VtYWlsOiB0cHJzQGdtYWlsLmNvbSc7XG4gIG1hcCA9IG5ldyBJbWFnZSgpO1xuICBtYXAuc3JjID0gbXlNYXA7XG5cbiAgXG4gIHRleHREaXYuYXBwZW5kQ2hpbGQobmFtZSk7XG4gIHRleHREaXYuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG4gIHRleHREaXYuYXBwZW5kQ2hpbGQocGhvbmUpO1xuICB0ZXh0RGl2LmFwcGVuZENoaWxkKGVtYWlsKTtcbiAgZW1iZWRNYXBEaXYuYXBwZW5kQ2hpbGQobWFwKTtcbiAgY29udGFjdERpdi5hcHBlbmRDaGlsZCh0ZXh0RGl2KTtcbiAgY29udGFjdERpdi5hcHBlbmRDaGlsZChlbWJlZE1hcERpdik7XG4gIC8vIGNsYXNzIGFkZGluZ1xuICBjb250YWN0RGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcbiAgdGV4dERpdi5jbGFzc0xpc3QuYWRkKCdjb250YWN0X19pbmZvcm1hdGlvbicpO1xuICBlbWJlZE1hcERpdi5jbGFzc0xpc3QuYWRkKCdjb250YWN0X19lbWJlZCcpO1xuICBuYW1lLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RfX2luZm9ybWF0aW9uX19uYW1lJyk7XG4gIGFkZHJlc3MuY2xhc3NMaXN0LmFkZCgnY29udGFjdF9faW5mb3JtYXRpb25fX2FkZHJlc3MnKTtcbiAgcGhvbmUuY2xhc3NMaXN0LmFkZCgnY29udGFjdF9faW5mb3JtYXRpb25fX3Bob25lJyk7XG4gIGVtYWlsLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3RfX2luZm9ybWF0aW9uX19lbWFpbCcpO1xuICBtYXAuY2xhc3NMaXN0LmFkZCgnY29udGFjdF9fZW1iZWRfX21hcCcpO1xuICBcbiAgLy8gZW5kIG9mIGNsYXNzIGFkZGluZ1xuICByZXR1cm4gY29udGFjdERpdjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdDsiLCJpbXBvcnQgckltZzEgZnJvbSAnLi9pbWcvMS1tZW51LXJhbWVuLmpwZyc7XG5pbXBvcnQgckltZzIgZnJvbSAnLi9pbWcvMi1tZW51LXJhbWVuLnBuZyc7XG5pbXBvcnQgckltZzMgZnJvbSAnLi9pbWcvMy1tZW51LXJhbWVuLnBuZyc7XG5pbXBvcnQgckltZzQgZnJvbSAnLi9pbWcvNC1tZW51LXJhbWVuLmpwZyc7XG5pbXBvcnQgc0ltZzEgZnJvbSAnLi9pbWcvMS1tZW51LXN1c2hpLmpwZyc7XG5pbXBvcnQgc0ltZzIgZnJvbSAnLi9pbWcvMi1tZW51LXN1c2hpLmpwZyc7XG5pbXBvcnQgc0ltZzMgZnJvbSAnLi9pbWcvMy1tZW51LXN1c2hpLmpwZyc7XG5pbXBvcnQgc0ltZzQgZnJvbSAnLi9pbWcvNC1tZW51LXN1c2hpLmpwZyc7XG5jb25zdCBSQU1FTl9JTUdTID0gW3JJbWcxLCBySW1nMiwgckltZzMsIHJJbWc0XTtcbmNvbnN0IFNVU0hJX0lNR1MgPSBbc0ltZzEsIHNJbWcyLCBzSW1nMywgc0ltZzRdO1xuZnVuY3Rpb24gbWVudSgpIHtcbiAgbGV0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IG1lbnVSYW1lbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgbWVudVN1c2hpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgbGV0IHJhbWVuVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICByYW1lblRpdGxlLmlubmVySFRNTCA9ICdSYW1lbic7XG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQocmFtZW5UaXRsZSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDQ7IGkrKykge1xuICAgIGxldCByYW1lbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCByYW1lbkltZyA9IG5ldyBJbWFnZSgpO1xuICAgIHJhbWVuSW1nLnNyYyA9IFJBTUVOX0lNR1NbaSAtIDFdO1xuICAgIGxldCByYW1lbkRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHJhbWVuRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gJ0Rlc2NyaXB0aW9uIHJhbWVuJyArIGk7XG4gICAgcmFtZW5EaXYuYXBwZW5kQ2hpbGQocmFtZW5JbWcpO1xuICAgIHJhbWVuRGl2LmFwcGVuZENoaWxkKHJhbWVuRGVzY3JpcHRpb24pO1xuICAgIG1lbnVSYW1lbi5hcHBlbmRDaGlsZChyYW1lbkRpdik7XG5cbiAgICAvLyBjbGFzcyBhZGRpbmdcbiAgICByYW1lbkRpdi5jbGFzc0xpc3QuYWRkKCdtZW51X19yYW1lbl9fJyArIGkpO1xuICAgIHJhbWVuSW1nLmNsYXNzTGlzdC5hZGQoJ21lbnVfX3JhbWVuX19pbWcnKTtcbiAgICByYW1lbkRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ21lbnVfX3JhbWVuX19kZXMnKTtcbiAgICAvLyBlbmQgb2YgY2xhc3MgYWRkaW5nXG4gIH1cbiAgbWVudURpdi5hcHBlbmRDaGlsZChtZW51UmFtZW4pO1xuXG4gIGxldCBzdXNoaVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgc3VzaGlUaXRsZS5pbm5lckhUTUwgPSAnU3VzaGknO1xuICBtZW51RGl2LmFwcGVuZENoaWxkKHN1c2hpVGl0bGUpO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSA0OyBpKyspIHtcbiAgICBsZXQgc3VzaGlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgc3VzaGlJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBzdXNoaUltZy5zcmMgPSBTVVNISV9JTUdTW2kgLSAxXTtcbiAgICBsZXQgc3VzaGlEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBzdXNoaURlc2NyaXB0aW9uLmlubmVySFRNTCA9ICdEZXNjcmlwdGlvbiBzdXNoaScgKyBpO1xuICAgIHN1c2hpRGl2LmFwcGVuZENoaWxkKHN1c2hpSW1nKTtcbiAgICBzdXNoaURpdi5hcHBlbmRDaGlsZChzdXNoaURlc2NyaXB0aW9uKTtcbiAgICBtZW51U3VzaGkuYXBwZW5kQ2hpbGQoc3VzaGlEaXYpO1xuICAgIC8vIGNsYXNzIGFkZGluZ1xuICAgIHN1c2hpRGl2LmNsYXNzTGlzdC5hZGQoJ21lbnVfX3N1c2hpX18nICsgaSk7XG4gICAgc3VzaGlJbWcuY2xhc3NMaXN0LmFkZCgnbWVudV9fc3VzaGlfX2ltZycpO1xuICAgIHN1c2hpRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnbWVudV9fc3VzaGlfX2RlcycpO1xuICAgIC8vIGVuZCBvZiBjbGFzcyBhZGRpbmdcbiAgfVxuICBtZW51RGl2LmFwcGVuZENoaWxkKG1lbnVTdXNoaSk7XG5cbiAgLy8gY2xhc3MgYWRkaW5nXG4gIG1lbnVEaXYuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICBtZW51UmFtZW4uY2xhc3NMaXN0LmFkZCgnbWVudV9fcmFtZW4nKTtcbiAgbWVudVN1c2hpLmNsYXNzTGlzdC5hZGQoJ21lbnVfX3N1c2hpJylcbiAgcmFtZW5UaXRsZS5jbGFzc0xpc3QuYWRkKCdtZW51X190aXRsZScpO1xuICBzdXNoaVRpdGxlLmNsYXNzTGlzdC5hZGQoJ21lbnVfX3RpdGxlJyk7XG5cbiAgLy8gZW5kIG9mIGNsYXNzIGFkZGluZ1xuICByZXR1cm4gbWVudURpdjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVudTsiLCJcbmltcG9ydCBhYm91dCBmcm9tIFwiLi9hYm91dC10YWIuanNcIjtcbmltcG9ydCBtZW51IGZyb20gXCIuL21lbnUtdGFiLmpzXCI7XG5pbXBvcnQgY29udGFjdCBmcm9tIFwiLi9jb250YWN0LXRhYi5qc1wiO1xuaW1wb3J0IGJnSW1nIGZyb20gXCIuL2ltZy9uYXYtYmcuanBnXCJcbmZ1bmN0aW9uIG5hdmJhcigpIHtcbiAgY29uc3QgQ09OVEVOVCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gIGxldCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IHRhYkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgYWJvdXRUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbGV0IG1lbnVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbGV0IGNvbnRhY3RUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICBhYm91dFRhYi5pbm5lckhUTUwgPSAnQUJPVVQnO1xuICBhYm91dFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgQ09OVEVOVC5yZW1vdmVDaGlsZChDT05URU5ULmxhc3RDaGlsZCk7XG4gICAgQ09OVEVOVC5hcHBlbmRDaGlsZChhYm91dCgpKTtcbiAgfSlcbiAgbWVudVRhYi5pbm5lckhUTUwgPSAnTUVOVSc7XG4gIG1lbnVUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIENPTlRFTlQucmVtb3ZlQ2hpbGQoQ09OVEVOVC5sYXN0Q2hpbGQpO1xuICAgIENPTlRFTlQuYXBwZW5kQ2hpbGQobWVudSgpKTtcbiAgfSlcbiAgY29udGFjdFRhYi5pbm5lckhUTUwgPSAnQ09OVEFDVCc7XG4gIGNvbnRhY3RUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIENPTlRFTlQucmVtb3ZlQ2hpbGQoQ09OVEVOVC5sYXN0Q2hpbGQpO1xuICAgIENPTlRFTlQuYXBwZW5kQ2hpbGQoY29udGFjdCgpKTtcbiAgfSlcbiAgLy8gY2FuIGFkZGVkIGltZyBoZXJlXG4gIG5hdkJhci5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7YmdJbWd9KWA7XG4gIFxuICB0YWJEaXYuYXBwZW5kQ2hpbGQoYWJvdXRUYWIpO1xuICB0YWJEaXYuYXBwZW5kQ2hpbGQobWVudVRhYik7XG4gIHRhYkRpdi5hcHBlbmRDaGlsZChjb250YWN0VGFiKTtcbiAgbmF2QmFyLmFwcGVuZENoaWxkKGxvZ28pO1xuICBuYXZCYXIuYXBwZW5kQ2hpbGQodGFiRGl2KTtcbiAgLy8gY2xhc3MgYWRkaW5nXG4gIG5hdkJhci5jbGFzc0xpc3QuYWRkKCduYXYnKTtcbiAgbG9nby5jbGFzc0xpc3QuYWRkKCduYXZfX2xvZ28nKTtcbiAgdGFiRGl2LmNsYXNzTGlzdC5hZGQoJ25hdl9fdGFiJyk7XG4gIGFib3V0VGFiLmNsYXNzTGlzdC5hZGQoJ25hdl9fdGFiX19hYm91dCcpO1xuICBtZW51VGFiLmNsYXNzTGlzdC5hZGQoJ25hdl9fdGFiX19tZW51Jyk7XG4gIGNvbnRhY3RUYWIuY2xhc3NMaXN0LmFkZCgnbmF2X190YWJfX2NvbnRhY3QnKTtcbiAgLy8gZW5kIG9mIGNsYXNzIGFkZGluZ1xuXG4gIGNvbnNvbGUubG9nKGJnSW1nKTtcbiAgcmV0dXJuIG5hdkJhcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbmF2YmFyOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IG5hdmJhciBmcm9tIFwiLi9uYXZiYXIuanNcIjtcbmltcG9ydCBhYm91dCBmcm9tIFwiLi9hYm91dC10YWIuanNcIjtcbmltcG9ydCBtZW51IGZyb20gXCIuL21lbnUtdGFiLmpzXCI7XG5pbXBvcnQgY29udGFjdCBmcm9tIFwiLi9jb250YWN0LXRhYi5qc1wiO1xuaW1wb3J0ICcuLi9kaXN0L2Nzcy9tYWluLmNzcydcbi8vIGltcG9ydCAnLi9zY3NzL2luZGV4LnNjc3MnXG5mdW5jdGlvbiBtYWluKCl7XG4gIGNvbnN0IENPTlRFTlQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBDT05URU5ULmFwcGVuZENoaWxkKG5hdmJhcigpKTtcbiAgQ09OVEVOVC5hcHBlbmRDaGlsZChjb250YWN0KCkpO1xufVxuXG5tYWluKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==