(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/Lhg":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class HeaderComponent {
    constructor() {
        this.header = "MyStore";
        this.product = "Product List";
        this.cart = "Cart";
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 7, vars: 3, consts: [[1, "header"], ["routerLink", "/"], ["routerLink", "/cart"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.header);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.product, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cart);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".header[_ngcontent-%COMP%] {\n    text-align: center;\n    background: #33B5E5;\n    color: #fff;\n    padding: 12px;\n  }\n  \n  a[_ngcontent-%COMP%] {\n    color: #ffffff;\n    text-decoration: none;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtFQUNmOztFQUVBO0lBQ0UsY0FBYztJQUNkLHFCQUFxQjtFQUN2QiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjMzNCNUU1O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDEycHg7XG4gIH1cbiAgXG4gIGEge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfSJdfQ== */"] });


/***/ }),

/***/ "/rwx":
/*!********************************************************!*\
  !*** ./src/app/confirmation/confirmation.component.ts ***!
  \********************************************************/
/*! exports provided: ConfirmationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmationComponent", function() { return ConfirmationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class ConfirmationComponent {
    constructor() {
        this.user = '';
        this.price = '';
        this.user = localStorage.getItem('user');
        this.price = localStorage.getItem('price');
    }
    ngOnInit() {
    }
    goBack() {
        localStorage.clear();
    }
}
ConfirmationComponent.ɵfac = function ConfirmationComponent_Factory(t) { return new (t || ConfirmationComponent)(); };
ConfirmationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmationComponent, selectors: [["app-confirmation"]], decls: 19, vars: 2, consts: [[1, "container"], [1, "row"], [1, "col"], [1, "bold"], [1, "btn", "btn-primary", 3, "click"], ["routerLink", ""]], template: function ConfirmationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Success!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Thank you ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Your ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " order is confirmed!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Please allow 1-3 business day(s) for shipping");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmationComponent_Template_button_click_16_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Back to product list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.user, "!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.price, "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["ul[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  list-style: none;\n  margin-top: 10px;\n  padding: 0;\n}\nli[_ngcontent-%COMP%]{\n    \n}\na[_ngcontent-%COMP%] {\n  color:#fff;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%]:hover{\nbackground-color: #74e533;\n}\n\n.row[_ngcontent-%COMP%]{\n\n}\n.col[_ngcontent-%COMP%]{ \n    padding: 10px;\n    margin: 10px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n.col[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n  font-weight: 600;\n  color: #33b5e5;\n}\n.bold[_ngcontent-%COMP%]{\n  font-weight: 600;\n}\n.btn[_ngcontent-%COMP%]{\n    margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm1hdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ0E7RUFDRSxVQUFVO0VBQ1YscUJBQXFCO0FBQ3ZCO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFFQSx5QkFBeUI7QUFDekI7O0FBRUE7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJjb25maXJtYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBhZGRpbmc6IDA7XG59XG5saXtcbiAgICBcbn1cbmEge1xuICBjb2xvcjojZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5hOmhvdmVye1xuYmFja2dyb3VuZC1jb2xvcjogIzc0ZTUzMztcbn1cblxuLyogTElTVCBJVEVNIENPTVBPTkVOVFMgKi9cbi5yb3d7XG5cbn1cblxuLmNvbHsgXG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29sIGgxe1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzMzYjVlNTtcbn1cbi5ib2xke1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmJ0bntcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufSJdfQ== */"] });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\HP USA\Documents\PROJECTS\ANGULAR PROJECTS\storeFront\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "FR/v":
/*!**********************************************************************!*\
  !*** ./src/app/product-item-detail/product-item-detail.component.ts ***!
  \**********************************************************************/
/*! exports provided: ProductItemDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductItemDetailComponent", function() { return ProductItemDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/products.service */ "S3Px");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/cart.service */ "c14U");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





