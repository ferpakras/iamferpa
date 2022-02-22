/* eslint-disable react-hooks/exhaustive-deps */
import React, { useReducer, useEffect } from 'react';
import { useLocalStorage } from '../hooks/UseLocalStorage';

const MainStateContext = React.createContext();

const MainDispatchContext = React.createContext();

const STORAGE_KEY = 'IAmFerpa.Front';

const initialState = {
  theme: {
    name: null,
  },
};

function MainReducer(state, action) {
  switch (action.type) {
    case 'saveTheme': {
      return {
        ...state,
        theme: {
          ...state.theme,
          ...action.value,
        },
      };
    }

    default: {
      return state;
    }
  }
}

function MainProvider({ children }) {
  const [storedValue, setValue] = useLocalStorage(STORAGE_KEY, initialState);
  const [state, dispatch] = useReducer(MainReducer, storedValue);

  useEffect(() => {
    setValue(state);
  }, [state]);
  return (
    <MainStateContext.Provider value={state}>
      <MainDispatchContext.Provider value={dispatch}>{children}</MainDispatchContext.Provider>
    </MainStateContext.Provider>
  );
}

function useMainState() {
  const context = React.useContext(MainStateContext);

  if (context === undefined) {
    throw new Error('useMainState must be used within a UserProvider');
  }

  return context;
}

function useMainDispatch() {
  const context = React.useContext(MainDispatchContext);

  if (context === undefined) {
    throw new Error('useMainDispatch must be used within a UserProvider');
  }

  return context;
}

export { MainProvider, useMainState, useMainDispatch };
