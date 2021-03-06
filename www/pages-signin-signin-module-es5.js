function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signin-signin-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signin/signin.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signin/signin.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSigninSigninPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"height: 100% !important;\" class=\"gradient-header\" color=\"app\">\n  <!-- <ion-card-header>\n      <br><br><br><br><br><br>\n  </ion-card-header> -->\n  <ion-card-content class=\"ion-padding\" style=\"color: #7C7C7C; padding-top: 25% !important;\">\n    <ion-row class=\"ion-margin-start\">\n      <p style=\"font-size: 3em; color: #636363;\">Bienvenido,</p>\n      <p style=\"margin-top: -10px;\">Inicia sesión para continuar</p>\n    </ion-row>\n    <ion-row>\n      <ion-col style=\"background: #F7F7F7;\" class=\"ion-margin-top ion-margin-start ion-margin-end\">\n          <ion-input clearInput [(ngModel)]=\"this.email\" placeholder=\"Correo Electrónico\"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"ion-margin-top\">\n      <ion-col style=\"background: #F7F7F7;\" class=\"ion-margin-start ion-margin-end\">\n          <ion-input clearInput type=\"password\" [(ngModel)]=\"this.pass\" (keyup.enter)=\"onEnter()\" placeholder=\"Contraseña\"></ion-input>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"ion-margin-top ion-margin-end\" align=\"right\">\n        <ion-label ngModel=\"msg\" ngDefaultControl></ion-label>\n        <ion-label [routerLink]=\"['/security']\">Olvidó su contraseña?</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col class=\"ion-margin-top\" align=\"center\">\n        <ion-button color=\"ion-text-capitalize\" class=\"btnapp\" color=\"app\" expand=\"block\" (click)=\"loginWithEmail()\">\n          <ion-icon name=\"mail\"></ion-icon> &nbsp;&nbsp;&nbsp;\n            Inicio con correo electrónico\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"12\" align=\"center\">\n        o inicie sesión con:\n      </ion-col>\n      <ion-col align=\"center\">\n        <ion-button shape=\"round\" color=\"ion-text-capitalize\" (click)=\"loginWithFacebook()\" style=\"background:#455CA7; height: 45px; border-radius: 2.5em; width: 80%;\">\n          <ion-icon name=\"logo-facebook\"></ion-icon> &nbsp;&nbsp;&nbsp;\n            Inicio con Facebook\n        </ion-button>\n      </ion-col>\n      <!-- <ion-col align=\"center\">\n        <ion-button shape=\"round\" color=\"ion-text-capitalize\" (click)=\"loginWithGoogle()\" style=\"background:#F1897F; height: 45px; border-radius: 2.5em; width: 80%;\">\n          <ion-icon name=\"logo-google\"></ion-icon> &nbsp;&nbsp;&nbsp;\n            Inicio con Google\n        </ion-button>\n      </ion-col> -->\n    </ion-row>\n    <br>\n    <ion-row>\n      <ion-col class=\"ion-margin-top\" align=\"center\">\n        Eres nuevo aquí? <b style=\"color: #55D8A3\" routerLink=\"/signup\">Crear cuenta</b>\n      </ion-col>\n    </ion-row>\n  </ion-card-content>\n</div>";
    /***/
  },

  /***/
  "./src/app/pages/signin/signin-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/signin/signin-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: SigninPageRoutingModule */

  /***/
  function srcAppPagesSigninSigninRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SigninPageRoutingModule", function () {
      return SigninPageRoutingModule;
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


    var _signin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signin.page */
    "./src/app/pages/signin/signin.page.ts");

    var routes = [{
      path: '',
      component: _signin_page__WEBPACK_IMPORTED_MODULE_3__["SigninPage"]
    }];

    var SigninPageRoutingModule = function SigninPageRoutingModule() {
      _classCallCheck(this, SigninPageRoutingModule);
    };

    SigninPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SigninPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/signin/signin.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/signin/signin.module.ts ***!
    \***********************************************/

  /*! exports provided: SigninPageModule */

  /***/
  function srcAppPagesSigninSigninModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SigninPageModule", function () {
      return SigninPageModule;
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


    var _signin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./signin-routing.module */
    "./src/app/pages/signin/signin-routing.module.ts");
    /* harmony import */


    var _signin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./signin.page */
    "./src/app/pages/signin/signin.page.ts");

    var SigninPageModule = function SigninPageModule() {
      _classCallCheck(this, SigninPageModule);
    };

    SigninPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _signin_routing_module__WEBPACK_IMPORTED_MODULE_5__["SigninPageRoutingModule"]],
      declarations: [_signin_page__WEBPACK_IMPORTED_MODULE_6__["SigninPage"]]
    })], SigninPageModule);
    /***/
  },

  /***/
  "./src/app/pages/signin/signin.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/signin/signin.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSigninSigninPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".app {\n  background: var(--ion-color-insideapp) !important;\n  color: #F8F8F8 !important;\n}\n\n.btnapp {\n  height: 50px;\n  background: var(--ion-color-btnapp) !important;\n  color: #F8F8F8 !important;\n}\n\n@media screen and (min-width: 769px) {\n  .signin_foot {\n    bottom: 0% !important;\n    position: fixed;\n    width: 100%;\n  }\n\n  .signin_head {\n    margin: auto 0 !important;\n  }\n}\n\n@media screen and (min-device-width: 481px) and (max-device-width: 768px) {\n  .signin_foot {\n    bottom: 0% !important;\n    position: fixed;\n    width: 100%;\n  }\n\n  .signin_head {\n    margin: auto 0 !important;\n  }\n}\n\n@media only screen and (max-device-width: 480px) {\n  .signin_foot {\n    bottom: 0% !important;\n    position: fixed;\n    width: 100%;\n  }\n\n  .signin_head {\n    margin: auto 0 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9BcHBsaWNhdGlvbnMvYXBwcy9kcml2ZXJhcHBiYXNlL3NyYy9hcHAvcGFnZXMvc2lnbmluL3NpZ25pbi5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NpZ25pbi9zaWduaW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaURBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLDhDQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUNJO0lBQ0kscUJBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtFQ0NOOztFREVFO0lBQ0kseUJBQUE7RUNDTjtBQUNGOztBREVBO0VBQ0k7SUFDSSxxQkFBQTtJQUNBLGVBQUE7SUFDQSxXQUFBO0VDQU47O0VER0U7SUFDSSx5QkFBQTtFQ0FOO0FBQ0Y7O0FER0E7RUFDSTtJQUNJLHFCQUFBO0lBQ0EsZUFBQTtJQUNBLFdBQUE7RUNETjs7RURJRTtJQUNJLHlCQUFBO0VDRE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZ25pbi9zaWduaW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWluc2lkZWFwcCkgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI0Y4RjhGOCAhaW1wb3J0YW50O1xufVxuXG4uYnRuYXBwIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWJ0bmFwcCkgIWltcG9ydGFudDtcbiAgICBjb2xvcjogI0Y4RjhGOCAhaW1wb3J0YW50O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjlweCkge1xuICAgIC5zaWduaW5fZm9vdCB7XG4gICAgICAgIGJvdHRvbTogMCUgIWltcG9ydGFudDtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgXG4gICAgLnNpZ25pbl9oZWFkIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvIDAgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA3NjhweCkgeyBcbiAgICAuc2lnbmluX2Zvb3Qge1xuICAgICAgICBib3R0b206IDAlICFpbXBvcnRhbnQ7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIFxuICAgIC5zaWduaW5faGVhZCB7XG4gICAgICAgIG1hcmdpbjogYXV0byAwICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA0ODBweCkge1xuICAgIC5zaWduaW5fZm9vdCB7XG4gICAgICAgIGJvdHRvbTogMCUgIWltcG9ydGFudDtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgXG4gICAgLnNpZ25pbl9oZWFkIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvIDAgIWltcG9ydGFudDtcbiAgICB9XG59IiwiLmFwcCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1pbnNpZGVhcHApICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjRjhGOEY4ICFpbXBvcnRhbnQ7XG59XG5cbi5idG5hcHAge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1idG5hcHApICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjRjhGOEY4ICFpbXBvcnRhbnQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OXB4KSB7XG4gIC5zaWduaW5fZm9vdCB7XG4gICAgYm90dG9tOiAwJSAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5zaWduaW5faGVhZCB7XG4gICAgbWFyZ2luOiBhdXRvIDAgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDQ4MXB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDc2OHB4KSB7XG4gIC5zaWduaW5fZm9vdCB7XG4gICAgYm90dG9tOiAwJSAhaW1wb3J0YW50O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5zaWduaW5faGVhZCB7XG4gICAgbWFyZ2luOiBhdXRvIDAgIWltcG9ydGFudDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNDgwcHgpIHtcbiAgLnNpZ25pbl9mb290IHtcbiAgICBib3R0b206IDAlICFpbXBvcnRhbnQ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLnNpZ25pbl9oZWFkIHtcbiAgICBtYXJnaW46IGF1dG8gMCAhaW1wb3J0YW50O1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/signin/signin.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/signin/signin.page.ts ***!
    \*********************************************/

  /*! exports provided: SigninPage */

  /***/
  function srcAppPagesSigninSigninPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SigninPage", function () {
      return SigninPage;
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


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/crud.service */
    "./src/app/services/crud.service.ts");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var impresa = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].impresa;

    var SigninPage = /*#__PURE__*/function () {
      function SigninPage(authService, navCtrl, platform, crudService, modalCtrl, toastCtrl) {
        _classCallCheck(this, SigninPage);

        this.authService = authService;
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.crudService = crudService;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.data = {};
        this.datasesion = {};
        this.errsystem = {
          sel: '',
          tbl: 80,
          where: ''
        };
      }

      _createClass(SigninPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "resetPass",
        value: function resetPass(mail) {
          firebase__WEBPACK_IMPORTED_MODULE_5__["auth"]().sendPasswordResetEmail(mail);
        }
      }, {
        key: "loginWithEmail",
        value: function loginWithEmail() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    console.log('Login Email'); // quitar espacios en blanco

                    this.authService.signInWithEmail(this.email.replace(/\s+/g, ''), this.pass + '$').then(function (res) {
                      console.log(res); // Verificacion correo
                      // if ( res.user.emailVerified ) {

                      console.log('signin success');
                      console.log(res.user.uid);
                      var data = {
                        sel: 'idtipo',
                        tbl: 5,
                        where: 'uid = "' + res.user.uid + '"'
                      };

                      _this.crudService.crud(data).subscribe(function (tipo) {
                        console.log(tipo);

                        if (res != null) {
                          if (tipo[0][0][0] == 3) {
                            _this.navCtrl.navigateBack('/traceroute');
                          } else {
                            console.log('Este usuario no existe en la aplicación');
                          }
                        } else {
                          _this.navCtrl.navigateBack('/signin');
                        }
                      }, function (err) {
                        console.log(err);
                      }); // this.navCtrl.navigateBack('/tabs/menu');
                      // } else {
                      //   this.mostrar_error('Debe de verificar el correo');
                      // }

                    })["catch"](function (error) {
                      return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                console.log(JSON.stringify(error));

                                if (error.code == 'auth/wrong-password') {
                                  console.log('Contraseña incorrecta');
                                  this.toastCtrl.create({
                                    message: 'Contraseña incorrecta'
                                  });
                                } else if (error.code == 'auth/invalid-email') {
                                  console.log('Correo Inválido');
                                  this.toastCtrl.create({
                                    message: 'Correo Inválido'
                                  });
                                } else if (error.code == 'auth/user-not-found') {
                                  console.log('Datos ingresados inválidos. Favor verificar que la información ingresada es correcta');
                                  this.toastCtrl.create({
                                    message: 'Datos ingresados inválidos. Favor verificar que la información ingresada es correcta'
                                  });
                                } else if (error.code == 'auth/too-many-requests') {
                                  console.log('Muchos intentos fallidos de ingreso. Favor intenta de nuevo mas tarde');
                                  this.toastCtrl.create({
                                    message: 'Muchos intentos fallidos de ingreso. Favor intenta de nuevo mas tarde'
                                  });
                                } else {
                                  this.errsystem.where = '0,"' + error.code + '","' + this.email + '",' + JSON.stringify(error);
                                  this.crudService.crud(this.errsystem).subscribe(function (res) {
                                    console.log(res);
                                  }, function (err) {
                                    console.log(err);
                                  });
                                }

                              case 2:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    });

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "emailLogin",
        value: function emailLogin() {
          // this.logsectionbtn1.nativeElement.classList.add('ion-hide');
          // this.logsectionbtn2.nativeElement.classList.add('ion-hide');
          // this.logsectionbtn3.nativeElement.classList.add('ion-hide');
          // this.datalog.nativeElement.classList.remove('ion-hide');
          // this.smsocialmediabtns.nativeElement.classList.remove('ion-hide');
          // this.logmsj.nativeElement.classList.add('ion-hide');
          this.email = '';
          this.pass = '';
        }
      }, {
        key: "showMediaBtns",
        value: function showMediaBtns() {// this.logsectionbtn1.nativeElement.classList.remove('ion-hide');
          // this.logsectionbtn2.nativeElement.classList.remove('ion-hide');
          // this.logsectionbtn3.nativeElement.classList.remove('ion-hide');
          // this.datalog.nativeElement.classList.add('ion-hide');
          // this.smsocialmediabtns.nativeElement.classList.add('ion-hide');
          // this.logmsj.nativeElement.classList.remove('ion-hide');
        }
      }, {
        key: "onEnter",
        value: function onEnter() {
          this.loginWithEmail();
        }
      }]);

      return SigninPage;
    }();

    SigninPage.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _services_crud_service__WEBPACK_IMPORTED_MODULE_4__["CrudService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('logSectionBtn1', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
      "static": false
    })], SigninPage.prototype, "logsectionbtn1", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('logSectionBtn2', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
      "static": false
    })], SigninPage.prototype, "logsectionbtn2", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('logSectionBtn3', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
      "static": false
    })], SigninPage.prototype, "logsectionbtn3", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dataLog', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
      "static": false
    })], SigninPage.prototype, "datalog", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('btnLoginMail', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
      "static": false
    })], SigninPage.prototype, "btnloginmail", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('smSocialMediaBtns', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
      "static": false
    })], SigninPage.prototype, "smsocialmediabtns", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('logMsj', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
      "static": false
    })], SigninPage.prototype, "logmsj", void 0);
    SigninPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signin',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./signin.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signin/signin.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./signin.page.scss */
      "./src/app/pages/signin/signin.page.scss"))["default"]]
    })], SigninPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-signin-signin-module-es5.js.map