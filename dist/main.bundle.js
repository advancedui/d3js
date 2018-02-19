webpackJsonp([1,4],Array(87).concat([
/* 87 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 87;


/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(118);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnimationsComponent = (function () {
    function AnimationsComponent() {
        this.easing = [
            "easeElastic",
            "easeBounce",
            "easeLinear",
            "easeSin",
            "easeQuad",
            "easeCubic",
            "easePoly",
            "easeCircle",
            "easeExp",
            "easeBack"
        ];
        this.easing_v3 = ["in", "out", "in-out", "out-in"];
        this.hideTransition = true;
        this.methods = [
            "transition.attr - smoothly transition to the new attribute value.",
            "transition.attrTween - smoothly transition between two attribute values.",
            "transition.style - smoothly transition to the new style property value.",
            "transition.styleTween - smoothly transition between two style property values.",
            "transition.text - set the text content when the transition starts.",
            "transition.tween - specify a custom tween operator to run as part of the transition.",
            "transition.select - start a transition on a descendant element for each selected element.",
            "transition.selectAll - start a transition on multiple descendants for each selected element.",
            "transition.filter - filter a transition based on data.",
            "transition.remove - remove selected elements at the end of a transition.",
            "transition.empty - returns true if the transition is empty.",
            "transition.node - returns the first node in the transition.",
            "transition.size - returns the number of elements in the selection.",
            "transition.each - add a listener for transition end events.",
            "transition.call - call a function passing in the current transition."
        ];
    }
    AnimationsComponent.prototype.ngOnInit = function () {
    };
    AnimationsComponent.prototype.simpleTransition = function () {
        d3.select("body")
            .transition()
            .style("background-color", "lightblue");
    };
    AnimationsComponent.prototype.transitionWithDuration = function () {
        d3.select("body")
            .transition()
            .duration(2000)
            .style("background-color", "#f55");
    };
    AnimationsComponent.prototype.simpleEaseTransition = function () {
        var svg = d3.select("#svg-container");
        var bar1 = svg.append("rect")
            .attr("fill", "blue")
            .attr("x", 100)
            .attr("y", 20)
            .attr("height", 20)
            .attr("width", 10);
        var bar2 = svg.append("rect")
            .attr("fill", "blue")
            .attr("x", 120)
            .attr("y", 20)
            .attr("height", 20)
            .attr("width", 10);
        update();
        function update() {
            bar1.transition()
                .ease("in")
                .duration(2000)
                .attr("height", 100);
            bar2.transition()
                .ease("in-out")
                .duration(2000)
                .delay(2000)
                .attr("height", 100);
        }
    };
    AnimationsComponent.prototype.transitionWithEase = function () {
        this.hideTransition = false;
        this.circleTransition(d3.easeElastic, 0);
        this.circleTransition(d3.easeBounce, 1);
        this.circleTransition(d3.easeLinear, 2);
        this.circleTransition(d3.easeSin, 3);
        this.circleTransition(d3.easeQuad, 4);
        this.circleTransition(d3.easeCubic, 5);
        this.circleTransition(d3.easePoly, 6);
        this.circleTransition(d3.easeCircle, 7);
        this.circleTransition(d3.easeExp, 8);
        this.circleTransition(d3.easeBack, 9);
    };
    AnimationsComponent.prototype.circleTransition = function (easement, yPos) {
        var timeCircle = d3.select("#svg-container").append("circle")
            .attr("fill", "steelblue")
            .attr("r", 20);
        repeat();
        function repeat() {
            timeCircle
                .attr('cx', 210) // position the circle at 40 on the x axis
                .attr('cy', (yPos * 45) + 25) // position the circle at 250 on the y axis
                .transition() // apply a transition
                .ease(easement) // control the speed of the transition
                .duration(4000) // apply it over 2000 milliseconds
                .attr('cx', 720) // move the circle to 920 on the x axis
                .transition() // apply a transition
                .ease(easement) // control the speed of the transition
                .duration(4000) // apply it over 2000 milliseconds
                .attr('cx', 210) // return the circle to 40 on the x axis
                .on("end", repeat); // when the transition finishes start again
        }
        ;
        var easeType = d3.select("#svg-container").append("text")
            .attr("dy", ".35em") // set offset y position
            .attr("x", 475)
            .attr("text-anchor", "middle") // set anchor x justification
            .attr("y", (yPos * 45) + 25)
            .text(this.easing[yPos]);
    };
    AnimationsComponent.prototype.transitionWithDelay = function () {
        d3.selectAll("h3")
            .transition()
            .style("font-size", "28px")
            .delay(2000)
            .duration(2000);
    };
    AnimationsComponent.prototype.identifyTransitionStart = function () {
        d3.select("body")
            .transition()
            .delay(200)
            .each("start", function () { d3.select(this).style("color", "green"); })
            .style("color", "red");
    };
    return AnimationsComponent;
}());
AnimationsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-animations',
        template: __webpack_require__(194),
        styles: [__webpack_require__(174)]
    }),
    __metadata("design:paramtypes", [])
], AnimationsComponent);

//# sourceMappingURL=animations.component.js.map

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(195),
        styles: [__webpack_require__(175)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(98);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* RoutableComponents */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing__["b" /* AppRoutingModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__intro_intro_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__examples_examples_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__svg_svg_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__principles_principles_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__selections_selections_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__binding_data_binding_data_component__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__load_ext_data_load_ext_data_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__animations_animations_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__interactivity_interactivity_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__scales_scales_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__axes_axes_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__charts_intro_charts_intro_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__bar_chart_bar_chart_component__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__line_chart_line_chart_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pie_chart_pie_chart_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__d3_layouts_d3_layouts_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pan_zoom_pan_zoom_component__ = __webpack_require__(112);
/* unused harmony export appRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutableComponents; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__intro_intro_component__["a" /* IntroComponent */] },
    { path: 'examples', component: __WEBPACK_IMPORTED_MODULE_4__examples_examples_component__["a" /* ExamplesComponent */] },
    { path: 'intro', component: __WEBPACK_IMPORTED_MODULE_3__intro_intro_component__["a" /* IntroComponent */] },
    { path: 'svg', component: __WEBPACK_IMPORTED_MODULE_5__svg_svg_component__["a" /* SvgComponent */] },
    { path: 'drawing-shapes', component: __WEBPACK_IMPORTED_MODULE_4__examples_examples_component__["a" /* ExamplesComponent */] },
    { path: 'principles', component: __WEBPACK_IMPORTED_MODULE_6__principles_principles_component__["a" /* PrinciplesComponent */] },
    { path: 'selections', component: __WEBPACK_IMPORTED_MODULE_7__selections_selections_component__["a" /* SelectionsComponent */] },
    { path: 'binding-data', component: __WEBPACK_IMPORTED_MODULE_8__binding_data_binding_data_component__["a" /* BindingDataComponent */] },
    { path: 'load-ext-data', component: __WEBPACK_IMPORTED_MODULE_9__load_ext_data_load_ext_data_component__["a" /* LoadExtDataComponent */] },
    { path: 'animations', component: __WEBPACK_IMPORTED_MODULE_10__animations_animations_component__["a" /* AnimationsComponent */] },
    { path: 'interactivity', component: __WEBPACK_IMPORTED_MODULE_11__interactivity_interactivity_component__["a" /* InteractivityComponent */] },
    { path: 'scales', component: __WEBPACK_IMPORTED_MODULE_12__scales_scales_component__["a" /* ScalesComponent */] },
    { path: 'axes', component: __WEBPACK_IMPORTED_MODULE_13__axes_axes_component__["a" /* AxesComponent */] },
    { path: 'intro-to-charts', component: __WEBPACK_IMPORTED_MODULE_14__charts_intro_charts_intro_component__["a" /* ChartsIntroComponent */] },
    { path: 'bar-chart', component: __WEBPACK_IMPORTED_MODULE_15__bar_chart_bar_chart_component__["a" /* BarChartComponent */] },
    { path: 'line-chart', component: __WEBPACK_IMPORTED_MODULE_16__line_chart_line_chart_component__["a" /* LineChartComponent */] },
    { path: 'pie-chart', component: __WEBPACK_IMPORTED_MODULE_17__pie_chart_pie_chart_component__["a" /* PieChartComponent */] },
    { path: 'layouts', component: __WEBPACK_IMPORTED_MODULE_18__d3_layouts_d3_layouts_component__["a" /* D3LayoutsComponent */] },
    { path: 'panning-dragging', component: __WEBPACK_IMPORTED_MODULE_19__pan_zoom_pan_zoom_component__["a" /* PanZoomComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(appRoutes, {
                useHash: true,
            })
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

var RoutableComponents = [
    __WEBPACK_IMPORTED_MODULE_3__intro_intro_component__["a" /* IntroComponent */],
    __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */],
    __WEBPACK_IMPORTED_MODULE_4__examples_examples_component__["a" /* ExamplesComponent */],
    __WEBPACK_IMPORTED_MODULE_5__svg_svg_component__["a" /* SvgComponent */],
    __WEBPACK_IMPORTED_MODULE_6__principles_principles_component__["a" /* PrinciplesComponent */],
    __WEBPACK_IMPORTED_MODULE_7__selections_selections_component__["a" /* SelectionsComponent */],
    __WEBPACK_IMPORTED_MODULE_8__binding_data_binding_data_component__["a" /* BindingDataComponent */],
    __WEBPACK_IMPORTED_MODULE_9__load_ext_data_load_ext_data_component__["a" /* LoadExtDataComponent */],
    __WEBPACK_IMPORTED_MODULE_10__animations_animations_component__["a" /* AnimationsComponent */],
    __WEBPACK_IMPORTED_MODULE_11__interactivity_interactivity_component__["a" /* InteractivityComponent */],
    __WEBPACK_IMPORTED_MODULE_12__scales_scales_component__["a" /* ScalesComponent */],
    __WEBPACK_IMPORTED_MODULE_13__axes_axes_component__["a" /* AxesComponent */],
    __WEBPACK_IMPORTED_MODULE_14__charts_intro_charts_intro_component__["a" /* ChartsIntroComponent */],
    __WEBPACK_IMPORTED_MODULE_15__bar_chart_bar_chart_component__["a" /* BarChartComponent */],
    __WEBPACK_IMPORTED_MODULE_16__line_chart_line_chart_component__["a" /* LineChartComponent */],
    __WEBPACK_IMPORTED_MODULE_17__pie_chart_pie_chart_component__["a" /* PieChartComponent */],
    __WEBPACK_IMPORTED_MODULE_18__d3_layouts_d3_layouts_component__["a" /* D3LayoutsComponent */],
    __WEBPACK_IMPORTED_MODULE_19__pan_zoom_pan_zoom_component__["a" /* PanZoomComponent */]
];
//# sourceMappingURL=app.routing.js.map

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AxesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AxesComponent = (function () {
    function AxesComponent() {
    }
    AxesComponent.prototype.ngOnInit = function () {
    };
    AxesComponent.prototype.simpleAxis = function () {
        var axis = d3.svg.axis();
        d3.select(".ex-1").append("svg")
            .attr("class", "axis")
            .attr("width", 700)
            .attr("height", 60)
            .append("g")
            .attr("transform", "translate(10,30)")
            .call(axis);
    };
    AxesComponent.prototype.axisWithScale = function () {
        var axis = d3.svg
            .axis()
            .scale();
        d3.select(".ex-1").append("svg")
            .attr("class", "axis")
            .attr("width", 700)
            .attr("height", 60)
            .append("g")
            .attr("transform", "translate(10,30)")
            .call(axis);
    };
    AxesComponent.prototype.axisWithScale2 = function () {
        var scale = d3.scale.linear()
            .domain([0, 100])
            .range([0, 600]);
        var axis = d3.svg
            .axis()
            .scale(scale);
        d3.select(".ex-1").append("svg")
            .attr("class", "axis")
            .attr("width", 700)
            .attr("height", 60)
            .append("g")
            .attr("transform", "translate(10,30)")
            .call(axis);
    };
    AxesComponent.prototype.axisWithOrient = function (orient) {
        var scale = d3.scale.linear()
            .domain([0, 10])
            .range([0, 600]);
        var axis = d3.svg
            .axis()
            .scale(scale)
            .orient(orient);
        d3.select(".ex-1").append("svg")
            .attr("class", "axis")
            .attr("width", 700)
            .attr("height", 600)
            .append("g")
            .attr("transform", "translate(10,30)")
            .call(axis);
    };
    AxesComponent.prototype.axisWithTick = function (orient) {
        var scale = d3.scale.linear()
            .domain([0, 10])
            .range([0, 600]);
        var axis = d3.svg
            .axis()
            .scale(scale)
            .orient(orient)
            .ticks(20);
        d3.select(".ex-2").append("svg")
            .attr("class", "axis")
            .attr("width", 700)
            .attr("height", 60)
            .append("g")
            .attr("transform", "translate(10,30)")
            .call(axis);
    };
    AxesComponent.prototype.axisWithTickFormat = function (orient) {
        var scale = d3.scale.linear()
            .domain([-1, 1])
            .range([0, 600]);
        scale.ticks(10)
            .map(scale.tickFormat(10, "+%"));
        var axis = d3.svg
            .axis()
            .scale(scale)
            .orient(orient);
        d3.select(".ex-2").append("svg")
            .attr("class", "axis")
            .attr("width", 700)
            .attr("height", 60)
            .append("g")
            .attr("transform", "translate(10,30)")
            .call(axis);
    };
    AxesComponent.prototype.axisWithTickValues = function (orient) {
        var scale = d3.scale.linear()
            .domain([0, 25])
            .range([0, 600]);
        var axis = d3.svg
            .axis()
            .scale(scale)
            .orient(orient)
            .tickValues([1, 2, 3, 5, 8, 13, 21]);
        d3.select(".ex-2").append("svg")
            .attr("class", "axis")
            .attr("width", 700)
            .attr("height", 60)
            .append("g")
            .attr("transform", "translate(10,30)")
            .call(axis);
    };
    AxesComponent.prototype.axisWithTickSize = function (inner, outer) {
        var scale = d3.scale.linear()
            .domain([0, 25])
            .range([0, 600]);
        var axis = d3.svg
            .axis()
            .scale(scale)
            .tickSize(inner, outer);
        d3.select(".ex-3").append("svg")
            .attr("class", "axis")
            .attr("width", 700)
            .attr("height", 60)
            .append("g")
            .attr("transform", "translate(10,30)")
            .call(axis);
    };
    AxesComponent.prototype.getInnerTickSize = function () {
        var scale = d3.scale.linear()
            .domain([0, 25])
            .range([0, 600]);
        var axis = d3.svg
            .axis()
            .scale(scale);
        d3.select(".ex-3").append("svg")
            .attr("class", "axis")
            .attr("width", 700)
            .attr("height", 60)
            .append("g")
            .attr("transform", "translate(10,30)")
            .call(axis);
        this.innerTickSize = axis.innerTickSize();
    };
    AxesComponent.prototype.setInnerTickSize = function (innerTickSize) {
        var scale = d3.scale.linear()
            .domain([0, 25])
            .range([0, 600]);
        var axis = d3.svg
            .axis()
            .scale(scale)
            .innerTickSize(innerTickSize);
        d3.select(".ex-3").append("svg")
            .attr("class", "axis")
            .attr("width", 700)
            .attr("height", 60)
            .append("g")
            .attr("transform", "translate(10,30)")
            .call(axis);
    };
    AxesComponent.prototype.getOuterTickSize = function () {
        var scale = d3.scale.linear()
            .domain([0, 25])
            .range([0, 600]);
        var axis = d3.svg
            .axis()
            .scale(scale);
        d3.select(".ex-4").append("svg")
            .attr("class", "axis")
            .attr("width", 700)
            .attr("height", 60)
            .append("g")
            .attr("transform", "translate(10,30)")
            .call(axis);
        this.outerTickSize = axis.outerTickSize();
    };
    AxesComponent.prototype.setOuterTickSize = function (outerTickSize) {
        var scale = d3.scale.linear()
            .domain([0, 25])
            .range([0, 600]);
        var axis = d3.svg
            .axis()
            .scale(scale)
            .outerTickSize(outerTickSize);
        d3.select(".ex-4").append("svg")
            .attr("class", "axis")
            .attr("width", 700)
            .attr("height", 60)
            .append("g")
            .attr("transform", "translate(10,30)")
            .call(axis);
    };
    AxesComponent.prototype.getTickPadding = function () {
        var scale = d3.scale.linear()
            .domain([0, 25])
            .range([0, 600]);
        var axis = d3.svg
            .axis()
            .scale(scale);
        d3.select(".ex-5").append("svg")
            .attr("class", "axis")
            .attr("width", 700)
            .attr("height", 60)
            .append("g")
            .attr("transform", "translate(10,30)")
            .call(axis);
        this.tickPadding = axis.tickPadding();
    };
    AxesComponent.prototype.setTickPadding = function (padding) {
        var scale = d3.scale.linear()
            .domain([0, 25])
            .range([0, 600]);
        var axis = d3.svg
            .axis()
            .scale(scale)
            .tickPadding(padding);
        d3.select(".ex-5").append("svg")
            .attr("class", "axis")
            .attr("width", 700)
            .attr("height", 60)
            .append("g")
            .attr("transform", "translate(10,30)")
            .call(axis);
    };
    AxesComponent.prototype.getTickFormat = function () {
        var scale = d3.scale.linear()
            .domain([0, 25])
            .range([0, 600]);
        var axis = d3.svg
            .axis()
            .scale(scale);
        d3.select(".ex-6").append("svg")
            .attr("class", "axis")
            .attr("width", 700)
            .attr("height", 60)
            .append("g")
            .attr("transform", "translate(10,30)")
            .call(axis);
        this.tickFormat = axis.tickFormat();
    };
    AxesComponent.prototype.setTickFormat = function (format) {
        var commasFormatter = d3.format(format);
        var scale = d3.scale.linear()
            .domain([0, 100])
            .range([0, 600]);
        var axis = d3.svg
            .axis()
            .scale(scale)
            .tickFormat(function (d) { return "$" + commasFormatter(d); });
        d3.select(".ex-6").append("svg")
            .attr("class", "axis")
            .attr("width", 700)
            .attr("height", 60)
            .append("g")
            .attr("transform", "translate(10,30)")
            .call(axis);
    };
    return AxesComponent;
}());
AxesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-axes',
        template: __webpack_require__(196),
        styles: [__webpack_require__(176)]
    }),
    __metadata("design:paramtypes", [])
], AxesComponent);