class ProductItemDetailComponent {
    constructor(route, getProduct, cartService) {
        this.route = route;
        this.getProduct = getProduct;
        this.cartService = cartService;
        this.product = [];
        this.totalNumber = 1;
        this.num = 0;
        this.header = "";
        this.productlist = "";
        this.cart = "";
    }
    ngOnInit() {
        this.getItem();
    }
    getItem() {
        const id = this.route.snapshot.paramMap.get('id');
        let num = Number(id);
        const item = this.getProduct.getProducts().subscribe(res => {
            const user = res.find((i) => {
                return i.id == num;
            });
            this.product.push(user);
        });
    }
    addCart(item) {
        const getItem = this.cartService.getCartList();
        item.value = this.totalNumber;
        this.cartService.addToCart(item);
    }
    tlNum(event) {
        this.totalNumber = event;
    }
}
ProductItemDetailComponent.ɵfac = function ProductItemDetailComponent_Factory(t) { return new (t || ProductItemDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_2__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"])); };
ProductItemDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductItemDetailComponent, selectors: [["app-product-item-detail"]], inputs: { header: "header", productlist: "productlist", cart: "cart" }, decls: 38, vars: 4, consts: [[1, "container"], [1, "row"], [1, "col", "col-sm-6", "col-md-6", "col-lg-6"], ["alt", "", 3, "src"], [1, "col", "col-sm-6", "col-md-6", "col-lg-6", "details"], [1, "price"], ["name", "", "id", "", "aria-placeholder", "1", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", 3, "click"], ["routerLink", ""], ["src", "../../assets/icons8-left-arrow-24.png", "alt", ""]], template: function ProductItemDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Carry things arround town!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductItemDetailComponent_Template_select_ngModelChange_12_listener($event) { return ctx.tlNum($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductItemDetailComponent_Template_button_click_33_listener() { return ctx.addCart(ctx.product[0]); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Add to cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Back to product list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.product[0].url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.product[0].name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" $", ctx.product[0].price, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.num);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_z"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".header[_ngcontent-%COMP%] {\n  text-align: center;\n  background: #33b5e5;\n  color: #fff;\n  height: 85px;\n  margin-bottom: 50px;\n}\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\nul[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  list-style: none;\n  margin-top: 10px;\n  padding: 0;\n}\nli[_ngcontent-%COMP%] {\n}\na[_ngcontent-%COMP%] {\n  color: #fff;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  text-decoration: underline;\n}\n\n.container[_ngcontent-%COMP%] {\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.col[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n}\n.details[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n}\nh1[_ngcontent-%COMP%]{\n    font-weight: 600;\n}\nh1[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{\n    font-weight: 300;\n    font-size: 20px;\n}\nimg[_ngcontent-%COMP%] {\n  height: 450px;\n  width: 350px;\n  padding: 20px;\n  border-radius: 55px;\n}\n.btn[_ngcontent-%COMP%]{\n    margin: 10px 0;\n}\na[_ngcontent-%COMP%]{\n    color: #33b5e5;\n}\na[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 20px;\n    height: 20px;\n    margin: 0;\n    padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtaXRlbS1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjtBQUNBO0FBQ0E7QUFDQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFdBQVc7RUFDWCwwQkFBMEI7QUFDNUI7QUFFQSxjQUFjO0FBRWQ7QUFDQTtBQUNBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osU0FBUztJQUNULFVBQVU7QUFDZCIsImZpbGUiOiJwcm9kdWN0LWl0ZW0tZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjMzNiNWU1O1xuICBjb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiA4NXB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuLmhlYWRlciBoMSB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG51bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nOiAwO1xufVxubGkge1xufVxuYSB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5hOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4vKiBDT05UQUlORVIgKi9cblxuLmNvbnRhaW5lciB7XG59XG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uY29sIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmRldGFpbHN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuaDF7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbmgxIC5wcmljZXtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cbmltZyB7XG4gIGhlaWdodDogNDUwcHg7XG4gIHdpZHRoOiAzNTBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogNTVweDtcbn1cbi5idG57XG4gICAgbWFyZ2luOiAxMHB4IDA7XG59XG5he1xuICAgIGNvbG9yOiAjMzNiNWU1O1xufVxuYSBpbWd7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xufSJdfQ== */"] });


/***/ }),

/***/ "Hsdx":
/*!********************************************************!*\
  !*** ./src/app/product-list/product-list.component.ts ***!
  \********************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/products.service */ "S3Px");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/cart.service */ "c14U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../product-item/product-item.component */ "nXb/");





