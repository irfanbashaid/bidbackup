(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div id=\"mainid\"> -->\n    <router-outlet></router-outlet>\n <!-- </div> -->\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _bidlog_bidlog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bidlog/bidlog.component */ "./src/app/bidlog/bidlog.component.ts");
/* harmony import */ var _changeowner_changeowner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./changeowner/changeowner.component */ "./src/app/changeowner/changeowner.component.ts");
/* harmony import */ var _closedauction_closedauction_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./closedauction/closedauction.component */ "./src/app/closedauction/closedauction.component.ts");
/* harmony import */ var _upcomingauction_upcomingauction_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./upcomingauction/upcomingauction.component */ "./src/app/upcomingauction/upcomingauction.component.ts");
/* harmony import */ var _create_auction_create_auction_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./create-auction/create-auction.component */ "./src/app/create-auction/create-auction.component.ts");
/* harmony import */ var _liveauction_liveauction_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./liveauction/liveauction.component */ "./src/app/liveauction/liveauction.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _meetwinners_meetwinners_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./meetwinners/meetwinners.component */ "./src/app/meetwinners/meetwinners.component.ts");
/* harmony import */ var _myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./myaccount/myaccount.component */ "./src/app/myaccount/myaccount.component.ts");
/* harmony import */ var _owner_owner_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./owner/owner.component */ "./src/app/owner/owner.component.ts");
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./select/select.component */ "./src/app/select/select.component.ts");
/* harmony import */ var _sendcredits_sendcredits_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sendcredits/sendcredits.component */ "./src/app/sendcredits/sendcredits.component.ts");
/* harmony import */ var _setresult_setresult_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./setresult/setresult.component */ "./src/app/setresult/setresult.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _viewauction_viewauction_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./viewauction/viewauction.component */ "./src/app/viewauction/viewauction.component.ts");
/* harmony import */ var _winhistory_winhistory_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./winhistory/winhistory.component */ "./src/app/winhistory/winhistory.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _cloneauction_cloneauction_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./cloneauction/cloneauction.component */ "./src/app/cloneauction/cloneauction.component.ts");
/* harmony import */ var _preregister_preregister_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./preregister/preregister.component */ "./src/app/preregister/preregister.component.ts");
/* harmony import */ var _registrationdetails_registrationdetails_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./registrationdetails/registrationdetails.component */ "./src/app/registrationdetails/registrationdetails.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _bidlog_bidlog_component__WEBPACK_IMPORTED_MODULE_4__["BidlogComponent"],
                _changeowner_changeowner_component__WEBPACK_IMPORTED_MODULE_5__["ChangeownerComponent"],
                _closedauction_closedauction_component__WEBPACK_IMPORTED_MODULE_6__["ClosedauctionComponent"],
                _upcomingauction_upcomingauction_component__WEBPACK_IMPORTED_MODULE_7__["UpcomingauctionComponent"],
                _create_auction_create_auction_component__WEBPACK_IMPORTED_MODULE_8__["CreateAuctionComponent"],
                _liveauction_liveauction_component__WEBPACK_IMPORTED_MODULE_9__["LiveauctionComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _meetwinners_meetwinners_component__WEBPACK_IMPORTED_MODULE_11__["MeetwinnersComponent"],
                _myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_12__["MyaccountComponent"],
                _owner_owner_component__WEBPACK_IMPORTED_MODULE_13__["OwnerComponent"],
                _select_select_component__WEBPACK_IMPORTED_MODULE_14__["SelectComponent"],
                _sendcredits_sendcredits_component__WEBPACK_IMPORTED_MODULE_15__["SendcreditsComponent"],
                _setresult_setresult_component__WEBPACK_IMPORTED_MODULE_16__["SetresultComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_17__["UserComponent"],
                _viewauction_viewauction_component__WEBPACK_IMPORTED_MODULE_18__["ViewauctionComponent"],
                _winhistory_winhistory_component__WEBPACK_IMPORTED_MODULE_19__["WinhistoryComponent"],
                _cloneauction_cloneauction_component__WEBPACK_IMPORTED_MODULE_24__["CloneauctionComponent"],
                _preregister_preregister_component__WEBPACK_IMPORTED_MODULE_25__["PreregisterComponent"],
                _registrationdetails_registrationdetails_component__WEBPACK_IMPORTED_MODULE_26__["RegistrationdetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_21__["NgxSpinnerModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_22__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_2__["appRoutes"])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_grabit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/grabit.service */ "./src/app/service/grabit.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(grabit, router) {
        this.grabit = grabit;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (!this.grabit.isLoggedIn()) {
            this.router.navigateByUrl('/login');
            this.grabit.deleteToken();
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_service_grabit_service__WEBPACK_IMPORTED_MODULE_1__["GrabitService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/bidlog/bidlog.component.css":
/*!*********************************************!*\
  !*** ./src/app/bidlog/bidlog.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/bidlog/bidlog.component.html":
/*!**********************************************!*\
  !*** ./src/app/bidlog/bidlog.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-flat\">\n    <div class=\"panel-heading\">\n        <h5 class=\"panel-title\">Bid Logs</h5>\n        <div class=\"heading-elements\">\n        </div>\n    </div>\n    <div class=\"panel-body\">\n        <div class=\"table-responsive\">\n            <table class=\"table table-bordered table-framed\">\n                <thead>\n                    <tr style=\"background-color:#273246;color:#ffffff;\">\n                        <th>Auction ID</th>\n                        <th>Product Name</th>\n                        <th>Amount</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor = \"let history of bidhistory\">\n                        <td>{{history.auctionid}}</td>\n                        <td>{{history.productname}}</td>\n                        <td>{{history.amount}}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>   "

/***/ }),

/***/ "./src/app/bidlog/bidlog.component.ts":
/*!********************************************!*\
  !*** ./src/app/bidlog/bidlog.component.ts ***!
  \********************************************/
/*! exports provided: BidlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BidlogComponent", function() { return BidlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_grabit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/grabit.service */ "./src/app/service/grabit.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BidlogComponent = /** @class */ (function () {
    function BidlogComponent(grabit) {
        this.grabit = grabit;
        this.bidhistory = [];
        this.bidlog();
        this.fetch_address();
    }
    BidlogComponent.prototype.fetch_address = function () {
        this.eth_address = this.grabit._etherumAccountAddress;
    };
    BidlogComponent.prototype.bidlog = function () {
        var _this = this;
        var instance = this;
        instance.grabit.event_Bidding().then(function (result) {
            result.forEach(function (element) {
                console.log(element["returnValues"]["bidder"] + " " + _this.eth_address);
                if (element["returnValues"]["bidder"] == _this.eth_address) {
                    instance.grabit.getAuctionById(element["returnValues"]['auctionID']).subscribe(function (res) {
                        var obj = {};
                        obj['auctionid'] = element["returnValues"]['auctionID'];
                        obj['productname'] = res["productname"];
                        obj['amount'] = element["returnValues"]['amount'];
                        _this.bidhistory.push(obj);
                    }, function (err) {
                    });
                }
            });
        });
    };
    BidlogComponent.prototype.ngOnInit = function () {
    };
    BidlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bidlog',
            template: __webpack_require__(/*! ./bidlog.component.html */ "./src/app/bidlog/bidlog.component.html"),
            styles: [__webpack_require__(/*! ./bidlog.component.css */ "./src/app/bidlog/bidlog.component.css")]
        }),
        __metadata("design:paramtypes", [_service_grabit_service__WEBPACK_IMPORTED_MODULE_1__["GrabitService"]])
    ], BidlogComponent);
    return BidlogComponent;
}());



/***/ }),

/***/ "./src/app/changeowner/changeowner.component.css":
/*!*******************************************************!*\
  !*** ./src/app/changeowner/changeowner.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-size{\n    font-size: 13px;\n    font-weight: bolder; \n }"

/***/ }),

/***/ "./src/app/changeowner/changeowner.component.html":
/*!********************************************************!*\
  !*** ./src/app/changeowner/changeowner.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-1\"></div>\n<div class=\"col-sm-10 auction\">\n   <div class=\"panel panel-default\" >\n      <div class=\"panel-heading text-size\" style=\"background-color: #273246;color: white\"><b>CHANGE OWNERSHIP</b></div>\n      <div class=\"panel-body\" style=\"text-align:center\">\n          <div class=\"row\">\n<div class=\"col-sm-2\">\n\n</div>\n<div class=\"col-sm-8\">\n   <form>\n       <div class=\"row\">\n\n                        <div class=\"col-sm-5\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-sm-12\">Current Owner</label>\n                                <div class=\"col-lg-12\">\n                                    <input type=\"text\"  class=\"form-control\" id=\"addr\" autocomplete=\"off\" readonly>\n                                </div>\n                              </div>                         \n                        </div>\n                        <div class=\"col-sm-2 icon\" >\n                           <i style=\"margin: 35px 0 35px 0;\" class=\"icon-transmission\"></i>\n                        </div>\n                        <div class=\"col-sm-5\">\n                            <div class=\"form-group\">\n                                <label class=\"control-label col-sm-12\">To Address</label>\n                                <div class=\"col-lg-12\">\n                                    <input type=\"text\" class=\"form-control\" id=\"toadd\" #address  placeholder=\"Enter To Address\">\n                                </div>\n                              </div>\n                     \n                        </div>\n             </div>\n           </form>\n             <div class=\"row\" style=\"text-align: center\">\n               <br><button (click)=\"transferOwnership(address.value)\" class=\"btn btn-success\" id=\"btn\">&nbsp;<i class=\"fas fa-sync-alt\"></i>&nbsp;&nbsp;Change Owner</button>\n             </div>\n             <br>\n             <p *ngIf=\"successful_message\" style=\"text-align: center;color: green;\">Ownership Transferred Successfully</p>\n             <p *ngIf=\"validation_error\" style=\"text-align: center;color: red;\">Please Try again with valid detail</p>\n             <p *ngIf=\"unableto_transfer\" style=\"text-align: center;color: red;\">Unable to Transfer</p>\n             <p *ngIf=\"accountaddress_error\" style=\"text-align: center;color: red;\">Enter account address correctly</p>\n\n</div>\n<div class=\"col-sm-2\"></div>\n\n\n\n          </div>\n\n   </div>\n   </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/changeowner/changeowner.component.ts":
/*!******************************************************!*\
  !*** ./src/app/changeowner/changeowner.component.ts ***!
  \******************************************************/
/*! exports provided: ChangeownerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeownerComponent", function() { return ChangeownerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_grabit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/grabit.service */ "./src/app/service/grabit.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _owner_owner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../owner/owner.component */ "./src/app/owner/owner.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChangeownerComponent = /** @class */ (function () {
    function ChangeownerComponent(grabit, route, owner) {
        this.grabit = grabit;
        this.route = route;
        this.owner = owner;
    }
    ChangeownerComponent.prototype.transferOwnership = function (toaddress) {
        var _this = this;
        this.successful_message = false;
        this.validation_error = false;
        this.unableto_transfer = false;
        this.accountaddress_error = false;
        if (toaddress.trim() != "") {
            var instance = this;
            instance.owner.spinner.show();
            instance.grabit.transferOwnership(toaddress.trim()).then(function (res) {
                instance.owner.spinner.hide();
                if (res == 0) {
                    instance.validation_error = true;
                }
                else if (res == 1) {
                    document.getElementById("toadd").value = "";
                    _this.successful_message = true;
                    _this.route.navigate(['/login']);
                }
                else if (res == 2) {
                    instance.unableto_transfer = true;
                }
            });
        }
        else {
            this.validation_error = true;
        }
    };
    ChangeownerComponent.prototype.ngOnInit = function () {
        document.getElementById("addr").value = this.grabit._etherumAccountAddress;
    };
    ChangeownerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-changeowner',
            template: __webpack_require__(/*! ./changeowner.component.html */ "./src/app/changeowner/changeowner.component.html"),
            styles: [__webpack_require__(/*! ./changeowner.component.css */ "./src/app/changeowner/changeowner.component.css")]
        }),
        __metadata("design:paramtypes", [_service_grabit_service__WEBPACK_IMPORTED_MODULE_1__["GrabitService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _owner_owner_component__WEBPACK_IMPORTED_MODULE_3__["OwnerComponent"]])
    ], ChangeownerComponent);
    return ChangeownerComponent;
}());



/***/ }),

/***/ "./src/app/cloneauction/cloneauction.component.css":
/*!*********************************************************!*\
  !*** ./src/app/cloneauction/cloneauction.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cloneauction/cloneauction.component.html":
/*!**********************************************************!*\
  !*** ./src/app/cloneauction/cloneauction.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"col-sm-9\">\n  <div class=\"panel panel-default \">\n      <h3 *ngIf=\"successful_message\"  style=\"color: green;text-align: center\">Auction Cloned successfully</h3>\n      <div class=\"panel-heading text-size\" style=\"background-color: #273246;color: white\">Reset Auction Details</div>\n      <div class=\"panel-body\">\n        <form class=\"form-horizontal\" action=\"#\">\n            <fieldset class=\"content-group\">     \n              <div class=\"form-group\">   \n                  <label class=\"control-label col-lg-2\">Product Name:</label>         \n                <div class=\"col-lg-10\">\n                  <div class=\"input-group\">\n                    <span class=\"input-group-addon\"><i class=\"icon-menu6\"></i></span>\n                    <input type=\"text\"   class=\"form-control\" id=\"productname\" #productname autocomplete=\"off\" readonly>\n                  </div>\n                </div>\n              </div> \n                <div class=\"form-group\">    \n                    <label class=\"control-label col-lg-2\">Registration Start Time:</label>          \n                    <div class=\"col-lg-10\">\n                      <div class=\"input-group\">\n                        <span class=\"input-group-addon\"><i  class=\"icon-calendar\"></i></span>\n                        <input type=\"datetime-local\" class=\"form-control\" id=\"regstarttime\" #rgstarttime autocomplete=\"off\" >\n                      </div>\n                    </div>\n                  </div>      \n                  <div class=\"form-group\">    \n                      <label class=\"control-label col-lg-2\">Registration End Time:</label>          \n                      <div class=\"col-lg-10\">\n                        <div class=\"input-group\">\n                          <span class=\"input-group-addon\"><i  class=\"icon-calendar\"></i></span>\n                          <input type=\"datetime-local\" class=\"form-control\" id=\"regstarttime\" #rgendtime autocomplete=\"off\" >\n                        </div>\n                      </div>\n                    </div>      \n              <div class=\"form-group\">    \n                  <label class=\"control-label col-lg-2\">Start Time:</label>          \n                  <div class=\"col-lg-10\">\n                    <div class=\"input-group\">\n                      <span class=\"input-group-addon\"><i  class=\"icon-calendar\"></i></span>\n                      <input type=\"datetime-local\" class=\"form-control\" id=\"bidstarttime\" #bdstarttime autocomplete=\"off\" >\n                    </div>\n                  </div>\n                </div>             \n                <div class=\"form-group\">  \n                    <label class=\"control-label col-lg-2\">End Time:</label>            \n                    <div class=\"col-lg-10\">\n                      <div class=\"input-group\">\n                        <span class=\"input-group-addon\"><i class=\"icon-calendar\"></i></span>\n                        <input type=\"datetime-local\" class=\"form-control\" id=\"bidendtime\" #bdendtime autocomplete=\"off\" >\n                      </div>\n                    </div>\n                  </div>     \n                  <div class=\"form-group\">\n                      <label class=\"control-label col-lg-2\">Base Price:</label>              \n                      <div class=\"col-lg-10\">\n                        <div class=\"input-group\">\n                          <span class=\"input-group-addon\"><small>(GRBT Tokens)</small>:</span>\n                          <input type=\"text\"  class=\"form-control\" id=\"baseprice\" #baseprice autocomplete=\"off\" readonly>\n                        </div>\n                      </div>\n                    </div> \n                    <!-- <br><p *ngIf=\"baseprice_error\" style=\"text-align: center;color: red\">Base price must be atleast {{least_baseprice}}</p> -->\n                    <div class=\"form-group\">   \n                        <label class=\"control-label col-lg-2\">Bid Increment:</label>           \n                        <div class=\"col-lg-10\">\n                          <div class=\"input-group\">\n                            <span class=\"input-group-addon\"><small>(GRBT Tokens)</small>:</span>\n                            <input type=\"text\"  class=\"form-control\" id=\"bidincrement\" #bidincrement autocomplete=\"off\" readonly>\n                          </div>\n                        </div>\n                      </div>\n                      <!-- <br><p *ngIf=\"bid_increment_error\" style=\"text-align: center;color: red\">Bid Increment must be Greater then atleast 1</p> -->\n                      <div class=\"form-group\">  \n                          <label class=\"control-label col-lg-2\"> Min Bid:</label>            \n                          <div class=\"col-lg-10\">\n                            <div class=\"input-group\">\n                              <span class=\"input-group-addon\"><small>(GRBT Tokens)</small>:</span>\n                              <input type=\"text\"  class=\"form-control\" id=\"minimumbid\" #minimumbid autocomplete=\"off\" readonly>\n                            </div>\n                          </div>\n                        </div> \n                        <!-- <br><p *ngIf=\"minimumbid_error\" style=\"text-align: center;color: red\">minimum bid must be greater or equal to bid increment</p> -->\n                        <div class=\"form-group\">  \n                            <label class=\"control-label col-lg-2\"> Min Bidders:</label>            \n                            <div class=\"col-lg-10\">\n                              <div class=\"input-group\">\n                                <span class=\"input-group-addon\"><small>(persons)</small>:</span>\n                                <input type=\"text\"  class=\"form-control\" id=\"minbidders\" #minbidders autocomplete=\"off\"  readonly>\n                              </div>\n                            </div>\n                          </div> \n                        <div class=\"form-group\">  \n                            <label class=\"control-label col-lg-2\">Reset Time:</label>            \n                            <div class=\"col-lg-10\">\n                              <div class=\"input-group\">\n                                <span class=\"input-group-addon\"><small>(in seconds)</small>:</span>\n                                <input type=\"text\"  class=\"form-control\" id=\"resettime\" #resettime autocomplete=\"off\" readonly>\n                              </div>\n                            </div>\n                          </div> \n                          <!-- <br><p *ngIf=\"reset_time_error\" style=\"text-align: center;color: red\">Reset time must be greater than 0</p> -->\n      \n                          <div class=\"text-center\">\n                              <br><button class=\"btn btn-success fonttransformation \" (click)=\"clone(productname.value,bdstarttime.value,bdendtime.value,rgstarttime.value,rgendtime.value)\">Create</button>\n                            </div>\n                            <p *ngIf=\"show_valid\" style=\"text-align: center;color: red\">* Enter valid details</p>\n                            <p *ngIf=\"show_revert_error\" style=\"text-align: center;color: red\">* Enter all details correctly</p>\n            </fieldset>\n        </form>    \n      </div>\n  </div>\n\n</div>\n<div class=\"col-sm-3\">\n    <div class=\"panel panel-default \">\n        <div class=\"panel-heading text-size\">DISPLAYED AUCTIONS</div>\n        <div class=\"panel-body\">\n          <form class=\"form-inline\">\n            <div class=\"form-group\" style=\"text-align: center\">           \n                <div class=\"table-responsive\">\n                    <table class=\"table table-bordered table-framed\">\n                        <thead class=\"tablecolor \">\n                            <tr>\n                              <th>Auction Id</th>\n                              <th>Auction Name</th>\n            \n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let element of selected_aid\">\n                              <td>{{ element.auctionId }}</td>\n                              <!-- <td></td> -->\n                              <td><button type=\"button\" class=\"btn btn-warning \" value=\"select\" (click)=\"setdetails(element.auctionId)\">{{ element.productname }}</button></td>\n                            </tr>\n                        </tbody>\n                    </table>\n            </div>\n            </div>\n          </form>\n        </div>\n      </div>\n      </div>\n\n</div>\n\n<ngx-spinner\n  bdColor=\"rgba(51,51,51,0.8)\"\n  size=\"medium\"\n  color=\"#fff\"\n  type=\"ball-scale-multiple\">\n <p style=\"font-size: 20px; color: white\">Loading...</p>\n</ngx-spinner>"

/***/ }),

/***/ "./src/app/cloneauction/cloneauction.component.ts":
/*!********************************************************!*\
  !*** ./src/app/cloneauction/cloneauction.component.ts ***!
  \********************************************************/
/*! exports provided: CloneauctionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloneauctionComponent", function() { return CloneauctionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_grabit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/grabit.service */ "./src/app/service/grabit.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CloneauctionComponent = /** @class */ (function () {
    function CloneauctionComponent(grabit, spin) {
        this.grabit = grabit;
        this.spin = spin;
        this.auction = [];
        this.selected_aid = [];
        this.table_data();
    }
    CloneauctionComponent.prototype.table_data = function () {
        var _this = this;
        var instance = this;
        instance.grabit.getauctiondetails().then(function (res) {
            res[0].forEach(function (auction_id) {
                _this.grabit.auctionDetails(auction_id + 1).then(function (result) {
                    if (result[6] == 1) {
                        _this.grabit.getAuctionById(auction_id + 1).subscribe(function (res) {
                            console.log(res['productname']);
                            var obj = {};
                            obj['auctionId'] = auction_id + 1;
                            obj['productname'] = res['productname'];
                            instance.selected_aid.push(obj);
                        });
                    }
                });
            });
        });
    };
    CloneauctionComponent.prototype.setdetails = function (a_id) {
        var _this = this;
        document.getElementById("productname").value = '';
        document.getElementById("baseprice").value = '';
        document.getElementById("bidincrement").value = '';
        document.getElementById("minimumbid").value = '';
        document.getElementById("resettime").value = '';
        document.getElementById("minbidders").value = '';
        this.grabit.auctionDetails(a_id).then(function (result) {
            _this.grabit.getAuctionById(a_id).subscribe(function (res) {
                console.log(res);
                _this.selected_hash = res['ipfshash'];
                _this.productid = a_id;
                document.getElementById("productname").value = res['productname'];
                document.getElementById("baseprice").value = result.basePrice;
                document.getElementById("bidincrement").value = result.bidIncrement;
                document.getElementById("minimumbid").value = result.bidBounds[0];
                document.getElementById("resettime").value = result.resetTime;
                document.getElementById("minbidders").value = result.bidBounds[1];
            });
        });
    };
    CloneauctionComponent.prototype.clone = function (productname, starttime, endtime, rgstarttime, rgendtime) {
        var instance = this;
        instance.successful_message = false;
        instance.show_revert_error = false;
        instance.show_valid = false;
        if (productname.trim() != '' && starttime.trim() != '' && endtime.trim() != '' && rgstarttime.trim() != '' && rgendtime.trim() != '') {
            instance.spin.show();
            var t = new Date(starttime).getTime() / 1000;
            var a = Math.round(t);
            var _starttime = parseInt(a);
            var t1 = new Date(endtime).getTime() / 1000;
            var a1 = Math.round(t1);
            var _endtime = parseInt(a1);
            var t3 = new Date(rgstarttime).getTime() / 1000;
            var c = Math.round(t3);
            var _reg_start = parseInt(c);
            var t4 = new Date(rgendtime).getTime() / 1000;
            var d = Math.round(t4);
            var _reg_end = parseInt(d);
            instance.grabit.cloneAuction(instance.productid, _starttime, _endtime, _reg_start, _reg_end).then(function (res) {
                instance.spin.hide();
                if (res == 1) {
                    instance.successful_message = true;
                    instance.grabit.upload(instance.selected_hash, productname);
                    document.getElementById("productname").value = "";
                    document.getElementById("starttime").value = "";
                    document.getElementById("endtime").value = "";
                    document.getElementById("baseprice").value = "";
                    document.getElementById("bidincrement").value = "";
                    document.getElementById("minimumbid").value = "";
                    document.getElementById("resettime").value = "";
                    document.getElementById("rgstarttime").value = "";
                    document.getElementById("rgendtime").value = "";
                    document.getElementById("minbidders").value = "";
                    return;
                }
                else if (res == 2) {
                    res;
                    console.log('Error...');
                    instance.show_revert_error = true;
                    // this.show_valid=true;
                }
                else {
                    // this.show_valid=true;
                }
            });
        }
        else {
            alert("Invalid details");
            instance.show_valid = true;
        }
    };
    CloneauctionComponent.prototype.ngOnInit = function () {
        // (document.getElementById('productid') as HTMLInputElement).value='5';
        // (document.getElementById('baseprice') as HTMLInputElement).value='5';
        // (document.getElementById('bidincrement') as HTMLInputElement).value='5';
        // (document.getElementById('minimumbid') as HTMLInputElement).value='5';
        // (document.getElementById('resettime') as HTMLInputElement).value='15';
        // (document.getElementById("minbidders")as HTMLInputElement).value="12";
    };
    CloneauctionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cloneauction',
            template: __webpack_require__(/*! ./cloneauction.component.html */ "./src/app/cloneauction/cloneauction.component.html"),
            styles: [__webpack_require__(/*! ./cloneauction.component.css */ "./src/app/cloneauction/cloneauction.component.css")]
        }),
        __metadata("design:paramtypes", [_service_grabit_service__WEBPACK_IMPORTED_MODULE_1__["GrabitService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"]])
    ], CloneauctionComponent);
    return CloneauctionComponent;
}());



/***/ }),

/***/ "./src/app/closedauction/closedauction.component.css":
/*!***********************************************************!*\
  !*** ./src/app/closedauction/closedauction.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auction-block {\n    background: #fff;\n    border: 1px solid #ddd;\n    border-radius: 5px;\n    overflow-y: hidden;\n }\n .bid-credit-row {\n    padding: 5px 15px;\n    margin: 0 0 8px;\n }\n .bid-credit-row2 {\n    padding: 5px 15px;\n    margin: 0 0 8px;\n    background-color: #ededed;\n }\n .bid-row {\n    background: #ededed;\n    padding: 8px 15px 15px;\n }\n .cf{\n    zoom:1;\n }\n .bid-status {\n    color: #f28a37;\n    font-size: 14px;\n    font-weight: 500;\n }\n .bid-status {\n    float: right;\n }\n .subhead{\n    color: orangered\n}\n a, u {\n    text-decoration: none;\n}\n .btn-warning{\n    background: #ff9948;\n    line-height: 44px;\n    padding: 0 20px;\n    width: 50%;\n    /* margin-left:100px; */\n    text-align: center\n }\n #last{\n    margin-right: -50px;\n }\n .heading {\n    text-align: center;\n}\n .heading h3{\n    padding: 0 12px;\n    position: relative;\n    display: inline-block;\n    line-height: 34px !important;\n}\n h3{\n    font-size: 38px;\n}\n"

/***/ }),

/***/ "./src/app/closedauction/closedauction.component.html":
/*!************************************************************!*\
  !*** ./src/app/closedauction/closedauction.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\"  style=\"height: 600px;text-align: center;text-transform: uppercase\" *ngIf=\"!this.grabit.imgshow\">\n    <div  *ngFor=\"let image of images\" >\n       <div class=\"col-sm-4\"  style=\"margin-top: 20px;margin-bottom: 75px;text-align: center;\">\n          <div class=\"row\">\n             <div class=\"col-sm-10\"  style=\"margin-top:25px\">\n                <div>\n                   <div class=\"card\" style=\"border: 1px solid #274356;background-color:white;padding:0 0 10px 0;\">\n                      <div class=\"card-header\">\n                         <h4>{{image.ProductName}}</h4>\n                      </div>\n                      <hr>\n                      <div class=\"card-body\">\n                          <span class=\"bid-price\">Required Bidders&nbsp;&nbsp;\n                        <label id=\"Price16720\" style=\"color: red\"> {{image.required}}</label>\n                    </span>&nbsp;&nbsp;&nbsp;\n                    <span class=\"bid-price\" >Registered Bidders&nbsp;&nbsp;\n                            <label id=\"Price16720\" style=\"color: blue;\"> {{image.registered}}</label>\n                        </span>\n                        <br>\n                        <span>Registration Amount&nbsp;&nbsp;\n                                <label id=\"Price16720\" style=\"color: green\">{{image.minimumbid}}&nbsp;&nbsp;<label style=\"color:black\">GRBT</label></label>\n                                </span>\n                            <h5 class=\"card-title\"><span class=\"subhead\">Base Price:</span> {{ image.Amount }} <span class=\"subhead\">GRBT</span></h5>\n                         <div class=\"card-body\" style=\"text-align: center\">\n                            <img   a (click)=\"zoom_product(image.ProductName,image.Amount,image.Url,image.Auction_Id,image.bidIncrement,image.Last_Bidded_amount,image.Bidder_name,image.resetTime)\" class=\"card-img-top\" src={{image.Url}} style=\"height: 250px;width: 250px\" alt=\"Card image cap\">\n                         </div>\n                         <div class=\"bid-credit-row\">\n                             <div class=\"row\">\n                                 <div class=\"col-sm-6\"> \n                                        <span class=\"auction-id\"><span class=\"subhead\">Auction ID:</span>{{image.Auction_Id}}</span>\n                                 </div>\n                                 <div class=\"col-sm-6\">\n                                        <span >{{image.Bidder_name}}</span>\n                                 </div>\n                             </div>\n                            \n                            <!-- <a class=\"bid-credit\" title=\"Number of Require Credits Per BID\">5x</a> -->\n                         </div>\n                         <p  *ngIf=\"image.status==0\"style=\"color: red\">Not Registered</p>\n                         <p  *ngIf=\"image.status==1\" style=\"color: green\">Registered</p>                  \n                                <div class=\"bid-credit-row2\">\n                            <span class=\"bid-price\"><span class=\"subhead\">Closed at :</span>\n                            <label id=\"Price16720\"> {{image.Last_Bidded_amount}} GRBT</label>\n                            </span>   \n                         </div>\n                         <hr>\n                         <div class=\"card-footer\">\n                                <button  class=\"btn btn-warning\" id=\"btn\" disabled>&nbsp;&nbsp;&nbsp;Closed</button>\n                             </div>\n                      </div>\n                   </div>\n                </div>\n             </div>\n             <div class=\"col-sm-2\"></div>\n          </div>\n       </div>\n    </div>\n </div>\n <div *ngIf=\"this.grabit.imgshow\">\n    <app-viewauction></app-viewauction>\n </div>\n "

/***/ }),