//# sourceMappingURL=axes.component.js.map

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BarChartComponent = (function () {
    function BarChartComponent() {
    }
    BarChartComponent.prototype.ngOnInit = function () {
        this.drawBarChart();
        this.withNegValues();
        this.barChartWithLabels();
        // this.drawStackedBarChart();
    };
    BarChartComponent.prototype.drawBarChart = function () {
        var svg = d3.select("svg"), margin = { top: 20, right: 20, bottom: 30, left: 40 }, width = +svg.attr("width") - margin.left - margin.right, height = +svg.attr("height") - margin.top - margin.bottom;
        var x = d3.scale.ordinal().rangeRoundBands([0, width], 0.1), y = d3.scale.linear().rangeRound([height, 0]);
        var g = svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        d3.tsv("assets/data.tsv", function (d) {
            d.frequency = +d.frequency;
            return d;
        }, function (error, data) {
            if (error)
                throw error;
            x.domain(data.map(function (d) { return d.letter; }));
            y.domain([0, d3.max(data, function (d) { return d.frequency; })]);
            var xAxis = d3.svg.axis().scale(x);
            var yAxis = d3.svg.axis().scale(y).orient("left").ticks(10, "%");
            g.append("g")
                .attr("class", "axis axis--x")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis);
            g.append("g")
                .attr("class", "axis axis--y")
                .call(yAxis)
                .append("text")
                .attr("transform", "rotate(-90)")
                .attr("y", 6)
                .attr("dy", "0.71em")
                .attr("text-anchor", "end")
                .text("Frequency");
            g.selectAll(".bar")
                .data(data)
                .enter().append("rect")
                .attr("class", "bar")
                .attr("x", function (d) { return x(d.letter); })
                .attr("y", function (d) { return y(d.frequency); })
                .attr("width", x.rangeBand())
                .attr("height", function (d) { return height - y(d.frequency); });
        });
    };
    BarChartComponent.prototype.drawStackedBarChart = function () {
        var svg = d3.select("svg#bar-chart2"), margin = { top: 20, right: 20, bottom: 30, left: 40 }, width = +svg.attr("width") - margin.left - margin.right, height = +svg.attr("height") - margin.top - margin.bottom, g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        var x = d3.scale.ordinal()
            .rangeRoundBands([0, width], 0.05, .01);
        var y = d3.scale.linear()
            .rangeRound([height, 0]);
        var z = d3.scale.ordinal()
            .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
        var headers;
        d3.tsv("assets/data_bar.tsv", function (d, i, cols) {
            var columns = Object.keys(d);
            headers = columns;
            d.columns = columns;
            for (var i = 1, t = 0; i < columns.length; ++i)
                t += d[columns[i]] = +d[columns[i]];
            d.total = t;
            return d;
        }, function (error, data) {
            if (error)
                throw error;
            var keys = headers.slice(1);
            data.sort(function (a, b) { return b.total - a.total; });
            x.domain(data.map(function (d) { return d.State; }));
            y.domain([0, d3.max(data, function (d) { return d.total; })]).nice();
            z.domain(keys);
            g.append("g")
                .selectAll("g")
                .data(d3.layout.stack().keys(keys)(data))
                .enter().append("g")
                .attr("fill", function (d) { return z(d.key); })
                .selectAll("rect")
                .data(function (d) { return d; })
                .enter().append("rect")
                .attr("x", function (d) { return x(d.data.State); })
                .attr("y", function (d) { return y(d[1]); })
                .attr("height", function (d) { return y(d[0]) - y(d[1]); })
                .attr("width", x.rangeBand());
            g.append("g")
                .attr("class", "axis")
                .attr("transform", "translate(0," + height + ")")
                .call(d3.svg.axis(x));
            g.append("g")
                .attr("class", "axis")
                .call(d3.svg.axis().scale(y).ticks(null, "s"))
                .append("text")
                .attr("x", 2)
                .attr("y", y(y.ticks().pop()) + 0.5)
                .attr("dy", "0.32em")
                .attr("fill", "#000")
                .attr("font-weight", "bold")
                .attr("text-anchor", "start")
                .text("Population");
            var legend = g.append("g")
                .attr("font-family", "sans-serif")
                .attr("font-size", 10)
                .attr("text-anchor", "end")
                .selectAll("g")
                .data(keys.slice().reverse())
                .enter().append("g")
                .attr("transform", function (d, i) { return "translate(0," + i * 20 + ")"; });
            legend.append("rect")
                .attr("x", width - 19)
                .attr("width", 19)
                .attr("height", 19)
                .attr("fill", z);
            legend.append("text")
                .attr("x", width - 24)
                .attr("y", 9.5)
                .attr("dy", "0.32em")
                .text(function (d) { return d; });
        });
    };
    BarChartComponent.prototype.withNegValues = function () {
        var margin = { top: 20, right: 30, bottom: 40, left: 30 }, width = 700 - margin.left - margin.right, height = 500 - margin.top - margin.bottom;
        var x = d3.scale.linear()
            .range([0, width]);
        var y = d3.scale.ordinal()
            .rangeRoundBands([0, height], 0.1);
        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");
        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left")
            .tickSize(0)
            .tickPadding(6);
        var svg = d3.select("#bar-chart2")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        d3.tsv("assets/data_neg.tsv", type, function (error, data) {
            x.domain(d3.extent(data, function (d) { return d.value; })).nice();
            y.domain(data.map(function (d) { return d.name; }));
            svg.selectAll(".bar")
                .data(data)
                .enter().append("rect")
                .attr("class", function (d) { return "bar bar--" + (d.value < 0 ? "negative" : "positive"); })
                .attr("x", function (d) { return x(Math.min(0, d.value)); })
                .attr("y", function (d) { return y(d.name); })
                .attr("width", function (d) { return Math.abs(x(d.value) - x(0)); })
                .attr("height", y.rangeBand());
            svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis);
            svg.append("g")
                .attr("class", "y axis")
                .attr("transform", "translate(" + x(0) + ",0)")
                .call(yAxis);
        });
        function type(d) {
            d.value = +d.value;
            return d;
        }
    };
    BarChartComponent.prototype.barChartWithLabels = function () {
        data = [
            { label: "Category 1", value: 19 },
            { label: "Category 2", value: 5 },
            { label: "Category 3", value: 13 },
            { label: "Category 4", value: 17 },
            { label: "Category 5", value: 19 },
            { label: "Category 6", value: 27 }
        ];
        var div = d3.select("#bar-chart-with-tooltip").append("div").attr("class", "toolTip");
        var axisMargin = 20, margin = 40, valueMargin = 4, width = 700, height = 600, barHeight = (height - axisMargin - margin * 2) * 0.4 / data.length, barPadding = (height - axisMargin - margin * 2) * 0.6 / data.length, data, bar, svg, scale, xAxis, labelWidth = 0;
        var max = d3.max(data, function (d) { return d.value; });
        svg = d3.select('#bar-chart-with-tooltip')
            .append("svg")
            .attr("width", width)
            .attr("height", height);
        bar = svg.selectAll("g")
            .data(data)
            .enter()
            .append("g");
        bar.attr("class", "bar")
            .attr("cx", 0)
            .attr("transform", function (d, i) {
            return "translate(" + margin + "," + (i * (barHeight + barPadding) + barPadding) + ")";
        });
        bar.append("text")
            .attr("class", "label")
            .attr("y", barHeight / 2)
            .attr("dy", ".35em") //vertical align middle
            .text(function (d) {
            return d.label;
        }).each(function () {
            labelWidth = Math.ceil(Math.max(labelWidth, this.getBBox().width));
        });
        scale = d3.scale.linear()
            .domain([0, max])
            .range([0, width - margin * 2 - labelWidth]);
        xAxis = d3.svg.axis()
            .scale(scale)
            .tickSize(-height + 2 * margin + axisMargin)
            .orient("bottom");
        bar.append("rect")
            .attr("transform", "translate(" + labelWidth + ", 0)")
            .attr("height", barHeight)
            .attr("width", function (d) {
            return scale(d.value);
        });
        bar.append("text")
            .attr("class", "value")
            .attr("y", barHeight / 2)
            .attr("dx", -valueMargin + labelWidth) //margin right
            .attr("dy", ".35em") //vertical align middle
            .attr("text-anchor", "end")
            .text(function (d) {
            return (d.value + "%");
        })
            .attr("x", function (d) {
            var width = this.getBBox().width;
            return Math.max(width + valueMargin, scale(d.value));
        });
        bar.on("mousemove", function (d) {
            div.style("left", d3.event.pageX + 10 + "px");
            div.style("top", d3.event.pageY - 25 + "px");
            div.style("display", "inline-block");
            div.html((d.label) + "<br>" + (d.value) + "%");
        });
        bar.on("mouseout", function (d) {
            div.style("display", "none");
        });
        svg.insert("g", ":first-child")
            .attr("class", "axisHorizontal")
            .attr("transform", "translate(" + (margin + labelWidth) + "," + (height - axisMargin - margin) + ")")
            .call(xAxis);
    };
    return BarChartComponent;
}());
BarChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-bar-chart',
        template: __webpack_require__(197),
        styles: [__webpack_require__(177)]
    }),
    __metadata("design:paramtypes", [])
], BarChartComponent);

//# sourceMappingURL=bar-chart.component.js.map

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BindingDataComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BindingDataComponent = (function () {
    function BindingDataComponent() {
        this.dataSet = [10, 20, 30, 25, 15];
    }
    BindingDataComponent.prototype.ngOnInit = function () {
        this.mySvg = d3.select('#my-svg');
    };
    BindingDataComponent.prototype.addData = function () {
        d3.select("#list").selectAll("li").data([10, 20, 30, 25, 15]);
    };
    BindingDataComponent.prototype.updateData = function () {
        d3.select("#list").selectAll("li")
            .data(this.dataSet)
            .text(function (d) { return d; });
    };
    BindingDataComponent.prototype.createNew = function () {
        d3.select("#list").selectAll("li")
            .data([10, 20, 30, 25, 15])
            .text(function (d) { return "This is pre-existing element and the value is " + d; })
            .enter()
            .append("li")
            .text(function (d) { return "This is dynamically created element and the value is " + d; });
    };
    BindingDataComponent.prototype.exit = function () {
        d3.select("#list").selectAll("li")
            .data([10, 20, 30, 15])
            .exit()
            .remove();
    };
    BindingDataComponent.prototype.datum = function () {
        d3.select("p")
            .datum(50)
            .text(function (d) {
            return "Used existing paragraph element and the data " + d + " is assigned.";
        });
        d3.select("div#fromDatum")
            .datum(100)
            .append("p")
            .text(function (d) {
            return "Created new paragraph element and the data " + d + " is assigned.";
        });
    };
    BindingDataComponent.prototype.dataFnUsage = function () {
        var self = this;
        self.tempD = "";
        self.tempI = "";
        self.tempThis = "";
        var data = [1, 2, 3];
        var paragraph = d3.select("body")
            .selectAll("#dumData li")
            .data(data)
            .text(function (d, i) {
            console.log(d); // the data element
            console.log(i); // the index element
            console.log(this); // the current DOM object
            self.tempD += d; // the data element
            self.tempI += i; // the index element
            self.tempThis += this; // the current DOM object
            return "The index is " + i + " and the data is " + d;
        });
    };
    BindingDataComponent.prototype.dataStructure = function () {
        var x = [1, 2, 3]; // x coordinates
        var y = [1, 3, 2]; // y coordinates
        var r = [5, 5, 5]; // radius
        var c = ['red', 'green', 'blue']; // colors
        this.circlesData = [{
                x: '25%',
                y: '25%',
                r: 15,
                c: 'red'
            }, {
                x: '50%',
                y: '50%',
                r: 15,
                c: 'green'
            }, {
                x: '75%',
                y: '75%',
                r: 15,
                c: 'blue'
            }];
        this.circles = this.mySvg
            .selectAll('circle')
            .data(this.circlesData);
        console.log(this.circles);
    };
    BindingDataComponent.prototype.createCircles = function () {
        this.circles
            .enter()
            .append('circle')
            .attr('cx', function (d) {
            return d.x;
        })
            .attr('cy', function (d) {
            return d.y;
        })
            .attr('fill', function (d) {
            return d.c;
        })
            .attr('r', function (d) {
            return d.r;
        });
    };
    BindingDataComponent.prototype.dataChanges = function () {
        // change coordinates of the first circle:
        this.circlesData[0].x = '10%';
        this.circlesData[0].y = '10%';
        // add a new circle:
        this.circlesData.push({
            x: '85%',
            y: '85%',
            r: 15,
            c: 'yellow'
        });
        this.circles = this.mySvg
            .selectAll('circle')
            .data(this.circlesData);
    };
    BindingDataComponent.prototype.createNewCircle = function () {
        // change coordinates of the first circle:
        this.circlesData[0].x = '10%';
        this.circlesData[0].y = '10%';
        // add a new circle:
        this.circlesData.push({
            x: '80%',
            y: '80%',
            r: 15,
            c: 'yellow'
        });
        this.circles = this.mySvg
            .selectAll('circle')
            .data(this.circlesData);
        this.createCircles();
    };
    BindingDataComponent.prototype.updateExisting = function () {
        // update (x,y) coordinates:
        this.circles
            .attr('cx', function (d) {
            return d.x;
        })
            .attr('cy', function (d) {
            return d.y;
        });
    };
    BindingDataComponent.prototype.removeCircles = function () {
        this.mySvg
            .selectAll('circle')
            .data([])
            .exit()
            .remove();
    };
    BindingDataComponent.prototype.createMySvg = function () {
        var data = [{
                x: '25%',
                y: '25%',
                r: '5%',
                c: 'red'
            }, {
                x: '50%',
                y: '50%',
                r: '5%',
                c: 'green'
            }, {
                x: '75%',
                y: '75%',
                r: '5%',
                c: 'blue'
            }];
        var svg = d3.select('#my-svg2');
        var circles = svg
            .selectAll('circle')
            .data(data);
        circles
            .enter()
            .append('circle')
            .attr('cx', function (d) {
            return d.x;
        })
            .attr('cy', function (d) {
            return d.y;
        })
            .attr('fill', function (d) {
            return d.c;
        })
            .attr('r', function (d) {
            return d.r;
        });
    };
    BindingDataComponent.prototype.UpdateDataWithIndex = function () {
        // reset the `data` array with new circles:
        var data = [{
                x: '33%',
                y: '33%',
                r: '5%',
                c: 'orange'
            }, {
                x: '66%',
                y: '66%',
                r: '5%',
                c: 'cyan'
            }, {
                x: '25%',
                y: '25%',
                r: '5%',
                c: 'magenta'
            }];
        var svg = d3.select('#my-svg2');
        var circles = svg
            .selectAll('circle')
            .data(data);
        // update (x,y) coordinates of existing elements:
        circles
            .transition()
            .attr('cx', function (d) {
            return d.x;
        })
            .attr('cy', function (d) {
            return d.y;
        });
        // create new elements:
        circles
            .enter()
            .append('circle')
            .attr('cx', function (d) {
            return d.x;
        })
            .attr('cy', function (d) {
            return d.y;
        })
            .attr('fill', function (d) {
            return d.c;
        })
            .attr('r', 0)
            .transition()
            .attr('r', function (d) {
            return d.r;
        });
        // remove old elements:
        circles
            .exit()
            .transition()
            .attr('r', 0)
            .remove();
    };
    BindingDataComponent.prototype.createSvgWithID = function () {
        var data = [{
                id: 'before1',
                x: '25%',
                y: '25%',
                r: '5%',
                c: 'red'
            }, {
                id: 'before2',
                x: '50%',
                y: '50%',
                r: '5%',
                c: 'green'
            }, {
                id: 'before3',
                x: '75%',
                y: '75%',
                r: '5%',
                c: 'blue'
            }];
        var mySvg = d3.select('#my-svg3');
        var circles = mySvg
            .selectAll('circle')
            .data(data, function (d) {
            return d.id;
        });
        circles
            .enter()
            .append('circle')
            .attr('cx', function (d) {
            return d.x;
        })
            .attr('cy', function (d) {
            return d.y;
        })
            .attr('fill', function (d) {
            return d.c;
        })
            .attr('r', function (d) {
            return d.r;
        });
    };
    BindingDataComponent.prototype.updateDataWithID = function () {
        // reset the `data` array with new circles:
        var data = [{
                id: 'after1',
                x: '33%',
                y: '33%',
                r: '5%',
                c: 'orange'
            }, {
                id: 'after2',
                x: '66%',
                y: '66%',
                r: '5%',
                c: 'cyan'
            }, {
                id: 'after3',
                x: '25%',
                y: '25%',
                r: '5%',
                c: 'magenta'
            }];
        var mySvg = d3.select('#my-svg3');
        var circles = mySvg
            .selectAll('circle')
            .data(data, function (d) {
            return d.id;
        });
        // update (x,y) coordinates of existing elements:
        circles
            .transition()
            .attr('cx', function (d) {
            return d.x;
        })
            .attr('cy', function (d) {
            return d.y;
        })
            .attr('fill', function (d) {
            return d.c;
        });
        // create new elements:
        circles
            .enter()
            .append('circle')
            .attr('cx', function (d) {
            return d.x;
        })
            .attr('cy', function (d) {
            return d.y;
        })
            .attr('fill', function (d) {
            return d.c;
        })
            .attr('r', 0)
            .transition()
            .attr('r', function (d) {
            return d.r;
        });
        // remove old elements:
        circles
            .exit()
            .transition()
            .attr('r', 0)
            .remove();
    };
    BindingDataComponent.prototype.removeSpecificElement = function () {
        var data = [{
                id: 'before1',
                x: '33%',
                y: '33%',
                r: '5%',
                c: 'orange'
            }, {
                id: 'before3',
                x: '25%',
                y: '25%',
                r: '5%',
                c: 'magenta'
            }];
        var mySvg = d3.select('#my-svg3');
        var circles = mySvg
            .selectAll('circle')
            .data(data, function (d) { return d.id; })
            .exit()
            .transition()
            .attr('r', 0)
            .remove();
    };
    BindingDataComponent.prototype.updateSpecificElement = function () {
        var data = [{
                id: 'before1',
                x: '33%',
                y: '33%',
                r: '5%',
                c: 'yellow'
            }];
        var mySvg = d3.select('#my-svg3');
        var circles = mySvg
            .selectAll('circle')
            .data(data, function (d) { return d.id; })
            .transition()
            .attr('fill', function (d) { return d.c; });
    };
    BindingDataComponent.prototype.updateSpecific = function (id, property, value) {
        var data = {
            id: id,
        };
        data[property] = value;
        var mySvg = d3.select('#my-svg3');
        var circles = mySvg
            .selectAll('circle')
            .data([data], function (d) { return d.id; })
            .transition()
            .attr('fill', function (d) { return d.c; });
    };
    return BindingDataComponent;
}());
BindingDataComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-binding-data',
        template: __webpack_require__(198),
        styles: [__webpack_require__(178)]
    }),
    __metadata("design:paramtypes", [])
], BindingDataComponent);

