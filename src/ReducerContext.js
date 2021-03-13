import React, { createContext, useReducer } from 'react'
import { initialState, reducer } from './reducer';

export const ReducerContext = createContext();

const ReducerProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ReducerContext.Provider value={{ state, dispatch}}>
      {props.children}
    </ReducerContext.Provider>
  )
}

export default ReducerProvider