/***/ "./src/app/closedauction/closedauction.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/closedauction/closedauction.component.ts ***!
  \**********************************************************/
/*! exports provided: ClosedauctionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClosedauctionComponent", function() { return ClosedauctionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_grabit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/grabit.service */ "./src/app/service/grabit.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClosedauctionComponent = /** @class */ (function () {
    function ClosedauctionComponent(grabit) {
        this.grabit = grabit;
        this.images = [];
        this.closed_bids();
    }
    ClosedauctionComponent.prototype.closed_bids = function () {
        var _this = this;
        console.log('Displaying Closed Bids...');
        this.grabit.getauctiondetails().then(function (details) {
            details[0].forEach(function (a) {
                var i = a + 1;
                _this.grabit.auctionDetails(i).then(function (result) {
                    _this.grabit.currentTime().then(function (now) {
                        _this.grabit.lastBidderDetails(i).then(function (res) {
                            console.log(now + "    " + result['times'][1]);
                            if (now > result['times'][1]) {
                                _this.grabit.ispreregistered(i).then(function (state) {
                                    var data = {};
                                    data["status"] = state;
                                    data['required'] = result['bidBounds'][1];
                                    data['registered'] = result['bidBounds'][3];
                                    data['Auction_Id'] = details[1][a]['auctionid'];
                                    data['Url'] = 'https://ipfs.infura.io/ipfs/' + details[1][a]['ipfshash'];
                                    data['ProductName'] = details[1][a]['productname'];
                                    data['Amount'] = result['basePrice'];
                                    data["bidIncrement"] = result['bidIncrement'];
                                    data["resetTime"] = result['resetTime'];
                                    data['minimumbid'] = result['bidBounds'][0];
                                    if (res == 'No Bid Logs Found') {
                                        data['Last_Bidded_amount'] = 0;
                                        data['Bidder_name'] = 'No One';
                                    }
                                    else {
                                        data['Last_Bidded_amount'] = res['returnValues'].amount;
                                        _this.grabit.getUserName(res.returnValues.bidder).subscribe(function (username) {
                                            data['Bidder_name'] = username['fullName'];
                                        });
                                    }
                                    _this.images.push(data);
                                });
                            }
                        });
                    });
                });
            });
        });
    };
    ClosedauctionComponent.prototype.zoom_product = function (ProductName, Amount, Url, Auction_Id, bidIncrement, last_Bidded_amount, Bidder_name, resetTime) {
        var obj = {};
        obj["ProductName"] = ProductName;
        obj["Amount"] = Amount;
        obj["Url"] = Url;
        obj["Auction_Id"] = Auction_Id;
        obj["bidIncrement"] = bidIncrement;
        obj["last_Bidded_amount"] = last_Bidded_amount;
        obj["Bidder_name"] = Bidder_name;
        obj["resetTime"] = resetTime;
        this.grabit.prod_zoom = obj;
        this.grabit.imgshow = !this.grabit.imgshow;
    };
    ClosedauctionComponent.prototype.ngOnInit = function () {
    };
    ClosedauctionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-closedauction',
            template: __webpack_require__(/*! ./closedauction.component.html */ "./src/app/closedauction/closedauction.component.html"),
            styles: [__webpack_require__(/*! ./closedauction.component.css */ "./src/app/closedauction/closedauction.component.css")]
        }),
        __metadata("design:paramtypes", [_service_grabit_service__WEBPACK_IMPORTED_MODULE_1__["GrabitService"]])
    ], ClosedauctionComponent);
    return ClosedauctionComponent;
}());



/***/ }),

/***/ "./src/app/create-auction/create-auction.component.css":
/*!*************************************************************!*\
  !*** ./src/app/create-auction/create-auction.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .auction-block {\n    background: #fff;\n    border: 1px solid #ddd;\n    border-radius: 5px;\n    overflow: hidden;\n }\n .auction{\n    background:#fff;\n    border:1px solid #ddd;\n    border-radius:5px;\n    overflow:hidden;\n }\n .panel{\n    border:1px solid #e67e22;\n    margin-top: 50px;\n }\n .panel-heading{\n    background-color:#e67e22;\n }\n */\n .text-size{\n    font-size: 13px;\n    font-weight: bolder; \n }\n .tablecolor{\n    background-color: #273246;\n    color: white;\n }\n .trhighlighting:hover{\n    background-color: bisque\n }"

/***/ }),

/***/ "./src/app/create-auction/create-auction.component.html":
/*!**************************************************************!*\
  !*** ./src/app/create-auction/create-auction.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive col-sm-4\" style=\"overflow: auto;max-height:800px;text-align: center\">\n  <p style=\"text-transform: uppercase;font-size:12px;\">If you want to clone an auction. please click on one of the auction listed below.</p>\n  <table class=\"table table-bordered table-framed\">\n      <thead class=\"tablecolor \">\n          <tr>\n            <th>Auction Id</th>\n            <th>Auction Name</th>\n\n          </tr>\n      </thead>\n      <tbody>\n          <tr class=\"trhighlighting\" *ngFor=\"let element of selected_aid\">\n            <td>{{ element.auctionId }}</td>\n            <!-- <td></td> -->\n            <td><button type=\"button\" class=\"btn btn-warning \" value=\"select\" (click)=\"setdetails(element.auctionId)\">{{ element.productname }}</button></td>\n          </tr>\n      </tbody>\n  </table>\n</div>\n\n<div class=\"col-sm-8  auction\">\n<div class=\"panel panel-default \">\n    <h3 *ngIf=\"successful_message\"  style=\"color: green;text-align: center\">Auction created successfully</h3>\n   <div class=\"panel-heading text-size tablecolor\" >ENTER AUCTION DETAILS</div>\n   <div class=\"panel-body\">\n      <form class=\"form-horizontal\" action=\"#\">\n          <fieldset class=\"content-group\">          \n            <div class=\"form-group\">   \n                <label class=\"control-label col-lg-2\">Product Name:</label>         \n              <div class=\"col-lg-10\">\n                <div class=\"input-group\">\n                  <span class=\"input-group-addon\"><i class=\"icon-menu6\"></i></span>\n                  <input type=\"text\"   class=\"form-control\" id=\"productname\" #productname autocomplete=\"off\" >\n                </div>\n              </div>\n            </div> \n            <div class=\"form-group\" id=\"fileInputbox\">\n                <label class=\"control-label col-lg-2\">Choose an image</label>\n                <div class=\"col-lg-10\">\n                    <input type=\"file\" class=\"form-control\" id=\"fileInput\" (change)=\"onFileChanged($event)\" accept=\"images/png\">               \n                </div>\n              </div>\n              <div class=\"form-group\">    \n                  <label class=\"control-label col-lg-2\">Registration Start Time:</label>          \n                  <div class=\"col-lg-10\">\n                    <div class=\"input-group\">\n                      <span class=\"input-group-addon\"><i  class=\"icon-calendar\"></i></span>\n                      <input type=\"datetime-local\" class=\"form-control\" id=\"regstarttime\" #rgstarttime autocomplete=\"off\" >\n                    </div>\n                  </div>\n                </div>      \n                <div class=\"form-group\">    \n                    <label class=\"control-label col-lg-2\">Registration End Time:</label>          \n                    <div class=\"col-lg-10\">\n                      <div class=\"input-group\">\n                        <span class=\"input-group-addon\"><i  class=\"icon-calendar\"></i></span>\n                        <input type=\"datetime-local\" class=\"form-control\" id=\"regendtime\" #rgendtime autocomplete=\"off\" >\n                      </div>\n                    </div>\n                  </div>      \n            <div class=\"form-group\">    \n                <label class=\"control-label col-lg-2\">Start Time:</label>          \n                <div class=\"col-lg-10\">\n                  <div class=\"input-group\">\n                    <span class=\"input-group-addon\"><i  class=\"icon-calendar\"></i></span>\n                    <input type=\"datetime-local\" class=\"form-control\" id=\"starttime\" #starttime autocomplete=\"off\" >\n                  </div>\n                </div>\n              </div>             \n              <div class=\"form-group\">  \n                  <label class=\"control-label col-lg-2\">End Time:</label>            \n                  <div class=\"col-lg-10\">\n                    <div class=\"input-group\">\n                      <span class=\"input-group-addon\"><i class=\"icon-calendar\"></i></span>\n                      <input type=\"datetime-local\" class=\"form-control\" id=\"endtime\" #endtime autocomplete=\"off\" >\n                    </div>\n                  </div>\n                </div>     \n                <div class=\"form-group\">\n                    <label class=\"control-label col-lg-2\">Base Price:</label>              \n                    <div class=\"col-lg-10\">\n                      <div class=\"input-group\">\n                        <span class=\"input-group-addon\"><small>(GRBT Tokens)</small>:</span>\n                        <input type=\"text\"  class=\"form-control\" id=\"baseprice\" #baseprice autocomplete=\"off\" >\n                      </div>\n                    </div>\n                  </div> \n                  <br><p *ngIf=\"baseprice_error\" style=\"text-align: center;color: red\">Base price must be atleast {{least_baseprice}}</p>\n                  <div class=\"form-group\">   \n                      <label class=\"control-label col-lg-2\">Bid Increment:</label>           \n                      <div class=\"col-lg-10\">\n                        <div class=\"input-group\">\n                          <span class=\"input-group-addon\"><small>(GRBT Tokens)</small>:</span>\n                          <input type=\"text\"  class=\"form-control\" id=\"bidincrement\" #bidincrement autocomplete=\"off\" >\n                        </div>\n                      </div>\n                    </div>\n                    <br><p *ngIf=\"bid_increment_error\" style=\"text-align: center;color: red\">Bid Increment must be Greater then atleast 1</p>\n                    <div class=\"form-group\">  \n                        <label class=\"control-label col-lg-2\"> Min Bid:</label>            \n                        <div class=\"col-lg-10\">\n                          <div class=\"input-group\">\n                            <span class=\"input-group-addon\"><small>(GRBT Tokens)</small>:</span>\n                            <input type=\"text\"  class=\"form-control\" id=\"minimumbid\" #minimumbid autocomplete=\"off\" >\n                          </div>\n                        </div>\n                      </div> \n                      <div class=\"form-group\">  \n                          <label class=\"control-label col-lg-2\"> Min Bidders:</label>            \n                          <div class=\"col-lg-10\">\n                            <div class=\"input-group\">\n                              <span class=\"input-group-addon\"><small>(Persons)</small>:</span>\n                              <input type=\"text\"  class=\"form-control\" id=\"minimumbidders\" #minbidders autocomplete=\"off\" >\n                            </div>\n                          </div>\n                        </div> \n                      <br><p *ngIf=\"minimumbid_error\" style=\"text-align: center;color: red\">minimum bid must be greater or equal to bid increment</p>\n                      <div class=\"form-group\">  \n                          <label class=\"control-label col-lg-2\">Reset Time:</label>            \n                          <div class=\"col-lg-10\">\n                            <div class=\"input-group\">\n                              <span class=\"input-group-addon\"><small>(in seconds)</small>:</span>\n                              <input type=\"text\"  class=\"form-control\" id=\"resettime\" #resettime autocomplete=\"off\" >\n                            </div>\n                          </div>\n                        </div> \n                        <br><p *ngIf=\"reset_time_error\" style=\"text-align: center;color: red\">Reset time must be greater than 0</p>\n    \n                        <div class=\"text-center\" id=\"newbidbtn\">\n                            <br><button  class=\"btn btn-success fonttransformation \" (click)=\"upload(productname.value,starttime.value,endtime.value,baseprice.value,bidincrement.value,minimumbid.value,resettime.value,rgstarttime.value,rgendtime.value,minbidders.value)\">Create</button>\n                            &nbsp;&nbsp;&nbsp;&nbsp;<button  class=\"btn btn-default fonttransformation \" (click)=\"feildClear(0)\">Clear</button>\n                          </div>\n                          <div class=\"text-center\" id=\"clonebidbtn\">\n                            \n                            <br><button  class=\"btn btn-success fonttransformation \" (click)=\"clone(productname.value,starttime.value,endtime.value,rgstarttime.value,rgendtime.value)\">Clone</button>\n                            &nbsp;&nbsp;&nbsp;&nbsp;<button  class=\"btn btn-default fonttransformation \" (click)=\"feildClear(1)\">Clear</button>\n                          </div>\n                          <p *ngIf=\"show_valid\" style=\"text-align: center;color: red\">* Enter valid details</p>\n                          <p *ngIf=\"show_revert_error\" style=\"text-align: center;color: red\">* Enter all details correctly</p>\n          </fieldset>\n      </form>    \n   </div>\n</div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/create-auction/create-auction.component.ts":
/*!************************************************************!*\
  !*** ./src/app/create-auction/create-auction.component.ts ***!
  \************************************************************/
/*! exports provided: CreateAuctionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAuctionComponent", function() { return CreateAuctionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_grabit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/grabit.service */ "./src/app/service/grabit.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _owner_owner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../owner/owner.component */ "./src/app/owner/owner.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateAuctionComponent = /** @class */ (function () {
    function CreateAuctionComponent(grab, owner, http) {
        this.grab = grab;
        this.owner = owner;
        this.http = http;
        this.auction = [];
        this.selected_aid = [];
        // public successful_message:boolean;
        // public show_valid:boolean;
        // public show_revert_error:boolean;
        this.fd = new FormData();
        this.show_revert_error = false;
        this.show_valid = false;
        this.baseprice_error = false;
        this.reset_time_error = false;
        this.successful_message = false;
        this.bid_increment_error = false;
    }
    CreateAuctionComponent.prototype.onFileChanged = function (event) {
        this.selectedFile = event.target.files[0];
    };
    CreateAuctionComponent.prototype.upload = function (productname, start, end, base_price, bid_increment, minimum_bid, reset_time, reg_start, reg_end, minimum_bidders) {
        var _this = this;
        var ins = this;
        ins.successful_message = false;
        ins.show_revert_error = false;
        ins.show_valid = false;
        ins.baseprice_error = false;
        ins.reset_time_error = false;
        ins.minimumbid_error = false;
        ins.bid_increment_error = false;
        if (productname.trim() != "" && reg_start.trim() != "" && reg_end.trim() != "" && start.trim() != "" && end.trim() != "" && base_price.trim() != "" && bid_increment.trim() != "" && minimum_bid.trim() != "" && reset_time.trim() != "" && minimum_bidders.trim() != "") {
            if (Number(minimum_bid) < Number(bid_increment)) {
                ins.minimumbid_error = true;
                // alert("minimum bid must be greater or equal to bid increment")
                return;
            }
            if (Number(base_price) < Number(minimum_bid) + (Number(bid_increment) - (Number(minimum_bid) % Number(bid_increment)))) {
                ins.baseprice_error = true;
                ins.least_baseprice = Number(minimum_bid) + Number(bid_increment - (minimum_bid % bid_increment));
                // alert("Base price must be atleast"+f+"")
                return;
            }
            if (Number(reset_time) <= 0) {
                ins.reset_time_error = true;
                // alert("Reset time must be greater than 0");
                return;
            }
            if (Number(bid_increment <= 0)) {
                ins.bid_increment_error = true;
                return;
            }
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            var fd = new FormData();
            headers.append('Content-Type', 'application/form-data');
            fd.append('path', ins.selectedFile);
            this.http.post("https://ipfs.infura.io:5001/api/v0/add?stream-channels=true", fd).subscribe(function (r) {
                var t = new Date(start).getTime() / 1000;
                var a = Math.round(t);
                var _starttime = parseInt(a);
                var t1 = new Date(end).getTime() / 1000;
                var a1 = Math.round(t1);
                var _endtime = parseInt(a1);
                var t3 = new Date(reg_start).getTime() / 1000;
                var c = Math.round(t3);
                var _reg_start = parseInt(c);
                var t4 = new Date(reg_end).getTime() / 1000;
                var d = Math.round(t4);
                var _reg_end = parseInt(d);
                ins.owner.spinner.show();
                console.log(_reg_start + " " + _reg_end + " " + _starttime + " " + _endtime);
                ins.grab.createAuction(_starttime, _endtime, base_price, bid_increment, minimum_bid, reset_time, _reg_start, _reg_end, minimum_bidders).then(function (res) {
                    console.log("createAuction", res);
                    ins.owner.spinner.hide();
                    if (res == 1) {
                        res = 0;
                        ins.grab.upload(r["Hash"], productname);
                        ins.successful_message = true;
                        document.getElementById("productname").value = "";
                        document.getElementById("regstarttime").value = "";
                        document.getElementById("regendtime").value = "";
                        document.getElementById("starttime").value = "";
                        document.getElementById("endtime").value = "";
                        document.getElementById("baseprice").value = "";
                        document.getElementById("bidincrement").value = "";
                        document.getElementById("minimumbid").value = "";
                        document.getElementById("resettime").value = "";
                        document.getElementById("minimumbidders").value = "";
                        document.getElementById("fileInput").value = "";
                        return;
                    }
                    else if (res == 2) {
                        res;
                        console.log('Error...');
                        _this.show_valid = true;
                    }
                    else {
                        _this.show_valid = true;
                    }
                });
            });
        }
        else {
            this.show_revert_error = true;
        }
    };
    CreateAuctionComponent.prototype.table_data = function () {
        var _this = this;
        var instance = this;
        instance.grab.getauctiondetails().then(function (ress) {
            console.log("res", ress);
            ress[0].forEach(function (auction_id) {
                var aid = auction_id + 1;
                _this.grab.canClone(aid).then(function (clonable) {
                    console.log("clonable", clonable);
                    if (clonable == true) {
                        _this.grab.auctionDetails(aid).then(function (auctionfinalize) {
                            if (auctionfinalize["status"] == 1) {
                                _this.grab.getAuctionById(aid).subscribe(function (res) {
                                    console.log(res['productname']);
                                    var obj = {};
                                    obj['auctionId'] = aid;
                                    obj['productname'] = res['productname'];
                                    instance.selected_aid.push(obj);
                                });
                            }
                        });
                    }
                });
            });
        });
    };
    CreateAuctionComponent.prototype.setdetails = function (a_id) {
        var _this = this;
        document.getElementById("productname").value = "";
        document.getElementById("regstarttime").value = "";
        document.getElementById("regendtime").value = "";
        document.getElementById("starttime").value = "";
        document.getElementById("endtime").value = "";
        document.getElementById("baseprice").value = "";
        document.getElementById("bidincrement").value = "";
        document.getElementById("minimumbid").value = "";
        document.getElementById("resettime").value = "";
        document.getElementById("minimumbidders").value = "";
        document.getElementById("fileInput").value = "";
        this.grab.auctionDetails(a_id).then(function (result) {
            _this.grab.getAuctionById(a_id).subscribe(function (res) {
                console.log(res);
                _this.selected_hash = res['ipfshash'];
                _this.productid = a_id;
                document.getElementById("productname").value = res['productname'];
                document.getElementById("baseprice").value = result.basePrice;
                document.getElementById("bidincrement").value = result.bidIncrement;
                document.getElementById("minimumbid").value = result.bidBounds[0];
                document.getElementById("resettime").value = result.resetTime;
                document.getElementById("minimumbidders").value = result.bidBounds[1];
                document.getElementById("productname").readOnly = true;
                document.getElementById("baseprice").readOnly = true;
                document.getElementById("bidincrement").readOnly = true;
                document.getElementById("minimumbid").readOnly = true;
                document.getElementById("resettime").readOnly = true;
                document.getElementById("minimumbidders").readOnly = true;
                document.getElementById("clonebidbtn").style.display = "block";
                document.getElementById("newbidbtn").style.display = "none";
                document.getElementById("fileInputbox").style.display = "none";
            });
        });
    };
    CreateAuctionComponent.prototype.clone = function (productname, starttime, endtime, rgstarttime, rgendtime) {
        var instance = this;
        instance.successful_message = false;
        instance.show_revert_error = false;
        instance.show_valid = false;
        if (productname.trim() != '' && starttime.trim() != '' && endtime.trim() != '' && rgstarttime.trim() != '' && rgendtime.trim() != '') {
            instance.owner.spinner.show();
            var t = new Date(starttime).getTime() / 1000;
            var a = Math.round(t);
            var _starttime = parseInt(a);
            var t1 = new Date(endtime).getTime() / 1000;
            var a1 = Math.round(t1);
            var _endtime = parseInt(a1);
            var t3 = new Date(rgstarttime).getTime() / 1000;
            var c = Math.round(t3);
            var _reg_start = parseInt(c);
            var t4 = new Date(rgendtime).getTime() / 1000;
            var d = Math.round(t4);
            var _reg_end = parseInt(d);
            instance.grab.cloneAuction(instance.productid, _starttime, _endtime, _reg_start, _reg_end).then(function (res) {
                instance.owner.spinner.hide();
                if (res == 1) {
                    instance.successful_message = true;
                    instance.table_data();
                    instance.grab.upload(instance.selected_hash, productname);
                    document.getElementById("productname").value = "";
                    document.getElementById("starttime").value = "";
                    document.getElementById("endtime").value = "";
                    document.getElementById("baseprice").value = "";
                    document.getElementById("bidincrement").value = "";
                    document.getElementById("minimumbid").value = "";
                    document.getElementById("resettime").value = "";
                    document.getElementById("regstarttime").value = "";
                    document.getElementById("regendtime").value = "";
                    document.getElementById("minimumbidders").value = "";
                    document.getElementById("productname").readOnly = false;
                    document.getElementById("baseprice").readOnly = false;
                    document.getElementById("bidincrement").readOnly = false;
                    document.getElementById("minimumbid").readOnly = false;
                    document.getElementById("resettime").readOnly = false;
                    document.getElementById("minimumbidders").readOnly = false;
                    document.getElementById("clonebidbtn").style.display = "none";
                    document.getElementById("newbidbtn").style.display = "block";
                    document.getElementById("fileInputbox").style.display = "block";
                    return;
                }
                else if (res == 2) {
                    res;
                    console.log('Error...');
                    instance.show_revert_error = true;
                    // this.show_valid=true;
                }
                else {
                    // this.show_valid=true;
                }
            });
        }
        else {
            alert("Invalid details");
            instance.show_valid = true;
        }
    };
    CreateAuctionComponent.prototype.feildClear = function (num) {
        document.getElementById("productname").value = "";
        document.getElementById("regstarttime").value = "";
        document.getElementById("regendtime").value = "";
        document.getElementById("starttime").value = "";
        document.getElementById("endtime").value = "";
        document.getElementById("baseprice").value = "";
        document.getElementById("bidincrement").value = "";
        document.getElementById("minimumbid").value = "";
        document.getElementById("resettime").value = "";
        document.getElementById("minimumbidders").value = "";
        document.getElementById("fileInput").value = "";
        if (num == 1) {
            document.getElementById("productname").readOnly = false;
            document.getElementById("baseprice").readOnly = false;
            document.getElementById("bidincrement").readOnly = false;
            document.getElementById("minimumbid").readOnly = false;
            document.getElementById("resettime").readOnly = false;
            document.getElementById("minimumbidders").readOnly = false;
            document.getElementById("clonebidbtn").style.display = "none";
            document.getElementById("newbidbtn").style.display = "block";
            document.getElementById("fileInputbox").style.display = "block";
        }
    };
    CreateAuctionComponent.prototype.ngOnInit = function () {
        document.getElementById("clonebidbtn").style.display = "none";
        this.table_data();
    };
    CreateAuctionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-auction',
            template: __webpack_require__(/*! ./create-auction.component.html */ "./src/app/create-auction/create-auction.component.html"),
            styles: [__webpack_require__(/*! ./create-auction.component.css */ "./src/app/create-auction/create-auction.component.css")]
        }),
        __metadata("design:paramtypes", [_service_grabit_service__WEBPACK_IMPORTED_MODULE_1__["GrabitService"], _owner_owner_component__WEBPACK_IMPORTED_MODULE_3__["OwnerComponent"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CreateAuctionComponent);
    return CreateAuctionComponent;
}());



/***/ }),

/***/ "./src/app/liveauction/liveauction.component.css":
/*!*******************************************************!*\
  !*** ./src/app/liveauction/liveauction.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn{\n    background-color:#274356;\n    color:#ffffff\n }\n .btn:hover{\n    background-color:#66bb8a;\n }"

/***/ }),

/***/ "./src/app/liveauction/liveauction.component.html":
/*!********************************************************!*\
  !*** ./src/app/liveauction/liveauction.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" style=\"height: 600px;text-align: center;text-transform: uppercase\" *ngIf=\"!this.grabit.imgshow\">\n    <p *ngIf=\"successful_message\" style=\"text-align: center;color: green\">Your Bid for Auction {{current_auctionId }} was recorded successfully</p>\n    <p *ngIf=\"not_successful_error\" style=\"text-align: center;color: red\">Your Bid for Auction {{current_auctionId }} was not successfully placed</p>\n    <p *ngIf=\"last_bidder_message\" style=\"text-align: center;color: blue\">You are currently the last Bidder for Auction {{current_auctionId}}</p> \n    <p *ngIf=\"basePrice_reached\" style=\"text-align: center;color: red\"> Bid {{current_auctionId}} exceeding the Base Price.</p>\n    <div  *ngFor=\"let i of images\" >\n       <div class=\"col-sm-4\"  style=\"margin-top: 20px;margin-bottom: 75px;text-align: center;\">\n            <div class=\"row\">\n                 <div class=\"col-sm-10\"  style=\"margin-top:25px\">\n                    <div>\n                        <div class=\"card\" style=\"border: 1px solid #274356;background-color:white;padding:0 0 10px 0;\">\n                            <div class=\"card-header\">\n                                <h4>{{i.ProductName}}</h4>\n                            </div>\n                            <hr>\n                            <div class=\"card-body\">\n                                <span class=\"bid-price\">Required Bidders&nbsp;&nbsp;\n                                        <label id=\"Price16720\" style=\"color: red\"> {{i.required}}</label>\n                                    </span>&nbsp;&nbsp;&nbsp;\n                                    <span class=\"bid-price\" >Registered Bidders&nbsp;&nbsp;\n                                            <label id=\"Price16720\" style=\"color: blue;\"> {{i.registered}}</label>\n                                        </span>\n                                        <br>\n                                        <span>Registration Amount&nbsp;&nbsp;\n                                                <label id=\"Price16720\" style=\"color: green\">{{i.minimumbid}}&nbsp;&nbsp;<label style=\"color:black\">GRBT</label></label>\n                                                </span>\n                                <h5 class=\"card-title\"><span class=\"subhead\"> Base Price:</span>{{ i.Amount }} GRBT</h5>\n                                <div class=\"card-body\" style=\"text-align: center;\">\n                                    <img  a (click)=\"zoom_product(i.ProductName,i.Amount,i.Url,i.Auction_Id,i.bidIncrement,i.last_Bidded_amount,i.Bidder_name,i.buttonbid,i.resetTime,i.datedata,i.timeshow)\" class=\"card-img-top\" src={{i.Url}} style=\"height: 250px;width: 250px\" alt=\"Card image cap\">\n                                </div>\n                                <div class=\"bid-credit-row\">\n                                    <div class=\"row\">\n                                        <div class=\"col-sm-6\">\n                                            <span class=\"auction-id\" ><span class=\"subhead\">Auction ID:</span>{{i.Auction_Id}}</span>\n                                        </div>\n                                        <div class=\"col-sm-6\">\n                                            <a class=\"bid-credit\" title=\"Bid Type\">{{i.bidIncrement}}X</a>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"bid-row cf\">                                   \n                                    <span class=\"bid-price\" style=\"font-weight: bold\">GRBT:\n                                            <label id=\"Price16720\"> {{i.last_Bidded_amount}}</label>\n                                        </span>\n                                    <div class=\"bid-status\">\n                                        <div id=\"dvzoom16720\"  *ngIf=\"!i.timeshow\">\n                                            {{hour_shower[i.Auction_Id]|number:'2.0'}}:{{min_shower[i.Auction_Id]|number:'2.0'}}:{{sec_shower[i.Auction_Id]|number:'2.0'}}\n                                        </div>\n                                        <div *ngIf=\"i.timeshow\">\n                                            {{i.datedata}}\n                                        </div>\n                                        <span class=\"bidder-name\">\n                                            <label id=\"UserName16720\">{{i.Bidder_name}}</label>\n                                        </span>\n                                    </div>\n                                </div>\n                                <hr>\n                                <div class=\"card-footer\">\n                                    <button *ngIf=\"i.status==1 && i.registered >=i.required \" (click)=\"manualBidding(i.Auction_Id)\" class=\"btn \" id=\"{{i.buttonbid}}\">&nbsp;&nbsp;&nbsp;BID {{i.buttonbid}} GRBT</button>                            \n                                    <p *ngIf=\"i.status==0\" style=\"color: red\">Not Registered</p>\n                                    <p *ngIf=\"i.status==1 && i.registered < i.required \" style=\"color: green\">Registered</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-2\"></div>\n            </div>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"this.grabit.imgshow\">\n    <app-viewauction></app-viewauction>\n</div>\n "

/***/ }),

/***/ "./src/app/liveauction/liveauction.component.ts":
/*!******************************************************!*\
  !*** ./src/app/liveauction/liveauction.component.ts ***!
  \******************************************************/
