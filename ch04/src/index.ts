// ### Function ###

/* ===================================================================== */

// TypeScript won't infer the parameter types, except for Contextual Typing.
// function add(a: number, b: number) {
//   return a + b;
// }

/* TypeScript supports at least 5 ways of declaring functions. */

// // Named function
// function greet(name: string) {
//   return 'Hello ' + name;
// }

// // Function expression
// const greet2 = function (name: string) {
//   return 'Hello ' + name;
// };

// // Arrow function expression
// const greet3 = (name: string) => {
//   return 'Hello ' + name;
// };

// // Shorthand arrow function expression
// const greet4 = (name: string) => 'Hello ' + name;

// // Constructor function
// const greet5 = new Function('name', 'return "Hello " + name');

/* ===================================================================== */

/* Default and optional parameters */

// // Use "?" to make parameter(s) optional.
// // Put mandatory parameters first before the optional ones.
// function log(message: string, userId?: string) {
//   const time = new Date().toLocaleTimeString();
//   console.log(time, message, userId || 'Not signed in');
// }

// log('Page loaded');
// log('User signed in', 'asd838');

// // Default parameters don't have to come after the mandatory paramters,
// // unlike optional parameters.
// function log2(message: string, userId = 'Not signed in') {
//   const time = new Date().toLocaleTimeString();
//   console.log(time, message, userId);
// }

// log2('Page loaded log 2');
// log2('User signed in log 2', 'asd123');

// // You can provide type even to default parameters.

// type Context = {
//   appId?: string;
//   userId?: string;
// };

// function log3(message: string, context: Context = { userId: 'Not signed in' }) {
//   const time = new Date().toISOString();
//   console.log(time, message, context.userId);
// }

// log3('Page loaded log 3');
// log3('User signed in log 3', { userId: 'asd123' });

/* ===================================================================== */

/* Rest Parameters */

// function sum(numbers: number[]): number {
//   return numbers.reduce((total, n) => total + n, 0);
// }

// console.log(sum([1, 2, 3])); // 6

// // A function can only have one rest parameter, and it has to be the last one.
// function sumVariadicSafe(...numbers: number[]): number {
//   return numbers.reduce((total, n) => total + n, 0);
// }

// console.log(sumVariadicSafe(1, 2, 3)); // 6

/* ===================================================================== */

/* call, apply, bind */

// // Other ways to invoke a function.

// function add(a: number, b: number) {
//   return a + b;
// }

// console.log(add(1, 2));
// console.log(add.call(null, 1, 2));
// console.log(add.apply(null, [1, 2]));
// console.log(add.bind(null, 1, 2)());

/* ===================================================================== */

/* Typing 'this' keyword */

// // 'this' keyword is special even in TS. Just put what object you are
// // expecting in the function. Also, put it first before other parameters.
// // Although how 'this' keyword works remain the same. Meaning, even if
// // you type 'this' to be a Date, it won't make it as a date on execution.
// function fancyDate(this: Date) {
//   return `${this.getDate()}/${this.getMonth()}/${this.getFullYear()}`;
// }

// console.log(fancyDate.call(new Date())); // 1/8/2023

/* ===================================================================== */

/* Generator Functions */

// function* createFibonacciNumber() {
//   let a = 0;
//   let b = 1;

//   while (true) {
//     yield a;
//     [a, b] = [b, a + b];
//   }
// }

// const fibonacciGenerator = createFibonacciNumber();

// console.log(fibonacciGenerator.next()); // { value: 0, done: false }
// console.log(fibonacciGenerator.next()); // { value: 1, done: false }
// console.log(fibonacciGenerator.next()); // { value: 1, done: false }
// console.log(fibonacciGenerator.next()); // { value: 2, done: false }
// console.log(fibonacciGenerator.next()); // { value: 3, done: false }
// console.log(fibonacciGenerator.next()); // { value: 5, done: false }
// console.log(fibonacciGenerator.next()); // { value: 8, done: false }
// console.log(fibonacciGenerator.next()); // { value: 13, done: false }
// console.log(fibonacciGenerator.next()); // { value: 21, done: false }
// console.log(fibonacciGenerator.next()); // { value: 34, done: false }

/* ===================================================================== */

/* Call Signature */

// type Greet = (name: string) => string;

// type Log = (message: string, userId?: string) => void;

// type SumVariadicSafe = (...numbers: number[]) => number;

