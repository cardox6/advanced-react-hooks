// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

// const countReducer = (count, {newCount}) => count + newCount
// function countReducer(state, newState) {
//   return newState
// }

//2
// const countReducer = (state, action) => ({...state, ...action})

// function Counter({initialCount = 0, step = 1}) {
// 1
// const [count, setCount] = React.useReducer(countReducer, initialCount)
// const increment = () => setCount(count + step)

// 1+
// const [count, changeCount] = React.useReducer(countReducer, initialCount)
// const increment = () => changeCount(step)

// 2

// const [state, setState] = React.useReducer(countReducer, {
//   count: initialCount,
// })
// const {count} = state
// const increment = () => setState({count: count + step})

function countReducer(state, action) {
  const {type, step} = action
  switch (type) {
    case 'increment': {
      return {
        ...state,
        count: state.count + step,
      }
    }
    default: {
      throw new Error(`Unsupported action type: ${type}`)
    }
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