/*! exports provided: LiveauctionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveauctionComponent", function() { return LiveauctionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_grabit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/grabit.service */ "./src/app/service/grabit.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/user.component */ "./src/app/user/user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LiveauctionComponent = /** @class */ (function () {
    function LiveauctionComponent(grabit, user, route) {
        this.grabit = grabit;
        this.user = user;
        this.route = route;
        this.images = [];
        this.sec_shower = [];
        this.min_shower = [];
        this.hour_shower = [];
        this.live_bids();
    }
    LiveauctionComponent.prototype.expiry_timer = function (auctionid, arr_index) {
        var meta = this;
        meta.grabit.lastBidderDetails(auctionid).then(function (lastbid) {
            meta.grabit.auctionDetails(auctionid).then(function (auc_det) {
                meta.grabit.currentTime().then(function (now_time) {
                    var timeLeft = Number(auc_det[0][1]) - Number(now_time);
                    meta.sec_shower[auctionid] = timeLeft % 60;
                    var min_str = (timeLeft / 60).toString();
                    var min = min_str.split(".");
                    var minutes = Number(min[0]);
                    meta.min_shower[auctionid] = minutes % 60;
                    var hours_str = (timeLeft / 3600).toString();
                    var hours = hours_str.split(".");
                    meta.hour_shower[auctionid] = Number(hours[0]);
                    var checker = lastbid;
                    if (typeof (lastbid) == typeof ("string")) {
                        checker = "";
                    }
                    else {
                        checker = lastbid.returnValues.bidder;
                    }
                    var looper = setInterval(function () {
                        meta.grabit.lastBidderDetails(auctionid).then(function (newbid) {
                            if (newbid.returnValues !== undefined) {
                                if (checker != newbid.returnValues.bidder) {
                                    meta.grabit.getUserName(newbid.returnValues.bidder).subscribe(function (username) {
                                        meta.images[arr_index]['Bidder_name'] = username['fullName'];
                                        meta.images[arr_index]['last_Bidded_amount'] = newbid['returnValues'].amount;
                                        meta.images[arr_index]['buttonbid'] = Number(auc_det['bidIncrement']) + Number(newbid['returnValues'].amount);
                                        checker = newbid.returnValues.bidder;
                                        clearInterval(looper);
                                        meta.expiry_timer(auctionid, arr_index);
                                    });
                                }
                            }
                        });
                        if (meta.hour_shower[auctionid] == 0 && meta.min_shower[auctionid] == 0 && meta.sec_shower[auctionid] == 0) {
                            meta.images[arr_index]['buttonbid'] = 0;
                            // (document.getElementById(meta.images[arr_index]['buttonbid']) as HTMLButtonElement).value='Closed';
                            // (document.getElementById(meta.images[arr_index]['buttonbid']) as HTMLButtonElement).disabled=true;
                            clearInterval(looper);
                        }
                        if (meta.sec_shower[auctionid] != 0) {
                            meta.sec_shower[auctionid]--;
                        }
                        else {
                            if (meta.hour_shower[auctionid] != 0 || meta.min_shower[auctionid] != 0) {
                                meta.sec_shower[auctionid] = 59;
                                if (meta.min_shower[auctionid] != 0) {
                                    meta.min_shower[auctionid]--;
                                }
                                else {
                                    if (meta.hour_shower[auctionid] != 0) {
                                        meta.min_shower[auctionid] = 59;
                                        meta.hour_shower[auctionid]--;
                                    }
                                    else {
                                    }
                                }
                            }
                        }
                    }, 1000);
                });
            });
        });
    };
    LiveauctionComponent.prototype.live_bids = function () {
        var _this = this;
        console.log('Displaying Live Bids...');
        this.grabit.getauctiondetails().then(function (details) {
            details[0].forEach(function (a) {
                var i = a + 1;
                _this.grabit.auctionDetails(i).then(function (result) {
                    _this.grabit.lastBidderDetails(i).then(function (res) {
                        _this.grabit.currentTime().then(function (now) {
                            if ((now >= result['times'][0]) && (now < result['times'][1])) {
                                _this.grabit.ispreregistered(i).then(function (state) {
                                    var data = {};
                                    data['Auction_Id'] = details[1][a]['auctionid'];
                                    data['Url'] = 'https://ipfs.infura.io/ipfs/' + details[1][a]['ipfshash'];
                                    data['ProductName'] = details[1][a]['productname'];
                                    data['Amount'] = result['basePrice'];
                                    data['resetTime'] = result['resetTime'];
                                    data['bidIncrement'] = result['bidIncrement'];
                                    data['status'] = state;
                                    data['required'] = result['bidBounds'][1];
                                    data['registered'] = result['bidBounds'][3];
                                    data['minimumbid'] = result['bidBounds'][0];
                                    if (res == 'No Bid Logs Found') {
                                        data['last_Bidded_amount'] = 0;
                                        data['buttonbid'] = Number(result['bidIncrement']) + Number(result['bidBounds'][0]);
                                    }
                                    else {
                                        data['last_Bidded_amount'] = res['returnValues'].amount;
                                        data['buttonbid'] = Number(result['bidIncrement']) + Number(res['returnValues'].amount);
                                        _this.grabit.getUserName(res.returnValues.bidder).subscribe(function (username) {
                                            data['Bidder_name'] = username['fullName'];
                                        });
                                    }
                                    if (86400 < Number(result['times'][1]) - Number(now)) {
                                        data['timeshow'] = true;
                                        data['datedata'] = ((Number(result['times'][1]) - Number(now)) / 86400).toString().split(".")[0] + " Day to Expire";
                                    }
                                    _this.expiry_timer(i, _this.images.length);
                                    _this.images.push(data);
                                });
                            }
                        });
                    });
                });
            });
        });
    };
    LiveauctionComponent.prototype.zoom_product = function (ProductName, Amount, Url, Auction_Id, bidIncrement, last_Bidded_amount, Bidder_name, buttonbid, resetTime, datedata, timeshow) {
        var obj = {};
        obj["ProductName"] = ProductName;
        obj["Amount"] = Amount;
        obj["Url"] = Url;
        obj["Auction_Id"] = Auction_Id;
        obj["bidIncrement"] = bidIncrement;
        obj["last_Bidded_amount"] = last_Bidded_amount;
        obj["Bidder_name"] = Bidder_name;
        obj["buttonbid"] = buttonbid;
        obj["resetTime"] = resetTime;
        obj["datedata"] = datedata;
        obj["timeshow"] = timeshow;
        this.grabit.prod_zoom = obj;
        this.grabit.imgshow = !this.grabit.imgshow;
    };
    LiveauctionComponent.prototype.manualBidding = function (_aID) {
        var _this = this;
        var instance = this;
        instance.current_auctionId = _aID;
        instance.successful_message = false;
        instance.not_successful_error = false;
        instance.last_bidder_message = false;
        instance.basePrice_reached = false;
        instance.grabit.lastBidderDetails(_aID).then(function (res) {
            instance.grabit.auctionDetails(_aID).then(function (result) {
                console.log(result[1]);
                if (res == 'No Bid Logs Found') {
                    var amount = 0;
                    while (amount <= result[3][0]) {
                        amount = Number(amount) + Number(result[2]);
                        if (amount > result[3][0]) {
                            if (result[1] >= amount) {
                                instance.user.spinner.show();
                                instance.grabit.manualBidding(_aID, amount).then(function (res) {
                                    instance.user.spinner.hide();
                                    if (res == 1) {
                                        instance.successful_message = true;
                                        instance.successful_message = true;
                                        var ins = new _user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"](_this.grabit, _this.route, _this.spin);
                                        ins.load_credits();
                                    }
                                    else if (res == 2) {
                                        instance.not_successful_error = true;
                                    }
                                    else {
                                        instance.not_successful_error = true;
                                    }
                                });
                            }
                            else {
                                instance.basePrice_reached = true;
                            }
                        }
                    }
                    return;
                }
                else if (res['returnValues'].bidder == _this.grabit._etherumAccountAddress) {
                    instance.last_bidder_message = true;
                    return;
                }
                else {
                    if (result[5][0] != 0) {
                        instance.user.spinner.show();
                        var amount = Number(result[5][0]) + Number(result[2]);
                        if (result[1] >= amount) {
                            instance.grabit.manualBidding(_aID, amount).then(function (res) {
                                instance.user.spinner.hide();
                                if (res == 1) {
                                    instance.successful_message = true;
                                    var ins = new _user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"](_this.grabit, _this.route, _this.spin);
                                    ins.load_credits();
                                }
                                else if (res == 2) {
                                    instance.not_successful_error = true;
                                    instance.user.spinner.hide();
                                }
                                else {
                                    instance.not_successful_error = true;
                                    instance.user.spinner.hide();
                                }
                            });
                        }
                        else {
                            instance.basePrice_reached = true;
                            instance.user.spinner.hide();
                        }
                    }
                }
            });
        });
    };
    LiveauctionComponent.prototype.ngOnInit = function () {
    };
    LiveauctionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-liveauction',
            template: __webpack_require__(/*! ./liveauction.component.html */ "./src/app/liveauction/liveauction.component.html"),
            styles: [__webpack_require__(/*! ./liveauction.component.css */ "./src/app/liveauction/liveauction.component.css")]
        }),
        __metadata("design:paramtypes", [_service_grabit_service__WEBPACK_IMPORTED_MODULE_1__["GrabitService"], _user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LiveauctionComponent);
    return LiveauctionComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n#login-form-link,#register-form-link{\n    background-color:#66bb8a;\n  }\n#login-form-link:hover,#register-form-link:hover{\n    background-color:#ffffff\n  }\n.btn{\n    background-color:#66bb8a    /* background-color: slategrey, */\n }\n#grad1 {\n    width:100%;\n    height:100%;\n     background-size: cover;\n    background:linear-gradient(to top,#142b57  ,rgb(52, 67, 82) );\n}\n/* #grade:hover{\n    background:red;\n} */\n.form-control {\n    display: block;\n    width: 100%;\n    height: 40px;\n    padding: 6px 12px;\n    font-size: 14px;\n    line-height: 1.42857143;\n    color: #555;\n    background-color: rgb(255, 255, 255);\n    background-image: none;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);\n    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;\n}\n.banner-content {\n    float: left;\n    width: 50%;\n    padding-right: 20px;\n    padding: 20px 15px 18px 0;\n}\nimg {\n    vertical-align: top;\n    border: 0;\n}\n.win-big {\n    font-size: 26px;\n    color: #3d4d65;\n    font-family: \"Roboto Condensed\",Helvetica,Arial,sans-serif;\n    margin: 70px 0 20px 25px;\n    line-height: 1.25;\n    text-transform: uppercase;\n    padding: 0 0 0 170px;\n    background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJod…EiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);\n    background: linear-gradient(to right, rgba(255,255,255,1) 0%,rgba(255,255,255,0.31) 69%,rgba(255,255,255,0) 100%);\n    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=1 );\n}\n.win-big span {\n    font-weight: 700;\n    font-size: 60px;\n}\n.text{\n    font-size: 30px;\n}\n.account-details{\n   \n   \n    color:#fff;\n    text-align: center;\n}\n.account-verification{\n    \n    background:linear-gradient(to left,rgb(63, 62, 61)  ,rgb(15, 43, 71) );\n    float: right;\n    width: 100%;\n    \n    padding: 25px 25px 20px;\n    \n    color: #fff;\n    text-align: center;\n    margin-bottom:17px; \n}\n.signup-form {\n    float: right;\n    width: 100%;\n    border-radius: 5px;\n    padding: 0px 25px 20px;\n    text-align: center;\n}\n.wrap {\n    max-width: 1170px;\n    width: 100%;\n    margin: 0 auto;\n    font-size:28px;\n    text-align:center;\n}\n#join{\n    text-align: center;\n}\n#con{\n    text-align:center;\n    font-size:17px;\n}\n.panel-login>.panel-heading a.active{\n    color: white;\n    \n    color: #ffb347;\n\tfont-size: 18px;\n}\nmarquee{\n    color:orange;\n    font-family: Verdana, Geneva, Tahoma, sans-serif\n}\n/* .subhead{\n    color: orangered\n} */\na, u {\n    text-decoration: none;\n}\n.hit-the-floor {\n    color:rebeccapurple;\n    font-size: 12em;\n    font-weight: bold;\n    font-family: Helvetica;\n    \n    }\n.panel-login>.panel-heading {\n\n    background:linear-gradient(to left,rgb(63, 62, 61)  ,rgb(15, 43, 71) );\n\tborder-color: #fff;\n    text-align:center;\n    color:white\n   \n}\n.panel-login>.panel-heading a{\n    \n\ttext-decoration: none;\n\tcolor: white;\n\tfont-weight: bold;\n\tfont-size: 15px;\n\ttransition: all 0.1s linear;\n}\n.subhead{\n    color: orangered\n}\n#top{\n    margin-top: 102px;\n}\n.panel-heading {\n    padding: 10px 15px;\n    border-bottom: 1px solid transparent;\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px;\n    cursor: pointer;\n}\n.panel-login>.panel-heading hr{\n\t\n    margin-bottom: 0px;\n    -webkit-text-decoration-color: #fff;\n            text-decoration-color: #fff;\n\tclear: both;\n\tborder: 0;\n\theight: 1px;\n\tbackground-image: -o-linear-gradient(left,rgba(0,0,0,0),rgba(0,0,0,0.15),rgba(0,0,0,0));\n}\n.panel-login input[type=\"text\"],.panel-login input[type=\"email\"],.panel-login input[type=\"password\"] {\n\theight: 45px;\n\t\n\tfont-size: 16px;\n\ttransition: all 0.1s linear;\n}\n.panel-login input:hover,\n.panel-login input:focus {\n\toutline:none;\n\tbox-shadow: none;\n\t\n}\nh2 {\n    overflow: hidden;\n    text-align: center;\n   }\nh2:before,\n   h2:after {\n    background-color: rebeccapurple;\n    content: \"\";\n    display: inline-block;\n    height: 1px;\n    position: relative;\n    vertical-align: middle;\n    width: 5%;\n   }\n.bid-credit-row {\n    padding: 5px 15px;\n    margin: 0 0 8px;\n }\n.cf{\n    zoom:1;\n    background-color: #ccc;\n }\nh2:before {\n    right: 0.5em;\n    margin-left: -50%;\n   }\nh2:after {\n    left: 0.5em;\n    margin-right: -50%;\n   }\n.blink{\n   \n    font-size:30px;\n    text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15);\n}\n@-webkit-keyframes blinkingText{\n    0%{     color: rgb(118, 25, 240);    }\n    /* 49%{    color: rgb(11, 219, 91); }\n    50%{    color: rgb(245, 221, 10); } */\n    /* 99%{    color:rgb(134, 33, 228);  } */\n    100%{   color: white;    }\n}\n@keyframes blinkingText{\n    0%{     color: rgb(118, 25, 240);    }\n    /* 49%{    color: rgb(11, 219, 91); }\n    50%{    color: rgb(245, 221, 10); } */\n    /* 99%{    color:rgb(134, 33, 228);  } */\n    100%{   color: white;    }\n}\n.blinking{\n    -webkit-animation:blinkingText 1s infinite;\n            animation:blinkingText 1s infinite;\n    font-size:30px;\n    text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15);\n}\n#up{\n    background-color:#66bb8a;\n    color:#ffffff\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"topof\">\n  <div clas=\"row\">\n     <div class=\"col-sm-12 form-inline\" id=\"header\">\n        <br><br>\n        <div class=\"col-sm-4\">\n           <img src=\"../../assets/chainflux.png\" style=\"width:50%;\">\n        </div>\n        <div clas=\"col-sm-1\">\n        </div>\n        <br>\n        <div class=\"col-sm-7\">\n          <div style=\"color: red\">\n            {{login_error_message}}\n          </div>\n           <div class = \"row\">\n              <div class=\"form-group\">\n                 <input type=\"email\" class=\"form-control \" #email id=\"email\" placeholder=\"Enter email\" autocomplete=off>\n              </div>\n              &nbsp;&nbsp;\n              <div class=\"form-group\">\n                 <input type=\"password\" class=\"form-control \" #password id=\"password\" placeholder=\"Enter password\" >\n              </div>\n              &nbsp;&nbsp;\n              <div class=\"form-group\">\n                 <input type=\"password\" class=\"form-control \" #privakey id=\"priv\" placeholder=\"Enter privateKey\" >\n              </div>\n              &nbsp;&nbsp;\n              <div class=\" btn-group\">\n                 <button class=\"btn\"  (click)=\"login(email.value,password.value,privakey.value)\" style=\"color: white\">&nbsp;<i class=\"fas fa-user\"></i>&nbsp;&nbsp;Login</button>\n\n              </div>\n           </div>\n           <br> \n           <div class=\"row\">\n              <div class=\"col-sm-5\">\n                 <div class=\"form-group\">\n                 </div>\n              </div>\n              <div class=\"col-sm-4\">\n                 <div class=\"form-group\">\n                    <a  class=\"forgot-passsword\" data-toggle=\"modal\" (click)=\"destroy()\" data-target=\"#increase\">Forgot password? Click Here</a>\n                 </div>\n              </div>\n           </div>\n\n        </div>\n     </div>\n     <p *ngIf=\"privatekey_error\" style=\"text-align: center;color: red\">Enter valid privatekey</p>\n     <p *ngIf=\"validation_error\" style=\"text-align: center;color: red\">Enter all details correctly</p>\n\n  </div>\n  \n  <form >\n     <div class=\"modal fade\" id=\"increase\" role=\"dialog\">\n        <div class=\"modal-dialog modal-sm\">\n           <div class=\"modal-content\">\n              <div class=\"modal-header\" >\n                 <button type=\"button\" class=\"close\" (click)=\"revert()\" data-dismiss=\"modal\">&times;</button>\n                 <h4 class=\"modal-title\" >Forgot Password</h4>\n              </div>\n              <div class=\"modal-body\" >\n                 \n                 <input type=\"email\" class=\"form-control\" name=\"email\" id=\"forgotemail\" #email1 placeholder=\"Email\" required minlength=\"4\" autocomplete=off>&nbsp;\n                 <input type=\"password\" class=\"form-control\" placeholder=\"Private Key\" id=\"forgotprikey\" #privatekey  required minlength=\"4\">&nbsp;\n                 <input type=\"password\" class=\"form-control\" name=\"newpassword\" #newpass id=\"forgotpassword\" placeholder=\"New password\" required minlength=\"4\" >&nbsp;\n                 <p id=\"passwordmessage\"></p>\n                 <div style=\"text-align: center\">\n                    <button   type=\"submit\"class=\"btn submit\" id=\"up\" (click)=\"forgotpassword(email1.value,privatekey.value,newpass.value)\" value=\"change\">submit</button>\n                    &nbsp;<a class=\"btn btn-danger\"   (click)=\"revert()\" data-dismiss=\"modal\">cancel</a>\n                 </div>\n                 <br>\n                  <p *ngIf=\"password_change_message\" style=\"text-align: center;  color:blue\">Password changed successfully !</p>\n                 <p *ngIf=\"invalid_details_error\" style=\"text-align: center;color:red\">Enter all details correctly</p>\n              </div>\n           </div>\n        </div>\n     </div>\n  </form>\n  <h3  *ngIf=\"show_signup_or_login_message\" style=\"text-align: center;color: rgb(17, 0, 255)\">Please Sign-up (or) Login to Continue !</h3>\n  <h3 *ngIf=\"show_login_message\" style=\"text-align: center;color: orange\">Account created successfully please login to continue !..</h3>\n</div>\n<br><Br>\n  \n  \n  <div class=\"container-fluid\" id=\"grad1\">\n       <div class=\"row\">\n          <div class=\"col-sm-5\">\n            <div class=\"col-sm-4\"></div>\n            <div class=\"col-sm-8\">\n                <div class=\"banner-content\">\n                    <div class=\"infographic\">\n                       <figure id=\"img\">\n                          <img src=\"../../assets/images/download.png\" style=\"width:310px;height:250px;\">\n                       </figure>\n                       <div class=\"win-big\">\n                          WIN  <span>Big</span>\n                       </div>0\n                    </div>\n                 </div>\n            </div>\n           \n             <div class=\"col-sm-12 \">\n                <marquee width=\"100%\" direction=\"left\" height=\"30%\">\n                   <span class=\"blinking\">Buy-Now Discounts Assured...!</span>\n                  </marquee>\n             </div>\n          </div>\n             <div  id=\"check\" class=\"col-sm-6\">\n               <br>\n               <div class=\"row\">\n                 <div class=\"col-sm-2\"></div>     \n                 <div class=\"col-sm-9\">\n                    <div class=\"account-verification\">\n                        <div class=\"panel panel-login\">\n                           <div class=\"panel-heading\">\n                              <div id=\"text\" >\n                               Sign Up\n                              </div>\n                              <hr>\n                           </div>\n                        </div>\n                        <div class=\"panel-body\">\n                \n                              <p (click)=\"showCreateAccount(3)\" *ngIf=\"show_signup_ || show_create_eth_account\"><i class=\"icon-arrow-left52\" style=\"text-align: left;color:white;font-size: 30px\" aria-hidden=\"true\"></i></p>\n                           <div class=\"col-sm-12\">\n                             <div *ngIf=\"!show_create_eth_account && !show_signup_\">\n                             <div class=\"col-sm-12\" id=\"top\" >\n                               Already have a Ethereum Account\n                               <br><br>\n                                <button class=\"btn\" (click)=\"showCreateAccount(1)\">click here</button>\n                             </div>\n                             <div class=\"col-sm-12\" id=\"top\" >\n                               Don't have a Ethereum Account\n                               <br><br>\n                               <button class=\"btn\" (click)=\"showCreateAccount(2);create();\">click here</button>\n                             </div>\n                            </div>                            \n                           \n\n                              <form id=\"login-form\" *ngIf=\"show_signup_ && !show_create_eth_account\"  role=\"form\" style=\"display: block;\">\n                                 <div class=\"form-group\">\n                                   \n                                      <br><br>\n                                    <div class=\"signup-form\">\n                                      <div class=\"row\">\n                                        <div class=\"col-sm-1\"></div>\n                                        <div class=\"col-sm-10\">\n                                            <p *ngIf=\"display_to_fill_1\">Enter all details correctly</p>\n                                            <p *ngIf=\"privatekey_error_1\">Enter valid privatekey</p>\n                                           <p *ngIf=\"show_error\" style=\"color: white\">{{error_message}}</p>\n                                           <input type=\"text\" placeholder=\"Enter Username\" id=\"signupname\" class=\"form-control\"#usernname autocomplete=\"off\"><br>\n                                           <input type=\"email\" placeholder=\"Enter email\" id=\"signupemail\" class=\"form-control\" #emailiid autocomplete=\"off\"><br>\n                                           <input type=\"password\" placeholder=\"Enter password\" id=\"signuppassword\" class=\"form-control\" #passswd autocomplete=\"off\"><br> \n                                           <input type=\"password\" placeholder=\"Enter privateKey\" id=\"signupprikey\" class=\"form-control\" #priikey autocomplete=\"off\"><br><br>\n                                           <button class=\"btn\"  id=\"up\" (click)=\"sign_up(usernname.value,emailiid.value,passswd.value,priikey.value,1,3)\">&nbsp;<i class=\"fas fa-user\" ></i>&nbsp;&nbsp;signup</button>\n                                        </div>\n                                        <div class=\"col-sm-1\"></div>\n                                      </div>\n                                       \n                                    </div>\n                                 </div>\n                              </form>\n                              <form id=\"register-form\" *ngIf=\"show_create_eth_account && !show_signup_\" role=\"form\" style=\"display: block;\">\n                                 <div class=\"form-group\">\n                                  \n                                   \n                                 \n                                    <div class=\"account-details\" >\n                                       <div class=\"signup-form\" style=\"text-align:center\">\n                                          <p *ngIf=\"display_to_fill_2\">Enter all details correctly</p>\n                                          <p *ngIf=\"privatekey_error_2\">Enter valid privatekey</p>\n                                          <p *ngIf=\"show_error\" style=\"color: white\">{{error_message}}</p>\n                                          <div class=\"row\">\n                                            <div class=\"col-sm-1\"></div>\n                                            <div class=\"col-sm-10\">\n                                                <input type=\"text\" placeholder=\"Enter Username\" id=\"signupethname\" class=\"form-control\"#username autocomplete=\"off\"><br>\n                                            \n                                                <input type=\"email\" placeholder=\"Enter email\" id=\"signupethemail\" class=\"form-control\" #emailid autocomplete=\"off\"><br>\n                                            <input type=\"password\" placeholder=\"Enter password\" id=\"signupethpassword\" class=\"form-control\" #passwd autocomplete=\"off\"><br>\n                                            <label style=\"color: whitesmoke;\">! Please copy the below private key somewhere safe</label>\n                                            <input type=\"text\" class=\"form-control\" id=\"signupethprikey\" #prikey value={{private_key}} placeholder=\"Address\"readonly/><br>\n                                            <button class=\"btn\"  style=\"margin-top:20px;margin-left:27px;\" id=\"btn\" (click)=\"sign_up(username.value,emailid.value,passwd.value,prikey.value,2,4)\">&nbsp;<i class=\"fas fa-user\" ></i>&nbsp;&nbsp;signup</button>\n                                         \n                                            </div>\n                                                 \n                                       </div>\n                                       <br>\n                                       \n                                     </div>\n                                    \n                                    \n                                    </div> \n                                 </div>\n                              \n                                 <div  *ngIf=\"show_account_details\"  class=\"col-sm-6\">\n                                    <div class=\"account-details\" >\n                                    </div>\n                                 </div>\n                              </form>\n                            \n                           </div>\n                        </div>\n                     </div>\n                 </div>\n               </div>\n              \n             </div>\n       </div>\n  </div>\n\n\n<br><br>\n  <div class=\"container-fluid\" id=\"move\" style=\"height: 600px;text-align: center;text-transform: uppercase\" *ngIf=\"!this.grab.imgshow\">\n      <div>\n          <span class=\"blink\">RISKFREE ONLINE AUCTIONS, WIN or BUY BRANDED NEW PRODUCTS </span>\n         </div>\n         <br>\n          <div class=\"hit-the-floor\">\n        <h2>AUCTIONS</h2>\n      </div>\n     \n       <div  *ngFor=\"let image of images\" >\n          <div class=\"test\" data-target=\"#move\" data-slide-to=\"this.images.length\" class=\"active\">\n         <div class=\"col-sm-4\"  style=\"margin-top: 20px;text-align: center;\">\n            <div >\n              <div class=\"col-sm-2\"></div>\n               <div class=\"col-sm-8\"  style=\"margin-top:25px\">\n                  <div>\n                     <div class=\"card\" style=\"border: 1px solid #274356;background-color:white;padding:0 0 10px 0;\">\n                        <div class=\"card-header\" style=\"margin-top:10px\">\n                           <p>{{image.ProductName}}</p>\n                        </div>\n                        <hr>\n                        <div class=\"card-body\">\n                           <div class=\"card-body\" style=\"text-align: center;\">\n                              <img   a  class=\"card-img-top\" src={{image.ipfshash}}  style=\"height: 250px;width: 250px\" alt=\"Card image cap\">\n                           </div>\n                         \n                           <div class=\"bid-credit-row\">\n                              <div class=\"row\">\n                                  <div class=\"col-sm-6\">\n                                         <span class=\"auction-id\" ><span class=\"subhead\">Auction ID:</span>{{image.Auction_Id}}</span>\n                                  </div>\n                                  <div class=\"col-sm-6\">\n                                      <a class=\"bid-credit\" title=\"Bid Type\"><span class=\"subhead\">{{image.bidIncrement}}</span></a>\n                                  </div>\n                              </div>\n                             \n                             \n                          </div>\n                           <div class=\"\">\n                              <span class=\"bid-price\">\n                              <label id=\"Price16720\" style=\"margin-top:5px\">{{image.Amount}}&nbsp;&nbsp;<span class=\"subhead\">GRBT</span></label>\n                              </span>                              \n                           </div>\n                           <hr>\n                           <div class=\"card-footer\">\n                              <button  input type=\"submit\"  class=\"btn \" id=\"btn\" (click)=\"move()\">&nbsp;&nbsp;&nbsp;BID NOW</button>\n                           </div>\n                        </div>\n                     </div>\n                  </div>\n               </div>\n              </div>\n         </div>\n        </div>\n      </div>\n    </div>\n     \n     \n\n<ngx-spinner\n  bdColor=\"#4d4dff\"\n  size=\"medium\"\n  color=\"#fff\"\n  type=\"pacman\">\n  <p style=\"font-size: 20px; color: white\">Loading...</p>\n</ngx-spinner>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_grabit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/grabit.service */ "./src/app/service/grabit.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import $ from "jquery";
var LoginComponent = /** @class */ (function () {
    function LoginComponent(grab, route) {
        // window.onbeforeunload=function(){
        //   return "Sure";
        //   }
        this.grab = grab;
        this.route = route;
        this.text1 = "Private Key:";
        this.text2 = 'Ethereum Acc Address:';
        this.emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.images = [];
        this._web3 = this.grab._web3;
        this.show_create_account = false;
        this.show_login_message = false;
        this.display_to_fill_1 = false;
    }
    LoginComponent.prototype.Change_content = function () {
        this.display_to_fill_1 = false;
        this.show_create_account = false;
        this.show_signup = true;
    };
    LoginComponent.prototype.navigate = function () {
        this.display_to_fill_1 = false;
        this.show_account_details = false;
        this.show_signup = true;
    };
    LoginComponent.prototype.copyInputMessage = function (inputElement) {
        inputElement.select();
        document.execCommand('copy');
        inputElement.setSelectionRange(0, 0);
    };
    LoginComponent.prototype.sign_up = function (name, email, password, private_key, choice, signup_choice) {
        var _this = this;
        this.display_to_fill_1 = false;
        this.display_to_fill_2 = false;
        this.privatekey_error_1 = false;
        this.privatekey_error_2 = false;
        if (name.trim() != "" && email.trim() != "" && password.trim() != "" && private_key.trim() != "") {
            var access_1 = this;
            var detail_1 = {};
            var privatekey = private_key.trim();
            if (privatekey.length != 64) {
                privatekey = privatekey.substring(2, privatekey.length);
            }
            detail_1['fullName'] = name;
            detail_1['email'] = email;
            detail_1['password'] = password;
            detail_1['publickey'] = privatekey;
            var user_1 = detail_1;
            access_1.grab.setPrivateKey(privatekey).then(function (res) {
                detail_1['publickey'] = access_1.grab._etherumAccountAddress;
                if (res == true) {
                    access_1.grab.postUser(user_1).subscribe(function (res) {
                        access_1.show_login_message = true;
                        setTimeout(function () { access_1.show_login_message = false; }, 10000);
                        if (signup_choice == 3) {
                            privatekey = null;
                            document.getElementById("signupname").value = "";
                            document.getElementById("signupemail").value = "";
                            document.getElementById("signuppassword").value = "";
                            document.getElementById("signupprikey").value = "";
                        }
                        else if (signup_choice == 4) {
                            _this.private_key = null;
                            document.getElementById("signupethname").value = "";
                            document.getElementById("signupethemail").value = "";
                            document.getElementById("signupethpassword").value = "";
                            document.getElementById("signupethprikey").value = "";
                        }
                        _this.showCreateAccount(3);
                        // this.show_error=false;
                        _this.show_login_message = true;
                    }, function (err) {
                        if (err.status === 422) {
                            access_1.show_error = true;
                            access_1.error_message = err.error.join('<br/>');
                        }
                        else {
                            access_1.error_message = 'Something went wrong.Please contact admin.';
                        }
                    });
                }
                else if (res == false) {
                    if (choice == 1) {
                        _this.privatekey_error_1 = true;
                    }
                    else if (choice == 2) {
                        _this.privatekey_error_2 = true;
                    }
                }
            });
        }
        else {
            if (choice == 1) {
                this.display_to_fill_1 = true;
            }
            else if (choice == 2) {
                this.display_to_fill_2 = true;
            }
        }
    };
    LoginComponent.prototype.create = function () {
        var object = this._web3.eth.accounts.create();
        this.account_address = object['address'];
        this.private_key = object['privateKey'].substring(2);
    };
    LoginComponent.prototype.showCreateAccount = function (num) {
        var instance = this;
        if (num == 1) {
            instance.show_signup_ = true;
            instance.show_create_eth_account = false;
        }
        else if (num == 2) {
            instance.show_create_eth_account = true;
            instance.show_signup_ = false;
            instance.create();
        }
        else if (num == 3) {
            instance.show_error = false;
            if (instance.show_signup_ == true) {
                instance.show_signup_ = false;
            }
            else if (instance.show_create_eth_account == true) {
                instance.show_create_eth_account = false;
            }
        }
    };
    LoginComponent.prototype.login = function (name, password, privatekey) {
        var _this = this;
        this.privatekey_error_1 = false;
        this.validation_error = false;
        if (name.trim() != "" && password.trim() != "" && privatekey.trim() != "") {
            var _detail_1 = {};
            _detail_1['email'] = name;
            _detail_1['password'] = password;
            _detail_1['publickey'] = privatekey;
            var access = this;
            access.validation_error = false;
            access.privatekey_error_1 = false;
            access.grab.setPrivateKey(privatekey).then(function (res) {
                _detail_1['publickey'] = access.grab._etherumAccountAddress;
                if (res == true) {
                    access.grab.login(_detail_1).subscribe(function (res) {
                        access.grab.setToken(res['token']);
                        access.grab.owner().then(function (owneraddress) {
                            if (owneraddress == access.grab._etherumAccountAddress) {
                                access.route.navigate(['/owner']);
                            }
                            else {
                                access.route.navigate(['/user']);
                            }
                        }),
                            document.getElementById("email").value = "";
                        document.getElementById("password").value = "";
                        document.getElementById("priv").value = "";
                    }, function (err) {
                        access.show_login_error = true;
                        access.login_error_message = err.error.message;
                        access.serverErrorMessages = err.error.message;
                    });
                }
                else if (res == false) {
                    _this.privatekey_error_1 = true;
                }
            });
        }
        else {
            this.validation_error = true;
        }
    };
    LoginComponent.prototype.revert = function () {
        var ins = this;
        ins.password_change_message = false;
        ins.invalid_details_error = false;
        ins.validation_error = false;
        ins.privatekey_error = false;
        document.documentElement.scrollTop = 0;
    };
    LoginComponent.prototype.forgotpassword = function (email, privatekey, newpass) {
        this.password_change_message = false;
        this.invalid_details_error = false;
        if (email.trim() != "" && newpass.trim() != "" && privatekey.trim() != "") {
            var instance = this;
            instance.grab.setPrivateKey(privatekey).then(function (res) {
                if (!res) {
                    instance.invalid_details_error = true;
                }
                else {
                    var temp1 = {};
                    temp1['email'] = email;
                    temp1['publickey'] = instance.grab._etherumAccountAddress;
                    ;
                    temp1['password'] = newpass;
                    instance.grab.forgotpassword(temp1).subscribe(function (res) {
                        document.getElementById("forgotemail").value = "";
                        document.getElementById("forgotpassword").value = "";
                        document.getElementById("forgotprikey").value = "";
                        instance.password_change_message = true;
                        document.documentElement.scrollTop = 0;
                    }, function (err) {
                        console.log(err.error.message);
                        instance.invalid_details_error = true;
                    });
                }
            });
        }
        else {
            this.invalid_details_error = true;
        }
    };
    LoginComponent.prototype.destroy = function () {
        document.getElementById("forgotemail").value = '';
        document.getElementById("forgotprikey").value = '';
        document.getElementById("forgotpassword").value = '';
    };
    LoginComponent.prototype.check = function () {
        //   $("window").scrollTop(0);
    };
    LoginComponent.prototype.show_auctions = function () {
        var instance = this;
        instance.grab.getauctiondetails().then(function (res) {
            var data = Object.keys(res[1]).length;
            var _loop_1 = function (i) {
                if (res[1][i]['Auctionstatus'] == true) {
                    instance.grab.auctionDetails(res[1][i]['auctionid']).then(function (pro_det) {
                        var obj = {};
                        obj['ProductName'] = res[1][i]['productname'];
                        obj['Auction_Id'] = res[1][i]['auctionid'];
                        obj['ipfshash'] = 'https://ipfs.infura.io/ipfs/' + res[1][i]['ipfshash'];
                        obj['Amount'] = pro_det['basePrice'];
                        obj['bidIncrement'] = pro_det['bidIncrement'];
                        obj['Bidder_name'] = res[1][i]['biddername'];
                        instance.images.push(obj);
                    });
                }
            };
            for (var i = 0; i < data; i++) {
                _loop_1(i);
            }
        });
    };
    LoginComponent.prototype.move = function () {
        document.documentElement.scrollTop = 0;
        this.show_signup_or_login_message = true;
    };
    LoginComponent.prototype.ngOnInit = function () {
        window.onbeforeunload = function () {
            return "Sure";
        };
        this.show_auctions();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_service_grabit_service__WEBPACK_IMPORTED_MODULE_2__["GrabitService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/meetwinners/meetwinners.component.css":
/*!*******************************************************!*\
  !*** ./src/app/meetwinners/meetwinners.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auction-block {\n    background: #fff;\n    border: 1px solid #ddd;\n    border-radius: 5px;\n    overflow: hidden;\n }\n\n h3{\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n    font-size:35px;\n    color:  #243276;\n }\n\n /* #borderimg {\n    border: 35px solid #d84800b5;\n    padding: 15px;\n    height: 800px;\n } */\n\n .fa-trophy{\n    font-size: 30px;\n    color:#243276;\n }\n\n .containerone{\n    background-color: whitesmoke;\n   \n}\n\n /* h1 {\n    color: #666;\n    font-size: 22px;\n    margin-top:20px;\n    margin-bottom:20px;\n    text-align: center;\n} */\n\n /* \n.content {\n    padding-top: 30px;\n    padding-bottom: 30px;\n} */\n\n /* .boxshadow {\n    box-shadow: -5px 0 5px -5px rgba(93, 91, 91, 0.493), 5px 0 5px -5px rgba(93, 91, 91, 0.493),0px 15px 10px -15px rgba(93, 91, 91, 0.493);\n} */\n\n .c{\n    text-align: center;;\n}\n\n ul{\n    color: #3d4d65;\n    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;\n    font-size:30px;\n}\n\n #borderimg { \n    border: 20px solid transparent;\n    padding: 15px;\n    -o-border-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANQAAADuCAMAAAB24dnhAAAAdVBMVEX8/PwAAAD///+Hh4fIyMjAwMBxcXHR0dHU1NSSkpJnZ2d+fn6Dg4Pk5OSAgID6+vrMzMxiYmJPT0/b29stLS2pqal2dnZERES4uLg0NDSVlZXp6emfn58YGBikpKRTU1MnJycdHR1bW1sNDQ1AQEDx8fERERFs0PlJAAAFPUlEQVR4nO3XSUPiCBCGYaqyk30PEMKi8f//xKkKqMD0obsPA59T70ExcqjHJEVcrfhfrVa/OPia/XJUOebRQw6veDd2j4dfr27cyajO42FPDroPx7ZiBRBd6mTY7cMx94JqsyzW5KsvpnT5XVyEL10RL2OmovKX0RWQtV+obAzCoAikoriYSm9a/7d/8z9vPXklLariMrsgxuwLFYdllfJANOp95sv7Z5r+2zv+b5polr+8ry9HooHTqgzjb1QgoJQUVq5F39TNslhePGYZVK6qdakgAdAQ3KAKTqihXXI9sa2fAphElfrtdeRkJ4CEizuU119/2zRHCvcQJlHtQzo2zXX03rtDBbQpJjl8HIbx3HrzCQV1mr32PA7DUYafig0Fd6iZ1TpVvluPh57yZ4/7e+XUH8ba9Ss9I8TzHaoIdH8cW8pm3SW7CAUV7XTeOaP2qLs7uLn8Mpf5XXZHL6/P+pQEcvXpApTnpLNAetnf78zu9+fUWT7A5PSFPssyQVkSn/Fe1jX7oV5/nJ4/Ub2eQqIPzjg8iQ1KxaI5hTL6h6KY+wXlbeSlo2sxTPR+qj0slFfrfZXomWocebXRp/Q65/Sgy2OTnufl35Nnz/lnLQPP53SjhkPKec2rXFyK9IZ28ksw0Gdc+lM7eHq5CUdXtz7BlukpC9J2REWNbRpkp7TU59vlgK6/+pAvD77Pnu5vW4bPD/Vl+empk73XzLCe73huZAcut5DcUU46/QCTUKbU0bvqgvKKn4EqvFuU+zNQrqEwMhRKhkLJUCgZCiVDoWQolAyFkqFQMhRKhkLJUCgZCiVDoWQolAyFkqFQMhRKhkLJUCgZCiVDoWQolAyFkqFQMhRKhkLJUCgZCiVDoWQolAyFkqFQMhRKhkLJUCgZCiVDoWQolAyFkqFQMhRKhkLJUCgZCiVDoWQolAyFkqFQMhRKhkLJUCgZCiVDoWQolAyFkqFQMhRKhkLJUCgZCiVDoWQolAyFkqFQMhRKhkLJUCgZCiVDoWQolAyFkqFQMhRKhkLJUCgZCiVDoWQolAyFkqFQMhRKhkLJUCgZCiVDoWQolAyFkqFQMhRKhkLJUCgZCiVDofR/QBU/A1XcoOJV9zNQ3Sq+ojKi+Rz8ABUH55koWyQ7ItpVHmvPnutvW4b3qoVyOdDKyzrrnfHwDqri98Po9FktkHYhCLGXH+IpSKMJFTVFaTDJ/UT9crmxWzOPpAUHXuFdg8vEfAgWwshcy8cTu5Qyh45ejQlz2kYtlIplYAEkejs5oQDoglKVLPa3VcKe2rBQqvE4Wb3JMlfTJ6oKFEVhr+t9D2US1V7XeB+SooLqC5UVzGeiKOuoagu9sZ496e+mt1PRVtRlEdGZuci+UUGk3yimSG+7efiYnz3t7zV/DLNOHJFuPpej4BsVB1ToqaJh23fb5hCdQE4Vn6JDs+367UB6ogoK4htUR3GnK3E9DrEXpSj3Fe/TyIuHca2zdzF1t6iC54reerrmblBQG/dz5v6NqpmLW1TeUEe7sLu8IXIGCBUPTnSZuAt3AmjyW1QQ0T4n2tb5MOjlWW8CBijY6NOejJzXW6J8T9Ht5VePrSy9ZF3rWwV/zPveDV48t+/zI10Wdr1OZA22Y/2NGsvISRLH0a/yDvkAexvbtly/dGXbjvIUUcnAMnvkqCAqxy9UJweuxfqY6y/XqRO9dM4ypC/j9vHX+E73hbqrl49pd0MQbVx5pOgfDioqXPt3rbf6nJR6sf/ixV6qT0nbx/lDvv4nfNeyLSH69aTP/Zyx/qB/AMNddPefyxdkAAAAAElFTkSuQmCC) 20 round;\n       border-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANQAAADuCAMAAAB24dnhAAAAdVBMVEX8/PwAAAD///+Hh4fIyMjAwMBxcXHR0dHU1NSSkpJnZ2d+fn6Dg4Pk5OSAgID6+vrMzMxiYmJPT0/b29stLS2pqal2dnZERES4uLg0NDSVlZXp6emfn58YGBikpKRTU1MnJycdHR1bW1sNDQ1AQEDx8fERERFs0PlJAAAFPUlEQVR4nO3XSUPiCBCGYaqyk30PEMKi8f//xKkKqMD0obsPA59T70ExcqjHJEVcrfhfrVa/OPia/XJUOebRQw6veDd2j4dfr27cyajO42FPDroPx7ZiBRBd6mTY7cMx94JqsyzW5KsvpnT5XVyEL10RL2OmovKX0RWQtV+obAzCoAikoriYSm9a/7d/8z9vPXklLariMrsgxuwLFYdllfJANOp95sv7Z5r+2zv+b5polr+8ry9HooHTqgzjb1QgoJQUVq5F39TNslhePGYZVK6qdakgAdAQ3KAKTqihXXI9sa2fAphElfrtdeRkJ4CEizuU119/2zRHCvcQJlHtQzo2zXX03rtDBbQpJjl8HIbx3HrzCQV1mr32PA7DUYafig0Fd6iZ1TpVvluPh57yZ4/7e+XUH8ba9Ss9I8TzHaoIdH8cW8pm3SW7CAUV7XTeOaP2qLs7uLn8Mpf5XXZHL6/P+pQEcvXpApTnpLNAetnf78zu9+fUWT7A5PSFPssyQVkSn/Fe1jX7oV5/nJ4/Ub2eQqIPzjg8iQ1KxaI5hTL6h6KY+wXlbeSlo2sxTPR+qj0slFfrfZXomWocebXRp/Q65/Sgy2OTnufl35Nnz/lnLQPP53SjhkPKec2rXFyK9IZ28ksw0Gdc+lM7eHq5CUdXtz7BlukpC9J2REWNbRpkp7TU59vlgK6/+pAvD77Pnu5vW4bPD/Vl+empk73XzLCe73huZAcut5DcUU46/QCTUKbU0bvqgvKKn4EqvFuU+zNQrqEwMhRKhkLJUCgZCiVDoWQolAyFkqFQMhRKhkLJUCgZCiVDoWQolAyFkqFQMhRKhkLJUCgZCiVDoWQolAyFkqFQMhRKhkLJUCgZCiVDoWQolAyFkqFQMhRKhkLJUCgZCiVDoWQolAyFkqFQMhRKhkLJUCgZCiVDoWQolAyFkqFQMhRKhkLJUCgZCiVDoWQolAyFkqFQMhRKhkLJUCgZCiVDoWQolAyFkqFQMhRKhkLJUCgZCiVDoWQolAyFkqFQMhRKhkLJUCgZCiVDoWQolAyFkqFQMhRKhkLJUCgZCiVDoWQolAyFkqFQMhRKhkLJUCgZCiVDofR/QBU/A1XcoOJV9zNQ3Sq+ojKi+Rz8ABUH55koWyQ7ItpVHmvPnutvW4b3qoVyOdDKyzrrnfHwDqri98Po9FktkHYhCLGXH+IpSKMJFTVFaTDJ/UT9crmxWzOPpAUHXuFdg8vEfAgWwshcy8cTu5Qyh45ejQlz2kYtlIplYAEkejs5oQDoglKVLPa3VcKe2rBQqvE4Wb3JMlfTJ6oKFEVhr+t9D2US1V7XeB+SooLqC5UVzGeiKOuoagu9sZ496e+mt1PRVtRlEdGZuci+UUGk3yimSG+7efiYnz3t7zV/DLNOHJFuPpej4BsVB1ToqaJh23fb5hCdQE4Vn6JDs+367UB6ogoK4htUR3GnK3E9DrEXpSj3Fe/TyIuHca2zdzF1t6iC54reerrmblBQG/dz5v6NqpmLW1TeUEe7sLu8IXIGCBUPTnSZuAt3AmjyW1QQ0T4n2tb5MOjlWW8CBijY6NOejJzXW6J8T9Ht5VePrSy9ZF3rWwV/zPveDV48t+/zI10Wdr1OZA22Y/2NGsvISRLH0a/yDvkAexvbtly/dGXbjvIUUcnAMnvkqCAqxy9UJweuxfqY6y/XqRO9dM4ypC/j9vHX+E73hbqrl49pd0MQbVx5pOgfDioqXPt3rbf6nJR6sf/ixV6qT0nbx/lDvv4nfNeyLSH69aTP/Zyx/qB/AMNddPefyxdkAAAAAElFTkSuQmCC) 20 round;\n}"

/***/ }),

/***/ "./src/app/meetwinners/meetwinners.component.html":
/*!********************************************************!*\
  !*** ./src/app/meetwinners/meetwinners.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container boxshadow containerone\" style=\"text-align: center\">\n    <!-- <h1 class=\"pull-left\">MEET WINNERS</h1> -->\n </div>\n <div class=\"container content boxshadow\">\n    <div class=\"row\">\n       <div class=\"col-sm-2\"></div>\n       <div class=\"col-sm-8\">\n          <div class=\"c\" id=\"borderimg\">\n             <div class=\"row\">\n                <h3 style=\"text-align: center\"> <b>TOP </b>  <b><span id=\"winnerlistdisplay\"></span></b>&nbsp;  <b>WINNERS</b></h3>\n                <br><i class=\"fa fa-trophy\" aria-hidden=\"true\"></i>\n                <!-- <i class=\"fa fa-trophy\" aria-hidden=\"true\"></i>&nbsp;\n                <i class=\"fa fa-trophy\" aria-hidden=\"true\"></i>&nbsp; -->\n             </div>\n             <div class=\"row\" style=\"margin-top:20px\">\n                <div class=\"col-sm-4\"></div>\n                <div class=\"col-sm-4\">\n                   <ul *ngFor=\"let win of winners\" style=\"list-style-type:square;\">\n                      <li> {{ win.winner_name }} </li>\n                   </ul>\n                </div>\n                <div class=\"col-sm-4\"></div>\n             </div>\n          </div>\n       </div>\n       <div class=\"col-sm-2\"></div>\n    </div>\n </div>"

/***/ }),

/***/ "./src/app/meetwinners/meetwinners.component.ts":
/*!******************************************************!*\
  !*** ./src/app/meetwinners/meetwinners.component.ts ***!
  \******************************************************/
/*! exports provided: MeetwinnersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetwinnersComponent", function() { return MeetwinnersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_grabit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/grabit.service */ "./src/app/service/grabit.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var MeetwinnersComponent = /** @class */ (function () {
    function MeetwinnersComponent(grabit) {
        this.grabit = grabit;
        this.winners = [];
    }
    MeetwinnersComponent.prototype.meetwinners = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var count = 0;
                        var instance = _this;
                        instance.winners.length = 0;
                        instance.grabit.auctionList().then(function (aids) {
                            var det = aids.reverse();
                            det.forEach(function (aid) {
                                instance.grabit.auctionDetails(aid).then(function (auctionDetails) {
                                    if (auctionDetails[6] == 1) {
                                        instance.grabit.lastBidderDetails(aid).then(function (publickey) {
                                            if (publickey != 'No Bid Logs Found') {
                                                count++;
                                                instance.grabit.getUserName(publickey.returnValues.bidder).subscribe(function (userdetails) {
                                                    if (count <= 10) {
                                                        var win = {};
                                                        win["winner_name"] = userdetails["fullName"];
                                                        instance.winners.push(win);
                                                    }
                                                });
                                                document.getElementById("winnerlistdisplay").innerHTML = String(count);
                                            }
                                        });
                                    }
                                });
                            });
                        });
                        resolve(count);
                    })];
            });
        });
    };
    MeetwinnersComponent.prototype.ngOnInit = function () {
        this.meetwinners().then();
    };
    MeetwinnersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-meetwinners',
            template: __webpack_require__(/*! ./meetwinners.component.html */ "./src/app/meetwinners/meetwinners.component.html"),
            styles: [__webpack_require__(/*! ./meetwinners.component.css */ "./src/app/meetwinners/meetwinners.component.css")]
        }),
        __metadata("design:paramtypes", [_service_grabit_service__WEBPACK_IMPORTED_MODULE_1__["GrabitService"]])
    ], MeetwinnersComponent);
    return MeetwinnersComponent;
}());



