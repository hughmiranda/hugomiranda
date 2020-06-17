function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutComponent =
    /*#__PURE__*/
    function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);

        this.experience = [{
          img: '/assets/accenture.png',
          company: 'Accenture',
          position: 'Front End Developer',
          time: '2018-Now',
          description: "Developing and maintaining front end code, specializing in Angular,\n      from multiple websites of the most important telecommunications companies in USA,\n      becoming the Subject Matter Expert in different areas such as the shop page, cart\n      page and one of the main CSS Points of Contact, as well as being part of multiple\n      Accenture internal projects developing applications focused on helping fellow developers\n      grow their coding skills, teaching and creating software fundamentals lessons and mentoring."
        }, {
          img: '/assets/epicor.jpg',
          company: 'Epicor Software',
          position: 'Software Developer & Quality Assurance Analyst Internship',
          time: '2017-2018',
          description: "Internship program for Epicor E10 ERP product as Software\n      Developer and Quality Assurance Analyst, mainly working with C#/.NET and MS SQL\n      technologies as part of the New Product Development team developing and testing\n      the Supply Chain Management, Manufacturing and Finances modules."
        }];
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {// const typed = new Typed('#me', {
          //   strings: [`Hi, my name is Hugo Miranda.`, `I'm a Software Engineer working as a Front End Developer at Accenture.`],
          //   typeSpeed: 50,
          //   backDelay: 2000,
          //   backSpeed: 10,
          //   loop: true
          // });
        }
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 9,
      vars: 0,
      consts: [[1, "about"], [1, "smoke-screen"], [1, "description"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hi, my name is Hugo Miranda.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "I live in Monterrey, Mexico and I'm currently working as a Front End Developer.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "In my spare time I like to hike the mountains around my city and play the guitar.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".about[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n  background-image: linear-gradient(to bottom, #000000, #1f1f1f);\n  background-image: url(\"/assets/hugh-pico-horcones.jpg\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  color: white;\n}\n.about[_ngcontent-%COMP%]   .smoke-screen[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background-image: linear-gradient(to bottom, black 0%, rgba(0, 0, 0, 0.9) 10%, rgba(0, 0, 0, 0.5) 40%, rgba(0, 0, 0, 0.25) 100%);\n  width: 100%;\n  box-sizing: border-box;\n  height: 100%;\n  padding: 25px;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n}\n.about[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding: 10px;\n  box-sizing: border-box;\n}\n.about[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  font-size: 20px;\n  text-align: center;\n}\n.about[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.about[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%] {\n  height: 100%;\n  text-align: center;\n  margin-bottom: 20px;\n}\n.about[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%] {\n  text-align: left;\n  background-color: #000;\n  box-shadow: 0px 0px 50px rgba(255, 255, 255, 0.25);\n  display: flex;\n  flex-flow: column;\n  border-radius: 3px;\n  padding: 10px;\n  margin: 25px 0;\n}\n.about[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%]   .experience-img[_ngcontent-%COMP%] {\n  padding: 10px;\n  width: 20%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.about[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%]   .experience-img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.about[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%]   .experience-gral[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.about[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   .experience-card[_ngcontent-%COMP%]   .experience-info[_ngcontent-%COMP%] {\n  padding: 10px;\n  display: flex;\n}\n.about[_ngcontent-%COMP%]   .personal[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  justify-content: flex-start;\n  align-items: center;\n}\n.about[_ngcontent-%COMP%]   .personal[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50%;\n  border-radius: 50%;\n}\n@media screen and (max-width: 480px) {\n  .about[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9odWdvLm1pcmFuZGEvaHVnb21pcmFuZGEvaHVnb21pcmFuZGEvc3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSw4REFBQTtFQUNBLHVEQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtBQ0NGO0FEQ0U7RUFDRSxpQkFBQTtFQUNBLGdJQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDQ0o7QURHRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDREo7QURRRTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDTko7QURRSTtFQUNFLFNBQUE7QUNOTjtBRGVFO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNiSjtBRGVJO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtFQUVBLGtEQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQ2ROO0FEZ0JNO0VBQ0UsYUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ2RSO0FEZVE7RUFDRSxXQUFBO0FDYlY7QURpQk07RUFDRSxVQUFBO0FDZlI7QURrQk07RUFDRSxhQUFBO0VBQ0EsYUFBQTtBQ2hCUjtBRHFCRTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUNuQko7QURvQkk7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUNsQk47QUR1QkE7RUFFSTtJQUNFLFdBQUE7RUNyQko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzAwMDAwMCwgIzFmMWYxZik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9odWdoLXBpY28taG9yY29uZXMuanBnJyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgY29sb3I6IHdoaXRlO1xuXG4gIC5zbW9rZS1zY3JlZW4ge1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoYmxhY2ssIDEpIDAlLCByZ2JhKGJsYWNrLCAwLjkpIDEwJSwgcmdiYShibGFjaywgMC41KSA0MCUsIHJnYmEoYmxhY2ssIDAuMjUpIDEwMCUpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cblxuICBzZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC8vIGRpc3BsYXk6IGZsZXg7XG4gICAgLy8gZmxleC1mbG93OiBjb2x1bW47XG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgcCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG5cbiAgLy8gI21lIHtcbiAgLy8gICBkaXNwbGF5OiBpbmxpbmU7XG4gIC8vICAgd2hpdGUtc3BhY2U6IHByZTtcbiAgLy8gfVxuXG4gIC5leHBlcmllbmNlIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICAuZXhwZXJpZW5jZS1jYXJkIHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgICAgLy8gYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjIpO1xuICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA1MHB4IHJnYmEoMjU1LDI1NSwyNTUsMC4yNSk7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgbWFyZ2luOiAyNXB4IDA7XG5cbiAgICAgIC5leHBlcmllbmNlLWltZyB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5leHBlcmllbmNlLWdyYWwge1xuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgfVxuXG4gICAgICAuZXhwZXJpZW5jZS1pbmZvIHtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucGVyc29uYWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaW1nIHtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5hYm91dHtcbiAgICBzZWN0aW9uIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxufVxuIiwiLmFib3V0IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzAwMDAwMCwgIzFmMWYxZik7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaHVnaC1waWNvLWhvcmNvbmVzLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG4uYWJvdXQgLnNtb2tlLXNjcmVlbiB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCBibGFjayAwJSwgcmdiYSgwLCAwLCAwLCAwLjkpIDEwJSwgcmdiYSgwLCAwLCAwLCAwLjUpIDQwJSwgcmdiYSgwLCAwLCAwLCAwLjI1KSAxMDAlKTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmFib3V0IHNlY3Rpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmFib3V0IC5kZXNjcmlwdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYWJvdXQgLmRlc2NyaXB0aW9uIHAge1xuICBtYXJnaW46IDA7XG59XG4uYWJvdXQgLmV4cGVyaWVuY2Uge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5hYm91dCAuZXhwZXJpZW5jZSAuZXhwZXJpZW5jZS1jYXJkIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1MHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbjogMjVweCAwO1xufVxuLmFib3V0IC5leHBlcmllbmNlIC5leHBlcmllbmNlLWNhcmQgLmV4cGVyaWVuY2UtaW1nIHtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDIwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYWJvdXQgLmV4cGVyaWVuY2UgLmV4cGVyaWVuY2UtY2FyZCAuZXhwZXJpZW5jZS1pbWcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYWJvdXQgLmV4cGVyaWVuY2UgLmV4cGVyaWVuY2UtY2FyZCAuZXhwZXJpZW5jZS1ncmFsIHtcbiAgd2lkdGg6IDgwJTtcbn1cbi5hYm91dCAuZXhwZXJpZW5jZSAuZXhwZXJpZW5jZS1jYXJkIC5leHBlcmllbmNlLWluZm8ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmFib3V0IC5wZXJzb25hbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYWJvdXQgLnBlcnNvbmFsIGltZyB7XG4gIHdpZHRoOiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmFib3V0IHNlY3Rpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/about/skills/skills.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/about/skills/skills.component.ts ***!
    \**************************************************/

  /*! exports provided: SkillsComponent */

  /***/
  function srcAppAboutSkillsSkillsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkillsComponent", function () {
      return SkillsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SkillsComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var skill_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", skill_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r1.name);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "filters--display": a0
      };
    };

    var SkillsComponent =
    /*#__PURE__*/
    function () {
      function SkillsComponent() {
        _classCallCheck(this, SkillsComponent);

        this.skills = [{
          img: 'assets/skills/js.png',
          name: 'JavaScript'
        }, {
          img: 'assets/skills/css3.svg',
          name: 'CSS3'
        }, {
          img: 'assets/skills/html5.png',
          name: 'HTML5'
        }, {
          img: 'assets/skills/angular.png',
          name: 'Angular'
        }, {
          img: 'assets/skills/ts.png',
          name: 'TypeScript'
        }, {
          img: 'assets/skills/sass.svg',
          name: 'SASS'
        }, {
          img: 'assets/skills/git.png',
          name: 'Git'
        }, {
          img: 'assets/skills/rxjs.png',
          name: 'RxJS'
        }, {
          img: 'assets/skills/react.png',
          name: 'React'
        }, {
          img: 'assets/skills/redux.png',
          name: 'Redux'
        }, {
          img: 'assets/skills/agile.jpg',
          name: 'Agile'
        }, {
          img: 'assets/skills/scrum.png',
          name: 'Scrum'
        }, {
          img: 'assets/skills/jira.png',
          name: 'Jira'
        }, {
          img: 'assets/skills/jest.png',
          name: 'Jest'
        }, {
          img: 'assets/skills/aem.png',
          name: 'AEM'
        }, {
          img: 'assets/skills/cs.png',
          name: 'C#'
        }, {
          img: 'assets/skills/java.png',
          name: 'Java'
        }, {
          img: 'assets/skills/nodejs.png',
          name: 'Node.JS'
        }, {
          img: 'assets/skills/python.png',
          name: 'Python'
        }, {
          img: 'assets/skills/c.png',
          name: 'C'
        }, {
          img: 'assets/skills/qa.png',
          name: 'Q.A.'
        }, {
          img: 'assets/skills/epicor.jpg',
          name: 'Epicor ERP'
        }, {
          img: 'assets/skills/mssql.png',
          name: 'MS SQL'
        }, {
          img: 'assets/skills/firebase.png',
          name: 'Firebase'
        }, {
          img: 'assets/skills/arduino.png',
          name: 'Arduino'
        }, {
          img: 'assets/skills/unity.png',
          name: 'Unity'
        }, {
          img: 'assets/skills/autocad.png',
          name: 'AutoCAD'
        }, {
          img: 'assets/skills/ps.svg',
          name: 'Photoshop'
        }];
        this.showFilters = false;
      }

      _createClass(SkillsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "showFilter",
        value: function showFilter() {
          this.showFilters = !this.showFilters;
        }
      }]);

      return SkillsComponent;
    }();

    SkillsComponent.ɵfac = function SkillsComponent_Factory(t) {
      return new (t || SkillsComponent)();
    };

    SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SkillsComponent,
      selectors: [["app-skills"]],
      decls: 7,
      vars: 4,
      consts: [["skills-container", "", 1, "skills"], ["skills-carousel", "", 1, "skills-carousel", 3, "ngClass"], ["skills-grid", "", 1, "skills-grid"], ["class", "skill", 4, "ngFor", "ngForOf"], [1, "skill"], [3, "src"]],
      template: function SkillsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Skills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SkillsComponent_div_6_Template, 4, 2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.showFilters));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: [".skills[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n}\n.skills[_ngcontent-%COMP%]   .skills-carousel[_ngcontent-%COMP%] {\n  color: #fff;\n  overflow: hidden;\n  overflow-x: scroll;\n  position: relative;\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.2) 90%);\n  box-shadow: 0px 0px 25px rgba(255, 255, 255, 0.25);\n  height: 75%;\n  width: 100%;\n  border-radius: 5px;\n  margin: 10px;\n  box-sizing: border-box;\n}\n.skills[_ngcontent-%COMP%]   .skills-carousel.filters--display[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.skills[_ngcontent-%COMP%]   .skills-carousel[_ngcontent-%COMP%]   .skills-grid[_ngcontent-%COMP%] {\n  display: grid;\n  padding: 20px;\n  width: 100%;\n  height: 100%;\n  grid-template-columns: repeat(15, 6%);\n  grid-template-rows: repeat(1, 100%);\n  grid-auto-flow: column;\n  grid-auto-columns: 6%;\n}\n.skills[_ngcontent-%COMP%]   .skills-carousel[_ngcontent-%COMP%]   .skills-grid[_ngcontent-%COMP%]   .skill[_ngcontent-%COMP%] {\n  height: 100px;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n}\n.skills[_ngcontent-%COMP%]   .skills-carousel[_ngcontent-%COMP%]   .skills-grid[_ngcontent-%COMP%]   .skill[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 40%;\n}\n.skills[_ngcontent-%COMP%]   .filters[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -100%;\n  transition: all 0.3s;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n.skills[_ngcontent-%COMP%]   .filters.filters--display[_ngcontent-%COMP%] {\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9odWdvLm1pcmFuZGEvaHVnb21pcmFuZGEvaHVnb21pcmFuZGEvc3JjL2FwcC9hYm91dC9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hYm91dC9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBR0Usc0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDREY7QURJRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFNQSwyRkFBQTtFQUtFLGtEQUFBO0VBQ0YsV0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ1hKO0FEYUk7RUFDRSxnQkFBQTtBQ1hOO0FEY0k7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7RUFDQSxtQ0FBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7QUNaTjtBRGNNO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNaUjtBRGNRO0VBQ0UsV0FBQTtBQ1pWO0FEa0JFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0FDaEJKO0FEa0JJO0VBQ0UsTUFBQTtBQ2hCTiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L3NraWxscy9za2lsbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2tpbGxzIHtcbiAgLy8gaGVpZ2h0OiAxMDB2aDtcbiAgLy8gd2lkdGg6IDUwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAvLyB0cmFuc2Zvcm06IHJvdGF0ZVooMzUwZGVnKTtcblxuICAuc2tpbGxzLWNhcm91c2VsIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL3N0YXJzLTRrLmpwZycpO1xuICAgIC8vIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9uZWJ1bGEuanBnJyk7XG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL3NraWxscy93aGl0ZS5qcGcnKTtcbiAgICAvLyBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgdG8gYm90dG9tLFxuICAgICAgcmdiYSgwLDAsMCwwLjEpIDAlLFxuICAgICAgcmdiYSgwLDAsMCwwLjIpIDkwJVxuICAgICAgKTtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjVweCByZ2JhKDI1NSwyNTUsMjU1LDAuMjUpO1xuICAgIGhlaWdodDogNzUlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgICYuZmlsdGVycy0tZGlzcGxheSB7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH1cblxuICAgIC5za2lsbHMtZ3JpZCB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTUsIDYlKTtcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czpyZXBlYXQoMSwgMTAwJSk7XG4gICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuICAgICAgZ3JpZC1hdXRvLWNvbHVtbnM6IDYlO1xuXG4gICAgICAuc2tpbGwge1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBoZWlnaHQ6IDQwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5maWx0ZXJzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOi0xMDAlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuOCk7XG5cbiAgICAmLmZpbHRlcnMtLWRpc3BsYXkge1xuICAgICAgdG9wOjA7XG4gICAgfVxuICB9XG59XG4iLCIuc2tpbGxzIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNraWxscyAuc2tpbGxzLWNhcm91c2VsIHtcbiAgY29sb3I6ICNmZmY7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDAuMSkgMCUsIHJnYmEoMCwgMCwgMCwgMC4yKSA5MCUpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDI1cHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcbiAgaGVpZ2h0OiA3NSU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogMTBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5za2lsbHMgLnNraWxscy1jYXJvdXNlbC5maWx0ZXJzLS1kaXNwbGF5IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5za2lsbHMgLnNraWxscy1jYXJvdXNlbCAuc2tpbGxzLWdyaWQge1xuICBkaXNwbGF5OiBncmlkO1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxNSwgNiUpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxLCAxMDAlKTtcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IDYlO1xufVxuLnNraWxscyAuc2tpbGxzLWNhcm91c2VsIC5za2lsbHMtZ3JpZCAuc2tpbGwge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc2tpbGxzIC5za2lsbHMtY2Fyb3VzZWwgLnNraWxscy1ncmlkIC5za2lsbCBpbWcge1xuICBoZWlnaHQ6IDQwJTtcbn1cbi5za2lsbHMgLmZpbHRlcnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTEwMCU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG59XG4uc2tpbGxzIC5maWx0ZXJzLmZpbHRlcnMtLWRpc3BsYXkge1xuICB0b3A6IDA7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-skills',
          templateUrl: './skills.component.html',
          styleUrls: ['./skills.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'hugomiranda';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 3,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-about");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        }
      },
      directives: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./nav-bar/nav-bar.component */
    "./src/app/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _about_skills_skills_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./about/skills/skills.component */
    "./src/app/about/skills/skills.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], _about_skills_skills_component__WEBPACK_IMPORTED_MODULE_7__["SkillsComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_5__["NavBarComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], _about_skills_skills_component__WEBPACK_IMPORTED_MODULE_7__["SkillsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! three */
    "./node_modules/three/build/three.module.js");
    /* harmony import */


    var postprocessing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! postprocessing */
    "./node_modules/postprocessing/build/postprocessing.esm.js");
    /* harmony import */


    var typed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! typed.js */
    "./node_modules/typed.js/lib/typed.js");
    /* harmony import */


    var typed_js__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../nav-bar/nav-bar.component */
    "./src/app/nav-bar/nav-bar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js"); // import { THREE } from 'three.js';
    // import * as POSTPROCESSING from 'postprocessing';


    var _c0 = function _c0(a0) {
      return {
        "display-content": a0
      };
    };

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);

        this.scene = new three__WEBPACK_IMPORTED_MODULE_1__["Scene"]();
        this.camera = new three__WEBPACK_IMPORTED_MODULE_1__["PerspectiveCamera"](60, window.innerWidth / window.innerHeight, 1, 1000);
        this.displayContent = false;
        this.displayAbout = false;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          setTimeout(function () {
            return _this.displayContent = true;
          }, 1000);
          this.renderNebula('nebula'); // this.renderNebula('nebula2');

          var typed = new typed_js__WEBPACK_IMPORTED_MODULE_3___default.a('#subtitle', {
            strings: ["Software Engineer.", "Front End Developer.", "Guitar Player.", "Mountain Hiker."],
            typeSpeed: 50,
            backDelay: 1000,
            backSpeed: 10,
            loop: true
          });
        }
      }, {
        key: "renderNebula",
        value: function renderNebula(id) {
          var _this2 = this;

          var composer;
          this.camera.position.z = 1;
          this.camera.rotation.x = 1.16;
          this.camera.rotation.y = -0.12;
          this.camera.rotation.z = 0.27;
          var ambient = new three__WEBPACK_IMPORTED_MODULE_1__["AmbientLight"](0x5c3b73);
          this.scene.add(ambient);
          var directionalLight = new three__WEBPACK_IMPORTED_MODULE_1__["DirectionalLight"](0x000000);
          directionalLight.position.set(0, 0, 1);
          this.scene.add(directionalLight);
          var orangeLight = new three__WEBPACK_IMPORTED_MODULE_1__["PointLight"](0xcc6600, 50, 450, 1.7);
          orangeLight.position.set(200, 300, 100);
          this.scene.add(orangeLight);
          var redLight = new three__WEBPACK_IMPORTED_MODULE_1__["PointLight"](0xd8547e, 50, 450, 1.7);
          redLight.position.set(100, 300, 100);
          this.scene.add(redLight);
          var blueLight = new three__WEBPACK_IMPORTED_MODULE_1__["PointLight"](0x3677ac, 50, 450, 1.7);
          blueLight.position.set(300, 300, 200);
          this.scene.add(blueLight);
          this.renderer = new three__WEBPACK_IMPORTED_MODULE_1__["WebGLRenderer"]();
          this.renderer.setSize(window.innerWidth, window.innerHeight); // this.scene.fog = new THREE.FogExp2(0x000000, 0.001);

          this.scene.fog = new three__WEBPACK_IMPORTED_MODULE_1__["FogExp2"](0x00c8cf, 0.001);
          this.renderer.setClearColor(this.scene.fog);
          document.getElementById(id).appendChild(this.renderer.domElement);
          var loader = new three__WEBPACK_IMPORTED_MODULE_1__["TextureLoader"]();
          loader.load('assets/smoke.png', function (texture) {
            _this2.cloudGeo = new three__WEBPACK_IMPORTED_MODULE_1__["PlaneBufferGeometry"](500, 500);
            _this2.cloudMaterial = new three__WEBPACK_IMPORTED_MODULE_1__["MeshLambertMaterial"]({
              map: texture,
              transparent: true
            });
            var cloudParticles = [];

            for (var p = 0; p < 75; p++) {
              var cloud = new three__WEBPACK_IMPORTED_MODULE_1__["Mesh"](_this2.cloudGeo, _this2.cloudMaterial);
              cloud.position.set(Math.random() * 900 - 400, 500, Math.random() * 500 - 500);
              cloud.rotation.x = 1.16;
              cloud.rotation.y = -0.12;
              cloud.rotation.z = Math.random() * 2 * Math.PI;
              cloud.material['opacity'] = 0.25;
              cloudParticles.push(cloud);

              _this2.scene.add(cloud);
            }

            var renderer = _this2.renderer;
            var camera = _this2.camera;
            var scene = _this2.scene;
            loader.load('assets/stars-4k.jpg', function (texture) {
              var textureEffect = new postprocessing__WEBPACK_IMPORTED_MODULE_2__["TextureEffect"]({
                blendFunction: postprocessing__WEBPACK_IMPORTED_MODULE_2__["BlendFunction"].COLOR_DODGE,
                texture: texture
              });
              textureEffect.blendMode.opacity.value = 0.33;
              _this2.textureEffect = textureEffect;
              var bloomEffect = new postprocessing__WEBPACK_IMPORTED_MODULE_2__["BloomEffect"]({
                blendFunction: postprocessing__WEBPACK_IMPORTED_MODULE_2__["BlendFunction"].COLOR_DODGE,
                kernelSize: postprocessing__WEBPACK_IMPORTED_MODULE_2__["KernelSize"].SMALL,
                useLuminanceFilter: true,
                luminanceThreshold: 0.3,
                luminanceSmoothing: 0.75
              });
              bloomEffect.blendMode.opacity.value = 1.5;
              var effectPass = new postprocessing__WEBPACK_IMPORTED_MODULE_2__["EffectPass"](camera, bloomEffect, textureEffect);
              effectPass.renderToScreen = true;
              composer = new postprocessing__WEBPACK_IMPORTED_MODULE_2__["EffectComposer"](renderer);
              composer.addPass(new postprocessing__WEBPACK_IMPORTED_MODULE_2__["RenderPass"](scene, camera));
              composer.addPass(effectPass);
              window.addEventListener('resize', onWindowResize, false);
              render();
            });

            function onWindowResize() {
              camera.aspect = window.innerWidth / window.innerHeight;
              camera.updateProjectionMatrix();
              renderer.setSize(window.innerWidth, window.innerHeight);
            }

            function render() {
              cloudParticles.forEach(function (p) {
                p.rotation.z -= 0.0007;
              });
              composer.render(0.1);
              requestAnimationFrame(render);
            }
          });
        }
      }, {
        key: "scrollTo",
        value: function scrollTo(page) {
          switch (page) {
            case 'home':
              window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
              });
              break;

            case 'about':
              window.scroll({
                top: window.innerHeight,
                left: 0,
                behavior: 'smooth'
              });
              break;

            default:
              break;
          }
        }
      }, {
        key: "showAbout",
        value: function showAbout() {
          this.displayAbout = true;
        }
      }, {
        key: "goToAboutMe",
        value: function goToAboutMe() {
          window.scroll({
            top: window.innerHeight,
            left: 100,
            behavior: 'smooth'
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 20,
      vars: 3,
      consts: [[1, "home"], ["id", "nebula", 1, "nebula"], [1, "absolute", "nav-bar"], [1, "absolute", "social"], ["href", "mailto:hughmiranda94@gmail.com"], ["src", "/assets/social/email.svg"], ["href", "http://www.linkedin.com/in/hugomiranda94", "target", "_blank"], ["src", "/assets/social/linkedin.svg"], ["href", "http://www.github.com/hughmiranda94", "target", "_blank"], ["src", "/assets/social/github.svg"], ["href", "http://www.instagram.com/hughmiranda", "target", "_blank"], ["src", "/assets/social/instagram.svg"], [1, "absolute", "home-container", 3, "ngClass"], [1, "card", 3, "click"], [1, "main"], ["src", "/assets/hugh.jpg"], [1, "title", "shimmer"], ["id", "subtitle", 1, "subtitle"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-nav-bar", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_div_click_13_listener() {
            return ctx.scrollTo("about");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "HUGO MIRANDA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.displayContent));
        }
      },
      directives: [_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_4__["NavBarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]],
      styles: [".home[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  box-sizing: border-box;\n}\n.home[_ngcontent-%COMP%]   .nebula[_ngcontent-%COMP%] {\n  width: 100%;\n  pointer-events: none;\n}\n.home[_ngcontent-%COMP%]   .absolute[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: 1;\n}\n.home[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%] {\n  position: fixed;\n  display: flex;\n  flex-flow: column;\n  z-index: 2;\n  top: auto;\n  bottom: 2px;\n  width: auto;\n}\n.home[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 25px;\n  margin: 5px 10px;\n  -webkit-filter: invert(100%) sepia(0%) saturate(7479%) hue-rotate(70deg) brightness(99%) contrast(107%) opacity(50%);\n          filter: invert(100%) sepia(0%) saturate(7479%) hue-rotate(70deg) brightness(99%) contrast(107%) opacity(50%);\n}\n.home[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  -webkit-filter: invert(100%) sepia(0%) saturate(7479%) hue-rotate(70deg) brightness(99%) contrast(107%) opacity(100%);\n          filter: invert(100%) sepia(0%) saturate(7479%) hue-rotate(70deg) brightness(99%) contrast(107%) opacity(100%);\n  cursor: pointer;\n}\n.home[_ngcontent-%COMP%]   .home-container[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  background-color: #000000;\n  transition: all 2.5s ease-out;\n  width: 100%;\n  height: 100%;\n  padding: 10px;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n}\n.home[_ngcontent-%COMP%]   .home-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 33px;\n  letter-spacing: -2px;\n  font-weight: 900;\n  text-align: center;\n  display: block;\n}\n.home[_ngcontent-%COMP%]   .home-container[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-size: 12px;\n  letter-spacing: 2px;\n  display: inline;\n}\n.home[_ngcontent-%COMP%]   .home-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  height: auto;\n  color: #cfcfcf;\n  font-weight: 400;\n  margin: 0;\n  transition: all 0.3s;\n}\n.home[_ngcontent-%COMP%]   .home-container[_ngcontent-%COMP%]   p.shimmer[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.75);\n  background-image: linear-gradient(to right, #222, #fff 75%, #222);\n  background-size: 100px 100%;\n  -webkit-background-clip: text;\n          background-clip: text;\n  -webkit-animation-name: shimmer;\n          animation-name: shimmer;\n  -webkit-animation-duration: 5s;\n          animation-duration: 5s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  background-repeat: no-repeat;\n  background-position: 0 0;\n  background-color: #222;\n}\n@-webkit-keyframes shimmer {\n  0% {\n    background-position: -200%;\n  }\n  100% {\n    background-position: 200%;\n  }\n}\n@keyframes shimmer {\n  0% {\n    background-position: -200%;\n  }\n  100% {\n    background-position: 200%;\n  }\n}\n.home[_ngcontent-%COMP%]   .home-container.display-content[_ngcontent-%COMP%] {\n  background-color: transparent;\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.01) 50%, black 90%);\n}\n.home[_ngcontent-%COMP%]   .home-container.display-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  -webkit-filter: opacity(100);\n          filter: opacity(100);\n  transform: translateY(0px);\n  cursor: pointer;\n}\n.home[_ngcontent-%COMP%]   .home-container.display-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.33);\n  border: 1px solid rgba(0, 0, 0, 0);\n  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);\n  transform: scale(1.01);\n}\n.home[_ngcontent-%COMP%]   .nav-bar[_ngcontent-%COMP%] {\n  z-index: 2;\n  top: 0;\n  left: 85%;\n}\n.home[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #fff;\n  border: 1px solid white;\n  padding: 10px 20px;\n  cursor: pointer;\n  margin-top: 50px;\n}\n.home[_ngcontent-%COMP%]   .about-me[_ngcontent-%COMP%]:hover {\n  background-color: #fff;\n  color: #000;\n}\n.home[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  transition: all 0.5s ease-out;\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n  -webkit-filter: opacity(0);\n          filter: opacity(0);\n  transform: translateY(10px);\n  border-radius: 5px;\n  padding: 25px;\n}\n.home[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n  border-radius: 50%;\n  margin-bottom: 20px;\n}\n.home[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {\n  display: flex;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n}\n.about[_ngcontent-%COMP%] {\n  width: 100%;\n  display: none;\n  flex-flow: column;\n  justify-content: center;\n  align-items: center;\n}\n.about.about--display[_ngcontent-%COMP%] {\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9odWdvLm1pcmFuZGEvaHVnb21pcmFuZGEvaHVnb21pcmFuZGEvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGtCQUFBO0VBQ0EsV0FBQTtFQUlBLHNCQUFBO0FDSEY7QURLRTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtBQ0hKO0FES0U7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0hKO0FES0U7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0hKO0FETU07RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvSEFBQTtVQUFBLDRHQUFBO0FDSlI7QURRUTtFQUNFLHFIQUFBO1VBQUEsNkdBQUE7RUFDQSxlQUFBO0FDTlY7QURXRTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNUSjtBRFlJO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBRUEsZ0JBQUE7RUFDQSxrQkFBQTtFQUVBLGNBQUE7QUNaTjtBRGVJO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNiTjtBRGdCSTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7QUNkTjtBRGlCTTtFQUNFLGdDQUFBO0VBQ0EsaUVBQUE7RUFDQSwyQkFBQTtFQUNBLDZCQUFBO1VBQUEscUJBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLDJDQUFBO1VBQUEsbUNBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7QUNmUjtBRG1CTTtFQUNFO0lBQUksMEJBQUE7RUNoQlY7RURpQk07SUFBTSx5QkFBQTtFQ2RaO0FBQ0Y7QURXTTtFQUNFO0lBQUksMEJBQUE7RUNoQlY7RURpQk07SUFBTSx5QkFBQTtFQ2RaO0FBQ0Y7QURpQkk7RUFDRSw2QkFBQTtFQUNBLHFHQUFBO0FDZk47QURzQk07RUFDRSw0QkFBQTtVQUFBLG9CQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FDcEJSO0FEc0JRO0VBQ0UscUNBQUE7RUFDQSxrQ0FBQTtFQUNBLDZDQUFBO0VBQ0Esc0JBQUE7QUNwQlY7QUQ4QkU7RUFDRSxVQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7QUM1Qko7QUQrQkU7RUFDRSw2QkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDN0JKO0FEK0JJO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0FDN0JOO0FEaUNFO0VBQ0UsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBRUEsMEJBQUE7VUFBQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDaENKO0FEa0NJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNoQ047QURtQ0k7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDakNOO0FEc0NBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNuQ0Y7QURxQ0U7RUFDRSxhQUFBO0FDbkNKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhvbWUge1xuICAvLyBtaW4taGVpZ2h0OiAyMDB2aDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgLy8gcGFkZGluZzogMTVyZW0gMjByZW07XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICMxYjFiMWI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC8vIG1heC13aWR0aDogMTAwdnc7XG4gIC5uZWJ1bGEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG4gIC5hYnNvbHV0ZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gIC5zb2NpYWwge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIHotaW5kZXg6IDI7XG4gICAgdG9wOiBhdXRvO1xuICAgIGJvdHRvbTogMnB4O1xuICAgIHdpZHRoOiBhdXRvO1xuXG4gICAgYSB7XG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgbWFyZ2luOiA1cHggMTBweDtcbiAgICAgICAgZmlsdGVyOiBpbnZlcnQoMTAwJSkgc2VwaWEoMCUpIHNhdHVyYXRlKDc0NzklKSBodWUtcm90YXRlKDcwZGVnKSBicmlnaHRuZXNzKDk5JSkgY29udHJhc3QoMTA3JSkgb3BhY2l0eSg1MCUpO1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzQ3OSUpIGh1ZS1yb3RhdGUoNzBkZWcpIGJyaWdodG5lc3MoOTklKSBjb250cmFzdCgxMDclKSBvcGFjaXR5KDEwMCUpO1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAuaG9tZS1jb250YWluZXIge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMi41cyBlYXNlLW91dDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLy8gcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAudGl0bGUge1xuICAgICAgZm9udC1zaXplOiAzM3B4O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0ycHg7XG4gICAgICAvLyBsZXR0ZXItc3BhY2luZzogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAvLyBmb250LWZhbWlseTogJ1NoYXJlIFRlY2ggTW9ubycsIG1vbm9zcGFjZTtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5zdWJ0aXRsZSB7XG4gICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgIH1cblxuICAgIHAge1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgY29sb3I6IHJnYigyMDcsIDIwNywgMjA3KTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgIC8vIGZpbHRlcjogb3BhY2l0eSgwKTtcblxuICAgICAgJi5zaGltbWVyIHtcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwjMjIyLCAjZmZmIDc1JSwgIzIyMik7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwcHggMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICAgICAgICBhbmltYXRpb24tbmFtZTogc2hpbW1lcjtcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcbiAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbiAgICAgIH1cblxuXG4gICAgICBAa2V5ZnJhbWVzIHNoaW1tZXIge1xuICAgICAgICAwJSB7YmFja2dyb3VuZC1wb3NpdGlvbjogLTIwMCV9XG4gICAgICAgIDEwMCUge2JhY2tncm91bmQtcG9zaXRpb246IDIwMCV9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5kaXNwbGF5LWNvbnRlbnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgIHRvIGJvdHRvbSxcbiAgICAgICAgcmdiYSgwLDAsMCwwKSAwJSxcbiAgICAgICAgcmdiYSgwLDAsMCwwLjAxKSA1MCUsXG4gICAgICAgIHJnYmEoMCwwLDAsMSkgOTAlXG4gICAgICAgICk7XG5cbiAgICAgIC5jYXJkIHtcbiAgICAgICAgZmlsdGVyOiBvcGFjaXR5KDEwMCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjMzKTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDApO1xuICAgICAgICAgIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IHJnYmEoMCwwLDAsMC41KTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xuXG4gICAgICAgICAgLy8gcCB7XG4gICAgICAgICAgLy8gICBmaWx0ZXI6IG9wYWNpdHkoMTAwJSk7XG4gICAgICAgICAgLy8gfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm5hdi1iYXIge1xuICAgIHotaW5kZXg6IDI7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDg1JTtcbiAgfVxuXG4gIC5hYm91dC1tZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgY29sb3I6ICMwMDA7XG4gICAgfVxuICB9XG5cbiAgLmNhcmQge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2Utb3V0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1mbG93OiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XG4gICAgZmlsdGVyOiBvcGFjaXR5KDApO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgcGFkZGluZzogMjVweDtcblxuICAgIGltZyB7XG4gICAgICB3aWR0aDogMjAwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cblxuICAgIC5tYWluIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gIH1cbn1cblxuLmFib3V0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAmLmFib3V0LS1kaXNwbGF5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG59XG5cbiIsIi5ob21lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5ob21lIC5uZWJ1bGEge1xuICB3aWR0aDogMTAwJTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uaG9tZSAuYWJzb2x1dGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG59XG4uaG9tZSAuc29jaWFsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgei1pbmRleDogMjtcbiAgdG9wOiBhdXRvO1xuICBib3R0b206IDJweDtcbiAgd2lkdGg6IGF1dG87XG59XG4uaG9tZSAuc29jaWFsIGEgaW1nIHtcbiAgd2lkdGg6IDI1cHg7XG4gIG1hcmdpbjogNXB4IDEwcHg7XG4gIGZpbHRlcjogaW52ZXJ0KDEwMCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSg3NDc5JSkgaHVlLXJvdGF0ZSg3MGRlZykgYnJpZ2h0bmVzcyg5OSUpIGNvbnRyYXN0KDEwNyUpIG9wYWNpdHkoNTAlKTtcbn1cbi5ob21lIC5zb2NpYWwgYTpob3ZlciBpbWcge1xuICBmaWx0ZXI6IGludmVydCgxMDAlKSBzZXBpYSgwJSkgc2F0dXJhdGUoNzQ3OSUpIGh1ZS1yb3RhdGUoNzBkZWcpIGJyaWdodG5lc3MoOTklKSBjb250cmFzdCgxMDclKSBvcGFjaXR5KDEwMCUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaG9tZSAuaG9tZS1jb250YWluZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMi41cyBlYXNlLW91dDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmhvbWUgLmhvbWUtY29udGFpbmVyIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzNweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0ycHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uaG9tZSAuaG9tZS1jb250YWluZXIgLnN1YnRpdGxlIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cbi5ob21lIC5ob21lLWNvbnRhaW5lciBwIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBjb2xvcjogI2NmY2ZjZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luOiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbi5ob21lIC5ob21lLWNvbnRhaW5lciBwLnNoaW1tZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjIyLCAjZmZmIDc1JSwgIzIyMik7XG4gIGJhY2tncm91bmQtc2l6ZTogMTAwcHggMTAwJTtcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xuICBhbmltYXRpb24tbmFtZTogc2hpbW1lcjtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiA1cztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbn1cbkBrZXlmcmFtZXMgc2hpbW1lciB7XG4gIDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjAwJTtcbiAgfVxuICAxMDAlIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMDAlO1xuICB9XG59XG4uaG9tZSAuaG9tZS1jb250YWluZXIuZGlzcGxheS1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMCkgMCUsIHJnYmEoMCwgMCwgMCwgMC4wMSkgNTAlLCBibGFjayA5MCUpO1xufVxuLmhvbWUgLmhvbWUtY29udGFpbmVyLmRpc3BsYXktY29udGVudCAuY2FyZCB7XG4gIGZpbHRlcjogb3BhY2l0eSgxMDApO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmhvbWUgLmhvbWUtY29udGFpbmVyLmRpc3BsYXktY29udGVudCAuY2FyZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zMyk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XG4gIGJveC1zaGFkb3c6IDEwcHggMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcbn1cbi5ob21lIC5uYXYtYmFyIHtcbiAgei1pbmRleDogMjtcbiAgdG9wOiAwO1xuICBsZWZ0OiA4NSU7XG59XG4uaG9tZSAuYWJvdXQtbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cbi5ob21lIC5hYm91dC1tZTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiAjMDAwO1xufVxuLmhvbWUgLmNhcmQge1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLW91dDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmaWx0ZXI6IG9wYWNpdHkoMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAyNXB4O1xufVxuLmhvbWUgLmNhcmQgaW1nIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4uaG9tZSAuY2FyZCAubWFpbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmFib3V0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hYm91dC5hYm91dC0tZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/nav-bar/nav-bar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/nav-bar/nav-bar.component.ts ***!
    \**********************************************/

  /*! exports provided: NavBarComponent */

  /***/
  function srcAppNavBarNavBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavBarComponent", function () {
      return NavBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "nav--display": a0
      };
    };

    var _c1 = function _c1(a0) {
      return {
        "icon--cross": a0
      };
    };

    var _c2 = function _c2(a0) {
      return {
        "nav-items--display": a0
      };
    };

    var NavBarComponent =
    /*#__PURE__*/
    function () {
      function NavBarComponent() {
        _classCallCheck(this, NavBarComponent);

        this.displayNavItems = false;
      }

      _createClass(NavBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "scrollTo",
        value: function scrollTo(page) {
          switch (page) {
            case 'home':
              window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth'
              });
              break;

            case 'about':
              window.scroll({
                top: window.innerHeight,
                left: 0,
                behavior: 'smooth'
              });
              break;

            default:
              break;
          }
        }
      }, {
        key: "openCV",
        value: function openCV() {
          window.open('assets/HugoMiranda_CV.pdf', '_blank', 'fullscreen=yes');
          return false;
        }
      }, {
        key: "toggleNavDisplay",
        value: function toggleNavDisplay() {
          this.displayNavItems = !this.displayNavItems;
        }
      }]);

      return NavBarComponent;
    }();

    NavBarComponent.ɵfac = function NavBarComponent_Factory(t) {
      return new (t || NavBarComponent)();
    };

    NavBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavBarComponent,
      selectors: [["app-nav-bar"]],
      decls: 16,
      vars: 9,
      consts: [[1, "nav-bar", 3, "ngClass"], [1, "nav-toggle", 3, "click"], [1, "icon", 3, "ngClass"], ["id", "bar-1", 1, "bar"], ["id", "bar-2", 1, "bar"], ["id", "bar-3", 1, "bar"], [3, "ngClass"], [3, "click"]],
      template: function NavBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_div_click_1_listener() {
            return ctx.toggleNavDisplay();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_li_click_7_listener() {
            return ctx.scrollTo("home");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_li_click_10_listener() {
            return ctx.scrollTo("about");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " About me ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavBarComponent_Template_li_click_13_listener() {
            return ctx.openCV();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " CV ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.displayNavItems));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx.displayNavItems));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx.displayNavItems));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      styles: [".nav-bar[_ngcontent-%COMP%] {\n  width: 200px;\n  padding: 1rem;\n  overflow: hidden;\n  box-sizing: border-box;\n  color: #ebebeb;\n  transition: all 0.3s;\n  background-size: cover;\n  position: fixed;\n  right: 5px;\n  left: auto;\n  display: flex;\n  flex-flow: column;\n  justify-content: flex-start;\n  align-items: flex-end;\n}\n.nav-bar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  flex-flow: column;\n  padding: 0;\n  transition: all 0.3s;\n}\n.nav-bar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 16px;\n  transition: all 0.2s ease-out;\n  color: #fff;\n  padding: 5px;\n  background-color: transparent;\n  -webkit-filter: opacity(0);\n          filter: opacity(0);\n  pointer-events: none;\n  display: flex;\n  justify-content: flex-end;\n}\n.nav-bar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3) {\n  transition-delay: 0.05s;\n}\n.nav-bar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2) {\n  transition-delay: 0.1s;\n}\n.nav-bar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1) {\n  transition-delay: 0.15s;\n}\n.nav-bar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.nav-bar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  transition-delay: 0s !important;\n  transform: translateX(-5px);\n  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.5), white);\n  color: #000;\n}\n.nav-bar[_ngcontent-%COMP%]   ul.nav-items--display[_ngcontent-%COMP%] {\n  display: flex;\n}\n.nav-bar[_ngcontent-%COMP%]   ul.nav-items--display[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1) {\n  transition-delay: 0.05s;\n}\n.nav-bar[_ngcontent-%COMP%]   ul.nav-items--display[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2) {\n  transition-delay: 0.1s;\n}\n.nav-bar[_ngcontent-%COMP%]   ul.nav-items--display[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3) {\n  transition-delay: 0.15s;\n}\n.nav-bar[_ngcontent-%COMP%]   ul.nav-items--display[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  -webkit-filter: opacity(100%);\n          filter: opacity(100%);\n  cursor: pointer;\n  pointer-events: all;\n}\n@-webkit-keyframes show {\n  0% {\n    transform: rotateZ(0deg);\n  }\n  25% {\n    transform: rotateZ(5deg);\n  }\n  75% {\n    transform: rotateZ(-5deg);\n  }\n  100% {\n    transform: rotateZ(0deg);\n  }\n}\n@keyframes show {\n  0% {\n    transform: rotateZ(0deg);\n  }\n  25% {\n    transform: rotateZ(5deg);\n  }\n  75% {\n    transform: rotateZ(-5deg);\n  }\n  100% {\n    transform: rotateZ(0deg);\n  }\n}\n.nav-bar[_ngcontent-%COMP%]   .nav-toggle[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.nav-bar.logo[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: all 0.3s;\n}\n.nav-bar.logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n}\n.nav-bar.logo[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.nav-bar[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  background-color: #fff;\n  width: 25px;\n  height: 3px;\n  margin: 3px 0;\n  transition: all 0.3s;\n}\n.nav-bar[_ngcontent-%COMP%]   .icon.icon--cross[_ngcontent-%COMP%]   #bar-1[_ngcontent-%COMP%] {\n  width: 12.5px;\n  transform: rotate(-45deg) translate(6px, 9px);\n}\n.nav-bar[_ngcontent-%COMP%]   .icon.icon--cross[_ngcontent-%COMP%]   #bar-2[_ngcontent-%COMP%] {\n  transform: rotate(45deg);\n}\n.nav-bar[_ngcontent-%COMP%]   .icon.icon--cross[_ngcontent-%COMP%]   #bar-3[_ngcontent-%COMP%] {\n  width: 12.5px;\n  transform: rotate(-45deg) translateX(1px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9odWdvLm1pcmFuZGEvaHVnb21pcmFuZGEvaHVnb21pcmFuZGEvc3JjL2FwcC9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25hdi1iYXIvbmF2LWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtBQ0FGO0FER0k7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUlBLFVBQUE7RUFDQSxvQkFBQTtBQ0pOO0FETU07RUFDRSxlQUFBO0VBQ0EsNkJBQUE7RUFVQSxXQUFBO0VBRUEsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsMEJBQUE7VUFBQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FDZFI7QURGUTtFQUNFLHVCQUFBO0FDSVY7QURGUTtFQUNFLHNCQUFBO0FDSVY7QURGUTtFQUNFLHVCQUFBO0FDSVY7QURPUTtFQUNFLFNBQUE7QUNMVjtBRFFRO0VBQ0UsK0JBQUE7RUFDQSwyQkFBQTtFQUdBLDRFQUFBO0VBQ0EsV0FBQTtBQ1JWO0FEWU07RUFDRSxhQUFBO0FDVlI7QURZUTtFQUNFLHVCQUFBO0FDVlY7QURZUTtFQUNFLHNCQUFBO0FDVlY7QURZUTtFQUNFLHVCQUFBO0FDVlY7QURhUTtFQUNFLDZCQUFBO1VBQUEscUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUNYVjtBRGVNO0VBQ0U7SUFBSSx3QkFBQTtFQ1pWO0VEYU07SUFBSyx3QkFBQTtFQ1ZYO0VEV007SUFBSyx5QkFBQTtFQ1JYO0VEU007SUFBTSx3QkFBQTtFQ05aO0FBQ0Y7QURDTTtFQUNFO0lBQUksd0JBQUE7RUNaVjtFRGFNO0lBQUssd0JBQUE7RUNWWDtFRFdNO0lBQUsseUJBQUE7RUNSWDtFRFNNO0lBQU0sd0JBQUE7RUNOWjtBQUNGO0FEU0k7RUFDRSxlQUFBO0FDUE47QURVSTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtBQ1JOO0FEU007RUFDRSxXQUFBO0FDUFI7QURTTTtFQUNFLHFCQUFBO0FDUFI7QURZTTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7QUNWUjtBRGNRO0VBQ0UsYUFBQTtFQUNBLDZDQUFBO0FDWlY7QURjUTtFQUNFLHdCQUFBO0FDWlY7QURjUTtFQUNFLGFBQUE7RUFDQSx5Q0FBQTtBQ1pWIiwiZmlsZSI6InNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1iYXIge1xuICAvLyBoZWlnaHQ6IDc1cHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgcGFkZGluZzogMXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6ICNlYmViZWI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiA1cHg7XG4gIGxlZnQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgLy8gZm9udC1mYW1pbHk6ICdTaGFyZSBUZWNoIE1vbm8nLCBtb25vc3BhY2U7XG5cbiAgICB1bCB7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAvLyBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAvLyBkaXNwbGF5OiBub25lO1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuXG4gICAgICBsaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1vdXQ7XG4gICAgICAgICY6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjA1cztcbiAgICAgICAgfVxuICAgICAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4xcztcbiAgICAgICAgfVxuICAgICAgICAmOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4xNXM7XG4gICAgICAgIH1cbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIC8vIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgZmlsdGVyOiBvcGFjaXR5KDApO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICAgICAgICBwIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcyAhaW1wb3J0YW50O1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXB4KTtcbiAgICAgICAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSh3aGl0ZSwgMC41KSwgcmdiYSh3aGl0ZSwgMSkpO1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYubmF2LWl0ZW1zLS1kaXNwbGF5IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICBsaTpudGgtY2hpbGQoMSkge1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMDVzO1xuICAgICAgICB9XG4gICAgICAgIGxpOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4xcztcbiAgICAgICAgfVxuICAgICAgICBsaTpudGgtY2hpbGQoMykge1xuICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMTVzO1xuICAgICAgICB9XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgIGZpbHRlcjogb3BhY2l0eSgxMDAlKTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgcG9pbnRlci1ldmVudHM6IGFsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIHNob3cge1xuICAgICAgICAwJSB7dHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpfVxuICAgICAgICAyNSUge3RyYW5zZm9ybTogcm90YXRlWig1ZGVnKX1cbiAgICAgICAgNzUlIHt0cmFuc2Zvcm06IHJvdGF0ZVooLTVkZWcpfVxuICAgICAgICAxMDAlIHt0cmFuc2Zvcm06IHJvdGF0ZVooMGRlZyl9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm5hdi10b2dnbGUge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgICYubG9nbyB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgfVxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaWNvbiB7XG4gICAgICAuYmFyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICAgIGhlaWdodDogM3B4O1xuICAgICAgICBtYXJnaW46IDNweCAwO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbiAgICAgIH1cblxuICAgICAgJi5pY29uLS1jcm9zcyB7XG4gICAgICAgICNiYXItMSB7XG4gICAgICAgICAgd2lkdGg6IDEyLjVweDtcbiAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSg2cHgsOXB4KTtcbiAgICAgICAgfVxuICAgICAgICAjYmFyLTIge1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAgICAgfVxuICAgICAgICAjYmFyLTMge1xuICAgICAgICAgIHdpZHRoOiAxMi41cHg7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGVYKDFweCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG59XG4iLCIubmF2LWJhciB7XG4gIHdpZHRoOiAyMDBweDtcbiAgcGFkZGluZzogMXJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6ICNlYmViZWI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiA1cHg7XG4gIGxlZnQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbn1cbi5uYXYtYmFyIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiBjb2x1bW47XG4gIHBhZGRpbmc6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLm5hdi1iYXIgdWwgbGkge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZmlsdGVyOiBvcGFjaXR5KDApO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5uYXYtYmFyIHVsIGxpOm50aC1jaGlsZCgzKSB7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMDVzO1xufVxuLm5hdi1iYXIgdWwgbGk6bnRoLWNoaWxkKDIpIHtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4xcztcbn1cbi5uYXYtYmFyIHVsIGxpOm50aC1jaGlsZCgxKSB7XG4gIHRyYW5zaXRpb24tZGVsYXk6IDAuMTVzO1xufVxuLm5hdi1iYXIgdWwgbGkgcCB7XG4gIG1hcmdpbjogMDtcbn1cbi5uYXYtYmFyIHVsIGxpOmhvdmVyIHtcbiAgdHJhbnNpdGlvbi1kZWxheTogMHMgIWltcG9ydGFudDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cHgpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSwgd2hpdGUpO1xuICBjb2xvcjogIzAwMDtcbn1cbi5uYXYtYmFyIHVsLm5hdi1pdGVtcy0tZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubmF2LWJhciB1bC5uYXYtaXRlbXMtLWRpc3BsYXkgbGk6bnRoLWNoaWxkKDEpIHtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4wNXM7XG59XG4ubmF2LWJhciB1bC5uYXYtaXRlbXMtLWRpc3BsYXkgbGk6bnRoLWNoaWxkKDIpIHtcbiAgdHJhbnNpdGlvbi1kZWxheTogMC4xcztcbn1cbi5uYXYtYmFyIHVsLm5hdi1pdGVtcy0tZGlzcGxheSBsaTpudGgtY2hpbGQoMykge1xuICB0cmFuc2l0aW9uLWRlbGF5OiAwLjE1cztcbn1cbi5uYXYtYmFyIHVsLm5hdi1pdGVtcy0tZGlzcGxheSBsaSB7XG4gIGZpbHRlcjogb3BhY2l0eSgxMDAlKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xufVxuQGtleWZyYW1lcyBzaG93IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWigwZGVnKTtcbiAgfVxuICAyNSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWig1ZGVnKTtcbiAgfVxuICA3NSUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlWigtNWRlZyk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGVaKDBkZWcpO1xuICB9XG59XG4ubmF2LWJhciAubmF2LXRvZ2dsZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5uYXYtYmFyLmxvZ28ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufVxuLm5hdi1iYXIubG9nbyBpbWcge1xuICB3aWR0aDogNDBweDtcbn1cbi5uYXYtYmFyLmxvZ286aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG4ubmF2LWJhciAuaWNvbiAuYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogM3B4O1xuICBtYXJnaW46IDNweCAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cbi5uYXYtYmFyIC5pY29uLmljb24tLWNyb3NzICNiYXItMSB7XG4gIHdpZHRoOiAxMi41cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlKDZweCwgOXB4KTtcbn1cbi5uYXYtYmFyIC5pY29uLmljb24tLWNyb3NzICNiYXItMiB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cbi5uYXYtYmFyIC5pY29uLmljb24tLWNyb3NzICNiYXItMyB7XG4gIHdpZHRoOiAxMi41cHg7XG4gIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlWCgxcHgpO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav-bar',
          templateUrl: './nav-bar.component.html',
          styleUrls: ['./nav-bar.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
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
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
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
    /*! /Users/hugo.miranda/hugomiranda/hugomiranda/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map