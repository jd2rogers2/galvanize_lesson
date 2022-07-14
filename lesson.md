lesson:

1. so, what is a generator function? does anyone know?

// screen sharing and typing as i'm speaking
2. a generator function is similar to other functions in that it encapsulates a block of code that
  that is then reusable, by invoking it through out a larger codebase

3. a generator function is created when you use the asterisk after the keyword `function`,
  you also use the keyword `yield` inside of this function instead of `return`
  but it works in more or less the same way

4. so syntactic differences are again:
  1. we use an asterisk after the word function
  2. we use yield instead of return

** share screen with text editor **

5. the following differences, the way the function acts, are the tricky part
  when you invoke this function we are instead given a generator object and (!!) does not run the code inside of the block.
  the generator object has methods to control running the block of code we wrote,
  the one we're concerned most with today is .next() which will run our block of code

```
function* talkinBoutMyGenerator() {
  yield 1;
}

// { next: method,  }
const myGeneratorObj = talkinBoutMyGenerator();
console.log('myGeneratorObj', myGeneratorObj);

// { value: 1 }
const output = myGeneratorObj.next();
console.log('output.value', output.value);
```

4. ok let me repeat some of the key notes there
  1. asterisk following `function`
  2. `yield` instead of return
  3. calling the function doesn't run our block but instead returns an object with a predefined shape
  4. that object has a .next() method that runs our block

5. some more key differences are that, when we invoke the .next method, our function picks up where we last left off
  so you can think about that similar to a block of code that is inside of a loop
  on the second iteration of that loop, our block of code still runs but we now have different values for some local variables
  so this means that if we had a yield in there it would 

  another the last thing is that our `yield` yields an object with keys of `value` and `done`
  done is a boolean that simply tells us whether 
   


- explanation
  - it generates an object that you can manually manage the 
  - 
- real world usage
- go through 1 problem
- you'll do some other problems on your own