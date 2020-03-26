(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class='container-fluid'>\n  <rob></rob>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/rob/rob.component.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rob/rob.component.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRobRobComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class='container-fluid'>\n  <div class='row' style='background-color: #1f7ed0;color: white; box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\n  -moz-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\n  -webkit-box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);\n  margin: auto;\n  padding: 10px;'>\n    <h1>Simulador de buffer de reordenamiento</h1>\n  </div>\n    <div class='row'>\n      <div class='col-sm-6'>\n        <div class='row'>\n          <div class=\"col-sm-4\">\n            <h4>Grado </h4>\n          </div>\n          <div class=\"col-sm-4\">\n            <h4>Estaciones de reserva </h4>\n          </div>\n          <div class=\"col-sm-4\">\n            <h4>Unidades Funcionales </h4>\n          </div>\n  \n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-4\">\n            <select class=\"form-control\" (change)=\"despacho.tamano= $event.target.value\" [disabled]=\"instruccionesPorCicloDisabled\">\n              <option *ngFor=\"let cantidad of cant\" value={{cantidad}}>\n                {{cantidad}}\n              </option>\n            </select>\n          </div>\n  \n          <div class=\"col-sm-4\">\n            <select class=\"form-control\" (change)=\"estaciones.tamano= $event.target.value\" [disabled]=\"instruccionesPorCicloDisabled\">\n              <option *ngFor=\"let cantidad of cant\" value={{cantidad}}>\n                {{cantidad}}\n              </option>\n            </select>\n          </div>\n  \n          <div class=\"col-sm-4\">\n            <select class=\"form-control\" (change)=\"unidadesFuncionales.tamano= $event.target.value\" [disabled]=\"instruccionesPorCicloDisabled\">\n              <option *ngFor=\"let cantidad of cant\" value={{cantidad}}>\n                {{cantidad}}\n              </option>\n            </select>\n          </div>\n        </div><br />\n        <h4>Ciclos por instruccion </h4>\n        <div class=\"row\">\n          <div class=\"col-sm-2\">\n            <h4 class=\"text-center\">ADD </h4>\n          </div>\n          <div class=\"col-sm-2\">\n            <h4 class=\"text-center\">SUB</h4>\n          </div>\n          <div class=\"col-sm-2\">\n            <h4 class=\"text-center\">MUL</h4>\n          </div>\n          <div class=\"col-sm-2\">\n            <h4 class=\"text-center\">DIV</h4>\n          </div>\n          <div class=\"col-sm-2\">\n            <h4 class=\"text-center\">ST</h4>\n          </div>\n          <div class=\"col-sm-2\">\n            <h4 class=\"text-center\">LD</h4>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-2\">\n            <select class=\"form-control\" (change)=\"tipos[0].ciclos= $event.target.value\" [disabled]=\"instruccionesPorCicloDisabled\">\n              <option *ngFor=\"let cantidad of cant\" value={{cantidad}}>\n                {{cantidad}}\n              </option>\n            </select>\n          </div>\n          <div class=\"col-sm-2\">\n            <select class=\"form-control\" (change)=\"tipos[1].ciclos= $event.target.value\" [disabled]=\"instruccionesPorCicloDisabled\">\n              <option *ngFor=\"let cantidad of cant\" value={{cantidad}}>\n                {{cantidad}}\n              </option>\n            </select>\n          </div>\n          <div class=\"col-sm-2\">\n            <select class=\"form-control\" (change)=\"tipos[2].ciclos= $event.target.value\" [disabled]=\"instruccionesPorCicloDisabled\">\n              <option *ngFor=\"let cantidad of cant\" value={{cantidad}}>\n                {{cantidad}}\n              </option>\n            </select>\n          </div>\n          <div class=\"col-sm-2\">\n            <select class=\"form-control\" (change)=\"tipos[3].ciclos= $event.target.value\" [disabled]=\"instruccionesPorCicloDisabled\">\n              <option *ngFor=\"let cantidad of cant\" value={{cantidad}}>\n                {{cantidad}}\n              </option>\n            </select>\n          </div>\n          <div class=\"col-sm-2\">\n            <select class=\"form-control\" (change)=\"tipos[4].ciclos= $event.target.value\" [disabled]=\"instruccionesPorCicloDisabled\">\n              <option *ngFor=\"let cantidad of cant\" value={{cantidad}}>\n                {{cantidad}}\n              </option>\n            </select>\n          </div>\n          <div class=\"col-sm-2\">\n            <select class=\"form-control\" (change)=\"tipos[5].ciclos= $event.target.value\" [disabled]=\"instruccionesPorCicloDisabled\">\n              <option *ngFor=\"let cantidad of cant\" value={{cantidad}}>\n                {{cantidad}}\n              </option>\n            </select>\n          </div>\n        </div>\n      </div>\n      <div class='col-sm-6 body-content'>\n        <h4 class=\"text-center\">Instrucciones</h4>\n        <div class=\"row\">\n          <div class=\"col-sm-3\">\n            <select class=\"form-control\" (change)=\"setTipo($event.target.value)\">\n              <option *ngFor=\"let tipo of tipos\" value={{tipo.name}}>\n                {{tipo.name}}\n              </option>\n            </select>\n          </div>\n          <div class=\"col-sm-2\">\n            <select class=\"form-control\" (change)=\"regDest=$event.target.value;this.instruccionesPorCicloDisabled = true;\">\n              <option *ngFor=\"let reg of registros\" value={{reg}}>\n                {{reg}}\n              </option>\n            </select>\n          </div>\n          <div class=\"col-sm-2\">\n            <select class=\"form-control\" (change)=\"reg1=$event.target.value;this.instruccionesPorCicloDisabled = true;\">\n              <option *ngFor=\"let reg of registros\" value={{reg}}>\n                {{reg}}\n              </option>\n            </select>\n          </div>\n          <div class=\"col-sm-2\">\n            <select class=\"form-control\" id=\"reg2\" (change)=\"reg2=$event.target.value;this.instruccionesPorCicloDisabled = true;\">\n              <option *ngFor=\"let reg of registros\" value={{reg}}>\n                {{reg}}\n              </option>\n            </select>\n          </div>\n          <div class=\"col-sm-3\">\n            <button id=\"addBtn\" type=\"button\" class=\"btn btn-primary\" (click)=\"addInstruccion()\">ADD</button>\n          </div>\n          </div>\n          <table class=\"table table-striped\">\n            <thead>\n              <tr>\n                <th>Instruccion</th>\n                <th>Tipo</th>\n                <th>Reg dest</th>\n                <th>Reg 1</th>\n                <th>Reg 2</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let i of instrucciones\">\n                <td>{{i.name}}</td>\n                <td>{{i.tipo.name}}</td>\n                <td>{{getRegDest(i.tipo.name,i.regDest)}}</td>\n                <td>{{getReg1(i.tipo.name,i.reg1)}}</td>\n                <td>{{i.reg2}}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div><br />\n        <button [disabled]=\"ciclosDisabled()\" type=\"button\" class=\"btn btn-primary\" (click)=\"generarRob()\">Generar ROB</button>\n        <button type=\"button\" class=\"btn btn-secondary\" onClick=\"window.location.reload();\">Reset</button>\n        <table class='table table-bordered'>\n          <thead>\n            <tr>\n              <th>Ciclo</th>\n              <th attr.colspan=\"{{despacho.tamano}}\">Despacho</th>\n              <th attr.colspan=\"{{estaciones.tamano}}\">Estaciones</th>\n              <th attr.colspan=\"{{unidadesFuncionales.tamano}}\">UF</th>\n              <th attr.colspan=\"{{unidadesFuncionales.tamano+estaciones.tamano}}\">ROB</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let c of ciclos; let i = index\" >\n              <ng-container>\n                <th>\n                  {{i}}\n                </th>\n                <td *ngFor=\"let instr of c.despacho.instrucciones\">\n                  {{instr.name}}\n                </td>\n                <td *ngFor=\"let instru of c.estaciones.instrucciones\">\n                  {{instru.name}}\n                </td>\n                <td *ngFor=\"let instru of c.unidadesFuncionales.instrucciones\">\n                  {{instru.name}}\n                </td>\n                <td *ngFor=\"let instru of c.celdas.instrucciones\">\n                  {{instru.getName()+ ' '}}{{' ' + instru.getEstado()}}\n                </td>\n              </ng-container>\n            </tr>\n  \n          </tbody>\n        </table>\n      </div>\n<div>\n  <h4>Powered By: </h4>\n  <div>Lautaro Fernandez</div>\n  <div>Nicolas Sebey</div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let AppComponent = class AppComponent {
      constructor() {
        this.title = 'app';
      }

    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _rob_rob_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./rob/rob.component */
    "./src/app/rob/rob.component.ts");

    let AppModule = class AppModule {};
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _rob_rob_component__WEBPACK_IMPORTED_MODULE_7__["RobComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({
        appId: 'ng-cli-universal'
      }), _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/class/Celda.ts":
  /*!********************************!*\
    !*** ./src/app/class/Celda.ts ***!
    \********************************/

  /*! exports provided: Celda */

  /***/
  function srcAppClassCeldaTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Celda", function () {
      return Celda;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    class Celda {
      constructor(instrucciones, tamano) {
        this.instrucciones = instrucciones;
        this.tamano = tamano;
      }

      clon() {
        var instruccionesClon = new Array();

        for (let i = 0; i < this.instrucciones.length; i++) {
          instruccionesClon.push(this.instrucciones[i].clon());
        }

        if (this.tamano == undefined) this.tamano = this.instrucciones.length;
        return new Celda(instruccionesClon, this.tamano);
      }

      get(name) {
        for (let j = 0; j < this.instrucciones.length; j++) {
          if (this.instrucciones[j].name == name) return j;
          if (this.instrucciones[j].segundaInstruccion != null) if (this.instrucciones[j].segundaInstruccion.name == name) return j;
        }

        return -1;
      }

    }
    /***/

  },

  /***/
  "./src/app/class/Ciclo.ts":
  /*!********************************!*\
    !*** ./src/app/class/Ciclo.ts ***!
    \********************************/

  /*! exports provided: Ciclo */

  /***/
  function srcAppClassCicloTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Ciclo", function () {
      return Ciclo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    class Ciclo {
      constructor(despacho, estaciones, unidadesFuncionales, celdas) {
        this.despacho = despacho;
        this.estaciones = estaciones;
        this.unidadesFuncionales = unidadesFuncionales;
        this.celdas = celdas;
      }

      clon() {
        return new Ciclo(this.despacho.clon(), this.estaciones.clon(), this.unidadesFuncionales.clon(), this.celdas.clon());
      }

    }
    /***/

  },

  /***/
  "./src/app/class/Estacion.ts":
  /*!***********************************!*\
    !*** ./src/app/class/Estacion.ts ***!
    \***********************************/

  /*! exports provided: Estacion */

  /***/
  function srcAppClassEstacionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Estacion", function () {
      return Estacion;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    class Estacion {
      constructor(instrucciones, tamano) {
        this.instrucciones = instrucciones;
        this.tamano = tamano;
      }

      ordenar(i) {
        if (this.instrucciones[i].name == '') {
          let j = i - 1;

          while (j >= 0 && this.instrucciones[j].name != '') {
            if (this.instrucciones[i].name == '') {
              this.instrucciones[i] = this.instrucciones[j].clon();
              this.instrucciones[j].name = '';
            }

            i--;
            j--;
          }
        }
      }

      clon() {
        var instruccionesClon = new Array();

        for (let i = 0; i < this.instrucciones.length; i++) {
          instruccionesClon.push(this.instrucciones[i].clon());
        }

        if (this.tamano == undefined) this.tamano = this.instrucciones.length;
        return new Estacion(instruccionesClon, this.tamano);
      }

      tengoLugar() {
        for (let j = this.instrucciones.length - 1; j >= 0; j--) {
          if (this.instrucciones[j].name == '') return j;
        }

        return -1;
      }

      nextEstacion(arr) {
        for (let j = this.instrucciones.length - 1; j >= 0; j--) {
          if (this.instrucciones[j].name != '') {
            if (this.instrucciones[j].tipo.name == 'ST' && this.estaOcupado(arr, this.instrucciones[j].reg1, this.instrucciones[j].regDest) == 'N') return j;else if (this.instrucciones[j].tipo.name == 'LD' && this.estaOcupado(arr, this.instrucciones[j].reg1) == 'N') return j;else if (this.estaOcupado(arr, this.instrucciones[j].reg1, this.instrucciones[j].reg2) == 'N') return j;
          }
        }

        return -1;
      }

      estaOcupado(arr, reg1, reg2) {
        var nombre = reg1.substr(1);
        var numero = +nombre;

        if (reg2 != undefined) {
          var nombre2 = reg2.substr(1);
          var numero2 = +nombre2;
          if (arr[numero2] == 'D' && arr[numero] == 'D') return 'N';else return 'Y';
        }

        if (arr[numero] == 'D') return 'N';else return 'Y';
      }

    }
    /***/

  },

  /***/
  "./src/app/class/Instruccion.ts":
  /*!**************************************!*\
    !*** ./src/app/class/Instruccion.ts ***!
    \**************************************/

  /*! exports provided: Instruccion */

  /***/
  function srcAppClassInstruccionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Instruccion", function () {
      return Instruccion;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    class Instruccion {
      constructor(name, tipo, estado, regDest, reg1, reg2) {
        this.name = name;
        this.tipo = tipo;
        this.estado = estado;
        this.regDest = regDest;
        this.reg1 = reg1;
        this.reg2 = reg2;
        this.segundaInstruccion = null;
        this.cicloActual = 0;
        if (tipo.name == 'ST' || tipo.name == 'LD') this.reg2 = null;
      }

      clon() {
        var instruccionClon = new Instruccion(this.name, this.tipo.clon(), this.estado, this.regDest, this.reg1, this.reg2);
        instruccionClon.cicloActual = this.cicloActual;
        if (this.segundaInstruccion != null) instruccionClon.segundaInstruccion = this.segundaInstruccion.clon();
        return instruccionClon;
      }

      switch() {
        var segunda = this.segundaInstruccion.clon();
        this.segundaInstruccion = null; //para que la segunda instruccion de la segunda instruccion quede en null

        this.segundaInstruccion = this.clon();
        this.name = segunda.name;
        this.tipo = segunda.tipo.clon();
        this.estado = segunda.estado;
        this.regDest = segunda.regDest;
        this.reg1 = segunda.reg1;
        this.reg2 = segunda.reg2;
        this.cicloActual = segunda.cicloActual;
      }

      getName() {
        if (this.segundaInstruccion == null) {
          if (this.name != '') return this.name + '/';else return this.name;
        } else {
          var nombre1 = this.name;
          var nombre2 = this.estado;
          var nombre = nombre1.concat(' | ');
          return nombre.concat(nombre2);
        }
      }

      getEstado() {
        if (this.segundaInstruccion == null) return this.estado;else {
          var nombre1 = this.segundaInstruccion.name;
          var nombre2 = this.segundaInstruccion.estado;
          var nombre = nombre1.concat(' | ');
          return nombre.concat(nombre2);
        }
      }

    }
    /***/

  },

  /***/
  "./src/app/class/UnidadFuncional.ts":
  /*!******************************************!*\
    !*** ./src/app/class/UnidadFuncional.ts ***!
    \******************************************/

  /*! exports provided: UnidadFuncional */

  /***/
  function srcAppClassUnidadFuncionalTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UnidadFuncional", function () {
      return UnidadFuncional;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    class UnidadFuncional {
      constructor(instrucciones, tamano) {
        this.instrucciones = instrucciones;
        this.tamano = tamano;
      }

      exists(name) {
        for (let j = 0; j < this.instrucciones.length; j++) {
          if (this.instrucciones[j].name == name) return true;
        }

        return false;
      }

      clon() {
        var instruccionesClon = new Array();

        for (let i = 0; i < this.instrucciones.length; i++) {
          instruccionesClon.push(this.instrucciones[i].clon());
        }

        if (this.tamano == undefined) this.tamano = this.instrucciones.length;
        return new UnidadFuncional(instruccionesClon, this.tamano);
      }

      get(a) {
        for (let j = 0; j < this.instrucciones.length; j++) {
          if (this.instrucciones[j].name == a) return j;
        }

        return 'se rompio todo';
      }

      tengoLugar() {
        for (let j = this.instrucciones.length - 1; j >= 0; j--) {
          if (this.instrucciones[j].name == '') {
            return j;
          }
        }

        return -1;
      }

    }
    /***/

  },

  /***/
  "./src/app/class/despacho.ts":
  /*!***********************************!*\
    !*** ./src/app/class/despacho.ts ***!
    \***********************************/

  /*! exports provided: Despacho */

  /***/
  function srcAppClassDespachoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Despacho", function () {
      return Despacho;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    class Despacho {
      constructor(instrucciones, tamano) {
        this.instrucciones = instrucciones;
        this.tamano = tamano;
      }

      clon() {
        var instruccionesClon = new Array();

        for (let i = 0; i < this.instrucciones.length; i++) {
          instruccionesClon.push(this.instrucciones[i].clon());
        }

        if (this.tamano == undefined) this.tamano = this.instrucciones.length;
        return new Despacho(instruccionesClon, this.tamano);
      }

      get() {
        return {
          instrucciones: this.instrucciones,
          tamano: this.tamano
        };
      }

      ordenarInstrucciones() {
        var a = 5;
      }

    }
    /***/

  },

  /***/
  "./src/app/class/tipo.ts":
  /*!*******************************!*\
    !*** ./src/app/class/tipo.ts ***!
    \*******************************/

  /*! exports provided: Tipo */

  /***/
  function srcAppClassTipoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tipo", function () {
      return Tipo;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    class Tipo {
      //public ciclos: number;
      constructor(name, ciclos) {
        this.name = name;
        this.ciclos = ciclos;
      }

      clon() {
        var tipo = new Tipo(this.name, this.ciclos); //tipo.ciclos = this.ciclos;

        return tipo;
      }

    }
    /***/

  },

  /***/
  "./src/app/rob/rob.component.scss":
  /*!****************************************!*\
    !*** ./src/app/rob/rob.component.scss ***!
    \****************************************/

  /*! exports provided: default */

  /***/
  function srcAppRobRobComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JvYi9yb2IuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/rob/rob.component.ts":
  /*!**************************************!*\
    !*** ./src/app/rob/rob.component.ts ***!
    \**************************************/

  /*! exports provided: RobComponent */

  /***/
  function srcAppRobRobComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RobComponent", function () {
      return RobComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _class_Ciclo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../class/Ciclo */
    "./src/app/class/Ciclo.ts");
    /* harmony import */


    var _class_despacho__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../class/despacho */
    "./src/app/class/despacho.ts");
    /* harmony import */


    var _class_UnidadFuncional__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../class/UnidadFuncional */
    "./src/app/class/UnidadFuncional.ts");
    /* harmony import */


    var _class_Celda__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../class/Celda */
    "./src/app/class/Celda.ts");
    /* harmony import */


    var _class_Estacion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../class/Estacion */
    "./src/app/class/Estacion.ts");
    /* harmony import */


    var _class_Instruccion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../class/Instruccion */
    "./src/app/class/Instruccion.ts");
    /* harmony import */


    var _class_tipo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../class/tipo */
    "./src/app/class/tipo.ts");

    let RobComponent =
    /** ROB component*/
    class RobComponent {
      constructor() {
        this.visibleActual = 0;
        this.tipo = new _class_tipo__WEBPACK_IMPORTED_MODULE_8__["Tipo"]('ADD', 1);
        this.regDest = 'R0';
        this.reg1 = 'R0';
        this.reg2 = 'R0';
        this.registros = ['R0', 'R1', 'R2', 'R3', 'R4', 'R5', 'R6', 'R7', 'R8', 'R9'];
        this.registrosEstadoOcupado = ['D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D', 'D'];
        this.tipos = [new _class_tipo__WEBPACK_IMPORTED_MODULE_8__["Tipo"]('ADD', 1), new _class_tipo__WEBPACK_IMPORTED_MODULE_8__["Tipo"]('SUB', 1), new _class_tipo__WEBPACK_IMPORTED_MODULE_8__["Tipo"]('MUL', 1), new _class_tipo__WEBPACK_IMPORTED_MODULE_8__["Tipo"]('DIV', 1), new _class_tipo__WEBPACK_IMPORTED_MODULE_8__["Tipo"]('ST', 1), new _class_tipo__WEBPACK_IMPORTED_MODULE_8__["Tipo"]('LD', 1)];
        this.cant = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.list = [1, 2, 3, 4, 5, 6, 7, 1, 1, 1, 1, 1, 1];
        this.instruccionesPorCicloDisabled = false;
        this.despacho = new _class_despacho__WEBPACK_IMPORTED_MODULE_3__["Despacho"]([new _class_Instruccion__WEBPACK_IMPORTED_MODULE_7__["Instruccion"]("", new _class_tipo__WEBPACK_IMPORTED_MODULE_8__["Tipo"]('ADD', 1), "", "R1", "R2", "R3")], 1);
        this.unidadesFuncionales = new _class_UnidadFuncional__WEBPACK_IMPORTED_MODULE_4__["UnidadFuncional"]([new _class_Instruccion__WEBPACK_IMPORTED_MODULE_7__["Instruccion"]("", new _class_tipo__WEBPACK_IMPORTED_MODULE_8__["Tipo"]('ADD', 1), "", "R1", "R2", "R3")], 1);
        this.estaciones = new _class_Estacion__WEBPACK_IMPORTED_MODULE_6__["Estacion"]([new _class_Instruccion__WEBPACK_IMPORTED_MODULE_7__["Instruccion"]("", new _class_tipo__WEBPACK_IMPORTED_MODULE_8__["Tipo"]('ADD', 1), "", "R1", "R2", "R3")], 1);
        this.celdas = new _class_Celda__WEBPACK_IMPORTED_MODULE_5__["Celda"]([new _class_Instruccion__WEBPACK_IMPORTED_MODULE_7__["Instruccion"]("", new _class_tipo__WEBPACK_IMPORTED_MODULE_8__["Tipo"]('ADD', 1), "", "R1", "R2", "R3")], 1);
        let ciclo = new _class_Ciclo__WEBPACK_IMPORTED_MODULE_2__["Ciclo"](this.despacho, this.estaciones, this.unidadesFuncionales, this.celdas);
        this.ciclos = [ciclo];
      }

      terminado(i, actual) {
        if (actual == 0) return false;else {
          for (let j of i) if (j.estado != '') return false;

          return true;
        }
      }

      generarRob() {
        this.visibleActual = this.visibleActual + 1;

        if (this.visibleActual == 1) {
          //INICIALIZACION DE VARIABLES
          let arrayDespacho;
          let arrayUnidad;
          let arrayEstacion;
          let arrayRob;
          let a = Number(this.unidadesFuncionales.tamano);
          let b = Number(this.estaciones.tamano);
          this.celdas.tamano = a + b;

          for (let j = 0; j < this.despacho.tamano; j++) {
            if (arrayDespacho == undefined) arrayDespacho = [new _class_Instruccion__WEBPACK_IMPORTED_MODULE_7__["Instruccion"]("", new _class_tipo__WEBPACK_IMPORTED_MODULE_8__["Tipo"]('', 1), "", "", "", "")];else arrayDespacho.push(new _class_Instruccion__WEBPACK_IMPORTED_MODULE_7__["Instruccion"]("", new _class_tipo__WEBPACK_IMPORTED_MODULE_8__["Tipo"]('', 1), "", "", "", ""));
          }

          for (let j = 0; j < this.estaciones.tamano; j++) {
            if (arrayEstacion == undefined) arrayEstacion = [new _class_Instruccion__WEBPACK_IMPORTED_MODULE_7__["Instruccion"]("", new _class_tipo__WEBPACK_IMPORTED_MODULE_8__["Tipo"]('', 1), "", "", "", "")];else arrayEstacion.push(new _class_Instruccion__WEBPACK_IMPORTED_MODULE_7__["Instruccion"]("", new _class_tipo__WEBPACK_IMPORTED_MODULE_8__["Tipo"]('', 1), "", "", "", ""));
          }

          for (let j = 0; j < this.unidadesFuncionales.tamano; j++) {
            if (arrayUnidad == undefined) arrayUnidad = [new _class_Instruccion__WEBPACK_IMPORTED_MODULE_7__["Instruccion"]("", new _class_tipo__WEBPACK_IMPORTED_MODULE_8__["Tipo"]('', 1), "", "", "", "")];else arrayUnidad.push(new _class_Instruccion__WEBPACK_IMPORTED_MODULE_7__["Instruccion"]("", new _class_tipo__WEBPACK_IMPORTED_MODULE_8__["Tipo"]('', 1), "", "", "", ""));
          }

          for (let j = 0; j < this.celdas.tamano; j++) {
            if (arrayRob == undefined) arrayRob = [new _class_Instruccion__WEBPACK_IMPORTED_MODULE_7__["Instruccion"]("", new _class_tipo__WEBPACK_IMPORTED_MODULE_8__["Tipo"]('', 1), "", "", "", "")];else arrayRob.push(new _class_Instruccion__WEBPACK_IMPORTED_MODULE_7__["Instruccion"]("", new _class_tipo__WEBPACK_IMPORTED_MODULE_8__["Tipo"]('', 1), "", "", "", ""));
          } //--------------------------------------------------------------------------------------------------
          //--------------------------------------------------------------------------------------------------
          //--------------------------------------------------------------------------------------------------
          //CICLO 0


          this.ciclos[0] = new _class_Ciclo__WEBPACK_IMPORTED_MODULE_2__["Ciclo"](new _class_despacho__WEBPACK_IMPORTED_MODULE_3__["Despacho"](Object.assign([], arrayDespacho), this.despacho.tamano), new _class_Estacion__WEBPACK_IMPORTED_MODULE_6__["Estacion"](Object.assign([], arrayEstacion), this.estaciones.tamano), new _class_UnidadFuncional__WEBPACK_IMPORTED_MODULE_4__["UnidadFuncional"](Object.assign([], arrayUnidad), this.unidadesFuncionales.tamano), new _class_Celda__WEBPACK_IMPORTED_MODULE_5__["Celda"](Object.assign([], arrayRob), this.celdas.tamano));
          var indiceInstruccion = 0;
          var despacho = this.despacho.tamano - 1; //se llena el despacho de derecha a izquierda

          while (despacho >= 0 && this.instrucciones[indiceInstruccion] != null) {
            this.ciclos[0].despacho.instrucciones[despacho] = this.instrucciones[indiceInstruccion].clon();
            indiceInstruccion++;
            despacho--;
          } //---------------------------------------------------------------------------------------------------------------
          //WHILE QUE HACE TODO HASTA QUE NO QUEDEN MAS COSAS POR HACER


          var actual = 0;

          while (!this.terminado(this.ciclos[actual].celdas.instrucciones, actual)) {
            //<Inicializo el ciclo[actual] con lo que tiene el anterior>
            //var ciclo = JSON.stringify(this.ciclos[actual]);
            this.ciclos.push(this.ciclos[actual].clon());
            actual++; //------------------------------------------------------------------------
            //Se incrementan las instrucciones que esten en X y se pasan a F si finalizaron

            for (let j = 0; j < this.celdas.tamano; j++) {
              if (this.ciclos[actual].celdas.instrucciones[j].name != '') {
                if (this.ciclos[actual].celdas.instrucciones[j].estado == 'X') {
                  if (this.ciclos[actual].celdas.instrucciones[j].cicloActual < this.ciclos[actual].celdas.instrucciones[j].tipo.ciclos) {
                    this.ciclos[actual].celdas.instrucciones[j].cicloActual++;

                    if (this.ciclos[actual].celdas.instrucciones[j].cicloActual == this.ciclos[actual].celdas.instrucciones[j].tipo.ciclos) {
                      this.ciclos[actual].celdas.instrucciones[j].estado = 'F';
                      var nombre = this.ciclos[actual].celdas.instrucciones[j].name;
                      var numero = nombre.substr(1);
                      var num = +numero;
                      this.instrucciones[num].estado = 'F';
                      var uf = this.ciclos[actual].unidadesFuncionales.get(this.ciclos[actual].celdas.instrucciones[j].name);
                      this.liberarCiclos(this.ciclos[actual].celdas.instrucciones[j]);
                      var nextEstacion = this.ciclos[actual].estaciones.nextEstacion(this.registrosEstadoOcupado);

                      if (nextEstacion != -1) {
                        var celda = this.ciclos[actual].celdas.get(this.ciclos[actual].estaciones.instrucciones[nextEstacion].name);
                        this.ciclos[actual].unidadesFuncionales.instrucciones[uf] = this.ciclos[actual].estaciones.instrucciones[nextEstacion].clon();
                        this.ciclos[actual].estaciones.instrucciones[nextEstacion].name = '';
                        this.ciclos[actual].estaciones.ordenar(nextEstacion); //ORDENAR ESTACION DE RESERVA

                        this.ocuparRegistro(this.ciclos[actual].unidadesFuncionales.instrucciones[uf]);
                      } else this.ciclos[actual].unidadesFuncionales.instrucciones[uf].name = '';
                    }
                  }
                }
              }
            } //------------------------------------------------------------------------


            var sacados = 0; //Se sacan los que esten en F y se puedan sacar

            for (let j = 0; j < this.celdas.tamano; j++) {
              if (this.ciclos[actual].celdas.instrucciones[j].segundaInstruccion != null && sacados < this.despacho.tamano) {
                //if (this.puedoSacarSegundaInstruccion(actual, j) == 'Y') {
                sacados++;
                var nombre = this.ciclos[actual].celdas.instrucciones[j].segundaInstruccion.name;
                this.ciclos[actual].celdas.instrucciones[j].segundaInstruccion = null;
                var numero = nombre.substr(1);
                var num = +numero;
                this.instrucciones[num].estado = 'AFUERA'; //}
              }

              if (this.ciclos[actual].celdas.instrucciones[j].estado == 'F' && this.puedoSacarlo(actual, j) == 'Y' && sacados < this.despacho.tamano) {
                sacados++;
                var nombre = this.ciclos[actual].celdas.instrucciones[j].name;
                this.ciclos[actual].celdas.instrucciones[j].name = '';
                this.ciclos[actual].celdas.instrucciones[j].estado = '';
                var numero = nombre.substr(1);
                var num = +numero;
                this.instrucciones[num].estado = 'AFUERA';
              } //Se ponen en estado X los que estén en estado I y se encuentren en la UF


              if (this.ciclos[actual].celdas.instrucciones[j].estado == 'I' && this.ciclos[actual].unidadesFuncionales.exists(this.ciclos[actual].celdas.instrucciones[j].name)) {
                this.ciclos[actual].celdas.instrucciones[j].estado = 'X';
              }
            } //------------------------------------------------------------------------
            //Se inserta lo que se pueda insertar del  despacho


            for (let k = this.ciclos[actual].despacho.instrucciones.length - 1; k >= 0; k--) {
              if (this.ciclos[actual].despacho.instrucciones[k].name != '') {
                var ufEmpty = this.ciclos[actual].unidadesFuncionales.tengoLugar();
                if (this.puedoMeterlo(this.ciclos[actual].despacho.instrucciones[k]) == 'N') ufEmpty = -1;

                if (ufEmpty != -1) {
                  for (let j = 0; j < this.ciclos[actual].celdas.instrucciones.length; j++) {
                    if (this.ciclos[actual].celdas.instrucciones[j].name == '') {
                      this.ciclos[actual].unidadesFuncionales.instrucciones[ufEmpty] = this.ciclos[actual].despacho.instrucciones[k].clon();

                      if (this.ciclos[actual].celdas.instrucciones[j].segundaInstruccion == null) {
                        this.ciclos[actual].celdas.instrucciones[j] = this.ciclos[actual].despacho.instrucciones[k].clon();
                      } else {
                        var segunda = this.ciclos[actual].celdas.instrucciones[j].segundaInstruccion.clon();
                        this.ciclos[actual].celdas.instrucciones[j] = this.ciclos[actual].despacho.instrucciones[k].clon();
                        this.ciclos[actual].celdas.instrucciones[j].segundaInstruccion = segunda.clon();
                      }

                      this.ciclos[actual].celdas.instrucciones[j].estado = 'X';
                      this.ocuparRegistro(this.ciclos[actual].celdas.instrucciones[j]);
                      this.ciclos[actual].despacho.instrucciones[k].name = '';
                      break;
                    }
                  }
                } else {
                  var erEmpty = this.ciclos[actual].estaciones.tengoLugar();

                  if (erEmpty != -1) {
                    for (let j = 0; j < this.ciclos[actual].celdas.instrucciones.length; j++) {
                      if (this.ciclos[actual].celdas.instrucciones[j].name == '') {
                        this.ciclos[actual].estaciones.instrucciones[erEmpty] = this.ciclos[actual].despacho.instrucciones[k].clon();

                        if (this.ciclos[actual].celdas.instrucciones[j].segundaInstruccion == null) {
                          this.ciclos[actual].celdas.instrucciones[j] = this.ciclos[actual].despacho.instrucciones[k].clon();
                        } else {
                          var segunda = this.ciclos[actual].celdas.instrucciones[j].segundaInstruccion.clon();
                          this.ciclos[actual].celdas.instrucciones[j] = this.ciclos[actual].despacho.instrucciones[k].clon();
                          this.ciclos[actual].celdas.instrucciones[j].segundaInstruccion = segunda.clon();
                        }

                        this.ciclos[actual].despacho.instrucciones[k].name = '';
                        break;
                      }
                    }

                    if (this.ciclos[actual].despacho.instrucciones[k].name != '') {
                      for (let m = 0; m < this.ciclos[actual].celdas.instrucciones.length; m++) {
                        if (this.ciclos[actual].celdas.instrucciones[m].estado == 'F' && this.ciclos[actual].celdas.instrucciones[m].segundaInstruccion == null && this.ciclos[actual - 1].celdas.instrucciones[m].estado != 'F') {
                          //&& (this.puedoSacarlo(actual, m) == 'Y')) {
                          this.ciclos[actual].celdas.instrucciones[m].segundaInstruccion = this.ciclos[actual].despacho.instrucciones[k].clon();
                          this.ciclos[actual].celdas.instrucciones[m].switch();
                          this.ciclos[actual].estaciones.instrucciones[erEmpty] = this.ciclos[actual].despacho.instrucciones[k].clon();
                          this.ciclos[actual].despacho.instrucciones[k].name = '';
                          break;
                        }
                      }
                    }
                  }
                }
              }
            } //Cargo el despacho con lo nuevo


            for (let k = this.ciclos[actual].despacho.instrucciones.length - 1; k >= 0; k--) {
              if (this.ciclos[actual].despacho.instrucciones[k].name == '' && indiceInstruccion < this.instrucciones.length) {
                this.ciclos[actual].despacho.instrucciones[k] = this.instrucciones[indiceInstruccion].clon();
                indiceInstruccion++;
              }
            } ////se vuelve a cargar el despacho para llenar las UF de CICLO 1 con el despacho de CICLO 0
            //despacho = this.despacho.tamano - 1;
            //var u = this.unidadesFuncionales.tamano - 1;//CANTIDAD DE UF
            //var r = 0;
            //while (despacho >= 0 && u >= 0) {
            //  this.ciclos[1].unidadesFuncionales.instrucciones[u] = this.ciclos[0].despacho.instrucciones[despacho];
            //  this.ciclos[1].celdas.instrucciones[r] = this.ciclos[1].unidadesFuncionales.instrucciones[u];
            //  this.ciclos[1].celdas.instrucciones[r].cicloActual = 1;
            //  this.ciclos[1].celdas.instrucciones[r].estado = "X";
            //  u--;
            //  despacho--;
            //}
            //if (despacho > 0) {
            //  var e = this.estaciones.tamano - 1;
            //  while (despacho >= 0 && e >= 0) {
            //    this.ciclos[1].estaciones.instrucciones[e] = this.ciclos[0].despacho.instrucciones[despacho];
            //    e--;
            //    despacho--;
            //  }
            //}

          }
        }
      } //--------------------------------------------------------------------------------------------------
      //--------------------------------------------------------------------------------------------------
      //--------------------------------------------------------------------------------------------------
      //cargarCiclo(cicloActual: number) {
      //  var arrayDespacho = new Array(this.despacho.tamano);
      //  var arrayEstaciones = new Array(this.estaciones.tamano);
      //  var arrayUF = new Array(this.unidadesFuncionales.tamano);
      //  var arrayRob = new Array(this.celdas.tamano);
      //  //arrayDespacho[0] = 
      //  for (let j = 0; j < this.despacho.tamano; j++) {
      //    this.cargarInstruccionDespacho(j, cicloActual, this.ciclos[cicloActual-1].despacho.instrucciones[j]);
      //  }
      //  for (let j = 0; j < this.estaciones.tamano; j++) {
      //    this.ciclos[cicloActual].estaciones.instrucciones[j] = this.ciclos[cicloActual - 1].estaciones.instrucciones[j];
      //  }
      //  for (let j = 0; j < this.unidadesFuncionales.tamano; j++) {
      //    this.ciclos[cicloActual].unidadesFuncionales.instrucciones[j] = this.ciclos[cicloActual - 1].unidadesFuncionales.instrucciones[j];
      //  }
      //  for (let j = 0; j < this.celdas.tamano; j++) {
      //    this.ciclos[cicloActual].celdas.instrucciones[j] = this.ciclos[cicloActual - 1].celdas.instrucciones[j];
      //  }
      //}
      //cargarInstruccionDespacho(j: number, cicloActual: number, arg2: Instruccion) {
      //  this.ciclos[cicloActual].despacho.instrucciones[j].cicloActual = arg2.cicloActual;
      //  this.ciclos[cicloActual].despacho.instrucciones[j].cicloActual = arg2.cicloActual;
      //  this.ciclos[cicloActual].despacho.instrucciones[j].cicloActual = arg2.cicloActual;
      //  this.ciclos[cicloActual].despacho.instrucciones[j].cicloActual = arg2.cicloActual;
      //  this.ciclos[cicloActual].despacho.instrucciones[j].cicloActual = arg2.cicloActual;
      //  }


      puedoMeterlo(arg0) {
        if (arg0.tipo.name == 'ST' && this.estaOcupado(arg0.name, arg0.reg1, arg0.regDest) == 'N') return 'Y';else if (arg0.tipo.name == 'LD' && this.estaOcupado(arg0.name, arg0.reg1) == 'N') return 'Y';else if (this.estaOcupado(arg0.name, arg0.reg1, arg0.reg2) == 'N') return 'Y';else return 'N';
      }

      estaOcupado(name, reg1, reg2) {
        var nombre = reg1.substr(1);
        var numero = +nombre;

        if (reg2 != undefined) {
          var nombre2 = reg2.substr(1);
          var numero2 = +nombre2;

          if (this.registrosEstadoOcupado[numero2] == 'D' && this.registrosEstadoOcupado[numero] == 'D') {
            var nombreInstruccion = name.substr(1);
            var numeroInstruccion = +nombreInstruccion;

            for (let l = 0; l < numeroInstruccion; l++) {
              if ((this.instrucciones[l].regDest == reg1 || this.instrucciones[l].regDest == reg2) && this.instrucciones[l].estado == 'I') return 'Y';
            }

            return 'N';
          } else return 'Y';
        }

        if (this.registrosEstadoOcupado[numero] == 'D') {
          var nombreInstruccion = name.substr(1);
          var numeroInstruccion = +nombreInstruccion;

          for (let l = 0; l < numeroInstruccion; l++) {
            if (this.instrucciones[l].regDest == reg1 && this.instrucciones[l].estado == 'I') return 'Y';
          }

          return 'N';
        } else return 'Y';
      }

      ocuparRegistro(arg0) {
        if (arg0.tipo.name != 'ST') {
          var nombre = arg0.regDest.substr(1);
          var numero = +nombre;
          this.registrosEstadoOcupado[numero] = 'O';
        }
      }

      liberarCiclos(arg0) {
        if (arg0.tipo.name != 'ST') {
          var nombre = arg0.regDest.substr(1);
          var numero = +nombre;
          this.registrosEstadoOcupado[numero] = 'D';
        }
      }

      puedoSacarSegundaInstruccion(cicloActual, columna) {
        var nombre = this.ciclos[cicloActual].celdas.instrucciones[columna].segundaInstruccion.name;
        var numero = nombre.substr(1);
        var num = +numero;
        if (this.instrucciones[num - 1].estado == 'AFUERA') return 'Y';else {
          num = num - 1;
          nombre = 'S' + num;
          var columnaCelda = this.ciclos[cicloActual].celdas.get(nombre);
          if (columnaCelda != -1) if (this.ciclos[cicloActual].celdas.instrucciones[columnaCelda].name == nombre) {
            if (this.puedoSacarlo(cicloActual, columnaCelda) == 'Y') return 'Y';
          } else if (this.puedoSacarSegundaInstruccion(cicloActual, columnaCelda) == 'Y') return 'Y';
        }
        return 'N';
      }

      puedoSacarlo(cicloActual, columna) {
        if (this.ciclos[cicloActual - 1].celdas.instrucciones[columna].estado == 'F') {
          var nombre = this.ciclos[cicloActual].celdas.instrucciones[columna].name;
          var num;

          if (nombre.length <= 3) {
            var numero = nombre.substr(1);
            num = +numero;
          }

          if (num == 0) return 'Y';else {
            if (this.instrucciones[num - 1].estado == 'AFUERA') return 'Y';else {
              num = num - 1;
              nombre = 'S' + num;
              var columnaCelda = this.ciclos[cicloActual].celdas.get(nombre);
              if (columnaCelda != -1) if (this.puedoSacarlo(cicloActual, columnaCelda) == 'Y') return 'Y';
            }
          }
        }

        return 'N';
      }

      ciclosDisabled() {
        return !this.instrucciones || this.instrucciones.length == 0;
      }

      addInstruccion() {
        if (this.instrucciones == undefined) {
          if (this.tipo.name == 'ADD') this.tipo = this.tipos[0];
          this.instrucciones = [new _class_Instruccion__WEBPACK_IMPORTED_MODULE_7__["Instruccion"]('S' + 0, this.tipo, 'I', this.regDest, this.reg1, this.reg2)];
        } else this.instrucciones[this.instrucciones.length] = new _class_Instruccion__WEBPACK_IMPORTED_MODULE_7__["Instruccion"]('S' + this.instrucciones.length, this.tipo, 'I', this.regDest, this.reg1, this.reg2);
      }

      getReg1(tipo, reg) {
        if (tipo == 'LD') return '(' + reg + ')';else return reg;
      }

      getRegDest(tipo, reg) {
        if (tipo == 'ST') return '(' + reg + ')';else return reg;
      }

      setTipo(value) {
        this.instruccionesPorCicloDisabled = true;

        for (let t of this.tipos) {
          if (t.name == value) this.tipo = t;
        }

        if (this.tipo.name == 'ST' || this.tipo.name == 'LD') {
          document.getElementById("reg2").disabled = true;
        } else {
          document.getElementById("reg2").disabled = false;
        }
      }

    };
    RobComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'rob',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./rob.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/rob/rob.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./rob.component.scss */
      "./src/app/rob/rob.component.scss")).default]
    })
    /** ROB component*/
    ], RobComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    const environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(err => console.error(err));
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\lauta\AngularAppTypescript\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map