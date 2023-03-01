"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function myDecorator(target, key, descriptor) {
    var fn = descriptor.value || descriptor.initializer.call(this);
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log('==================================');
        console.log('target.consturtor: ', target.constructor);
        console.log('key: ', key);
        console.log('descriptor: ', descriptor);
        console.log('==================================');
        fn.call(this, args);
    };
}
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.prototype.doSomething = function () {
        console.log("I'm doing some work!");
    };
    __decorate([
        myDecorator
    ], MyClass.prototype, "doSomething", null);
    return MyClass;
}());
var instance = new MyClass();
instance.doSomething();
