// let a: number = 1;
// let b: string = 'one';
// let c: boolean[] = [true, false];

// Or, you can let Typescript do it for you.

// let d = 1;
// let e = 'one';
// let f = [true, false];

/* ======================= Exercise ======================= */

let a = 1 + 2;
let b = a + 3;
let c = {
  apple: a,
  banana: b,
};
let d = c.apple * 4;
// let e = 1 + [3]; //  error TS2365: Operator '+' cannot be applied to types 'number' and 'number[]'

console.log(c);
