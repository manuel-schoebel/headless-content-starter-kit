"use client";

import {
  useMemo,
  useCallback,
  useReducer,
  createContext,
  useContext,
} from "react";

interface IState {
  isConsentManagerInitialized: boolean;
}

const initialState = {
  isConsentManagerInitialized: false,
};

type IAction = {
  type: "SET_CONSENT_MANAGER_INITIALIZED";
  value: boolean;
};

export const GlobalContext = createContext<IState | any>(initialState);
GlobalContext.displayName = "GlobalContext";

function globalReducer(state: IState, action: IAction) {
  switch (action.type) {
    case "SET_CONSENT_MANAGER_INITIALIZED": {
      return {
        ...state,
        isConsentManagerInitialized: true,
      };
    }
  }
}

type Props = {
  children?: React.ReactNode;
};
export const GlobalContextProvider = ({ children, ...rest }: Props) => {
  const [state, dispatch] = useReducer(globalReducer, {
    ...initialState,
  });

  const setConsentManagerInitialized = useCallback(
    () => dispatch({ type: "SET_CONSENT_MANAGER_INITIALIZED", value: true }),
    [dispatch]
  );

  const value = useMemo(
    () => ({
      ...state,
      setConsentManagerInitialized,
    }),
    [state]
  );

  return (
    <GlobalContext.Provider value={value} {...rest}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error(`useGlobal must be used within a GlobalProvider`);
  }
  return context;
};
