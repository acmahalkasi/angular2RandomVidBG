System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.randnum = Math.random();
                    this.inum = 10;
                    this.rand1 = Math.round(this.randnum * (this.inum - 1)) + 1;
                    this.images = [
                        'volkanoBackground',
                        'diskBackground',
                        'Agile',
                        'Coverr-market-mcu',
                        'Dog-Lovers',
                        'Down',
                        'For_Wes',
                        'Scooooters',
                        'Street-View',
                        'ghostBackground'];
                    this.image = this.images[this.rand1];
                    this._posterUrl = "/app/assets/backgrounds/" + this.images[this.rand1] + ".jpg";
                    this._webmUrl = "/app/assets/backgrounds/" + this.images[this.rand1] + ".webm";
                    this._mp4Url = "/app/assets/backgrounds/" + this.images[this.rand1] + ".webm";
                    console.log(this.image);
                    //<source src="/app/assets/backgrounds/" + {{image}} +".webm" type="video/webm">
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: " <video playsinline autoplay muted loop poster=\"{{_posterUrl}}\" id=\"bgvid\">\n                <source src=\"{{_webmUrl}}\" type=\"video/webm\">\n                <source src=\"{{_mp4Url}}\" type=\"video/mp4\">\n                </video>\n\n                <button class=\"btn btn-primary\" id=\"vidpause\">Pause</button>\n                "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map