//# sourceMappingURL=binding-data.component.js.map

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsIntroComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChartsIntroComponent = (function () {
    function ChartsIntroComponent() {
        this.interpolate = "basis";
        this.sorted_names = ['linear', 'step-before', 'step-after', 'basis', 'basis-open', 'basis-closed', 'bundle', 'cardinal', 'cardinal', 'cardinal-closed', 'monotone'];
    }
    ChartsIntroComponent.prototype.ngOnInit = function () {
    };
    ChartsIntroComponent.prototype.svgBarWithD3 = function () {
        var data = [50, 100, 120];
        var width = 1300, scaleFactor = 10, barHeight = 20;
        var graph = d3.select("#scales")
            .append("svg")
            .attr("width", width)
            .attr("height", barHeight * data.length);
        var bar = graph.selectAll("g")
            .data(data)
            .enter()
            .append("g")
            .attr("transform", function (d, i) {
            return "translate(0," + i * barHeight + ")";
        });
        bar.append("rect")
            .attr("width", function (d) {
            return d * scaleFactor;
        })
            .attr("height", barHeight - 1);
        bar.append("text")
            .attr("x", function (d) { return (d * scaleFactor); })
            .attr("y", barHeight / 2)
            .attr("dy", ".35em")
            .text(function (d) { return d; });
    };
    ChartsIntroComponent.prototype.drawPath = function () {
        var lineData = [{ "x": 1, "y": 5 }, { "x": 20, "y": 20 },
            { "x": 40, "y": 10 }, { "x": 60, "y": 40 },
            { "x": 80, "y": 5 }, { "x": 100, "y": 60 }];
        var lineData2 = [{ x: 0, y: 0 },
            { x: 600, y: 100 }, { x: 600, y: 0 }];
        var line = d3.svg.line()
            .x(function (d) { return d.x; })
            .y(function (d) { return d.y; })
            .interpolate(this.interpolate);
        d3.select('#ex-1').append('svg')
            .attr('height', 100)
            .attr('width', 600)
            .append('g')
            .selectAll('path')
            .data(lineData)
            .enter()
            .append('path')
            .attr('d', line(lineData))
            .attr("stroke", "blue")
            .attr("stroke-width", 2)
            .attr("fill", "none");
    };
    ChartsIntroComponent.prototype.customInterpolator = function () {
        var data = d3.range(20).map(function (i) {
            return { x: i / 19, y: (Math.sin(i / 3) + 2) / 4 };
        });
        function interpolator(points) { return points.join("A 1 1 0 0 1 "); }
        var margin = { top: 20, right: 30, bottom: 30, left: 40 }, width = 700 - margin.left - margin.right, height = 500 - margin.top - margin.bottom;
        var x = d3.scale.linear()
            .domain([0, 1])
            .range([0, width]);
        var y = d3.scale.linear()
            .domain([0, 1])
            .range([height, 0]);
        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");
        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left");
        var line = d3.svg.line()
            .interpolate(interpolator) // custom interpolator
            .x(function (d) { return x(d.x); })
            .y(function (d) { return y(d.y); });
        var svg = d3.select("#custom-interpolator").append("svg")
            .datum(data)
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);
        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis);
        svg.append("path")
            .attr("class", "line")
            .attr("d", line);
        svg.selectAll(".dot")
            .data(data)
            .enter()
            .append("circle")
            .attr("class", "dot")
            .attr("cx", line.x())
            .attr("cy", line.y())
            .attr("r", 3.5);
    };
    return ChartsIntroComponent;
}());
ChartsIntroComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-charts-intro',
        template: __webpack_require__(199),
        styles: [__webpack_require__(179)]
    }),
    __metadata("design:paramtypes", [])
], ChartsIntroComponent);

//# sourceMappingURL=charts-intro.component.js.map

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3LayoutsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var D3LayoutsComponent = (function () {
    function D3LayoutsComponent() {
    }
    D3LayoutsComponent.prototype.ngOnInit = function () {
    };
    return D3LayoutsComponent;
}());
D3LayoutsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-d3-layouts',
        template: __webpack_require__(200),
        styles: [__webpack_require__(180)]
    }),
    __metadata("design:paramtypes", [])
], D3LayoutsComponent);

//# sourceMappingURL=d3-layouts.component.js.map

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExamplesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExamplesComponent = (function () {
    function ExamplesComponent() {
    }
    ExamplesComponent.prototype.ngOnInit = function () {
    };
    return ExamplesComponent;
}());
ExamplesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-examples',
        template: __webpack_require__(201),
        styles: [__webpack_require__(181)]
    }),
    __metadata("design:paramtypes", [])
], ExamplesComponent);

//# sourceMappingURL=examples.component.js.map

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(202),
        styles: [__webpack_require__(182)]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InteractivityComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InteractivityComponent = (function () {
    function InteractivityComponent() {
    }
    InteractivityComponent.prototype.ngOnInit = function () {
        d3.select('#svg-container').on('mouseover', function () {
            console.log(d3.event);
            console.log(d3.mouse(this));
            d3.select(this)
                .append('circle')
                .attr('cx', d3.mouse(this)[0])
                .attr('cy', d3.mouse(this)[1])
                .attr('r', 10)
                .attr('fill', '#f00');
        });
    };
    return InteractivityComponent;
}());
InteractivityComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-interactivity',
        template: __webpack_require__(203),
        styles: [__webpack_require__(183)]
    }),
    __metadata("design:paramtypes", [])
], InteractivityComponent);

//# sourceMappingURL=interactivity.component.js.map

/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntroComponent = (function () {
    function IntroComponent() {
    }
    IntroComponent.prototype.ngOnInit = function () {
    };
    return IntroComponent;
}());
IntroComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-intro',
        template: __webpack_require__(204),
        styles: [__webpack_require__(184)]
    }),
    __metadata("design:paramtypes", [])
], IntroComponent);

//# sourceMappingURL=intro.component.js.map

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LineChartComponent = (function () {
    function LineChartComponent() {
    }
    LineChartComponent.prototype.ngOnInit = function () {
        this.drawSimpleLineChart();
        this.drawLineChart();
        this.drawGridLines();
    };
    LineChartComponent.prototype.drawSimpleLineChart = function () {
        // Set the dimensions of the canvas / graph
        var margin = { top: 30, right: 20, bottom: 30, left: 50 }, width = 600 - margin.left - margin.right, height = 270 - margin.top - margin.bottom;
        // Parse the date / time
        var parseDate = d3.time.format("%d-%b-%y").parse;
        // Set the ranges
        var x = d3.time.scale().range([0, width]);
        var y = d3.scale.linear().range([height, 0]);
        // Define the axes
        var xAxis = d3.svg.axis().scale(x)
            .orient("bottom").ticks(5);
        var yAxis = d3.svg.axis().scale(y)
            .orient("left").ticks(5);
        // Define the line
        var valueline = d3.svg.line()
            .x(function (d) { return x(d.date); })
            .y(function (d) { return y(d.close); });
        // Adds the svg canvas
        var svg = d3.select("#simple-line-chart")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        // Get the data
        d3.csv("assets/data_simple_line.csv", function (error, data) {
            data.forEach(function (d) {
                d.date = parseDate(d.date);
                d.close = +d.close;
            });
            // Scale the range of the data
            x.domain(d3.extent(data, function (d) { return d.date; }));
            y.domain([0, d3.max(data, function (d) { return d.close; })]);
            // Add the valueline path.
            svg.append("path")
                .attr("class", "line")
                .attr("d", valueline(data));
            // Add the X Axis
            svg.append("g")
                .attr("class", "x axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis);
            // Add the Y Axis
            svg.append("g")
                .attr("class", "y axis")
                .call(yAxis);
        });
    };
    LineChartComponent.prototype.drawLineChart = function () {
        var svg = d3.select("#line-chart svg"), margin = { top: 20, right: 20, bottom: 30, left: 50 }, width = +svg.attr("width") - margin.left - margin.right, height = +svg.attr("height") - margin.top - margin.bottom, g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        var parseDate = d3.time.format("%d-%b-%y").parse;
        var x = d3.time.scale().range([0, width]);
        var y = d3.scale.linear().rangeRound([height, 0]);
        var line = d3.svg.line()
            .x(function (d) { return x(d.date); })
            .y(function (d) { return y(d.close); });
        d3.tsv("assets/data_line.tsv", function (d) {
            d.date = parseDate(d.date);
            d.close = +d.close;
            return d;
        }, function (error, data) {
            if (error)
                throw error;
            x.domain(d3.extent(data, function (d) { return d.date; }));
            y.domain(d3.extent(data, function (d) { return d.close; }));
            var xAxis = d3.svg.axis().scale(x);
            var yAxis = d3.svg.axis().scale(y).orient("left");
            g.append("g")
                .attr("transform", "translate(0," + height + ")")
                .attr("class", "x axis")
                .call(xAxis)
                .select(".domain");
            // .remove();
            g.append("g")
                .attr("class", "y axis")
                .call(yAxis)
                .append("text")
                .attr("fill", "#000")
                .attr("transform", "rotate(-90)")
                .attr("y", 6)
                .attr("dy", "0.71em")
                .attr("text-anchor", "end")
                .text("Price ($)");
            g.append("path")
                .datum(data)
                .attr("fill", "none")
                .attr("stroke", "steelblue")
                .attr("stroke-linejoin", "round")
                .attr("stroke-linecap", "round")
                .attr("stroke-width", 1.5)
                .attr("d", line);
        });
    };
    LineChartComponent.prototype.drawGridLines = function () {
        // define dimensions of graph
        var m = [80, 80, 80, 80]; // margins
        var w = 700 - m[1] - m[3]; // width
        var h = 500 - m[0] - m[2]; // height
        var data = [3, 6, 2, 7, 5, 2, 0, 3, 8, 9, 2, 5, 9, 3, 6, 3, 6, 2, 7, 5, 2, 1, 3, 8, 9, 2, 5, 9, 2, 7];
        var x = d3.scale.linear().domain([0, data.length]).range([0, w]);
        var y = d3.scale.linear().domain([0, d3.max(data)]).range([h, 0]);
        var line = d3.svg.line()
            .x(function (d, i) {
            return x(i);
        })
            .y(function (d) {
            return y(d);
        });
        var graph = d3.select("#graph").append("svg:svg")
            .attr("width", w + m[1] + m[3])
            .attr("height", h + m[0] + m[2])
            .append("svg:g")
            .attr("transform", "translate(" + m[3] + "," + m[0] + ")");
        var xAxis = d3.svg.axis().scale(x).tickSize(-h).tickSubdivide(true);
        // Add the x-axis.
        graph.append("svg:g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + h + ")")
            .call(xAxis);
        var yAxisLeft = d3.svg.axis().scale(y).tickSize(-w).tickSubdivide(true).orient("left");
        // Add the y-axis to the left
        graph.append("svg:g")
            .attr("class", "y axis")
            .attr("transform", "translate(0,0)")
            .call(yAxisLeft);
        // do this AFTER the axes above so that the line is above the tick-lines
        graph.append("svg:path").attr("d", line(data));
    };
    return LineChartComponent;
}());
LineChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-line-chart',
        template: __webpack_require__(205),
        styles: [__webpack_require__(185)]
    }),
    __metadata("design:paramtypes", [])
], LineChartComponent);

//# sourceMappingURL=line-chart.component.js.map

/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadExtDataComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadExtDataComponent = (function () {
    function LoadExtDataComponent() {
    }
    LoadExtDataComponent.prototype.ngOnInit = function () {
    };
    LoadExtDataComponent.prototype.loadCSV = function () {
        d3.csv('assets/data.csv', this.onDataReady);
    };
    LoadExtDataComponent.prototype.onDataReady = function (animal_data) {
        console.log(animal_data);
        d3.select('p.ext').selectAll('p')
            .data(animal_data)
            .enter()
            .append('p')
            .text(function (d) {
            return 'A ' + d['animal'] + ' can live for up to ' + d['age'] + ' years!';
        });
    };
    return LoadExtDataComponent;
}());
LoadExtDataComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-load-ext-data',
        template: __webpack_require__(206),
        styles: [__webpack_require__(186)]
    }),
    __metadata("design:paramtypes", [])
], LoadExtDataComponent);

//# sourceMappingURL=load-ext-data.component.js.map

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanZoomComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PanZoomComponent = (function () {
    function PanZoomComponent() {
    }
    PanZoomComponent.prototype.ngOnInit = function () {
    };
    PanZoomComponent.prototype.dispatchDemo = function () {
        // Coerce population counts to numbers and compute total per state.
        function type(d) {
            d.total = d3.sum(groups, function (k) { return d[k] = +d[k]; });
            return d;
        }
        var dispatch = d3.dispatch("load", "statechange");
        var groups = [
            "Under 5 Years",
            "5 to 13 Years",
            "14 to 17 Years",
            "18 to 24 Years",
            "25 to 44 Years",
            "45 to 64 Years",
            "65 Years and Over"
        ];
        d3.csv("assets/data_dispatch.csv", type, function (error, states) {
            if (error)
                throw error;
            var stateById = d3.map();
            states.forEach(function (d) { stateById.set(d.id, d); });
            dispatch.load(stateById);
            dispatch.statechange(stateById.get("CA"));
        });
        // A drop-down menu for selecting a state; uses the "menu" namespace.
        dispatch.on("load.menu", function (stateById) {
            var select = d3.select("#d3-dispatch-demo")
                .append("div")
                .append("select")
                .on("change", function () { dispatch.statechange(stateById.get(this.value)); });
            select.selectAll("option")
                .data(stateById.values())
                .enter().append("option")
                .attr("value", function (d) { return d.id; })
                .text(function (d) { return d.id; });
            dispatch.on("statechange.menu", function (state) {
                select.property("value", state.id);
            });
        });
        // A bar chart to show total population; uses the "bar" namespace.
        dispatch.on("load.bar", function (stateById) {
            var margin = { top: 20, right: 20, bottom: 30, left: 40 }, width = 80 - margin.left - margin.right, height = 460 - margin.top - margin.bottom;
            var y = d3.scale.linear()
                .domain([0, d3.max(stateById.values(), function (d) { return d.total; })])
                .rangeRound([height, 0])
                .nice();
            var yAxis = d3.svg.axis().orient("left").scale(y)
                .tickFormat(d3.format(".2s"));
            var svg = d3.select("#d3-dispatch-demo").append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
            svg.append("g")
                .attr("class", "y axis")
                .call(yAxis);
            var rect = svg.append("rect")
                .attr("x", 4)
                .attr("width", width - 4)
                .attr("y", height)
                .attr("height", 0)
                .style("fill", "#aaa");
            dispatch.on("statechange.bar", function (d) {
                rect.transition()
                    .attr("y", y(d.total))
                    .attr("height", y(0) - y(d.total));
            });
        });
        // A pie chart to show population by age group; uses the "pie" namespace.
        dispatch.on("load.pie", function (stateById) {
            var width = 620, height = 460, radius = Math.min(width, height) / 2;
            var color = d3.scale.ordinal()
                .domain(groups)
                .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
            var arc = d3.svg.arc()
                .outerRadius(radius - 10)
                .innerRadius(radius - 70);
            var pie = d3.layout.pie()
                .sort(null);
            var svg = d3.select("#d3-dispatch-demo").append("svg")
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
            var path = svg.selectAll("path")
                .data(groups)
                .enter().append("path")
                .style("fill", color)
                .each(function () { this._current = { startAngle: 0, endAngle: 0 }; });
            dispatch.on("statechange.pie", function (d) {
                path.data(pie.value(function (g) { return d[g]; })(groups)).transition()
                    .attrTween("d", function (d) {
                    var interpolate = d3.interpolate(this._current, d);
                    this._current = interpolate(0);
                    return function (t) {
                        return arc(interpolate(t));
                    };
                });
            });
        });
    };
    PanZoomComponent.prototype.basicDragExample = function () {
        var svg = d3.select("svg#simple-drag"), width = +svg.attr("width"), height = +svg.attr("height"), radius = 32;
        var circles = d3.range(20).map(function () {
            return {
                x: Math.round(Math.random() * (width - radius * 2) + radius),
                y: Math.round(Math.random() * (height - radius * 2) + radius)
            };
        });
        var color = d3.scale.category20();
        var drag = d3.behavior.drag()
            .origin(null)
            .on("dragstart", dragstarted)
            .on("drag", dragged)
            .on("dragend", dragended);
        svg.selectAll("circle")
            .data(circles)
            .enter().append("circle")
            .attr("cx", function (d) { return d.x; })
            .attr("cy", function (d) { return d.y; })
            .attr("r", radius)
            .style("fill", function (d, i) { return color(i); })
            .call(drag);
        function dragstarted(d) {
            d3.select(this).classed("active", true);
        }
        function dragged(d) {
            d3.select(this).attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);
        }
        function dragended(d) {
            d3.select(this).classed("active", false);
        }
    };
    PanZoomComponent.prototype.dragMultiples = function () {
        var width = 240, height = 125, radius = 20;
        var drag = d3.behavior.drag()
            .origin(function (d) { return d; })
            .on("drag", dragmove);
        var svg = d3.select("#drag-multiples").selectAll("svg")
            .data(d3.range(16).map(function () { return { x: width / 2, y: height / 2 }; }))
            .enter().append("svg")
            .attr("width", width)
            .attr("height", height);
        svg.append("circle")
            .attr("r", radius)
            .attr("cx", function (d) { return d.x; })
            .attr("cy", function (d) { return d.y; })
            .call(drag);
        function dragmove(d) {
            d3.select(this)
                .attr("cx", d.x = Math.max(radius, Math.min(width - radius, d3.event.x)))
                .attr("cy", d.y = Math.max(radius, Math.min(height - radius, d3.event.y)));
        }
    };
    PanZoomComponent.prototype.zoomExample = function () {
        var margin = { top: 20, right: 20, bottom: 30, left: 40 }, width = 700 - margin.left - margin.right, height = 500 - margin.top - margin.bottom;
        var x = d3.scale.linear()
            .domain([-width / 2, width / 2])
            .range([0, width]);
        var y = d3.scale.linear()
            .domain([-height / 2, height / 2])
            .range([height, 0]);
        var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom")
            .tickSize(-height);
        var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left")
            .ticks(5)
            .tickSize(-width);
        var zoom = d3.behavior.zoom()
            .x(x)
            .y(y)
            .scaleExtent([1, 32])
            .on("zoom", zoomed);
        var svg = d3.select("#zoom-section").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
            .call(zoom);
        svg.append("rect")
            .attr("width", width)
            .attr("height", height);
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);
        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis);
        function zoomed() {
            svg.select(".x.axis").call(xAxis);
            svg.select(".y.axis").call(yAxis);
        }
    };
    return PanZoomComponent;
}());
PanZoomComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-pan-zoom',
        template: __webpack_require__(207),
        styles: [__webpack_require__(187)]
    }),
    __metadata("design:paramtypes", [])
], PanZoomComponent);

