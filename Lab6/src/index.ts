/**********************************************************************/
// Lab 6 - Bai 1
function Logger(constructor: Function){
    console.log('Logging...');
    console.log(constructor);
}
@Logger
class Person {
    name = 'Max';
    constructor(){
        console.log('Creating person object...');
    }
}
const pers = new Person();
console.log(pers);
/**********************************************************************/
// Lab 6 - Bai 2
function Loggers(logString: string){
    return function(constructor: Function){
        console.log(logString);
        console.log(constructor);
    }
}
@Loggers('LOGGING - PERSON')
class Persons {
    name = 'Max';
    constructor(){
        console.log('Creating person object...');
    }
}
/**********************************************************************/
// Lab 6 - Bai 3
function Log(target: any, propertyName: string | symbol){
    console.log('Property decorator!');
    console.log(target, propertyName);
}
class Product{
    @Log
    title: string;
    private _price: number;
    set price(val: number){}
    constructor(t: string, p: number){
        this.title = t;
        this._price = p;
    }
    getPriceWithTax(){}
}
/**********************************************************************/
// Lab 6 - Bai 4
function Log3(target: any, name: string | symbol, descriptor: PropertyDescriptor){
    console.log('Method decorator');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
class Products{
    title: string;
    private _price: number;
    set price(val: number){}
    constructor(t: string, p: number){
        this.title = t;
        this._price = p;
    }
    @Log3
    getPriceWithTax(){}
}
/**********************************************************************/
// Lab 6 - Bai 5
function Autobind(_: any,_2: string,descriptor:PropertyDecorator){
    const originalMethod = descriptor.value;
    const adjDescriptor = PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get(){
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
}
class Printer{
    message = 'This Works!';
    @Autobind
    showMessage(){
        console.log(this.message);
    }
}
const p = new Printer();
p.showMessage();
const button = document.querySelector('button');
button.addEventListener('click',p.showMessage);
/**********************************************************************/
