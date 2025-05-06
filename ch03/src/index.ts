// function squareOf(n: number) {
//   return n * n;
// }

// console.log(squareOf(2));
// console.log(squareOf('z'));

/* ======================= Basic Types ======================= */

// // 'any'
// // Type 'any' behaves like JavaScript. Use it only as the very last resort.
// let a: any = 1;
// let b: any = ['two'];
// let c = a + b;

// console.log('🚀 ~ c:', c);

/* ===================================================================== */

// // 'unknown'

// let a: unknown = 10; // unknown
// let b = a === 10; // boolean
// let c = a + 10; // Invalid 'a' because type 'unknown'.
// if (typeof a === 'number') {
//   // You have to prove that it's truly number first before you can use it as number.
//   let d = a + 10; // number
// }

/* ===================================================================== */

// // 'boolean'

// let a = true; // boolean
// let b = false; // boolean
// const c = true; // true. Because you can't reassign 'const' values.
// let d: boolean = true; // boolean
// let e: true = true; // true
// let f: true = false; // You can't assign 'false' to type 'true'.

/* ===================================================================== */

// // 'number'
// // Everything about number. Integer, float, positive, negative, Infinity, etc.

// let a = 10; // number
// let b = Infinity * 0.1; // number
// const c = 10; // 10
// let d = a < b; // boolean
// let e: number = 10; // number
// let f: 10 = 10; // 10
// let g: 10 = 12; // Can't assign '12' to type '10';
// let oneMillion = 1_000_000; // number. Equivalent to 1000000.
// let twoMillion: 2_000_000 = 2000000;

/* ===================================================================== */

// // 'bigint'
// // It's number, but big. Anything beyond 2^53.

// let a = 10n; // bigint
// const b = 10n; // 10n
// let c = a + b; // bigint
// let d = a < 1234; // boolean
// let e = 88.5n; // Bigint must be integer.
// let f: bigint = 10n; // bigint
// let g: 10n = 10n; // 10n
// let h: bigint = 100; // Can't assign '100' to type 'bigint'.

/* ===================================================================== */

// // 'string'

// let a = 'joe'; // string
// let b = 'marcell'; // string
// const c = 'joe'; // joe
// let d = a + ' ' + b; // string
// let e: string = 'joe'; // string
// let f: 'joe' = 'joe'; // joe
// let g: 'joe' = 'marcell'; // Can't assign 'marcell' to type 'joe'.

/* ===================================================================== */

// // 'symbol'

// let a = Symbol('a'); // symbol
// let b: symbol = Symbol('b'); // symbol
// let c = a === b; // boolean
// let d = a + 'x'; // The '+' operator can't be applied to type 'symbol'.
// const e = Symbol('e'); // typeof e
// const f: unique symbol = Symbol('f'); // typeof f
// let g: unique symbol = Symbol('g'); // Type 'unique symbol' must use 'const'.
// let h = e === e; // boolean. 'unique symbol' is always equal to itself.
// let i = e === f; // Always return false. 'unique symbol' have no overlap.

/* ===================================================================== */

// // 'object'
// // This 'thing' has this shape. All it knows that after declaring it, you
// // might update its fields after you create it.

// let c: {
//   firstName: string;
//   lastName: string;
// } = {
//   firstName: 'Joe',
//   lastName: 'Marcell',
// };

// class Person {
//   constructor(public firstName: string, public lastName: string) {}
// }
// // Since the Person shape is the same as the one declared by 'c', TypeScript
// // accepts value reassignment from Person initiation.
// c = new Person('Mike', 'Marcell');

/* ===================================================================== */

// let a: {
//   b: number;
//   c?: string;
//   [key: number]: boolean;
// };
// a = { b: 1 };
// a = { b: 1, c: undefined };
// a = { b: 1, c: 'a' };
// a = { b: 1, 10: true };
// a = { b: 1, 10: true, 20: false };
// a = { 10: true }; // 'b' is missing.
// a = { b: 1, 10: 'ten' }; // Can't assign 'string' to type 'boolean'.

/* ===================================================================== */

// // 'readonly'

// let user: {
//   readonly firstName: string;
// } = {
//   firstName: 'Joe',
// };

// user.firstName; // string
// user.firstName = 'Mark'; // Can't reassign to 'readonly' value.

/* ===================================================================== */

// // 'Type Aliases'

// type Age = number;

// type Person = {
//   name: string;
//   age: Age;
// };

// let age = 24;

// let joe: Person = {
//   name: 'Joe',
//   age: age,
// };

/* ===================================================================== */

// // Type aliases are block-scoped.

// type Color = 'red';

// let x = Math.random() < 0.5;

// if (x) {
//   type Color = 'blue'; // This shadows the type alias above.
//   let color: Color = 'blue';
// } else {
//   let color: Color = 'red';
// }

/* ===================================================================== */

// // Union and Intersection
// // Union is the combination of two sets.
// // Intersection is the common points between two sets.

// type Cat = {
//   name: string;
//   purrs: boolean;
// };

// type Dog = {
//   name: string;
//   barks: boolean;
//   wags: boolean;
// };

// type CatOrDogOrBoth = Cat | Dog;
// type CatAndDog = Cat & Dog;

// // Cat
// let a: CatOrDogOrBoth = {
//   name: 'Zilly',
//   purrs: true,
// };

