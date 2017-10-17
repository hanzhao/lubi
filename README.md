lubi
===
A JavaScripter's best friend.

Lubi provides several simple extension functions for JavaScript builtin types,
which are useful especially in expression-only environments, e.g. JSX.

### Setup
```
npm i --save lubi
```
or
```
yarn add lubi
```

### Example
```javascript
import 'lubi'
3..map(x => x * 2) // [0, 2, 4]
1..to(5) // [1, 2, 3, 4, 5]
5..forEach(x => console.log(x)) // prints 0, 1, 2, 3, 4
1.5.toInt() // 1
'1.5'.toFloat() // 1.5
```

### More functions
Let's file an issue or open a pull request.
