function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHomeHomePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar class=\"app texture\" color=\"app\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Appexpress\n    </ion-title>\n  </ion-toolbar>\n</ion-header>";
    /***/
  },

  /***/
  "./src/app/pages/home/home-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/home/home-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: HomePageRoutingModule */

  /***/
  function srcAppPagesHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function () {
      return HomePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/pages/home/home.page.ts");

    var routes = [{
      path: '',
      component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"]
    }];

    var HomePageRoutingModule = function HomePageRoutingModule() {
      _classCallCheck(this, HomePageRoutingModule);
    };

    HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HomePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/home/home.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/home/home.module.ts ***!
    \*******************************************/

  /*! exports provided: HomePageModule */

  /***/
  function srcAppPagesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePageModule", function () {
      return HomePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/pages/home/home-routing.module.ts");
    /* harmony import */


    var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home.page */
    "./src/app/pages/home/home.page.ts");

    var HomePageModule = function HomePageModule() {
      _classCallCheck(this, HomePageModule);
    };

    HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_5__["HomePageRoutingModule"]],
      declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })], HomePageModule);
    /***/
  },

  /***/
  "./src/app/pages/home/home.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/home/home.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHomeHomePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".app {\n  background-color: var(--ion-color-insideapp) !important;\n  color: #F8F8F8 !important;\n}\n\n.btnapp {\n  background: var(--ion-color-btnapp) !important;\n  color: #f8f8f8;\n}\n\n.more {\n  font-size: 3.5em;\n}\n\n.btnempty {\n  margin: 0px 25% 0px 25%;\n  padding: 2%;\n  color: white;\n  width: 50%;\n  border-radius: 0em 0em 1.5em 1.5em;\n  box-shadow: 0px 2.5px 5px -1.5px #0d7c66af;\n}\n\n.sc-ion-input-md-h {\n  background: white;\n}\n\nion-avatar ion-img, ion-avatar img {\n  margin-top: -5px !important;\n}\n\n.text-large {\n  font-size: 30px;\n  text-decoration: none;\n  transition: 0.5 ease;\n}\n\n.footTotal {\n  position: absolute;\n  z-index: 999;\n  color: #fff;\n  height: 60px;\n  width: 75%;\n  bottom: 1.5%;\n  margin-left: 12.5% !important;\n}\n\n.quantity-selector {\n  clear: both;\n  visibility: visible;\n  display: block;\n  width: 100%;\n}\n\n.product-minus-button,\n.product-plus-button {\n  padding: 0;\n  height: 45px;\n  width: 40px;\n  text-align: center;\n  cursor: pointer;\n  float: left;\n  font-size: 32px;\n  background: #e5e5e5;\n  border-radius: 5px;\n}\n\n.product-minus-button span,\n.product-plus-button span {\n  line-height: 40px;\n}\n\n.quantity-selector input {\n  max-width: 70px;\n  font-size: 1em;\n  position: relative;\n  z-index: 1;\n  margin: 0 -1px;\n  background: #f3f3f3;\n  float: left;\n  display: block;\n  width: 41%;\n  text-align: center;\n  height: 45px;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvYXBwcy9kcml2ZXJhcHBiYXNlL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVEQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUNJLDhDQUFBO0VBQ0EsY0FBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7QUNDSjs7QURFQTtFQUNJLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQ0FBQTtBQ0NKOztBREVBO0VBQ0ksaUJBQUE7QUNDSjs7QURFQTtFQUNJLDJCQUFBO0FDQ0o7O0FERUE7RUFDSSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0FDQ0o7O0FER0E7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREVFOztFQUVFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREFJOztFQUNFLGlCQUFBO0FDR047O0FEQUU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItaW5zaWRlYXBwKSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiAjRjhGOEY4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG5hcHB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWJ0bmFwcCkgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI2Y4ZjhmODtcbn1cblxuLm1vcmV7XG4gICAgZm9udC1zaXplOiAzLjVlbTtcbn1cblxuLmJ0bmVtcHR5IHtcbiAgICBtYXJnaW46IDBweCAyNSUgMHB4IDI1JTtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBib3JkZXItcmFkaXVzOiAwZW0gMGVtIDEuNWVtIDEuNWVtO1xuICAgIGJveC1zaGFkb3c6IDBweCAyLjVweCA1cHggLTEuNXB4ICMwZDdjNjZhZjtcbn1cblxuLnNjLWlvbi1pbnB1dC1tZC1oe1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5pb24tYXZhdGFyIGlvbi1pbWcsIGlvbi1hdmF0YXIgaW1ne1xuICAgIG1hcmdpbi10b3A6IC01cHggIWltcG9ydGFudDtcbn1cblxuLnRleHQtbGFyZ2Uge1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogMC41IGVhc2U7XG59XG5cbi5mb290VG90YWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHdpZHRoOiA3NSU7XG4gICAgYm90dG9tOiAxLjUlO1xuICAgIG1hcmdpbi1sZWZ0OiAxMi41JSAhaW1wb3J0YW50O1xufVxuXG4vLyAqKioqKioqKioqKioqKioqKioqKioqKioqKitcbi5xdWFudGl0eS1zZWxlY3RvciB7XG4gICAgY2xlYXI6IGJvdGg7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAucHJvZHVjdC1taW51cy1idXR0b24sXG4gIC5wcm9kdWN0LXBsdXMtYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGhlaWdodDogNDVweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBzcGFuIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIH1cbiAgfVxuICAucXVhbnRpdHktc2VsZWN0b3IgaW5wdXQge1xuICAgIG1heC13aWR0aDogNzBweDtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbiAgICBtYXJnaW46IDAgLTFweDtcbiAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA0MSU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogNDVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH0iLCIuYXBwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWluc2lkZWFwcCkgIWltcG9ydGFudDtcbiAgY29sb3I6ICNGOEY4RjggIWltcG9ydGFudDtcbn1cblxuLmJ0bmFwcCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1idG5hcHApICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZjhmOGY4O1xufVxuXG4ubW9yZSB7XG4gIGZvbnQtc2l6ZTogMy41ZW07XG59XG5cbi5idG5lbXB0eSB7XG4gIG1hcmdpbjogMHB4IDI1JSAwcHggMjUlO1xuICBwYWRkaW5nOiAyJTtcbiAgY29sb3I6IHdoaXRlO1xuICB3aWR0aDogNTAlO1xuICBib3JkZXItcmFkaXVzOiAwZW0gMGVtIDEuNWVtIDEuNWVtO1xuICBib3gtc2hhZG93OiAwcHggMi41cHggNXB4IC0xLjVweCAjMGQ3YzY2YWY7XG59XG5cbi5zYy1pb24taW5wdXQtbWQtaCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG5pb24tYXZhdGFyIGlvbi1pbWcsIGlvbi1hdmF0YXIgaW1nIHtcbiAgbWFyZ2luLXRvcDogLTVweCAhaW1wb3J0YW50O1xufVxuXG4udGV4dC1sYXJnZSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0cmFuc2l0aW9uOiAwLjUgZWFzZTtcbn1cblxuLmZvb3RUb3RhbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogOTk5O1xuICBjb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiA2MHB4O1xuICB3aWR0aDogNzUlO1xuICBib3R0b206IDEuNSU7XG4gIG1hcmdpbi1sZWZ0OiAxMi41JSAhaW1wb3J0YW50O1xufVxuXG4ucXVhbnRpdHktc2VsZWN0b3Ige1xuICBjbGVhcjogYm90aDtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucHJvZHVjdC1taW51cy1idXR0b24sXG4ucHJvZHVjdC1wbHVzLWJ1dHRvbiB7XG4gIHBhZGRpbmc6IDA7XG4gIGhlaWdodDogNDVweDtcbiAgd2lkdGg6IDQwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmbG9hdDogbGVmdDtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4ucHJvZHVjdC1taW51cy1idXR0b24gc3Bhbixcbi5wcm9kdWN0LXBsdXMtYnV0dG9uIHNwYW4ge1xuICBsaW5lLWhlaWdodDogNDBweDtcbn1cblxuLnF1YW50aXR5LXNlbGVjdG9yIGlucHV0IHtcbiAgbWF4LXdpZHRoOiA3MHB4O1xuICBmb250LXNpemU6IDFlbTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW46IDAgLTFweDtcbiAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgZmxvYXQ6IGxlZnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNDElO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogNDVweDtcbiAgYm9yZGVyOiBub25lO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/home/home.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/home/home.page.ts ***!
    \*****************************************/

  /*! exports provided: HomePage */

  /***/
  function srcAppPagesHomeHomePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomePage", function () {
      return HomePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomePage = /*#__PURE__*/function () {
      function HomePage() {
        _classCallCheck(this, HomePage);
      }

      _createClass(HomePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomePage;
    }();

    HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.page.scss */
      "./src/app/pages/home/home.page.scss"))["default"]]
    })], HomePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-home-home-module-es5.js.map