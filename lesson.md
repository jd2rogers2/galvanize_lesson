lesson:

- ok we only have a quick 10 minutes right now so here's what we'll do:
- i'll run through what generators are
** take notes these are tricky
- if there's time:
  - real world usage
- you'll do some code challenges that i wrote on your own
  - go through 1 problem together

1. so, what is a generator function? does anyone know?

2. a generator function is similar to other functions in that it encapsulates a block of code
  that is then reusable, by invoking it throughout a larger codebase

3. a generator function is created when you use the asterisk after the keyword `function`,
  you also use the keyword `yield` inside of this function instead of `return`
  but it works in more or less the same way

** share screen with text editor **

```
function* talkinBoutMyGenerator() {
  yield 1;
}
```
4. so syntactic differences are again:
  1. we use an asterisk after the word function
  2. we use yield instead of return

5. the following differences, the way the function acts, are the tricky part
  when you invoke this function we are instead given a generator object and (!!) does not run the code inside of the block.
  the generator object has methods to control running the block of code we wrote,
  the one we're concerned most with today is .next() which will run our block of code

```
const myGeneratorObj = talkinBoutMyGenerator();
// { next: method }
console.log('myGeneratorObj', myGeneratorObj);

const output = myGeneratorObj.next();
// { value: 1 }
console.log('output', output);
```
4. ok let me repeat some of the key notes there
  1. asterisk following `function`
  2. `yield` instead of return
  3. calling the function doesn't run our block but instead returns an object with a predefined shape
  4. that object has a .next() method that runs our block

5. some more key differences are that, when we invoke the .next method, our function picks up where we last left off
  so you can think about this as similar to a block of code that is inside of a loop
  in that, in a for loop, on the second iteration, our block of code runs but we now have different values for some local variables
  so this means that if we had a yield inside of the loop it would yield/return inside of the first iteration and break out of our function
  then, on the second invokation of our .next, the next loop iteration would run

  another thing is that our `yield` yields an object with keys of `value` and `done`
  `done` is a boolean that simply tells us whether our function hit a yield or not
  and `value` is what the statement on the `yield` line evaluates to

  lastly: we pass arguments to the block via the invokation of the function and this value does not change across the multiple .next calls

```
function* talkinBoutMyGenerator() {
  console.log('before 1');
  yield 1;
  console.log('after 1');
  yield 2;
  console.log('after 2');
  // now done should be true
}

const output = myGeneratorObj.next();
// { value: 1 }
console.log('output.value', output.value);
console.log('output.next().value', output.next().value);
console.log('output.next().value (2)', output.next().value);
console.log('output.next().value (3)', output.next());
```
6. so one last review:
  1. asterisk following `function`
  2. `yield` instead of return
  3. calling the function doesn't run our block but instead returns an object with a predefined shape
  4. that object has a .next() method that runs our block
  5. `yield` breaks out and outputs much like `return` but it also suspends our functions process, which is then picked up on subsequent runs
  6. `yield` outputs a `{ value, done }` object

```
function* talkinBoutMyGenerator(num) {
  let i = 0;
  console.log('before 1');
  console.log('num', num);
  console.log('i', i);
  yield 1;

  i = 1;
  console.log('after 1');
  console.log('num', num);
  console.log('i', i);
  yield 2;
  console.log('after 2');
  console.log('num', num);
  console.log('i', i);
  // now done should be true
}

const output = myGeneratorObj.next(5);

```
  7. arguments are passed at invokation and do not change across runs

  the suspended and subsequent runs paradigm still works with loops
  ```
  function* talkinBoutMyGenerator(num) {
    let i = 0;
    while (i < num) {
      yield i += 1;
    }
  }
```
