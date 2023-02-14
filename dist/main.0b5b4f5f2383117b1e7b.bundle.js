/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/imgs/cloud.png":
/*!****************************!*\
  !*** ./src/imgs/cloud.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgs/90f6b26e8a65e7f56c5e.png";

/***/ }),

/***/ "./src/imgs/rain.png":
/*!***************************!*\
  !*** ./src/imgs/rain.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgs/a6fa12a7f897d52666bc.png";

/***/ }),

/***/ "./src/imgs/snow.png":
/*!***************************!*\
  !*** ./src/imgs/snow.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgs/65eefe5a638b4aa22408.png";

/***/ }),

/***/ "./src/imgs/sun.png":
/*!**************************!*\
  !*** ./src/imgs/sun.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "imgs/3fc3c89daabb0f9f919a.png";

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
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _imgs_sun_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./imgs/sun.png */ "./src/imgs/sun.png");
/* harmony import */ var _imgs_cloud_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imgs/cloud.png */ "./src/imgs/cloud.png");
/* harmony import */ var _imgs_rain_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imgs/rain.png */ "./src/imgs/rain.png");
/* harmony import */ var _imgs_snow_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imgs/snow.png */ "./src/imgs/snow.png");





var container = document.querySelector('.container');
var search = document.querySelector('.search-box button');
var weatherBox = document.querySelector('.weather-box');
var weatherDetails = document.querySelector('.weather-details');
var error = document.querySelector('.not-found');
search.addEventListener('click', function () {
  var ApiKey = 'cff8abd09d99fff54281f23926fb4bfe';
  var city = document.querySelector('.search-box input').value;
  if (city === '') return;
  fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(city, "&units=metric&appid=").concat(ApiKey)).then(function (response) {
    return response.json();
  }).then(function (json) {
    if (json.cod === '404') {
      container.style.height = '400px';
      weatherBox.style.display = 'none';
      weatherDetails.style.display = 'none';
      error.style.display = 'block';
      error.classList.add('In');
      return;
    }
    error.style.display = 'none';
    error.classList.remove('In');
    var image = document.querySelector('.weather-box img');
    var temp = document.querySelector('.weather-box .temp');
    var desc = document.querySelector('.weather-box .desc');
    var humidity = document.querySelector('.weather-details .humidity span');
    var wind = document.querySelector('.weather-details .wind span');
    switch (json.weather[0].main) {
      case 'Clear':
        image.src = _imgs_sun_png__WEBPACK_IMPORTED_MODULE_1__;
        break;
      case 'Clouds':
        image.src = _imgs_cloud_png__WEBPACK_IMPORTED_MODULE_2__;
        break;
      case 'Rain':
        image.src = _imgs_rain_png__WEBPACK_IMPORTED_MODULE_3__;
        break;
      case 'Snow':
        image.src = _imgs_snow_png__WEBPACK_IMPORTED_MODULE_4__;
        break;
      default:
        image.src = '';
    }
    temp.innerHTML = "".concat(parseInt(json.main.temp), "<span>\xB0C<span>");
    desc.innerHTML = "".concat(json.weather[0].description);
    humidity.innerHTML = "".concat(parseInt(json.main.humidity), "%");
    wind.innerHTML = "".concat(parseInt(json.wind.speed), "Km/Hr");
    weatherBox.style.display = '';
    weatherDetails.style.display = '';
    weatherBox.classList.add('In');
    weatherDetails.classList.add('In');
    container.style.height = '600px';
  });
});
})();

/******/ })()
;
//# sourceMappingURL=main.0b5b4f5f2383117b1e7b.bundle.js.map