var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var bootstrap_1 = require('angular2/bootstrap');
// #docregion DatePipe
var DatePipeExample = (function () {
    function DatePipeExample() {
        this.today = Date.now();
    }
    DatePipeExample = __decorate([
        angular2_1.Component({
            selector: 'date-example',
            template: "<div>\n    <p>Today is {{today | date}}</p>\n    <p>Or if you prefer, {{today | date:'fullDate'}}</p>\n    <p>The time is {{today | date:'jmZ'}}</p>\n  </div>"
        }), 
        __metadata('design:paramtypes', [])
    ], DatePipeExample);
    return DatePipeExample;
})();
exports.DatePipeExample = DatePipeExample;
// #enddocregion
var AppCmp = (function () {
    function AppCmp() {
    }
    AppCmp = __decorate([
        angular2_1.Component({
            selector: 'example-app',
            directives: [DatePipeExample],
            template: "\n    <h1>DatePipe Example</h1>\n    <date-example></date-example>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppCmp);
    return AppCmp;
})();
exports.AppCmp = AppCmp;
function main() {
    bootstrap_1.bootstrap(AppCmp);
}
exports.main = main;
//# sourceMappingURL=date_pipe_example.js.map