//# sourceMappingURL=pan-zoom.component.js.map

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PieChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PieChartComponent = (function () {
    function PieChartComponent() {
    }
    PieChartComponent.prototype.ngOnInit = function () {
        this.pieChartWithArc();
        this.drawPieChart();
        this.drawDonutChart();
    };
    PieChartComponent.prototype.pieChartWithArc = function () {
        var svg = d3.select("#pie-chart1");
        var width = svg.attr("width");
        var height = svg.attr("height");
        var arc = d3.svg.arc()
            .innerRadius(Math.min(width / 6, height / 6))
            .outerRadius(Math.min(width / 3, height / 3))
            .startAngle(0);
        var data = [10, 20, 50, 40, 15, 7.5];
        var scale = d3.scale.linear()
            .domain(d3.extent(data))
            .range([0, Math.PI]);
        var colorScale = d3.scale.linear()
            .domain(d3.extent(data))
            .range(['#f00', '#0f0']);
        svg
            .append('g')
            .attr('transform', "translate(" + width / 2 + "," + height / 2 + ") rotate(-90)")
            .attr('class', 'pie')
            .append('path')
            .datum({ endAngle: Math.PI })
            .attr('d', arc);
        svg
            .append('g')
            .attr('transform', "translate(" + width / 2 + "," + height / 2 + ") rotate(-90)")
            .selectAll('path')
            .data(data)
            .enter()
            .append('path')
            .attr('d', function (d) {
            return arc({ endAngle: Math.PI * scale(d) });
        })
            .style('fill', function (d) {
            return colorScale(d);
        });
    };
    PieChartComponent.prototype.drawPieChart = function () {
        var svg = d3.select("#pie-chart2"), width = +svg.attr("width"), height = +svg.attr("height"), radius = Math.min(width, height) / 2, g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
        var color = d3.scale.category10();
        var pie = d3.layout.pie()
            .sort(null)
            .value(function (d) { return d.population; });
        var path = d3.svg.arc()
            .outerRadius(radius - 10)
            .innerRadius(0);
        var label = d3.svg.arc()
            .outerRadius(radius - 40)
            .innerRadius(radius - 40);
        d3.csv("assets/data_pie.csv", function (d) {
            d.population = +d.population;
            return d;
        }, function (error, data) {
            if (error)
                throw error;
            // Map it across with custom colors with this data set if
            var ageMap = data.map(function (d) { return d.age; });
            var arc = g.selectAll(".arc")
                .data(pie(data))
                .enter().append("g")
                .attr("class", "arc");
            arc.append("path")
                .attr("d", path)
                .attr("fill", function (d, i) { return color(i); });
            arc.append("text")
                .attr("transform", function (d) { return "translate(" + label.centroid(d) + ")"; })
                .attr("dy", "0.35em")
                .text(function (d) { return d.data.age; });
        });
    };
    PieChartComponent.prototype.drawDonutChart = function () {
        var svg = d3.select("#donut-chart"), width = +svg.attr("width"), height = +svg.attr("height"), radius = Math.min(width, height) / 2, g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
        var color = d3.scale.category10();
        var pie = d3.layout.pie()
            .sort(null)
            .value(function (d) { return d.population; });
        var path = d3.svg.arc()
            .outerRadius(radius - 10)
            .innerRadius(radius - 70);
        var label = d3.svg.arc()
            .outerRadius(radius - 40)
            .innerRadius(radius - 40);
        d3.csv("assets/data_pie.csv", function (d) {
            d.population = +d.population;
            return d;
        }, function (error, data) {
            if (error)
                throw error;
            // Map it across with custom colors with this data set if
            var ageMap = data.map(function (d) { return d.age; });
            var arc = g.selectAll(".arc")
                .data(pie(data))
                .enter().append("g")
                .attr("class", "arc");
            arc.append("path")
                .attr("d", path)
                .attr("fill", function (d, i) { return color(i); });
            arc.append("text")
                .attr("transform", function (d) { return "translate(" + label.centroid(d) + ")"; })
                .attr("dy", "0.35em")
                .text(function (d) { return d.data.age; });
        });
    };
    PieChartComponent.prototype.d3PiePlugin = function () {
        var pie = new d3pie("pieChart", {
            "header": {
                "title": {
                    "text": "Lots of Programming Languages",
                    "fontSize": 24,
                    "font": "open sans"
                },
                "subtitle": {
                    "text": "A full pie chart to show off label collision detection and resolution.",
                    "color": "#999999",
                    "fontSize": 12,
                    "font": "open sans"
                },
                "titleSubtitlePadding": 9
            },
            "footer": {
                "color": "#999999",
                "fontSize": 10,
                "font": "open sans",
                "location": "bottom-left"
            },
            "size": {
                "canvasWidth": 590,
                "pieOuterRadius": "90%"
            },
            "data": {
                "sortOrder": "value-desc",
                "content": [
                    {
                        "label": "JavaScript",
                        "value": 264131,
                        "color": "#2484c1"
                    },
                    {
                        "label": "Ruby",
                        "value": 218812,
                        "color": "#0c6197"
                    },
                    {
                        "label": "Java",
                        "value": 157618,
                        "color": "#4daa4b"
                    },
                    {
                        "label": "PHP",
                        "value": 114384,
                        "color": "#90c469"
                    },
                    {
                        "label": "Python",
                        "value": 95002,
                        "color": "#daca61"
                    },
                    {
                        "label": "C+",
                        "value": 78327,
                        "color": "#e4a14b"
                    },
                    {
                        "label": "C",
                        "value": 67706,
                        "color": "#e98125"
                    },
                    {
                        "label": "Objective-C",
                        "value": 36344,
                        "color": "#cb2121"
                    },
                    {
                        "label": "Shell",
                        "value": 28561,
                        "color": "#830909"
                    },
                    {
                        "label": "Cobol",
                        "value": 24131,
                        "color": "#923e99"
                    },
                    {
                        "label": "C#",
                        "value": 100,
                        "color": "#ae83d5"
                    },
                    {
                        "label": "Coldfusion",
                        "value": 68,
                        "color": "#bf273e"
                    },
                    {
                        "label": "Fortran",
                        "value": 218812,
                        "color": "#ce2aeb"
                    },
                    {
                        "label": "Coffeescript",
                        "value": 157618,
                        "color": "#bca44a"
                    },
                    {
                        "label": "Node",
                        "value": 114384,
                        "color": "#618d1b"
                    },
                    {
                        "label": "Basic",
                        "value": 95002,
                        "color": "#1ee67b"
                    },
                    {
                        "label": "Cola",
                        "value": 36344,
                        "color": "#b0ec44"
                    },
                    {
                        "label": "Perl",
                        "value": 32170,
                        "color": "#a4a0c9"
                    },
                    {
                        "label": "Dart",
                        "value": 28561,
                        "color": "#322849"
                    },
                    {
                        "label": "Go",
                        "value": 264131,
                        "color": "#86f71a"
                    },
                    {
                        "label": "Groovy",
                        "value": 218812,
                        "color": "#d1c87f"
                    },
                    {
                        "label": "Processing",
                        "value": 157618,
                        "color": "#7d9058"
                    },
                    {
                        "label": "Smalltalk",
                        "value": 114384,
                        "color": "#44b9b0"
                    },
                    {
                        "label": "Scala",
                        "value": 95002,
                        "color": "#7c37c0"
                    },
                    {
                        "label": "Visual Basic",
                        "value": 78327,
                        "color": "#cc9fb1"
                    },
                    {
                        "label": "Scheme",
                        "value": 67706,
                        "color": "#e65414"
                    },
                    {
                        "label": "Rust",
                        "value": 36344,
                        "color": "#8b6834"
                    },
                    {
                        "label": "FoxPro",
                        "value": 32170,
                        "color": "#248838"
                    }
                ]
            },
            "labels": {
                "outer": {
                    "pieDistance": 32
                },
                "inner": {
                    "hideWhenLessThanPercentage": 3
                },
                "mainLabel": {
                    "fontSize": 11
                },
                "percentage": {
                    "color": "#ffffff",
                    "decimalPlaces": 0
                },
                "value": {
                    "color": "#adadad",
                    "fontSize": 11
                },
                "lines": {
                    "enabled": true
                },
                "truncation": {
                    "enabled": true
                }
            },
            "effects": {
                "pullOutSegmentOnClick": {
                    "effect": "linear",
                    "speed": 400,
                    "size": 8
                }
            },
            "misc": {
                "gradient": {
                    "enabled": true,
                    "percentage": 100
                }
            }
        });
    };
    return PieChartComponent;
}());
PieChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-pie-chart',
        template: __webpack_require__(208),
        styles: [__webpack_require__(188)]
    }),
    __metadata("design:paramtypes", [])
], PieChartComponent);

//# sourceMappingURL=pie-chart.component.js.map

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrinciplesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrinciplesComponent = (function () {
    function PrinciplesComponent() {
    }
    PrinciplesComponent.prototype.ngOnInit = function () {
    };
    return PrinciplesComponent;
}());
PrinciplesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-principles',
        template: __webpack_require__(209),
        styles: [__webpack_require__(189)]
    }),
    __metadata("design:paramtypes", [])
], PrinciplesComponent);

//# sourceMappingURL=principles.component.js.map

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScalesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScalesComponent = (function () {
    function ScalesComponent() {
    }
    ScalesComponent.prototype.ngOnInit = function () {
    };
    ScalesComponent.prototype.simpleExample = function (minDomain, maxDomain) {
        var data = [0, 2, 3, 5, 7.5, 9, 10];
        var myScale = d3.scale.linear()
            .domain([minDomain, maxDomain])
            .range([0, 600]);
        d3.select('svg .inner')
            .selectAll('circle')
            .data(data)
            .attr('r', 3)
            .attr('cx', function (d) {
            return myScale(d);
        })
            .enter()
            .append('circle')
            .attr('r', 3)
            .attr('cx', function (d) {
            return myScale(d);
        });
        d3.select('svg .inner')
            .selectAll('text')
            .data(data)
            .attr('x', function (d) {
            return myScale(d);
        })
            .attr('y', -8)
            .text(function (d) {
            return d;
        })
            .enter()
            .append('text')
            .attr('x', function (d) {
            return myScale(d);
        })
            .attr('y', -8)
            .text(function (d) {
            return d;
        });
    };
    ScalesComponent.prototype.linearScaleColor = function () {
        var data = [0, 2, 3, 5, 7.5, 9, 10];
        var linearScale = d3.scale.linear()
            .domain([0, 10])
            .range(['yellow', 'red']);
        d3.select('svg.ex-2')
            .selectAll('rect')
            .data(data)
            .attr('x', function (d) {
            return d;
        })
            .attr('y', 0)
            .attr('width', function (d) {
            return d * 25;
        })
            .attr('height', 100)
            .attr('fill', function (d) {
            return linearScale(d);
        })
            .enter()
            .append('rect')
            .attr('x', function (d) {
            return d;
        })
            .attr('y', 0)
            .attr('width', function (d) {
            return d * 20;
        })
            .attr('height', 100)
            .attr('fill', function (d) {
            return linearScale(d);
        });
    };
    ScalesComponent.prototype.scaleSqrt = function () {
        var data = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
        var sqrtScale = d3.scale.sqrt()
            .domain([0, 100])
            .range([0, 30]);
        d3.select('svg.ex-3')
            .selectAll('circle')
            .data(data)
            .attr('cx', function (d) {
            return d * 6;
        })
            .attr('cy', 50)
            .attr('r', function (d) {
            return sqrtScale(d);
        })
            .attr('fill', 'gray')
            .enter()
            .append('circle')
            .attr('cx', function (d) {
            return d * 6;
        })
            .attr('cy', 50)
            .attr('r', function (d) {
            return sqrtScale(d);
        })
            .attr('fill', 'blue');
    };
    ScalesComponent.prototype.scaleLog = function () {
        var data = [10, 100, 1000, 10000, 100000];
        var logScale = d3.scale.log()
            .domain([10, 100000])
            .range([0, 600]);
        d3.select('svg.ex-4')
            .selectAll('circle')
            .data(data)
            .enter()
            .append('circle')
            .attr('r', 2)
            .attr('cy', 55)
            .attr('cx', function (d) {
            return logScale(d);
        });
        d3.select('svg.ex-4')
            .selectAll('text')
            .data(data)
            .enter()
            .append('text')
            .attr('x', function (d) {
            return logScale(d);
        })
            .attr('y', 50)
            .text(function (d) {
            return d;
        });
    };
    ScalesComponent.prototype.scaleTime = function () {
        var data = [new Date(2016, 0, 1), new Date(2016, 5, 10), new Date(2017, 2, 5), new Date(2017, 9, 15)];
        var timeScale = d3.scale.log()
            .domain([new Date(2016, 0, 1), new Date(2018, 11, 1)])
            .range([0, 700]);
        d3.select('svg.ex-5 .inner')
            .selectAll('circle')
            .data(data)
            .enter()
            .append('circle')
            .attr('r', 2)
            .attr('cy', 8)
            .attr('cx', function (d) {
            return timeScale(d);
        });
        d3.select('svg.ex-5 .inner')
            .selectAll('text')
            .data(data)
            .enter()
            .append('text')
            .attr('x', function (d) {
            return timeScale(d);
        })
            .text(function (d) {
            return d.toDateString();
        });
    };
    ScalesComponent.prototype.withoutNice = function () {
        var data = [0.243, 0.584, 0.987, 0.153, 0.433];
        var extent = d3.extent(data);
        var linearScale = d3.scale.linear()
            .domain(extent)
            .range([0, 600]);
        var axis = d3.svg.axis().scale(linearScale);
        d3.select('.withoutnice')
            .call(axis);
    };
    ScalesComponent.prototype.withNice = function () {
        var data = [0.243, 0.584, 0.987, 0.153, 0.433];
        var extent = d3.extent(data);
        var linearScale = d3.scale.linear()
            .domain(extent)
            .range([0, 600])
            .nice();
        var axis = d3.svg.axis().scale(linearScale);
        d3.select('.withnice')
            .call(axis);
    };
    ScalesComponent.prototype.multiSegment = function () {
        var data = [-10, -8, -6, -4, -2, 0, 2, 4, 6, 8, 10];
        var linearScale = d3.scale.linear()
            .domain([-10, 0, 10])
            .range(['red', '#ddd', 'blue']);
        var xScale = d3.scale.linear()
            .domain([-10, 10])
            .range([0, 700]);
        d3.select('.ex-8 .multiSegment')
            .selectAll('circle')
            .data(data)
            .enter()
            .append('circle')
            .attr('r', 10)
            .attr('cx', function (d) {
            return xScale(d);
        })
            .style('fill', function (d) {
            return linearScale(d);
        });
    };
    ScalesComponent.prototype.invert = function () {
        var linearScale = d3.scale.linear()
            .domain([-50, 50])
            .range([0, 600])
            .nice();
        // Construct axis
        var axis = d3.svg.axis().scale(linearScale);
        d3.select('.ex-9 .inner')
            .call(axis);
        // Update click area size
        d3.select('.ex-9 .click-area')
            .on('mouseover', function () {
            var pos = d3.mouse(this);
            var xPos = pos[0];
            var value = linearScale.invert(xPos);
            d3.select('.info')
                .text('You hovered on ' + value.toFixed(2));
        });
    };
    ScalesComponent.prototype.quantizeScale = function () {
        var myData = d3.range(0, 100, 1);
        var linearScale = d3.scale.linear()
            .domain([0, 100])
            .range([0, 600]);
        var quantizeScale = d3.scale.quantize()
            .domain(myData)
            .range(['lightblue', 'orange', 'lightgreen', 'pink']);
        d3.select('.ex-10 g')
            .selectAll('rect')
            .data(myData)
            .enter()
            .append('rect')
            .attr('x', function (d) {
            return linearScale(d);
        })
            .attr('width', 5)
            .attr('height', 30)
            .style('fill', function (d) {
            return quantizeScale(d);
        });
    };
    ScalesComponent.prototype.quantileScale = function () {
        var myData = [0, 5, 7, 10, 20, 30, 35, 40, 60, 62, 65, 70, 80, 90, 100];
        var linearScale = d3.scale.linear()
            .domain([0, 100])
            .range([0, 600]);
        var quantileScale = d3.scale.quantile()
            .domain(myData)
            .range(['lightblue', 'orange', 'lightgreen']);
        d3.select('.ex-11 g')
            .selectAll('rect')
            .data(myData)
            .enter()
            .append('rect')
            .attr('x', function (d) {
            return linearScale(d);
        })
            .attr('width', 5)
            .attr('height', 30)
            .style('fill', function (d) {
            return quantileScale(d);
        });
    };
    ScalesComponent.prototype.thresholdScale = function () {
        var myData = d3.range(-20, 120, 2);
        var linearScale = d3.scale.linear()
            .domain([-20, 120])
            .range([0, 600]);
        var thresholdScale = d3.scale.threshold()
            .domain([0, 50, 100])
            .range(['#000', 'lightblue', 'orange', '#900']);
        d3.select('.ex-12 g')
            .selectAll('rect')
            .data(myData)
            .enter()
            .append('rect')
            .attr('x', function (d) {
            return linearScale(d);
        })
            .attr('width', 5)
            .attr('height', 30)
            .style('fill', function (d) {
            return thresholdScale(d);
        });
    };
    ScalesComponent.prototype.ordinalScale = function () {
        var myData = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var linearScale = d3.scale.linear()
            .domain([0, 6])
            .range([0, 600]);
        var ordinalScale = d3.scale.ordinal()
            .domain(myData)
            .range(['#f00', '#0f0', '#00f']);
        d3.select('.ex-13 g')
            .selectAll('text')
            .data(myData)
            .enter()
            .append('text')
            .attr('x', function (d, i) {
            return linearScale(i);
        })
            .text(function (d) {
            return d;
        })
            .style('fill', function (d) {
            return ordinalScale(d);
        });
    };
    ScalesComponent.prototype.categoricalScale10 = function () {
        var myData = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var linearScale = d3.scale.linear()
            .domain([0, 6])
            .range([0, 600]);
        var ordinalScale = d3.scale.category10()
            .domain(myData);
        d3.select('.ex-14 g')
            .selectAll('text')
            .data(myData)
            .enter()
            .append('text')
            .attr('x', function (d, i) {
            return linearScale(i);
        })
            .text(function (d) {
            return d;
        })
            .style('fill', function (d) {
            return ordinalScale(d);
        });
    };
    ScalesComponent.prototype.categoricalScale20 = function () {
        var myData = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var linearScale = d3.scale.linear()
            .domain([0, 11])
            .range([0, 600]);
        var ordinalScale = d3.scale.category20()
            .domain(myData);
        d3.select('.ex-15 g')
            .selectAll('text')
            .data(myData)
            .enter()
            .append('text')
            .attr('x', function (d, i) {
            return linearScale(i);
        })
            .text(function (d) {
            return d;
        })
            .style('fill', function (d) {
            return ordinalScale(d);
        });
    };
    ScalesComponent.prototype.categoricalScale20b = function () {
        var myData = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var linearScale = d3.scale.linear()
            .domain([0, 11])
            .range([0, 600]);
        var ordinalScale = d3.scale.category20b()
            .domain(myData);
        d3.select('.ex-16 g')
            .selectAll('text')
            .data(myData)
            .enter()
            .append('text')
            .attr('x', function (d, i) {
            return linearScale(i);
        })
            .text(function (d) {
            return d;
        })
            .style('fill', function (d) {
            return ordinalScale(d);
        });
    };
    ScalesComponent.prototype.categoricalScale20c = function () {
        var myData = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var linearScale = d3.scale.linear()
            .domain([0, 11])
            .range([0, 600]);
        var ordinalScale = d3.scale.category20c()
            .domain(myData);
        d3.select('.ex-17 g')
            .selectAll('text')
            .data(myData)
            .enter()
            .append('text')
            .attr('x', function (d, i) {
            return linearScale(i);
        })
            .text(function (d) {
            return d;
        })
            .style('fill', function (d) {
            return ordinalScale(d);
        });
    };
    ScalesComponent.prototype.bandScale = function () {
        var myData = [
            { day: 'Mon', value: 10 },
            { day: 'Tue', value: 40 },
            { day: 'Wed', value: 30 },
            { day: 'Thu', value: 60 },
            { day: 'Fri', value: 30 }
        ];
        var bandScale = d3.scale.ordinal()
            .domain(['Mon', 'Tue', 'Wed', 'Thu', 'Fri'])
            .rangeBands([0, 600], 0.05, 1);
        d3.select('.ex-18 g')
            .selectAll('rect')
            .data(myData)
            .enter()
            .append('rect')
            .attr('x', function (d) {
            return bandScale(d.day);
        })
            .style('fill', 'orange')
            .attr('width', bandScale.rangeBand())
            .attr('height', function (d) {
            return d.value;
        });
        d3.select('.ex-18 g')
            .selectAll('text')
            .data(myData)
            .enter()
            .append('text')
            .attr('y', function (d) {
            return d.value + 20;
        })
            .attr('x', function (d) {
            return bandScale(d.day) + 20;
        })
            .text(function (d) {
            return d.value;
        });
    };
    return ScalesComponent;
}());
ScalesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-scales',
        template: __webpack_require__(210),
        styles: [__webpack_require__(190)]
    }),
    __metadata("design:paramtypes", [])
], ScalesComponent);

