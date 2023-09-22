import React from "react";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

export const TopLeftValuesContext = createContext<{
  values: { top: string; left: string };
  setValues: Dispatch<SetStateAction<{ top: string; left: string }>>;
}>({
  values: { top: "0%", left: "0%" },
  setValues: () => {},
});

export const TopLeftValuesProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [values, setValues] = useState({ top: "0%", left: "0%" });

  return (
    <TopLeftValuesContext.Provider value={{ values, setValues }}>
      {children}
    </TopLeftValuesContext.Provider>
  );
};

export const useTopLeftValues = () => useContext(TopLeftValuesContext);