// // Dog
// a = {
//   name: 'Doge',
//   barks: true,
//   wags: true,
// };

// // Both
// a = {
//   name: 'Harmon',
//   purrs: true,
//   barks: true,
//   wags: false,
// };

// let b: CatAndDog = {
//   name: 'Domino',
//   purrs: true,
//   barks: false,
//   wags: true,
// };

/* ===================================================================== */

// // Arrays

// let a = [1, 2, 3]; // number[]
// let b = ['one', 'two']; // string[]
// let c: string[] = ['one', 'two']; // string[]
// let d = [1, 'two']; // (string | number)[]
// const e = [1, 'two']; // (string | number)[]

// let f = ['red']; // string[]
// f.push('blue'); // string[]
// f.push(true); // Argument of type 'boolean' is not assignable to parameter of type 'string'

// let g = []; // any[]
// g.push(1); // number[]
// g.push('two'); // (string | number)[]

// let h: number[] = []; // numberp[]
// h.push(1); // number[]
// h.push('two'); // Argument of type 'string' is not assignable to parameter of type 'number'.

// // TypeScript supports two syntaxes for arrays: T[] and Array<T>.
// let i: Array<string> = [];
// i.push('one');
// i.push(2); // Argument of type 'number' is not assignable to parameter of type 'string'.

// function buildArray() {
//   let a = [];

//   a.push(1);
//   a.push('two');

//   return a;
// }

// // The returned array type from 'buildArray' is the combination result based on operations
// // from inside 'buildArray' function.
// let resultArray = buildArray();
// resultArray.push(3);
// resultArray.push('four');
// resultArray.push(true); // Argument of type 'boolean' is not assignable to parameter of type 'string | number'.

/* ===================================================================== */

// // Tuples
// // Array, but it has fixed length. The values of each index have specified types.

// let a: [number] = [1];
// a = [1, 2, 3]; // Type '[number, number, number]' is not assignable to type '[number]'. Source has 3 element(s) but target allows only 1.

// let b: [string, string, number] = ['Mike', 'Callahan', 1998];
// b = ['Mary', 'Jane', 1999, 'Years']; // Type '[string, string, number, string]' is not assignable to type '[string, string, number]'. Source has 4 element(s) but target allows only 3.

// // Optional elements is also supported in Tuples.
// let trainFares: [number, number?][] = [[10.5], [7.5, 8.05], [12.5]];

// // Tuples supports rest elements.
// // A list of strings with at least 1 element.
// let friends: [string, ...string[]] = ['Joe', 'Mike', 'Callahan'];

// // A heterogeneous list.
// let list: [string, boolean, ...string[]] = ['Joe', true, 'Mike', 'Callahan'];

/* ===================================================================== */

// // Read-only array and tuple

// let as: readonly number[] = [1, 2, 3];
// let bs: readonly number[] = as.concat(4);
// let three = bs[2]; // number
// as[4] = 5; // Index signature is not allowed in 'readonly number[]' type.
// as.push(5); // 'push' does not exist in 'readonly number[]' type.

// // Many ways to declare array and tuple types.
// type A = readonly string[];
// type B = ReadonlyArray<string>;
// type C = Readonly<string[]>;

// type D = readonly [string, number];
// type E = Readonly<[string, number]>;

/* ===================================================================== */

// // null, undefined, void, and never

// // (a): A function that returns a number or null.
// function a(x: number) {
//   if (x > 10) {
//     return 10;
//   }

//   return null;
// }

// // (b): A function that returns undefined.
// function b() {
//   return undefined;
// }

// // (c): A function that returns 'void'.
// // Since it doesn't explicitly return anything, the return type is not undefined, but 'void'.
// function c() {
//   let a = 2 + 2;
//   let b = a * a;
// }

// // (d): A function that returns 'never' because it only throws error.
// function d() {
//   throw TypeError('I always error');
// }

// // (e): A function that returns 'never' because it's an endless loop.
// function e() {
//   while (true) {
//     console.log('Do something');
//   }
// }

/* ===================================================================== */

// // Enums

// // Naming convention is singular and capitalized first letter.
// enum Language {
//   English,
//   Spanish,
//   Russian,
// }

// // TypeScript will automatically infer a number as a value of each enums.
// // But you can also explicitly define it yourself.
// enum LanguageTwo {
//   English = 1,
//   Spanish = 2,
//   Russian = 3,
// }

// let myFirstLanguage = Language.Spanish; // 1
// let mySecondLanguage = LanguageTwo.Russian; // 3

// // You can use calculation as a value.
// enum LanguageThree {
//   English = 200,
//   Spanish = 200 + 300,
//   Russian, // TypeScript infers 501 since the previous number is 500.
// }

// // Using mixed string and number values.
// enum Color {
//   Red = '#c10000',
//   Blue = '#007ac1',
//   Pink = 0xc10050,
//   White = 255,
// }

// let red = Color.Red;
// let pink = Color.Pink;
// let blue = Color['Blue'];
// let black = Color[0];

/* ===================================================================== */

// // Exercise

// // 1. For each of these values, what type will TypeScript infer?

// let a = 1204; // number
// let b = 'apples and oranges'; // string
// const c = 'pineapple'; // string
// let d = [true, true, false]; // boolean[]
// let e = {
//   type: 'ficus',
// }; // { type: string }
// let f = [1, false]; // (number | boolean)[]
// const g = [3]; // number[]
// let h = null; // any