//# sourceMappingURL=scales.component.js.map

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SelectionsComponent = (function () {
    function SelectionsComponent() {
    }
    SelectionsComponent.prototype.ngOnInit = function () {
    };
    SelectionsComponent.prototype.showResults = function () {
        this.pSelector = d3.select("p").text();
        this.arraySelector = d3.selectAll("p b");
        this.classSelector = d3.selectAll('.methods p');
        this.idSelector = d3.select("#concept");
    };
    return SelectionsComponent;
}());
SelectionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-selections',
        template: __webpack_require__(211),
        styles: [__webpack_require__(191)]
    }),
    __metadata("design:paramtypes", [])
], SelectionsComponent);

//# sourceMappingURL=selections.component.js.map

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SvgComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SvgComponent = (function () {
    function SvgComponent() {
    }
    SvgComponent.prototype.ngOnInit = function () {
    };
    return SvgComponent;
}());
SvgComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-svg',
        template: __webpack_require__(212),
        styles: [__webpack_require__(192)]
    }),
    __metadata("design:paramtypes", [])
], SvgComponent);

//# sourceMappingURL=svg.component.js.map

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "text {\r\n\tfill: 'black';\r\n    font-family: 'Arial';\r\n    font-weight: bold;\r\n    font-size: 28px;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "@-webkit-keyframes spinnerRotate\r\n{\r\n    from{-webkit-transform:rotate(0deg);}\r\n    to{-webkit-transform:rotate(360deg);}\r\n}\r\n\r\n@keyframes spinnerRotate\r\n{\r\n    from{-webkit-transform:rotate(0deg);}\r\n    to{-webkit-transform:rotate(360deg);}\r\n}\r\n\r\n@-webkit-keyframes moveLinear\r\n{\r\n    from{float: left;}\r\n    to{float: right;}\r\n}\r\n\r\n@keyframes moveLinear\r\n{\r\n    from{float: left;}\r\n    to{float: right;}\r\n}\r\n\r\n#main-logo{\r\n    -webkit-animation-name: moveLinear;\r\n            animation-name: moveLinear;\r\n    -webkit-animation-duration: 5s;\r\n            animation-duration: 5s;\r\n    -webkit-animation-iteration-count: infinite;\r\n            animation-iteration-count: infinite;\r\n    -webkit-animation-timing-function: linear;\r\n            animation-timing-function: linear;\r\n}\r\n\r\n#main-logo img{\r\n    width: 150px;\r\n}\r\n\r\n.main-content{\r\n    border-left: 1px solid #000;\r\n    /* height: stretch; */\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.navigation{    \r\n    position: fixed;\r\n    right: 0;\r\n    margin-right: 15px;\r\n    overflow-y: auto;\r\n    background: #f1eded;\r\n    padding: 15px 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "svg rect {\r\n    fill: orange;\r\n}\r\n\r\nsvg text {\r\n    fill:white;\r\n    font: 10px sans-serif;\r\n    text-anchor: end;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, ":host ::ng-deep svg{\r\n    border: none;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 193 */,
/* 194 */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  Transition is the process of changing from one state to another of an item. D3.js provides a transition() method to perform transition in the HTML page. \r\n</p>\r\n<p>\r\n  The transition() method is available for all selectors and it starts the transition process. This method supports most of the selection methods such as – attr(), style(), etc. But, It does not support the append() and the data() methods, which need to be called before the transition() method. Also, it provides methods specific to transition like duration(), ease(), etc.\r\n</p>\r\n<ul>\r\n  <li>transition.duration</li>\r\n  <li>transition.ease</li>\r\n  <li>transition.delay</li>\r\n</ul>\r\n<h3>Example for Delay</h3>\r\n<button class=\"btn btn-default\" (click)=\"simpleTransition()\">Simple Transition</button>\r\n<button class=\"btn btn-default\" (click)=\"transitionWithDuration()\">Transition with duration</button>\r\n<button class=\"btn btn-default\" (click)=\"simpleEaseTransition()\">Simple Ease Transition</button>\r\n<button class=\"btn btn-default\" (click)=\"transitionWithEase()\">Transition with ease</button>\r\n<button class=\"btn btn-default\" (click)=\"transitionWithDelay()\">Transition with Delay</button>\r\n<button class=\"btn btn-default btn-warning\" (click)=\"hideTransition = !hideTransition\">Toogle</button>\r\n<div [hidden]=\"hideTransition\">\r\n  <h2>Transition with Ease</h2>\r\n  <svg id=\"svg-container\" width=\"960\" height=\"500\"></svg>\r\n</div>\r\n\r\n<h2>Lifecycle of Transition</h2>\r\n<p>\r\nTransition has a four-phased lifecycle −\r\n</p>\r\n<ul>\r\n  <li>The transition is scheduled.</li>\r\n  <li>The transition starts.</li>\r\n  <li>The transition runs.</li>\r\n  <li>The transition ends.</li>\r\n</ul>\r\n\r\n<h4>The Transition Starts</h4>\r\n<p>\r\nA transition starts based on its delay, which was specified when the transition was scheduled. If no delay was specified, then the transition starts as soon as possible, which is typically after a few milliseconds.\r\n</p>\r\n<p>\r\nIf the transition has a delay, then the starting value should be set only when the transition starts. We can do this by listening to the start event −\r\n</p>\r\n<button class=\"btn btn-default\" (click)=\"identifyTransitionStart()\">Identify Transition Delay</button>\r\n<ul>\r\n  <li *ngFor=\"let item of methods\">{{item}}</li>\r\n</ul>"

