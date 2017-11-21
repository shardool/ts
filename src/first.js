"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CXM;
(function (CXM) {
    var SDA;
    (function (SDA) {
        var Person = /** @class */ (function () {
            function Person(fn, ln) {
                this.fn = fn;
                this.ln = ln;
            }
            Object.defineProperty(Person.prototype, "firstName", {
                get: function () {
                    return this.fn;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Person.prototype, "lastName", {
                get: function () {
                    return this.ln;
                },
                enumerable: true,
                configurable: true
            });
            return Person;
        }());
        SDA.Person = Person;
    })(SDA = CXM.SDA || (CXM.SDA = {}));
})(CXM || (CXM = {}));
exports.CXM = CXM;
var Guardian;
(function (Guardian) {
    Guardian.name = 'Shardul';
})(Guardian || (Guardian = {}));
exports.Guardian = Guardian;
var XX;
(function (XX) {
    XX.surname = 'Ghanti';
})(XX || (XX = {}));
exports.XX = XX;
var som = { fn: 'Lance' };
var Emp = { empId: 32, title: 'Manager' };
var label = 'First Name';
exports.label = label;
var add = function (a, b, c) {
    return a + b + c;
};
exports.add = add;
exports.default = [som, Emp, label, XX, add, CXM];
