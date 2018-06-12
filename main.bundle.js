webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./user/user.module": [
		"../../../../../src/app/user/user.module.ts"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__portal_portal_component__ = __webpack_require__("../../../../../src/app/portal/portal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__zelf_doen_zelf_doen_component__ = __webpack_require__("../../../../../src/app/zelf-doen/zelf-doen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__stellingen_stellingen_component__ = __webpack_require__("../../../../../src/app/stellingen/stellingen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_body_seksuele_intimidatie_seksuele_intimidatie_component__ = __webpack_require__("../../../../../src/app/home/home-body/seksuele-intimidatie/seksuele-intimidatie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home_body_strafbaar_strafbaar_component__ = __webpack_require__("../../../../../src/app/home/home-body/strafbaar/strafbaar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_body_aangifte_aangifte_component__ = __webpack_require__("../../../../../src/app/home/home-body/aangifte/aangifte.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__zelf_doen_zelf_doen_body_slachtoffer_slachtoffer_component__ = __webpack_require__("../../../../../src/app/zelf-doen/zelf-doen-body/slachtoffer/slachtoffer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__zelf_doen_zelf_doen_body_getuige_getuige_component__ = __webpack_require__("../../../../../src/app/zelf-doen/zelf-doen-body/getuige/getuige.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__zelf_doen_zelf_doen_body_pleger_pleger_component__ = __webpack_require__("../../../../../src/app/zelf-doen/zelf-doen-body/pleger/pleger.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__game_game_component__ = __webpack_require__("../../../../../src/app/game/game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var appRoutes = [
    { path: '', redirectTo: 'wat-is-seksuele-intimidatie/wat-is-seksuele-intimidatie', pathMatch: 'full' },
    { path: 'wat-is-seksuele-intimidatie', redirectTo: 'wat-is-seksuele-intimidatie/wat-is-seksuele-intimidatie', pathMatch: 'full' },
    { path: 'wat-is-seksuele-intimidatie/wat-is-seksuele-intimidatie', component: __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */], pathMatch: 'full', children: [{ path: '', component: __WEBPACK_IMPORTED_MODULE_9__home_home_body_seksuele_intimidatie_seksuele_intimidatie_component__["a" /* SeksueleIntimidatieComponent */], outlet: 'content' }] },
    { path: 'wat-is-seksuele-intimidatie/welk-gedrag-is-strafbaar', component: __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */], pathMatch: 'full', children: [{ path: '', component: __WEBPACK_IMPORTED_MODULE_10__home_home_body_strafbaar_strafbaar_component__["a" /* StrafbaarComponent */], outlet: 'content' }] },
    { path: 'wat-is-seksuele-intimidatie/hoe-kan-ik-aangifte-doen', component: __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */], pathMatch: 'full', children: [{ path: '', component: __WEBPACK_IMPORTED_MODULE_11__home_home_body_aangifte_aangifte_component__["a" /* AangifteComponent */], outlet: 'content' }] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */], pathMatch: 'full' },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_4__register_register_component__["a" /* RegisterComponent */], pathMatch: 'full' },
    { path: 'wat-kan-je-zelf-doen', redirectTo: 'wat-kan-je-zelf-doen/als-slachtoffer', pathMatch: 'full' },
    { path: 'wat-kan-je-zelf-doen/als-slachtoffer', component: __WEBPACK_IMPORTED_MODULE_6__zelf_doen_zelf_doen_component__["a" /* ZelfDoenComponent */], pathMatch: 'full', children: [{ path: '', component: __WEBPACK_IMPORTED_MODULE_12__zelf_doen_zelf_doen_body_slachtoffer_slachtoffer_component__["a" /* SlachtofferComponent */], outlet: 'content' }] },
    { path: 'wat-kan-je-zelf-doen/als-getuige', component: __WEBPACK_IMPORTED_MODULE_6__zelf_doen_zelf_doen_component__["a" /* ZelfDoenComponent */], pathMatch: 'full', children: [{ path: '', component: __WEBPACK_IMPORTED_MODULE_13__zelf_doen_zelf_doen_body_getuige_getuige_component__["a" /* GetuigeComponent */], outlet: 'content' }] },
    { path: 'wat-kan-je-zelf-doen/als-pleger', component: __WEBPACK_IMPORTED_MODULE_6__zelf_doen_zelf_doen_component__["a" /* ZelfDoenComponent */], pathMatch: 'full', children: [{ path: '', component: __WEBPACK_IMPORTED_MODULE_14__zelf_doen_zelf_doen_body_pleger_pleger_component__["a" /* PlegerComponent */], outlet: 'content' }] },
    { path: 'feiten', component: __WEBPACK_IMPORTED_MODULE_7__stellingen_stellingen_component__["a" /* StellingenComponent */], pathMatch: 'full' },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_8__contact_contact_component__["a" /* ContactComponent */], pathMatch: 'full' },
    { path: 'user', loadChildren: './user/user.module#UserModule', canActivate: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'game', component: __WEBPACK_IMPORTED_MODULE_15__game_game_component__["a" /* GameComponent */], pathMatch: 'full' },
    { path: 'portal', component: __WEBPACK_IMPORTED_MODULE_2__portal_portal_component__["a" /* PortalComponent */], pathMatch: 'full' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(appRoutes, {})
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ],
            providers: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n<app-error-message></app-error-message>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(http, store) {
        var _this = this;
        this.http = http;
        this.store = store;
        var token = localStorage.getItem('token');
        if (token != undefined) {
            this.http.get('https://api20op20.herokuapp.com/api/teacher/me', {
                headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('x-auth-token', "" + token)
            })
                .subscribe(function (v) {
                _this.store.dispatch({ type: 'CREATE_AUTH',
                    payload: { id: v.user.id,
                        username: v.user.email,
                        firstname: v.user.firstname,
                        lastname: v.user.lastname,
                        school: v.user.school
                    }
                });
                return true;
            }, function (err) {
                console.log('something went wrong');
                return false;
            });
        }
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_user_module__ = __webpack_require__("../../../../../src/app/user/user.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_home_body_home_body_component__ = __webpack_require__("../../../../../src/app/home/home-body/home-body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__contact_contact_body_contact_body_component__ = __webpack_require__("../../../../../src/app/contact/contact-body/contact-body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__zelf_doen_zelf_doen_component__ = __webpack_require__("../../../../../src/app/zelf-doen/zelf-doen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__zelf_doen_zelf_doen_body_zelf_doen_body_component__ = __webpack_require__("../../../../../src/app/zelf-doen/zelf-doen-body/zelf-doen-body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__stellingen_stellingen_component__ = __webpack_require__("../../../../../src/app/stellingen/stellingen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__stellingen_stellingen_body_stellingen_body_component__ = __webpack_require__("../../../../../src/app/stellingen/stellingen-body/stellingen-body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__home_home_body_seksuele_intimidatie_seksuele_intimidatie_component__ = __webpack_require__("../../../../../src/app/home/home-body/seksuele-intimidatie/seksuele-intimidatie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__home_home_body_strafbaar_strafbaar_component__ = __webpack_require__("../../../../../src/app/home/home-body/strafbaar/strafbaar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__home_home_body_aangifte_aangifte_component__ = __webpack_require__("../../../../../src/app/home/home-body/aangifte/aangifte.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__zelf_doen_zelf_doen_body_slachtoffer_slachtoffer_component__ = __webpack_require__("../../../../../src/app/zelf-doen/zelf-doen-body/slachtoffer/slachtoffer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__zelf_doen_zelf_doen_body_getuige_getuige_component__ = __webpack_require__("../../../../../src/app/zelf-doen/zelf-doen-body/getuige/getuige.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__zelf_doen_zelf_doen_body_pleger_pleger_component__ = __webpack_require__("../../../../../src/app/zelf-doen/zelf-doen-body/pleger/pleger.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__game_game_component__ = __webpack_require__("../../../../../src/app/game/game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__game_question_modal_question_modal_component__ = __webpack_require__("../../../../../src/app/game/question-modal/question-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__game_code_modal_code_modal_component__ = __webpack_require__("../../../../../src/app/game/code-modal/code-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__game_game_display_game_display_component__ = __webpack_require__("../../../../../src/app/game/game-display/game-display.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_question_service__ = __webpack_require__("../../../../../src/app/services/question.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__common_reducers_index__ = __webpack_require__("../../../../../src/app/common/reducers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__portal_portal_component__ = __webpack_require__("../../../../../src/app/portal/portal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// components























// services



// reducers


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_11__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__home_home_body_home_body_component__["a" /* HomeBodyComponent */],
                __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_14__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_16__contact_contact_body_contact_body_component__["a" /* ContactBodyComponent */],
                __WEBPACK_IMPORTED_MODULE_17__zelf_doen_zelf_doen_component__["a" /* ZelfDoenComponent */],
                __WEBPACK_IMPORTED_MODULE_18__zelf_doen_zelf_doen_body_zelf_doen_body_component__["a" /* ZelfDoenBodyComponent */],
                __WEBPACK_IMPORTED_MODULE_19__stellingen_stellingen_component__["a" /* StellingenComponent */],
                __WEBPACK_IMPORTED_MODULE_20__stellingen_stellingen_body_stellingen_body_component__["a" /* StellingenBodyComponent */],
                __WEBPACK_IMPORTED_MODULE_21__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_22__home_home_body_seksuele_intimidatie_seksuele_intimidatie_component__["a" /* SeksueleIntimidatieComponent */],
                __WEBPACK_IMPORTED_MODULE_23__home_home_body_strafbaar_strafbaar_component__["a" /* StrafbaarComponent */],
                __WEBPACK_IMPORTED_MODULE_24__home_home_body_aangifte_aangifte_component__["a" /* AangifteComponent */],
                __WEBPACK_IMPORTED_MODULE_25__zelf_doen_zelf_doen_body_slachtoffer_slachtoffer_component__["a" /* SlachtofferComponent */],
                __WEBPACK_IMPORTED_MODULE_26__zelf_doen_zelf_doen_body_getuige_getuige_component__["a" /* GetuigeComponent */],
                __WEBPACK_IMPORTED_MODULE_27__zelf_doen_zelf_doen_body_pleger_pleger_component__["a" /* PlegerComponent */],
                __WEBPACK_IMPORTED_MODULE_28__game_game_component__["a" /* GameComponent */],
                __WEBPACK_IMPORTED_MODULE_29__game_question_modal_question_modal_component__["a" /* QuestionModalComponent */],
                __WEBPACK_IMPORTED_MODULE_30__game_code_modal_code_modal_component__["a" /* CodeModalComponent */],
                __WEBPACK_IMPORTED_MODULE_31__game_game_display_game_display_component__["a" /* GameDisplayComponent */],
                __WEBPACK_IMPORTED_MODULE_36__portal_portal_component__["a" /* PortalComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["b" /* StoreModule */].forRoot(__WEBPACK_IMPORTED_MODULE_35__common_reducers_index__["a" /* reducers */], {
                    initialState: {
                        auth: null,
                        codes: null,
                        userNavigation: 'details',
                        questionModal: false,
                        questionNumber: 0,
                        errorMessage: '',
                        responsiveNagivation: false,
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_8__user_user_module__["UserModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_32__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_33__services_question_service__["a" /* QuestionService */], __WEBPACK_IMPORTED_MODULE_34__guards_auth_guard__["a" /* AuthGuard */], { provide: __WEBPACK_IMPORTED_MODULE_5__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_5__angular_common__["HashLocationStrategy"] }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/common/reducers/auth.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = auth;
function auth(state, action) {
    switch (action.type) {
        case 'CREATE_AUTH':
            return action.payload;
        case 'UPDATE_USER_INFO':
            return Object.assign(state, action.payload);
        case 'DELETE_AUTH':
            return null;
        default:
            return state;
    }
}


/***/ }),

/***/ "../../../../../src/app/common/reducers/codes.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = codes;
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
function codes(state, action) {
    switch (action.type) {
        case 'CREATE_CODES':
            return action.payload;
        case 'ADD_CODES':
            return __assign({}, state, { codes: state.codes.concat([action.payload]) });
        case 'DELETE_CODE':
            return __assign({}, state, { codes: state.codes.filter(function (v) { return v._id !== action.payload._id; }) });
        default:
            return state;
    }
}


/***/ }),

/***/ "../../../../../src/app/common/reducers/error-message.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = errorMessage;
function errorMessage(state, action) {
    switch (action.type) {
        case 'SET_ERROR_MESSAGE':
            return action.payload;
        case 'CLEAR_ERROR_MESSAGE':
            return '';
        default:
            return state;
    }
}


/***/ }),

/***/ "../../../../../src/app/common/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_reducer__ = __webpack_require__("../../../../../src/app/common/reducers/auth.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__codes_reducer__ = __webpack_require__("../../../../../src/app/common/reducers/codes.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_navigation_reducer__ = __webpack_require__("../../../../../src/app/common/reducers/user-navigation.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question_modal_reducer__ = __webpack_require__("../../../../../src/app/common/reducers/question-modal.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__question_number_reducer__ = __webpack_require__("../../../../../src/app/common/reducers/question-number.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error_message_reducer__ = __webpack_require__("../../../../../src/app/common/reducers/error-message.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__responsive_navigation_reducer__ = __webpack_require__("../../../../../src/app/common/reducers/responsive-navigation.reducer.ts");







var reducers = {
    auth: __WEBPACK_IMPORTED_MODULE_0__auth_reducer__["a" /* auth */],
    codes: __WEBPACK_IMPORTED_MODULE_1__codes_reducer__["a" /* codes */],
    userNavigation: __WEBPACK_IMPORTED_MODULE_2__user_navigation_reducer__["a" /* userNavigation */],
    questionModal: __WEBPACK_IMPORTED_MODULE_3__question_modal_reducer__["a" /* questionModal */],
    questionNumber: __WEBPACK_IMPORTED_MODULE_4__question_number_reducer__["a" /* questionNumber */],
    errorMessage: __WEBPACK_IMPORTED_MODULE_5__error_message_reducer__["a" /* errorMessage */],
    responsiveNagivation: __WEBPACK_IMPORTED_MODULE_6__responsive_navigation_reducer__["a" /* responsiveNagivation */]
};


/***/ }),

/***/ "../../../../../src/app/common/reducers/question-modal.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = questionModal;
function questionModal(state, action) {
    switch (action.type) {
        case 'SET_MODAL':
            return action.payload;
        default:
            return state;
    }
}


/***/ }),

/***/ "../../../../../src/app/common/reducers/question-number.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = questionNumber;
function questionNumber(state, action) {
    switch (action.type) {
        case 'SET_QUESTION_NUMBER':
            return action.payload;
        default:
            return state;
    }
}


/***/ }),

/***/ "../../../../../src/app/common/reducers/responsive-navigation.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = responsiveNagivation;
function responsiveNagivation(state, action) {
    switch (action.type) {
        case 'SET_NAVIGATION':
            return state = !state;
        default:
            return state;
    }
}


/***/ }),

/***/ "../../../../../src/app/common/reducers/user-navigation.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = userNavigation;
function userNavigation(state, action) {
    switch (action.type) {
        case 'SET_PAGE':
            return action.payload;
        default:
            return state;
    }
}


/***/ }),

/***/ "../../../../../src/app/contact/contact-body/contact-body.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\r\n\tmargin: 0 100px 20px 100px;\r\n\twidth: 45%;\r\n}\r\n\r\np {\r\n\tfont-size: 1.25rem;\r\n\tmargin-left: 10px;\r\n}\r\n\r\n.sensoa {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-flow: column;\r\n\t        flex-flow: column;\r\n}\r\n\r\n@media only screen and (max-width: 940px) {\r\n    div {\r\n    \twidth: 100%;\r\n    \tmargin-left: 20px;\r\n    \tmargin-right: 10px;\r\n    }\r\n\r\n    p {\r\n    \tfont-size: 1rem;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 530px) {\r\n    h1 {\r\n    \tword-break: break-all;\r\n    \t-webkit-hyphens: auto;\r\n    \t    -ms-hyphens: auto;\r\n    \t        hyphens: auto;\r\n    }\r\n\r\n    p {\r\n    \tmargin-left: 5px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact-body/contact-body.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n\t<h1>Strafbare feiten en dringende hulp</h1>\r\n\t<p>Bel onmiddelijk het noodnummer 101.</p>\r\n</div>\r\n\r\n<div>\r\n\t<h1>Voor niet-dringende hulp</h1>\r\n\t<p>Bel de Blauwe Lijn 0800 123 12.</p>\r\n\t<p>Maak een <a href=\"https://www.politieantwerpen.be/afspraak\">online afspraak met Politie Antwerpen</a>.</p>\r\n\t<p>Bij het <a href=\"http://igvm-iefh.belgium.be/nl/info-en-hulp#form\">Instituut voor de Gelijkheid van Vrouwen en Mannen</a>.</p>\r\n</div>\r\n\r\n<div>\r\n\t<h1>​Jong &amp; Van Zin</h1>\r\n\t<p>Organisatie die zorgt voor informatie, participatie en vorming voor kinderen, jongeren en hun begeleiders. Ze hebben een ervaringsgericht vormingsaanbod.</p>\r\n\t<p><a href=\"http://www.jongenvanzin.be/\">www.jongenvanzin.be</a></p>\r\n</div>\r\n\r\n<div>\r\n\t<h1>Sensoa</h1>\r\n\t<p>​Sensoa helpt om te praten over relaties, seksualiteit, grensoverschrijdend gedrag, seksuele diversiteit enzovoort. Ze bieden vormingsmateriaal aan en organiseren interessante opleidingen </p>\r\n\t<p><a class=\"sensoa\" href=\"http://www.sensoa.be/\">www.sensoa.be</a></p>\r\n\t<p><a class=\"sensoa\" href=\"http://www.seksuelevorming.be/\">www.seksuelevorming.be</a></p>\r\n</div>\r\n\r\n<div>\r\n\t<h1>Ella</h1>\r\n\t<p>Expertise- en kenniscentrum voor gender en etniciteit. Het zet zich in voor bevordering van het emancipatie- en participatieproces van meisjes en vrouwen uit etnisch-culturele minderheidsgroepen in Vlaanderen. Ella biedt info en organiseert vormingen voor jongeren en intermediairs.</p>\r\n\t<p><a href=\"http://www.ellavzw.be/\">www.ellavzw.be</a></p>\r\n</div>\r\n\r\n<div>\r\n\t<h1>RoSa</h1>\r\n\t<p>RoSa vzw is een expertisecentrum voor gelijke kansen m/v, feminisme en gender. RoSa biedt ook workshops op maat aan voor iedereen die meer wil weten over deze thema’s.</p>\r\n\t<p><a href=\"http://www.rosavzw.be/\">www.rosavzw.be</a></p>\r\n</div>\r\n\r\n<div>\r\n\t<h1>Jongerenadviescentrum (JAC)</h1>\r\n\t<p>Jongeren kunnen met al hun vragen terecht bij de Jongerenadviescentra (JAC) voor <a href=\"http://www.jac.be/onthaal\">een gesprek, afspraak of chat</a>.</p>\r\n\t<p><a href=\"http://www.jac.be/\">www.jac.be</a></p>\r\n</div>\r\n\r\n<div>\r\n\t<h1>Cavaria</h1>\r\n\t<p>Koepelorganisatie van Vlaamse en Brusselse holebigroepen. Zij geeft vormingen in het onderwijs om het holebi- en transgenderthema bespreekbaar te maken in de klas en binnen de school.</p>\r\n\t<p><a href=\"http://www.cavaria.be/\">www.cavaria.be</a></p>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/contact/contact-body/contact-body.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactBodyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactBodyComponent = /** @class */ (function () {
    function ContactBodyComponent() {
    }
    ContactBodyComponent.prototype.ngOnInit = function () {
    };
    ContactBodyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact-body',
            template: __webpack_require__("../../../../../src/app/contact/contact-body/contact-body.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact/contact-body/contact-body.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactBodyComponent);
    return ContactBodyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-contact-body {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n\t-ms-flex-wrap: wrap;\r\n\t    flex-wrap: wrap;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n\r\n<app-contact-body></app-contact-body>\r\n\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/error-message/error-message.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".note {\r\n\tbackground:#eee;\r\n\tborder:0.05em solid darken(#eee, 15%);\r\n\tborder-left-width:0.2em;\r\n\tborder-radius:0.2em;\r\n\tcolor: #333;\r\n\tfont-family:sans-serif;\r\n\tfont-size:1em;\r\n\tmargin:1em;\r\n  padding: 1.2em;\r\n  width: calc(100vw - 40px - 2em - 1.2em - 15px);\r\n\r\n  position: fixed;\r\n  top: 40px;\r\n  left: 20px;\r\n  z-index: 2;\r\n}\r\n\r\n.note:before,\r\n.note:after {\r\n  display:block;\r\n  position:absolute;\r\n  left:0;\r\n  top:50%;\r\n  -webkit-transform:translate(-50%, -50%);\r\n          transform:translate(-50%, -50%);\r\n  margin-left: calc(-0.2em/2);\r\n}\r\n\r\n.note:before {\r\n  border-radius:50%;\r\n  content:\"\";\r\n  width:calc(1.2em * 1.7);\r\n  height:calc(1.2em * 1.7);\r\n}\r\n\r\n.note:after {\r\n  color:#fff;\r\n  font: normal normal normal 0.9em/1 \"FontAwesome\";\r\n  z-index:50;\r\n}\r\n\r\n.note-emergency {\r\n\tbackground:#fe8a8a;\r\n\tborder-color:#ff3232;\r\n\tborder-left-color:#ff0000;\r\n\tcolor:#cc0000;\r\n}\r\n\r\n.note-emergency:before {\r\n  background:#ff0000;\r\n}\r\n\r\n.note-emergency:after {\r\n  content:\"\\F071\";\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/error-message/error-message.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"note note-emergency\" *ngIf=\"errorMessage !== ''\">{{errorMessage}}</div>\n"

/***/ }),

/***/ "../../../../../src/app/error-message/error-message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorMessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ErrorMessageComponent = /** @class */ (function () {
    function ErrorMessageComponent(store) {
        var _this = this;
        this.store = store;
        store.select('errorMessage').subscribe(function (v) { _this.errorMessage = v; _this.setTimer(); });
    }
    ErrorMessageComponent.prototype.ngOnInit = function () {
    };
    ErrorMessageComponent.prototype.setTimer = function () {
        var _this = this;
        if (this.errorMessage !== '') {
            setTimeout(function () {
                _this.store.dispatch({ type: 'CLEAR_ERROR_MESSAGE', payload: "" });
            }, 3000);
        }
    };
    ErrorMessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-error-message',
            template: __webpack_require__("../../../../../src/app/error-message/error-message.component.html"),
            styles: [__webpack_require__("../../../../../src/app/error-message/error-message.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]])
    ], ErrorMessageComponent);
    return ErrorMessageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "span {\r\n  margin-left: 10px;\r\n  font-size: 20px;\r\n}\r\n\r\n.fa {\r\n  padding: 20px 20px;\r\n  font-size: 20px;\r\n  width: 20px;\r\n  text-decoration: none;\r\n  margin: 10px 20px 0 0;\r\n}\r\n\r\n.fa:last-child {\r\n  margin-right: 0;\r\n}\r\n\r\n.fa:hover {\r\n  opacity: 0.7;\r\n}\r\n\r\n.fa-envelope-o {\r\n  width: 172px;\r\n  padding: 19px 20px 19px 20px;\r\n  background: #0064B4;\r\n  color: white;\r\n}\r\n\r\n.fa-facebook {\r\n  background: #3B5998;\r\n  color: white;\r\n}\r\n\r\n.fa-twitter {\r\n  background: #55ACEE;\r\n  color: white;\r\n}\r\n\r\n.fa-instagram {\r\n  background: #125688;\r\n  color: white;\r\n}\r\n\r\n.fa-linkedin {\r\n  background: #007bb5;\r\n  color: white;\r\n}\r\n\r\n.contact {\r\n  margin-right: 100px;\r\n}\r\n\r\n.contact-icons {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.contact-icons a {\r\n  font-size: 22px;\r\n}\r\n\r\n.media-icons {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n}\r\n\r\n.media-icons a {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n@media only screen and (max-width: 530px) {\r\n    .contact {\r\n      margin-right: 0;\r\n    }\r\n\r\n    .fa {\r\n      margin-right: 10px;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"contact\">\r\n\t<p>Contact met Stad Antwerpen</p>\r\n\r\n\t<div class=\"contact-icons\">\r\n\t\t<a href=\"\" class=\"fa fa-envelope-o\"><span>Contacteer ons</span></a>\r\n\t</div>\r\n</div>\r\n\r\n\r\n<div class=\"media\">\r\n\t<p>Vind ons op</p>\r\n\r\n\t<div class=\"media-icons\">\r\n\t\t<a target=\"_blank\" href=\"https://www.facebook.com/stad.antwerpen\" class=\"fa fa-facebook\"></a>\r\n\t\t<a target=\"_blank\" href=\"https://twitter.com/Stad_Antwerpen\" class=\"fa fa-twitter\"></a>\r\n\t\t<a target=\"_blank\" href=\"https://www.instagram.com/stad_antwerpen\" class=\"fa fa-instagram\"></a>\r\n\t\t<a target=\"_blank\" href=\"https://www.linkedin.com/company/stad-antwerpen\" class=\"fa fa-linkedin\"></a>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/game/code-modal/code-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto);\r\n\r\n.modal-dialog {\r\n  padding-top: 10px;\r\n}\r\n\r\n.code-modal-container {\r\n  padding: 30px;\r\n  max-width: 300px;\r\n  width: 100% !important;\r\n  background-color: #F7F7F7;\r\n  margin: 0 auto;\r\n  border-radius: 2px;\r\n  -webkit-box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);\r\n          box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);\r\n  overflow: hidden;\r\n  font-family: roboto, sans-serif;\r\n}\r\n\r\n.code-modal-container h1 {\r\n  text-align: center;\r\n  font-size: 1.5em;\r\n  font-family: \"roboto\", sans-serif;\r\n  color: #000;\r\n}\r\n\r\n.code-modal-container .btn {\r\n  width: 100%;\r\n  display: block;\r\n  margin-bottom: 10px;\r\n  position: relative;\r\n}\r\n\r\n.code-modal-container input[type=text] {\r\n  height: 44px;\r\n  font-size: 16px;\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n  -webkit-appearance: none;\r\n  background: #fff;\r\n  border: 1px solid #d9d9d9;\r\n  border-top: 1px solid #c0c0c0;\r\n  /* border-radius: 2px; */\r\n  padding: 0 8px;\r\n  -webkit-box-sizing: border-box;\r\n          box-sizing: border-box;\r\n  -moz-box-sizing: border-box;\r\n  font-family: \"roboto\", sans-serif;\r\n}\r\n\r\n.code-modal-container input[type=text]:hover {\r\n  border: 1px solid #b9b9b9;\r\n  border-top: 1px solid #a0a0a0;\r\n  -webkit-box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);\r\n  box-shadow: inset 0 1px 2px rgba(0,0,0,0.1);\r\n}\r\n\r\n.code-modal {\r\n  text-align: center;\r\n  font-size: 14px;\r\n  font-family: 'Arial', sans-serif;\r\n  font-weight: 700;\r\n  height: 36px;\r\n  padding: 0 8px;\r\n}\r\n\r\n.code-modal-submit {\r\n  color: #fff;\r\n  text-shadow: 0 1px rgba(0,0,0,0.1);\r\n  background-color: #4d90fe;\r\n  padding: 17px 0;\r\n  font-family: roboto, sans-serif;\r\n  font-size: 14px;\r\n  text-align: center;\r\n}\r\n\r\n.code-modal-submit:hover {\r\n  text-shadow: 0 1px rgba(0,0,0,0.3);\r\n  background-color: #357ae8;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/game/code-modal/code-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"code-modal-container\">\r\n      <h1>Geef hier je code in</h1><br>\r\n      <input type=\"text\" [(ngModel)]=\"code\" placeholder=\"Code\">\r\n      <div (click)=\"validate(code)\" class=\"btn code-modal-submit\">Ingeven</div>\r\n      <div (click)=\"skip()\" class=\"btn code-modal-submit\">Overslaan</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/game/code-modal/code-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_code_service__ = __webpack_require__("../../../../../src/app/services/code.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CodeModalComponent = /** @class */ (function () {
    function CodeModalComponent(codeService, store) {
        this.codeService = codeService;
        this.store = store;
        this.sendCode = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CodeModalComponent.prototype.ngOnInit = function () {
    };
    CodeModalComponent.prototype.validate = function (keyCode) {
        var _this = this;
        this.codeService.validateCode(keyCode).subscribe(function (v) {
            if (v)
                _this.sendCode.emit(v);
        }, function (err) {
            _this.store.dispatch({ type: 'SET_ERROR_MESSAGE', payload: err.error });
        });
    };
    CodeModalComponent.prototype.skip = function () {
        this.sendCode.emit(null);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CodeModalComponent.prototype, "sendCode", void 0);
    CodeModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-code-modal',
            template: __webpack_require__("../../../../../src/app/game/code-modal/code-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/game/code-modal/code-modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_code_service__["a" /* CodeService */], __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */]])
    ], CodeModalComponent);
    return CodeModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/game/dialogs/day-one.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return scene1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scene2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return scene3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return scene3a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return scene3b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return scene4; });
/* unused harmony export scene5 */
var scene1 = [
    { dialog: "Ugh, het is terug maandag. Waarom moet school zo vroeg beginnen?",
        by: "mc" },
    { dialog: "MC, kom je naar beneden? Ontbijt is klaar en het is bijna tijd voor school.",
        by: "mom" },
    { dialog: "Ben direct beneden, ik moet me nog aankleden.",
        by: "mc" },
    { dialog: "Goeiemorgen Mama.",
        by: "mc" },
    { dialog: "Goeiemorgen  schat, goed geslapen?",
        by: "mom" },
    { dialog: "hmmm, uhu.",
        by: "mc" },
    { dialog: "Wel het is bijna tijd, ga je rugzak maar halen en dan kan ja naar school gaan.",
        by: "mom" },
];
var scene2 = [
    { dialog: "MC zit in de klas met nog 12 andere kinderen, de leerkracht is namen aan het afroepen. De leerkracht roept jouw naam en je antwoordt: “Ben er.”",
        by: "narrator" },
    { dialog: "De leerkracht gaat de rest van de namen af en je zit maar naar buiten te staren.",
        by: "narrator" },
    { dialog: "Net buiten de schoolpoort zie je een jongen die tegen de muur wordt geduwd door twee grotere jongens.",
        by: "narrator" },
    { dialog: "De grotere jongens lachen en lopen weg en de kleinere jongen zit met zijn rug tegen de muur, tranen lopen van zijn wangen.",
        by: "narrator" },
];
var scene3 = [
    { dialog: "De hele klas loopt op de speelplaats en iedereen verdeelt zich in groepjes, jij en je vrienden staan in een groep en beginnen te praten en lachen.",
        by: "narrator" },
    { dialog: "Je ziet de jongen die tegen de muur werd geduwd.",
        by: "narrator" },
    {
        dialog: "Je gaat naar de jongen. De jongen merkt je op, en kijkt snel naar beneden.",
        by: "narrator"
    },
    {
        dialog: "Is alles ok? Ik zag wat er gebeurde buiten aan de schoolpoort.",
        by: "mc"
    },
    {
        dialog: "De jongen schrikt maar blijft naar beneden kijken.",
        by: "narrator"
    },
    {
        dialog: "Het is ok als je me niet vertrouwt, je kent me ook niet. Maar ik zag wat er gebeurde, is alles ok?",
        by: "mc"
    },
    {
        dialog: "Die jongens die je zag zijn jongens van mijn vorige school, die blijven mij maar volgen.",
        by: "jason"
    },
    {
        dialog: "Waarom volgen ze jou?",
        by: "mc"
    },
    {
        dialog: "Wel op mijn vorige school zijn ze er achter gekomen dat ik op jongens val, en toen begon het. Ik werd janet en fagot genoemd. Iedereen was constant over mij aan het roddelen. Ik moest daar gewoon weg.",
        by: "jason"
    },
    {
        dialog: "Dus daarom ben je naar deze school gekomen? En ze volgen je nog steeds?",
        by: "mc"
    },
    {
        dialog: "uhu, nu dat ze het ook al op deze school weten, ik ben hier nog maar een week, en iedereen weet al dat ik val op jongens.",
        by: "jason"
    },
];
var scene3a = [
    { dialog: "Je blijft bij je vrienden en blijft praten tot de les terug begint.",
        by: "narrator" },
];
var scene3b = [
    {
        dialog: "Wel voor mij maakt het niet uit op wie je valt, je blijft nog steeds dezelfde persoon.",
        by: "mc"
    },
    {
        dialog: "hehe, merci. Jij bent de eerste persoon op deze school die zoiets lief tegen mij heeft gezegd. Mijn naam is Jason by the way",
        by: "jason"
    },
    {
        dialog: "Je gaat terug naar de les.",
        by: "narrator"
    }
];
var scene4 = [
    {
        dialog: "De les begint terug, maar de leerkracht is nog niet begonnen met de les.",
        by: "narrator"
    },
    {
        dialog: "Wel we hebben iemand nieuw die in onze klas komt zitten. Dit is Naomi.",
        by: "teacher"
    },
    {
        dialog: "Naomi loopt de klas binnen, hoofd naar beneden is precies heel verlegen.",
        by: "narrator"
    },
    {
        dialog: "Hallo, ik ben Naomi.",
        by: "naomi"
    },
    {
        dialog: "Wel er is plaats naast MC.  Je kan daar zitten.",
        by: "teacher"
    },
    {
        dialog: "Naomi pakt haar rugzak op en komt naast jou zitten.",
        by: "narrator"
    },
    {
        dialog: "En hoe zit het in deze klas? Dingen die ik moet weten?",
        by: "naomi"
    }
];
var scene5 = [];
// {
//   dialog: "",
//   by: ""
// },


/***/ }),