/***/ }),
/* 195 */
/***/ (function(module, exports) {

module.exports = "<!-- <h4 class=\"pull-right\">\r\n  <a href=\"/d3js\">Go Home</a>\r\n</h4>\r\n<div class=\"clearfix\"></div> \r\n<div id=\"main-logo\"><img src=\"assets/logo.jpg\"/></div>\r\n<div class=\"clearfix\"></div>-->\r\n<h1 class=\"text-center\">D3.js Tutorial</h1>\r\n<div class=\"col-sm-offset-2 col-sm-7 main-content\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<div class=\"col-sm-offset-1 col-sm-2 navigation\">\r\n  <app-home></app-home>\r\n</div>"

/***/ }),
/* 196 */
/***/ (function(module, exports) {

module.exports = "<h2>Axis</h2>\r\n<p>The axis component is designed to work with D3’s quantitative, time and ordinal scales.</p>\r\n<h4>d3.svg.axis()</h4>\r\n<h4>axis(selection)</h4>\r\n<p>Apply the axis to a selection or transition. The selection must contain an svg or g element.</p>\r\n<pre>\r\n  <code>\r\n    d3.select(\".ex-1\").append(\"svg\")\r\n    .attr(\"class\", \"axis\")\r\n    .attr(\"width\", 600)\r\n    .attr(\"height\", 30)\r\n    .append(\"g\")\r\n    .attr(\"transform\", \"translate(0,30)\")\r\n    .call(axis);\r\n  </code>\r\n</pre>\r\n<button class=\"btn btn-default\" (click)=\"simpleAxis()\">Run</button>\r\n<button class=\"btn btn-default\" (click)=\"axisWithScale()\">Run with Scale</button>\r\n<button class=\"btn btn-default\" (click)=\"axisWithScale2()\">Run with Scale 2</button>\r\n<p>Orientation: <input type=\"text\" [(ngModel)]=\"orient\"/></p>\r\n<button class=\"btn btn-default\" (click)=\"axisWithOrient(orient)\">Run with Orientation</button>\r\n<div class=\"ex-1\"></div>\r\n<h4>axis.scale([scale])</h4>\r\n<p>If scale is specified, sets the scale and returns the axis. If scale is not specified, returns the current scale which defaults to a linear scale.</p>\r\n<h4>axis.orient([orientation])</h4>\r\n<p>\r\n  If orientation is specified, sets the orientation and returns the axis. If orientation is not specified, returns the current orientation which defaults to \"bottom\". The following orientations are supported:\r\n</p>\r\n<pre>\r\n  \"top\" - horizontal axis with ticks above the domain path\r\n  \"bottom\" - horizontal axis with ticks below the domain path\r\n  \"left\" - vertical axis with ticks to the left of the domain path\r\n  \"right\" - vertical axis with ticks to the right of the domain path  \r\n</pre>\r\n<p>\r\n  If the specified orientation is not one of the supported values, the axis reverts to the default orientation. Changing the orientation affects the position of the ticks and their labels in relation to the axis path, but does not change the position of the axis itself; to change the position of the axis with respect to the plot, specify a transform attribute on the containing g element.\r\n</p>\r\n<h4>axis.ticks([arguments…])</h4>\r\n<p>\r\n  If arguments are specified, stores the specified arguments for subsequent use in generating ticks and returns the axis. The arguments will later be passed to scale.ticks to generate tick values (unless tick values are specified explicitly via axis.tickValues). The arguments are also passed to the scale’s tickFormat method to generate the default tick format. If no arguments are specified, returns the current tick arguments, which default to [10].\r\n</p>\r\n<h4>axis.tickValues([values])</h4>\r\n<p>\r\n  If a values array is specified, the specified values are used for ticks, rather than using the scale's automatic tick generator. If values is null, clears any previously-set explicit tick values, reverting back to the scale's tick generator. If values is not specified, returns the currently-set tick values, which defaults to null. For example, to generate ticks at specific values:\r\n</p>\r\n<pre>\r\n  var xAxis = d3.svg.axis()\r\n    .scale(x)\r\n    .tickValues([1, 2, 3, 5, 8, 13, 21]);\r\n</pre>\r\n<p>\r\n  The explicit tick values take precedent over the tick arguments set by axis.ticks. However, any tick arguments will still be passed to the scale's tickFormat function if a tick format is not also set; thus, it may be valid to set both axis.ticks and axis.tickValues.\r\n</p>\r\n<button class=\"btn btn-default\" (click)=\"axisWithTick()\">Run with Ticks</button>\r\n<!-- <button class=\"btn btn-default\" (click)=\"axisWithTickFormat()\">Run with Tick Format</button> -->\r\n<button class=\"btn btn-default\" (click)=\"axisWithTickValues()\">Run with Tick Values</button>\r\n<div class=\"ex-2\"></div>\r\n<h4>axis.tickSize([inner, outer])</h4>\r\n<p>If inner, outer are specified, sets the inner and outer tick sizes to the specified value and returns the axis. If inner, outer are not specified, returns the current inner tick size, which defaults to 6.</p>\r\n<h4>axis.innerTickSize([size])</h4>\r\n<p>\r\nIf size is specified, sets the inner tick size to the specified value and returns the axis. If size is not specified, returns the current inner tick size, which defaults to 6. The inner tick size controls the length of the tick lines, offset from the native position of the axis.\r\n</p>\r\n<p>Inner: <input [(ngModel)]=\"inner\"/>\r\nOuter: <input [(ngModel)]=\"outer\"/></p>\r\n<button class=\"btn btn-default\" (click)=\"axisWithTickSize(inner,outer)\">Run with Tick Size</button>\r\n<button class=\"btn btn-default\" (click)=\"getInnerTickSize()\">Get Inner TickSize</button>\r\n<p>Inner Tick Size: <input [(ngModel)]=\"innerTickSize\"/>\r\n<button class=\"btn btn-default\" (click)=\"setInnerTickSize(innerTickSize)\">Set Inner TickSize</button>\r\n<div class=\"ex-3\"></div>\r\n<h4>axis.outerTickSize([size])</h4>\r\n<p>\r\n  If size is specified, sets the outer tick size to the specified value and returns the axis. If size is not specified, returns the current outer tick size, which defaults to 6. The outer tick size controls the length of the square ends of the domain path, offset from the native position of the axis. Thus, the “outer ticks” are not actually ticks but part of the domain path, and their position is determined by the associated scale's domain extent. Thus, outer ticks may overlap with the first or last inner tick. An outer tick size of 0 suppresses the square ends of the domain path, instead producing a straight line.\r\n</p>\r\n<button class=\"btn btn-default\" (click)=\"getOuterTickSize()\">Get Outer TickSize</button>\r\n<p>Outer Tick Size: <input [(ngModel)]=\"outerTickSize\"/>\r\n<button class=\"btn btn-default\" (click)=\"setOuterTickSize(outerTickSize)\">Set Outer TickSize</button>\r\n<div class=\"ex-4\"></div>\r\n<h4>axis.tickPadding</h4>\r\n<p>\r\n  If padding is specified, sets the padding to the specified value in pixels and returns the axis. If padding is not specified, returns the current padding which defaults to 3 pixels.\r\n</p>\r\n<button class=\"btn btn-default\" (click)=\"getTickPadding()\">Get TickPadding</button>\r\n<p>Tick Padding: <input [(ngModel)]=\"tickPadding\"/>\r\n<button class=\"btn btn-default\" (click)=\"setTickPadding(tickPadding)\">Set TickPadding</button>\r\n<div class=\"ex-5\"></div>\r\n<h4>axis.tickFormat([format])</h4>\r\n<p>\r\n  If format is specified, sets the format to the specified function and returns the axis. If format is not specified, returns the current format function, which defaults to null. A null format indicates that the scale's default formatter should be used, which is generated by calling scale.tickFormat. In this case, the arguments specified by ticks are likewise passed to scale.tickFormat.\r\n</p>\r\n<a target=\"_blank\" href=\"https://github.com/d3/d3-3.x-api-reference/blob/master/Formatting.md#d3_format\">d3.format</a>\r\n\r\n<button class=\"btn btn-default\" (click)=\"getTickFormat()\">Get TickFormat</button>\r\n<p>Tick Format: <input [(ngModel)]=\"tickFormat\"/>\r\n<button class=\"btn btn-default\" (click)=\"setTickFormat(tickFormat)\">Set TickFormat</button>\r\n<div class=\"ex-6\"></div>\r\n<strong>\r\n  Note: for log scales, the number of ticks cannot be customized; however, the number of tick labels can be customized via ticks. Likewise, the tick formatter for log scales is typically specified via ticks rather than tickFormat, so as to preserve the default label-hiding behavior.\r\n</strong>"

/***/ }),
/* 197 */
/***/ (function(module, exports) {

module.exports = "<h4>Bar Chart</h4>\r\n<svg width=\"700\" height=\"500\"></svg>\r\n\r\n<h4>Bar Chart 2</h4>\r\n<svg id=\"bar-chart2\" width=\"700\" height=\"500\"></svg>\r\n\r\n<h4>Bar Chart 3</h4>\r\n<div id=\"bar-chart-with-tooltip\"></div>"

/***/ }),
/* 198 */
/***/ (function(module, exports) {

module.exports = "<h2>What is a Data Join?</h2>\r\n<span>\r\n  Data join enables us to inject, modify and remove elements (HTML element as well as embedded SVG elements) based on the data set in the existing HTML document. By default, each data item in the data set corresponds to an element (graphical) in the document.<br/>\r\n  As the data set changes, the corresponding element can also be manipulated easily. Data join creates a close relationship between our data and graphical elements of the document. Data join makes manipulation of the elements based on the data set a very simple and easy process.\r\n</span>\r\n<ul id=\"list\">\r\n  <li></li>\r\n  <li></li>\r\n</ul>\r\n<div>\r\n  <button class=\"btn btn-default\" (click)=\"addData()\">Bind Data</button>\r\n  <button class=\"btn btn-default\" (click)=\"updateData()\">Update Data</button>\r\n  <button class=\"btn btn-default\" (click)=\"createNew()\">Create</button>\r\n  <button class=\"btn btn-default\" (click)=\"exit()\">Exit</button>\r\n</div>\r\n<h2>Data Join Methods</h2>\r\n<span>Data join provides the following four methods to work with data set −</span>\r\n<ul id=\"methods\">\r\n  <li>datum()</li>\r\n  <li>data()</li>\r\n  <li>enter()</li>\r\n  <li>exit()</li>\r\n</ul>\r\n<div class=\"well well-sm\">\r\n  <p></p>\r\n  <div id=\"fromDatum\"></div>\r\n</div>\r\n<div>\r\n  <button class=\"btn btn-default\" (click)=\"datum()\">Datum</button>\r\n  <button class=\"btn btn-default\" (click)=\"dataFnUsage()\">Data function Results</button>\r\n</div>\r\n<h2>Data Function</h2>\r\n<ul id=\"dumData\">\r\n  <li>datum()</li>\r\n  <li>data()</li>\r\n  <li>enter()</li>\r\n</ul>\r\n<code>\r\n  <p>{{tempD}}</p>\r\n  <p>{{tempI}}</p>\r\n  <p>{{tempThis}}</p>\r\n</code>\r\n<div>\r\n  <svg id=\"my-svg\"></svg>\r\n</div>\r\n\r\n<button class=\"btn btn-default\" (click)=\"dataStructure()\">Bind Data to circles</button>\r\n<button class=\"btn btn-default\" (click)=\"createCircles()\">Create circles</button>\r\n<button class=\"btn btn-default\" (click)=\"dataChanges()\">Change Data</button>\r\n<button class=\"btn btn-default\" (click)=\"createNewCircle()\">Create New circle</button>\r\n<button class=\"btn btn-default\" (click)=\"updateExisting()\">Update circles</button>\r\n<button class=\"btn btn-default\" (click)=\"removeCircles()\">Remove circles</button>\r\n<h2>Uniquely identifying datums</h2>\r\n<div>\r\n  <svg id=\"my-svg2\"></svg>\r\n  <svg id=\"my-svg3\"></svg>\r\n</div>\r\n<button class=\"btn btn-default\" (click)=\"createMySvg()\">Create SVG</button>\r\n<button class=\"btn btn-default\" (click)=\"UpdateDataWithIndex()\">Update SVG</button>\r\n<button class=\"btn btn-default\" (click)=\"createSvgWithID()\">Create SVG with ID</button>\r\n<button class=\"btn btn-default\" (click)=\"updateDataWithID()\">Update SVG</button>\r\n<button class=\"btn btn-default\" (click)=\"removeSpecificElement()\">Remove Circle</button>\r\n<div>\r\n  <p>ID: <input type=\"text\" [(ngModel)]=\"selectedID\" /></p>\r\n  <p>Property: <input type=\"text\" [(ngModel)]=\"property\" /></p>\r\n  <p>Value: <input type=\"text\" [(ngModel)]=\"value\" /></p>\r\n</div>\r\n<button class=\"btn btn-default\" (click)=\"updateSpecificElement()\">Update Circle</button>\r\n<button class=\"btn btn-default\" (click)=\"updateSpecific(selectedID, property, value)\">Update Specific Circle</button>"

/***/ }),
/* 199 */
/***/ (function(module, exports) {

module.exports = "<h2>Intro to SVG Charts</h2>\r\n<div>\r\n  <svg class=\"chart\" width=\"420\" height=\"120\">\r\n      <g transform=\"translate(0,0)\">\r\n          <rect width=\"50\" height=\"19\"></rect>\r\n          <text x=\"47\" y=\"9.5\" dy=\".35em\">5</text>\r\n      </g>\r\n      <g transform=\"translate(0,20)\">\r\n          <rect width=\"100\" height=\"19\"></rect>\r\n          <text x=\"97\" y=\"9.5\" dy=\".35em\">10</text>\r\n      </g>\r\n      <g transform=\"translate(0,40)\">\r\n          <rect width=\"120\" height=\"19\"></rect>\r\n          <text x=\"117\" y=\"9.5\" dy=\".35em\">12</text>\r\n      </g>\r\n  </svg>\r\n</div>\r\n<div>\r\n  <button class=\"btn btn-default\" (click)=\"svgBarWithD3()\">Create SVG with D3</button>\r\n</div>\r\n<div id=\"scales\"></div>\r\n<h4>Path Data Generators</h4>\r\n<p>\r\n    To simplify the construction of the d attribute for path elements, D3 includes a number of helper classes for generating path data. Each generator is a function of data. So, if your data is a sequence of xy coordinates, you can define accessor functions that the path generators use to produce path data. For example, you might define a line generator\r\n</p>\r\n<pre>\r\n    <code>\r\n    var line = d3.svg.line()\r\n    .x(function(d) {{'{'}} return d.x; {{'}'}})\r\n    .y(function(d) {{'{'}} return d.y; {{'}'}})\r\n    .interpolate(\"basis\");\r\n\r\n    g.append(\"path\")\r\n    .attr(\"d\", line);\r\n    </code>\r\n</pre>\r\n<input list=\"interpolations\" [(ngModel)]=\"interpolate\">\r\n<datalist id=\"interpolations\">\r\n    <option *ngFor=\"let i of sorted_names\" [value]=\"i\"></option>\r\n</datalist>\r\n<!-- <input value=\"basis\" [(ngModel)]=\"interpolate\" /> -->\r\n<button class=\"btn btn-default\" (click)=\"drawPath()\">Draw Path</button>\r\n<div id=\"ex-1\"></div>\r\n<h4>SVG Path Mini-Language</h4>\r\n<table class=\"table table-hover table-bordered\" style=\"margin-bottom:0px;\"> \r\n<thead>\r\n    <tr style=\"background-color: #82bddf;\">\r\n        <td>Command</td>\r\n        <td>Parameters</td>\r\n        <td>Repeatable</td>\r\n        <td>Explanation</td>\r\n    </tr>\r\n</thead>\r\n<tbody>\r\n    <!--Pen Commands-->\r\n    <tr style=\"background-color: #d7effd;\">\r\n        <td colspan=\"4\">Pen Command</td>\r\n    </tr><tr>\r\n    </tr><tr>\r\n        <td>M ( m )</td>\r\n        <td>x, y</td>\r\n        <td>Yes</td>\r\n        <td><strong>moveto</strong><br>Move the pen to a new location. No line is drawn. All path data must begin with a 'moveto' command.</td>\r\n    </tr><tr>\r\n    <!--/Pen Commands-->\r\n    <!--Line Commands-->\r\n    </tr><tr style=\"background-color: #e5f5bb;;\">\r\n        <td colspan=\"4\">Line Commands</td>\r\n    </tr><tr>\r\n    </tr><tr>\r\n        <td>L ( l )</td>\r\n        <td>x, y</td>\r\n        <td>Yes</td>\r\n        <td><strong>lineto</strong><br>Draw a line from the current point to the point (x,y).</td>\r\n    </tr><tr>\r\n    </tr><tr>\r\n        <td>H ( h )</td>\r\n        <td>x</td>\r\n        <td>Yes</td>\r\n        <td><strong>horizontal lineto</strong><br>Draw a horizontal line from the current point to x.</td>\r\n    </tr><tr>\r\n    </tr><tr>\r\n        <td>V ( v )</td>\r\n        <td>y</td>\r\n        <td>Yes</td>\r\n        <td><strong>vertical lineto</strong><br>Draw a horizontal line from the current point to y.</td>\r\n    </tr><tr>\r\n    <!--/Line Commands-->\r\n    <!--Cubic Bezier Curve Commands-->\r\n    </tr><tr style=\"background-color: #e5f5bb;;\">\r\n        <td colspan=\"4\">Cubic Bezier Curve Commands</td>\r\n    </tr><tr>\r\n    </tr><tr>\r\n        <td>C ( c )</td>\r\n        <td>x1 y1 x2 y2 x y</td>\r\n        <td>Yes</td>\r\n        <td><strong>curveto</strong><br>Draw a cubic Bézier curve from the current point to the point (x,y) using (x1,y1) as the control point at the beginning of the curve and (x2,y2) as the control point at the end of the curve.</td>\r\n    </tr><tr>\r\n    </tr><tr>\r\n        <td>S ( s )</td>\r\n        <td>x2 y2 x y</td>\r\n        <td>Yes</td>\r\n        <td><strong>shorthand/smooth curveto</strong><br>Draw a cubic Bézier curve from the current point to (x,y). The first control point is assumed to be the reflection of the last control point on the previous command relative to the current point. (x2,y2) is the second control point (i.e., the control point at the end of the curve).</td>\r\n    </tr><tr>\r\n    <!--/Cubic Bezier Curve Commands-->\r\n    <!--Quadratic Bezier Curve Commands-->\r\n    </tr><tr style=\"background-color: #e5f5bb;;\">\r\n        <td colspan=\"4\">Quadratic Bezier Curve Commands</td>\r\n    </tr><tr>\r\n    </tr><tr>\r\n        <td>Q ( q )</td>\r\n        <td>x1 y1 x y</td>\r\n        <td>Yes</td>\r\n        <td><strong>quadratic Bézier curveto</strong><br>Draw a quadratic Bézier curve from the current point to (x,y) using (x1,y1) as the control point.</td>\r\n    </tr><tr>\r\n    </tr><tr>\r\n        <td>T ( t )</td>\r\n        <td>x y</td>\r\n        <td>Yes</td>\r\n        <td><strong>Shorthand/smooth quadratic Bézier curveto</strong><br>Draw a quadratic Bézier curve from the current point to (x,y). The control point is assumed to be the reflection of the control point on the previous command relative to the current point.</td>\r\n    </tr><tr>\r\n    <!--/Quadratic Bezier Curve Commands-->\t\t\t\t\t\t\t\r\n    <!--Elliptical Arc Curve Command-->\r\n    </tr><tr style=\"background-color: #e5f5bb;;\">\r\n        <td colspan=\"4\">Elliptical Arc Curve Command</td>\r\n    </tr><tr>\r\n    </tr><tr>\r\n        <td>A ( a )</td>\r\n        <td>rx ry x-axis-rotation large-arc-flag sweep-flag x y</td>\r\n        <td>Yes</td>\r\n        <td><strong>elliptical arc</strong><br>Draws an elliptical arc from the current point to (x, y). The size and orientation of the ellipse are defined by two radii (rx, ry) and an x-axis-rotation, which indicate how the ellipse as a whole is rotated relative to the current SVG coordinate system. The center (cx, cy) of the ellipse is calculated automatically to satisfy the constraints imposed by the other parameters. large-arc-flag and sweep-flag contribute to the automatic calculations and help determine how the arc is drawn.</td>\r\n    </tr><tr>\r\n    <!--/Elliptical Arc Curve Command-->\t\t\t\t\t\t\t\r\n    <!--End Path Command-->\r\n    </tr><tr style=\"background-color: #e5f5bb;;\">\r\n        <td colspan=\"4\">End Path Command</td>\r\n    </tr><tr>\r\n    </tr><tr>\r\n        <td>Z ( z )</td>\r\n        <td>none</td>\r\n        <td>No</td>\r\n        <td><strong>closepath</strong><br>Closes the path. A line is drawn from the last point to the first point drawn.</td>\r\n    </tr><tr>\r\n    <!--/End Path Command-->\r\n</tr></tbody>\r\n</table>\r\n<button class=\"btn btn-default\" (click)=\"customInterpolator()\">Custom Interpolator</button>\r\n<div id=\"custom-interpolator\"></div>\r\n<pre>\r\n    d3.svg.line - create a new line generator\r\n    d3.svg.line.radial - create a new radial line generator\r\n    d3.svg.area - create a new area generator\r\n    d3.svg.area.radial - create a new radial area generator\r\n    d3.svg.arc - create a new arc generator\r\n    d3.svg.symbol - create a new symbol generator\r\n    d3.svg.chord - create a new chord generator\r\n    d3.svg.diagonal - create a new diagonal generator\r\n    d3.svg.diagonal.radial - create a new radial diagonal generator\r\n</pre>"

/***/ }),
/* 200 */
/***/ (function(module, exports) {

module.exports = "<p>\n  d3-layouts works!\n</p>\n"

/***/ }),
/* 201 */
/***/ (function(module, exports) {

module.exports = "<h2>Different SVG Shapes</h2>\r\n\r\n<div class=\"col-sm-12\">\r\n  <div class=\"col-sm-4\">\r\n    <h3>Ring</h3>\r\n    <svg height=\"100\" width=\"300\">\r\n      <rect width=\"300\" height=\"100\" style=\"fill:rgb(0,0,255);\"/>\r\n      <circle cx=\"150\" cy=\"50\" r=\"50\" style=\"fill:yellow\" />\r\n      <circle cx=\"150\" cy=\"50\" r=\"30\" style=\"fill:rgb(0,0,255);\" />\r\n      Sorry, your browser does not support inline SVG.\r\n    </svg>\r\n  </div>\r\n  <div class=\"col-sm-4\">\r\n    <h3>Rectangle inside a circle</h3>\r\n    <svg height=\"100\" width=\"300\">\r\n      <circle cx=\"150\" cy=\"50\" r=\"50\" style=\"fill:yellow\" />\r\n      <rect x=\"125\" y=\"25\" width=\"50\" height=\"50\" style=\"fill:rgb(0,0,255);stroke-width:2;stroke:rgb(0,0,0)\" />\r\n      Sorry, your browser does not support inline SVG.\r\n    </svg>\r\n  </div>\r\n  <div class=\"col-sm-4\">\r\n    <h3>Circle inside a Rectangle</h3>\r\n    <svg height=\"100\" width=\"300\">\r\n      <rect x=\"0\" y=\"0\" width=\"300\" height=\"100\" style=\"fill:rgb(0,0,255);stroke-width:0;stroke:rgb(0,0,0)\" />  \r\n      <circle cx=\"150\" cy=\"50\" r=\"49\" style=\"fill:yellow\" />\r\n      Sorry, your browser does not support inline SVG.\r\n    </svg>\r\n  </div>\r\n</div>\r\n<div class=\"col-sm-12\">\r\n  <div class=\"col-sm-4\">\r\n    <h3>Triangle on a rectangle</h3>\r\n    <svg height=\"300\" width=\"200\">\r\n      <polygon points=\"100,0 0,150 200,150\" style=\"fill:lime;stroke:purple;stroke-width:1\" />\r\n      <rect x=\"0\" y=\"150\" width=\"200\" height=\"150\" style=\"fill:rgb(0,0,255);stroke-width:0;stroke:rgb(0,0,0)\" />  \r\n      Sorry, your browser does not support inline SVG.\r\n    </svg>\r\n  </div>\r\n</div>"

/***/ }),
/* 202 */
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"navbar navbar-inverse\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-9\" aria-expanded=\"false\"> \r\n        <span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> \r\n      </button> \r\n      <a href=\"#\" class=\"navbar-brand\">D3</a> \r\n    </div>\r\n    <div class=\"navbar-collapse collapse\" id=\"bs-example-navbar-collapse-9\" aria-expanded=\"false\" style=\"height: 1px;\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li class=\"active\"><a>Table of Contents</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav> -->\r\n<section id=\"table-of-contents\">\r\n  <ul>\r\n    <li><a href=\"#\">Introduction</a></li>\r\n    <li><a href=\"#svg\">SVG objects</a></li>\r\n    <li><a href=\"#drawing-shapes\">Drawing shapes</a></li>\r\n    <li><a href=\"#principles\">D3 principles</a></li>\r\n    <li><a href=\"#selections\">selections</a></li>\r\n    <li><a href=\"#manipulating-selections\">Manipulating selections</a></li>\r\n    <li><a href=\"#binding-data\">Binding & Displaying Data</a></li>\r\n    <li><a href=\"#load-ext-data\">Loading data externally</a></li>\r\n    <li><a href=\"#animations\">Animations</a></li>\r\n    <li><a href=\"#interactivity\">Interactivity</a></li>\r\n    <li><a href=\"#scales\">Scales</a></li>\r\n    <li><a href=\"#axes\">Axes</a></li>\r\n    <li><a href=\"#intro-to-charts\">Intro to Charts</a></li>\r\n    <li><a href=\"#bar-chart\">Building a Bar Chart</a></li>\r\n    <li><a href=\"#line-chart\">Building a line Chart</a></li>\r\n    <li><a href=\"#pie-chart\">Building a Pie chart</a></li>\r\n    <li><a href=\"#donut\">Building a donut</a></li>\r\n    <li><a href=\"#layouts\">D3 Layouts</a></li>\r\n    <li><a href=\"#geojson\">GeoJSON overview</a></li>\r\n    <li><a href=\"#map\">Map and projections</a></li>\r\n    <li><a href=\"#panning-dragging\">Panning and dragging a map</a></li>\r\n    <li><a href=\"#zooming\">Zooming</a></li>\r\n    <li><a href=\"#best-practices\">Best Practices and Overview of D3 V4 Modules</a></li>\r\n  </ul>\r\n</section>\r\n"