// const log: Log = (message, userId = 'Not signed in') => {
//   const time = new Date().toLocaleDateString();
//   console.log(message, time, userId);
// };

// log('Welcome');

/* ===================================================================== */

/* Contextual Typing */

// function times(fn: (index: number) => void, n: number) {
//   for (let i = 0; i < n; i += 1) {
//     fn(i);
//   }
// }

// // You don't have to annotate the function argument if you pass it inline.
// // TS will look at the function definition above and infer the 'fn'
// // parameter type automatically.
// times((n) => console.log(n), 4);

/* ===================================================================== */

/* Overloaded Function Types */

// // Shorthand call signature.
// type Log = (message: string, userId?: string) => void;

// // Full call signature equivalent of "log" type. It can be used for more
// // complex function type.
// type FullSignatureLog = {
//   (message: string, userId?: string): void;
// };

// type Reservation = {
//   from: Date;
//   to: Date | string;
//   destination: string | undefined;
// };

// type Reserve = {
//   (from: Date, to: Date, destination: string): Reservation;
//   (from: Date, destination: string): Reservation;
// };

// // If you want to combine multiple signatures, you need to combine them
// // by hand and expect multiple value types for your implemented function.
// let reserve: Reserve = (
//   from: Date,
//   toOrDestination: Date | string,
//   destination?: string,
// ) => ({
//   from,
//   to: toOrDestination,
//   destination,
// });

/* ===================================================================== */

/* Polymorphism */

// function filter(array: any, fn: any) {
//   const result = [];

//   for (let i = 0; i < array.length; i += 1) {
//     const item = array[i];

//     if (fn(item)) {
//       result.push(item);
//     }
//   }

//   return result;
// }

// // console.log(filter([1, 2, 3, 4, 5], (item: number) => item < 3));

// // Creating a function type that supports multiple types can get messy
// // real quick as you have to hand-write all of the types you wish to
// // support in your function.
// type Filter = {
//   (array: number[], fn: (item: number) => boolean): number[];
//   (array: string[], fn: (item: string) => boolean): string[];
//   // Moreover, 'object' type does not define the shape of the object.
//   (array: object[], fn: (item: object) => boolean): object[];
// };

// // Since we won't know what the type will be ahead of time, we are using
// // generic type parameter to act as a placeholder.
// // Depending on how the function is called, it will infer the type based on
// // the arguments, then assign the type to all of the generics (T) in the
// // type signature.
// type FilterGeneric = {
//   <T>(array: T[], fn: (item: T) => boolean): T[];
// };

// const filterGeneric: FilterGeneric = (array, fn) => {
//   const result = [];

//   for (let i = 0; i < array.length; i += 1) {
//     const item = array[i];

//     if (fn(item)) {
//       result.push(item);
//     }
//   }

//   return result;
// };

// // "T" is bound to 'number'.
// console.log(filterGeneric([1, 2, 3], (n) => n < 3));
// // "T" is bound to 'string'.
// console.log(filterGeneric(['a', 'b'], (letter) => letter !== 'b'));
// // "T" is bound to '{ name: string }'.
// console.log(
//   filterGeneric(
//     [
//       {
//         name: 'Joe',
//       },
//       {
//         name: 'Mary',
//       },
//       {
//         name: 'Jonathan',
//       },
//     ],
//     (person) => person.name.startsWith('J'),
//   ),
// );

// // Where You Can Declare Generics

// type FilterOne = {
//   <T>(array: T[], fn: (item: T) => boolean): T[];
// };

// type FilterTwo<T> = {
//   (array: T[], fn: (item: T) => boolean): T[];
// };

// type FilterThree = <T>(array: T[], fn: (item: T) => boolean) => T[];

// type FilterFour<T> = (array: T[], fn: (item: T) => boolean) => T[];

// function filterFive<T>(array: T[], fn: (item: T) => boolean): T[] {
//   return [];
// }

// // Map function example

// function map(array: unknown[], fn: (item: unknown) => unknown): unknown[] {
//   const result = [];

//   for (let i = 0; i < array.length; i += 1) {
//     const item = array[i];

//     result[i] = fn(item);
//   }

//   return result;
// }

// // You can assign as many generics as you need. Treat it like a variable
// // which TS will use as placeholder for your call signature.
// type MapOne = <T, U>(array: T[], fn: (item: T) => U) => U[];