/***/ "../../../../../src/app/game/dialogs/question.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return questions; });
var questions = [
    ['Je blijft bij je vrienden.', 'Je gaat naar de jongen toe.'],
    ['Het is normaal dat ze je pesten, homo!', 'Voor mij maakt het niet uit op wie je valt'],
    ['Wel, hoeveel tijd heb je.', 'Iedereen is saai, behalve ik, I’m the coolest. *knipoog* en begint met lachen', 'Eh, niets belangrijk.']
];


/***/ }),

/***/ "../../../../../src/app/game/game-display/game-display.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#canvas {\r\n  width: calc(960px * 0.7);\r\n  height: calc(678px * 0.7);\r\n  position: relative;\r\n  margin: 0 auto;\r\n  /* transform: translateX(-50%) translateY(-50%); */\r\n  border: 1px solid #000;\r\n  background-size: cover;\r\n  -webkit-transition: all 0.5s;\r\n  transition: all 0.5s;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n}\r\n\r\n#mc, #mom, #teacher, #naomi {\r\n  position: absolute;\r\n  bottom: 0;\r\n  height: calc(480px * 0.7);\r\n  width: calc(270px * 0.7);\r\n  -webkit-transition: opacity 0.3s;\r\n  transition: opacity 0.3s;\r\n}\r\n\r\n#mc {\r\n  right: 0;\r\n}\r\n\r\n#mom, #teacher {\r\n  left: 0;\r\n}\r\n\r\n#naomi {\r\n  left: 20%;\r\n}\r\n\r\n#teacher {\r\n  width: calc(330px * 0.7);\r\n}\r\n\r\n.center {\r\n  -webkit-transform: translateX(-50%) translateY(-50%);\r\n          transform: translateX(-50%) translateY(-50%);\r\n}\r\n\r\n.bedroom {\r\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/game/bedroom.jpg")) + ");\r\n}\r\n\r\n.classroom {\r\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/game/classroom.jpg")) + ");\r\n}\r\n\r\n.playground {\r\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/game/playground.jpg")) + ");\r\n}\r\n\r\n.game-text {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background-color: #fff;\r\n  padding: 5px 60px 5px 5px;\r\n  margin: 0;\r\n  -webkit-box-shadow: 0 2px 5px #666;\r\n          box-shadow: 0 2px 5px #666;\r\n}\r\n\r\n.next {\r\n  width: 55px;\r\n  height: 55px;\r\n  border-radius: 50%;\r\n  background: #db4437;\r\n  position: absolute;\r\n  bottom: -10px;\r\n  right: -10px;\r\n  z-index: 2;\r\n  cursor: pointer;\r\n  -webkit-box-shadow: 0 2px 5px #666;\r\n          box-shadow: 0 2px 5px #666;\r\n}\r\n\r\n.arrow{\r\n  color: white;\r\n  position: absolute;\r\n  top: 0;\r\n  display: block;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  text-align: center;\r\n  padding: 0;\r\n  margin: 0;\r\n  line-height: 55px;\r\n  font-size: 38px;\r\n  font-weight: 100;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/game/game-display/game-display.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"canvas\" class=\"bedroom\" #canvas>\n  <div class=\"next\" (click)=\"next()\"><p class=\"arrow\">></p></div>\n  <img src=\"../../assets/game/mc.png\" id=\"mc\" [ngStyle]=\"{'opacity': talking == 'mc' ? '1' : '0.5'}\" />\n  <img src=\"../../assets/game/mother.png\" id=\"mom\" *ngIf=\"scene == 1\" [ngStyle]=\"{'opacity': talking == 'mom' ? '1' : '0.5'}\"/>\n  <img src=\"../../assets/game/bullies.png\" id=\"mom\" *ngIf=\"scene == 2\" [ngStyle]=\"{'opacity': counter == 3 ? '1' : '0.5'}\"/>\n  <img src=\"../../assets/game/jason.png\" id=\"mom\" *ngIf=\"scene == 3  || scene == 3.5\" [ngStyle]=\"{'opacity': talking == 'jason' ? '1' : '0.5'}\"/>\n  <img src=\"../../assets/game/teacher.png\" id=\"teacher\" *ngIf=\"scene == 4 && counter < 6\" [ngStyle]=\"{'opacity': talking == 'teacher' ? '1' : '0.5'}\"/>\n  <img src=\"../../assets/game/naomi.png\" id=\"naomi\" *ngIf=\"scene == 4 && counter > 2\" [ngStyle]=\"{'opacity': talking == 'naomi' ? '1' : '0.5'}\"/>\n  <app-question-modal (sendChoice)=\"emitChoice($event)\"></app-question-modal>\n  <p class=\"game-text\">{{text}}</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/game/game-display/game-display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameDisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dialogs_day_one__ = __webpack_require__("../../../../../src/app/game/dialogs/day-one.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_question_service__ = __webpack_require__("../../../../../src/app/services/question.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GameDisplayComponent = /** @class */ (function () {
    function GameDisplayComponent(store, questionService) {
        this.store = store;
        this.questionService = questionService;
        this.code = null;
        this.counter = 0;
        this.scene = 1;
        this.showModal = false;
    }
    GameDisplayComponent.prototype.ngOnInit = function () {
        this.text = __WEBPACK_IMPORTED_MODULE_1__dialogs_day_one__["a" /* scene1 */][0].dialog;
        this.talking = __WEBPACK_IMPORTED_MODULE_1__dialogs_day_one__["a" /* scene1 */][0].by;
        this.canvasElement = document.getElementById('canvas');
        this.modalElement = document.getElementsByTagName('app-question-modal')[0];
    };
    GameDisplayComponent.prototype.next = function () {
        if (this.scene == 1 && this.counter < __WEBPACK_IMPORTED_MODULE_1__dialogs_day_one__["a" /* scene1 */].length - 1) {
            this.counter = this.counter + 1;
            this.text = __WEBPACK_IMPORTED_MODULE_1__dialogs_day_one__["a" /* scene1 */][this.counter].dialog;
            this.talking = __WEBPACK_IMPORTED_MODULE_1__dialogs_day_one__["a" /* scene1 */][this.counter].by;
            return;
        }
        else if (this.scene == 1) {
            this.resetCounter();
            this.newScene();
        }
        if (this.counter == 0 && this.scene == 2) {
            this.canvasElement.classList.add('classroom');
        }
        if (this.scene == 2 && this.counter < __WEBPACK_IMPORTED_MODULE_1__dialogs_day_one__["b" /* scene2 */].length) {
            this.text = __WEBPACK_IMPORTED_MODULE_1__dialogs_day_one__["b" /* scene2 */][this.counter].dialog;
            this.counter = this.counter + 1;
            this.talking = __WEBPACK_IMPORTED_MODULE_1__dialogs_day_one__["b" /* scene2 */][this.counter].by;
            return;
        }
        else if (this.scene == 2 && this.counter == __WEBPACK_IMPORTED_MODULE_1__dialogs_day_one__["b" /* scene2 */].length) {
            this.resetCounter();
            this.newScene();
        }
        if (this.counter == 0 && this.scene == 3) {
            this.canvasElement.classList.add('playground');
        }
        if (this.scene == 3 && this.counter == 2) {
            this.store.dispatch({ type: 'SET_MODAL', payload: true });
            return;
        }
        if (this.scene == 3 && this.counter < __WEBPACK_IMPORTED_MODULE_1__dialogs_day_one__["c" /* scene3 */].length) {
            this.text = __WEBPACK_IMPORTED_MODULE_1__dialogs_day_one__["c" /* scene3 */][this.counter].dialog;
            this.talking = __WEBPACK_IMPORTED_MODULE_1__dialogs_day_one__["c" /* scene3 */][this.counter].by;
            this.counter = this.counter + 1;
            return;
        }
        else if (this.scene == 3 && this.counter == __WEBPACK_IMPORTED_MODULE_1__dialogs_day_one__["c" /* scene3 */].length) {
            this.store.dispatch({ type: 'SET_MODAL', payload: true });
            this.store.dispatch({ type: 'SET_QUESTION_NUMBER', payload: 1 });
            this.scene = 3.5;
            return;
        }
        if (this.scene == 3.5 && this.counter < __WEBPACK_IMPORTED_MODULE_1__dialogs_day_one__["e" /* scene3b */].length) {
            this.text = __WEBPACK_IMPORTED_MODULE_1__dialogs_day_one__["e" /* scene3b */][this.counter].dialog;
            this.talking = __WEBPACK_IMPORTED_MODULE_1__dialogs_day_one__["e" /* scene3b */][this.counter].by;
            this.counter = this.counter + 1;
            return;
        }
        else if (this.scene == 3.5 && this.counter == __WEBPACK_IMPORTED_MODULE_1__dialogs_day_one__["e" /* scene3b */].length) {
            this.resetCounter();
            this.scene = 4;
            this.canvasElement.classList.remove('playground');
        }
        if (this.scene == 4 && this.counter < __WEBPACK_IMPORTED_MODULE_1__dialogs_day_one__["f" /* scene4 */].length) {
            this.text = __WEBPACK_IMPORTED_MODULE_1__dialogs_day_one__["f" /* scene4 */][this.counter].dialog;
            this.talking = __WEBPACK_IMPORTED_MODULE_1__dialogs_day_one__["f" /* scene4 */][this.counter].by;
            this.counter = this.counter + 1;
            return;
        }
        else if (this.scene == 4 && this.counter == __WEBPACK_IMPORTED_MODULE_1__dialogs_day_one__["f" /* scene4 */].length) {
            this.store.dispatch({ type: 'SET_MODAL', payload: true });
            this.store.dispatch({ type: 'SET_QUESTION_NUMBER', payload: 2 });
            return;
        }
    };
    GameDisplayComponent.prototype.resetCounter = function () {
        this.counter = 0;
    };
    GameDisplayComponent.prototype.newScene = function () {
        this.scene = this.scene + 1;
    };
    GameDisplayComponent.prototype.emitChoice = function (v) {
        var _this = this;
        v.question = v.question + 1;
        this.questionService.postQuestion(v, this.code).subscribe(function (x) {
            _this.setNextDialog(v.question - 1, v.index);
            _this.store.dispatch({ type: 'SET_MODAL', payload: false });
        });
    };
    GameDisplayComponent.prototype.setNextDialog = function (q, i) {
        switch (this.scene) {
            case 3: {
                if (i == 0 && q == 0) {
                    this.resetCounter();
                    this.text = __WEBPACK_IMPORTED_MODULE_1__dialogs_day_one__["d" /* scene3a */][this.counter].dialog;
                    this.scene = 4;
                }
                else {
                    this.counter = this.counter + 1;
                    this.next();
                }
                break;
            }
            case 3.5: {
                if (i == 0 && q == 1) {
                    this.counter = 2;
                }
                else {
                    this.resetCounter();
                }
                this.next();
                break;
            }
            default: {
                //statements;
                break;
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], GameDisplayComponent.prototype, "code", void 0);
    GameDisplayComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-game-display',
            template: __webpack_require__("../../../../../src/app/game/game-display/game-display.component.html"),
            styles: [__webpack_require__("../../../../../src/app/game/game-display/game-display.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */], __WEBPACK_IMPORTED_MODULE_3__services_question_service__["a" /* QuestionService */]])
    ], GameDisplayComponent);
    return GameDisplayComponent;
}());



