"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const msg = 'message';
console.log(msg);
const regex = new RegExp('ab+c');
const array = [1, 2, 3];
const set = new Set([1, 2, 3]);
const tuple = [0, 1];
const center = {
    x: 0,
    y: 0,
    z: 0,
    w: 0,
    v: "sting"
};
function add(a, b) {
    return a + b;
}
let add1;
add1 = (a, b) => a + b;
class Animal {
    constructor(name) {
        this.name = name;
    }
    move(distanceInMeters) {
        console.log(`${this.name} moved ${distanceInMeters}m`);
    }
}
class Bird extends Animal {
    fly(distanceInMeters) {
        console.log(`${this.name} moved ${distanceInMeters}m`);
    }
}
class AnimalAbstract {
    move(distanceInMeters) {
        console.log(distanceInMeters);
    }
    bark(voice) {
        console.log(voice);
    }
}
class Dog {
    move(distanceInMeters) {
        console.log(distanceInMeters);
    }
    bark(voice) {
        console.log(voice);
    }
}
class Queue {
    constructor() {
        this.data = [];
    }
    push(item) { this.data.push(item); }
    pop() { return this.data.shift(); }
}
const queue = new Queue();
queue.push(1);
//queue.push('sting')
const delay = (ms) => new Promise(res => setTimeout(res, ms));
const timer = () => __awaiter(void 0, void 0, void 0, function* () {
    yield delay(1000);
    console.log('1s');
    yield delay(1000);
    console.log('2s');
    yield delay(1000);
    console.log('3s');
});
const timerWithParams = (params) => {
    params.forEach((el) => __awaiter(void 0, void 0, void 0, function* () {
        yield delay(el.time);
        console.log(el.message);
    }));
};
timerWithParams([{ time: 5000, message: '5s' }, { time: 1000, message: '2s' }, { time: 1000, message: '3s' }]);
class Animal3 {
    constructor(name) {
        this.name = name;
    }
}
const sheep = new Animal3('bonny');
//sheep.name = "nonny" // error
function formatCmdLine(input) {
    let line = '';
    if (typeof input === 'string') {
        line = input.trim();
    }
    else {
        line = input.map(x => x.trim()).join(' ');
    }
    return line;
}
function rollDice() {
    return (Math.floor(Math.random() * 6));
}
// if (rollDice() === 8) {
//
// }
class Cat {
    meow() {
        console.log('meow');
    }
}
class Dog1 {
    bark() {
        console.log('woof');
    }
}
function speak(animal) {
    if (animal instanceof Cat) {
        animal.meow();
    }
    if (animal instanceof Dog1) {
        animal.bark();
    }
}
class Command {
    execute() {
        console.log('executing', this.commandLine());
    }
}
class GitResetCommand extends Command {
    commandLine() {
        return 'git reset --hard';
    }
}
class GitResetCommand2 {
    commandLine() {
        return 'git reset --hard';
    }
    execute() { }
}
function addFullName(obj) {
    return Object.assign(Object.assign({}, obj), { fullName: obj.firstName + " " + obj.lastName });
}
const logGet = (obj, key) => {
    return obj[key];
};
const logSet = (obj, key, value) => {
    obj[key] = value;
    return obj;
};
