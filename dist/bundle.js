/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/js/list-index.js":
/*!*********************************!*\
  !*** ./public/js/list-index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (() => {
    const main = document.querySelector('.main')
    const btnSubmit = document.querySelector('.btnSubmit')
    const text = document.querySelector('.text')
    const ex = document.querySelector('.ex')

    let list = new Array
    let existingT = true

    const existing = () => {
        existingT = false
        if (list.indexOf(text.value) > -1) return existingT = true
    }

    function view() {
        var li = document.createElement('li')
        li.setAttribute('class', 'li')
        main.appendChild(li)
        li.innerHTML = `<img src="img/lixeira.png" height='17px' onclick='exc(this)'> ${text.value}`
    }

    function clean() {
        text.value = clean
    }

    function exc(e) {
        let confirmm = confirm('Tem certeza que quer excluir?')
        if (confirmm == true) e.parentNode.outerHTML = ''
    }

    let save = () => {
        localStorage.setItem('tarefa', list)
    }

    function checks() {
        if (existingT == false) {
            if (list[0] == '') list.splice(0, 1)
            list.push(text.value)
            localStorage.tarefa = list
        }

        if (text.value === '') {
            alert('Tarefa em branco!')
            list.splice(list.indexOf(''), 1)
        }

        if (existingT === false && text.value != '') {
            save()
            const del = document.createElement('button')
            del.value = text.value
            view()
        } else {
            alert('A tarefa já existe!')
            text.value = ''
        }
    }

    btnSubmit.onclick = (e) => {
        existing()
        checks()
        text.value = ''
    }

    //exemplos de tarefas
    if (localStorage.tarefa != undefined) {
        ex.style.display = 'none'
    } else {
        alert('Basta clicar na caixa de texto p/ remover os exemplos')
    }

    text.onclick = () => {
        ex.style.display = 'none'
    }

    function createLStorage() {
        if (localStorage.tarefa != undefined) {
            list = localStorage.getItem('tarefa').split(",")

            for (let i = 0; i < list.length; i++) {
                const li = document.createElement('li')
                li.setAttribute('class', 'li')
                main.appendChild(li)
                li.innerHTML = `<img src="img/lixeira.png" height='17px' onclick='exc(this)'>  ${list[i]}`
            }
        }
    }

    window.onload = () => {
        createLStorage()
    }
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_js_list_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../public/js/list-index */ "./public/js/list-index.js");

Object(_public_js_list_index__WEBPACK_IMPORTED_MODULE_0__["default"])()

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map