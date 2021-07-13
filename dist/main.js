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
  aboutSushi.classList.add('about__ramen')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jbG9uZWRfcmVzdGF1cmFudF9wYWdlLy4vc3JjL2Fib3V0LXRhYi5qcyIsIndlYnBhY2s6Ly9jbG9uZWRfcmVzdGF1cmFudF9wYWdlLy4vc3JjL2NvbnRhY3QtdGFiLmpzIiwid2VicGFjazovL2Nsb25lZF9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbWVudS10YWIuanMiLCJ3ZWJwYWNrOi8vY2xvbmVkX3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vY2xvbmVkX3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jbG9uZWRfcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jbG9uZWRfcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vY2xvbmVkX3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nsb25lZF9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jbG9uZWRfcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2Nsb25lZF9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUE2QztBQUNBO0FBQzdDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaURBQVE7QUFDOUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpREFBUTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUEsaUVBQWUsS0FBSyxFOzs7Ozs7Ozs7Ozs7Ozs7QUNyQ3FCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGlEQUFLOzs7QUFHakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsT0FBTyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QnFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDM0Msb0JBQW9CLGtEQUFLLEVBQUUsa0RBQUssRUFBRSxrREFBSyxFQUFFLGtEQUFLO0FBQzlDLG9CQUFvQixrREFBSyxFQUFFLGtEQUFLLEVBQUUsa0RBQUssRUFBRSxrREFBSztBQUM5QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUNnQjtBQUNGO0FBQ007O0FBRXZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isc0RBQUs7QUFDN0IsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixxREFBSTtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHdEQUFPO0FBQy9CLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxNQUFNLEU7Ozs7OztVQ2xDckI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRUFBRTtXQUNGO1dBQ0E7V0FDQSxDQUFDLEk7Ozs7O1dDUEQsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esa0M7Ozs7Ozs7Ozs7Ozs7OztBQ2ZpQztBQUNFO0FBQ0Y7QUFDTTtBQUN2QztBQUNBO0FBQ0Esc0JBQXNCLG1EQUFNO0FBQzVCLHNCQUFzQixzREFBSztBQUMzQjs7QUFFQSxPIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmFtZW5JbWcgZnJvbSAnLi9pbWcvcmFtZW4tYWJvdXQuanBnJztcbmltcG9ydCBzdXNoaUltZyBmcm9tICcuL2ltZy9zdXNoaS1hYm91dC5qcGcnO1xuZnVuY3Rpb24gYWJvdXQoKSB7XG4gIGxldCBhYm91dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGxldCBhYm91dFJhbWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCBhYm91dFBpY1JhbWVuID0gbmV3IEltYWdlKCk7XG4gIGxldCBhYm91dFBhcmFSYW1lbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgYWJvdXRQYXJhUmFtZW4uaW5uZXJIVE1MID0gJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBub3N0cnVtIGNvbnN0aXR1dG8gdGUgc2l0LCBoYXMgZWEgZWlybW9kIGludmVuaXJlLiBIYWJlbyBub3N0ZXIgYW5jaWxsYWUgYWQgZHVvLCBldW0gaWRxdWUgbm9zdHJ1ZCBhYmhvcnJlYW50IGlkLCBvcm5hdHVzIG5vbHVpc3NlIHBybyBuby4gUXVpIG5lIHpyaWwgZGVsZW5pdC4gT2N1cnJlcmV0IGFjY3VzYW11cyBuYW0gYXQuIEVhbSBjdSBlbGl0ciBsaWJlcmF2aXNzZSwgbmVjIGF0IGZldWdhaXQgb3BvcnRlcmUsIGN1IGF1ZGlyZSBlcGljdXJlaSBwZXJpY3VsaXMgZW9zLiBGZXVnaWF0IGxhYm9yYW11cyBjb21wbGVjdGl0dXIgZXUgcGVyLCBwcm8gZWkgYXBlcmlyaSBhbGlxdWFuZG8uIEVyYW50IGNvbnNlY3RldHVlciBldCBzZWEsIGF0IHZpZGlzc2UgYWxpcXVhbmRvIGhpcy4nO1xuICBhYm91dFBpY1JhbWVuLnNyYyA9IHJhbWVuSW1nO1xuICBhYm91dFJhbWVuLmFwcGVuZENoaWxkKGFib3V0UGljUmFtZW4pO1xuICBhYm91dFJhbWVuLmFwcGVuZENoaWxkKGFib3V0UGFyYVJhbWVuKTtcbiAgYWJvdXREaXYuYXBwZW5kQ2hpbGQoYWJvdXRSYW1lbik7XG5cbiAgbGV0IGFib3V0U3VzaGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbGV0IGFib3V0UGljU3VzaGkgPSBuZXcgSW1hZ2UoKTtcbiAgbGV0IGFib3V0UGFyYVN1c2hpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBhYm91dFBpY1N1c2hpLnNyYyA9IHN1c2hpSW1nO1xuICBhYm91dFBhcmFTdXNoaS5pbm5lckhUTUwgPSAnRXQgZHVvIG1lbnRpdHVtIGNvbnNldGV0dXIsIGVhIHBlciB2aXZlbmRvIG9mZmljaWlzLiBQZXIgYWV0ZXJubyBmaWVyZW50IGluY2lkZXJpbnQgZXQsIHByaSBldSB0YW50YXMgY29tcHJlaGVuc2FtLiBBdCBjYXNlIG51bGxhIGV1bSwgYW4gcHJpIG51bGxhIHRlbXBvciBtYWlvcnVtLiBFaXVzIHBvc2lkb25pdW0gcHJpIGN1LCBhZCB2aXggcGF0cmlvcXVlIGV4cGV0ZW5kaXMgbmVjZXNzaXRhdGlidXMuIFZpcyBjb3Jwb3JhIGFjY3Vtc2FuIHZlcnRlcmVtIGFuLCB2aXMgcXVvdCBwZXJwZXR1YSBjb21wcmVoZW5zYW0gYWQuIEFuIGFzc3VtIHN1c2NpcGl0IHZlbCwgYW4gc2FlcGUgc2NyaXBzZXJpdCBjb250ZW50aW9uZXMgZHVvLCBjaXZpYnVzIGRlbGVuaXRpIHV0IHBlci4gVXN1IHZlcm8gcmVxdWUgZ3JhZWNlIGV1Lic7XG4gIGFib3V0U3VzaGkuYXBwZW5kQ2hpbGQoYWJvdXRQaWNTdXNoaSk7XG4gIGFib3V0U3VzaGkuYXBwZW5kQ2hpbGQoYWJvdXRQYXJhU3VzaGkpO1xuICBhYm91dERpdi5hcHBlbmRDaGlsZChhYm91dFN1c2hpKTtcbiAgLy8gY2xhc3MgYWRkaW5nXG4gIGFib3V0RGl2LmNsYXNzTGlzdC5hZGQoJ2Fib3V0Jyk7XG4gIGFib3V0UmFtZW4uY2xhc3NMaXN0LmFkZCgnYWJvdXRfX3JhbWVuJylcbiAgYWJvdXRQaWNSYW1lbi5jbGFzc0xpc3QuYWRkKCdhYm91dF9fcmFtZW5fX3BpYycpO1xuICBhYm91dFBhcmFSYW1lbi5jbGFzc0xpc3QuYWRkKCdhYm91dF9fcmFtZW5fX3BhcmEnKTtcbiAgYWJvdXRTdXNoaS5jbGFzc0xpc3QuYWRkKCdhYm91dF9fcmFtZW4nKVxuICBhYm91dFBpY1N1c2hpLmNsYXNzTGlzdC5hZGQoJ2Fib3V0X19zdXNoaV9fcGljJyk7XG4gIGFib3V0UGFyYVN1c2hpLmNsYXNzTGlzdC5hZGQoJ2Fib3V0X19zdXNoaV9fcGFyYScpO1xuXG4gIC8vIGVuZCBvZiBjbGFzcyBhZGRpbmdcbiAgXG5cbiAgcmV0dXJuIGFib3V0RGl2O1xufVxuXG5leHBvcnQgZGVmYXVsdCBhYm91dDsiLCJpbXBvcnQgbXlNYXAgZnJvbSAnLi9pbWcvbWFwLWNvbnRhY3QucG5nJ1xuZnVuY3Rpb24gY29udGFjdCgpe1xuICBsZXQgY29udGFjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBsZXQgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbGV0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGxldCBwaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbGV0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBsZXQgbWFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgbmFtZS5pbm5lckhUTUwgPSBcIlRQJ3MgUmFtZW4gYW5kIHN1c2hpXCI7XG4gIGFkZHJlc3MuaW5uZXJIVE1MID0gJ1RoaXMgaXMgYW4gYWRkcmVzcyc7XG4gIHBob25lLmlubmVySFRNTD0nKDQ0MyktMTExLTIyMjInO1xuICBlbWFpbC5pbm5lckhUTUw9J3RwcnNAZ21haWwuY29tJztcbiAgbWFwID0gbmV3IEltYWdlKCk7XG4gIG1hcC5zcmMgPSBteU1hcDtcblxuXG4gIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQobmFtZSk7XG4gIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG4gIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQocGhvbmUpO1xuICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGVtYWlsKTtcbiAgY29udGFjdERpdi5hcHBlbmRDaGlsZChtYXApO1xuICByZXR1cm4gY29udGFjdERpdjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdDsiLCJpbXBvcnQgckltZzEgZnJvbSAnLi9pbWcvMS1tZW51LXJhbWVuLmpwZyc7XG5pbXBvcnQgckltZzIgZnJvbSAnLi9pbWcvMi1tZW51LXJhbWVuLnBuZyc7XG5pbXBvcnQgckltZzMgZnJvbSAnLi9pbWcvMy1tZW51LXJhbWVuLnBuZyc7XG5pbXBvcnQgckltZzQgZnJvbSAnLi9pbWcvNC1tZW51LXJhbWVuLmpwZyc7XG5pbXBvcnQgc0ltZzEgZnJvbSAnLi9pbWcvMS1tZW51LXN1c2hpLmpwZyc7XG5pbXBvcnQgc0ltZzIgZnJvbSAnLi9pbWcvMi1tZW51LXN1c2hpLmpwZyc7XG5pbXBvcnQgc0ltZzMgZnJvbSAnLi9pbWcvMy1tZW51LXN1c2hpLmpwZyc7XG5pbXBvcnQgc0ltZzQgZnJvbSAnLi9pbWcvNC1tZW51LXN1c2hpLmpwZyc7XG5jb25zdCBSQU1FTl9JTUdTID0gW3JJbWcxLCBySW1nMiwgckltZzMsIHJJbWc0XTtcbmNvbnN0IFNVU0hJX0lNR1MgPSBbc0ltZzEsIHNJbWcyLCBzSW1nMywgc0ltZzRdO1xuZnVuY3Rpb24gbWVudSgpIHtcbiAgbGV0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBsZXQgcmFtZW5UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHJhbWVuVGl0bGUuaW5uZXJIVE1MID0gJ1JhbWVuJztcbiAgbWVudURpdi5hcHBlbmRDaGlsZChyYW1lblRpdGxlKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNDsgaSsrKSB7XG4gICAgbGV0IHJhbWVuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbGV0IHJhbWVuSW1nID0gbmV3IEltYWdlKCk7XG4gICAgcmFtZW5JbWcuc3JjID0gUkFNRU5fSU1HU1tpLTFdO1xuICAgIGxldCByYW1lbkRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHJhbWVuRGVzY3JpcHRpb24uaW5uZXJIVE1MID0gJ0Rlc2NyaXB0aW9uIHJhbWVuJyArIGk7XG4gICAgcmFtZW5EaXYuYXBwZW5kQ2hpbGQocmFtZW5JbWcpO1xuICAgIHJhbWVuRGl2LmFwcGVuZENoaWxkKHJhbWVuRGVzY3JpcHRpb24pO1xuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQocmFtZW5EaXYpO1xuICB9XG5cbiAgbGV0IHN1c2hpVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBzdXNoaVRpdGxlLmlubmVySFRNTCA9ICdTdXNoaSc7XG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQoc3VzaGlUaXRsZSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IDQ7IGkrKykge1xuICAgIGxldCBzdXNoaURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxldCBzdXNoaUltZyA9IG5ldyBJbWFnZSgpO1xuICAgIHN1c2hpSW1nLnNyYyA9IFNVU0hJX0lNR1NbaS0xXTtcbiAgICBsZXQgc3VzaGlEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBzdXNoaURlc2NyaXB0aW9uLmlubmVySFRNTCA9ICdEZXNjcmlwdGlvbiBzdXNoaScgKyBpO1xuICAgIHN1c2hpRGl2LmFwcGVuZENoaWxkKHN1c2hpSW1nKTtcbiAgICBzdXNoaURpdi5hcHBlbmRDaGlsZChzdXNoaURlc2NyaXB0aW9uKTtcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKHN1c2hpRGl2KTtcbiAgfVxuICByZXR1cm4gbWVudURpdjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWVudTsiLCJcbmltcG9ydCBhYm91dCBmcm9tIFwiLi9hYm91dC10YWIuanNcIjtcbmltcG9ydCBtZW51IGZyb20gXCIuL21lbnUtdGFiLmpzXCI7XG5pbXBvcnQgY29udGFjdCBmcm9tIFwiLi9jb250YWN0LXRhYi5qc1wiO1xuXG5mdW5jdGlvbiBuYXZiYXIoKSB7XG4gIGNvbnN0IENPTlRFTlQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBsZXQgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgbGV0IGFib3V0VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgbGV0IG1lbnVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBsZXQgY29udGFjdFRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgYWJvdXRUYWIuaW5uZXJIVE1MID0gJ0FCT1VUJztcbiAgYWJvdXRUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcbiAgICBDT05URU5ULnJlbW92ZUNoaWxkKENPTlRFTlQubGFzdENoaWxkKTtcbiAgICBDT05URU5ULmFwcGVuZENoaWxkKGFib3V0KCkpO1xuICB9KVxuICBtZW51VGFiLmlubmVySFRNTCA9ICdNRU5VJztcbiAgbWVudVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xuICAgIENPTlRFTlQucmVtb3ZlQ2hpbGQoQ09OVEVOVC5sYXN0Q2hpbGQpO1xuICAgIENPTlRFTlQuYXBwZW5kQ2hpbGQobWVudSgpKTtcbiAgfSlcbiAgY29udGFjdFRhYi5pbm5lckhUTUwgPSAnQ09OVEFDVCc7XG4gIGNvbnRhY3RUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcbiAgICBDT05URU5ULnJlbW92ZUNoaWxkKENPTlRFTlQubGFzdENoaWxkKTtcbiAgICBDT05URU5ULmFwcGVuZENoaWxkKGNvbnRhY3QoKSk7XG4gIH0pXG5cbiAgbmF2QmFyLmFwcGVuZENoaWxkKGFib3V0VGFiKTtcbiAgbmF2QmFyLmFwcGVuZENoaWxkKG1lbnVUYWIpO1xuICBuYXZCYXIuYXBwZW5kQ2hpbGQoY29udGFjdFRhYik7XG4gIHJldHVybiBuYXZCYXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5hdmJhcjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgbmF2YmFyIGZyb20gXCIuL25hdmJhci5qc1wiO1xuaW1wb3J0IGFib3V0IGZyb20gXCIuL2Fib3V0LXRhYi5qc1wiO1xuaW1wb3J0IG1lbnUgZnJvbSBcIi4vbWVudS10YWIuanNcIjtcbmltcG9ydCBjb250YWN0IGZyb20gXCIuL2NvbnRhY3QtdGFiLmpzXCI7XG5mdW5jdGlvbiBtYWluKCl7XG4gIGNvbnN0IENPTlRFTlQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICBDT05URU5ULmFwcGVuZENoaWxkKG5hdmJhcigpKTtcbiAgQ09OVEVOVC5hcHBlbmRDaGlsZChhYm91dCgpKTtcbn1cblxubWFpbigpOyJdLCJzb3VyY2VSb290IjoiIn0=