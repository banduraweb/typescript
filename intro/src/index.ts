const msg: string = 'message'
console.log(msg);

const regex: RegExp = new RegExp('ab+c');

const array: Array<number> = [1,2,3]

const set: Set<number> = new Set([1,2,3])



const tuple: [number, number] = [0,1];

interface Point {
    x: number,
    y: number
}

interface zPoint extends Point {
    z: number
}

interface W {
    w: number,
    v?: string
}

const center: zPoint & W = {
    x: 0,
    y: 0,
    z: 0,
    w: 0,
    v: "sting"
}

function add(a: number, b: number):number{
    return a+b
}

type Add = (a: number, b: number)=>number
let add1: Add;

add1 = (a,b)=>a+b;

class Animal {
   protected name: string;
    constructor(name: string) {
        this.name = name
    }
    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m`);
    }
}

class Bird extends Animal {
    fly(distanceInMeters: string){
        console.log(`${this.name} moved ${distanceInMeters}m`);
    }
}

abstract class AnimalAbstract {
    public move(distanceInMeters: number) {
        console.log(distanceInMeters);
    }
    public bark(voice: number) {
        console.log(voice);
    }
}

class Dog implements AnimalAbstract {
    public move(distanceInMeters: number) {
        console.log(distanceInMeters);
    }
    public bark(voice: number) {
        console.log(voice);
    }
}


class Queue<T> {
    private data: T[] = [];
    push(item: T) {this.data.push(item)}
    pop(): T | undefined {return this.data.shift()}
}

const queue = new Queue<number>();
queue.push(1)
//queue.push('sting')

const delay = (ms: number)=> new Promise(res=>setTimeout(res, ms))
const timer = async():Promise<void>=>{
    await delay(1000)
    console.log('1s')
    await delay(1000)
    console.log('2s')
    await delay(1000)
    console.log('3s')
}
///timer()
interface Timer {
    time: number,
    message: string
}
const timerWithParams = (params: Timer[])=>{
    params.forEach(async (el:Timer):Promise<void> =>{
        await delay(el.time)
        console.log(el.message)
    })
}
timerWithParams([{time: 5000, message: '5s'},{time: 1000, message: '2s'},{time: 1000, message: '3s'}])


class Animal3 {
    readonly name: string;
    constructor(name: string) {
        this.name = name
    }

}

const sheep = new Animal3('bonny');
//sheep.name = "nonny" // error


function formatCmdLine(input: string | string[]) {
    let line = '';
    if(typeof input === 'string'){
        line = input.trim()
    } else {
        line = input.map(x=>x.trim()).join(' ')
    }
    return line

}

type direction = 'north' | 'east'

type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;

function rollDice() {
    return (Math.floor(Math.random() * 6)) as DiceValue;
}

// if (rollDice() === 8) {
//
// }

class Cat {
    meow(){
        console.log('meow');
    }
}

class Dog1 {
    bark(){
        console.log('woof');
    }
}

type Animal1 = Cat | Dog1

function speak(animal: Animal1){
    if(animal instanceof Cat){
        animal.meow()
    }
    if(animal instanceof Dog1){
        animal.bark()
    }

}


abstract class Command {
    abstract commandLine(): string
    execute(){
        console.log('executing', this.commandLine());
    }
}

class GitResetCommand extends Command{
    commandLine():string{
        return 'git reset --hard'
    }
}

class GitResetCommand2 implements Command{
    commandLine():string{
        return 'git reset --hard'
    }
    execute(){}
}

type Person = {
    name: string,
    email: string
}

type PeronDictionary = {
    [key: string] : Person
}


function addFullName<T>(obj: T & {firstName: string, lastName: string}): T & {fullName: string}{
    return {
        ...obj,
        fullName: obj.firstName + " " + obj.lastName
    }
}

type Person1 = {
    name: string,
    email: string
}

const logGet = <Obj, Key extends keyof Obj>(obj: Obj, key: Key)=>{
    return obj[key]
}

const logSet = <Obj, Key extends keyof Obj>(obj: Obj, key: Key, value: Obj[Key])=>{
    obj[key] = value
    return obj
}