// const mapOne: MapOne = (array, fn) => {
//   const result = [];

//   for (let i = 0; i < array.length; i += 1) {
//     const item = array[i];

//     result[i] = fn(item);
//   }

//   return result;
// };

// console.log(mapOne([1, 2, 3], (item) => `Item no. ${item}`));

/* ===================================================================== */

/* Generic Type Inference */

// function map<T, U>(array: T[], fn: (item: T) => U): U[] {
//   return [];
// }

// // TS can automatically infer the generics.
// map(['one', 'two', 'three'], (item) => item.startsWith('t'));

// // Or, you can explicitly annotate your generics.
// map<string, boolean>(['one', 'two', 'three'], (item) => item.startsWith('t'));

// // But it's all or nothing. You have to annotate all of the generics, or
// // you don't. If you only annotate one generic when it needs two, it will
// // throw an error.
// // map<string>(['one', 'two', 'three'], (item) => item.startsWith('t')); // Expected 2 type arguments, but got 1.

// // Since TS infer generics from the arguments that you pass to function,
// // sometimes the function don't know exactly the type of your generics.
// let promise = new Promise<number>((resolve) => resolve(45));
// // For example the promise 'then' method where 'result' is inferred to {}
// // by default. Therefore, you have to explicitly annotate the promise
// // generic type when creating a promise. Only then your promise 'then'
// // method will expect the same type as you annotate above.
// // Just imagine a 'T' generic assigned to the global signature.
// promise.then((result) => result * 4);

/* ===================================================================== */

/* Generic Type Aliases */

// type MyEvent<T> = {
//   target: T;
//   type: string;
// };

// // let myEvent: MyEvent<HTMLButtonElement | null> = {
// //   target: document.querySelector('#myButton')],
// //   type: 'click',
// // };

// type TimedEvent<T> = {
//   event: MyEvent<T>;
//   from: Date;
//   to: Date;
// };

/* ===================================================================== */

/* Bounded Polymorphism */

// type TreeNode = {
//   value: string;
// };

// type LeafNode = TreeNode & {
//   isLeaf: true;
// };

// type InnerNode = TreeNode & {
//   children: [TreeNode] | [TreeNode, TreeNode];
// };

// const a: TreeNode = { value: 'a' };
// const b: LeafNode = { value: 'b', isLeaf: true };
// const c: InnerNode = { value: 'c', children: [b] };

// function mapNode<T extends TreeNode>(
//   node: T,
//   fn: (value: string) => string,
// ): T {
//   return {
//     ...node,
//     value: fn(node.value),
//   };
// }

// const a1 = mapNode(a, (_) => _.toUpperCase());
// const b1 = mapNode(b, (_) => _.toUpperCase());
// const c1 = mapNode(c, (_) => _.toUpperCase());

// console.log(a1, b1, c1);

/* ===================================================================== */

/* Bounded polymorphism with multiple constraints */

// type HasSides = { numberOfSides: number };
// type SidesHaveLength = { sideLength: number };

// function logPerimeter<Shape extends HasSides & SidesHaveLength>(
//   s: Shape,
// ): Shape {
//   console.log(s.numberOfSides * s.sideLength);
//   return s;
// }

// type Square = HasSides & SidesHaveLength;
// const square: Square = { numberOfSides: 4, sideLength: 3 };

// logPerimeter(square); // Type 'Square', logs '12'.

/* ===================================================================== */

/* Using bounded polymorphism to model arity */

// function call<T extends unknown[], R>(fn: (...args: T) => R, ...args: T): R {
//   return fn(...args);
// }

// function fill(length: number, value: string): string[] {
//   return Array.from({ length }, () => value);
// }

// console.log(call(fill, 5, 'a'));

/* ===================================================================== */

/* Generic Type Defaults */

// type MyEventWithDefault<T = HTMLElement> = {
//   target: T;
//   type: string;
// };

// type MyEventWithBound<T extends HTMLElement> = {
//   target: T;
//   type: string;
// };

// // Generic type with defaults must appear after generics without default.

// // Good
// type MyEventGood<
//   Type extends string,
//   Target extends HTMLElement = HTMLElement
// > {
//   target: Target;
//   type: Type;
// }

// // Bad
// type MyEventBad<
//   Target extends HTMLElement = HTMLElement,
//   Type extends string
// > {
//   target: Target;
//   type: Type;
// }
