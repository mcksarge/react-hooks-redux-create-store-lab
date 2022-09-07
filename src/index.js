// Note: createStore and candyReducer must be exported for the tests to run

export function createStore() {
  // write your createStore code here
  let state;

  function dispatch(action) {
    state = candyReducer(state, action);
    render();
  }

  function getState() {
    return state;
  }

  return {
    dispatch,
    getState
  }
}

export function candyReducer(state = [], action) {
  switch (action.type) {
    case "candies/add":
      return [...state, action.candy];
    default:
      return state;
  }
}

function render() {
  let container = document.getElementById("container");
  if (store.getState()) {
    container.textContent = store.getState().join(" ");
  } else {
    throw new Error("the store's state has not been defined yet");
  }
}

// Use your createStore function and the functions provided here to create a store.
let store = createStore();
store.dispatch({ type: "@@INIT" })
// Once the store is created, call an initial dispatch.