/***/ }),

/***/ "./src/app/myaccount/myaccount.component.css":
/*!***************************************************!*\
  !*** ./src/app/myaccount/myaccount.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/myaccount/myaccount.component.html":
/*!****************************************************!*\
  !*** ./src/app/myaccount/myaccount.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container boxshadow\" id=\"containerone\">\n  <h1 class=\"pull-left\">MY ACCOUNT</h1>\n</div>\n<div class=\"container content boxshadow\">\n  <div class=\"row\">\n     <div class=\"col-sm-6\">\n        <div class=\"panel panel-default \">\n           <div class=\"panel-heading\" style=\"background-color:#273246;color:#ffffff;\"><b>MY INFORMATION</b></div>\n           <div class=\"panel-body\">\n            <div class=\"col-sm-2\"></div>\n            <div class=\"col-sm-8\"> \n              <form class=\"form-inline\">\n                 <div class=\"form-group\" style=\"text-align:right\"><br>\n                    <label for=\"text\">UserName:</label>\n                    <input type=\"text\"  class=\"form-control\" id=\"user\" value=\"{{ username }}\" autocomplete=\"off\" readonly>\n                    <br><br><label for=\"email\">Email:</label>&nbsp;&nbsp;&nbsp;\n                    <input type=\"email\" class=\"form-control\" id=\"email\" value=\"{{ emails }}\" autocomplete=\"off\" readonly>\n                    <br><br><label for=\"text\">Public Key:</label>&nbsp;&nbsp;&nbsp;\n                    <input type=\"text\"  class=\"form-control\" id=\"pub\" value=\"{{ publickey }}\" autocomplete=\"off\" readonly>\n                    <br><br><label for=\"text\">Account Balance:</label>&nbsp;&nbsp;&nbsp;\n                    <input type=\"text\"  class=\"form-control\" id=\"accbal\" value=\"{{ balance }} ETH\" autocomplete=\"off\" readonly><br><br>\n                    <div *ngIf=\"this.grabit.isadmin\">\n                      <label for=\"number\">Credit Balance:</label>&nbsp;&nbsp;&nbsp;\n                      <input type=\"number\" value=\"{{ credits }}\" class=\"form-control\" id=\"left\" readonly><br><br>\n                    </div>\n                 </div>\n              </form>\n            </div>\n            <div class=\"col-sm-2\"></div>\n           </div>\n        </div>\n     </div>\n     <div class=\"col-sm-6\">\n        <div class=\"panel panel-default\">\n           <div class=\"panel-heading\" style=\"background-color:#273246;color:#ffffff;\"><b>Change Password</b></div>\n           <div class=\"panel-body\">\n            <div class=\"col-sm-2\"></div>\n            <div class=\"col-sm-8\">\n              <form class=\"form-inline\">\n                 <br>\n                 <div class=\"form-group\" style=\"text-align: right\">\n                    <label for=\"password\">Old password:</label>&nbsp;&nbsp;&nbsp;\n                    <input type=\"password\" class=\"form-control\" #oldpassword id=\"oldpass\"  placeholder=\"Enter Oldpassword\">\n                    <br><br><label for=\"password\">New password:</label>&nbsp;&nbsp;&nbsp;\n                    <input type=\"password\" class=\"form-control\" #newpassword id=\"newpass\"  placeholder=\"Enter Newpassword\">\n                    <br><br><label for=\"password\">Confirm password:</label>&nbsp;&nbsp;&nbsp;\n                    <span><input type=\"password\" class=\"form-control\" #confirmpassword id=\"conpass\" (input)=\"passwordchange(newpassword.value,confirmpassword.value)\"  placeholder=\"Enter Confirmpassword\"><span id=\"passwordmessage\"></span></span>\n                  </div>\n              </form>\n            \n              <br><button (click)=\"changepassword(oldpassword.value,newpassword.value)\" class=\"btn\" style=\"background-color:#66bb8a;color:#ffffff\" id=\"changebtn\">&nbsp;<i class=\"fas fa-sync-alt\"></i>&nbsp;&nbsp;Change password</button>\n              <br>\n              <br>\n              <p *ngIf=\"successful_message\" style=\"text-align: center;color: green\">Password changed Successfully</p>\n              <p *ngIf=\"credentials_error\" style=\"text-align: center;color: red\">please try again with valid credentials</p>\n              <p *ngIf=\"validation_error\" style=\"text-align: center;color: red\">Enter all details correctly</p>            \n            </div>\n            <div class=\"col-sm-2\"></div>\n           </div>\n        </div>\n     </div>\n  </div>\n  <div class=\"row\" >\n     <div class=\"col-sm-3\">\n     </div>\n     <div class=\"col-sm-6\">\n       <div *ngIf=\"!this.grabit.isadmin\">\n          <div class=\"panel panel-default\" >\n              <div class=\"panel-heading\" style=\"background-color:#273246;color:#ffffff;\"><b>STATISTICS</b></div>\n              <div class=\"panel-body\">\n                <div class=\"col-sm-2\"></div>\n                <div class=\"col-sm-8\">\n                 <form class=\"form-inline\">\n                    <br>\n                    <div class=\"form-group\" style=\"text-align:right\">\n                       <label for=\"number\">Auction Participated:</label>\n                       <input type=\"number\" value=\"{{ paticipatedcount }}\" class=\"form-control\" id=\"Auction\"  readonly>\n                       <br><br><label for=\"number\">Auction wons:</label>&nbsp;&nbsp;&nbsp;\n                       <input type=\"number\" value=\"{{ woncount }}\" class=\"form-control\" id=\"won\"  readonly>\n                       <br><br><label for=\"number\">Credit Balance:</label>&nbsp;&nbsp;&nbsp;\n                       <input type=\"number\" value=\"{{ credits }}\" class=\"form-control\" id=\"left\" readonly><br><br>\n                    </div>\n                 </form>\n                </div>\n                <div class=\"col-sm-2\"></div>\n              </div>\n           </div>\n       </div>\n     </div>\n     <div class=\"col-sm-3\">\n     </div>\n  </div>\n</div>    "

/***/ }),

/***/ "./src/app/myaccount/myaccount.component.ts":
/*!**************************************************!*\
  !*** ./src/app/myaccount/myaccount.component.ts ***!
  \**************************************************/
/*! exports provided: MyaccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyaccountComponent", function() { return MyaccountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_grabit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/grabit.service */ "./src/app/service/grabit.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyaccountComponent = /** @class */ (function () {
    function MyaccountComponent(grabit, route) {
        this.grabit = grabit;
        this.route = route;
        this.fetch_user_balance();
        this.fetch_user_address();
        this.paticipatedandwon();
        this.credit_balance();
        this.mydetails();
        this.successful_message = false;
        this.credentials_error = false;
        this.validation_error = false;
    }
    MyaccountComponent.prototype.fetch_user_balance = function () {
        var instance = this;
        instance.grabit.getEtherumAccountBalance().then(function (res) {
            instance.balance = res;
        });
    };
    MyaccountComponent.prototype.fetch_user_address = function () {
        var instance = this;
        instance.publickey = instance.grabit._etherumAccountAddress;
    };
    MyaccountComponent.prototype.paticipatedandwon = function () {
        var instance = this;
        instance.paticipatedcount = 0;
        instance.woncount = 0;
        instance.grabit.auctionList().then(function (a_ids) {
            a_ids.forEach(function (id) {
                instance.grabit.auctionDetails(id).then(function (auctiondetails) {
                    instance.grabit.bidDetails(id).then(function (bitteramount) {
                        if (bitteramount != 0) {
                            instance.paticipatedcount++;
                        }
                        if (auctiondetails[6] == 1 && auctiondetails[5][0] == bitteramount && bitteramount != 0) {
                            instance.woncount++;
                        }
                    });
                });
            });
        });
    };
    MyaccountComponent.prototype.credit_balance = function () {
        var meta = this;
        meta.grabit.balanceOf().then(function (result) {
            meta.credits = result;
        });
    };
    MyaccountComponent.prototype.mydetails = function () {
        var instance = this;
        instance.grabit.getuserthings().subscribe(function (res) {
            instance.username = res['user']['fullName'];
            instance.emails = res['user']['email'];
        }, function (err) {
            console.log(err.message);
        });
    };
    MyaccountComponent.prototype.changepassword = function (oldpassword, newpassword) {
        this.successful_message = false;
        this.validation_error = false;
        this.credentials_error = false;
        if (oldpassword.trim() != "" && newpassword.trim() != "") {
            var instance = this;
            var temp1 = {};
            temp1['email'] = instance.emails;
            temp1['passwordold'] = oldpassword;
            temp1['password'] = newpassword;
            instance.grabit.changepassword(temp1).subscribe(function (res) {
                document.getElementById("oldpass").value = "";
                document.getElementById("newpass").value = "";
                document.getElementById("conpass").value = "";
                instance.successful_message = true;
                instance.grabit.deleteToken();
                instance.route.navigate(["/login"]);
                //  window.location.reload();
            }, function (err) {
                instance.credentials_error = true;
                console.log(err.error.message);
            });
        }
        else {
            this.validation_error = true;
        }
    };
    MyaccountComponent.prototype.passwordchange = function (newpass, confirmpass) {
        if (newpass == confirmpass) {
            document.getElementById("passwordmessage").style.color = "green";
            document.getElementById("passwordmessage").innerHTML = "Good";
            document.getElementById("changebtn").disabled = false;
        }
        else {
            document.getElementById("passwordmessage").style.color = "red";
            document.getElementById("passwordmessage").innerHTML = "miss match";
        }
    };
    MyaccountComponent.prototype.ngOnInit = function () {
    };
    MyaccountComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-myaccount',
            template: __webpack_require__(/*! ./myaccount.component.html */ "./src/app/myaccount/myaccount.component.html"),
            styles: [__webpack_require__(/*! ./myaccount.component.css */ "./src/app/myaccount/myaccount.component.css")]
        }),
        __metadata("design:paramtypes", [_service_grabit_service__WEBPACK_IMPORTED_MODULE_1__["GrabitService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MyaccountComponent);
    return MyaccountComponent;
}());



/***/ }),

