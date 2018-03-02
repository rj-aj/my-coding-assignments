const myNum: number = 5;
const myString: string = "Hello Universe";
const myArray: Array<number> = [1, 2, 3, 4];
let myObj: { [key: string]: (string | number) } = { name: 'Bill' };
let anythingVariable: any = 'Hey';
anythingVariable = 25;
let arrayOne: Array<boolean> = [true, false, true, true];
let arrayTwo: Array<number | string | boolean> = [1, 'abc', true, 2];
myObj = { x: 5, y: 10 };

// class

class MyNode {
    private _priv: number;
    constructor(public val: number) {
        this.val = 0;
        this.val = val;
     }
    doSomething(): void{
           this._priv =10
       } 
    }


let myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);



function myFunction() : void {
    console.log("Hello World");
    return;
}
function sendingErrors():never {
	throw new Error('Error message');
}

// // Javascript

// var myNum = 5;
// var myString = "Hello Universe";
// var myArray = [1, 2, 3, 4];
// var myObj = { name: 'Bill' };
// var anythingVariable = 'Hey';
// anythingVariable = 25;
// var arrayOne = [true, false, true, true];
// var arrayTwo = [1, 'abc', true, 2];
// myObj = { x: 5, y: 10 };
// // class
// var MyNode = /** @class */ (function () {
//     function MyNode(val) {
//         this.val = val;
//     }
//     MyNode.prototype.doSomething = function () {
//         this._priv = 10;
//     };
//     return MyNode;
// }());
// var myNodeInstance = new MyNode(1);
// console.log(myNodeInstance.val);
// function myFunction() {
//     console.log("Hello World");
//     return;
// }
// function sendingErrors() {
//     throw new Error('Error message');
// }