/***/ }),

/***/ "../../../../../src/app/game/game.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/game/game.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header [disableImg]=\"true\"></app-header>\r\n<div *ngIf=\"!isReady; else game\">\r\n  <app-code-modal (sendCode)=\"setCode($event)\"></app-code-modal>\r\n</div>\r\n<ng-template #game>\r\n  <app-game-display [code]=\"code\"></app-game-display>\r\n</ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/app/game/game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GameComponent = /** @class */ (function () {
    function GameComponent() {
        this.isReady = false;
    }
    GameComponent.prototype.ngOnInit = function () {
    };
    GameComponent.prototype.setCode = function (v) {
        this.code = v;
        this.isReady = true;
    };
    GameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-game',
            template: __webpack_require__("../../../../../src/app/game/game.component.html"),
            styles: [__webpack_require__("../../../../../src/app/game/game.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "../../../../../src/app/game/question-modal/question-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal {\r\n  min-height: 75px;\r\n  width: 150px;\r\n  background-color: #fff;\r\n  z-index: 2;\r\n  opacity: 0;\r\n  padding: 10px;\r\n  -webkit-box-shadow: 0 0 35px 10px rgba(0,0,0,0.75);\r\n  box-shadow: 0 0 35px 10px rgba(0,0,0,0.75);\r\n\r\n  position: absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  -webkit-transform: scale(0);\r\n          transform: scale(0);\r\n  -webkit-transition: all 0.5s;\r\n  transition: all 0.5s;\r\n  -webkit-transform-origin: center center;\r\n          transform-origin: center center;\r\n}\r\n\r\n.center {\r\n  -webkit-transform: translateX(-50%) translateY(-50%);\r\n          transform: translateX(-50%) translateY(-50%);\r\n}\r\n\r\n.question {\r\n  padding: 5px 0;\r\n  cursor: pointer;\r\n}\r\n\r\n.question:hover {\r\n  color: #4d90fe;\r\n}\r\n\r\n.question:not(:last-child) {\r\n  border-bottom: 1px solid #000;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/game/question-modal/question-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal center\" [@openModal]=\"visible\">\n  <div *ngFor=\"let x of question; index as i\" (click)=\"emitValue(x, i)\" class=\"question\">\n    {{x}}\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/game/question-modal/question-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dialogs_question__ = __webpack_require__("../../../../../src/app/game/dialogs/question.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionModalComponent = /** @class */ (function () {
    function QuestionModalComponent(store) {
        var _this = this;
        this.store = store;
        this.sendChoice = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        store.select('questionModal').subscribe(function (v) { return _this.visible = v; });
        store.select('questionNumber').subscribe(function (v) { _this.setQuestion(v); });
    }
    QuestionModalComponent.prototype.ngOnInit = function () {
        // this.question = questions[this.questionNumber];
    };
    QuestionModalComponent.prototype.emitValue = function (v, index) {
        this.sendChoice.emit({ answer: v, question: this.questionNumber, index: index });
    };
    QuestionModalComponent.prototype.setQuestion = function (number) {
        this.questionNumber = number;
        this.question = __WEBPACK_IMPORTED_MODULE_2__dialogs_question__["a" /* questions */][number];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], QuestionModalComponent.prototype, "sendChoice", void 0);
    QuestionModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-question-modal',
            template: __webpack_require__("../../../../../src/app/game/question-modal/question-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/game/question-modal/question-modal.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('openModal', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('0', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(-50%) translateY(-50%) scale(0)', opacity: '0' })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('1', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(-50%) translateY(-50%) scale(1)', opacity: '1' })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('0 => 1', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('300ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('1 => 0', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('300ms ease-out')),
                ]),
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]])
    ], QuestionModalComponent);
    return QuestionModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        var token = localStorage.getItem('token');
        if (localStorage.getItem('token') != undefined) {
            return true;
        }
        else {
            this.router.navigate(['']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\r\n\tcolor: #000;\r\n}\r\n\r\nh1 {\r\n\tcolor: #fff;\r\n\tfont-size: 70px;\r\n\tmargin: 100px 0 20px 120px;\r\n}\r\n\r\nh1:hover {\r\n  color: #0064B4;\r\n}\r\n\r\n.background {\r\n  background: url(" + escape(__webpack_require__("../../../../../src/assets/images/banner.jpg")) + ") center no-repeat;\r\n  background-size: cover;\r\n\tposition: absolute;\r\n  top: 2.85em;\r\n\tleft: 0;\r\n\tz-index: -1;\r\n\twidth: 100%;\r\n  height: 23.25rem;\r\n  -webkit-transition: all 0.5s;\r\n  transition: all 0.5s;\r\n}\r\n\r\n.banner {\r\n  height: 23.25rem;\r\n  overflow-y: hidden;\r\n}\r\n\r\n.banner a {\r\n  text-decoration: none;\r\n}\r\n\r\n.height-zero {\r\n  -webkit-animation: hide-img 0.5s linear forwards;\r\n          animation: hide-img 0.5s linear forwards;\r\n  -webkit-animation-delay: 0.1s;\r\n          animation-delay: 0.1s;\r\n}\r\n\r\n.hidden {\r\n  display: none !important;\r\n}\r\n\r\n.whitespace {\r\n  height: 50px;\r\n  margin-top: 80px;\r\n  background: white;\r\n}\r\n\r\n@-webkit-keyframes hide-img {\r\n  from {\r\n    height: 23.25rem;\r\n  }\r\n  to {\r\n    height: 0;\r\n  }\r\n}\r\n\r\n@keyframes hide-img {\r\n  from {\r\n    height: 23.25rem;\r\n  }\r\n  to {\r\n    height: 0;\r\n  }\r\n}\r\n\r\n@-moz-document url-prefix() {\r\n  .background {\r\n    margin-top: -82px !important;\r\n    top: 7.65em !important;\r\n  }\r\n\r\n  .topnav {\r\n  \ttop: 13px !important;\r\n  }\r\n}\r\n\r\n.topnav {\r\n\tposition: absolute;\r\n\tright: 0;\r\n\ttop: 15px;\r\n}\r\n\r\n.topnav a {\r\n\ttext-decoration: none;\r\n\tcolor: #fff;\r\n\tpadding: 15px 20px;\r\n  background: #0064B4;\r\n  border-right: 4px solid rgba(0,0,0,0.2);\r\n  -webkit-transition: background .25s ease-out;\r\n  transition: background .25s ease-out;\r\n  font-weight: bold;\r\n}\r\n\r\n.topnav a:last-child {\r\n  border-right-width: 2px;\r\n}\r\n\r\n.topnav a:hover {\r\n  background: #003f72;\r\n}\r\n\r\n.botnav {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n\tfont-size: 1rem;\r\n\ttext-align: center;\r\n\tmargin-top: 80px;\r\n\tmargin-bottom: 10px;\r\n  font-weight: 700;\r\n  padding-bottom: 25px;\r\n}\r\n\r\n.botnav a {\r\n  display: table-cell;\r\n  margin: 0;\r\n  padding: 15px 15px 18px 15px;\r\n}\r\n\r\n.botnav a {\r\n\ttext-decoration: none;\r\n}\r\n\r\n.botnav a:hover, .botnav a.active{\r\n  color: #0064B4;\r\n  border-bottom: 3px solid #0064B4;\r\n  padding: 15px;\r\n}\r\n\r\n.topnav input[type='search'] {\r\n  height: 48px;\r\n  width: 0;\r\n  padding: 0;\r\n  margin-top: -17px;\r\n  font-size: inherit;\r\n  border: 0;\r\n  background: #E5E5E6;\r\n  -webkit-transition: width 0.5s ease-in-out, padding 0.5s ease-in-out;\r\n  transition: width 0.5s ease-in-out, padding 0.5s ease-in-out;\r\n}\r\n\r\n#hamburger {\r\n  display: none;\r\n  position: fixed;\r\n  top: 20px;\r\n  left: 20px;\r\n\r\n  width: 25px;\r\n  height: 20px;\r\n  -webkit-transform: rotate(0deg);\r\n  transform: rotate(0deg);\r\n  -webkit-transition: .25s ease-in-out;\r\n  transition: .25s ease-in-out;\r\n  cursor: pointer;\r\n\r\n  z-index: 4;\r\n}\r\n\r\n#hamburger span {\r\n  display: block;\r\n  position: absolute;\r\n  height: 3px;\r\n  width: 100%;\r\n  border-radius: 9px;\r\n  opacity: 1;\r\n  -webkit-transform: rotate(0deg);\r\n  transform: rotate(0deg);\r\n  -webkit-transition: .25s ease-in-out;\r\n  transition: .25s ease-in-out;\r\n}\r\n\r\n#hamburger span:nth-child(1) {\r\ntop: 0;\r\n-webkit-transform-origin: left center;\r\ntransform-origin: left center;\r\n}\r\n\r\n#hamburger span:nth-child(2) {\r\ntop: 7px;\r\n-webkit-transform-origin: left center;\r\ntransform-origin: left center;\r\n}\r\n\r\n#hamburger span:nth-child(3) {\r\ntop: 14px;\r\n-webkit-transform-origin: left center;\r\ntransform-origin: left center;\r\n}\r\n\r\n#hamburger.open span:nth-child(1) {\r\n-webkit-transform: rotate(45deg);\r\ntransform: rotate(45deg);\r\ntop: -3px;\r\n}\r\n\r\n#hamburger.open span:nth-child(2) {\r\nwidth: 0;\r\nopacity: 0;\r\n}\r\n\r\n#hamburger.open span:nth-child(3) {\r\n-webkit-transform: rotate(-45deg);\r\ntransform: rotate(-45deg);\r\ntop: 14px;\r\n}\r\n\r\n.burger-span {\r\n  background: rgb(49, 49, 49);\r\n}\r\n\r\n@-moz-document url-prefix() {\r\n  .topnav input[type='search']{\r\n    height: 50px !important;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 940px) and (max-width: 1200px) {\r\n    h1 {\r\n      width: 50%;\r\n      margin-top: 10px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 940px) {\r\n    h1 {\r\n      font-size: 40px;\r\n      height: auto;\r\n      margin-top: 160px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 736px) {\r\n  #hamburger {\r\n    display: block;\r\n  }\r\n\r\n  .botnav {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background: #fff;\r\n    z-index: 2;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    margin: 0;\r\n    -webkit-transform: scale(0);\r\n            transform: scale(0);\r\n    opacity: 0;\r\n    -webkit-transition: all 0.3s;\r\n    transition: all 0.3s;\r\n  }\r\n\r\n  .show {\r\n    opacity: 1;\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n  }\r\n\r\n}\r\n\r\n@media only screen and (max-width: 640px) {\r\n    .topnav a {\r\n      font-size: 0;\r\n      padding-top: 31px;\r\n      padding-bottom: 19px;\r\n    }\r\n\r\n    .topnav i {\r\n      font-size: 17px;\r\n    }\r\n\r\n    h1 {\r\n      margin-top: 45px;\r\n      width: 50%;\r\n    }\r\n\r\n    .background {\r\n      height: 18rem;\r\n    }\r\n\r\n    @-webkit-keyframes hide-img {\r\n      from {\r\n        height: 18rem;\r\n      }\r\n      to {\r\n        height: 0;\r\n      }\r\n    }\r\n\r\n    @keyframes hide-img {\r\n      from {\r\n        height: 18rem;\r\n      }\r\n      to {\r\n        height: 0;\r\n      }\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 530px) {\r\n    h1 {\r\n      margin-left: 80px;\r\n      margin-top: -10px;\r\n      width: 40%;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"hamburger\"[ngClass]=\"visible ? 'open' : ''\" (click)=\"toggleNav()\">\r\n  <span class=\"burger-span\"></span>\r\n  <span class=\"burger-span\"></span>\r\n  <span class=\"burger-span\"></span>\r\n</div>\r\n\r\n<div class=\"topnav\">\r\n\t<div *ngIf=\"!authService.loggedIn(); else isAuth\">\r\n    <input type=\"search\" title=\"search\" placeholder=\"Zoeken... \" #searchBar/><!--\r\n --><a (click)=\"toggleSearchBar()\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></a><!--\r\n --><a [routerLink]=\"['/register']\"><i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i> Registreren</a><!--\r\n --><a [routerLink]=\"['/login']\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i> Aanmelden</a>\r\n\t</div>\r\n\t<ng-template #isAuth>\r\n    <a [routerLink]=\"['/user']\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i> {{name}}</a><!--\r\n --><a (click)=\"logout()\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Logout</a>\r\n\t</ng-template>\r\n</div>\r\n\r\n\r\n<div class=\"banner\" [ngClass]=\"disableImg ? 'height-zero' : ''\">\r\n\t<img class=\"logo\" src=\"assets/images/Logo_Antwerpen.jpg\">\r\n\t<div class=\"background\" [ngClass]=\"disableImg ? 'height-zero' : ''\" ></div>\r\n  <a [routerLink]=\"['/portal']\"><h1>Stop seksuele intimidatie</h1></a>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"botnav\" [ngClass]=\"visible ? 'show' : ''\">\r\n  <a [routerLink]=\"['/wat-is-seksuele-intimidatie']\" routerLinkActive=\"active\" (click)=\"toggleNav()\">Wat is seksuele intimidatie?</a>\r\n  <a [routerLink]=\"['/wat-kan-je-zelf-doen']\" routerLinkActive=\"active\" (click)=\"toggleNav()\">Wat kan je zelf doen?</a>\r\n  <a [routerLink]=\"['/feiten']\" routerLinkActive=\"active\" (click)=\"toggleNav()\">Feiten</a>\r\n  <a [routerLink]=\"['/contact']\" routerLinkActive=\"active\" (click)=\"toggleNav()\">Contact</a>\r\n  <a [routerLink]=\"['/game']\" routerLinkActive=\"active\" (click)=\"toggleNav()\">Game</a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService, store) {
        var _this = this;
        this.authService = authService;
        this.store = store;
        this.disableImg = false;
        store.select('responsiveNagivation').subscribe(function (v) { return _this.visible = v; });
        this.authService.authObj.subscribe(function (v) {
            if (v && v.firstname) {
                _this.name = v.firstname;
            }
        });
    }
    HeaderComponent.prototype.toggleSearchBar = function () {
        if (this.searchBar.nativeElement.style.width === '') {
            this.searchBar.nativeElement.style.width = '230px';
            this.searchBar.nativeElement.style.paddingLeft = '10px';
            this.searchBar.nativeElement.style.paddingRight = '10px';
            this.searchBar.nativeElement.focus();
        }
        else {
            this.searchBar.nativeElement.style.width = '';
            this.searchBar.nativeElement.style.padding = '';
        }
    };
    HeaderComponent.prototype.logout = function () {
        this.authService.logout();
    };
    HeaderComponent.prototype.toggleNav = function () {
        this.store.dispatch({ type: 'SET_NAVIGATION' });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('searchBar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], HeaderComponent.prototype, "searchBar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "disableImg", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('openNavigation', [Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('0', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(-50%) translateY(-50%) scale(0)', opacity: '0' })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('1', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({ transform: 'translateX(-50%) translateY(-50%) scale(1)', opacity: '1' })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('0 => 1', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('300ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('1 => 0', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('300ms ease-out')),
                ]),
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home-body/aangifte/aangifte.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home-body/aangifte/aangifte.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Hoe kan ik aangifte doen?</h1>\r\n<p class=\"lead\">\r\n  Er wordt maar zelden klacht ingediend wegens seksuele intimidatie. Slachtoffers verdringen vaak wat er gebeurd is en dienen niet snel klacht in. Nochtans is aangifte of melding doen een belangrijke en vaak noodzakelijke stap. Zo kan de politie in geval van een misdrijf een onderzoek starten naar de daders en overlast op straat doelgericht aanpakken.\r\n</p>\r\n\r\n<p>Aangifte doen kan op verschillende manieren.</p>\r\n\r\n<ul>\r\n  <li>Bij strafbare feiten en voor dringende politiehulp bel onmiddellijk het noodnummer 101.\r\n    Voor niet-dringende hulp:</li>\r\n  <li>\r\n    Voor niet-dringende hulp:\r\n    <ul>\r\n      <li>Bel de Blauwe Lijn 0800 123 12.</li>\r\n      <li>Maak een <a href=\"https://www.politieantwerpen.be/afspraak\">online afspraak met Politie Antwerpen</a>.</li>\r\n    </ul>\r\n  </li>\r\n  <li>Bij het <a href=\"http://igvm-iefh.belgium.be/nl/info-en-hulp#form\">Instituut voor de Gelijkheid van Vrouwen en Mannen</a>.</li>\r\n</ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home-body/aangifte/aangifte.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AangifteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AangifteComponent = /** @class */ (function () {
    function AangifteComponent() {
    }
    AangifteComponent.prototype.ngOnInit = function () {
    };
    AangifteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home-body-aangifte',
            template: __webpack_require__("../../../../../src/app/home/home-body/aangifte/aangifte.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home-body/aangifte/aangifte.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AangifteComponent);
    return AangifteComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home-body/home-body.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home-body/home-body.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"subnav\">\r\n\t<a [routerLink]=\"['/wat-is-seksuele-intimidatie/wat-is-seksuele-intimidatie']\" routerLinkActive=\"active\">Wat is seksuele intimidatie?<i class=\"fa fa-chevron-right\"></i></a>\r\n\t<a [routerLink]=\"['/wat-is-seksuele-intimidatie/welk-gedrag-is-strafbaar']\" routerLinkActive=\"active\">Welk gedrag is strafbaar?<i class=\"fa fa-chevron-right\"></i></a>\r\n\t<a [routerLink]=\"['/wat-is-seksuele-intimidatie/hoe-kan-ik-aangifte-doen']\" routerLinkActive=\"active\">Hoe kan ik aangifte doen?<i class=\"fa fa-chevron-right\"></i></a>\r\n</div>\r\n\r\n<div class=\"right\">\r\n  <router-outlet name='content'></router-outlet>\r\n  <!--<app-home-body-intimidatie></app-home-body-intimidatie>\r\n  <app-home-body-strafbaar></app-home-body-strafbaar>\r\n  <app-home-body-aangifte></app-home-body-aangifte>-->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home-body/home-body.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeBodyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeBodyComponent = /** @class */ (function () {
    function HomeBodyComponent() {
    }
    HomeBodyComponent.prototype.ngOnInit = function () {
    };
    HomeBodyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home-body',
            template: __webpack_require__("../../../../../src/app/home/home-body/home-body.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home-body/home-body.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeBodyComponent);
    return HomeBodyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home-body/seksuele-intimidatie/seksuele-intimidatie.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home-body/seksuele-intimidatie/seksuele-intimidatie.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Wat is seksuele intimidatie?</h1>\r\n<p>\r\n  Niet iedereen ervaart seksuele intimidatie op dezelfde manier. Toch zijn er enkele kernwoorden die telkens terugkomen. We stelden Antwerpenaren op straat en experten dezelfde vraag: \"Wat is voor jou seksuele intimidatie?\"\r\n</p>\r\n\r\n<div class=\"videoWrapper\">\r\n<iframe\r\n  src=\"https://www.youtube.com/embed/HWJLiDkvgQ8?hd=1&rel=0&autohide=1&showinfo=0\" frameborder=\"0\" allowfullscreen>\r\n</iframe>\r\n</div>\r\n\r\n<p>\r\n  Organisaties zoals Sensoa en Jong & Van Zin werken rond het thema. Hun definitie luidt: “Seksuele intimidatie zijn seksueel getinte gebaren, woorden, aanrakingen die je ongemakkelijk doen voelen. Het kan eender waar gebeuren, zowel in de publieke ruimte als op je werk of school, en door en bij zowel mannen als vrouwen.”\r\n</p>\r\n\r\n<h2>Voorbeelden van seksuele intimidatie</h2>\r\n<ul>\r\n  <li>seksueel getinte of seksistische opmerkingen (ook via sms, sociale media …)</li>\r\n  <li>obscene gebaren en geluiden</li>\r\n  <li>handtastelijkheden en opdringerig gedrag</li>\r\n  <li>gluren of nafluiten</li>\r\n  <li>oneerbare voorstellen en intieme vragen</li>\r\n  <li>ongevraagd in de billen knijpen of naar borsten grijpen</li>\r\n  <li>uitschelden voor hoer, slet ...</li>\r\n  <li>naast of achter een vrouw blijven lopen of de pas aanpassen aan die van de vrouw</li>\r\n  <li>in groep rond een vrouw gaan staan</li>\r\n  <li>ongevraagd filmen met een smartphone</li>\r\n  <li>...</li>\r\n</ul>\r\n\r\n<h2>\"Het is nooit jouw schuld\"</h2>\r\n<p>\r\n  Ongewenste intimiteiten of seksuele intimidatie lijken misschien onschuldig, maar kunnen zeer vervelend zijn, zeker als het herhaaldelijk gebeurt. Mensen gaan er zich ongemakkelijk, onzeker en onveilig door voelen. “Onthoud: het is nooit jouw schuld! En blijf er niet alleen mee zitten: praat erover, met de persoon die je lastigvalt of met mensen die je vertrouwt.”\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home-body/seksuele-intimidatie/seksuele-intimidatie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeksueleIntimidatieComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SeksueleIntimidatieComponent = /** @class */ (function () {
    function SeksueleIntimidatieComponent() {
    }
    SeksueleIntimidatieComponent.prototype.ngOnInit = function () {
    };
    SeksueleIntimidatieComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home-body-intimidatie',
            template: __webpack_require__("../../../../../src/app/home/home-body/seksuele-intimidatie/seksuele-intimidatie.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home-body/seksuele-intimidatie/seksuele-intimidatie.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SeksueleIntimidatieComponent);
    return SeksueleIntimidatieComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home-body/strafbaar/strafbaar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home-body/strafbaar/strafbaar.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Welk gedrag is strafbaar?</h1>\r\n<p class=\"lead\">\r\n  Ook al voelt niet iedereen zich even snel seksueel geïntimideerd, toch is ongewenst gedrag in bepaalde gevallen strafbaar.\r\n</p>\r\n\r\n<p>\r\n  U kan persoonlijk aangifte doen, maar de politie kan ook zelf een vaststelling doen en een proces verbaal opmaken zonder dat er een klacht is ingediend. Het gaat hier om ongewenst, storend, intimiderend of choquerend gedrag dat seksueel getint of geladen kan zijn en waarbij het slachtoffer zich in zijn rust gestoord voelt.\r\n</p>\r\n<p>\r\n  Voor dit soort strafbaar gedrag spreekt de wet over:\r\n</p>\r\n\r\n<ul>\r\n  <li>\r\n    <strong>Belaging</strong> (Strafwetboek Art.442 bis): Alle gedrag dat de rust van de getroffen persoon ernstig verstoort zoals bijvoorbeeld achternalopen, omringen, intimiderende of beledigende sms-en of berichten op facebook sturen enzovoort.\r\n  </li>\r\n  <li>\r\n    <strong>Voyeurisme</strong> (Strafwetboek Art.371): Personen observeren of doen observeren, maar ook beelden of geluidsopnamen van iemand maken, zonder dat hij/zij dat weet of daarvoor toestemming heeft gegeven.\r\n  </li>\r\n</ul>\r\n\r\n<p>\r\n  Als dit gedrag wordt gesteld ten opzichte van minderjarigen, geldt dat als verzwarende omstandigheid en zijn ook de straffen zwaarder.\r\n</p>\r\n<p>\r\n  Bij ernstigere feiten, bijvoorbeeld bij geweld of bedreigingen, waarbij het slachtoffer zich voelt aangetast in zijn seksuele integriteit, is er sprake van\r\n  <a href=\"http://www.allesoverseks.be/themas/seks-grenzen/over-je-grens/wat-is-aanranding-van-de-eerbaarheid\">aanranding van de eerbaarheid</a>.\r\n</p>\r\n\r\n<h2>Meer info over de wetgeving omtrent seksisme en seksuele intimidatie?</h2>\r\n<p>\r\n  <a href=\"http://www.allesoverseks.be/themas/seks-grenzen/seks-de-wet\">Sensoa: Seks en de wet</a>\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home-body/strafbaar/strafbaar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StrafbaarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StrafbaarComponent = /** @class */ (function () {
    function StrafbaarComponent() {
    }
    StrafbaarComponent.prototype.ngOnInit = function () {
    };
    StrafbaarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home-body-strafbaar',
            template: __webpack_require__("../../../../../src/app/home/home-body/strafbaar/strafbaar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home-body/strafbaar/strafbaar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StrafbaarComponent);
    return StrafbaarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-home-body {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n\t-webkit-box-align: baseline;\r\n\t    -ms-flex-align: baseline;\r\n\t        align-items: baseline;\r\n}\r\n\r\n@media only screen and (max-width: 940px) {\r\n\tapp-home-body {\r\n\t\t-webkit-box-orient: vertical;\r\n\t\t-webkit-box-direction: normal;\r\n\t\t    -ms-flex-direction: column;\r\n\t\t        flex-direction: column;\r\n\t\t-webkit-box-align: center;\r\n\t\t    -ms-flex-align: center;\r\n\t\t        align-items: center;\r\n\t}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<app-home-body></app-home-body>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button {\r\n    font-size: 1rem;\r\n    line-height: 1.4em;\r\n    margin-top: 0;\r\n    padding: .5rem 1.5rem;\r\n    transition: background .25s ease-out;\r\n    -moz-transition: background .25s ease-out;\r\n    -webkit-transition: background .25s ease-out;\r\n    -o-transition: background .25s ease-out;\r\n    -ms-transistion: background .25s ease-out;\r\n    background: #0064B4;\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    -ms-appearance: none;\r\n    -o-appearance: none;\r\n    appearance: none;\r\n    border: 0;\r\n    color: #fff;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    font-weight: 700;\r\n    min-height: 3rem;\r\n    width: 100px;\r\n    margin-bottom: .75rem;\r\n    outline: none;\r\n    overflow: hidden;\r\n    font-family: \"Sun Regular\",\"Helvetica Neue\",Helvetica,Arial,Georgia,Sans-serif;\r\n    position: relative;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.button span {\r\n  margin-right: 5px;\r\n}\r\n\r\n.logo {\r\n  margin: 0;\r\n}\r\n\r\n.login-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-box-align: baseline;\r\n      -ms-flex-align: baseline;\r\n          align-items: baseline;\r\n  margin-top: 48px;\r\n  border-top: 1px solid rgba(127,127,127,0.3);\r\n}\r\n\r\n.login-logo {\r\n  width: 14%;\r\n}\r\n\r\n.login-info {\r\n  width: 21%;\r\n  margin-right: 2em;\r\n}\r\n\r\n.login-form {\r\n  width: 65%;\r\n  min-height: calc(100vh - 9.10rem - 50px);\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  background: #F3F3F5;\r\n  padding: 4.55rem 1.5rem;\r\n}\r\n\r\nform {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\nform a {\r\n  font-size: 14px;\r\n  margin-bottom: 2em;\r\n}\r\n\r\nh2 {\r\n  margin-top: 0;\r\n}\r\n\r\ninput {\r\n  width: 75%;\r\n  height: 30px;\r\n  padding: .5rem 1rem;\r\n  margin-bottom: .5em;\r\n}\r\n\r\n@-moz-document url-prefix() {\r\n  .background {\r\n    margin-top: -82px !important;\r\n  }\r\n\r\n  .topnav {\r\n  \ttop: 13px !important;\r\n  }\r\n}\r\n\r\n.topnav {\r\n\tposition: absolute;\r\n\tright: 0;\r\n\ttop: 15px;\r\n}\r\n\r\n.topnav a {\r\n\ttext-decoration: none;\r\n\tcolor: #fff;\r\n\tpadding: 15px 20px;\r\n  background: #0064B4;\r\n  border-right: 4px solid rgba(0,0,0,0.2);\r\n  -webkit-transition: background .25s ease-out;\r\n  transition: background .25s ease-out;\r\n  font-weight: bold;\r\n}\r\n\r\n.topnav a:last-child {\r\n  border-right-width: 2px;\r\n}\r\n\r\n.topnav a:hover {\r\n  background: #003f72;\r\n}\r\n\r\n.lead a {\r\n  margin-right: 0.75rem;\r\n}\r\n\r\n.topborder {\r\n  width: 78%;\r\n  border-top: 1px solid rgba(127,127,127,0.3);\r\n  padding-top: 10px;\r\n  margin-top: 50px;\r\n}\r\n\r\n@media only screen and (max-width: 940px) {\r\n    .login-info {\r\n      width: 50%;\r\n      margin-left: 60px;\r\n    }\r\n\r\n    .login-container {\r\n      -webkit-box-orient: vertical;\r\n      -webkit-box-direction: normal;\r\n          -ms-flex-direction: column;\r\n              flex-direction: column;\r\n    }\r\n\r\n    .login-form {\r\n      width: 100%;\r\n      padding: 1.5rem 0 0 0;\r\n    }\r\n\r\n    .login-form p {\r\n      margin-left: 60px;\r\n    }\r\n\r\n    form {\r\n      margin-left: 60px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 640px) {\r\n    .login-info {\r\n      width: 70%;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"topnav\">\r\n  <div>\r\n    <a [routerLink]=\"['']\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i> Home</a>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"login-container\">\r\n  <div class=\"login-logo\">\r\n    <img class=\"logo\" src=\"assets/images/Logo_Antwerpen.jpg\">\r\n  </div>\r\n\r\n  <div class=\"login-info\">\r\n    <h2>Aanmelden met uw A-profiel</h2>\r\n    <p>Met een A-profiel krijgt u nieuws op maat, hoeft u niet steeds dezelfde gegevens in te vullen bij een aanvraag en kan u reageren op artikels en meepraten in de babbelbox.</p>\r\n  </div>\r\n\r\n  <div class=\"login-form\">\r\n    <form [formGroup]=\"loginForm\">\r\n      <input type=\"text\" id=\"email\" placeholder=\"Vul hier uw gebruikersnaam in\" formControlName=\"email\">\r\n      <a [routerLink]=\"['/']\">Gebruikersnaam vergeten?</a>\r\n      <input type=\"password\" id=\"password\" placeholder=\"Vul hier uw wachtwoord in\" formControlName=\"password\">\r\n      <a [routerLink]=\"['/']\">Wachtwoord vergeten?</a>\r\n      <div class=\"button\" (click)=\"authenticateUser()\"><span class=\"fa fa-user\"></span> Aanmelden</div>\r\n    </form>\r\n\r\n    <p>Nog geen A-profiel? <a [routerLink]=\"['/register']\">Registreer uw A-profiel</a></p>\r\n\r\n    <p class=\"lead topborder\">Met uw A-profiel kunt u aanmelden op deze websites:</p>\r\n\r\n    <p class=\"lead\">\r\n      <a href=\"http://www.visitantwerpen.be/\">visitantwerpen.be</a>\r\n      <a href=\"https://www.gate15.be/nl/home\">gate15.be</a>\r\n      <a href=\"https://www.slimnaarantwerpen.be/nl\">slimnaarantwerpen.be</a>\r\n    </p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, authService) {
        this.fb = fb;
        this.authService = authService;
        this.createForm();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.createForm = function () {
        this.loginForm = this.fb.group({
            email: [''],
            password: [''],
        });
    };
    LoginComponent.prototype.authenticateUser = function () {
        this.authService.authenticateUser(this.loginForm.value);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/portal/portal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#portal {\r\n  display: -ms-grid;\r\n  display: grid;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\ndiv.contentBox {\r\n  min-height: 20vh;\r\n  display: -ms-grid;\r\n  display: grid;\r\n  -ms-grid-columns: .5fr 3fr 1fr .5fr;\r\n      grid-template-columns: .5fr 3fr 1fr .5fr;\r\n      grid-template-areas: \" . text arrows .\";\r\n  grid-column-gap: 1vw;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  color: white;\r\n  font-size: 5vh;\r\n  font-weight: bold;\r\n}\r\ndiv.contentBox p {\r\n  -ms-grid-row: 1;\r\n  -ms-grid-column: 2;\r\n  grid-area: text;\r\n  text-align: right;\r\n  -webkit-transition: font-size .1s ease-in-out;\r\n  transition: font-size .1s ease-in-out;\r\n  font-size: 5vh;\r\n}\r\ndiv.contentBox:after {\r\n  content: \">>\";\r\n  -ms-grid-row: 1;\r\n  -ms-grid-column: 3;\r\n  grid-area: arrows;\r\n  -ms-grid-column-align: left;\r\n      justify-self: left;\r\n  -webkit-transition: margin-left .1s ease-in-out;\r\n  transition: margin-left .1s ease-in-out;\r\n}\r\ndiv.contentBox:hover:after {\r\n  margin-left: 2vw;\r\n}\r\ndiv.contentBox:hover p {\r\n  font-size:  5.5vh;\r\n}\r\na:nth-child(3n+1) div.contentBox {\r\n  background: #CF0039;\r\n}\r\na:nth-child(3n+2) div.contentBox {\r\n  background: #F18A00;\r\n}\r\na:nth-child(3n) div.contentBox {\r\n  background: #0064B4;\r\n}\r\n#portal a {\r\n  margin: 0;\r\n  text-decoration: none;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portal/portal.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div id=\"portal\">\r\n  <a [routerLink]=\"['/wat-is-seksuele-intimidatie']\">\r\n    <div class=\"contentBox\">\r\n    <p>Wat is seksuele intimidatie</p>\r\n  </div>\r\n  </a>\r\n  <a [routerLink]=\"['/wat-kan-je-zelf-doen']\">\r\n    <div class=\"contentBox\">\r\n    <p>Wat kan je zelf doen</p>\r\n  </div>\r\n  </a>\r\n  <a [routerLink]=\"['/feiten']\">\r\n    <div class=\"contentBox\">\r\n    <p>Feiten over seksuele intimidatie</p>\r\n  </div>\r\n  </a>\r\n  <a [routerLink]=\"['/contact']\">\r\n    <div class=\"contentBox\">\r\n    <p>Contact</p>\r\n  </div>\r\n  </a>\r\n  <a [routerLink]=\"['/game']\">\r\n    <div class=\"contentBox\">\r\n    <p>Speel de game</p>\r\n  </div>\r\n  </a>\r\n</div>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/portal/portal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortalComponent = /** @class */ (function () {
    function PortalComponent() {
    }
    PortalComponent.prototype.ngOnInit = function () {
    };
    PortalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-portal',
            template: __webpack_require__("../../../../../src/app/portal/portal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/portal/portal.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PortalComponent);
    return PortalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button {\r\n    font-size: 1rem;\r\n    line-height: 1.4em;\r\n    margin-top: 0;\r\n  padding: .5rem 1.5rem;\r\n    transition: background .25s ease-out;\r\n    -moz-transition: background .25s ease-out;\r\n    -webkit-transition: background .25s ease-out;\r\n    -o-transition: background .25s ease-out;\r\n    -ms-transistion: background .25s ease-out;\r\n    background: #0064B4;\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    -ms-appearance: none;\r\n    -o-appearance: none;\r\n    appearance: none;\r\n    border: 0;\r\n    color: #fff;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    font-weight: 700;\r\n    min-height: 3rem;\r\n    width: 100px;\r\n    margin-bottom: .75rem;\r\n    outline: none;\r\n    overflow: hidden;\r\n    font-family: \"Sun Regular\",\"Helvetica Neue\",Helvetica,Arial,Georgia,Sans-serif;\r\n    position: relative;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n}\r\n\r\n.button span {\r\n  margin-right: 5px;\r\n}\r\n\r\n.logo {\r\n  margin: 0;\r\n}\r\n\r\n.register-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -webkit-box-pack: start;\r\n      -ms-flex-pack: start;\r\n          justify-content: flex-start;\r\n  -webkit-box-align: baseline;\r\n      -ms-flex-align: baseline;\r\n          align-items: baseline;\r\n  margin-top: 48px;\r\n  border-top: 1px solid rgba(127,127,127,0.3);\r\n}\r\n\r\n.register-logo {\r\n  width: 14%;\r\n}\r\n\r\n.register-info {\r\n  width: 21%;\r\n  margin-right: 2em;\r\n}\r\n\r\n.register-form {\r\n  width: 65%;\r\n  min-height: calc(100vh - 9.10rem - 50px);\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  background: #F3F3F5;\r\n  padding: 4.55rem 1.5rem;\r\n}\r\n\r\nform {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n}\r\n\r\nh2 {\r\n  margin-top: 0;\r\n}\r\n\r\ninput {\r\n  width: 75%;\r\n  height: 30px;\r\n  padding: .5rem 1rem;\r\n  margin-bottom: 2em;\r\n}\r\n\r\n@-moz-document url-prefix() {\r\n  .background {\r\n    margin-top: -82px !important;\r\n  }\r\n\r\n  .topnav {\r\n    top: 13px !important;\r\n  }\r\n}\r\n\r\n.topnav {\r\n  position: absolute;\r\n  right: 0;\r\n  top: 15px;\r\n}\r\n\r\n.topnav a {\r\n  text-decoration: none;\r\n  color: #fff;\r\n  padding: 15px 20px;\r\n  background: #0064B4;\r\n  border-right: 4px solid rgba(0,0,0,0.2);\r\n  -webkit-transition: background .25s ease-out;\r\n  transition: background .25s ease-out;\r\n  font-weight: bold;\r\n}\r\n\r\n.topnav a:last-child {\r\n  border-right-width: 2px;\r\n}\r\n\r\n.topnav a:hover {\r\n  background: #003f72;\r\n}\r\n\r\n.lead a {\r\n  margin-right: 0.75rem;\r\n}\r\n\r\n.topborder {\r\n  width: 78%;\r\n  border-top: 1px solid rgba(127,127,127,0.3);\r\n  padding-top: 10px;\r\n  margin-top: 50px;\r\n}\r\n\r\n@media only screen and (max-width: 940px) {\r\n    .register-info {\r\n      width: 50%;\r\n      margin-left: 60px;\r\n    }\r\n\r\n    .register-container {\r\n      -webkit-box-orient: vertical;\r\n      -webkit-box-direction: normal;\r\n          -ms-flex-direction: column;\r\n              flex-direction: column;\r\n    }\r\n\r\n    .register-form {\r\n      width: 100%;\r\n      padding: 1.5rem 0 0 0;\r\n    }\r\n\r\n    .register-form p {\r\n      margin-left: 60px;\r\n    }\r\n\r\n    form {\r\n      margin-left: 60px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 640px) {\r\n    .register-info {\r\n      width: 70%;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"topnav\">\r\n  <div>\r\n    <a [routerLink]=\"['']\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i> Home</a>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"register-container\">\r\n  <div class=\"register-logo\">\r\n    <img class=\"logo\" src=\"assets/images/Logo_Antwerpen.jpg\">\r\n  </div>\r\n\r\n  <div class=\"register-info\">\r\n    <h2>Registreer uw A-profiel</h2>\r\n    <p>Met een A-profiel krijgt u nieuws op maat, hoeft u niet steeds dezelfde gegevens in te vullen bij een aanvraag en kan u reageren op artikels en meepraten in de babbelbox.</p>\r\n  </div>\r\n\r\n  <div class=\"register-form\">\r\n    <form [formGroup]=\"registerForm\">\r\n      <input type=\"text\" id=\"firsname\" placeholder=\"Voornaam\" formControlName=\"firstname\">\r\n      <input type=\"text\" id=\"lastname\" placeholder=\"Achternaam\" formControlName=\"lastname\">\r\n      <input type=\"text\" id=\"email\" placeholder=\"Vul hier uw email in\" formControlName=\"email\">\r\n      <input type=\"text\" id=\"school\" placeholder=\"School\" formControlName=\"school\">\r\n      <input type=\"password\" id=\"password\" placeholder=\"Vul hier uw wachtwoord in\" formControlName=\"password\">\r\n      <div class=\"button\" (click)=\"register()\"><span class=\"fa fa-user\"></span> Registreren</div>\r\n    </form>\r\n\r\n    <p class=\"lead topborder\">Met uw A-profiel kunt u aanmelden op deze websites:</p>\r\n\r\n    <p class=\"lead\">\r\n      <a href=\"http://www.visitantwerpen.be/\">visitantwerpen.be</a>\r\n      <a href=\"https://www.gate15.be/nl/home\">gate15.be</a>\r\n      <a href=\"https://www.slimnaarantwerpen.be/nl\">slimnaarantwerpen.be</a>\r\n    </p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, authService) {
        this.fb = fb;
        this.authService = authService;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    RegisterComponent.prototype.createForm = function () {
        this.registerForm = this.fb.group({
            firstname: [''],
            lastname: [''],
            email: [''],
            school: [''],
            password: [''],
        });
    };
    RegisterComponent.prototype.register = function () {
        this.authService.register(this.registerForm.value);
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http, router, store) {
        var _this = this;
        this.http = http;
        this.router = router;
        this.store = store;
        this.user = { id: '', username: '' };
        this.authObj = store.select('auth');
        this.authObj.subscribe(function (v) {
            _this.user = v;
        });
    }
    AuthService.prototype.authenticateUser = function (user) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Content-Type', 'application/json');
        this.http.post('https://api20op20.herokuapp.com/api/auth', user)
            .subscribe(function (v) {
            _this.auth(v);
            _this.router.navigate(['user']);
        }, function (err) {
            console.log(err);
            if (err.status === 404 || err.status === 403) {
                _this.store.dispatch({ type: 'SET_ERROR_MESSAGE', payload: 'No user found for given credentials.' });
            }
            else {
                _this.store.dispatch({ type: 'SET_ERROR_MESSAGE', payload: 'Oops. That login failed. Please try again.' });
            }
        });
    };
    AuthService.prototype.auth = function (res) {
        this.store.dispatch({
            type: 'CREATE_AUTH',
            payload: {
                id: res.user.id,
                username: res.user.email,
                firstname: res.user.firstname,
                lastname: res.user.lastname,
                school: res.user.school
            }
        });
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', JSON.stringify({ user: res.user.email, id: res.user.id }));
    };
    AuthService.prototype.loggedIn = function () {
        return localStorage.getItem('token') != undefined && localStorage.getItem('user') != undefined;
    };
    AuthService.prototype.logout = function () {
        this.store.dispatch({ type: 'DELETE_AUTH', payload: '' });
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.router.navigate(['']);
    };
    AuthService.prototype.register = function (user) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Content-Type', 'application/json');
        this.http.post('https://api20op20.herokuapp.com/api/teacher/', user)
            .subscribe(function (v) {
            var res = { user: v.user, token: v.token };
            _this.auth(res);
            _this.router.navigate(['user']);
        }, function (err) {
            console.log(err);
            if (err.status === 404 || err.status === 403) {
                console.log('No user found for given credentials.');
            }
            else {
                console.log("Oops. That login failed. Please try again.");
            }
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["a" /* Store */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/code.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CodeService = /** @class */ (function () {
    function CodeService(http, store) {
        this.http = http;
        this.store = store;
        // State of ready = false; This is used in user.component.ts so it will wait for codesReady to be true.
        // The user.component will wait for asking the this.codes value until after the GET codes call is finished.
        this.store.dispatch({ type: 'CODES_NOT_READY' });
        // Gets user ID for the GET codes call.
        var user = JSON.parse(localStorage.getItem('user'));
        this.getCodes();
    }
    CodeService.prototype.getCodes = function () {
        var _this = this;
        var token = localStorage.getItem('token');
        this.http.get("https://api20op20.herokuapp.com/api/codes/", { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('x-auth-token', "" + token) })
            .subscribe(function (v) {
            // codes get updated in store.
            _this.store.dispatch({ type: 'CREATE_CODES', payload: v });
            // Ready state will be set True
            _this.store.dispatch({ type: 'CODES_READY' });
        }, function (err) {
            _this.store.dispatch({ type: 'SET_ERROR_MESSAGE', payload: err.error });
        });
    };
    CodeService.prototype.validateCode = function (keyCode) {
        var token = localStorage.getItem('token');
        return this.http.get("https://api20op20.herokuapp.com/api/codes/" + keyCode, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('x-auth-token', "" + token)
        });
    };
    CodeService.prototype.addCode = function (code) {
        var token = localStorage.getItem('token');
        return this.http.post("https://api20op20.herokuapp.com/api/codes/", code, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('x-auth-token', "" + token)
        });
    };
    CodeService.prototype.deleteCode = function (id) {
        var _this = this;
        var token = localStorage.getItem('token');
        this.http.delete("https://api20op20.herokuapp.com/api/codes/" + id, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('x-auth-token', "" + token)
        }).subscribe(function (v) {
            _this.deleteCodeInStore(v);
        }, function (err) {
            _this.store.dispatch({ type: 'SET_ERROR_MESSAGE', payload: err.error });
        });
    };
    CodeService.prototype.editCode = function (args) {
        // const token = localStorage.getItem('token');
        // // URL needs to be changed + functionality added on API server
        // this.http.put(`http://project.api/code/${args['codeName']}/${args['keyCode']}/${args['id']}`, {
        //   headers: new HttpHeaders().set('x-auth-token', `${token}`)
        // }).subscribe((v: any) => {
        //   this.editCodeInStore(v);
        // });
    };
    CodeService.prototype.addCodeInStore = function (code) {
        this.store.dispatch({ type: 'ADD_CODES', payload: code });
    };
    CodeService.prototype.editCodeInStore = function (code) {
        this.store.dispatch({ type: 'UPDATE_CODE', payload: code });
    };
    CodeService.prototype.deleteCodeInStore = function (id) {
        this.store.dispatch({ type: 'DELETE_CODE', payload: id });
    };
    CodeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["a" /* Store */]])
    ], CodeService);
    return CodeService;
}());



/***/ }),

/***/ "../../../../../src/app/services/question.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuestionService = /** @class */ (function () {
    function QuestionService(http) {
        this.http = http;
    }
    QuestionService.prototype.postQuestion = function (v, code) {
        var token = localStorage.getItem('token');
        return this.http.post("https://api20op20.herokuapp.com/api/question/", { answer: v.answer, question: v.question, code: code }, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('x-auth-token', "" + token)
        });
    };
    QuestionService.prototype.getQuestions = function (keyCode, number) {
        var token = localStorage.getItem('token');
        return this.http.get("https://api20op20.herokuapp.com/api/question/" + keyCode + "/" + number, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]().set('x-auth-token', "" + token)
        });
    };
    QuestionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], QuestionService);
    return QuestionService;
}());