/***/ "./src/app/owner/owner.component.css":
/*!*******************************************!*\
  !*** ./src/app/owner/owner.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n .f-size{\n    margin-top: 10px;\n    }\n    \n    .page-title {\n        padding: 0px 36px 32px 0;\n        display: block;\n        position: relative;\n    }\n    \n    .navbar-nav>li>a:hover {\n        color: lemonchiffon;\n        background-color: transparent;\n    }\n    \n    .navbar-nav>li>a:active {\n        color: moccasin;\n        background-color: transparent;\n    }\n    \n    .Logout{\n        cursor: pointer;\n    }\n    \n    .topspace{\n       margin: 25px 0  0 0;\n   }"

/***/ }),

/***/ "./src/app/owner/owner.component.html":
/*!********************************************!*\
  !*** ./src/app/owner/owner.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header page-header-inverse\" style=\" background-color: #273246\">\n    <div class=\"navbar navbar-inverse navbar-transparent\">\n        <div class=\"navbar-header\">\n           <a class=\"navbar-brand\"></a>\n           <ul class=\"nav navbar-nav pull-right visible-xs-block\">\n              <li><a data-toggle=\"collapse\" data-target=\"#navbar-mobile\"><i class=\"icon-grid3\"></i></a></li>\n           </ul>\n        </div>\n        <div class=\"navbar-collapse collapse\" id=\"navbar-mobile\">\n          <div class=\"row\">\n            <div class=\"col-sm-5 \">\n                    <h4 style=\"font-family: Comic Sans MS; font-size: 40px;font-weight: 300;\">Grraabit</h4>\n            </div>\n            <div class=\"col-sm-4 topspace\">\n             \n                </div>\n           <div class=\"col-sm-2 topspace\">\n              <div class=\"navbar-right\">\n                  <ul class=\"nav navbar-nav\">\n                     <li class=\"dropdown dropdown-user\">\n                        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                        <span class=\"texttransform\">{{owner_name}}</span>\n                        <i class=\"caret\"></i>\n                        </a>\n                        <ul class=\"dropdown-menu dropdown-menu-right\">\n                            <li><a (click) = \"chooseTab(5)\"><i class=\"icon-user\"></i>My Account</a></li>\n                            <li class=\"divider\"></li>\n                            <li><a (click)=\"onLogout()\"><i class=\"icon-switch2\"></i> Logout</a></li>\n                        </ul>\n                     </li>\n                  </ul>\n               </div>\n            </div>\n        </div>\n        </div>\n     </div>\n        <!-- <div class=\"navbar navbar-inverse navbar-transparent\">\n          <div class=\"page-title\">\n            <h4 style=\"font-family: Comic Sans MS; font-size: 40px;font-weight: 300;\">Grraabit</h4>\n          </div>\n    \n          <div class=\"heading-elements\">\n                <ul class=\"nav navbar-nav navbar-nav-material Logout navbar-right\">           \n                        <li class=\"dropdown\">\n                          <div  class=\"dropdown-toggle\" data-toggle=\"dropdown\">                            \n                           {{owner_name}}\n                            <span class=\"caret\"></span>\n                          </div>                         \n                          <ul class=\"dropdown-menu dropdown-menu-right\">\n                            <li><a (click) = \"chooseTab(5)\"><i class=\"icon-user\"></i>My Account</a></li>                           \n                            <li class=\"divider\"></li>\n                            <li><a (click)=\"onLogout()\"><i class=\"icon-switch2\"></i> Logout</a></li>\n                          </ul>\n                        </li>\n                      </ul>\n          </div>\n        </div> -->\n\n        <div class=\"navbar navbar-inverse navbar-transparent\" id=\"navbar-second\">\n          <ul class=\"nav navbar-nav visible-xs-block\">\n            <li><a class=\"text-center collapsed\" data-toggle=\"collapse\" data-target=\"#navbar-second-toggle\"><i style=\"color: white\" class=\"icon-paragraph-justify3\"></i></a></li>\n          </ul>\n    \n          <div class=\"navbar-collapse collapse\" id=\"navbar-second-toggle\">\n            <ul class=\"nav navbar-nav navbar-nav-material\">\n              <li><a (click)=\"chooseTab(1)\">Create Auction </a></li>\n    \n              <li class=\" mega-menu mega-menu-wide\">\n                <a (click)=\"chooseTab(2)\" >Send Credits </a>\n              </li>\n    \n              <li class=\" mega-menu mega-menu-wide\">\n                <a (click)=\"chooseTab(3)\" >Change Ownership </a>\n              </li>\n    \n              <li >\n                <a (click)=\"chooseTab(4)\" >\n                        Finalize Auction \n                </a>\n          \n        </li>\n    \n              <li >\n                <a (click)=\"chooseTab(8)\">\n                        Select Auction \n                </a>    \n                </li>\n\n                    \n              <!-- <li class=\" mega-menu mega-menu-wide\">\n                <a (click)=\"chooseTab(10)\" >Clone Auction </a>\n              </li> -->\n              <li class=\" mega-menu mega-menu-wide\">\n                  <a (click)=\"chooseTab(11)\" >Registration Details</a>\n                </li>\n            </ul>\n          </div>\n        </div>  \n      </div>         \n\n      <div class=\"container\" [ngSwitch]=\"tabSelected\">\n        <div class=\"row\">\n                <!-- <div class=\"col-sm-1\"></div> -->\n                <div class=\"col-sm-12\" style=\"margin-bottom: 48px;\">\n                               <div *ngSwitchCase=\"1\">\n                                               <app-create-auction></app-create-auction>\n                                            </div>\n                                            <div *ngSwitchCase=\"2\">\n                                               <app-sendcredits></app-sendcredits>\n                                            </div>\n                                            <div *ngSwitchCase=\"3\">\n                                               <app-changeowner></app-changeowner>\n                                            </div>\n                                            <div *ngSwitchCase=\"4\">\n                                               <app-setresult></app-setresult>\n                                            </div>\n                                            <div *ngSwitchCase=\"5\">\n                                               <app-myaccount></app-myaccount>\n                                            </div>\n                                            <div *ngSwitchCase=\"6\">\n                                               <app-bidlog></app-bidlog>\n                                            </div>\n                                            <div *ngSwitchCase=\"7\">\n                                               <app-winhistory></app-winhistory>\n                                            </div>\n                                            <div *ngSwitchCase=\"8\">\n                                                <app-select></app-select>\n                                             </div>\n                                             <!-- <div *ngSwitchCase=\"10\">\n                                                <app-cloneauction></app-cloneauction>\n                                             </div> -->\n                                             <div *ngSwitchCase=\"11\">\n                                                <app-registrationdetails></app-registrationdetails>\n                                             </div>\n                </div>\n        </div>\n </div> \n\n\n\n\n <div class=\"navbar navbar-default navbar-fixed-bottom footer\">\n  <ul class=\"nav navbar-nav visible-xs-block\">\n     <li><a class=\"text-center collapsed\" data-toggle=\"collapse\" data-target=\"#footer\"><i class=\"icon-circle-up2\"></i></a></li>\n  </ul>\n  <div class=\"navbar-collapse collapse\" id=\"footer\">\n     <div class=\"navbar-text\">\n        &copy; 2018. <a href=\"#\" class=\"navbar-link\">Grraabit Auction</a> by <a href=\"http://chainflux.com/\" class=\"navbar-link\" target=\"_blank\">Chainflux</a>\n     </div>\n     <div class=\"navbar-right\">\n        <ul class=\"nav navbar-nav\">\n           <li><a href=\"http://chainflux.com/about\">About</a></li>\n           <li><a href=\"http://chainflux.com/terms\">Terms</a></li>\n           <li><a href=\"http://chainflux.com/contactus\">Contact</a></li>\n        </ul>\n     </div>\n  </div>\n</div>\n\n\n<div><ngx-spinner></ngx-spinner></div>"

/***/ }),

/***/ "./src/app/owner/owner.component.ts":
/*!******************************************!*\
  !*** ./src/app/owner/owner.component.ts ***!
  \******************************************/
/*! exports provided: OwnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerComponent", function() { return OwnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_grabit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/grabit.service */ "./src/app/service/grabit.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OwnerComponent = /** @class */ (function () {
    function OwnerComponent(grabit, route, spin) {
        this.grabit = grabit;
        this.route = route;
        this.spin = spin;
        this.tabSelected = 1;
        this.acc_balance();
        this.load_owner_name();
        this.browser_btn_disable();
        this.check_privateKey();
        this.spinner = this.spin;
    }
    OwnerComponent.prototype.browser_btn_disable = function () {
        history.pushState(null, null, location.href);
        window.onpopstate = function () {
            history.go(1);
        };
    };
    OwnerComponent.prototype.check_privateKey = function () {
        if (this.grabit._privateKey == undefined || this.grabit._privateKey.length != 64) {
            this.grabit.deleteToken();
            this.route.navigate(['/login']);
        }
    };
    OwnerComponent.prototype.load_owner_name = function () {
        var meta = this;
        meta.grabit.getuserthings().subscribe(function (res) {
            meta.owner_name = res['user']['fullName'];
        }, function (err) {
        });
    };
    OwnerComponent.prototype.chooseTab = function (selected) {
        this.tabSelected = selected;
    };
    OwnerComponent.prototype.acc_balance = function () {
        var meta = this;
        meta.grabit.balanceOf().then(function (bal) {
            meta.credit_balance = bal;
        });
    };
    OwnerComponent.prototype.onLogout = function () {
        this.grabit.deleteToken();
        this.route.navigate(['/login']);
    };
    OwnerComponent.prototype.top_up_credits = function () {
    };
    OwnerComponent.prototype.transferOwnership = function () {
    };
    OwnerComponent.prototype.ngOnInit = function () {
        window.onbeforeunload = function () {
            return "Sure";
        };
        var meta = this;
        meta.id1 = setInterval(function () {
            if (meta.grabit._privateKey == undefined) {
                clearInterval(this.interval);
                meta.route.navigate(['login']);
            }
        }, 25);
    };
    OwnerComponent.prototype.ngOnDestroy = function () {
        if (this.id1) {
            clearInterval(this.id1);
        }
    };
    OwnerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-owner',
            template: __webpack_require__(/*! ./owner.component.html */ "./src/app/owner/owner.component.html"),
            styles: [__webpack_require__(/*! ./owner.component.css */ "./src/app/owner/owner.component.css")]
        }),
        __metadata("design:paramtypes", [_service_grabit_service__WEBPACK_IMPORTED_MODULE_1__["GrabitService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], OwnerComponent);
    return OwnerComponent;
}());



/***/ }),

/***/ "./src/app/preregister/preregister.component.css":
/*!*******************************************************!*\
  !*** ./src/app/preregister/preregister.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tabswitch{\n    background-color: #273246;\n    text-align: center;\n}\n.a{\n    color: white;\n    text-transform: uppercase;    \n}\n.a:hover{\n    color: burlywood;\n}\n.nav-tabs>li.active>a, .nav-tabs>li.active>a:focus, .nav-tabs>li.active>a:hover {\n    color: #333;\n    font-weight: bolder;\n    font-size: 106%;\n    background-color:white;\n    border: 1px solid #ddd;\n    border-bottom-color: #ddd;\n    cursor: default;\n}\n.subhead{\n    color: orangered\n}"

/***/ }),

/***/ "./src/app/preregister/preregister.component.html":
/*!********************************************************!*\
  !*** ./src/app/preregister/preregister.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\" >\n<ul class=\"nav nav-tabs tabswitch\" id=\"myTab\" role=\"tablist\">\n   \n  <li class=\"nav-item\">\n    <a  class=\"nav-link a\" id=\"prereg-tab\" (click)=\"change_state()\" data-toggle=\"tab\" href=\"#prereg\" role=\"tab\" aria-controls=\"prereg\" aria-selected=\"false\">Registration</a>\n  </li>\n  <li class=\"nav-item\">\n      <a  class=\"nav-link a\" id=\"upcoming-tab\" (click)=\"change_state()\" data-toggle=\"tab\" href=\"#upcoming\" role=\"tab\" aria-controls=\"upcoming\" aria-selected=\"false\"><span class=\"icon-spinner3 spinner position-left\"></span>Upcoming Registration</a>\n    </li>\n  <li class=\"nav-item\">\n    <a  class=\"nav-link a\" id=\"outofreg-tab\" (click)=\"change_state()\" data-toggle=\"tab\" href=\"#outofreg\" role=\"tab\" aria-controls=\"outofreg\" aria-selected=\"false\">Closed Registration</a>\n  </li>\n</ul>\n<h5 *ngIf=\"success_message\" style=\"text-align: center;color: green\">Registered Successfully</h5>\n<h5 *ngIf=\"error_message\" style=\"text-align: center;color: red\">Unable To Register</h5>\n<div class=\"tab-content \"  id=\"myTabContent\">\n    <div class=\"tab-pane fade \" id=\"upcoming\" role=\"tabpanel\" aria-labelledby=\"upcoming-tab\">   \n        <div  *ngFor=\"let i of upcoming\" >\n            <div class=\"col-sm-4\"  style=\"margin-top: 20px;margin-bottom: 75px;text-align: center;\">\n               <div class=\"row\">\n                  <div class=\"col-sm-10\"  style=\"margin-top:25px\">\n                     <div>\n                        <div class=\"card\" style=\"border: 1px solid #274356;background-color:white;padding:0 0 10px 0;\">\n                           <div class=\"card-header\">\n                              <h4>{{i.ProductName}}</h4>\n                           </div>\n                           <hr>\n                           <div class=\"card-body\">\n                              <span class=\"bid-price\">Required Bidders&nbsp;&nbsp;\n                                  <label id=\"Price16720\" style=\"color: red\"> {{i.required}}</label>\n                              </span>&nbsp;&nbsp;&nbsp;\n                              <span>Registration Amount&nbsp;&nbsp;\n                                    <label id=\"Price16720\" style=\"color: green\">{{i.minimumbid}}&nbsp;&nbsp;<label style=\"color:black\">GRBT</label></label>\n                                    </span>\n                              <h5 class=\"card-title\"><span class=\"subhead\">Base Price:</span> {{ i.Amount }} <span class=\"subhead\">GRBT</span></h5>\n                              <div class=\"card-body\" style=\"text-align: center\">\n                                 <img class=\"card-img-top\" src={{i.Url}} style=\"height: 250px;width: 250px\" alt=\"Card image cap\">\n                              </div>\n                              <div class=\"bid-credit-row\">\n                                 <span class=\"auction-id\"><span class=\"subhead\">Auction ID:</span>{{i.Auction_Id}}</span>\n                              <hr>\n                           </div>\n                           <div id=\"dvzoom16720\"  *ngIf=\"i.timeshow\">\n                              <span class=\"subhead\">Registration Starts in&nbsp;&nbsp;</span>{{hour_shower[i.Auction_Id]|number:'2.0'}}:{{min_shower[i.Auction_Id]|number:'2.0'}}:{{sec_shower[i.Auction_Id]|number:'2.0'}}\n                          </div>\n                           <div *ngIf=\"!i.timeshow\">\n                              {{i.datedata}}\n                           </div>\n                        </div>\n                     </div>\n                  </div>\n                  <div class=\"col-sm-2\"></div>\n               </div>\n            </div>\n         </div>\n  </div>    </div>\n  <div class=\"tab-pane fade \" id=\"prereg\" role=\"tabpanel\" aria-labelledby=\"prereg-tab\">    \n      <div  *ngFor=\"let image of register_now\" >\n          <div class=\"col-sm-4\"  style=\"margin-top: 20px;margin-bottom: 75px;text-align: center;\">\n             <div class=\"row\">\n                <div class=\"col-sm-10\"  style=\"margin-top:25px\">\n                   <div>\n                      <div class=\"card\" style=\"border: 1px solid #274356;background-color:white;padding:0 0 10px 0;\">\n                         <div class=\"card-header\">\n                            <h4>{{image.ProductName}}</h4>\n                         </div>\n                         <hr>\n                         <div class=\"card-body\">\n                            <span class=\"bid-price\">Required Bidders&nbsp;&nbsp;\n                                <label id=\"Price16720\" style=\"color: red\"> {{image.required}}</label>\n                            </span>&nbsp;&nbsp;&nbsp;\n                            <span>Registration Amount&nbsp;&nbsp;\n                                    <label id=\"Price16720\" style=\"color: green\">{{image.minimumbid}}&nbsp;&nbsp;<label style=\"color:black\">GRBT</label></label>\n                                    </span>\n                            <h5 class=\"card-title\"><span class=\"subhead\">Base Price:</span> {{ image.Amount }} <span class=\"subhead\">GRBT</span></h5>\n                            <div class=\"card-body\" style=\"text-align: center\">\n                               <img  class=\"card-img-top\" src={{image.Url}} style=\"height: 250px;width: 250px\" alt=\"Card image cap\">\n                            </div>\n                            <div class=\"bid-credit-row\">\n                               <span class=\"auction-id\"><span class=\"subhead\">Auction ID:</span>{{image.Auction_Id}}</span>\n                            </div>\n                            <div class=\"bid-credit-row2\" *ngIf=\"image.timeshow\">\n                               <span class=\"bid-price\"><span class=\"subhead\">Registration ends at  :</span>\n                               <label id=\"Price16720\">{{hour_shower[image.Auction_Id]|number:'2.0'}}:{{min_shower[image.Auction_Id]|number:'2.0'}}:{{sec_shower[image.Auction_Id]|number:'2.0'}}</label>\n                               </span>\n                            </div>\n                            <div *ngIf=\"!image.timeshow\">\n                               {{image.datedata}}\n                            </div>\n                            <hr>\n                            <div class=\"card-footer\">\n                              <input type=\"button\" *ngIf=\"image.status==0\" class=\"btn btn-success\" id={{image.Auction_Id}} value=\"Register Now\" (click)=\"preregistration(image.Auction_Id)\"/>\n                              <p *ngIf=\"image.status==1\" style=\"text-align: center;color: green\">Registered</p>\n                            </div>\n                         </div>\n                      </div>\n                   </div>\n                </div>\n                <div class=\"col-sm-2\"></div>\n             </div>\n          </div>\n       </div>\n  </div>\n  <div class=\"tab-pane fade \" id=\"outofreg\" role=\"tabpanel\" aria-labelledby=\"outofreg-tab\">     \n      <div  *ngFor=\"let _image of expired\" >\n          <div class=\"col-sm-4\"  style=\"margin-top: 20px;margin-bottom: 75px;text-align: center;\">\n             <div class=\"row\">\n                <div class=\"col-sm-10\"  style=\"margin-top:25px\">\n                   <div>\n                      <div class=\"card\" style=\"border: 1px solid #274356;background-color:white;padding:0 0 10px 0;\">\n                         <div class=\"card-header\">\n                            <h4>{{_image.ProductName}}</h4>\n                         </div>\n                         <hr>\n                         <div class=\"card-body\">\n                            <span class=\"bid-price\">Required Bidders&nbsp;&nbsp;\n                                <label id=\"Price16720\" style=\"color: red\"> {{_image.required}}</label>\n                            </span>&nbsp;&nbsp;&nbsp;\n                            <span class=\"bid-price\" >Registered Bidders&nbsp;&nbsp;\n                                    <label id=\"Price16720\" style=\"color: blue;\"> {{_image.registered}}</label>\n                                </span><br>\n                                <span>Registration Amount&nbsp;&nbsp;\n                                    <label id=\"Price16720\" style=\"color: green\">{{_image.minimumbid}}&nbsp;&nbsp;<label style=\"color:black\">GRBT</label></label>\n                                    </span>\n\n                                <h5 class=\"card-title\"><span class=\"subhead\">Base Price:</span> {{ _image.Amount }} <span class=\"subhead\">GRBT</span></h5>\n                                <div class=\"card-body\" style=\"text-align: center\">\n                               <img  class=\"card-img-top\" src={{_image.Url}} style=\"height: 250px;width: 250px\" alt=\"Card image cap\">\n                            </div>\n                            <div class=\"bid-credit-row\">\n                               <span class=\"auction-id\"><span class=\"subhead\">Auction ID:</span>{{_image.Auction_Id}}</span>\n                           \n                            <hr>\n                         </div>\n                         <div class=\"card-footer\">\n                            <p *ngIf=\"_image.status==0\" style=\"text-align: center;color: red\">Not Registered</p>\n                            <p *ngIf=\"_image.status==1\" style=\"text-align: center;color: green\">Registered</p>\n                          </div>\n                      </div>\n                   </div>\n                </div>\n                <div class=\"col-sm-2\"></div>\n             </div>\n          </div>\n       </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/preregister/preregister.component.ts":
/*!******************************************************!*\
  !*** ./src/app/preregister/preregister.component.ts ***!
  \******************************************************/
/*! exports provided: PreregisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreregisterComponent", function() { return PreregisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_grabit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/grabit.service */ "./src/app/service/grabit.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/user.component */ "./src/app/user/user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PreregisterComponent = /** @class */ (function () {
    function PreregisterComponent(grab, spin, user) {
        this.grab = grab;
        this.spin = spin;
        this.user = user;
        this.sec_shower = [];
        this.min_shower = [];
        this.hour_shower = [];
        this.register_now = [];
        this.expired = [];
        this.upcoming = [];
        this.preregister_table();
        this.success_message = false;
        this.error_message = false;
    }
    PreregisterComponent.prototype.change_state = function () {
        this.success_message = false;
        this.error_message = false;
    };
    PreregisterComponent.prototype.preregistration = function (auctionid) {
        var ins = this;
        ins.success_message = false;
        ins.error_message = false;
        ins.grab.ispreregistered(auctionid).then(function (isregistered) {
            if (isregistered == 0) {
                ins.spin.show();
                ins.grab.preregister(auctionid).then(function (res) {
                    ins.spin.hide();
                    if (res == 0) {
                        ins.error_message = true;
                    }
                    else if (res == 1) {
                        ins.user.load_credits();
                        ins.success_message = true;
                    }
                    else {
                        ins.error_message = true;
                    }
                });
            }
            else {
                // alert("User already registered");
            }
        });
    };
    PreregisterComponent.prototype.startTimerUpcoming = function (auctionid) {
        var _this = this;
        var meta = this;
        meta.grab.auctionDetails(auctionid).then(function (auc_det) {
            meta.grab.currentTime().then(function (now_time) {
                var timeLeft = Number(auc_det[0][2]) - Number(now_time);
                meta.sec_shower[auctionid] = timeLeft % 60;
                var min_str = (timeLeft / 60).toString();
                var min = min_str.split(".");
                var minutes = Number(min[0]);
                meta.min_shower[auctionid] = minutes % 60;
                var hours_str = (timeLeft / 3600).toString();
                var hours = hours_str.split(".");
                meta.hour_shower[auctionid] = Number(hours[0]);
                var looper = setInterval(function () {
                    if (meta.sec_shower[auctionid] != 0) {
                        meta.sec_shower[auctionid]--;
                    }
                    else {
                        if (meta.hour_shower[auctionid] != 0 || meta.min_shower[auctionid] != 0) {
                            meta.sec_shower[auctionid] = 59;
                            if (meta.min_shower[auctionid] != 0) {
                                meta.min_shower[auctionid]--;
                            }
                            else {
                                if (meta.hour_shower[auctionid] != 0) {
                                    meta.min_shower[auctionid] = 59;
                                    meta.hour_shower[auctionid]--;
                                }
                                else {
                                    clearInterval(looper);
                                    _this.preregister_table();
                                }
                            }
                        }
                    }
                }, 1000);
            });
        });
    };
    PreregisterComponent.prototype.startTimerlive = function (auctionid) {
        var _this = this;
        var meta = this;
        meta.grab.auctionDetails(auctionid).then(function (auc_det) {
            meta.grab.currentTime().then(function (now_time) {
                var timeLeft = Number(auc_det[0][3]) - Number(now_time);
                meta.sec_shower[auctionid] = timeLeft % 60;
                var min_str = (timeLeft / 60).toString();
                var min = min_str.split(".");
                var minutes = Number(min[0]);
                meta.min_shower[auctionid] = minutes % 60;
                var hours_str = (timeLeft / 3600).toString();
                var hours = hours_str.split(".");
                meta.hour_shower[auctionid] = Number(hours[0]);
                var looper = setInterval(function () {
                    if (meta.sec_shower[auctionid] != 0) {
                        meta.sec_shower[auctionid]--;
                    }
                    else {
                        if (meta.hour_shower[auctionid] != 0 || meta.min_shower[auctionid] != 0) {
                            meta.sec_shower[auctionid] = 59;
                            if (meta.min_shower[auctionid] != 0) {
                                meta.min_shower[auctionid]--;
                            }
                            else {
                                if (meta.hour_shower[auctionid] != 0) {
                                    meta.min_shower[auctionid] = 59;
                                    meta.hour_shower[auctionid]--;
                                }
                                else {
                                    clearInterval(looper);
                                    _this.preregister_table();
                                }
                            }
                        }
                    }
                }, 1000);
            });
        });
    };
    PreregisterComponent.prototype.preregister_table = function () {
        var _this = this;
        this.grab.getauctiondetails().then(function (details) {
            _this.register_now.length = 0;
            _this.expired.length = 0;
            _this.upcoming.length = 0;
            console.log(details[0].length);
            details[0].forEach(function (a) {
                var i = a + 1;
                _this.grab.auctionDetails(i).then(function (result) {
                    _this.grab.currentTime().then(function (now) {
                        if (Number(now) >= Number(result['times'][2]) && Number(now) <= Number(result['times'][3])) {
                            _this.grab.ispreregistered(i).then(function (state) {
                                // console.log(i+" "+"In Live");
                                var data1 = {};
                                data1['Auction_Id'] = details[1][a]['auctionid'];
                                data1['Url'] = 'https://ipfs.infura.io/ipfs/' + details[1][a]['ipfshash'];
                                data1['ProductName'] = details[1][a]['productname'];
                                data1['resetTime'] = result['resetTime'];
                                data1['bidIncrement'] = result['bidIncrement'];
                                data1['Amount'] = result['basePrice'];
                                data1['status'] = state;
                                data1['required'] = result['bidBounds'][1];
                                data1['registered'] = result['bidBounds'][3];
                                data1['minimumbid'] = result['bidBounds'][0];
                                if (86400 < Number(result['times'][3]) - Number(now)) {
                                    data1['timeshow'] = false;
                                    // alert(i);
                                    data1['datedata'] = ((Number(result['times'][2]) - Number(now)) / 86400).toString().split(".")[2] + " Day to go";
                                    // alert(data1['datedata'])
                                }
                                else {
                                    data1['timeshow'] = true;
                                    _this.startTimerlive(i);
                                }
                                // data1['datedata']="undefined";
                                _this.register_now.push(data1);
                            });
                        }
                        else if (Number(now) >= Number(result['times'][3])) {
                            // console.log(i+" "+"Expired");
                            _this.grab.ispreregistered(i).then(function (state) {
                                var data1 = {};
                                data1['Auction_Id'] = details[1][a]['auctionid'];
                                data1['Url'] = 'https://ipfs.infura.io/ipfs/' + details[1][a]['ipfshash'];
                                data1['ProductName'] = details[1][a]['productname'];
                                data1['resetTime'] = result['resetTime'];
                                data1['bidIncrement'] = result['bidIncrement'];
                                data1['Amount'] = result['basePrice'];
                                data1['status'] = state;
                                data1['required'] = result['bidBounds'][1];
                                data1['registered'] = result['bidBounds'][3];
                                data1['minimumbid'] = result['bidBounds'][0];
                                _this.expired.push(data1);
                            });
                        }
                        else {
                            // console.log(i+" "+"Upcoming");
                            // alert(i);
                            // console.log(a);
                            var data1 = {};
                            data1['Auction_Id'] = details[1][a]['auctionid'];
                            data1['Url'] = 'https://ipfs.infura.io/ipfs/' + details[1][a]['ipfshash'];
                            data1['ProductName'] = details[1][a]['productname'];
                            data1['resetTime'] = result['resetTime'];
                            data1['bidIncrement'] = result['bidIncrement'];
                            data1['Amount'] = result['basePrice'];
                            data1['required'] = result['bidBounds'][1];
                            data1['registered'] = result['bidBounds'][3];
                            data1['minimumbid'] = result['bidBounds'][0];
                            if (86400 < Number(result['times'][2]) - Number(now)) {
                                data1['timeshow'] = false;
                                // alert(i);
                                data1['datedata'] = ((Number(result['times'][2]) - Number(now)) / 86400).toString().split(".")[2] + " Day to go";
                                // alert(data1['datedata'])
                            }
                            else {
                                data1['timeshow'] = true;
                                _this.startTimerUpcoming(i);
                            }
                            // data1['datedata']="undefined";
                            _this.upcoming.push(data1);
                            // alert(this.upcoming_images_)    
                        }
                    });
                });
            });
        });
    };
    PreregisterComponent.prototype.ngOnInit = function () {
    };
    PreregisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-preregister',
            template: __webpack_require__(/*! ./preregister.component.html */ "./src/app/preregister/preregister.component.html"),
            styles: [__webpack_require__(/*! ./preregister.component.css */ "./src/app/preregister/preregister.component.css")]
        }),
        __metadata("design:paramtypes", [_service_grabit_service__WEBPACK_IMPORTED_MODULE_1__["GrabitService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"], _user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"]])
    ], PreregisterComponent);
    return PreregisterComponent;
}());



/***/ }),

