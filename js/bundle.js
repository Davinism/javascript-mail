/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const Router = __webpack_require__(1);
	const Inbox = __webpack_require__(2);

	let routes = {};
	routes.inbox = Inbox;

	document.addEventListener("DOMContentLoaded", (e) => {
	  let arr = Array.from(document.querySelectorAll('.sidebar-nav li'));
	  let content = document.querySelector('.content');
	  new Router(content, routes);

	  arr.forEach( el => {
	    el.addEventListener('click', () => {
	      window.location.hash = el.innerText.toLowerCase();
	    }, false);
	  });


	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	function Router(node, routes) {
	  this.node = node;
	  this.routes = routes;

	  this.start();
	}

	Router.prototype.start = function () {
	  const thisRouter = this;
	  window.addEventListener("hashchange", (e) => {
	    thisRouter.render();
	  });
	};

	Router.prototype.render = function () {
	  this.node.innerHTML = "";
	  let p = document.createElement("p");
	  p.innerHTML = this.activeRoute();
	  this.node.appendChild(p);

	  let comp = this.activeRoute();

	  if (!comp) {
	    this.node.innerHTML = "";
	  } else {
	    this.node.innerHTML = "";
	    this.node.appendChild(comp.render());
	  }
	};

	Router.prototype.activeRoute = function () {
	  let hash = window.location.hash;
	  return this.routes[hash.slice(1)];
	};

	module.exports = Router;


/***/ },
/* 2 */
/***/ function(module, exports) {

	let Inbox = {
	  render: function() {
	    let ul = document.createElement("ul");
	    ul.className = "messages";
	    ul.innerHTML = "An Inbox Message";
	    return ul;
	  }
	};

	module.exports = Inbox;


/***/ }
/******/ ]);