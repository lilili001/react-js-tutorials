import { createStore } from "redux";

//reducer 就是修改状态的 可以return 一个数据出去,通过store.getState()可以获取到
const reducer = (initialState=0, action) => {
  if (action.type === "INC") {
    return initialState + 1;
  } else if (action.type === "DEC") {
    return initialState - 1;
  }
  return initialState;
}

const store = createStore(reducer, 1) //createStore(reducer,preloadedState)

store.subscribe(() => {
  console.log("store changed", store.getState());
})

store.dispatch({type: "INC"})
store.dispatch({type: "INC"})
store.dispatch({type: "INC"})
store.dispatch({type: "DEC"})
store.dispatch({type: "DEC"})
store.dispatch({type: "DEC"})