/***/ "./src/app/registrationdetails/registrationdetails.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/registrationdetails/registrationdetails.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-size{\n    font-size: 15px;\n    font-weight: bolder; \n }\n thead{\n     background-color:#273246;\n     color: white;\n }\n .tableoverflow{\n    overflow-y:auto;\n    max-height: 600px\n }\n #noresult{\n     text-align: center;\n     margin-top: 20px;\n     color: dimgray;\n     font-size: 13px\n }\n .trhighlighting:hover{\n    background-color: bisque\n }"

/***/ }),

/***/ "./src/app/registrationdetails/registrationdetails.component.html":
/*!************************************************************************!*\
  !*** ./src/app/registrationdetails/registrationdetails.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-flat\">\n    <div class=\"panel-heading\">\n      <h5 class=\"panel-title text-size\">REGISTRATION DETAILS</h5>\n    </div>\n\n    <div class=\"panel-body\">  \n      <div class=\"row\">\n        <div class=\"col-sm-4\">\n            <div class=\"table-responsive tableoverflow\">\n                <table class=\"table table-bordered table-framed \">\n                    <thead>\n                        <tr>\n                            <th scope=\"col\">Auction ID</th>\n                            <th scope=\"col\">ProductName</th>   \n                            <th></th>          \n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr  class=\"trhighlighting\" *ngFor=\"let i of auctiondet\">\n                            <th>{{i._Auctionid}}</th>\n                            <td>{{i.Productname}}</td>\n                            <td ><button class=\"btn btn-warning\" (click)=\"registrationDetails(i._Auctionid)\" style=\"cursor: pointer;\">click</button></td>\n                        </tr>\n                    </tbody>\n                </table>\n              </div>\n        </div>\n        <div class=\"col-sm-8\">\n            <div class=\"table-responsive tableoverflow\">\n                <table class=\"table table-bordered table-framed\">\n                    <thead>\n                        <tr>                   \n                          <th scope=\"col\">Registered Accounts on Auction:&nbsp;{{auction_ID}}</th>\n                          <th scope=\"col\">Registeration Amount</th>\n                        </tr>\n                      </thead>\n                      <tbody>\n                        <tr class=\"trhighlighting\" *ngFor=\"let i of regdet\">\n                          <td>{{i.Address}}</td>\n                          <td>{{i.minbid}}</td>\n                        </tr>\n                                               \n                      </tbody>\n                </table>\n                <p id=\"noresult\" hidden></p> \n              </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/registrationdetails/registrationdetails.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/registrationdetails/registrationdetails.component.ts ***!
  \**********************************************************************/
/*! exports provided: RegistrationdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationdetailsComponent", function() { return RegistrationdetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_grabit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/grabit.service */ "./src/app/service/grabit.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegistrationdetailsComponent = /** @class */ (function () {
    function RegistrationdetailsComponent(grab) {
        this.grab = grab;
        this.auctiondet = [];
        this.regdet = [];
        this.auction_ID = 0;
    }
    RegistrationdetailsComponent.prototype.auctionDetails = function () {
        var ins = this;
        ins.grab.getauctiondetails().then(function (details) {
            details[0].forEach(function (a) {
                var i = a + 1;
                var obj1 = {};
                obj1["_Auctionid"] = i;
                obj1["Productname"] = details[1][a]["productname"];
                ins.auctiondet.push(obj1);
            });
        });
    };
    RegistrationdetailsComponent.prototype.registrationDetails = function (auctionid) {
        var ins = this;
        var noresult = document.getElementById("noresult");
        noresult.hidden = true;
        ins.auction_ID = auctionid;
        ins.regdet.length = 0;
        ins.grab.auctionDetails(auctionid).then(function (result) {
            ins.grab.registeredListForAuction(auctionid).then(function (res) {
                if (res.length == 0) {
                    noresult.hidden = false;
                    noresult.innerText = "No one registered on this Auction";
                }
                else {
                    res.forEach(function (userAddress) {
                        var obj = {};
                        obj["Address"] = userAddress;
                        obj["minbid"] = result["bidBounds"][0];
                        ins.regdet.push(obj);
                    });
                }
            });
        });
    };
    RegistrationdetailsComponent.prototype.ngOnInit = function () {
        this.auctionDetails();
    };
    RegistrationdetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registrationdetails',
            template: __webpack_require__(/*! ./registrationdetails.component.html */ "./src/app/registrationdetails/registrationdetails.component.html"),
            styles: [__webpack_require__(/*! ./registrationdetails.component.css */ "./src/app/registrationdetails/registrationdetails.component.css")]
        }),
        __metadata("design:paramtypes", [_service_grabit_service__WEBPACK_IMPORTED_MODULE_1__["GrabitService"]])
    ], RegistrationdetailsComponent);
    return RegistrationdetailsComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _owner_owner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./owner/owner.component */ "./src/app/owner/owner.component.ts");
/* harmony import */ var _create_auction_create_auction_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-auction/create-auction.component */ "./src/app/create-auction/create-auction.component.ts");
/* harmony import */ var _changeowner_changeowner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./changeowner/changeowner.component */ "./src/app/changeowner/changeowner.component.ts");
/* harmony import */ var _setresult_setresult_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setresult/setresult.component */ "./src/app/setresult/setresult.component.ts");
/* harmony import */ var _myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./myaccount/myaccount.component */ "./src/app/myaccount/myaccount.component.ts");
/* harmony import */ var _bidlog_bidlog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bidlog/bidlog.component */ "./src/app/bidlog/bidlog.component.ts");
/* harmony import */ var _winhistory_winhistory_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./winhistory/winhistory.component */ "./src/app/winhistory/winhistory.component.ts");
/* harmony import */ var _liveauction_liveauction_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./liveauction/liveauction.component */ "./src/app/liveauction/liveauction.component.ts");
/* harmony import */ var _closedauction_closedauction_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./closedauction/closedauction.component */ "./src/app/closedauction/closedauction.component.ts");
/* harmony import */ var _upcomingauction_upcomingauction_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./upcomingauction/upcomingauction.component */ "./src/app/upcomingauction/upcomingauction.component.ts");
/* harmony import */ var _meetwinners_meetwinners_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./meetwinners/meetwinners.component */ "./src/app/meetwinners/meetwinners.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./select/select.component */ "./src/app/select/select.component.ts");















var appRoutes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"],
    },
    {
        path: 'user',
        component: _user_user_component__WEBPACK_IMPORTED_MODULE_1__["UserComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    },
    {
        path: 'owner',
        component: _owner_owner_component__WEBPACK_IMPORTED_MODULE_2__["OwnerComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    },
    {
        path: 'createAuction',
        component: _create_auction_create_auction_component__WEBPACK_IMPORTED_MODULE_3__["CreateAuctionComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    },
    {
        path: 'changeowner',
        component: _changeowner_changeowner_component__WEBPACK_IMPORTED_MODULE_4__["ChangeownerComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    },
    {
        path: 'setresult',
        component: _setresult_setresult_component__WEBPACK_IMPORTED_MODULE_5__["SetresultComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    },
    {
        path: 'select',
        component: _select_select_component__WEBPACK_IMPORTED_MODULE_14__["SelectComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    },
    {
        path: 'myaccount',
        component: _myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_6__["MyaccountComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    },
    {
        path: 'bidlog',
        component: _bidlog_bidlog_component__WEBPACK_IMPORTED_MODULE_7__["BidlogComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    },
    {
        path: 'winhistory',
        component: _winhistory_winhistory_component__WEBPACK_IMPORTED_MODULE_8__["WinhistoryComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    },
    {
        path: 'live',
        component: _liveauction_liveauction_component__WEBPACK_IMPORTED_MODULE_9__["LiveauctionComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    },
    {
        path: 'closed',
        component: _closedauction_closedauction_component__WEBPACK_IMPORTED_MODULE_10__["ClosedauctionComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    },
    {
        path: 'upcoming',
        component: _upcomingauction_upcomingauction_component__WEBPACK_IMPORTED_MODULE_11__["UpcomingauctionComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    },
    {
        path: 'winners',
        component: _meetwinners_meetwinners_component__WEBPACK_IMPORTED_MODULE_12__["MeetwinnersComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"]]
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }
];


/***/ }),

/***/ "./src/app/select/select.component.css":
/*!*********************************************!*\
  !*** ./src/app/select/select.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-size{\n    font-size: 13px;\n    font-weight: bolder; \n }\n\n thead{\n    background-color:#273246;\n    color: white;\n}\n\n .trhighlighting:hover{\n    background-color: bisque\n }"

/***/ }),

/***/ "./src/app/select/select.component.html":
/*!**********************************************!*\
  !*** ./src/app/select/select.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"container-fluid\" >\n    <div class = \"row\">\n    <div class=\"col-sm-6 auction\" >\n    <div class=\"panel panel-default \">\n      <div class=\"panel-heading text-size\">OVERALL AUCTIONS</div>\n      <div class=\"panel-body\">\n         <input type=\"text\" id=\"myInput\" (keyup)=\"myFunction()\" class=\"form-control\" placeholder=\"Search for productNames..\" title=\"Type in a name\">\n         \n        <form class=\"form-inline\">\n          <div class=\"form-group\" style=\"text-align: center;margin: 30px 0 0 0;max-height:500px\">          \n              <div class=\"table-responsive\" style=\"max-height:500px\">\n                  <table class=\"table table-bordered table-framed\" id=\"select\">\n                      <thead class=\"tablecolor\" >\n                          <tr>\n                            <th>Auction Id</th>\n                            <th>Product Name </th>\n                            <th></th>\n          \n                          </tr>\n                      </thead>\n                      <tbody>\n                          <tr class=\"trhighlighting\" *ngFor=\"let element of auction\">\n                            <td>{{ element.auctionId }}</td>\n                            <td>{{ element.productname }}</td>\n                            <td><button type=\"button\" class=\"btn btn-warning \" value=\"select\" (click)=\"storeaid( element.auctionId )\">Select</button></td>\n                           </tr>\n                      </tbody>\n                  </table>\n          </div>\n          </div>\n        </form>\n      </div>\n    </div>\n    </div>\n    \n    \n    \n    \n    <div class=\"col-sm-6 auction\" >\n    <div class=\"panel panel-default \">\n      <div class=\"panel-heading text-size\">DISPLAYED AUCTIONS</div>\n      <div class=\"panel-body\">\n        <form class=\"form-inline\">\n          <div class=\"form-group\" style=\"text-align: center;max-height:600px\">           \n              <div class=\"table-responsive\"  style=\"max-height:600px\">\n                  <table class=\"table table-bordered table-framed\">\n                      <thead class=\"tablecolor \">\n                          <tr>\n                            <th>Auction Id</th>\n                            <th>Product Name </th>\n                            <th></th>\n          \n                          </tr>\n                      </thead>\n                      <tbody>\n                          <tr class=\"trhighlighting\" *ngFor=\"let element of selected_aid\">\n                            <td>{{ element.auctionId }}</td>\n                            <td>{{ element.productname }}</td>\n                            <td><button type=\"button\" class=\"btn btn-warning \" value=\"select\" (click)=\"storeaid(element.auctionId)\">Remove</button></td>\n                          </tr>\n                      </tbody>\n                  </table>\n          </div>\n          </div>\n        </form>\n      </div>\n    </div>\n    </div>\n    </div>\n    </div>"

/***/ }),

/***/ "./src/app/select/select.component.ts":
/*!********************************************!*\
  !*** ./src/app/select/select.component.ts ***!
  \********************************************/
/*! exports provided: SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_grabit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/grabit.service */ "./src/app/service/grabit.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelectComponent = /** @class */ (function () {
    function SelectComponent(grabit) {
        this.grabit = grabit;
        this.auction = [];
        this.selected_aid = [];
    }
    SelectComponent.prototype.table_data = function () {
        var instance = this;
        instance.grabit.getauctiondetails().then(function (res) {
            instance.selected_aid.length = 0;
            instance.auction.length = 0;
            var data = Object.keys(res[1]).length;
            for (var i = 0; i < data; i++) {
                if (res[1][i]['Auctionstatus'] == true) {
                    var obj = {};
                    obj['auctionId'] = res[1][i]['auctionid'];
                    obj['productname'] = res[1][i]['productname'];
                    instance.selected_aid.push(obj);
                }
                else if (res[1][i]['Auctionstatus'] == false) {
                    var obj = {};
                    obj['auctionId'] = res[1][i]['auctionid'];
                    obj['productname'] = res[1][i]['productname'];
                    instance.auction.push(obj);
                }
            }
        });
    };
    SelectComponent.prototype.storeaid = function (selected) {
        var instance = this;
        var obj = {};
        obj["auctionid"] = selected;
        instance.grabit.storeselectedproduct(obj).subscribe(function (res) {
            instance.table_data();
        }, function (err) {
            console.log(err);
        });
    };
    SelectComponent.prototype.myFunction = function () {
        var input, filter, table, tr, td, i;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        table = document.getElementById("select");
        tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[1];
            if (td) {
                if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                }
                else {
                    tr[i].style.display = "none";
                }
            }
        }
    };
    SelectComponent.prototype.ngOnInit = function () {
        this.table_data();
    };
    SelectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-select',
            template: __webpack_require__(/*! ./select.component.html */ "./src/app/select/select.component.html"),
            styles: [__webpack_require__(/*! ./select.component.css */ "./src/app/select/select.component.css")]
        }),
        __metadata("design:paramtypes", [_service_grabit_service__WEBPACK_IMPORTED_MODULE_1__["GrabitService"]])
    ], SelectComponent);
    return SelectComponent;
}());



/***/ }),

/***/ "./src/app/sendcredits/sendcredits.component.css":
/*!*******************************************************!*\
  !*** ./src/app/sendcredits/sendcredits.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-size{\n    font-size: 13px;\n    font-weight: bolder; \n }"

/***/ }),

/***/ "./src/app/sendcredits/sendcredits.component.html":
/*!********************************************************!*\
  !*** ./src/app/sendcredits/sendcredits.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-1\"></div>\n<div class=\"col-sm-10 auction\">\n<div class=\"panel panel-default \">\n   <div class=\"panel-heading text-size\" style=\"background-color: #273246;color: white\">SEND CREDITS</div>\n   <div class=\"panel-body\">\n         <div class=\"col-sm-3\"></div>\n         <form class=\"form-horizontal col-sm-7\" action=\"#\">\n          <fieldset class=\"content-group\">\n            <div class=\"form-group\">\n              <div class=\"col-lg-10\">\n                <input type=\"text\" placeholder=\"Receiver Address\" class=\"form-control\" id=\"raddress\" #recevieraddress>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"col-lg-10\">\n                <input type=\"text\" placeholder=\"No.of.credits\" class=\"form-control\" id=\"creditsid\" #creadits>\n                <div class=\"text-center\">\n                  <br><button type=\"button\" class=\"btn btn-success btn-lg\" (click)=\"sendcredits(recevieraddress.value,creadits.value)\">Send&nbsp;<i class=\"icon-transmission\"></i></button>\n                </div>\n                <br>\n                <p *ngIf=\"validation_error\" style=\"text-align: center; color: red\">Enter all details correctly</p>\n                <p *ngIf=\"successful\"  style=\"text-align: center; color: green\">Credits sent successfully </p>\n                <p *ngIf=\"unable_to_perform\"  style=\"text-align: center; color: red\">Unable to perform this Transaction</p>\n                <p *ngIf=\"revert_error\"  style=\"text-align: center; color: red\">Transaction Failed</p>\n              </div>\n            </div>\n            </fieldset>\n      </form>\n      <!-- <div class=\"col-sm-2\"></div> -->\n   </div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/sendcredits/sendcredits.component.ts":
/*!******************************************************!*\
  !*** ./src/app/sendcredits/sendcredits.component.ts ***!
  \******************************************************/
/*! exports provided: SendcreditsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SendcreditsComponent", function() { return SendcreditsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_grabit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/grabit.service */ "./src/app/service/grabit.service.ts");
/* harmony import */ var _owner_owner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../owner/owner.component */ "./src/app/owner/owner.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SendcreditsComponent = /** @class */ (function () {
    function SendcreditsComponent(grabit, owner) {
        this.grabit = grabit;
        this.owner = owner;
    }
    SendcreditsComponent.prototype.sendcredits = function (receiver, credit) {
        var meta = this;
        meta.validation_error = false;
        meta.successful = false;
        meta.unable_to_perform = false;
        meta.revert_error = false;
        if (receiver.trim() != "" && credit.trim() != "") {
            meta.owner.spinner.show();
            meta.grabit.mint(receiver, credit).then(function (res) {
                meta.owner.spinner.hide();
                if (res == 1) {
                    document.getElementById("raddress").value = "";
                    document.getElementById("creditsid").value = "";
                    meta.successful = true;
                }
                else if (res == 0) {
                    meta.unable_to_perform = true;
                }
                else if (res == 2) {
                    meta.revert_error = true;
                }
            });
        }
        else {
            meta.validation_error = true;
        }
    };
    SendcreditsComponent.prototype.ngOnInit = function () {
    };
    SendcreditsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sendcredits',
            template: __webpack_require__(/*! ./sendcredits.component.html */ "./src/app/sendcredits/sendcredits.component.html"),
            styles: [__webpack_require__(/*! ./sendcredits.component.css */ "./src/app/sendcredits/sendcredits.component.css")]
        }),
        __metadata("design:paramtypes", [_service_grabit_service__WEBPACK_IMPORTED_MODULE_1__["GrabitService"], _owner_owner_component__WEBPACK_IMPORTED_MODULE_2__["OwnerComponent"]])
    ], SendcreditsComponent);
    return SendcreditsComponent;
}());



/***/ }),

/***/ "./src/app/service/grabit.json":
/*!*************************************!*\
  !*** ./src/app/service/grabit.json ***!
  \*************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, default */
/***/ (function(module) {

module.exports = [{"constant":false,"inputs":[{"name":"_aID","type":"uint256"}],"name":"bidding","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"oldAID","type":"uint256"},{"name":"_startTime","type":"uint256"},{"name":"_endTime","type":"uint256"},{"name":"_regStartTime","type":"uint256"},{"name":"_regEndTime","type":"uint256"}],"name":"cloneAuction","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_startTime","type":"uint256"},{"name":"_endTime","type":"uint256"},{"name":"_basePrice","type":"uint256"},{"name":"_bidIncrement","type":"uint256"},{"name":"_minBid","type":"uint256"},{"name":"_resetTime","type":"uint256"},{"name":"_regStartTime","type":"uint256"},{"name":"_regEndTime","type":"uint256"},{"name":"minBidders","type":"uint256"}],"name":"createAuction","outputs":[{"name":"","type":"uint256"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_aID","type":"uint256"}],"name":"finalizeAuction","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_aID","type":"uint256"},{"name":"_amount","type":"uint256"}],"name":"manualBidding","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokens","type":"uint256"}],"name":"mint","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_aID","type":"uint256"}],"name":"PreRegister","outputs":[{"name":"","type":"bool"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"auctionID","type":"uint256"},{"indexed":false,"name":"winner","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"AuctionFinalized","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"auctionID","type":"uint256"}],"name":"AuctionCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"bidder","type":"address"},{"indexed":false,"name":"auctionID","type":"uint256"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"auctionEndTime","type":"uint256"}],"name":"Bidding","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"constant":true,"inputs":[{"name":"_aID","type":"uint256"}],"name":"auctionDetails","outputs":[{"name":"times","type":"uint256[]"},{"name":"basePrice","type":"uint256"},{"name":"bidIncrement","type":"uint256"},{"name":"bidBounds","type":"uint256[]"},{"name":"resetTime","type":"uint256"},{"name":"lastBidDetails","type":"uint256[]"},{"name":"status","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"auctionList","outputs":[{"name":"","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"balanceOf","outputs":[{"name":"accountbalance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_aID","type":"uint256"}],"name":"bidDetails","outputs":[{"name":"amount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_aId","type":"uint256"}],"name":"canClone","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"currentTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_aID","type":"uint256"},{"name":"_address","type":"address"}],"name":"isPreRegistered","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"address"}],"name":"preRegisterList","outputs":[{"name":"status","type":"uint256"},{"name":"time","type":"uint256"},{"name":"bidded","type":"bool"},{"name":"chances","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_aID","type":"uint256"}],"name":"registeredListForAuction","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"tokensMinted","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}];

/***/ }),

/***/ "./src/app/service/grabit.service.ts":
/*!*******************************************!*\
  !*** ./src/app/service/grabit.service.ts ***!
  \*******************************************/