function ProductListComponent_app_product_item_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-product-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addproduct", function ProductListComponent_app_product_item_3_Template_app_product_item_addproduct_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.addCart($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r1);
} }
class ProductListComponent {
    constructor(productService, cartService) {
        this.productService = productService;
        this.cartService = cartService;
        this.products = [];
    }
    ngOnInit() {
        this.productService.getProducts().subscribe(data => {
            this.products = data;
        });
        ;
    }
    addCart(item) {
        this.cartService.addToCart(item);
    }
}
ProductListComponent.ɵfac = function ProductListComponent_Factory(t) { return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"])); };
ProductListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductListComponent, selectors: [["app-product-list"]], decls: 4, vars: 1, consts: [[1, "item", "col", "col-lg-9"], [3, "product", "addproduct", 4, "ngFor", "ngForOf"], [3, "product", "addproduct"]], template: function ProductListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "List of Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProductListComponent_app_product_item_3_Template, 1, 1, "app-product-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_4__["ProductItemComponent"]], styles: [".product-index[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  max-width: 1024px;\n  margin-bottom: 64px;\n}\n\n.product-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin: auto;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InByb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtaW5kZXgge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWF4LXdpZHRoOiAxMDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDY0cHg7XG59XG5cbi5wcm9kdWN0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLml0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW46IGF1dG87XG4gIC8qIG1hcmdpbjogMCAyMHB4OyAqL1xufVxuIl19 */"] });


/***/ }),

/***/ "S3Px":
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");


class ProductsService {
    constructor(http) {
        this.http = http;
    }
    getProducts() {
        return this.http.get('./assets/data.json');
    }
}
ProductsService.ɵfac = function ProductsService_Factory(t) { return new (t || ProductsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ProductsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProductsService, factory: ProductsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/header/header.component */ "/Lhg");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'myStore';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_layout_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product-list/product-list.component */ "Hsdx");
/* harmony import */ var _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-item/product-item.component */ "nXb/");
/* harmony import */ var _product_item_detail_product_item_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product-item-detail/product-item-detail.component */ "FR/v");
/* harmony import */ var _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./confirmation/confirmation.component */ "/rwx");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cart/cart.component */ "c2A7");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/header/header.component */ "/Lhg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");













