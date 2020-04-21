module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dCYn");


/***/ }),

/***/ "5NG/":
/***/ (function(module, exports) {

module.exports = require("contentful");

/***/ }),

/***/ "70dS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CONTENT_TYPE_POST */
/* unused harmony export CONTENT_TYPE_PERSON */
/* unused harmony export CONTENT_TYPE_BANNER */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentfulService; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("lwsE");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("W8MJ");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("5NG/");
/* harmony import */ var contentful__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(contentful__WEBPACK_IMPORTED_MODULE_3__);




var CONTENT_TYPE_POST = 'post';
var CONTENT_TYPE_PERSON = 'author';
var CONTENT_TYPE_BANNER = 'banner';
var query = "{\n  post {\n    items {\n      title\n    }\n  }\n}";
var Space = "v78u9lpq8olt";
var Token = "Wvd7Q7Dkd_aW3cabmXCCRKhs4ikg-gUH992OWq82ABo";
var ContentfulService = /*#__PURE__*/function () {
  function ContentfulService() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, ContentfulService);
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(ContentfulService, [{
    key: "createClientInstance",
    value: function createClientInstance() {
      return Object(contentful__WEBPACK_IMPORTED_MODULE_3__["createClient"])({
        space: Space,
        accessToken: Token
      });
    }
  }, {
    key: "fetchPostById",
    value: function fetchPostById(sysId) {
      var client;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function fetchPostById$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              client = this.createClientInstance();
              _context.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(client.getEntries({
                content_type: CONTENT_TYPE_POST,
                'sys.id': sysId
              }));

            case 3:
              return _context.abrupt("return", _context.sent);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "getBannerEntries",
    value: function getBannerEntries() {
      var client, contents, entries;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getBannerEntries$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              client = this.createClientInstance();
              _context2.next = 4;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(client.getEntries({
                content_type: CONTENT_TYPE_BANNER
              }));

            case 4:
              contents = _context2.sent;
              entries = contents.items.map(function (_ref) {
                var fields = _ref.fields;
                return {
                  bannerImage: fields.bannerImage.fields.file.url
                };
              });
              return _context2.abrupt("return", {
                entries: entries
              });

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](0);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, [[0, 9]], Promise);
    } // async restFetch(){
    //   fetch(`https://graphql.contentful.com/content/v1/spaces/${Space}`,{
    //     method:"POST",
    //     headers : {
    //       "content-type":"application/json",
    //       authorization:`Bearer ${Token}`
    //     },
    //     body: JSON.stringify({
    //       query
    //     })
    //   }).then(res =>res.json())
    //   .then(response=>{
    //     console.log(response)
    //   })
    // }

  }, {
    key: "getPostEntries",
    value: function getPostEntries() {
      var _ref2,
          limit,
          skip,
          tag,
          client,
          contents,
          entries,
          total,
          _args3 = arguments;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getPostEntries$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _ref2 = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {
                limit: 5,
                skip: 0,
                tag: ''
              }, limit = _ref2.limit, skip = _ref2.skip, tag = _ref2.tag;
              _context3.prev = 1;
              client = this.createClientInstance();
              _context3.next = 5;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(client.getEntries({
                // include: 1,
                // limit,
                // skip,
                // 'sys.id': tag,
                content_type: CONTENT_TYPE_POST // order: 'fields.publishDate',

              }));

            case 5:
              contents = _context3.sent;
              entries = contents.items.map(function (_ref3) {
                var sys = _ref3.sys,
                    fields = _ref3.fields;
                return {
                  id: sys.id,
                  title: fields.title,
                  author: {
                    fullName: fields.author.fields.fullName,
                    avatar: fields.author.fields.avatar.fields.file.url
                  },
                  description: fields.description,
                  image: fields.image.fields.file.url,
                  publishedAt: fields.publishDate
                };
              });
              total = contents.total;
              return _context3.abrupt("return", {
                entries: entries,
                total: total,
                limit: limit,
                skip: skip
              });

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](1);

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this, [[1, 11]], Promise);
    }
  }, {
    key: "getPostById",
    value: function getPostById(postId) {
      var content, entry;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getPostById$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.fetchPostById(postId));

            case 3:
              content = _context4.sent;
              entry = content.items[0];
              return _context4.abrupt("return", {
                id: entry.sys.id,
                title: entry.fields.title,
                author: {
                  fullName: entry.fields.author.fields.fullName,
                  avatar: entry.fields.author.fields.avatar.fields.file.url
                },
                description: entry.fields.description,
                image: entry.fields.image.fields.file.url,
                publishedAt: entry.fields.publishDate
              });

            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](0);

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this, [[0, 8]], Promise);
    }
  }]);

  return ContentfulService;
}();

/***/ }),

/***/ "T7Fc":
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),

/***/ "W8MJ":
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "dCYn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("o0o1");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("T7Fc");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_contentful__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("70dS");



var schema = Object(graphql__WEBPACK_IMPORTED_MODULE_1__["buildSchema"])("\ntype Author {\n    fullName: String,\n    avatar: String\n}\ntype Article {\n    id: String,\n    title: String,         \n    author: Author,\n    description: String,\n    image: String,\n    publishedAt: String\n}\ntype Query {\n    articles: [Article],\n    article(id:String): Article\n  }\n");
var root = {
  articles: function articles() {
    var contentfulService, _await$contentfulServ, entries;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function articles$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            contentfulService = new _core_contentful__WEBPACK_IMPORTED_MODULE_2__[/* ContentfulService */ "a"]();
            _context.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(contentfulService.getPostEntries());

          case 3:
            _await$contentfulServ = _context.sent;
            entries = _await$contentfulServ.entries;
            return _context.abrupt("return", entries);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  },
  article: function article(id) {
    var contentfulService, entries;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function article$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            contentfulService = new _core_contentful__WEBPACK_IMPORTED_MODULE_2__[/* ContentfulService */ "a"]();
            _context2.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(contentfulService.getPostById(id));

          case 3:
            entries = _context2.sent;
            return _context2.abrupt("return", entries);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, null, Promise);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (function _callee(req, res) {
  var query, response;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          query = req.body.query;
          _context3.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(graphql__WEBPACK_IMPORTED_MODULE_1__["graphql"])(schema, query, root));

        case 3:
          response = _context3.sent;
          return _context3.abrupt("return", res.end(JSON.stringify(response)));

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, null, Promise);
});

/***/ }),

/***/ "lwsE":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "o0o1":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ })

/******/ });