/*! exports provided: GrabitService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrabitService", function() { return GrabitService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ethereumjs_tx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethereumjs-tx */ "./node_modules/ethereumjs-tx/es5/index.js");
/* harmony import */ var ethereumjs_tx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ethereumjs_tx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3 */ "./node_modules/web3/src/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var json = __webpack_require__(/*! ./grabit.json */ "./src/app/service/grabit.json");
var GrabitService = /** @class */ (function () {
    function GrabitService(http) {
        this.http = http;
        this.noAuthHeader = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'NoAuth': 'True' }) };
        this._grabItContractAddress = "0x013f3a4b98db9469dd245edbd00c8896a29d0c94";
        this.prod_zoom = {};
        this._web3 = new web3__WEBPACK_IMPORTED_MODULE_5___default.a(new web3__WEBPACK_IMPORTED_MODULE_5___default.a.providers.HttpProvider('https://ropsten.infura.io/Vr1GWcLG0XzcdrZHWMPu'));
        this._grabItContract = new this._web3.eth.Contract(json, this._grabItContractAddress, { gaslimit: 3000000 });
    }
    GrabitService.prototype.refresh = function () {
        window.onload = function () {
            document.onkeydown = function (e) {
                return (e.which || e.keyCode) != 116;
            };
        };
    };
    GrabitService.prototype.check_admin = function () {
        var meta = this;
        meta.owner().then(function (owner) {
            if (meta._etherumAccountAddress == owner) {
                meta.isadmin = true;
            }
        });
    };
    GrabitService.prototype.getUserName = function (public_key) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api + '/getUserName/' + public_key, this.noAuthHeader);
    };
    GrabitService.prototype.getAuctionById = function (id) {
        // var obj={};
        // obj["auctionid"]=id;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api + '/getAuctionById/' + id, this.noAuthHeader);
    };
    GrabitService.prototype.getuserthings = function () {
        var token = this.getToken();
        // var to={};
        // to['token']=token;
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api + '/userProfile/' + token, this.noAuthHeader);
    };
    GrabitService.prototype.storeselectedproduct = function (selected) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api + '/storeselectedproduct', selected);
    };
    GrabitService.prototype.lastBidderDetails = function (_aID) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this._grabItContract.getPastEvents('Bidding', { fromBlock: 0, toBlock: 'latest' }, function (error, result) {
                            if (!error) {
                                var array_1 = [];
                                result.find(function (element) {
                                    if (element['returnValues'].auctionID == _aID) {
                                        array_1.push(element);
                                    }
                                });
                                if (array_1.length != 0) {
                                    resolve(array_1[array_1.length - 1]);
                                }
                                else {
                                    resolve('No Bid Logs Found');
                                }
                            }
                            else {
                            }
                        });
                    })];
            });
        });
    };
    GrabitService.prototype.Particular_bid_details = function (_aID) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this._grabItContract.getPastEvents('Bidding', { fromBlock: 0, toBlock: 'latest' }, function (error, result) {
                            if (!error) {
                                var array_2 = [];
                                result.find(function (element) {
                                    if (element['returnValues'].auctionID == _aID) {
                                        array_2.push(element);
                                    }
                                });
                                resolve(array_2);
                            }
                            else {
                            }
                        });
                    })];
            });
        });
    };
    GrabitService.prototype.event_Bidding = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this._grabItContract.getPastEvents('Bidding', { fromBlock: 0, toBlock: 'latest' }, function (error, result) {
                            console.log(result);
                            resolve(result);
                        });
                    })];
            });
        });
    };
    GrabitService.prototype.event_OwnershipTransferred = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this._grabItContract.getPastEvents('OwnershipTransferred', { fromBlock: 0, toBlock: 'latest' }, function (error, result) {
                            resolve(result);
                        });
                    })];
            });
        });
    };
    GrabitService.prototype.event_Mint = function () {
        return __awaiter(this, void 0, void 0, function () {
            var meta;
            return __generator(this, function (_a) {
                meta = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        meta._grabItContract.getPastEvents('Mint', { fromBlock: 0, toBlock: 'latest' }, function (error, result) {
                            resolve(result);
                        });
                    })];
            });
        });
    };
    GrabitService.prototype.event_Transfer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this._grabItContract.getPastEvents('Transfer', { fromBlock: 0, toBlock: 'latest' }, function (error, result) {
                            resolve(result);
                        });
                    })];
            });
        });
    };
    GrabitService.prototype.event_AuctionFinalized = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this._grabItContract.getPastEvents('AuctionFinalized', { fromBlock: 0, toBlock: 'latest' }, function (error, result) {
                            resolve(result);
                        });
                    })];
            });
        });
    };
    GrabitService.prototype.event_AuctionCreated = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        _this._grabItContract.getPastEvents('AuctionCreated', { fromBlock: 0, toBlock: 'latest' }, function (error, result) {
                            resolve(result);
                        });
                    })];
            });
        });
    };
    GrabitService.prototype.postUser = function (user) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api + '/register', user, this.noAuthHeader);
    };
    GrabitService.prototype.login = function (authCredentials) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api + '/authenticate', authCredentials, this.noAuthHeader);
    };
    // forgotpassword(temp1) {
    //   return this.http.put(environment.api + '/forgotpassword',temp1,this.noAuthHeader);
    // }
    GrabitService.prototype.forgotpassword = function (temp1) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api + '/forgotpassword', temp1, this.noAuthHeader);
    };
    GrabitService.prototype.preregister = function (auctionid) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance._web3.eth.getTransactionCount(instance._etherumAccountAddress, function (err, result) {
                            var nonce = result.toString(16);
                            var private_key = buffer__WEBPACK_IMPORTED_MODULE_3__["Buffer"].from(instance._privateKey, 'hex');
                            var contract_function = instance._grabItContract.methods.PreRegister(auctionid);
                            var contract_function_abi = contract_function.encodeABI();
                            var txParams = {
                                nonce: '0x' + nonce,
                                gasPrice: '0x4A817C800',
                                gasLimit: 4000000,
                                from: instance._etherumAccountAddress,
                                to: instance._grabItContractAddress,
                                value: '0x0',
                                data: contract_function_abi
                            };
                            var tx = new ethereumjs_tx__WEBPACK_IMPORTED_MODULE_2__(txParams);
                            tx.sign(private_key);
                            var serializedtx = tx.serialize();
                            instance._web3.eth.sendSignedTransaction('0x' + serializedtx.toString('hex'), function (err, result) {
                                if (err != null) {
                                    console.log("err");
                                    resolve(0);
                                }
                                else {
                                    instance.hash(result).then(function (res) {
                                        if (res == 0) {
                                            resolve(0);
                                        }
                                        else if (res == 1) {
                                            resolve(1);
                                        }
                                        else if (res == 2) {
                                            resolve(2);
                                        }
                                    });
                                }
                            });
                        });
                    })];
            });
        });
    };
    GrabitService.prototype.ispreregistered = function (auctionid) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            var _this = this;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance._grabItContract.methods.isPreRegistered(auctionid, _this._etherumAccountAddress).call(function (error, result) {
                            if (error != null) {
                                reject(error);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    GrabitService.prototype.getauctiondetails = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        {
                            _this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api + '/productDetails').subscribe(function (res) {
                                var temp = res;
                                var array = [];
                                for (var a = 0; a < temp.length; a++) {
                                    array.push(a);
                                }
                                var result = [];
                                result.push(array);
                                result.push(res);
                                resolve(result);
                            }, function (err) {
                                console.log(err);
                            });
                        }
                    })];
            });
        });
    };
    GrabitService.prototype.registeredListForAuction = function (auctionid) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance._grabItContract.methods.registeredListForAuction(auctionid).call(function (error, result) {
                            if (error != null) {
                                reject(error);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    GrabitService.prototype.canClone = function (auctionid) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance._grabItContract.methods.canClone(auctionid).call(function (error, result) {
                            if (error != null) {
                                reject(error);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    GrabitService.prototype.setToken = function (token) {
        localStorage.setItem('token', token);
    };
    GrabitService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    GrabitService.prototype.deleteToken = function () {
        localStorage.removeItem('token');
    };
    GrabitService.prototype.getUserPayload = function () {
        var token = this.getToken();
        if (token) {
            var userPayload = atob(token.split('.')[1]);
            return JSON.parse(userPayload);
        }
        else
            return null;
    };
    GrabitService.prototype.isLoggedIn = function () {
        var userPayload = this.getUserPayload();
        if (userPayload)
            return userPayload.exp > Date.now() / 1000;
        else
            return false;
    };
    GrabitService.prototype.upload = function (ipfs_hash, product_name) {
        var obj = {};
        obj['ipfs_hash'] = ipfs_hash;
        obj['product_name'] = product_name;
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api + '/productdetailssave', obj, this.noAuthHeader)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    GrabitService.prototype.changepassword = function (change) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api + '/changepassword', change, this.noAuthHeader);
    };
    GrabitService.prototype.getUserProfile = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].api + '/userDetails', this.noAuthHeader);
    };
    GrabitService.prototype.setPrivateKey = function (privateKey) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                instance._privateKey = privateKey;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var obj;
                        try {
                            obj = instance._web3.eth.accounts.privateKeyToAccount('0x' + privateKey);
                        }
                        catch (e) {
                            resolve(false);
                        }
                        instance._etherumAccountAddress = obj["address"];
                        instance.check_admin();
                        resolve(true);
                    })];
            });
        });
    };
    GrabitService.prototype.getEtherumAccountBalance = function () {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance._web3.eth.getBalance(instance._etherumAccountAddress, function (err, result) {
                            if (err != null) {
                                reject(err);
                            }
                            else {
                                resolve(instance._web3.utils.fromWei(result, 'ether'));
                            }
                        });
                    })];
            });
        });
    };
    GrabitService.prototype.owner = function () {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance._grabItContract.methods.owner().call(function (error, result) {
                            if (error != null) {
                                reject(error);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    GrabitService.prototype.transferOwnership = function (newOwner) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance._web3.eth.getTransactionCount(instance._etherumAccountAddress, function (err, result) {
                            var nonce = result.toString(16);
                            var private_key = buffer__WEBPACK_IMPORTED_MODULE_3__["Buffer"].from(instance._privateKey, 'hex');
                            var contract_function = instance._grabItContract.methods.transferOwnership(newOwner);
                            var contract_function_abi = contract_function.encodeABI();
                            var txParams = {
                                nonce: '0x' + nonce,
                                gasPrice: '0x4A817C800',
                                gasLimit: 4000000,
                                from: instance._etherumAccountAddress,
                                to: instance._grabItContractAddress,
                                value: '0x00',
                                data: contract_function_abi
                            };
                            var tx = new ethereumjs_tx__WEBPACK_IMPORTED_MODULE_2__(txParams);
                            tx.sign(private_key);
                            var serializedtx = tx.serialize();
                            instance._web3.eth.sendSignedTransaction('0x' + serializedtx.toString('hex'), function (err, result) {
                                if (err != null) {
                                    console.log("err");
                                    resolve(0);
                                }
                                else {
                                    instance.hash(result).then(function (res) {
                                        if (res == 0) {
                                            resolve(0);
                                        }
                                        else if (res == 1) {
                                            resolve(1);
                                        }
                                        else if (res == 2) {
                                            resolve(2);
                                        }
                                    });
                                }
                            });
                        });
                    })];
            });
        });
    };
    GrabitService.prototype.transfer = function (_to, _value) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance._web3.eth.getTransactionCount(instance._etherumAccountAddress, function (err, result) {
                            var nonce = result.toString(16);
                            var private_key = buffer__WEBPACK_IMPORTED_MODULE_3__["Buffer"].from(instance._privateKey, 'hex');
                            var contract_function = instance._grabItContract.methods.transfer(_to, _value);
                            var contract_function_abi = contract_function.encodeABI();
                            var txParams = {
                                nonce: '0x' + nonce,
                                gasPrice: '0x4A817C800',
                                gasLimit: 4000000,
                                from: instance._etherumAccountAddress,
                                to: instance._grabItContractAddress,
                                value: '0x00',
                                data: contract_function_abi
                            };
                            var tx = new ethereumjs_tx__WEBPACK_IMPORTED_MODULE_2__(txParams);
                            tx.sign(private_key);
                            var serializedtx = tx.serialize();
                            instance._web3.eth.sendSignedTransaction('0x' + serializedtx.toString('hex'), function (err, result) {
                                if (err != null) {
                                    console.log("err");
                                    resolve(0);
                                }
                                else {
                                    instance.hash(result).then(function (res) {
                                        if (res == 0) {
                                            resolve(0);
                                        }
                                        else if (res == 1) {
                                            resolve(1);
                                        }
                                        else if (res == 2) {
                                            resolve(2);
                                        }
                                    });
                                }
                            });
                        });
                    })];
            });
        });
    };
    GrabitService.prototype.mint = function (_to, _tokens) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance._web3.eth.getTransactionCount(instance._etherumAccountAddress, function (err, result) {
                            var nonce = result.toString(16);
                            var private_key = buffer__WEBPACK_IMPORTED_MODULE_3__["Buffer"].from(instance._privateKey, 'hex');
                            var contract_function = instance._grabItContract.methods.mint(_to, _tokens);
                            var contract_function_abi = contract_function.encodeABI();
                            var txParams = {
                                nonce: '0x' + nonce,
                                gasPrice: '0x4A817C800',
                                gasLimit: 4000000,
                                from: instance._etherumAccountAddress,
                                to: instance._grabItContractAddress,
                                value: '0x00',
                                data: contract_function_abi
                            };
                            var tx = new ethereumjs_tx__WEBPACK_IMPORTED_MODULE_2__(txParams);
                            tx.sign(private_key);
                            var serializedtx = tx.serialize();
                            instance._web3.eth.sendSignedTransaction('0x' + serializedtx.toString('hex'), function (err, result) {
                                if (err != null) {
                                    console.log("err");
                                    resolve(0);
                                }
                                else {
                                    instance.hash(result).then(function (res) {
                                        if (res == 0) {
                                            resolve(0);
                                        }
                                        else if (res == 1) {
                                            resolve(1);
                                        }
                                        else if (res == 2) {
                                            resolve(2);
                                        }
                                    });
                                }
                            });
                        });
                    })];
            });
        });
    };
    GrabitService.prototype.balanceOf = function () {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance._grabItContract.methods.balanceOf().call({ from: instance._etherumAccountAddress }, function (error, result) {
                            if (error != null) {
                                reject(error);
                            }
                            else {
                                resolve(result); //instance._web3.utils.fromWei(result,'ether')
                            }
                        });
                    })];
            });
        });
    };
    GrabitService.prototype.currentTime = function () {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance._grabItContract.methods.currentTime().call(function (error, result) {
                            if (error != null) {
                                reject(error);
                            }
                            else {
                                resolve(result);
                                // var t=new Date(Date.now()).getTime() / 1000;
                                // var a:any = Math.round(t);
                                // console.log(a);
                                // resolve(a);
                            }
                        });
                    })];
            });
        });
    };
    GrabitService.prototype.createAuction = function (start, end, base_price, bid_increment, minimum_bid, reset_time, reg_start, reg_end, minimum_bidders) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance._web3.eth.getTransactionCount(instance._etherumAccountAddress, function (err, result) {
                            var nonce = result.toString(16);
                            var private_key = buffer__WEBPACK_IMPORTED_MODULE_3__["Buffer"].from(instance._privateKey, 'hex');
                            var contract_function = instance._grabItContract.methods.createAuction(start, end, base_price, bid_increment, minimum_bid, reset_time, reg_start, reg_end, minimum_bidders);
                            var contract_function_abi = contract_function.encodeABI();
                            var txParams = {
                                nonce: '0x' + nonce,
                                gasPrice: '0x4A817C800',
                                gasLimit: 4000000,
                                from: instance._etherumAccountAddress,
                                to: instance._grabItContractAddress,
                                value: '0x0',
                                data: contract_function_abi
                            };
                            var tx = new ethereumjs_tx__WEBPACK_IMPORTED_MODULE_2__(txParams);
                            tx.sign(private_key);
                            var serializedtx = tx.serialize();
                            instance._web3.eth.sendSignedTransaction('0x' + serializedtx.toString('hex'), function (err, result) {
                                if (err != null) {
                                    console.log("err");
                                    resolve(0);
                                }
                                else {
                                    console.log('Hashing...');
                                    instance.hash(result).then(function (res) {
                                        if (res == 0) {
                                            resolve(0);
                                        }
                                        else if (res == 1) {
                                            resolve(1);
                                            console.log('Deployed...');
                                        }
                                        else if (res == 2) {
                                            resolve(2);
                                        }
                                    });
                                }
                            });
                        });
                    })];
            });
        });
    };
    GrabitService.prototype.cloneAuction = function (productid, starttime, endtime, rgstarttime, rgendtime) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance._web3.eth.getTransactionCount(instance._etherumAccountAddress, function (err, result) {
                            var nonce = result.toString(16);
                            var private_key = buffer__WEBPACK_IMPORTED_MODULE_3__["Buffer"].from(instance._privateKey, 'hex');
                            var contract_function = instance._grabItContract.methods.cloneAuction(productid, starttime, endtime, rgstarttime, rgendtime);
                            var contract_function_abi = contract_function.encodeABI();
                            var txParams = {
                                nonce: '0x' + nonce,
                                gasPrice: '0x4A817C800',
                                gasLimit: 4000000,
                                from: instance._etherumAccountAddress,
                                to: instance._grabItContractAddress,
                                value: '0x0',
                                data: contract_function_abi
                            };
                            var tx = new ethereumjs_tx__WEBPACK_IMPORTED_MODULE_2__(txParams);
                            tx.sign(private_key);
                            var serializedtx = tx.serialize();
                            instance._web3.eth.sendSignedTransaction('0x' + serializedtx.toString('hex'), function (err, result) {
                                if (err != null) {
                                    console.log("err");
                                    resolve(0);
                                }
                                else {
                                    console.log('Hashing...');
                                    instance.hash(result).then(function (res) {
                                        if (res == 0) {
                                            resolve(0);
                                        }
                                        else if (res == 1) {
                                            resolve(1);
                                            console.log('Deployed...');
                                        }
                                        else if (res == 2) {
                                            resolve(2);
                                        }
                                    });
                                }
                            });
                        });
                    })];
            });
        });
    };
    GrabitService.prototype.auctionDetails = function (_aID) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance._grabItContract.methods.auctionDetails(_aID).call(function (error, result) {
                            if (error != null) {
                                reject(error);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    GrabitService.prototype.bidDetails = function (_aID) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance._grabItContract.methods.bidDetails(_aID).call({ from: instance._etherumAccountAddress }, function (error, result) {
                            if (error != null) {
                                reject(error);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    GrabitService.prototype.auctionList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance._grabItContract.methods.auctionList().call(function (error, result) {
                            if (error != null) {
                                reject(error);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    })];
            });
        });
    };
    GrabitService.prototype.manualBidding = function (_aID, _amount) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance._web3.eth.getTransactionCount(instance._etherumAccountAddress, function (err, result) {
                            var nonce = result.toString(16);
                            var private_key = buffer__WEBPACK_IMPORTED_MODULE_3__["Buffer"].from(instance._privateKey, 'hex');
                            var contract_function = instance._grabItContract.methods.manualBidding(_aID, _amount);
                            var contract_function_abi = contract_function.encodeABI();
                            var txParams = {
                                nonce: '0x' + nonce,
                                gasPrice: '0x4A817C800',
                                gasLimit: 4000000,
                                from: instance._etherumAccountAddress,
                                to: instance._grabItContractAddress,
                                value: '0x0',
                                data: contract_function_abi
                            };
                            var tx = new ethereumjs_tx__WEBPACK_IMPORTED_MODULE_2__(txParams);
                            tx.sign(private_key);
                            var serializedtx = tx.serialize();
                            instance._web3.eth.sendSignedTransaction('0x' + serializedtx.toString('hex'), function (err, result) {
                                if (err != null) {
                                    console.log("err");
                                    resolve(0);
                                }
                                else {
                                    console.log('Hashing...');
                                    instance.hash(result).then(function (res) {
                                        if (res == 0) {
                                            resolve(0);
                                        }
                                        else if (res == 1) {
                                            resolve(1);
                                            console.log('Deployed...');
                                        }
                                        else if (res == 2) {
                                            resolve(2);
                                        }
                                    });
                                }
                            });
                        });
                    })];
            });
        });
    };
    GrabitService.prototype.finalizeAuction = function (_aID) {
        return __awaiter(this, void 0, void 0, function () {
            var instance;
            return __generator(this, function (_a) {
                instance = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        instance._web3.eth.getTransactionCount(instance._etherumAccountAddress, function (err, result) {
                            var nonce = result.toString(16);
                            var private_key = buffer__WEBPACK_IMPORTED_MODULE_3__["Buffer"].from(instance._privateKey, 'hex');
                            var contract_function = instance._grabItContract.methods.finalizeAuction(_aID);
                            var contract_function_abi = contract_function.encodeABI();
                            var txParams = {
                                nonce: '0x' + nonce,
                                gasPrice: '0x4A817C800',
                                gasLimit: 4000000,
                                from: instance._etherumAccountAddress,
                                to: instance._grabItContractAddress,
                                value: '0x0',
                                data: contract_function_abi
                            };
                            var tx = new ethereumjs_tx__WEBPACK_IMPORTED_MODULE_2__(txParams);
                            tx.sign(private_key);
                            var serializedtx = tx.serialize();
                            instance._web3.eth.sendSignedTransaction('0x' + serializedtx.toString('hex'), function (err, result) {
                                if (err != null) {
                                    console.log("err");
                                    resolve(0);
                                }
                                else {
                                    instance.hash(result).then(function (res) {
                                        if (res == 0) {
                                            resolve(0);
                                        }
                                        else if (res == 1) {
                                            resolve(1);
                                        }
                                        else if (res == 2) {
                                            resolve(2);
                                        }
                                    });
                                }
                            });
                        });
                    })];
            });
        });
    };
    GrabitService.prototype.hash = function (a) {
        return __awaiter(this, void 0, void 0, function () {
            var meta;
            return __generator(this, function (_a) {
                meta = this;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var accountInterval = setInterval(function () {
                            meta._web3.eth.getTransactionReceipt(a, function (err, result) {
                                if (err != null) {
                                    resolve(0);
                                }
                                if (result !== null) {
                                    clearInterval(accountInterval);
                                    if (result.status == 0x1) {
                                        resolve(1);
                                    }
                                    else {
                                        resolve(2);
                                    }
                                }
                            });
                        }, 100);
                    })];
            });
        });
    };
    GrabitService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GrabitService);
    return GrabitService;
}());



/***/ }),

/***/ "./src/app/setresult/setresult.component.css":
/*!***************************************************!*\
  !*** ./src/app/setresult/setresult.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-size{\n    font-size: 15px;\n    font-weight: bolder; \n }\n thead{\n     background-color:#273246;\n     color: white;\n }\n .trhighlighting:hover{\n    background-color: bisque\n }"

/***/ }),

/***/ "./src/app/setresult/setresult.component.html":
/*!****************************************************!*\
  !*** ./src/app/setresult/setresult.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n   <div class=\"panel panel-flat\">\n      <div class=\"panel-heading\">\n        <h5 class=\"panel-title text-size\">FINALIZE RESULT</h5>\n      </div>\n\n      <div class=\"panel-body\">        \n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered table-framed\">\n              <thead>\n                  <tr>\n                    <th>Auction Id</th>\n                    <th>Product Name </th>\n                    <th>Start Time </th>\n                    <th>End Time </th>\n                    <th>Base Price </th>\n                    <th>Bid Increment </th>\n                    <th>Minimum Bid </th>\n                    <th>Last Bidder </th>\n                    <th>Reset Time </th>\n                    <th>Last Bid Amount </th>\n                    <th> </th>\n                  </tr>\n              </thead>\n              <tbody>\n                  <tr class=\"trhighlighting\" *ngFor=\"let element of finalizeresult\">                \n                    <td>{{ element.auctionid }}</td>\n                    <td>{{ element.productname }}</td>\n                    <td>{{ element.start_time }}</td>\n                    <td>{{ element.end_time }}</td>\n                    <td>{{ element.basePrice }}</td>\n                    <td>{{ element.bidIncrement }}</td>\n                    <td>{{ element.minBid }}</td>\n                    <td>{{ element.lastBidder }}</td>\n                    <td>{{ element.resetTime }}</td>\n                    <td>{{ element.lastBidDetails_amount }}</td>\n                    <td><button type=\"button\" class=\"btn btn-warning btn-lg\" (click)=\"setresult(element.auctionid)\" *ngIf=\"!element.buttonshow\">Finalize</button></td>\n                  </tr>\n              </tbody>\n          </table>\n        </div>\n      </div>\n    </div>"

/***/ }),

/***/ "./src/app/setresult/setresult.component.ts":
/*!**************************************************!*\
  !*** ./src/app/setresult/setresult.component.ts ***!
  \**************************************************/
/*! exports provided: SetresultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetresultComponent", function() { return SetresultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_grabit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/grabit.service */ "./src/app/service/grabit.service.ts");
/* harmony import */ var _owner_owner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../owner/owner.component */ "./src/app/owner/owner.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SetresultComponent = /** @class */ (function () {
    function SetresultComponent(grabit, owner) {
        this.grabit = grabit;
        this.owner = owner;
        this.finalizeresult = [];
        this.setresulttable();
        this.uanbleto_perform = false;
        this.revert_error = false;
        this.successful_message = false;
    }
    SetresultComponent.prototype.setresulttable = function () {
        var meta = this;
        meta.uanbleto_perform = false;
        meta.revert_error = false;
        meta.successful_message = false;
        meta.finalizeresult.length = 0;
        meta.grabit.currentTime().then(function (now_time) {
            meta.grabit.getauctiondetails().then(function (actionDetail) {
                var array = actionDetail[1];
                var _loop_1 = function (i) {
                    meta.grabit.auctionDetails(actionDetail[1][i]['auctionid']).then(function (auctions) {
                        if (now_time > auctions[0][1]) {
                            var obj_1 = {};
                            obj_1['auctionid'] = actionDetail[1][i]['auctionid'];
                            obj_1['productname'] = actionDetail[1][i]['productname'];
                            var st = auctions[0][0];
                            var starttime = new Date(st * 1000);
                            obj_1['start_time'] = starttime;
                            var endt = auctions[0][1];
                            var endtime = new Date(endt * 1000);
                            obj_1["end_time"] = endtime;
                            obj_1["basePrice"] = auctions[1];
                            obj_1["bidIncrement"] = auctions[2];
                            obj_1["minBid"] = auctions[3][0];
                            obj_1["resetTime"] = auctions[4];
                            obj_1["lastBidDetails_amount"] = auctions[5][0];
                            meta.grabit.lastBidderDetails(actionDetail[1][i]['auctionid']).then(function (event_result) {
                                if (event_result != 'No Bid Logs Found') {
                                    meta.grabit.getUserName(event_result['returnValues'].bidder).subscribe(function (res) {
                                        obj_1["lastBidder"] = res['fullName'];
                                    });
                                }
                                else {
                                    obj_1["lastBidder"] = "No Bidders";
                                }
                            });
                            if (auctions[6] == 1) {
                                obj_1['buttonshow'] = true;
                            }
                            // let bt:any =auctions[5][1];
                            // let lastbettime:any = new Date(bt*1000);
                            // obj["lastBidDetails_time"]=lastbettime;
                            meta.finalizeresult.push(obj_1);
                        }
                    });
                };
                for (var i = 0; i < array.length; i++) {
                    _loop_1(i);
                }
            });
        });
    };
    SetresultComponent.prototype.setresult = function (_aid) {
        var instance = this;
        instance.uanbleto_perform = false;
        instance.revert_error = false;
        instance.successful_message = false;
        instance.owner.spinner.show();
        instance.grabit.finalizeAuction(_aid).then(function (res) {
            instance.owner.spinner.hide();
            instance.bid_id = _aid;
            if (res == 1) {
                instance.setresulttable();
                instance.successful_message = true;
            }
            else if (res == 0) {
                instance.uanbleto_perform = true;
            }
            else if (res == 2) {
                instance.revert_error = true;
            }
        });
    };
    SetresultComponent.prototype.ngOnInit = function () {
    };
    SetresultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-setresult',
            template: __webpack_require__(/*! ./setresult.component.html */ "./src/app/setresult/setresult.component.html"),
            styles: [__webpack_require__(/*! ./setresult.component.css */ "./src/app/setresult/setresult.component.css")]
        }),
        __metadata("design:paramtypes", [_service_grabit_service__WEBPACK_IMPORTED_MODULE_1__["GrabitService"], _owner_owner_component__WEBPACK_IMPORTED_MODULE_2__["OwnerComponent"]])
    ], SetresultComponent);
    return SetresultComponent;
}());



/***/ }),

/***/ "./src/app/upcomingauction/upcomingauction.component.css":
/*!***************************************************************!*\
  !*** ./src/app/upcomingauction/upcomingauction.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auction-block {\n    background: #fff;\n    border: 1px solid #ddd;\n    border-radius: 5px;\n    overflow: hidden;\n }\n .bid-credit-row {\n    padding: 5px 15px;\n    margin: 0 0 8px;\n }\n .bid-credit-row2 {\n    padding: 5px 15px;\n    margin: 0 0 8px;\n    background-color: #ededed;\n }\n .bid-row {\n    background: #ededed;\n    padding: 8px 15px 15px;\n }\n .cf{\n    zoom:1;\n }\n .bid-status {\n    color: #f28a37;\n    font-size: 14px;\n    font-weight: 500;\n }\n .bid-status {\n    float: right;\n }\n .subhead{\n    color: orangered\n}\n a, u {\n    text-decoration: none;\n}\n .btn-warning{\n    background: #ff9948;\n    line-height: 44px;\n    padding: 0 20px;\n    width: 50%;\n    /* margin-left:100px; */\n    text-align: center\n }\n #last{\n    margin-right: -50px;\n }\n .heading {\n    text-align: center;\n}\n .heading h3{\n    padding: 0 12px;\n    position: relative;\n    display: inline-block;\n    line-height: 34px !important;\n}\n h3{\n    font-size: 38px;\n}"

/***/ }),

/***/ "./src/app/upcomingauction/upcomingauction.component.html":
/*!****************************************************************!*\
  !*** ./src/app/upcomingauction/upcomingauction.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\"  style=\"height: 600px;text-align: center;text-transform: uppercase\" *ngIf=\"!this.grabit.imgshow\">\n    <div  *ngFor=\"let image of images\" >\n       <div class=\"col-sm-4\"  style=\"margin-top: 20px;margin-bottom: 75px;text-align: center;\">\n          <div class=\"row\">\n             <div class=\"col-sm-10\"  style=\"margin-top:25px\">\n                <div>\n                   <div class=\"card\" style=\"border: 1px solid #274356;background-color:white;padding:0 0 10px 0;\">\n                      <div class=\"card-header\">\n                         <h4>{{image.ProductName}}</h4>\n                      </div>\n                      <hr>\n                      <div class=\"card-body\">\n                          <span class=\"bid-price\">Required Bidders&nbsp;&nbsp;\n                              <label id=\"Price16720\" style=\"color: red\"> {{image.required}}</label>\n                          </span>&nbsp;&nbsp;&nbsp;\n                          <span class=\"bid-price\" >Registered Bidders&nbsp;&nbsp;\n                                  <label id=\"Price16720\" style=\"color: blue;\"> {{image.registered}}</label>\n                              </span>\n                              <br>\n                              <span>Registration Amount&nbsp;&nbsp;\n                                  <label id=\"Price16720\" style=\"color: green\">{{image.minimumbid}}&nbsp;&nbsp;<label style=\"color:black\">GRBT</label></label>\n                                  </span>\n                              <h5 class=\"card-title\"><span class=\"subhead\">Base Price:</span> {{ image.Amount }} <span class=\"subhead\">GRBT</span></h5>\n                              <div class=\"card-body\" style=\"text-align: center\">\n                            <img   a (click)=\"zoom_product(image.ProductName,image.Amount,image.Url,image.Auction_Id,image.bidIncrement,image.buttonbid,image.resetTime,image.datedata)\" class=\"card-img-top\" src={{image.Url}} style=\"height: 250px;width: 250px\" alt=\"Card image cap\">\n                         </div>\n                         <div class=\"bid-credit-row\">\n                            <span class=\"auction-id\"><span class=\"subhead\">Auction ID:</span>{{image.Auction_Id}}</span>\n                         </div>                         \n                         <div class=\"bid-credit-row2\" *ngIf=\"!image.timeshow\">\n                            <span class=\"bid-price\"><span class=\"subhead\">Starts AT :</span>\n                            <label id=\"Price16720\">{{hour_shower[image.Auction_Id]|number:'2.0'}}:{{min_shower[image.Auction_Id]|number:'2.0'}}:{{sec_shower[image.Auction_Id]|number:'2.0'}}</label>\n                            </span>\n                         </div>\n                         <div *ngIf=\"image.timeshow\">\n                            {{image.datedata}}\n                         </div>\n                         <hr>\n                         <div class=\"card-footer\">\n                                <p *ngIf=\"image.status==0\" style=\"text-align: center;color: red\">Not Registered</p>\n                                <p *ngIf=\"image.status==1\" style=\"text-align: center;color: green\">Registered</p>\n                              </div>\n                      </div>\n                   </div>\n                </div>\n             </div>\n             <div class=\"col-sm-2\"></div>\n          </div>\n       </div>\n    </div>\n </div>\n <div *ngIf=\"this.grabit.imgshow\">\n    <app-viewauction></app-viewauction>\n </div>"

/***/ }),

/***/ "./src/app/upcomingauction/upcomingauction.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/upcomingauction/upcomingauction.component.ts ***!
  \**************************************************************/
/*! exports provided: UpcomingauctionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpcomingauctionComponent", function() { return UpcomingauctionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_grabit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/grabit.service */ "./src/app/service/grabit.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UpcomingauctionComponent = /** @class */ (function () {
    function UpcomingauctionComponent(grabit) {
        this.grabit = grabit;
        this.images = [];
        this.sec_shower = [];
        this.min_shower = [];
        this.hour_shower = [];
        console.log('Displaying Upcoming Bids...');
        this.upcoming_table();
    }
    UpcomingauctionComponent.prototype.startTimer = function (auctionid) {
        var _this = this;
        var meta = this;
        meta.grabit.auctionDetails(auctionid).then(function (auc_det) {
            meta.grabit.currentTime().then(function (now_time) {
                var timeLeft = Number(auc_det[0][0]) - Number(now_time);
                meta.sec_shower[auctionid] = timeLeft % 60;
                var min_str = (timeLeft / 60).toString();
                var min = min_str.split(".");
                var minutes = Number(min[0]);
                meta.min_shower[auctionid] = minutes % 60;
                var hours_str = (timeLeft / 3600).toString();
                var hours = hours_str.split(".");
                meta.hour_shower[auctionid] = Number(hours[0]);
                var looper = setInterval(function () {
                    if (meta.sec_shower[auctionid] != 0) {
                        meta.sec_shower[auctionid]--;
                    }
                    else {
                        if (meta.hour_shower[auctionid] != 0 || meta.min_shower[auctionid] != 0) {
                            meta.sec_shower[auctionid] = 59;
                            if (meta.min_shower[auctionid] != 0) {
                                meta.min_shower[auctionid]--;
                            }
                            else {
                                if (meta.hour_shower[auctionid] != 0) {
                                    meta.min_shower[auctionid] = 59;
                                    meta.hour_shower[auctionid]--;
                                }
                                else {
                                    clearInterval(looper);
                                    _this.upcoming_table();
                                }
                            }
                        }
                    }
                }, 1000);
                // }
            });
        });
    };
    UpcomingauctionComponent.prototype.zoom_product = function (ProductName, Amount, Url, Auction_Id, bidIncrement, buttonbid, resetTime, datedata) {
        var obj = {};
        obj["ProductName"] = ProductName;
        obj["Amount"] = Amount;
        obj["Url"] = Url;
        obj["Auction_Id"] = Auction_Id;
        obj["bidIncrement"] = bidIncrement;
        // obj["last_Bidded_amount"]=last_Bidded_amount;
        // obj["Bidder_name"]=Bidder_name;
        obj["buttonbid"] = buttonbid;
        obj["resetTime"] = resetTime;
        obj["datedata"] = datedata;
        this.grabit.prod_zoom = obj;
        this.grabit.imgshow = !this.grabit.imgshow;
    };
    UpcomingauctionComponent.prototype.upcoming_table = function () {
        var _this = this;
        this.grabit.getauctiondetails().then(function (details) {
            details[0].forEach(function (a) {
                var i = a + 1;
                _this.grabit.auctionDetails(i).then(function (result) {
                    _this.grabit.currentTime().then(function (now) {
                        if (now < result['times'][0]) {
                            _this.grabit.ispreregistered(i).then(function (state) {
                                var data = {};
                                data['Auction_Id'] = details[1][a]['auctionid'];
                                data['Url'] = 'https://ipfs.infura.io/ipfs/' + details[1][a]['ipfshash'];
                                data['ProductName'] = details[1][a]['productname'];
                                data['resetTime'] = result['resetTime'];
                                data['bidIncrement'] = result['bidIncrement'];
                                data['Amount'] = result['basePrice'];
                                data['datedata'] = "undefined";
                                data['required'] = result['bidBounds'][1];
                                data['registered'] = result['bidBounds'][3];
                                data['minimumbid'] = result['bidBounds'][0];
                                if (86400 < Number(result['times'][0]) - Number(now)) {
                                    data['timeshow'] = true;
                                    data['datedata'] = ((Number(result['times'][0]) - Number(now)) / 86400).toString().split(".")[0] + " Day to go";
                                }
                                data['status'] = state;
                                _this.startTimer(i);
                                _this.images.push(data);
                            });
                        }
                    });
                });
            });
        });
    };
    UpcomingauctionComponent.prototype.ngOnInit = function () {
    };
    UpcomingauctionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upcomingauction',
            template: __webpack_require__(/*! ./upcomingauction.component.html */ "./src/app/upcomingauction/upcomingauction.component.html"),
            styles: [__webpack_require__(/*! ./upcomingauction.component.css */ "./src/app/upcomingauction/upcomingauction.component.css")]
        }),
        __metadata("design:paramtypes", [_service_grabit_service__WEBPACK_IMPORTED_MODULE_1__["GrabitService"]])
    ], UpcomingauctionComponent);
    return UpcomingauctionComponent;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/*!*****************************************!*\
  !*** ./src/app/user/user.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".texttransform{\n    text-transform:uppercase;\n    font-size: 15px;\n }\n \n .topspace{\n    margin: 25px 0  0 0;\n }\n \n .footer {\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    width: 100%;\n    /* height:5%; */\n    background-color:white;\n    color: white;\n    text-align: center;\n }\n \n .footermargin{\n    margin: 50px 0 0 0;\n}\n \n /* \n   nav{\n    background-color: #3d4d65;\n}\n#mainmenu li a {\n display: block;\n line-height: 50px;\n font-size: 18px;\n text-transform: uppercase;\n font-weight: 500;\n padding: 0 27px;\n text-shadow: 0 0 1px rgba(61,77,101,0.25);    \n}\n.navbar-default .navbar-nav>li>a:active {\n color: #ff9948;\n}\na{\ncursor: pointer;\n border-left: 2px solid whitesmoke;\n}\n.navbar-default .navbar-nav>li>a {\n color: #fff;\n}\na:active{\n\n color: #ff9948;\n}\n\na.final{\n border-right: 2px solid whitesmoke;\n}\n\n.fonttransformation{\n margin-top: 10%;\n text-transform: uppercase;\n}\n\n .hr-text {\n     line-height: 1em;\n     position: relative;\n     outline: 0;\n     border: 0;\n     color: #3d4d65;\n     font-weight: bold;\n     text-align: center;\n     height: 1.5em;\n     font-size: 30px;\n   }\n   .hr-text:before {\n     content: '';\n     background: linear-gradient(to right, transparent, #818078, transparent);\n     position: absolute;\n     left: 0;\n     top: 50%;\n     width: 100%;\n     height: 1px;\n   }\n   .hr-text:after {\n     content: attr(data-content);\n     position: relative;\n     display:inline-block;\n     color: #3d4d65;;\n     padding: 0 .5em;\n     line-height: 1.5em;\n     \n     color: #3d4d65;\n     background-color: #fcfcfa;\n   }\n\n\n   .btn-warning {\n     color: #fff;\n     background-color: #ff9948;\n     border-color: #ff9948;\n }\n .btn {\n     display: inline-block;\n     padding: 6px 12px;\n     margin-bottom: 0;\n     font-size: 14px;\n     font-weight: 700;\n     line-height: 1.42857143;\n     text-align: center;\n     white-space: nowrap;\n     vertical-align: middle;\n     -ms-touch-action: manipulation;\n     touch-action: manipulation;\n     cursor: pointer;\n     -webkit-user-select: none;\n     -moz-user-select: none;\n     -ms-user-select: none;\n     user-select: none;\n     background-image: none;\n     border: 1px solid transparent;\n     border-radius: 4px;\n }\n\n .dropdown-menu1>li{\n     text-transform: uppercase;\n     border-bottom: 2px solid whitesmoke;\n }\n .dropdown-menu:active{\n     color: black;\n }*/\n "

