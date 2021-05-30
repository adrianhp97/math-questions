import React, { createContext, useReducer, useContext } from 'react';

export function makeStore(reducer, initialstate) {
  const storeContext = createContext(initialstate);
  const dispatchContext = createContext(null);

  const StoreProvider = ({ children }) => {
    const [store, dispatch] = useReducer(reducer, initialstate);

    return (
      <dispatchContext.Provider value={dispatch}>
        <storeContext.Provider value={store}>
          {children}
        </storeContext.Provider>
      </dispatchContext.Provider>
    )
  }

  const useStore = () => useContext(storeContext);

  const useDispatch = () => {
    const context = useContext(dispatchContext);

    if (context === null) {
      throw new Error('useDispatch must be used within a Provider');
    }
    return context
  }

  return [StoreProvider, useDispatch, useStore];
}