class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_5__["ProductListComponent"],
        _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_6__["ProductItemComponent"],
        _product_item_detail_product_item_detail_component__WEBPACK_IMPORTED_MODULE_7__["ProductItemDetailComponent"],
        _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_8__["ConfirmationComponent"],
        _cart_cart_component__WEBPACK_IMPORTED_MODULE_9__["CartComponent"],
        _layout_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "c14U":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CartService {
    constructor() {
        this.cartlist = [];
    }
    getCartList() {
        const getItems = localStorage.getItem('cartItems');
        if (getItems == null) {
            return [];
        }
        this.cartlist = JSON.parse(getItems);
        return this.cartlist;
    }
    addToCart(cart) {
        const currentCart = this.getCartList();
        const found = currentCart.some(el => el.name == cart.name);
        if (found) {
            alert('item already exist');
        }
        else {
            window.alert(`${cart.name} added to cart!`);
            currentCart.push(cart);
            localStorage.setItem('cartItems', JSON.stringify(currentCart));
        }
    }
    clearCart() {
        this.cartlist = [];
        return this.cartlist;
    }
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(); };
CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "c2A7":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cart.service */ "c14U");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function CartComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_div_3_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const cart_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.remove(cart_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "X");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CartComponent_div_3_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.changePrice($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cart_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", cart_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cart_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", cart_r1.price * cart_r1.value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", cart_r1.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", cart_r1.value);
} }
class CartComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.user = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.cartList = [];
        this.totalSum = '';
        this.total = 0;
        this.fullName = '';
        this.address = '';
        this.creditCard = '';
        this.num = '';
    }
    ngOnInit() {
        this.cartList = this.cartService.getCartList();
        this.getTotalValue();
    }
    clearCart() {
        this.cartService.clearCart();
        this.cartList = [];
        alert('Cleared!');
    }
    getTotalValue() {
        var _total = 0;
        this.cartList.forEach(cart => {
            _total += cart.price * cart.value;
        });
        this.total = _total;
        this.totalSum = Number(_total).toFixed(2);
    }
    submit() {
        if (this.cartList.length > 0) {
            if (this.fullName.length >= 3 &&
                this.address.length >= 6 &&
                this.creditCard.length == 16) {
                localStorage.setItem('user', this.fullName);
                const toString = this.total.toString();
                localStorage.setItem('price', toString);
                location.href = '/confirmed';
            }
            else {
                alert('please fill in all appropriate information');
            }
        }
        else {
            alert('Please add item to cart');
        }
    }
    remove(d) {
        const newCart = this.cartService.getCartList().filter(u => {
            this.total = this.total - (u.price * u.value);
            return u.id != d;
        });
        var newtotal = 0;
        newCart.forEach(cart => {
            newtotal += cart.price * cart.value;
        });
        this.cartList = newCart;
        localStorage.setItem('cartItems', JSON.stringify(newCart));
        return (this.totalSum = newtotal);
    }
    changePrice(e) { }
    onCreditCardChange(e) {
        // if(this.creditCard.length > 16) {
        //   this.creditCard = this.creditCard.substring(0)
        // }
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"])); };
CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], outputs: { user: "user" }, decls: 25, vars: 5, consts: [[1, "container"], [1, "row"], [1, "col", "col-sm-6", "col-md-6", "col-lg-6", "items"], ["class", "item", 4, "ngFor", "ngForOf"], ["id", "total"], [1, "col", "col-sm-6", "col-md-6", "col-lg-6", "details"], [1, "contact"], ["for", "fullName"], ["type", "text", "placeholder", "(min 3 characters)", "min", "3", "required", "", 3, "ngModel", "ngModelChange"], ["for", "Address"], ["type", "text", "placeholder", "(min 6 characters)", "min", "6", "required", "", 3, "ngModel", "ngModelChange"], ["for", "creditCard"], ["type", "text", "placeholder", "(16 digit number)", "maxlength", "16", "required", "", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", 3, "click"], [1, "item"], ["alt", "", 3, "src"], [1, "details"], [1, "remove", 3, "click"], ["id", "tv"], ["type", "number", "name", "", "id", "", "min", "0", 3, "placeholder", "ngModel", "ngModelChange"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CartComponent_div_3_Template, 12, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Total: $");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CartComponent_Template_input_ngModelChange_12_listener($event) { return ctx.fullName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CartComponent_Template_input_ngModelChange_16_listener($event) { return ctx.address = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Credit card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CartComponent_Template_input_ngModelChange_20_listener($event) { return ctx.creditCard = $event; })("ngModelChange", function CartComponent_Template_input_ngModelChange_20_listener($event) { return ctx.onCreditCardChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "We'll never share your payment details with anyone else");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartComponent_Template_button_click_23_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cartList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.totalSum);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.fullName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.creditCard);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap\");\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  font-family: \"Roboto\", sans-serif;\n  box-sizing: border-box;\n}\n\n\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.col[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n\n.items[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\nh1[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 20px;\n}\n\n.item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.item[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 50px;\n}\n\nimg[_ngcontent-%COMP%] {\n  height: 150px;\n  width: 130px;\n  padding: 20px;\n  border-radius: 25px;\n}\n\n#total[_ngcontent-%COMP%] {\n  font-size: 20px;\n  text-align: center;\n  font-weight: 600;\n  \n}\n\n.contact[_ngcontent-%COMP%] {\n  display: grid;\n}\n\n.contact[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.contact[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 300px;\n  text-align: center;\n  padding: 5px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n\n.remove[_ngcontent-%COMP%]{\n  color: red;\n  font-weight: 600;\n  top: -10px;\n  position: relative;\n  right: -30px;\n  background: transparent;\n  font-size: small;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3RkFBd0Y7O0FBRXhGO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixpQ0FBaUM7RUFDakMsc0JBQXNCO0FBQ3hCOztBQUVBLGNBQWM7O0FBRWQ7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7O0FBRWxCOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZ0JBQWdCOztBQUVsQiIsImZpbGUiOiJjYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMTAwOzMwMCZkaXNwbGF5PXN3YXBcIik7XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKiBDT05UQUlORVIgKi9cblxuLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmNvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLml0ZW1zIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuaDEge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuaDEgLnByaWNlIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLml0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5pdGVtIGlucHV0IHtcbiAgd2lkdGg6IDUwcHg7XG59XG5pbWcge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTMwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG4jdG90YWwge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgXG59XG4uY29udGFjdCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG59XG4uY29udGFjdCBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uY29udGFjdCBpbnB1dCB7XG4gIHdpZHRoOiAzMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA1cHg7XG59XG4uYnRuIHtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG4ucmVtb3Zle1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0b3A6IC0xMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAtMzBweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG5cbn0iXX0= */"] });


/***/ }),

/***/ "nXb/":
/*!********************************************************!*\
  !*** ./src/app/product-item/product-item.component.ts ***!
  \********************************************************/
