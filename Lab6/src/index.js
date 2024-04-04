var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
/**********************************************************************/
// Lab 6 - Bai 1
function Logger(constructor) {
    console.log('Logging...');
    console.log(constructor);
}
var Person = function () {
    var _classDecorators = [Logger];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var Person = _classThis = /** @class */ (function () {
        function Person_1() {
            this.name = 'Max';
            console.log('Creating person object...');
        }
        return Person_1;
    }());
    __setFunctionName(_classThis, "Person");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Person = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Person = _classThis;
}();
var pers = new Person();
console.log(pers);
/**********************************************************************/
// Lab 6 - Bai 2
function Loggers(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
var Persons = function () {
    var _classDecorators = [Loggers('LOGGING - PERSON')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var Persons = _classThis = /** @class */ (function () {
        function Persons_1() {
            this.name = 'Max';
            console.log('Creating person object...');
        }
        return Persons_1;
    }());
    __setFunctionName(_classThis, "Persons");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Persons = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Persons = _classThis;
}();
/**********************************************************************/
// Lab 6 - Bai 3
function Log(target, propertyName) {
    console.log('Property decorator!');
    console.log(target, propertyName);
}
var Product = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _title_decorators;
    var _title_initializers = [];
    return _a = /** @class */ (function () {
            function Product(t, p) {
                this.title = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _title_initializers, void 0));
                this.title = t;
                this._price = p;
            }
            Object.defineProperty(Product.prototype, "price", {
                set: function (val) { },
                enumerable: false,
                configurable: true
            });
            Product.prototype.getPriceWithTax = function () { };
            return Product;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _title_decorators = [Log];
            __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } }, metadata: _metadata }, _title_initializers, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
/**********************************************************************/
// Lab 6 - Bai 4
function Log3(target, name, descriptor) {
    console.log('Method decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
var Products = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _getPriceWithTax_decorators;
    return _a = /** @class */ (function () {
            function Products(t, p) {
                this.title = (__runInitializers(this, _instanceExtraInitializers), void 0);
                this.title = t;
                this._price = p;
            }
            Object.defineProperty(Products.prototype, "price", {
                set: function (val) { },
                enumerable: false,
                configurable: true
            });
            Products.prototype.getPriceWithTax = function () { };
            return Products;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _getPriceWithTax_decorators = [Log3];
            __esDecorate(_a, null, _getPriceWithTax_decorators, { kind: "method", name: "getPriceWithTax", static: false, private: false, access: { has: function (obj) { return "getPriceWithTax" in obj; }, get: function (obj) { return obj.getPriceWithTax; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
/**********************************************************************/
// Lab 6 - Bai 5
function Autobind(_, _2, descriptor) {
    var originalMethod = descriptor.value;
    var adjDescriptor = PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get: function () {
            var boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}
var Printer = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _showMessage_decorators;
    return _a = /** @class */ (function () {
            function Printer() {
                this.message = (__runInitializers(this, _instanceExtraInitializers), 'This Works!');
            }
            Printer.prototype.showMessage = function () {
                console.log(this.message);
            };
            return Printer;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _showMessage_decorators = [Autobind];
            __esDecorate(_a, null, _showMessage_decorators, { kind: "method", name: "showMessage", static: false, private: false, access: { has: function (obj) { return "showMessage" in obj; }, get: function (obj) { return obj.showMessage; } }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
var p = new Printer();
p.showMessage();
var button = document.querySelector('button');
button.addEventListener('click', p.showMessage);
/**********************************************************************/