/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body class=\"navbar-bottom\">\n    <div class=\"page-header page-header-inverse\">\n       <div class=\"navbar navbar-inverse navbar-transparent\" style=\"margin-bottom:20px\">\n          <div class=\"navbar-header\">\n             <a class=\"navbar-brand\"></a>\n             <ul class=\"nav navbar-nav pull-right visible-xs-block\">\n                <li><a data-toggle=\"collapse\" data-target=\"#navbar-mobile\"><i class=\"icon-grid3\"></i></a></li>\n             </ul>\n          </div>\n          <div class=\"navbar-collapse collapse\" id=\"navbar-mobile\">\n              <div class=\"row\">\n                  <div class=\"col-sm-5 \">           \n                          <h4 style=\"font-family: Comic Sans MS; font-size: 40px;font-weight: 300;\">Grraabit</h4>             \n                  </div>\n                  <div class=\"col-sm-4 topspace\">\n                      <h4 style=\"font-family: Comic Sans MS; font-size: 16px;text-transform: uppercase; font-weight: 300;\">You have <span>&nbsp;{{balance}}</span>&nbsp;credits</h4>\n                      </div>\n                 <div class=\"col-sm-2 topspace\">\n                      <div class=\"navbar-right\">\n                              <ul class=\"nav navbar-nav\">\n                                 <li class=\"dropdown dropdown-user\">\n                                    <a class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n                                    <span class=\"texttransform\">{{user_name}}</span>\n                                    <i class=\"caret\"></i>\n                                    </a>\n                                    <ul class=\"dropdown-menu dropdown-menu-right\">\n                                       <li><a (click) = \"check(5)\"><i class=\"icon-profile\"></i> My Account</a></li>\n                                       <li><a (click) = \"check(6)\"><i class=\"icon-history\"></i> Bid Logs</a></li>                                         \n                                       <li><a (click) = \"check(7)\"><i class=\"icon-cash\"></i> Win History</a></li>\n                                       <li class=\"divider\"></li>\n                                       <li><a (click) = \"onLogout()\"><i class=\"icon-switch2\"></i> Logout</a></li>\n                                    </ul>\n                                 </li>\n                              </ul>\n                           </div> \n                      </div>   \n                  </div>                            \n              </div>\n          </div>\n\n       <div class=\"navbar navbar-inverse navbar-transparent\" id=\"navbar-second\">\n          <ul class=\"nav navbar-nav visible-xs-block\">\n             <li><a class=\"text-center collapsed\" data-toggle=\"collapse\" data-target=\"#navbar-second-toggle\"><i class=\"icon-paragraph-justify3\"></i></a></li>\n          </ul>\n          <div class=\"navbar-collapse collapse\" id=\"navbar-second-toggle\">\n             <ul class=\"nav navbar-nav navbar-nav-material\">\n                <li>\n                   <a (click) = \"check(1)\"><span class=\"icon-select2\"></span> Live Auction </a>\n                </li>\n                <li>\n                  <a (click) = \"check(2)\"><span class=\"icon-cart2\"></span> Closed Auction </a>\n                </li>\n                <li>\n                  <a (click) = \"check(3)\"><span class=\"icon-spinner3 spinner position-left\"></span> Upcoming Auction </a>\n                </li>\n                <li>\n                  <a (click) = \"check(4)\"><span class=\"icon-gift position-left\"></span> Meet Winners </a>\n                </li>  \n                <li>\n                  <a (click) = \"check(8)\">Pre-registration</a>\n               </li>               \n             </ul>\n          </div>\n       </div>\n    </div>\n    <div class=\"page-container\" style=\"min-height:452px\">\n      <div class=\"page-content\">\n        <div class=\"content-wrapper\">\n          <div class=\"row\">\n              <div class=\"container-fluid\" [ngSwitch]=\"optionselected\">\n                <div *ngSwitchCase=\"1\">\n                    <app-liveauction></app-liveauction>\n                </div>\n                <div *ngSwitchCase=\"2\">\n                    <app-closedauction></app-closedauction>\n                </div>\n                <div *ngSwitchCase=\"3\">\n                    <app-upcomingauction></app-upcomingauction>\n                </div>\n                <div *ngSwitchCase=\"4\">\n                    <app-meetwinners></app-meetwinners>\n                </div>\n                <div *ngSwitchCase=\"5\">\n                    <app-myaccount></app-myaccount>\n                </div>\n                <div *ngSwitchCase=\"6\">\n                    <app-bidlog></app-bidlog>\n                </div>\n                <div *ngSwitchCase=\"7\">\n                    <app-winhistory></app-winhistory>\n                </div>\n                <div *ngSwitchCase=\"8\">\n                        <app-preregister></app-preregister>\n                     </div>\n              </div>              \n          </div>\n        </div>\n      </div>\n    </div>   \n    </body>\n    <div class=\"navbar navbar-default  navbar-fixed-bottom footer\">\n      <ul class=\"nav navbar-nav visible-xs-block\">\n         <li><a class=\"text-center collapsed\" data-toggle=\"collapse\" data-target=\"#footer\"><i class=\"icon-circle-up2\"></i></a></li>\n      </ul>\n      <div class=\"navbar-collapse collapse\" id=\"footer\">\n         <div class=\"navbar-text\">\n            &copy; 2018. <a href=\"#\" class=\"navbar-link\">Grraabit Auction</a> by <a href=\"http://chainflux.com/\" class=\"navbar-link\" target=\"_blank\">Chainflux</a>\n         </div>\n         <div class=\"navbar-right\">\n            <ul class=\"nav navbar-nav\">\n               <li><a href=\"http://chainflux.com/about\" target=\"_blank\">About</a></li>\n               <li><a href=\"http://chainflux.com/terms\" target=\"_blank\">Terms</a></li>\n               <li><a href=\"http://chainflux.com/contactus\" target=\"_blank\">Contact</a></li>\n            </ul>\n         </div>\n      </div>\n   </div>\n   <div><ngx-spinner></ngx-spinner></div>"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_grabit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/grabit.service */ "./src/app/service/grabit.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserComponent = /** @class */ (function () {
    function UserComponent(grabit, route, spin) {
        this.grabit = grabit;
        this.route = route;
        this.spin = spin;
        this.optionselected = 1;
        this.load_credits();
        this.load_user_name();
        this.browser_btn_disable();
        this.check_privateKey();
        this.spinner = this.spin;
    }
    UserComponent.prototype.browser_btn_disable = function () {
        history.pushState(null, null, location.href);
        window.onpopstate = function () {
            history.go(1);
        };
    };
    UserComponent.prototype.check_privateKey = function () {
        if (this.grabit._privateKey == undefined || this.grabit._privateKey.length != 64) {
            this.grabit.deleteToken();
            this.route.navigate(['/login']);
        }
    };
    UserComponent.prototype.load_credits = function () {
        var _this = this;
        this.grabit.balanceOf().then(function (res) { return _this.balance = res; });
    };
    UserComponent.prototype.load_user_name = function () {
        var meta = this;
        meta.grabit.getuserthings().subscribe(function (res) {
            meta.user_name = res['user']['fullName'];
        }, function (err) {
        });
    };
    UserComponent.prototype.check = function (selected) {
        this.optionselected = selected;
        this.grabit.imgshow = false;
    };
    UserComponent.prototype.onLogout = function () {
        this.grabit.deleteToken();
        this.route.navigate(['/login']);
    };
    UserComponent.prototype.ngOnInit = function () {
        window.onbeforeunload = function () {
            return "Sure";
        };
        var pipe = this;
        setInterval(function () {
            pipe.grabit.balanceOf().then(function (balance) {
                if (pipe.balance != balance) {
                    pipe.load_credits();
                }
            });
        }, 100);
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [_service_grabit_service__WEBPACK_IMPORTED_MODULE_1__["GrabitService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/viewauction/viewauction.component.css":
/*!*******************************************************!*\
  !*** ./src/app/viewauction/viewauction.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".auction{\n    background:#fff;\n    /* border:1px solid #ddd; */\n    /* border-radius:5px; */\n    overflow:hidden;\n }\n img{\n    text-align: center;\n }\n .timer{\n    background-color: #eaeaea;\n    /* height:66px;\n    width:120px; */\n    text-align: center;\n }\n .bidbox{\n    background-color: #fdfdfd;\n    border:1px solid #ddd;\n    width: 100%;\n    margin-right:50px;\n    text-align: center;\n }\n .subhead{\n    color: orangered\n}\n a, u {\n    text-decoration: none;\n}\n .content{\n    border: 1px solid #ddd;\n    overflow:hidden;\n }\n /* table {\n    width: 100%;\n} */\n /*  */\n th{\n    text-align: center;\n}\n .spacemargin{\n    margin: 10px 0 10px 0;\n}\n .btn-lg{\n    width:276px;\n }\n .tabcontent {\n    display: none;\n    padding: 15px 18px;\n    color: #000000;\n }\n .auction-info li:first-child {\n    border: 0;\n    margin: 0;\n    padding: 0;\n }\n .auction-info li {\n    border-top: 1px solid #ddd;\n    padding-top: 8px;\n    margin-top: 8px;\n    line-height: 1.2;\n    list-style: none\n }\n li {\n    display: list-item;\n    text-align: -webkit-match-parent;\n }\n "

/***/ }),

/***/ "./src/app/viewauction/viewauction.component.html":
/*!********************************************************!*\
  !*** ./src/app/viewauction/viewauction.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"container\">\n     <div class=\"row\">\n          <h1>{{this.grabit.prod_zoom['ProductName']}}</h1>\n        <div class=\"col-sm-6 \" >\n          <div class=\"row\">\n            <div class=\"col-sm-8 auction\">\n                <div class=\"container spacemargin\" >\n                    <img id=\"detimg\" class=\"card-img-top\" src=\"{{this.grabit.prod_zoom['Url']}}\" style=\"height: 250px;width: 250px\" alt=\"Card image cap\">\n                 </div>\n            </div>\n            <div class=\"col-sm-4\">\n\n            </div>\n          </div>\n          \n        </div>\n        <div class=\"col-sm-6 \">\n            <p *ngIf=\"successful_message\" style=\"text-align: center;color: green\">Your Bid recorded successfully</p>\n            <p *ngIf=\"last_Bidder_message\" style=\"text-align: center;color: blue\">You are currently the last Bidder</p>\n            <p *ngIf=\"not_successful_error\" style=\"text-align: center;color: red\">Bid was not successfully placed</p>\n            <p *ngIf=\"basePrice_reached\" style=\"text-align: center;color: red\"> Bid {{current_auctionId}} exceeding the Base Price.</p>\n            <br>\n          <div class=\"row\">\n            <div class=\"col-sm-3 spacemargin\">\n                <div class=\"timer col-sm-12\" style=\"background-color: white\">\n                    <div  class=\"spacemargin\" *ngIf=\"!timeshow || btn_show_closed\">\n                      <p id=\"timer_id\" *ngIf=\"btn_show\">{{this.hour_shower|number:'2.0'}}:{{min_shower|number:'2.0'}}:{{sec_shower|number:'2.0'}}</p>\n                      <p *ngIf=\"btn_show_closed\">Closed</p>\n                      <!-- <p *ngIf=\"this.grabit.prod_zoom['Bidder_name']!=undefined\">{{this.grabit.prod_zoom[\"datedata\"]}}</p> -->\n                      \n                    </div>\n                    <div>\n                        <P *ngIf=\"this.grabit.prod_zoom['Bidder_name']!=undefined\">{{this.grabit.prod_zoom['Bidder_name']}}</P>\n                    </div>\n                    <div *ngIf=\"timeshow\" style=\"padding: 10px\">\n                      <p>{{this.grabit.prod_zoom[\"datedata\"]}}</p>\n                      <!-- <P *ngIf=\"this.grabit.prod_zoom['Bidder_name']!=undefined\">{{this.grabit.prod_zoom['Bidder_name']}}</P> -->\n                    </div>\n                  </div>\n            </div>\n            <div class=\"col-sm-8 spacemargin\">              \n                <div  class=\"bidbox form-group\">\n                    <div class=\"spacemargin\">\n                     <h4 *ngIf=\"!btn_show_upcoming\">Last Bided Amount:{{this.grabit.prod_zoom['last_Bidded_amount']}}</h4> \n                     <span class=\"bid-price\">Required Bidders&nbsp;&nbsp;<label style=\"color: red\">{{this.grabit.prod_zoom['required']}}</label>&nbsp;&nbsp;&nbsp;&nbsp;\n                     </span>\n                     <span class=\"bid-price\" >Registered Bidders&nbsp;&nbsp;<label style=\"color: green\">{{this.grabit.prod_zoom['registered']}}</label>\n                    </span>\n                     <br>\n                      <button  *ngIf=\"btn_show && !btn_show_upcoming && this.grabit.prod_zoom['status']==1 && this.grabit.prod_zoom['registered'] >= this.grabit.prod_zoom['required'] \"(click)=\"manualBidding(this.grabit.prod_zoom['Auction_Id'])\" class=\"btn btn-warning\" style=\"padding:0%;\" id=\"btn\">&nbsp;<i class=\"fas fa-sync-alt\"></i>&nbsp;&nbsp;BID {{this.grabit.prod_zoom['buttonbid']}} GRBT</button>\n                      <p *ngIf=\"this.grabit.prod_zoom['status']==0\" style=\"color: red\">Not Registered</p>\n                      <p *ngIf=\"this.grabit.prod_zoom['status']==1 && this.grabit.prod_zoom['registered']  < this.grabit.prod_zoom['required']\" style=\"color: green\">Registered</p>\n\n                    </div>\n                  </div>\n            </div>\n            <div class=\"col-sm-1\"></div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-6\">\n                <div class=\"btn-group auction\" style=\"text-align:center;\">\n                    <button type=\"button\" class=\"btn btn-warning btn-lg\" id=\"acif\" >Auction Information</button>                    \n                   </div>\n                   <div class=\"col-sm-12 tabcontent\" id=\"auction-information\" style=\"display: block;border: 1px  sandybrown\">\n                      <div class=\"auction-info\">\n                          <ul>\n                             <li> <span class=\"subhead\">Auction ID:</span>\n                                &nbsp;&nbsp;<span id=\"Body_lblAuctionID\">{{this.grabit.prod_zoom['Auction_Id']}}</span>\n                             </li>\n                             <li><span class=\"subhead\">BASE PRICE:</span>\n                                <span>\n                                    &nbsp;&nbsp;<span id=\"Body_lblPrice\">{{this.grabit.prod_zoom['Amount']}}</span>&nbsp;GRBT</span>\n                             </li>\n                             <li><span class=\"subhead\"> Bid Reset Time:</span>\n                                <span>\n                                    &nbsp;&nbsp;<span id=\"Body_lblBidReset\">{{this.grabit.prod_zoom['resetTime']}} seconds</span></span>\n                             </li>\n                             <li><span class=\"subhead\">Bid Increment Type:</span>\n                                <span>\n                                    &nbsp;&nbsp;<span id=\"Body_lblPerBidcredit\">{{this.grabit.prod_zoom['bidIncrement']}}</span></span>\n                             </li>\n                          </ul>\n                       </div> \n                  </div>\n\n            </div>\n            <div class=\"col-sm-6\">\n                <div class=\"btn-group auction\" style=\"text-align:center;\">                   \n                    <button *ngIf=\"!btn_show_upcoming\" type=\"button\" class=\"btn btn-warning btn-lg\" id=\"bidhis\">Bidding History</button>\n                   </div>\n                   <!-- <div style=\"border: 1px  sandybrown\"> -->\n                      <!-- <div class=\"btn-group auction\" style=\"text-align:center;\">\n                         <button type=\"button\" class=\"btn btn-warning btn-lg\" id=\"acif\" >Auction Information</button>\n                         <button *ngIf=\"!btn_show_upcoming\" type=\"button\" class=\"btn btn-warning btn-lg\" id=\"bidhis\">Bidding History</button>\n                        </div> -->\n                        <div>\n                        \n                         <div *ngIf=\"!btn_show_upcoming\" class=\"col-sm-12 tabcontent\" id=\"auction-information\" style=\"display: block;overflow: auto; height:160px;border: 1px  sandybrown\">\n                           <table class=\"table\">\n                             <thead>\n                               <th>Price</th>\n                               <th>User</th>\n                             </thead>\n                             <tbody>\n                               <tr *ngFor=\"let i of bidder_history\" >                                                \n                                   <td>{{i.Price}}</td>\n                                   <td>{{i.Name}}</td> \n                               </tr>\n                             </tbody>\n                           </table>\n                         </div>\n                     </div>\n                      <!-- </div> -->\n\n            </div>\n          </div>\n          \n           <br><br>\n\n          \n\n\n        \n     </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/viewauction/viewauction.component.ts":
/*!******************************************************!*\
  !*** ./src/app/viewauction/viewauction.component.ts ***!
  \******************************************************/
/*! exports provided: ViewauctionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewauctionComponent", function() { return ViewauctionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_grabit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/grabit.service */ "./src/app/service/grabit.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ViewauctionComponent = /** @class */ (function () {
    // public spin:NgxSpinnerService
    function ViewauctionComponent(grabit, spin, user, route) {
        this.grabit = grabit;
        this.spin = spin;
        this.user = user;
        this.route = route;
        this.bidder_history = [];
        this.startTimer();
    }
    ViewauctionComponent.prototype.startTimer = function () {
        var _this = this;
        var meta = this;
        var auctionid = meta.grabit.prod_zoom["Auction_Id"];
        if (meta.grabit.prod_zoom["datedata"] != "undefined") {
            meta.timeshow = true;
        }
        meta.get_history(auctionid);
        meta.grabit.auctionDetails(auctionid).then(function (auc_det) {
            _this.grabit.ispreregistered(auctionid).then(function (state) {
                meta.grabit.prod_zoom['required'] = auc_det['bidBounds'][1];
                meta.grabit.prod_zoom['registered'] = auc_det['bidBounds'][3];
                meta.grabit.prod_zoom['status'] = state;
                meta.grabit.currentTime().then(function (now_time) {
                    if (now_time > auc_det[0][1]) {
                        meta.btn_show_closed = true;
                    }
                    else if (now_time > auc_det[0][0]) {
                        meta.btn_show = true;
                        meta.timeshow = false;
                        if (meta.grabit.prod_zoom["timeshow"]) {
                            meta.timeshow = true;
                        }
                        meta.grabit.lastBidderDetails(auctionid).then(function (lastbid) {
                            var timeLeft = Number(auc_det[0][1]) - Number(now_time);
                            meta.sec_shower = timeLeft % 60;
                            var min_str = (timeLeft / 60).toString();
                            var min = min_str.split(".");
                            var minutes = Number(min[0]);
                            //  while(minutes>59){
                            //      minutes = Number((minutes/60).toString().split(".")[0]);
                            //  }
                            meta.min_shower = minutes % 60;
                            // meta.min_shower=Number((timeLeft/60).toString().split(".")[0]);
                            var hours_str = (timeLeft / 3600).toString();
                            var hours = hours_str.split(".");
                            meta.hour_shower = Number(hours[0]);
                            var checker = lastbid;
                            if (typeof (lastbid) == typeof ("string")) {
                                checker = "";
                            }
                            else {
                                checker = lastbid.returnValues.bidder;
                            }
                            var looper = setInterval(function () {
                                meta.grabit.lastBidderDetails(auctionid).then(function (newbid) {
                                    if (newbid.returnValues !== undefined) {
                                        if (checker != newbid.returnValues.bidder) {
                                            meta.grabit.getUserName(newbid.returnValues.bidder).subscribe(function (username) {
                                                meta.grabit.auctionDetails(auctionid).then(function (result) {
                                                    console.log(result['bidBounds'][1] + " " + result['bidBounds'][3]);
                                                    meta.grabit.prod_zoom['Bidder_name'] = username['fullName'];
                                                    meta.grabit.prod_zoom['last_Bidded_amount'] = newbid['returnValues'].amount;
                                                    meta.grabit.prod_zoom['buttonbid'] = Number(auc_det['bidIncrement']) + Number(newbid['returnValues'].amount);
                                                    checker = newbid.returnValues.bidder;
                                                    clearInterval(looper);
                                                    meta.startTimer();
                                                });
                                            });
                                        }
                                    }
                                });
                                if (meta.sec_shower != 0) {
                                    meta.sec_shower--;
                                }
                                else {
                                    if (meta.hour_shower != 0 || meta.min_shower != 0) {
                                        meta.sec_shower = 59;
                                        if (meta.min_shower != 0) {
                                            meta.min_shower--;
                                        }
                                        else {
                                            if (meta.hour_shower != 0) {
                                                meta.min_shower = 59;
                                                meta.hour_shower--;
                                            }
                                            else {
                                                clearInterval(looper);
                                                // meta.live_bids();
                                            }
                                        }
                                    }
                                }
                            }, 1000);
                        });
                    }
                    else { // Upcoming
                        console.log("inside upcoming");
                        meta.btn_show = true;
                        meta.btn_show_upcoming = true;
                        var timeLeft = Number(auc_det[0][0]) - Number(now_time);
                        meta.sec_shower = timeLeft % 60;
                        var min_str = (timeLeft / 60).toString();
                        var min = min_str.split(".");
                        var minutes = Number(min[0]);
                        //  while(minutes>59){
                        //      minutes = Number((minutes/60).toString().split(".")[0]);
                        //  }
                        meta.min_shower = minutes % 60;
                        // meta.min_shower=Number((timeLeft/60).toString().split(".")[0]);
                        var hours_str = (timeLeft / 3600).toString();
                        var hours = hours_str.split(".");
                        meta.hour_shower = Number(hours[0]);
                        var looper = setInterval(function () {
                            if (meta.sec_shower != 0) {
                                meta.sec_shower--;
                            }
                            else {
                                if (meta.hour_shower != 0 || meta.min_shower != 0) {
                                    meta.sec_shower = 59;
                                    if (meta.min_shower != 0) {
                                        meta.min_shower--;
                                    }
                                    else {
                                        if (meta.hour_shower != 0) {
                                            meta.min_shower = 59;
                                            meta.hour_shower--;
                                        }
                                        else {
                                            clearInterval(looper);
                                        }
                                    }
                                }
                            }
                        }, 1000);
                    }
                });
            });
        });
    };
    ViewauctionComponent.prototype.manualBidding = function (_aID) {
        var _this = this;
        var instance = this;
        instance.successful_message = false;
        instance.not_successful_error = false;
        instance.last_Bidder_message = false;
        instance.basePrice_reached = false;
        instance.grabit.lastBidderDetails(_aID).then(function (res) {
            instance.grabit.auctionDetails(_aID).then(function (result) {
                if (res == 'No Bid Logs Found') {
                    console.log('Congratualtions You are the First Bidder...');
                    var amount = 0;
                    while (amount <= result[3]) {
                        amount = Number(amount) + Number(result[2]);
                        if (amount > result[3]) {
                            if (result[1] >= amount) {
                                instance.user.spinner.show();
                                instance.grabit.manualBidding(_aID, amount).then(function (res) {
                                    instance.user.spinner.hide();
                                    if (res == 1) {
                                        instance.successful_message = true;
                                        instance.successful_message = true;
                                        var ins = new _user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"](_this.grabit, _this.route, _this.spin);
                                        ins.load_credits();
                                    }
                                    else if (res == 2) {
                                        instance.not_successful_error = true;
                                    }
                                    else {
                                        instance.not_successful_error = true;
                                    }
                                });
                            }
                            else {
                                instance.basePrice_reached = true;
                            }
                        }
                    }
                    return;
                }
                else if (res['returnValues'].bidder == _this.grabit._etherumAccountAddress) {
                    instance.last_Bidder_message = true;
                    return;
                }
                else {
                    if (result[5][0] != 0) {
                        instance.user.spinner.show();
                        instance.grabit.manualBidding(_aID, Number(result[5][0]) + Number(result[2])).then(function (res) {
                            instance.user.spinner.hide();
                            if (res == 1) {
                                instance.successful_message = true;
                                instance.successful_message = true;
                                var ins = new _user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"](_this.grabit, _this.route, _this.spin);
                                ins.load_credits();
                            }
                            else if (res == 2) {
                                instance.not_successful_error = true;
                            }
                            else {
                                instance.not_successful_error = true;
                            }
                        });
                    }
                }
            });
        });
    };
    ViewauctionComponent.prototype.get_history = function (id) {
        var meta = this;
        meta.bidder_history.length = 0;
        meta.grabit.Particular_bid_details(id).then(function (result) {
            result.forEach(function (element) {
                meta.grabit.getUserName(element["returnValues"].bidder).subscribe(function (res) {
                    var obj = {};
                    obj['Price'] = element["returnValues"].amount;
                    obj['Name'] = res['fullName'];
                    meta.bidder_history.push(obj);
                });
            });
        });
    };
    ViewauctionComponent.prototype.ngOnInit = function () {
    };
    ViewauctionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewauction',
            template: __webpack_require__(/*! ./viewauction.component.html */ "./src/app/viewauction/viewauction.component.html"),
            styles: [__webpack_require__(/*! ./viewauction.component.css */ "./src/app/viewauction/viewauction.component.css")]
        }),
        __metadata("design:paramtypes", [_service_grabit_service__WEBPACK_IMPORTED_MODULE_1__["GrabitService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"], _user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], ViewauctionComponent);
    return ViewauctionComponent;
}());



/***/ }),

/***/ "./src/app/winhistory/winhistory.component.css":
/*!*****************************************************!*\
  !*** ./src/app/winhistory/winhistory.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/winhistory/winhistory.component.html":
/*!******************************************************!*\
  !*** ./src/app/winhistory/winhistory.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-flat\">\n  <div class=\"panel-heading\">\n      <h5 class=\"panel-title\">Win History</h5>\n      <div class=\"heading-elements\">\n      </div>\n  </div>\n  <div class=\"panel-body\">\n    <div class=\"table-responsive\">\n      <table class=\"table table-bordered table-framed\">\n        <thead>\n          <tr style=\"background-color:#273246;color:#ffffff;\">\n            <th>Auction ID</th>\n            <th>Product name</th>\n            <th>Credits</th>\n            <th>Time</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor = \"let history of history\">\n            <td>{{history.auctionid}}</td>\n            <td>{{history.productname}}</td>\n            <td>{{history.amount}}</td>\n            <td>{{history.time}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/winhistory/winhistory.component.ts":
/*!****************************************************!*\
  !*** ./src/app/winhistory/winhistory.component.ts ***!
  \****************************************************/
/*! exports provided: WinhistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WinhistoryComponent", function() { return WinhistoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_grabit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/grabit.service */ "./src/app/service/grabit.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WinhistoryComponent = /** @class */ (function () {
    function WinhistoryComponent(grabit) {
        this.grabit = grabit;
        this.history = [];
        this.winhistory();
    }
    WinhistoryComponent.prototype.winhistory = function () {
        var instance = this;
        instance.grabit.auctionList().then(function (ids) {
            ids.forEach(function (id) {
                instance.grabit.auctionDetails(id).then(function (element) {
                    instance.grabit.bidDetails(id).then(function (amount) {
                        if (element[5][0] != 0 && element[5][0] == amount && element[6] == 1) {
                            instance.grabit.getAuctionById(id).subscribe(function (res) {
                                var obj = {};
                                obj['auctionid'] = id;
                                obj['productname'] = res['productname'];
                                obj['amount'] = element[5][0];
                                var t2 = element[0][1];
                                var time2 = new Date(t2 * 1000);
                                obj['time'] = time2;
                                instance.history.push(obj);
                            }, function (err) {
                                console.log(err);
                            });
                        }
                    });
                });
            });
        });
    };
    WinhistoryComponent.prototype.ngOnInit = function () {
    };
    WinhistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-winhistory',
            template: __webpack_require__(/*! ./winhistory.component.html */ "./src/app/winhistory/winhistory.component.html"),
            styles: [__webpack_require__(/*! ./winhistory.component.css */ "./src/app/winhistory/winhistory.component.css")]
        }),
        __metadata("design:paramtypes", [_service_grabit_service__WEBPACK_IMPORTED_MODULE_1__["GrabitService"]])
    ], WinhistoryComponent);
    return WinhistoryComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    api: 'http://52.15.173.92:3231/api'
    // api:'http://18.191.165.67:3231/api'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/chainflux/Desktop/ethereum-grabit/Frontend/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map