/*! exports provided: ProductItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductItemComponent", function() { return ProductItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class ProductItemComponent {
    constructor() {
        this.addproduct = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"];
        this.totalNumber = 1;
        this.num = 0;
        this.product = {
            id: 1,
            name: "",
            price: 1,
            url: "",
            description: "",
            value: 1
        };
    }
    ngOnInit() {
    }
    add(product) {
        product.value = this.totalNumber;
        this.addproduct.emit(product);
    }
    tlNum(event) {
        this.totalNumber = event;
    }
    item(id) {
        location.href = `/productdetails/${id}`;
    }
}
ProductItemComponent.ɵfac = function ProductItemComponent_Factory(t) { return new (t || ProductItemComponent)(); };
ProductItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductItemComponent, selectors: [["app-product-item"]], inputs: { product: "product" }, outputs: { addproduct: "addproduct" }, decls: 31, vars: 4, consts: [[1, "container"], [1, "row"], [1, "col", "col-lg-10"], ["alt", "", 3, "src", "click"], ["name", "", "id", "", 1, "select-input", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", 3, "click"]], template: function ProductItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductItemComponent_Template_img_click_3_listener() { return ctx.item(ctx.product.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ProductItemComponent_Template_select_ngModelChange_8_listener($event) { return ctx.tlNum($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "8");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "9");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductItemComponent_Template_button_click_29_listener() { return ctx.add(ctx.product); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Add to Cart");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.product.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.product.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", ctx.product.price, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.num);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_z"]], styles: ["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap\");\n\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  font-family: \"Roboto\", sans-serif;\n  box-sizing: border-box;\n}\n\n\n\n.header[_ngcontent-%COMP%] {\n  text-align: center;\n  background: #33b5e5;\n  color: #fff;\n  height: 85px;\n  margin-bottom: 50px;\n}\n\n.header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\n    font-weight: 600;\n}\n\nul[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  list-style: none;\n  margin-top: 10px;\n  padding: 0;\n}\n\na[_ngcontent-%COMP%] {\n  color:#fff;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:hover{\n    color:#fff;\n    text-decoration: underline;\n}\n\n\n\nimg[_ngcontent-%COMP%]{\n    height: 350px;\n    width: 280px;\n    padding: 20px;\n    border: 1px solid #33b5e5;\n}\n\n.col[_ngcontent-%COMP%]{ \n    padding: 10px;\n    margin: 10px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nselect[_ngcontent-%COMP%]{\n    width: 50px;\n}\n\n.btn[_ngcontent-%COMP%]{\n    margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdGQUF3Rjs7QUFFeEY7RUFDRSxTQUFTO0VBQ1QsVUFBVTtFQUNWLGlDQUFpQztFQUNqQyxzQkFBc0I7QUFDeEI7O0FBQ0Esc0JBQXNCOztBQUN0QjtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUNBO0VBQ0UsVUFBVTtFQUNWLHFCQUFxQjtBQUN2Qjs7QUFDQTtJQUNJLFVBQVU7SUFDViwwQkFBMEI7QUFDOUI7O0FBRUEseUJBQXlCOztBQUN6QjtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7O0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoicHJvZHVjdC1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMTAwOzMwMCZkaXNwbGF5PXN3YXBcIik7XG5cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLyogSEVBREVSIENPTVBPTkVOVFMgKi9cbi5oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICMzM2I1ZTU7XG4gIGNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDg1cHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG4uaGVhZGVyIGgxe1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG51bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nOiAwO1xufVxuYSB7XG4gIGNvbG9yOiNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbmE6aG92ZXJ7XG4gICAgY29sb3I6I2ZmZjtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLyogTElTVCBJVEVNIENPTVBPTkVOVFMgKi9cbmltZ3tcbiAgICBoZWlnaHQ6IDM1MHB4O1xuICAgIHdpZHRoOiAyODBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzM2I1ZTU7XG59XG4uY29seyBcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbnNlbGVjdHtcbiAgICB3aWR0aDogNTBweDtcbn1cbi5idG57XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn0iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-list/product-list.component */ "Hsdx");
/* harmony import */ var _product_item_detail_product_item_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-item-detail/product-item-detail.component */ "FR/v");
/* harmony import */ var _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirmation/confirmation.component */ "/rwx");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cart/cart.component */ "c2A7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    { path: '', component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_1__["ProductListComponent"] },
    { path: 'productdetails/:id', component: _product_item_detail_product_item_detail_component__WEBPACK_IMPORTED_MODULE_2__["ProductItemDetailComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__["CartComponent"] },
    { path: 'confirmed', component: _confirmation_confirmation_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmationComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map