/***/ }),

/***/ "../../../../../src/app/stellingen/stellingen-body/stellingen-body.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\ndiv {\r\n\twidth: 45%;\r\n\tmargin: 0 75px 20px 75px;\r\n}\r\n\r\nh2 {\r\n  margin-top: 1rem;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\np {\r\n    font-size: 1.25rem;\r\n}\r\n\r\n@media only screen and (max-width: 940px) {\r\n    h1 {\r\n        margin-left: 10px;\r\n        text-align: center;\r\n    }\r\n\r\n    div {\r\n    \twidth: 50%;\r\n    \tmargin-left: 10px;\r\n    \tmargin-right: 0;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 530px) {\r\n    p {\r\n        font-size: 1rem;\r\n    }\r\n\r\n    div {\r\n        width: 100%;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/stellingen/stellingen-body/stellingen-body.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Feiten over Seksuele Intimidatie</h1>\r\n<div>\r\n\t<h2>Waar ligt de grens?</h2>\r\n\t<p>Een dubbelzinnige opmerking, een hand op je dij, een pikante foto in je mailbox, ... Voor de één is het over de grens, voor de ander niet.</p>\r\n</div>\r\n\r\n<div>\r\n\t<h2>Recente meldingen</h2>\r\n\t<p>Het percentage seksueel misbruik bij kinderen dat werd gemeld aan Vertrouwenscentrum Kindermishandeling bedroeg in 2016 15% van het totaal aantal gemelde kindermishandelingen. (1.466 meldingen)</p>\r\n</div>\r\n\r\n<div>\r\n\t<h2>Seksuele intimidatie bij minderjarigen</h2>\r\n  <p>Eén op de vier meisjes en één op de zes jongens krijgt voor het achttiende levensjaar te maken met incest of seksuele intimidatie.</p>\r\n  <!-- http://www.projectspeaknow.nl/cijfersenfeiten/ -->\r\n</div>\r\n\r\n\r\n\r\n\r\n<div>\r\n\t<h2>Gezond gedrag</h2>\r\n  <p>Seksueel grensoverschrijdend gedrag beantwoordt niet aan de kenmerken van gezond seksueel gedrag.</p>\r\n  <!-- https://www.seksualiteit.be/misbruik/misbruik-herkennen/seksueel-grensoverschrijdend-gedrag -->\r\n</div>\r\n\r\n<!-- <div>\r\n\t<h1>Feit 5</h1>\r\n\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\r\n</div>\r\n\r\n<div>\r\n\t<h1>Feit 6</h1>\r\n\t<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\r\n</div> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/stellingen/stellingen-body/stellingen-body.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StellingenBodyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StellingenBodyComponent = /** @class */ (function () {
    function StellingenBodyComponent() {
    }
    StellingenBodyComponent.prototype.ngOnInit = function () {
    };
    StellingenBodyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-stellingen-body',
            template: __webpack_require__("../../../../../src/app/stellingen/stellingen-body/stellingen-body.component.html"),
            styles: [__webpack_require__("../../../../../src/app/stellingen/stellingen-body/stellingen-body.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StellingenBodyComponent);
    return StellingenBodyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/stellingen/stellingen.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-stellingen-body {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n\t-ms-flex-wrap: wrap;\r\n\t    flex-wrap: wrap;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/stellingen/stellingen.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n\r\n<app-stellingen-body></app-stellingen-body>\r\n\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/stellingen/stellingen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StellingenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StellingenComponent = /** @class */ (function () {
    function StellingenComponent() {
    }
    StellingenComponent.prototype.ngOnInit = function () {
    };
    StellingenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-stellingen',
            template: __webpack_require__("../../../../../src/app/stellingen/stellingen.component.html"),
            styles: [__webpack_require__("../../../../../src/app/stellingen/stellingen.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StellingenComponent);
    return StellingenComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/add-code-modal/add-code-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: #0000003a;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\nform {\r\n  position: relative;\r\n  max-width: 500px;\r\n  min-width: 300px;\r\n  padding-bottom: 10px;\r\n  background: #fff;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.form-header {\r\n  background-color: #CF0039;\r\n  color: #fff;\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.form-header h2 {\r\n  margin-bottom: 5px;\r\n  text-align: center;\r\n}\r\n\r\nform input[type=\"text\"] {\r\n  max-width: 200px;\r\n  margin-bottom: 10px;\r\n  padding: 10px;\r\n}\r\n\r\nform input[type=\"text\"]:last-of-type {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.close {\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\n.button {\r\n  color: white;\r\n  font-weight: bold;\r\n  background: #0064B4;\r\n  cursor: pointer;\r\n  padding: 15px;\r\n  display: block !important;\r\n  margin: 10px -5px 10px 0;\r\n  float: right;\r\n  -webkit-transition: background .25s ease-in-out;\r\n  transition: background .25s ease-in-out;\r\n}\r\n\r\n.button:hover {\r\n  background: #003f72;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/add-code-modal/add-code-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"form-container\">\r\n    <form [formGroup]=\"addCodeForm\">\r\n      <div class=\"form-header\">\r\n        <div class=\"close\" (click)=\"closeModal()\"><span class=\"fa fa-times\"></span></div>\r\n        <div class=\"form-title\"><h2>Code Toevoegen</h2></div>\r\n      </div>\r\n      <input type=\"text\" id=\"name\" placeholder=\"Naam voor je code\" formControlName=\"name\">\r\n      <input type=\"text\" id=\"keyCode\" placeholder=\"Key voor je code\" formControlName=\"keyCode\">\r\n      <div class=\"button\" (click)=\"addCode()\">Toevoegen</div>\r\n    </form>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/user/add-code-modal/add-code-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCodeModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_code_service__ = __webpack_require__("../../../../../src/app/services/code.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddCodeModalComponent = /** @class */ (function () {
    function AddCodeModalComponent(fb, authService, codeService, store) {
        this.fb = fb;
        this.authService = authService;
        this.codeService = codeService;
        this.store = store;
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.createForm();
    }
    AddCodeModalComponent.prototype.ngOnInit = function () {
    };
    AddCodeModalComponent.prototype.createForm = function () {
        this.addCodeForm = this.fb.group({
            name: [''],
            keyCode: [''],
        });
    };
    AddCodeModalComponent.prototype.addCode = function () {
        var _this = this;
        this.codeService.addCode({ name: this.addCodeForm.value.name, keyCode: this.addCodeForm.value.keyCode, id: this.authService.user.id })
            .subscribe(function (v) {
            _this.codeService.addCodeInStore(v);
            _this.closeModal();
        }, function (err) {
            _this.store.dispatch({ type: 'SET_ERROR_MESSAGE', payload: err.error });
        });
    };
    AddCodeModalComponent.prototype.closeModal = function () {
        this.close.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], AddCodeModalComponent.prototype, "close", void 0);
    AddCodeModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-code-modal',
            template: __webpack_require__("../../../../../src/app/user/add-code-modal/add-code-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/add-code-modal/add-code-modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__services_code_service__["a" /* CodeService */], __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["a" /* Store */]])
    ], AddCodeModalComponent);
    return AddCodeModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/edit-code-modal/edit-code-modal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n  position: fixed;\r\n  top: 0;\r\n  width: 100vw;\r\n  height: 100vh;\r\n  background-color: #0000003a;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n  z-index: 100;\r\n}\r\n\r\nform {\r\n  position: relative;\r\n  max-width: 500px;\r\n  min-width: 300px;\r\n  padding-bottom: 10px;\r\n  background: #fff;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.form-header {\r\n  background-color: #CF0039;\r\n  color: #fff;\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.form-header h2 {\r\n  margin-bottom: 5px;\r\n  text-align: center;\r\n}\r\n\r\nform input[type=\"text\"] {\r\n  max-width: 200px;\r\n  margin-bottom: 10px;\r\n  padding: 10px;\r\n}\r\n\r\nform input[type=\"text\"]:last-of-type {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.close {\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\n.button {\r\n  color: white;\r\n  font-weight: bold;\r\n  background: #0064B4;\r\n  cursor: pointer;\r\n  padding: 15px;\r\n  display: block !important;\r\n  margin: 10px -5px 10px 0;\r\n  float: right;\r\n  -webkit-transition: background .25s ease-in-out;\r\n  transition: background .25s ease-in-out;\r\n}\r\n\r\n.button:hover {\r\n  background: #003f72;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/edit-code-modal/edit-code-modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n\r\n  <div class=\"form-container\">\r\n    <form [formGroup]=\"editCodeForm\">\r\n      <div class=\"form-header\">\r\n        <div class=\"close\" (click)=\"closeModal()\"><span class=\"fa fa-times\"></span></div>\r\n        <div class=\"form-title\"><h2>Code Aanpassen</h2></div>\r\n      </div>\r\n      <input type=\"text\" id=\"name\" placeholder=\"Naam voor je code\" formControlName=\"name\">\r\n      <input type=\"text\" id=\"keyCode\" placeholder=\"Key voor je code\" formControlName=\"keyCode\">\r\n      <div class=\"button\" (click)=\"addCode()\">Aanpassen</div>\r\n    </form>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/user/edit-code-modal/edit-code-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCodeModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_code_service__ = __webpack_require__("../../../../../src/app/services/code.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditCodeModalComponent = /** @class */ (function () {
    function EditCodeModalComponent(fb, authService, codeService) {
        this.fb = fb;
        this.authService = authService;
        this.codeService = codeService;
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        var code = { id: 1, codeName: 'Test', keyCode: 123456 };
        this.createForm(code);
    }
    EditCodeModalComponent.prototype.ngOnInit = function () {
    };
    EditCodeModalComponent.prototype.createForm = function (code) {
        this.editCodeForm = this.fb.group({
            name: [code.codeName],
            keyCode: [code.keyCode],
        });
    };
    EditCodeModalComponent.prototype.addCode = function () {
        var _this = this;
        this.codeService.addCode({ name: this.editCodeForm.value.name, keyCode: this.editCodeForm.value.keyCode, id: this.authService.user.id })
            .subscribe(function (v) { _this.codeService.addCodeInStore(v); _this.closeModal(); });
    };
    EditCodeModalComponent.prototype.closeModal = function () {
        this.close.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], EditCodeModalComponent.prototype, "close", void 0);
    EditCodeModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-code-modal',
            template: __webpack_require__("../../../../../src/app/user/edit-code-modal/edit-code-modal.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/edit-code-modal/edit-code-modal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__services_code_service__["a" /* CodeService */]])
    ], EditCodeModalComponent);
    return EditCodeModalComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/stats/stats.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n  margin-top: 20px;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.btnContainer {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.chartContainer {\r\n  width: 40%;\r\n  height: 400px;\r\n}\r\n\r\n.btn {\r\n  position: relative;\r\n\r\n  display: block;\r\n  margin: 30px 5px;\r\n  padding: 12px 24px;\r\n\r\n  overflow: hidden;\r\n\r\n  border-width: 0;\r\n  outline: none;\r\n  border-radius: 2px;\r\n  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, .6);\r\n          box-shadow: 0 1px 4px rgba(0, 0, 0, .6);\r\n\r\n  background-color: #2ecc71;\r\n  color: #ecf0f1;\r\n\r\n  -webkit-transition: background-color .3s;\r\n\r\n  transition: background-color .3s;\r\n}\r\n\r\n.btn:hover, .btn:focus, .active {\r\n  background-color: #27ae60;\r\n}\r\n\r\n.fa {\r\n  padding: 20px 20px;\r\n  font-size: 20px;\r\n  width: 20px;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.fa:hover {\r\n  color: #0064B4;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/stats/stats.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"btnContainer\">\r\n    <i class=\"fa fa-arrow-left\" (click)=\"goBack()\"></i>\r\n    <div class=\"btn\" [ngClass]=\"questionNumber == 1 ? 'active' : ''\" (click)=\"setQuestion(1)\">Question 1</div>\r\n    <div class=\"btn\" [ngClass]=\"questionNumber == 2 ? 'active' : ''\" (click)=\"setQuestion(2)\">Question 2</div>\r\n  </div>\r\n\r\n  <div class=\"chartContainer\">\r\n\t<ngx-charts-pie-chart\r\n\t[results]=\"results\"\r\n\t[legend]=\"true\">\r\n\t</ngx-charts-pie-chart>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/user/stats/stats.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatsComponent = /** @class */ (function () {
    function StatsComponent() {
        this.getQuestion = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.back = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.questionNumber = 1;
    }
    StatsComponent.prototype.ngAfterViewInit = function () {
    };
    StatsComponent.prototype.setQuestion = function (question) {
        this.getQuestion.emit(question);
        this.questionNumber = question;
    };
    StatsComponent.prototype.goBack = function () {
        this.back.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], StatsComponent.prototype, "results", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], StatsComponent.prototype, "getQuestion", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], StatsComponent.prototype, "back", void 0);
    StatsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-stats',
            template: __webpack_require__("../../../../../src/app/user/stats/stats.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/stats/stats.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StatsComponent);
    return StatsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/user-details/user-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#userProfile:last-child {\r\n  border-bottom: 1px solid #BABABA;\r\n}\r\n\r\n.userInfo {\r\n  border-top: 1px solid #BABABA;\r\n  padding: 10px 0;\r\n  width: 100%;\r\n}\r\n\r\n.userInfo:after {\r\n  content: \" \";\r\n  clear: both;\r\n  display: table;\r\n}\r\n\r\n.oneThird {\r\n  width: 33.3333333333%;\r\n  float: left;\r\n}\r\n\r\n.bold {\r\n  font-weight: bold;\r\n}\r\n\r\n@media only screen and (max-width: 640px) {\r\n    #userProfile {\r\n      margin-top: 30px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user-details/user-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"userProfile\">\r\n  <div ngClass=\"userInfo\">\r\n    <div ngClass=\"oneThird\">Naam</div>\r\n    <div ngClass=\"oneThird bold\">{{user?.firstname}} {{user?.lastname}}</div>\r\n  </div>\r\n  <div ngClass=\"userInfo\">\r\n    <div ngClass=\"oneThird\">Email</div>\r\n    <div ngClass=\"oneThird bold\">{{user?.username}}</div>\r\n  </div>\r\n  <div ngClass=\"userInfo\">\r\n    <div ngClass=\"oneThird\">School</div>\r\n    <div ngClass=\"oneThird bold\">{{user?.school}}</div>\r\n  </div>\r\n<!--<div ngClass=\"userInfo\">\r\n    <div ngClass=\"oneThird\">Telefoon nr.</div>\r\n  </div>\r\n  <div ngClass=\"userInfo\">\r\n    <div ngClass=\"oneThird\">Adres</div>\r\n  </div>-->\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/user/user-details/user-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(store) {
        var _this = this;
        this.store = store;
        store.select('auth').subscribe(function (v) { _this.user = v; });
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
    };
    UserDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-details',
            template: __webpack_require__("../../../../../src/app/user/user-details/user-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user-details/user-details.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["a" /* Store */]])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/user-header/user-header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "header {\r\n  background-color: #E5E5E6;\r\n  border-top: 1px solid #cccccc;\r\n  min-height: 12rem;\r\n  margin-top: 49px;\r\n\r\n  position: relative;\r\n}\r\n\r\n.user-box {\r\n  background: #fff;\r\n  margin: 0 auto;\r\n  max-width: 36rem;\r\n  padding: 1.5rem 1.5rem 0;\r\n  position: absolute;\r\n  bottom: -14px;\r\n  left: 50%;\r\n  -webkit-transform: translateX(-50%);\r\n          transform: translateX(-50%);\r\n  text-align: center;\r\n}\r\n\r\n.user-box::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: 0;\r\n  border-top: 14px solid rgba(0,0,0,0.2);\r\n  left: -.375rem;\r\n  border-left: 6px solid transparent;\r\n}\r\n\r\n.user-box::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  bottom: 0;\r\n  border-top: 14px solid rgba(0,0,0,0.2);\r\n  right: -.375rem;\r\n  border-right: 6px solid transparent;\r\n}\r\n\r\n.header-small {\r\n  color: #7C7070;\r\n  text-transform: uppercase;\r\n  margin: 0;\r\n  font-size: 1.2rem;\r\n}\r\n\r\nh2 {\r\n  font-size: 2.48832rem;\r\n  line-height: 1.0971257716em;\r\n  margin-top: .5rem;\r\n}\r\n\r\n.color-red {\r\n  color: #CF0039;\r\n}\r\n\r\n.logo {\r\n  margin-top: 0;\r\n}\r\n\r\n@media only screen and (max-width: 640px) {\r\n    .topnav a {\r\n      font-size: 0;\r\n      padding-top: 31px;\r\n      padding-bottom: 19px;\r\n    }\r\n\r\n    .topnav i {\r\n      font-size: 17px;\r\n    }\r\n\r\n    h2 {\r\n      font-size: 2rem;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user-header/user-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"topnav\">\r\n  <div>\r\n    <a [routerLink]=\"['']\"><i class=\"fa fa-home\" aria-hidden=\"true\"></i> Home</a><!--\r\n    --><a (click)=\"logout()\"><i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> Logout</a>\r\n  </div>\r\n</div>\r\n<header>\r\n  <img src=\"../../../assets/images/a-logo.svg\" alt=\"a-logo\" class=\"logo\">\r\n  <div class=\"user-box\">\r\n    <h1 class=\"header-small\">Profiel</h1>\r\n    <h2 class=\"color-red\">{{user?.firstname}} {{user?.lastname}}</h2>\r\n  </div>\r\n</header>\r\n"

/***/ }),

/***/ "../../../../../src/app/user/user-header/user-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserHeaderComponent = /** @class */ (function () {
    function UserHeaderComponent(authService, store) {
        var _this = this;
        this.authService = authService;
        this.store = store;
        store.select('auth').subscribe(function (v) { _this.user = v; });
    }
    UserHeaderComponent.prototype.ngOnInit = function () {
    };
    UserHeaderComponent.prototype.logout = function () {
        this.authService.logout();
    };
    UserHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-header',
            template: __webpack_require__("../../../../../src/app/user/user-header/user-header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user-header/user-header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["a" /* Store */]])
    ], UserHeaderComponent);
    return UserHeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\r\n  border-collapse: collapse;\r\n  width: 600px;\r\n}\r\n\r\ntable > div {\r\n  text-align: center;\r\n  display:table-row;\r\n}\r\n\r\nth {\r\n  background-color: #CF0039;\r\n  color: #fff;\r\n  padding: 10px;\r\n  width: 33%;\r\n}\r\n\r\n.codes th {\r\n  text-align: left;\r\n}\r\n\r\n.codes th:last-of-type, .codes tr td:last-of-type {\r\n  text-align: right;\r\n}\r\n\r\n.codes td{\r\n  padding: 10px;\r\n  border-bottom: 1px solid #BABABA;\r\n}\r\n\r\n.no-codes tbody {\r\n  text-align: center;\r\n}\r\n\r\n.no-codes td {\r\n  padding-bottom: 30px;\r\n}\r\n\r\n.no-codes tr:first-child td {\r\n  padding-top: 20px;\r\n  padding-bottom: 0;\r\n}\r\n\r\n.add-code {\r\n  color: white;\r\n  font-weight: bold;\r\n  background: #0064B4;\r\n  padding: 15px;\r\n  display: block !important;\r\n  margin: 10px -5px 10px 0;\r\n  float: right;\r\n  -webkit-transition: background .25s ease-in-out;\r\n  transition: background .25s ease-in-out;\r\n}\r\n\r\n.add-code:hover {\r\n  background: #003f72;\r\n}\r\n\r\n.fa-times {\r\n  color: #CF0039;\r\n}\r\n\r\n.fa-cog {\r\n  color: #666;\r\n}\r\n\r\n.delete-row {\r\n  text-align: center;\r\n  width: 20px;\r\n}\r\n\r\nmain {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: baseline;\r\n      -ms-flex-align: baseline;\r\n          align-items: baseline;\r\n  padding-top : 60px;\r\n}\r\n\r\n.sidebar {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-orient: vertical;\r\n\t-webkit-box-direction: normal;\r\n\t    -ms-flex-flow: column;\r\n\t        flex-flow: column;\r\n\tmargin-right: 20px;\r\n}\r\n\r\n.sidebar a {\r\n  width: 300px;\r\n  border-top: 1px solid rgba(127,127,127,0.3);\r\n  margin: -1px 0 0 0;\r\n  padding: 15px 10px;\r\n  position: relative;\r\n}\r\n\r\n.sidebar a:last-child {\r\n  border-bottom: 1px solid rgba(127,127,127,0.3);\r\n}\r\n\r\n.sidebar a:hover {\r\n  background: #eee;\r\n  color: #0064B4;\r\n  margin-bottom: -3px;\r\n}\r\n\r\n.sidebar a.selected {\r\n  font-weight: bold;\r\n  color: #0064B4;\r\n  margin-bottom: -3px;\r\n}\r\n\r\n.sidebar a i {\r\n  position: absolute;\r\n  right: 10px;\r\n  font-size: .8rem;\r\n  margin: .1rem 0;\r\n  -webkit-transition: font-size .2s ease-in-out, margin .2s ease-in-out;\r\n  transition: font-size .2s ease-in-out, margin .2s ease-in-out;\r\n}\r\n\r\n.sidebar a:hover i {\r\n  font-size: 1rem;\r\n  margin: 0 3px;\r\n}\r\n\r\n.feed-container {\r\n  width: 40%;\r\n}\r\n\r\n.sidebar a:hover, .sidebar a.active{\r\n  color: #0064B4;\r\n  border-bottom: 3px solid #0064B4;\r\n  padding: 15px;\r\n}\r\n\r\n.feed-container table {\r\n  width: 100%;\r\n}\r\n\r\n.fa {\r\n  cursor: pointer;\r\n}\r\n\r\n.fa-eye:hover {\r\n  color: #0064B4;\r\n}\r\n\r\n@media only screen and (max-width: 640px) {\r\n    main {\r\n      -webkit-box-orient: vertical;\r\n      -webkit-box-direction: normal;\r\n          -ms-flex-direction: column;\r\n              flex-direction: column;\r\n      -webkit-box-align: center;\r\n          -ms-flex-align: center;\r\n              align-items: center;\r\n    }\r\n\r\n    .feed-container {\r\n      width: 60%;\r\n    }\r\n\r\n    .feed-container table {\r\n      margin-top: 30px;\r\n    }\r\n\r\n    .sidebar {\r\n      width: 100%;\r\n      margin-right: 0;\r\n      -webkit-box-align: center;\r\n          -ms-flex-align: center;\r\n              align-items: center;\r\n    }\r\n\r\n    .sidebar a {\r\n      width: 50%;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<app-user-header user=\"user\"></app-user-header>\r\n<app-error-message></app-error-message>\r\n<app-add-code-modal (close)=\"closeAddingModal()\" *ngIf=\"isAddingCode\"></app-add-code-modal>\r\n<app-edit-code-modal (close)=\"closeEditingModal()\" *ngIf=\"isEditingCode\"></app-edit-code-modal>\r\n\r\n<main *ngIf=\"!stats; else showStats\">\r\n  <div class=\"sidebar\" [ngStyle]=\"{'z-index': isAddingCode ? '-1' : '0'}\">\r\n    <a [ngClass]=\"page == 'details' ? 'active' : ''\" (click)=\"setPage('details')\">Gegevens <i class=\"fa fa-chevron-right\"></i></a>\r\n    <a [ngClass]=\"page == 'codes' ? 'active' : ''\" (click)=\"setPage('codes')\">Codes <i class=\"fa fa-chevron-right\"></i></a>\r\n  </div>\r\n\r\n  <div class=\"feed-container\">\r\n    <app-user-details *ngIf=\"page == 'details'\"></app-user-details>\r\n\r\n    <table class=\"codes\" *ngIf=\"page == 'codes' && codes.length > 0\">\r\n      <thead>\r\n      <tr>\r\n        <th>Naam</th>\r\n        <th>Code</th>\r\n        <th class=\"delete-row\">Acties</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody class=\"codes\">\r\n        <tr *ngFor=\"let code of codes\">\r\n          <td (click)=\"getQuestions(code.keyCode)\">{{code.name}}</td>\r\n          <td>{{code.keyCode}}</td>\r\n          <td class=\"delete-row\">\r\n            <span class=\"fa fa-eye\" (click)=\"getQuestions(code.keyCode)\"></span>\r\n            <span class=\"fa fa-cog\" (click)=\"openEditingModal(code)\"></span>\r\n            <span class=\"fa fa-times\" (click)=\"deleteCode(code._id)\"></span>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n    <table class=\"no-codes\" *ngIf=\"page == 'codes' && codes.length < 1\">\r\n      <thead>\r\n      <tr>\r\n        <th>Codes</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td>Geen codes gevonden</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n    <div class=\"add-code button\" *ngIf=\"page == 'codes'\" (click)=\"openAddingModal()\">Code toevoegen</div>\r\n  </div>\r\n</main>\r\n\r\n<ng-template #showStats>\r\n  <app-stats [results]=\"results\" (getQuestion)=\"getQuestion($event)\" (back)=\"closeStats()\"></app-stats>\r\n</ng-template>\r\n\r\n<!-- editCode({id:code.id, codeName:code.name, keyCode:code.keyCode}) -->\r\n"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_code_service__ = __webpack_require__("../../../../../src/app/services/code.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_question_service__ = __webpack_require__("../../../../../src/app/services/question.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserComponent = /** @class */ (function () {
    function UserComponent(codeService, authService, store, questionService) {
        var _this = this;
        this.codeService = codeService;
        this.authService = authService;
        this.store = store;
        this.questionService = questionService;
        this.codes = [];
        this.isAddingCode = false;
        this.isEditingCode = false;
        this.results = [{
                'name': '',
                'value': 0
            }];
        this.stats = false;
        store.select('codes').filter(function (v) { return v != null; }).subscribe(function (v) { _this.codes = v.codes; });
        store.select('userNavigation').subscribe(function (v) { return _this.page = v; });
    }
    UserComponent.prototype.openAddingModal = function () {
        this.isAddingCode = true;
    };
    UserComponent.prototype.closeAddingModal = function () {
        this.isAddingCode = false;
    };
    UserComponent.prototype.openEditingModal = function () {
        this.isEditingCode = true;
    };
    UserComponent.prototype.closeEditingModal = function () {
        this.isEditingCode = false;
    };
    UserComponent.prototype.deleteCode = function (id) {
        this.codeService.deleteCode(id);
    };
    UserComponent.prototype.editCode = function (args) {
        // this.codeService.editCode(args);
    };
    UserComponent.prototype.setPage = function (page) {
        this.store.dispatch({ type: 'SET_PAGE', payload: page });
    };
    UserComponent.prototype.getQuestions = function (keyCode) {
        var _this = this;
        this.keyCode = keyCode;
        this.questionService.getQuestions(keyCode, 1).subscribe(function (v) {
            _this.stats = true;
            _this.results = v;
        });
    };
    UserComponent.prototype.getQuestion = function (number) {
        var _this = this;
        this.questionService.getQuestions(this.keyCode, number).subscribe(function (v) {
            _this.results = v;
        });
    };
    UserComponent.prototype.closeStats = function () {
        this.stats = false;
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_code_service__["a" /* CodeService */], __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["a" /* Store */], __WEBPACK_IMPORTED_MODULE_5__services_question_service__["a" /* QuestionService */]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_header_user_header_component__ = __webpack_require__("../../../../../src/app/user/user-header/user-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_code_service__ = __webpack_require__("../../../../../src/app/services/code.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__add_code_modal_add_code_modal_component__ = __webpack_require__("../../../../../src/app/user/add-code-modal/add-code-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_details_user_details_component__ = __webpack_require__("../../../../../src/app/user/user-details/user-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__edit_code_modal_edit_code_modal_component__ = __webpack_require__("../../../../../src/app/user/edit-code-modal/edit-code-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__stats_stats_component__ = __webpack_require__("../../../../../src/app/user/stats/stats.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__error_message_error_message_component__ = __webpack_require__("../../../../../src/app/error-message/error-message.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var USER_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_5__user_component__["a" /* UserComponent */] }
];
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forChild(USER_ROUTES),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__swimlane_ngx_charts__["NgxChartsModule"],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_6__user_header_user_header_component__["a" /* UserHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__add_code_modal_add_code_modal_component__["a" /* AddCodeModalComponent */],
                __WEBPACK_IMPORTED_MODULE_9__user_details_user_details_component__["a" /* UserDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_10__edit_code_modal_edit_code_modal_component__["a" /* EditCodeModalComponent */],
                __WEBPACK_IMPORTED_MODULE_11__stats_stats_component__["a" /* StatsComponent */],
                __WEBPACK_IMPORTED_MODULE_12__error_message_error_message_component__["a" /* ErrorMessageComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_6__user_header_user_header_component__["a" /* UserHeaderComponent */], __WEBPACK_IMPORTED_MODULE_12__error_message_error_message_component__["a" /* ErrorMessageComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_code_service__["a" /* CodeService */]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "../../../../../src/app/zelf-doen/zelf-doen-body/getuige/getuige.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/zelf-doen/zelf-doen-body/getuige/getuige.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Als getuige</h1>\r\n<p class=\"lead\">\r\n  Tussenkomen is niet evident. Elke situatie is verschillend en u zal zelf (snel) moeten inschatten wat te doen. De belangrijkste stelregel is: probeer de ander te helpen zonder uzelf in gevaar te brengen. Bied hulp als iemand u in vertrouwen neemt of als u getuige bent van seksueel grensoverschrijdend gedrag.\r\n</p>\r\n<p>Enkele nuttige tips:</p>\r\n<ul>\r\n  <li>Probeer de lastigvaller verbaal te stoppen: roep er andere omstanders bij.</li>\r\n  <li>Bel de politie op het noodnummer 101 als de situatie erg onveilig is.</li>\r\n  <li>Onthoud de kenmerken van de lastigvaller.</li>\r\n  <li>Kom alleen fysiek tussenbeide als u voldoende sterk (of met meer personen) bent.</li>\r\n  <li>Vang het slachtoffer op en bied eerste hulp.</li>\r\n  <li>Stel u beschikbaar als getuige.</li>\r\n</ul>\r\n<p>Meer tips en voorbeelden vindt u op <a href=\"http://www.seksualiteit.be/misbruik/misbruik-en-hulp/getuige-van-misbruik\">www.seksualiteit.be</a>.</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/zelf-doen/zelf-doen-body/getuige/getuige.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetuigeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GetuigeComponent = /** @class */ (function () {
    function GetuigeComponent() {
    }
    GetuigeComponent.prototype.ngOnInit = function () {
    };
    GetuigeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-zelf-doen-body-getuige',
            template: __webpack_require__("../../../../../src/app/zelf-doen/zelf-doen-body/getuige/getuige.component.html"),
            styles: [__webpack_require__("../../../../../src/app/zelf-doen/zelf-doen-body/getuige/getuige.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GetuigeComponent);
    return GetuigeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/zelf-doen/zelf-doen-body/pleger/pleger.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/zelf-doen/zelf-doen-body/pleger/pleger.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Als pleger</h1>\r\n<p class=\"lead\">Bent u zélf over de grens gegaan, dan kan u begeleiding zoeken.</p>\r\n<p>\r\n  De meeste vrouwen worden minstens één keer in hun leven seksueel lastiggevallen. Onthoud vooral dat seksuele intimidatie altijd ongewenst, onaanvaardbaar en in bepaalde gevallen zelfs strafbaar is.\r\n</p>\r\n<p>\r\n  Bent u toch te ver gegaan? Denk dan eens na over hoe u uw ongewenst gedrag kan bijsturen.Of hebt u vragen over wat wel en niet kan? ​\r\n</p>\r\n<ul>\r\n  <li>\r\n    Bij <a href=\"http://www.tele-onthaal.be/\">Tele-Onthaal</a> kan u anoniem uw verhaal kwijt als u het moeilijk hebt, op het nummer 106 of via chat. Jongeren kunnen ook terecht bij het Jongerenadviescentra (JAC) voor <a href=\"http://www.jac.be/\">een gesprek, afspraak of chat</a>.\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/zelf-doen/zelf-doen-body/pleger/pleger.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlegerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlegerComponent = /** @class */ (function () {
    function PlegerComponent() {
    }
    PlegerComponent.prototype.ngOnInit = function () {
    };
    PlegerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-zelf-doen-body-pleger',
            template: __webpack_require__("../../../../../src/app/zelf-doen/zelf-doen-body/pleger/pleger.component.html"),
            styles: [__webpack_require__("../../../../../src/app/zelf-doen/zelf-doen-body/pleger/pleger.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PlegerComponent);
    return PlegerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/zelf-doen/zelf-doen-body/slachtoffer/slachtoffer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/zelf-doen/zelf-doen-body/slachtoffer/slachtoffer.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Als slachtoffer</h1>\r\n<p class=\"lead\">\r\n  Hoe reageer je op seksuele intimidatie? Deze Antwerpenaren vertellen wat zij meemaakten. Julia van Sensoa en Evelien en van Jong &amp; Van Zin geven tips bij hun getuigenissen.\r\n</p>\r\n\r\n<h2>Handtastelijke collega</h2>\r\n<div class=\"videoWrapper\">\r\n  <iframe\r\n    src=\"https://www.youtube.com/embed/2nNCKcJb6MM?hd=1&rel=0&autohide=1&showinfo=0\" frameborder=\"0\" allowfullscreen>\r\n  </iframe>\r\n</div>\r\n<ul>\r\n  <li>\r\n    “Iets doen waar een meisje zich niet goed bij voelt, is echt niet oké. Vroeger niet en nu niet. Daar mag je altijd iets van zeggen. Het is niet omdat je jong bent dat je niets mag zeggen.”\r\n  </li>\r\n  <li>\r\n    “Geef op een respectvolle manier aan dat je dat niet gepast vindt en stel kordaat je grenzen. ‘’t is misschien niet slecht bedoeld, maar ik vind het echt niet fijn wat je doet.’ En als die collega het zou weglachen, herhaal dan dat je dat gedrag niet op prijs stelt.”\r\n  </li>\r\n  <li>\r\n    “Het is heel begrijpelijk als je zoiets niet rechtstreeks tegen je baas of collega durft te zeggen. Dan is het bijvoorbeeld een goed idee om met een vertrouwenspersoon in het bedrijf te gaan praten.”\r\n  </li>\r\n</ul>\r\n\r\n\r\n<h2>Verpleegster</h2>\r\n<div class=\"videoWrapper\">\r\n  <iframe\r\n    src=\"https://www.youtube.com/embed/Ko1k7VNY2us?hd=1&rel=0&autohide=1&showinfo=0\" frameborder=\"0\" allowfullscreen>\r\n  </iframe>\r\n</div>\r\n<p>\r\n  “Deze vrouw reageert perfect: ze geeft duidelijk haar grenzen aan en blijft ze daarna ook duidelijk aangeven. Blijf inderdaad ook niet alleen met de vervelende situatie zitten. Vaak zorgt een gesprek met collega’s al voor een oplossing.”\r\n</p>\r\n\r\n\r\n<h2>Groepje mensen</h2>\r\n<div class=\"videoWrapper\">\r\n  <iframe\r\n    src=\"https://www.youtube.com/embed/fgvq95a8uVI?hd=1&rel=0&autohide=1&showinfo=0\" frameborder=\"0\" allowfullscreen>\r\n  </iframe>\r\n</div>\r\n<p>\r\n  “Lastig hé. Want als je er iets van zegt, hoe gaan ze dan reageren? Ga je jezelf dan niet in een gevaarlijke situatie brengen? Negeren lijkt hier de beste oplossing. En als het telkens op dezelfde plaats gebeurt, doe dan aangifte bij de lokale politie.”\r\n</p>\r\n<p>\r\n  “Er zijn natuurlijk een paar dingen die je zelf in de hand hebt en die kunnen helpen. Ze lossen structureel niets op, maar kunnen je wel een veiliger gevoel geven. Maar onthoud: het is aan de andere om respect te tonen.”\r\n</p>\r\n<ul>\r\n  <li>Neem de fiets. Met de fiets ben je sneller en minder kwetsbaar.</li>\r\n  <li>Als je je echt niet veilig voelt, bel dan iemand op.</li>\r\n  <li>Zoek iemand die dezelfde richting uit moet en die je kan vertrouwen om samen te wandelen.</li>\r\n</ul>\r\n\r\n\r\n<h2>Broek of short?</h2>\r\n<div class=\"videoWrapper\">\r\n  <iframe\r\n    src=\"https://www.youtube.com/embed/aR4LPOINO9Q?hd=1&rel=0&autohide=1&showinfo=0\" frameborder=\"0\" allowfullscreen>\r\n  </iframe>\r\n</div>\r\n<p>\r\n  “Laat één ding duidelijk zijn: om seksuele intimidatie vraag je nooit. Het is nooit jouw schuld, welke kleren je ook aandoet en welke route je ook neemt. Zoals dit meisje zegt: “Het is niet mijn probleem.” Dat is helemaal de juiste ingesteldheid. Jij moet dragen waar je je het best in voelt.”\r\n</p>\r\n<p>\r\n  “Natuurlijk, als je verschillende wegen kan nemen, kies dan de meest veilige. Volg je logisch verstand.”\r\n</p>\r\n\r\n\r\n<h2>Achtervolgd en nagefloten</h2>\r\n<div class=\"videoWrapper\">\r\n  <iframe\r\n    src=\"https://www.youtube.com/embed/mHl3mJ6fS3k?hd=1&rel=0&autohide=1&showinfo=0\" frameborder=\"0\" allowfullscreen>\r\n  </iframe>\r\n</div>\r\n<p>\r\n  “De reactie van deze vrouw is heel normaal. Mensen die heel erg schrikken, gaan soms onverwacht fel reageren, zoals spugen op een ander. Hier is het positief uitgedraaid, maar het kan ook een averechts effect hebben.”\r\n</p>\r\n<p>\r\n  “Op het einde zegt deze vrouw: ‘ik had er misschien sneller iets van moeten zeggen. Dan was het misschien niet gebeurd.’ Let op dat je de schuld niet bij jezelf legt. Het is nooit jouw fout. En het is niet omdat je er eerder niets van gezegd hebt, dat je geen signaal hebt gegeven dat je het niet apprecieert. Negeren is namelijk ook een duidelijk signaal.”\r\n</p>\r\n<p>\r\n  “Natuurlijk had ze er iets van kunnen zeggen, maar ben je mondig genoeg op je twaalfde? Ze had er ook met iemand over kunnen praten om te zien wat ze er tegen kon doen of bij omstaanders horen of zij er ook last van hadden.”\r\n</p>\r\n\r\n\r\n<h2>Tinder</h2>\r\n<div class=\"videoWrapper\">\r\n  <iframe\r\n    src=\"https://www.youtube.com/embed/0rUSMYXIJCs?hd=1&rel=0&autohide=1&showinfo=0\" frameborder=\"0\" allowfullscreen>\r\n  </iframe>\r\n</div>\r\n<p>\r\n  “Tinder en andere datingapps zijn voor sommige mensen wel een fijne manier om nieuwe mensen te leren kennen. Jammer dat het soms misloopt. Wat je in zo’n geval het beste doet? Blok het af. Zeg resoluut: dit apprecieer ik echt niet. En blokkeer of verwijder de persoon. Als verschillende personen dit doen, zal de boodschap na een tijdje misschien wel binnenkomen.\"\r\n</p>\r\n<p>\r\n  “Het voordeel aan zo’n app is dat je op een veilige afstand zit en het dus makkelijker is om duidelijk te maken dat je het niet apprecieert.”\r\n</p>\r\n\r\n\r\n<h2>Op een feestje</h2>\r\n<div class=\"videoWrapper\">\r\n  <iframe\r\n    src=\"https://www.youtube.com/embed/pJbnVbyS3QI?hd=1&rel=0&autohide=1&showinfo=0\" frameborder=\"0\" allowfullscreen>\r\n  </iframe>\r\n</div>\r\n<p>\r\n  “Veel jongeren krijgen met seksuele intimidatie te maken tijdens het uitgaan. Blijkbaar gaan mensen ervan uit dat de grenzen dan wat vervagen. Onzin, grenzen vervagen niet bij feestjes en/of alcohol. Het is niet aan iemand anders om te bepalen waar jouw grenzen liggen. Als je je ergens niet goed bij voelt, schaam je er dan niet voor om iets te zeggen.”\r\n</p>\r\n\r\n\r\n<h2>Exhibitionist</h2>\r\n<div class=\"videoWrapper\">\r\n  <iframe\r\n    src=\"https://www.youtube.com/embed/xzpYfrPePp4?hd=1&rel=0&autohide=1&showinfo=0\" frameborder=\"0\" allowfullscreen>\r\n  </iframe>\r\n</div>\r\n<p>\r\n  “Iemand die in het openbaar zijn geslachtsdelen laat zien, dat is geen seksuele intimidatie meer, maar zwaar seksueel grensoverschrijdend gedrag. Bij situaties die zo duidelijk fout zijn, mag je absoluut niet twijfelen om naar de politie te stappen.”\r\n</p>\r\n\r\n\r\n<h2>Meer info</h2>\r\n<p>\r\n  Wat u kan doen hangt af van de situatie. Maar denk altijd aan uw eigen veiligheid en twijfel niet om hulp in te roepen van omstanders of de politie te (laten) bellen op het noodnummer 101 als de situatie dreigend of erg onveilig wordt.\r\n</p>\r\n<p>\r\n  Voor niet-dringende hulp of vragen over geweld kan u bellen naar de gratis hulplijn <a href=\"https://1712.be/\">1712</a> of de Blauwe Lijn op het nummer 0800 123 12. U kan ook <a href=\"https://www.politieantwerpen.be/afspraak\">online een afspraak maken met Politie Antwerpen</a>.\r\n</p>\r\n<p>Nog vragen over wat wel en niet kan? Kijk dan eens op deze links.​</p>\r\n<ul>\r\n  <li><a href=\"https://jongerengids.be/vraag/een-vriend-vriendin-vraagt-mij-om-iets-te-doen-wat-ik-niet-wil-wat-doe-ik\">Wat te zeggen tegen vrienden die u iets vragen dat u niet wil doen</a>?</li>\r\n  <li>\r\n    Bij <a href=\"http://www.tele-onthaal.be/\">Tele-Onthaal</a> kan u anoniem uw verhaal kwijt als u het moeilijk hebt, op het nummer 106 of via chat. Jongeren kunnen ook terecht bij het Jongerenadviescentra (JAC) voor <a href=\"http://www.jac.be/\">een gesprek, afspraak of chat</a>.\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/zelf-doen/zelf-doen-body/slachtoffer/slachtoffer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlachtofferComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SlachtofferComponent = /** @class */ (function () {
    function SlachtofferComponent() {
    }
    SlachtofferComponent.prototype.ngOnInit = function () {
    };
    SlachtofferComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-zelf-doen-body-slachtoffer',
            template: __webpack_require__("../../../../../src/app/zelf-doen/zelf-doen-body/slachtoffer/slachtoffer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/zelf-doen/zelf-doen-body/slachtoffer/slachtoffer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SlachtofferComponent);
    return SlachtofferComponent;
}());



/***/ }),

/***/ "../../../../../src/app/zelf-doen/zelf-doen-body/zelf-doen-body.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/zelf-doen/zelf-doen-body/zelf-doen-body.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"subnav\">\r\n  <a [routerLink]=\"['/wat-kan-je-zelf-doen/als-slachtoffer']\" routerLinkActive=\"active\">Als slachtoffer<i class=\"fa fa-chevron-right\"></i></a>\r\n\t<a [routerLink]=\"['/wat-kan-je-zelf-doen/als-getuige']\" routerLinkActive=\"active\">Als getuige<i class=\"fa fa-chevron-right\"></i></a>\r\n\t<a [routerLink]=\"['/wat-kan-je-zelf-doen/als-pleger']\" routerLinkActive=\"active\">Als pleger<i class=\"fa fa-chevron-right\"></i></a>\r\n</div>\r\n\r\n<div class=\"right\">\r\n  <router-outlet name='content'></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/zelf-doen/zelf-doen-body/zelf-doen-body.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZelfDoenBodyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ZelfDoenBodyComponent = /** @class */ (function () {
    function ZelfDoenBodyComponent() {
    }
    ZelfDoenBodyComponent.prototype.ngOnInit = function () {
    };
    ZelfDoenBodyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-zelf-doen-body',
            template: __webpack_require__("../../../../../src/app/zelf-doen/zelf-doen-body/zelf-doen-body.component.html"),
            styles: [__webpack_require__("../../../../../src/app/zelf-doen/zelf-doen-body/zelf-doen-body.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ZelfDoenBodyComponent);
    return ZelfDoenBodyComponent;
}());



/***/ }),

/***/ "../../../../../src/app/zelf-doen/zelf-doen.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-zelf-doen-body {\r\n\tdisplay: -webkit-box;\r\n\tdisplay: -ms-flexbox;\r\n\tdisplay: flex;\r\n\t-webkit-box-pack: center;\r\n\t    -ms-flex-pack: center;\r\n\t        justify-content: center;\r\n\t-webkit-box-align: baseline;\r\n\t    -ms-flex-align: baseline;\r\n\t        align-items: baseline;\r\n}\r\n\r\n@media only screen and (max-width: 940px) {\r\n\tapp-zelf-doen-body {\r\n\t\t-webkit-box-orient: vertical;\r\n\t\t-webkit-box-direction: normal;\r\n\t\t    -ms-flex-direction: column;\r\n\t\t        flex-direction: column;\r\n\t\t-webkit-box-align: center;\r\n\t\t    -ms-flex-align: center;\r\n\t\t        align-items: center;\r\n\t}\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/zelf-doen/zelf-doen.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n\r\n<app-zelf-doen-body></app-zelf-doen-body>\r\n\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/zelf-doen/zelf-doen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZelfDoenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ZelfDoenComponent = /** @class */ (function () {
    function ZelfDoenComponent() {
    }
    ZelfDoenComponent.prototype.ngOnInit = function () {
    };
    ZelfDoenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-zelf-doen',
            template: __webpack_require__("../../../../../src/app/zelf-doen/zelf-doen.component.html"),
            styles: [__webpack_require__("../../../../../src/app/zelf-doen/zelf-doen.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ZelfDoenComponent);
    return ZelfDoenComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/game/bedroom.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bedroom.cbf652020a6f369a6b99.jpg";

/***/ }),

/***/ "../../../../../src/assets/game/classroom.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "classroom.c08fd350657998bb18aa.jpg";

/***/ }),

/***/ "../../../../../src/assets/game/playground.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "playground.41ec2d49a360df65b35a.jpg";

/***/ }),

/***/ "../../../../../src/assets/images/banner.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "banner.3a599f172d71869187ae.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map