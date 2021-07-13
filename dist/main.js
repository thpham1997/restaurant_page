/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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


function about(){
  let aboutDiv = document.createElement('div');
  
  let aboutPicRamen = new Image();
  let aboutParaRamen = document.createElement('p');
  aboutParaRamen.innerHTML = 'Lorem ipsum dolor sit amet, nostrum constituto te sit, has ea eirmod invenire. Habeo noster ancillae ad duo, eum idque nostrud abhorreant id, ornatus noluisse pro no. Qui ne zril delenit. Ocurreret accusamus nam at. Eam cu elitr liberavisse, nec at feugait oportere, cu audire epicurei periculis eos. Feugiat laboramus complectitur eu per, pro ei aperiri aliquando. Erant consectetuer et sea, at vidisse aliquando his.';
  aboutPicRamen.src = _img_ramen_about_jpg__WEBPACK_IMPORTED_MODULE_0__;
  aboutDiv.appendChild(aboutPicRamen);
  aboutDiv.appendChild(aboutParaRamen);

  let aboutPicSushi = new Image();
  let aboutParaSushi = document.createElement('p');
  aboutPicSushi.src = _img_sushi_about_jpg__WEBPACK_IMPORTED_MODULE_1__;
  aboutParaSushi.innerHTML = 'Et duo mentitum consetetur, ea per vivendo officiis. Per aeterno fierent inciderint et, pri eu tantas comprehensam. At case nulla eum, an pri nulla tempor maiorum. Eius posidonium pri cu, ad vix patrioque expetendis necessitatibus. Vis corpora accumsan verterem an, vis quot perpetua comprehensam ad. An assum suscipit vel, an saepe scripserit contentiones duo, civibus deleniti ut per. Usu vero reque graece eu.';
  aboutDiv.appendChild(aboutPicSushi);
  aboutDiv.appendChild(aboutParaSushi);

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
  let name = document.createElement('p');
  let address = document.createElement('p');
  let phone = document.createElement('p');
  let email = document.createElement('p');
  let map = document.createElement('div');

  name.innerHTML = "TP's Ramen and sushi";
  address.innerHTML = 'This is an address';
  phone.innerHTML='(443)-111-2222';
  email.innerHTML='tprs@gmail.com';
  map = new Image();
  map.src = _img_map_contact_png__WEBPACK_IMPORTED_MODULE_0__;


  contactDiv.appendChild(name);
  contactDiv.appendChild(address);
  contactDiv.appendChild(phone);
  contactDiv.appendChild(email);
  contactDiv.appendChild(map);
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

  let ramenTitle = document.createElement('h2');
  ramenTitle.innerHTML = 'Ramen';
  menuDiv.appendChild(ramenTitle);
  for (let i = 1; i <= 4; i++) {
    let ramenDiv = document.createElement('div');
    let ramenImg = new Image();
    ramenImg.src = RAMEN_IMGS[i-1];
    let ramenDescription = document.createElement('p');
    ramenDescription.innerHTML = 'Description ramen' + i;
    ramenDiv.appendChild(ramenImg);
    ramenDiv.appendChild(ramenDescription);
    menuDiv.appendChild(ramenDiv);
  }

  let sushiTitle = document.createElement('h2');
  sushiTitle.innerHTML = 'Sushi';
  menuDiv.appendChild(sushiTitle);
  for (let i = 1; i <= 4; i++) {
    let sushiDiv = document.createElement('div');
    let sushiImg = new Image();
    sushiImg.src = SUSHI_IMGS[i-1];
    let sushiDescription = document.createElement('p');
    sushiDescription.innerHTML = 'Description sushi' + i;
    sushiDiv.appendChild(sushiImg);
    sushiDiv.appendChild(sushiDescription);
    menuDiv.appendChild(sushiDiv);
  }
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





function navbar() {
  const CONTENT = document.getElementById('content');
  let navBar = document.createElement('ul');
  let aboutTab = document.createElement('li');
  let menuTab = document.createElement('li');
  let contactTab = document.createElement('li');

  aboutTab.innerHTML = 'ABOUT';
  aboutTab.addEventListener('click', (e)=>{
    CONTENT.removeChild(CONTENT.lastChild);
    CONTENT.appendChild((0,_about_tab_js__WEBPACK_IMPORTED_MODULE_0__.default)());
  })
  menuTab.innerHTML = 'MENU';
  menuTab.addEventListener('click', (e)=>{
    CONTENT.removeChild(CONTENT.lastChild);
    CONTENT.appendChild((0,_menu_tab_js__WEBPACK_IMPORTED_MODULE_1__.default)());
  })
  contactTab.innerHTML = 'CONTACT';
  contactTab.addEventListener('click', (e)=>{
    CONTENT.removeChild(CONTENT.lastChild);
    CONTENT.appendChild((0,_contact_tab_js__WEBPACK_IMPORTED_MODULE_2__.default)());
  })

  navBar.appendChild(aboutTab);
  navBar.appendChild(menuTab);
  navBar.appendChild(contactTab);
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
/******/ 			// no module.id needed
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




function main(){
  const CONTENT = document.getElementById('content');
  CONTENT.appendChild((0,_navbar_js__WEBPACK_IMPORTED_MODULE_0__.default)());
  CONTENT.appendChild((0,_about_tab_js__WEBPACK_IMPORTED_MODULE_1__.default)());
}

main();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbG9uZWRfcmVzdGF1cmFudF9wYWdlLy4vc3JjL2Fib3V0LXRhYi5qcyIsIndlYnBhY2s6Ly9jbG9uZWRfcmVzdGF1cmFudF9wYWdlLy4vc3JjL2NvbnRhY3QtdGFiLmpzIiwid2VicGFjazovL2Nsb25lZF9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbWVudS10YWIuanMiLCJ3ZWJwYWNrOi8vY2xvbmVkX3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vY2xvbmVkX3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jbG9uZWRfcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jbG9uZWRfcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vY2xvbmVkX3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nsb25lZF9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jbG9uZWRfcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2Nsb25lZF9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QztBQUNBO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlEQUFRO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNCQUFzQixpREFBUTtBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxLQUFLLEU7Ozs7Ozs7Ozs7Ozs7OztBQ3RCcUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksaURBQUs7OztBQUdqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxPQUFPLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCcUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUMzQyxvQkFBb0Isa0RBQUssRUFBRSxrREFBSyxFQUFFLGtEQUFLLEVBQUUsa0RBQUs7QUFDOUMsb0JBQW9CLGtEQUFLLEVBQUUsa0RBQUssRUFBRSxrREFBSyxFQUFFLGtEQUFLO0FBQzlDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQ2dCO0FBQ0Y7QUFDTTs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixzREFBSztBQUM3QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFEQUFJO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isd0RBQU87QUFDL0IsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE1BQU0sRTs7Ozs7O1VDbENyQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTtXQUNBLENBQUMsSTs7Ozs7V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7Ozs7Ozs7Ozs7Ozs7O0FDZmlDO0FBQ0U7QUFDRjtBQUNNO0FBQ3ZDO0FBQ0E7QUFDQSxzQkFBc0IsbURBQU07QUFDNUIsc0JBQXNCLHNEQUFLO0FBQzNCOztBQUVBLE8iLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByYW1lbkltZyBmcm9tICcuL2ltZy9yYW1lbi1hYm91dC5qcGcnO1xuaW1wb3J0IHN1c2hpSW1nIGZyb20gJy4vaW1nL3N1c2hpLWFib3V0LmpwZyc7XG5mdW5jdGlvbiBhYm91dCgpe1xuICBsZXQgYWJvdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgXG4gIGxldCBhYm91dFBpY1JhbWVuID0gbmV3IEltYWdlKCk7XG4gIGxldCBhYm91dFBhcmFSYW1lbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgYWJvdXRQYXJhUmFtZW4uaW5uZXJIVE1MID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBub3N0cnVtIGNvbnN0aXR1dG8gdGUgc2l0LCBoYXMgZWEgZWlybW9kIGludmVuaXJlLiBIYWJlbyBub3N0ZXIgYW5jaWxsYWUgYWQgZHVvLCBldW0gaWRxdWUgbm9zdHJ1ZCBhYmhvcnJlYW50IGlkLCBvcm5hdHVzIG5vbHVpc3NlIHBybyBuby4gUXVpIG5lIHpyaWwgZGVsZW5pdC4gT2N1cnJlcmV0IGFjY3VzYW11cyBuYW0gYXQuIEVhbSBjdSBlbGl0ciBsaWJlcmF2aXNzZSwgbmVjIGF0IGZldWdhaXQgb3BvcnRlcmUsIGN1IGF1ZGlyZSBlcGljdXJlaSBwZXJpY3VsaXMgZW9zLiBGZXVnaWF0IGxhYm9yYW11cyBjb21wbGVjdGl0dXIgZXUgcGVyLCBwcm8gZWkgYXBlcmlyaSBhbGlxdWFuZG8uIEVyYW50IGNvbnNlY3RldHVlciBldCBzZWEsIGF0IHZpZGlzc2UgYWxpcXVhbmRvIGhpcy4nO1xuICBhYm91dFBpY1JhbWVuLnNyYyA9IHJhbWVuSW1nO1xuICBhYm91dERpdi5hcHBlbmRDaGlsZChhYm91dFBpY1JhbWVuKTtcbiAgYWJvdXREaXYuYXBwZW5kQ2hpbGQoYWJvdXRQYXJhUmFtZW4pO1xuXG4gIGxldCBhYm91dFBpY1N1c2hpID0gbmV3IEltYWdlKCk7XG4gIGxldCBhYm91dFBhcmFTdXNoaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgYWJvdXRQaWNTdXNoaS5zcmMgPSBzdXNoaUltZztcbiAgYWJvdXRQYXJhU3VzaGkuaW5uZXJIVE1MID0gJ0V0IGR1byBtZW50aXR1bSBjb25zZXRldHVyLCBlYSBwZXIgdml2ZW5kbyBvZmZpY2lpcy4gUGVyIGFldGVybm8gZmllcmVudCBpbmNpZGVyaW50IGV0LCBwcmkgZXUgdGFudGFzIGNvbXByZWhlbnNhbS4gQXQgY2FzZSBudWxsYSBldW0sIGFuIHByaSBudWxsYSB0ZW1wb3IgbWFpb3J1bS4gRWl1cyBwb3NpZG9uaXVtIHByaSBjdSwgYWQgdml4IHBhdHJpb3F1ZSBleHBldGVuZGlzIG5lY2Vzc2l0YXRpYnVzLiBWaXMgY29ycG9yYSBhY2N1bXNhbiB2ZXJ0ZXJlbSBhbiwgdmlzIHF1b3QgcGVycGV0dWEgY29tcHJlaGVuc2FtIGFkLiBBbiBhc3N1bSBzdXNjaXBpdCB2ZWwsIGFuIHNhZXBlIHNjcmlwc2VyaXQgY29udGVudGlvbmVzIGR1bywgY2l2aWJ1cyBkZWxlbml0aSB1dCBwZXIuIFVzdSB2ZXJvIHJlcXVlIGdyYWVjZSBldS4nO1xuICBhYm91dERpdi5hcHBlbmRDaGlsZChhYm91dFBpY1N1c2hpKTtcbiAgYWJvdXREaXYuYXBwZW5kQ2hpbGQoYWJvdXRQYXJhU3VzaGkpO1xuXG4gIHJldHVybiBhYm91dERpdjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWJvdXQ7IiwiaW1wb3J0IG15TWFwIGZyb20gJy4vaW1nL21hcC1jb250YWN0LnBuZydcbmZ1bmN0aW9uIGNvbnRhY3QoKXtcbiAgbGV0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGxldCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBsZXQgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGxldCBlbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbGV0IG1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIG5hbWUuaW5uZXJIVE1MID0gXCJUUCdzIFJhbWVuIGFuZCBzdXNoaVwiO1xuICBhZGRyZXNzLmlubmVySFRNTCA9ICdUaGlzIGlzIGFuIGFkZHJlc3MnO1xuICBwaG9uZS5pbm5lckhUTUw9Jyg0NDMpLTExMS0yMjIyJztcbiAgZW1haWwuaW5uZXJIVE1MPSd0cHJzQGdtYWlsLmNvbSc7XG4gIG1hcCA9IG5ldyBJbWFnZSgpO1xuICBtYXAuc3JjID0gbXlNYXA7XG5cblxuICBjb250YWN0RGl2LmFwcGVuZENoaWxkKG5hbWUpO1xuICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuICBjb250YWN0RGl2LmFwcGVuZENoaWxkKHBob25lKTtcbiAgY29udGFjdERpdi5hcHBlbmRDaGlsZChlbWFpbCk7XG4gIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQobWFwKTtcbiAgcmV0dXJuIGNvbnRhY3REaXY7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRhY3Q7IiwiaW1wb3J0IHJJbWcxIGZyb20gJy4vaW1nLzEtbWVudS1yYW1lbi5qcGcnO1xuaW1wb3J0IHJJbWcyIGZyb20gJy4vaW1nLzItbWVudS1yYW1lbi5wbmcnO1xuaW1wb3J0IHJJbWczIGZyb20gJy4vaW1nLzMtbWVudS1yYW1lbi5wbmcnO1xuaW1wb3J0IHJJbWc0IGZyb20gJy4vaW1nLzQtbWVudS1yYW1lbi5qcGcnO1xuaW1wb3J0IHNJbWcxIGZyb20gJy4vaW1nLzEtbWVudS1zdXNoaS5qcGcnO1xuaW1wb3J0IHNJbWcyIGZyb20gJy4vaW1nLzItbWVudS1zdXNoaS5qcGcnO1xuaW1wb3J0IHNJbWczIGZyb20gJy4vaW1nLzMtbWVudS1zdXNoaS5qcGcnO1xuaW1wb3J0IHNJbWc0IGZyb20gJy4vaW1nLzQtbWVudS1zdXNoaS5qcGcnO1xuY29uc3QgUkFNRU5fSU1HUyA9IFtySW1nMSwgckltZzIsIHJJbWczLCBySW1nNF07XG5jb25zdCBTVVNISV9JTUdTID0gW3NJbWcxLCBzSW1nMiwgc0ltZzMsIHNJbWc0XTtcbmZ1bmN0aW9uIG1lbnUoKSB7XG4gIGxldCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgbGV0IHJhbWVuVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICByYW1lblRpdGxlLmlubmVySFRNTCA9ICdSYW1lbic7XG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQocmFtZW5UaXRsZSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDQ7IGkrKykge1xuICAgIGxldCByYW1lbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCByYW1lbkltZyA9IG5ldyBJbWFnZSgpO1xuICAgIHJhbWVuSW1nLnNyYyA9IFJBTUVOX0lNR1NbaS0xXTtcbiAgICBsZXQgcmFtZW5EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICByYW1lbkRlc2NyaXB0aW9uLmlubmVySFRNTCA9ICdEZXNjcmlwdGlvbiByYW1lbicgKyBpO1xuICAgIHJhbWVuRGl2LmFwcGVuZENoaWxkKHJhbWVuSW1nKTtcbiAgICByYW1lbkRpdi5hcHBlbmRDaGlsZChyYW1lbkRlc2NyaXB0aW9uKTtcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKHJhbWVuRGl2KTtcbiAgfVxuXG4gIGxldCBzdXNoaVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgc3VzaGlUaXRsZS5pbm5lckhUTUwgPSAnU3VzaGknO1xuICBtZW51RGl2LmFwcGVuZENoaWxkKHN1c2hpVGl0bGUpO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSA0OyBpKyspIHtcbiAgICBsZXQgc3VzaGlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgc3VzaGlJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBzdXNoaUltZy5zcmMgPSBTVVNISV9JTUdTW2ktMV07XG4gICAgbGV0IHN1c2hpRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc3VzaGlEZXNjcmlwdGlvbi5pbm5lckhUTUwgPSAnRGVzY3JpcHRpb24gc3VzaGknICsgaTtcbiAgICBzdXNoaURpdi5hcHBlbmRDaGlsZChzdXNoaUltZyk7XG4gICAgc3VzaGlEaXYuYXBwZW5kQ2hpbGQoc3VzaGlEZXNjcmlwdGlvbik7XG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChzdXNoaURpdik7XG4gIH1cbiAgcmV0dXJuIG1lbnVEaXY7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbnU7IiwiXG5pbXBvcnQgYWJvdXQgZnJvbSBcIi4vYWJvdXQtdGFiLmpzXCI7XG5pbXBvcnQgbWVudSBmcm9tIFwiLi9tZW51LXRhYi5qc1wiO1xuaW1wb3J0IGNvbnRhY3QgZnJvbSBcIi4vY29udGFjdC10YWIuanNcIjtcblxuZnVuY3Rpb24gbmF2YmFyKCkge1xuICBjb25zdCBDT05URU5UID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgbGV0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIGxldCBhYm91dFRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGxldCBtZW51VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbGV0IGNvbnRhY3RUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuXG4gIGFib3V0VGFiLmlubmVySFRNTCA9ICdBQk9VVCc7XG4gIGFib3V0VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XG4gICAgQ09OVEVOVC5yZW1vdmVDaGlsZChDT05URU5ULmxhc3RDaGlsZCk7XG4gICAgQ09OVEVOVC5hcHBlbmRDaGlsZChhYm91dCgpKTtcbiAgfSlcbiAgbWVudVRhYi5pbm5lckhUTUwgPSAnTUVOVSc7XG4gIG1lbnVUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcbiAgICBDT05URU5ULnJlbW92ZUNoaWxkKENPTlRFTlQubGFzdENoaWxkKTtcbiAgICBDT05URU5ULmFwcGVuZENoaWxkKG1lbnUoKSk7XG4gIH0pXG4gIGNvbnRhY3RUYWIuaW5uZXJIVE1MID0gJ0NPTlRBQ1QnO1xuICBjb250YWN0VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XG4gICAgQ09OVEVOVC5yZW1vdmVDaGlsZChDT05URU5ULmxhc3RDaGlsZCk7XG4gICAgQ09OVEVOVC5hcHBlbmRDaGlsZChjb250YWN0KCkpO1xuICB9KVxuXG4gIG5hdkJhci5hcHBlbmRDaGlsZChhYm91dFRhYik7XG4gIG5hdkJhci5hcHBlbmRDaGlsZChtZW51VGFiKTtcbiAgbmF2QmFyLmFwcGVuZENoaWxkKGNvbnRhY3RUYWIpO1xuICByZXR1cm4gbmF2QmFyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBuYXZiYXI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IG5hdmJhciBmcm9tIFwiLi9uYXZiYXIuanNcIjtcbmltcG9ydCBhYm91dCBmcm9tIFwiLi9hYm91dC10YWIuanNcIjtcbmltcG9ydCBtZW51IGZyb20gXCIuL21lbnUtdGFiLmpzXCI7XG5pbXBvcnQgY29udGFjdCBmcm9tIFwiLi9jb250YWN0LXRhYi5qc1wiO1xuZnVuY3Rpb24gbWFpbigpe1xuICBjb25zdCBDT05URU5UID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcbiAgQ09OVEVOVC5hcHBlbmRDaGlsZChuYXZiYXIoKSk7XG4gIENPTlRFTlQuYXBwZW5kQ2hpbGQoYWJvdXQoKSk7XG59XG5cbm1haW4oKTsiXSwic291cmNlUm9vdCI6IiJ9