/***/ }),
/* 203 */
/***/ (function(module, exports) {

module.exports = "<h2>Events in D3</h2>\r\n<code class=\"well well-sm\">\r\n  Syntax:\r\n  d3.selection.on(type[, listener[, capture]]);\r\n</code>\r\n<div class=\"col-sm-12\">\r\n  <h4>selection.on()</h4>\r\n  Add or remove event listeners to capture event types like click, mouseover, mouseout etc.\r\n\r\n  <h4>selection.dispatch()</h4>\r\n  Captures event types like click, mouseover, mouseout. Typenames is the eventname, listener is the event listener\r\n\r\n  <h4>d3.event</h4>\r\n  Event object to access standard event fields such as timestamp or methods like preventDefault\r\n\r\n  <h4>d3.mouse(container)()</h4>\r\n  Gets the x and y coordinates of the current mouse position in the specified DOM element.\r\n\r\n  <h4>d3.touch()</h4>\r\n  Gets the touch coordinates to a container\r\n</div>\r\n<div>\r\n<svg id='svg-container' width=\"500\" height=\"200\"></svg>\r\n</div>"

/***/ }),
/* 204 */
/***/ (function(module, exports) {

module.exports = "<h2>Introduction</h2>\r\n<p>\r\nD3.js stands for Data Driven Documents. It's a very comprehensive library which provides many tools for data-based calculations and document manipulations. It also handles (and that's one of its strong points) many of the math needed for the visualization of data. D3 has a steep learning curve, but once you experiment with it and manage to do simple visualization of some kind of data; the learning process will become much more compelling and interesting. That's the purpose of this post.\r\n</p>\r\n<p>\r\nD3 handles any kind of document, be it HTML or SVG, and it's not exclusively used to create graphics. That being said, D3 lends itself very well for manipulation of shapes and graphical objects based on static and dynamic data. As such, D3 makes it possible to create very appealing documents.\r\n</p>\r\n<p>\r\nSVG is one type of document which is often being used with D3. With SVG one can create graphical entities much like creating and styling HTML elements. In this article we will use SVG to visualize our data.\r\n</p>\r\n<p>\r\nD3 is not a monolithic framework that seeks to provide every conceivable feature. Instead, D3 solves the crux of the problem: efficient manipulation of documents based on data. This avoids proprietary representation and affords extraordinary flexibility, exposing the full capabilities of web standards such as HTML, SVG, and CSS. With minimal overhead, D3 is extremely fast, supporting large datasets and dynamic behaviors for interaction and animation. D3’s functional style allows code reuse through a diverse collection of official and community-developed modules.\r\n</p>"

/***/ }),
/* 205 */
/***/ (function(module, exports) {

module.exports = "<h3>Line Charts</h3>\r\n<div id=\"simple-line-chart\"></div>\r\n<div id=\"line-chart\">\r\n  <svg width=\"700\" height=\"600\"></svg>\r\n</div>\r\n<div id=\"graph\"></div>"

/***/ }),
/* 206 */
/***/ (function(module, exports) {

module.exports = "<h2>Loading External Data </h2>\r\n<button class=\"btn btn-default\" (click)=\"loadCSV()\">Load CSV</button>\r\n<p class=\"ext\"></p>\r\n<div>\r\n** D3 can natively read a ton of different data types: d3.csv has other buddies like d3.json, d3.xml, and d3.tsv\r\n</div>"

/***/ }),
/* 207 */
/***/ (function(module, exports) {

module.exports = "<h3>D3 Behaviors</h3>\n<p>D3’s behaviors and higher level components, such as the brush, use d3.dispatch to broadcast custom events.</p>\n<p>For visualizations with coordinated views, d3.dispatch provides a convenient lightweight mechanism for loosely-coupled components. Organizing your code with d3.dispatch can assist with separation of concerns and make your code easier to maintain.</p>\n<h4>d3.dispatch</h4>\n<p>Creates a new dispatcher object for the specified types. Each argument is a string representing the name of the event type, such as \"zoom\" or \"change\". The returned object is an associative array; each type name is associated with a dispatch object. For example, if you wanted to create an event dispatcher for \"start\" and \"end\" events, you can say:</p>\n<pre>\n  var dispatch = d3.dispatch(\"start\", \"end\");\n</pre>\n<p>\n  Then, you can access the dispatchers for the different event types as dispatch.start and dispatch.end. For example, you might add an event listener:\n</p>\n<pre>\n  dispatch.on(\"start\", listener);\n</pre>\n<pre>\n  dispatch.start();\n</pre>\n<pre>\n  If an event listener was already registered for the same type, \n  the existing listener is removed before the new listener is added. To register multiple listeners\n  for the same event type, the type may be followed by an optional namespace, \n  such as \"click.foo\" and \"click.bar\". \n  Likewise, you can remove all registered listeners for a \n  given namespace by saying dispatch.on(\".foo\", null).\n  If listener is not specified, returns the currently-assigned listener \n  for the specified type, if any.\n</pre>\n<h4>dispatch.type(arguments…)</h4>\n<p>The type method (such as dispatch.start) notifies each registered listener, \n  passing the listener the specified arguments. \n  The this context will be used as the context of the registered listeners. \n  Eg. dispatch.call( foo, bar ). You can also control the \"this\" context of the listeners using call or apply.\n</p>\n<pre>\n  Example:\n    selection.on(\"click\", function(d, i) {{\"{\"}}\n      dispatch.custom.apply(this, arguments);\n    });\n</pre>\n\n<h4>Demo</h4>\n<p>This example uses two custom events: a load event when data is available, and a statechange event when the displayed state is changed.</p>\n<p>Custom events allow loose coupling of components: views can listen for events and update the DOM accordingly, without needing to explicitly tie each view together. When the drop-down menu changes, a statechange event is triggered which causes any interested listeners to be notified.</p>\n<button class=\"btn btn-default\" (click)=\"dispatchDemo()\">Show Demo</button>\n<div id=\"d3-dispatch-demo\"></div>\n<ul>\n  <li>Drag — tracks mouse or multitouch movement(s) relative to an origin</li>\n  <li>Zoom — emits zoom and pan events in response to common input idioms</li>\n</ul>\n<pre>\n    selection.call(d3.behavior.drag().on('dragstart', function (d) {{\"{\"}}\n      console.log(\"Started moving item with data:\", d);\n    }));\n</pre>\n<strong>\n    Note carefully the nesting: the 'dragstart' event is registered on the d3.behavior.drag() instance, not on the selection! It is this same instance — which is itself also a function — that gets called on the selection. This call allows the behavior to do its own internal setup on the selection.\n</strong>\n<pre>\n    var drag = d3.behavior.drag();\n    selection.call(drag);\n    selection.on(\".drag\", null);\n    \n    drag.on(type[, listener])\n    <ul><li>dragstart - when a drag gesture starts.</li>\n      <li>drag - when the drag gesture moves.</li>\n      <li>dragend - when the drag gesture finishes.</li></ul>\n</pre>\n<p>\n  Drag events (but not dragstart and dragend events) expose \"x\" and \"y\" properties representing the current position of the drag gesture in local coordinates.\n</p>\n<h4>Simple Drag Example</h4>\n<button class=\"btn btn-default\" (click)=\"basicDragExample()\">Run</button>\n<svg id=\"simple-drag\" width=\"700\" height=\"300\"></svg>\n<h4>Prevent Default</h4>\n<pre>\n    selection.on(\"click\", function() {{\"{\"}}\n      if (d3.event.defaultPrevented) return; // click suppressed\n      console.log(\"clicked!\");\n    });\n</pre>\n<p>\n  When combining drag behaviors with other event listeners for interaction events (such as having drag take precedence over zoom), you may also consider stopping propagation on the source event to prevent multiple actions:\n</p>\n<pre>\n  drag.on(\"dragstart\", function() {{\"{\"}}\n    d3.event.sourceEvent.stopPropagation(); // silence other listeners\n  });\n</pre>\n<h4>drag.origin([origin])</h4>\n<p>If origin is specified, sets the origin accessor to the specified function. If origin is not specified, returns the current origin accessor which defaults to null.</p>\n\n<p>The origin accessor function is used to determine the starting position (the “origin”) of the element being dragged; this allows the drag behavior to preserve the offset between the mouse position and the starting element position during drag.</p>\n<div id=\"drag-multiples\"></div>\n<button class=\"btn btn-default\" (click)=\"dragMultiples()\">Run</button>\n\n<h3>Zoom</h3>\n<h3>d3.behavior.zoom()</h3>\n<pre>\n    var zoom = d3.behavior.zoom();\n    selection.call(zoom);\n\n    selection.on(\".zoom\", null);\n\n    zoom.translate([translate])\n\n    zoom.scale([scale])\n\n    zoom.scaleExtent([extent])  => ([minimum, maximum])\n\n    zoom.center([center])\n\n    zoom.size([size])\n\n    zoom.x([x])\n\n    zoom.y([y])\n\n    zoom.on(type, listener)\n        zoomstart - at the start of a zoom gesture (e.g., touchstart).\n        zoom - when the view changes (e.g., touchmove).\n        zoomend - at the end of the current zoom gesture (e.g., touchend).\n</pre>\n\n<p>\n  For mousewheel events, which happen discretely with no explicit start and end reported by the browser, events that occur within 50 milliseconds of each other are grouped into a single zoom gesture.\n</p>\n<pre>\n    When fired, the d3.event object will contain the following properties:\n\n    scale - a number; the current scale.\n    translate - a two-element array representing the current translation vector.\n</pre>\n<h4>zoom.event(selection)</h4>\n<p>If selection is a selection, immediately dispatches a zoom gesture to registered listeners, as the three event sequence zoomstart, zoom and zoomend. This can be useful in triggering listeners after setting the translate or scale programatically.</p>\n<p>\n  If selection is a transition, registers the appropriate tweens so that the zoom behavior dispatches events over the course of the transition: a zoomstart event when the transition starts from the previously-set view, zoom events for each tick of the transition, and finally a zoomend event when the transition ends. \n</p>\n<strong>Note that the transition will be interrupted if the user starts zooming before the transition ends.</strong>\n<h4>Example</h4>\n<button class=\"btn btn-default\" (click)=\"zoomExample()\">Run</button>\n<div id=\"zoom-section\"></div>"

/***/ }),
/* 208 */
/***/ (function(module, exports) {

module.exports = "<h3>Pie Chart</h3>\r\n<pre>\r\nEvaluates the pie function on the specified array of values. An optional index may be specified, which is passed along to the start and end angle functions. The return value is an array of arc descriptors:\r\n\r\n    value - the data value, returned by the value accessor.\r\n    startAngle - the start angle of the arc in radians.\r\n    endAngle - the end angle of the arc in radians.\r\n    padAngle - the pad angle of the arc in radians.\r\n    data - the original datum for this arc.\r\n\r\n    The elements are returned in the original order, matching values, even if a sort order is applied; this preserves the original index of each element in the values array, which is nice if you are using the index to generate a categorical color or other display property.\r\n</pre>\r\n<a href=\"https://github.com/d3/d3-3.x-api-reference/blob/master/Pie-Layout.md\">Reference</a>\r\n<h4>Curve Generator</h4>\r\n<svg id=\"pie-chart1\" width=\"700\" height=\"500\"></svg>\r\n\r\n <svg id=\"pie-chart2\" width=\"700\" height=\"500\"></svg> \r\n\r\n <svg id=\"donut-chart\" width=\"700\" height=\"500\"></svg>"

/***/ }),
/* 209 */
/***/ (function(module, exports) {

module.exports = "<h2>D3 Principles</h2>\r\n<p>Embedded within an HTML webpage, the JavaScript D3.js library uses pre-built JavaScript functions to select elements, create SVG objects, style them, or add transitions, dynamic effects or tooltips to them. These objects can also be widely styled using CSS. Large datasets can be easily bound to SVG objects using simple D3.js functions to generate rich text/graphic charts and diagrams. The data can be in various formats, most commonly JSON, comma-separated values (CSV) or geoJSON, but, if required, JavaScript functions can be written to read other data formats.</p>\r\n<div class=\"col-sm-12\">\r\n    <h3>Selections</h3>\r\n    <p>\r\n      The central principle of D3.js design is to enable the programmer to first use a CSS-style selector to select a given set of Document Object Model (DOM) nodes, then use operators to manipulate them in a similar manner to jQuery.\r\n    </p>\r\n    <code>\r\n        <p>d3.selectAll(\"p\")                 // select all p elements</p>\r\n        <p>.style(\"color\", \"lavender\")     // set style \"color\" to value \"lavender\"</p>\r\n        <p>.attr(\"class\", \"squares\")       // set attribute \"class\" to value \"squares\"</p>\r\n        <p>.attr(\"x\", 50);                 // set attribute \"x\" (horizontal position) to value 50px</p>\r\n    </code>\r\n    <p>\r\n        The selection can be based on tag (as in the above example), class, identifier, attribute, or place in the hierarchy. Once elements are selected, one can apply operations to them. This includes getting and setting attributes, display texts, and styles (as in the above example). Elements may also be added and removed. This process of modifying, creating and removing HTML elements can be made dependent on data, which is the basic concept of D3.js.\r\n    </p>\r\n</div>\r\n<div class=\"col-sm-12\">\r\n  <h3>Transitions</h3>\r\n  <p>By declaring a transition, values for attributes and styles can be smoothly interpolated over a certain time. The following code will make all HTML p elements on a page gradually change their text color to pink:</p>\r\n  <code>\r\n    <p>d3.selectAll(\"p\")             // select all p elements</p>\r\n      <p>.transition(\"trans_1\")      // transition with name \"trans_1\"</p>\r\n      <p>.delay(0)                 // transition starting 0ms after trigger</p>\r\n      <p>.duration(500)            // transitioning during 500ms</p>\r\n      <p>.ease(\"linear\")           // transition easing progression is linear...</p>\r\n      <p>.style(\"color\", \"pink\");    // ... to color:pink</p>\r\n  </code>\r\n</div>\r\n<div class=\"col-sm-12\">\r\n  <h3>Data-binding</h3>\r\n  <p>For more advanced uses, loaded data drives the creation of elements. D3.js loads a given dataset, then, for each of its elements, creates an SVG object with associated properties (shape, colors, values) and behaviors (transitions, events).</p>\r\n  <code>\r\n    <p>var countriesData = [\r\n        ( name:\"Ireland\",  income:53000, life: 78, pop:6378, color: \"black\"),\r\n        ( name:\"Norway\",   income:73000, life: 87, pop:5084, color: \"blue\" ),\r\n        ( name:\"Tanzania\", income:27000, life: 50, pop:3407, color: \"grey\" )\r\n     ];</p>\r\n     <p>var svg = d3.select(\"#hook\").append(\"svg\")\r\n        .attr(\"width\", 120)\r\n        .attr(\"height\", 120)\r\n        .style(\"background-color\", \"#D0D0D0\");</p>\r\n      <p>svg.selectAll(\"circle\")                  // create virtual circle template</p>\r\n      <p>.data(countriesData)                   // bind data</p>\r\n      <p>.enter()                                 // for each row in data...</p>\r\n      <p>.append(\"circle\")                      // bind circle &amp; data row such that... </p>\r\n      <p>.attr(\"id\", function(d) ( return d.name ))            // set the circle's id according to the country name</p>\r\n  </code>\r\n</div>"

/***/ }),
/* 210 */
/***/ (function(module, exports) {

module.exports = "<h2>d3-scale</h2>\r\n<p>\r\n    -> D3.js provides functions to perform data transformations.\r\n</p>\r\n<p>\r\n    -> These functions map an input domain to an output range.\r\n</p>\r\n<p>\r\n    -> Said another way, these functions take an interval and transform it into a new interval.\r\n</p>\r\n<p>\r\n    -> Because the D3.js Scales are functions, not only can we map one <b>input domain</b> to an <b>output range</b>, the functions can convert a number in the domain to an output in the range.\r\n</p>\r\n<p>\r\n    -> Scales are an optional feature in D3; you don't have to use them, if you prefer to do the math yourself. However, using scales can greatly simplify the code needed to map a dimension of data to a visual representation.\r\n</p>\r\n<p>\r\n    Scales are a convenient abstraction for a fundamental task in visualization: mapping a dimension of abstract data to a visual representation. Although most often used for position-encoding quantitative data, such as mapping a measurement in meters to a position in pixels for dots in a scatterplot, scales can represent virtually any visual encoding, such as diverging colors, stroke widths, or symbol size. Scales can also be used with virtually any type of data, such as named categorical data or discrete data that requires sensible breaks.\r\n</p>\r\n<p>Scales have no intrinsic visual representation. However, most scales can generate and format ticks for reference marks to aid in the construction of axes.</p>\r\n<h3>D3 scale types</h3>\r\n<p>D3 has around 12 different scale types (scaleLinear, scalePow, scaleQuantise, scaleOrdinal etc.) and broadly speaking they can be classified into 3 groups:</p>\r\n<ul>\r\n    <li>scales with continuous input and continuous output</li>\r\n    <li>scales with continuous input and discrete output</li>\r\n    <li>scales with discrete input and discrete output</li>\r\n</ul>\r\n<h3>D3 scale types as per D3 API</h3>\r\n<ul>\r\n    <li>Continuous Scales (For continuous quantitative data)</li>\r\n    <ul>\r\n        <li>Linear Scales</li>\r\n        <li>Power Scales</li>\r\n        <li>Log Scales</li>\r\n        <li>Identity Scales</li>\r\n        <li>Time Scales</li>\r\n    </ul>\r\n    <li>Sequential Scales</li>\r\n    <li>Quantize Scales (may aid differentiation by rounding continuous data to a fixed set of discrete values) </li>\r\n    <li>Quantile Scales (computes quantiles from a sample population)</li>\r\n    <li>Threshold Scales</li>\r\n    <li>Ordinal Scales (For discrete ordinal (ordered) or categorical (unordered) data)</li>\r\n    <ul>\r\n        <li>Band Scales</li>\r\n        <li>Point Scales</li>\r\n    </ul>\r\n</ul>\r\n<h4>scaleLinear</h4>\r\n<p>\r\nThey use a linear function (y = m * x + b) to interpolate across the domain and range.\r\n</p>\r\n<p>\r\nTypical uses are to transform data values into positions and lengths, so when creating bar charts, line charts (as well as many other chart types) they are the scale to use.\r\n</p>\r\nMin: <input type=\"number\" [(ngModel)]=\"minDomain\"/>\r\nMax: <input type=\"number\" [(ngModel)]=\"maxDomain\"/>\r\n<button class='btn btn-default' (click)=\"simpleExample(minDomain, maxDomain)\">Run</button>\r\n<div>\r\n    <svg width=\"700\" height=\"40\">\r\n        <g class=\"inner\" transform=\"translate(40, 30)\">\r\n        </g>\r\n    </svg>\r\n</div>\r\n<p>The output range can also be specified as colours:</p>\r\n<p>This can be useful for visualisations such as choropleth maps</p>\r\n<button class='btn btn-default' (click)=\"linearScaleColor()\">Run</button>\r\n<div>\r\n    <svg class=\"ex-2\" width=\"700\" height=\"100\"></svg>\r\n</div>\r\n<div class=\"well well-sm\">\r\n    Version 4 uses a different naming convention to v3. We use d3.scaleLinear() in v4 and d3.scale.linear() in v3.\r\n</div>\r\n<h4>scalePow</h4>\r\n<p>More included for completeness, rather than practical usefulness, the power scale interpolates using a power (y = m * x^k + b) function. The exponent k is set using .exponent():</p>\r\n<pre>\r\n    <code>\r\n    var powerScale = d3.scale.pow()\r\n    .exponent(0.5)\r\n    .domain([0, 100])\r\n    .range([0, 30]);\r\n      \r\n    powerScale(0);   // returns 0\r\n    powerScale(50);  // returns 21.21...\r\n    powerScale(100); // returns 30\r\n</code>\r\n</pre>\r\n<h4>scaleSqrt</h4>\r\n<p>\r\nThe scaleSqrt scale is a special case of the power scale (where k = 0.5) and is useful for sizing circles by area (rather than radius). (When using circle size to represent data, it’s considered better practice to set the area, rather than the radius proportionally to the data.)\r\n</p>\r\n<button class='btn btn-default' (click)=\"scaleSqrt()\">Run</button>\r\n<div>\r\n    <svg class=\"ex-3\" width=\"700\" height=\"100\"></svg>\r\n</div>\r\n<h4>scaleLog</h4>\r\n<p>\r\nLog scales interpolate using a log function (y = m * log(x) + b) and can be useful when the data has an exponential nature to it.\r\n</p>\r\n<button class='btn btn-default' (click)=\"scaleLog()\">Run</button>\r\n<div>\r\n    <svg class=\"ex-4\" width=\"700\" height=\"100\"></svg>\r\n</div>\r\n<h4>scaleTime</h4>\r\n<p>\r\nscaleTime is similar to scaleLinear except the domain is expressed as an array of dates. (It’s very useful when dealing with time series data.)\r\n</p>\r\n<button class='btn btn-default' (click)=\"scaleTime()\">Run</button>\r\n<div>\r\n    <svg class=\"ex-5\" width=\"700\" height=\"100\">\r\n        <g class=\"inner\" transform=\"translate(5, 50)\"></g>\r\n    </svg>\r\n</div>\r\n<h4>Clamping</h4>\r\n<p>\r\nBy default scaleLinear, scalePow, scaleSqrt, scaleLog, scaleTime and scaleSequential allow input outside the domain. For example:\r\n</p>\r\n<pre>\r\n    <code>\r\n    var linearScale = d3.scale.linear()\r\n    .domain([0, 10])\r\n    .range([0, 100]);\r\n    \r\n    linearScale(20);  // returns 200\r\n    linearScale(-10); // returns -100\r\n    </code>\r\n</pre>\r\n<p>\r\nIn this instance the scale function uses extrapolation for values outside the domain.\r\n</p>\r\n<p>\r\nIf we’d like the scale function to be restricted to input values inside the domain we can ‘clamp’ the scale function using .clamp():\r\n</p>\r\n<pre>\r\n    <code>\r\n    linearScale.clamp(true);\r\n\r\n    linearScale(20);  // returns 100\r\n    linearScale(-10); // returns 0\r\n    </code>\r\n</pre>\r\n<h4>D3 Extent & Nice</h4>\r\n<p>\r\nIf the domain has been computed automatically from real data (e.g. by using d3.extent) the start and end values might not be round figures. This isn’t necessarily a problem, but if using the scale to define an axis, it can look a bit untidy:\r\n</p>\r\n<button class='btn btn-default' (click)=\"withoutNice()\">Run without Nice</button>\r\n<button class='btn btn-default' (click)=\"withNice()\">Run with Nice</button>\r\n<div>\r\n    <svg class=\"ex-6\" width=\"700\" height=\"100\">\r\n        <g class=\"withoutnice\" transform=\"translate(10, 50)\"></g>\r\n    </svg>\r\n    <svg class=\"ex-7\" width=\"700\" height=\"100\">\r\n        <g class=\"withnice\" transform=\"translate(10, 50)\"></g>\r\n    </svg>\r\n</div>\r\n<h4>Multi Segment Scale</h4>\r\n<button class='btn btn-default' (click)=\"multiSegment()\">Run</button>\r\n<div>\r\n    <svg class=\"ex-8\" width=\"700\" height=\"100\">\r\n        <g class=\"multiSegment\" transform=\"translate(10, 50)\"></g>\r\n    </svg>\r\n</div>\r\n<h4>Inversion</h4>\r\n<p>\r\nThe .invert() method allows us to determine a scale function’s input value given an output value (provided the scale function has a numeric domain):\r\n</p>\r\n<button class='btn btn-default' (click)=\"invert()\">Run</button>\r\n<div>\r\n    <svg class=\"ex-9\" width=\"650\" height=\"100\">\r\n        <g transform=\"translate(25, 10)\">\r\n            <g class=\"inner\" transform=\"translate(0, 40)\"></g>\r\n            <rect width=\"600\" height=\"40\" style=\"fill: rgb(1, 102, 63); cursor: pointer;\" class=\"click-area\" transform=\"translate(0, 0)\"></rect>\r\n        </g>\r\n    </svg>\r\n    <div class=\"info\">Hover on the green band</div>\r\n</div>\r\n<h3>Scales with continuous input and discrete output</h3>\r\n<h4>scaleQuantize</h4>\r\n<pre>\r\n    <code>\r\n    var quantizeScale = d3.scale.quantize()\r\n    .domain([0, 100])\r\n    .range(['lightblue', 'orange', 'lightgreen', 'pink']);\r\n    \r\n    quantizeScale(10);   // returns 'lightblue'\r\n    quantizeScale(30);  // returns 'orange'\r\n    quantizeScale(90);  // returns 'pink'\r\n    </code>\r\n</pre>\r\n<button class='btn btn-default' (click)=\"quantizeScale()\">Run</button>\r\n<div>\r\n    <svg class=\"ex-10\" width=\"700\" height=\"100\">\r\n        <g transform=\"translate(50, 40)\"></g>\r\n    </svg>\r\n</div>\r\n<h4>scaleQuantile</h4>\r\n<button class='btn btn-default' (click)=\"quantileScale()\">Run</button>\r\n<div>\r\n    <svg class=\"ex-11\" width=\"700\" height=\"100\">\r\n        <g transform=\"translate(50, 40)\"></g>\r\n    </svg>\r\n</div>\r\n<p>\r\nThe (sorted) domain array is divided into n equal sized groups where n is the number of range values.\r\n</p>\r\n<p>\r\nTherefore in the above example the domain array is split into 3 groups where:\r\n</p>\r\n<pre>\r\n-> the first 5 values are mapped to ‘lightblue’\r\n-> the next 5 values to ‘orange’ and\r\n-> the last 5 values to ‘lightgreen’.\r\n</pre>\r\n<pre>\r\nThe split points of the domain can be accessed using .quantiles():\r\n    <code>\r\n    quantileScale.quantiles();  // returns [26.66..., 63]\r\n    </code>\r\n</pre>\r\n<p>\r\nIf the range contains 4 values quantileScale computes the quartiles of the data. In other words, the lowest 25% of the data is mapped to range[0], the next 25% of the data is mapped to range[1] etc.\r\n</p>\r\n<h4>scaleThreshold</h4>\r\n<p>\r\nscaleThreshold maps continuous numeric input to discrete values defined by the range. n-1 domain split points are specified where n is the number of range values.\r\n</p>\r\n<button class='btn btn-default' (click)=\"thresholdScale()\">Run</button>\r\n<div>\r\n    <svg class=\"ex-12\" width=\"700\" height=\"100\">\r\n        <g transform=\"translate(50, 40)\"></g>\r\n    </svg>\r\n</div>\r\n<h3>Scales with discrete input and discrete output</h3>\r\n<h4>scaleOrdinal</h4>\r\n<p>\r\nscaleOrdinal maps discrete values (specified by an array) to discrete values (also specified by an array). The domain array specifies the possible input values and the range array the output values. The range array will repeat if it’s shorter than the domain array.\r\n</p>\r\n<button class='btn btn-default' (click)=\"ordinalScale()\">Run</button>\r\n<div>\r\n    <svg class=\"ex-13\" width=\"700\" height=\"100\">\r\n        <g transform=\"translate(10, 40)\"></g>\r\n    </svg>\r\n</div>\r\n<button class='btn btn-default' (click)=\"categoricalScale10()\">Run 10</button>\r\n<button class='btn btn-default' (click)=\"categoricalScale20()\">Run 20</button>\r\n<button class='btn btn-default' (click)=\"categoricalScale20b()\">Run 20b</button>\r\n<button class='btn btn-default' (click)=\"categoricalScale20c()\">Run 20c</button>\r\n<div>\r\n    <svg class=\"ex-14\" width=\"700\" height=\"100\">\r\n        <g transform=\"translate(10, 40)\"></g>\r\n    </svg>\r\n    <svg class=\"ex-15\" width=\"700\" height=\"100\">\r\n        <g transform=\"translate(10, 40)\"></g>\r\n    </svg>\r\n    <svg class=\"ex-16\" width=\"700\" height=\"100\">\r\n        <g transform=\"translate(10, 40)\"></g>\r\n    </svg>\r\n    <svg class=\"ex-17\" width=\"700\" height=\"100\">\r\n        <g transform=\"translate(10, 40)\"></g>\r\n    </svg>\r\n</div>\r\n<h4>scaleBand</h4>\r\n<p>\r\nWhen creating bar charts scaleBand helps to determine the geometry of the bars, taking into account padding between each bar. The domain is specified as an array of values (one value for each band) and the range as the minimum and maximum extents of the bands (e.g. the total width of the bar chart).\r\n</p>\r\n<p>\r\nIn effect scaleBand will split the range into n bands (where n is the number of values in the domain array) and compute the positions and widths of the bands taking into account any specified padding.\r\n</p>\r\n<pre>\r\n    <code>\r\n    var bandScale = d3.scale.ordinal()\r\n    .domain(['Mon', 'Tue', 'Wed', 'Thu', 'Fri'])\r\n    .rangeBands([0, 100]);\r\n    </code>\r\n</pre>\r\n<button class='btn btn-default' (click)=\"bandScale()\">Run</button>\r\n<div>\r\n    <svg class=\"ex-18\" width=\"700\" height=\"100\">\r\n        <g transform=\"translate(10, 0)\"></g>\r\n    </svg>\r\n</div>"

/***/ }),
/* 211 */
/***/ (function(module, exports) {

module.exports = "<h2>Selections</h2>\r\n<button class=\"btn btn-primary pull-right\" (click)=\"showResults()\">Show selections</button>\r\n<p id=\"concept\">\r\n    Selections is one of the core concepts in D3.js. It is based on CSS selectors. It allows us to select one or more elements in a webpage. In addition, it allows us to modify, append, or remove elements in a relation to the pre-defined dataset.\r\n</p>\r\n<div class=\"methods\">\r\n    <p><b>select()</b> -  Selects only one DOM element by matching the given CSS selector. If there are more than one elements for the given CSS selector, it selects the first one only.</p>\r\n    <p><b>selectAll()</b> - Selects all DOM elements by matching the given CSS selector. If you are familiar with selecting elements with jQuery, D3.js selectors are almost the same.</p>\r\n</div>\r\n<code>\r\n  <h2>Selection by Tag</h2>\r\n  <div class=\"well well-sm\">\r\n      d3.select('p').text(): {{pSelector}}\r\n  </div>\r\n  <div class=\"well well-sm\">\r\n      d3.selectAll(\"p b\"): {{arraySelector}}\r\n  </div>\r\n\r\n  <h2>Selection by Classname</h2>\r\n  <div class=\"well well-sm\">\r\n      d3.selectAll('.methods'): {{classSelector}}\r\n  </div>\r\n\r\n  <h2>Selection by Id</h2>\r\n  <div class=\"well well-sm\">\r\n      d3.select('#concept'): {{idSelector}}\r\n  </div>\r\n</code>"

/***/ }),
/* 212 */
/***/ (function(module, exports) {

module.exports = "<h2>What is SVG?</h2>\r\n<ul>\r\n  <li>SVG stands for Scalable Vector Graphics</li>\r\n  <li>SVG is used to define graphics for the Web</li>\r\n  <li>SVG is a W3C recommendation</li>\r\n  <li>SVG graphics do NOT lose any quality if they are zoomed or resized</li>\r\n  <li>Every element and every attribute in SVG files can be animated</li>\r\n</ul>\r\n\r\n<h2>Differences Between SVG and Canvas</h2>\r\n<p>SVG is a language for describing 2D graphics in XML.</p>\r\n\r\n<p>Canvas draws 2D graphics, on the fly (with a JavaScript).</p>\r\n\r\n<p>SVG is XML based, which means that every element is available within the SVG DOM. You can attach JavaScript event handlers for an element.</p>\r\n\r\n<p>In SVG, each drawn shape is remembered as an object. If attributes of an SVG object are changed, the browser can automatically re-render the shape.</p>\r\n\r\n<p>Canvas is rendered pixel by pixel. In canvas, once the graphic is drawn, it is forgotten by the browser. If its position should be changed, the entire scene needs to be redrawn, including any objects that might have been covered by the graphic.</p>\r\n\r\n<div class=\"col-sm-12\">\r\n  <div class=\"col-sm-4\">\r\n    <h3>Circle</h3>\r\n    <svg width=\"100\" height=\"100\">\r\n      <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"green\" stroke-width=\"4\" fill=\"yellow\" />\r\n    </svg>\r\n  </div>\r\n  <div class=\"col-sm-4\">\r\n      <h3>Rectangle</h3>\r\n    <svg width=\"400\" height=\"100\">\r\n      <rect width=\"200\" height=\"100\" style=\"fill:rgb(0,0,255);stroke-width:10;stroke:rgb(0,0,0)\" />\r\n    </svg>\r\n  </div>\r\n  <div class=\"col-sm-4\">\r\n    <h3>Rectangle with border radius</h3>\r\n    <svg width=\"200\" height=\"180\">\r\n      <rect x=\"50\" y=\"20\" rx=\"20\" ry=\"20\" width=\"140\" height=\"150\"\r\n      style=\"fill:red;stroke:black;stroke-width:5;opacity:0.5\" />\r\n    </svg>\r\n  </div>\r\n</div>\r\n<div>\r\n  <div class=\"col-sm-4\">\r\n    <h3>Gradient Ellipse</h3>\r\n    <svg height=\"130\" width=\"500\">\r\n      <defs>\r\n        <linearGradient id=\"grad1\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"0%\">\r\n          <stop offset=\"0%\" style=\"stop-color:rgb(255,255,0);stop-opacity:1\" />\r\n          <stop offset=\"100%\" style=\"stop-color:rgb(255,0,0);stop-opacity:1\" />\r\n        </linearGradient>\r\n      </defs>\r\n      <ellipse cx=\"100\" cy=\"70\" rx=\"85\" ry=\"55\" fill=\"url(#grad1)\" />\r\n      <text fill=\"#ffffff\" font-size=\"45\" font-family=\"Verdana\" x=\"50\" y=\"86\">SVG</text>\r\n      Sorry, your browser does not support inline SVG.\r\n    </svg>\r\n  </div>\r\n  <div class=\"col-sm-4\">\r\n    <h3>Ellipse</h3>\r\n    <svg height=\"140\" width=\"500\">\r\n      <ellipse cx=\"200\" cy=\"80\" rx=\"100\" ry=\"50\"\r\n      style=\"fill:yellow;stroke:purple;stroke-width:2\" />\r\n    </svg>\r\n  </div>\r\n</div>"

/***/ }),
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(88);


/***/ })
]),[263]);
//# sourceMappingURL=main.bundle.js.map