# React
- Created by Facebook
- Is a client-side JavaScript Library
- Quickly renders on the page.
- Companies transitioning more to React.
  - Netflix, Uber, Dropbox, AirBnB
- Works through **Components**

## Rules of JSX
  1. **Must** Export for it to be used.
  2. **Must** be imported to be used.
  3. **Must** be mounted to be used.
  4. **Must** only return **ONE** JSX Element.

# Creating a React App

- `npx create-react-app starting-react`
- **npx create-react-app [your-project-name]**
  -**npx create-react-app .** (within a directory)

## Points of Interest
- public
  - `index.html`: What is displayed to the browser.
- src
  - `index.js`: JavaScript being rendered to `index.html`.
  - `App.js`: Main point where components are mounted. This is being rendered within `index.js`.

# State
- Helps modify data based on a condition
  - ex: 
    - offline/online status
    - session token storage
- Utilizes types of hooks
- Requires to be imported

`import { useState } from 'react'`

## `useState()`
- Structure:
  - `keyword [ variable, function ] = hook(initial value);`
  - The Process:

```js
function useState(startingData) {
  function updateState(newData) {
    startingData = newData;
  }
  return [startingData, updateState]
}
```

## Re-rendering
- We can use a callback function to help with rendering processes.
- useState can take raw value but also a callback function.

ex: 
```jsx
const [ count, setCount ] = useState(0); // raw value
const [ count, setCount ] = useState(() => 0); // CB Function
```
- Callback function renders initial value ONCE.

