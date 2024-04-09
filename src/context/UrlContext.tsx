import React, { useEffect, useState } from "react";

interface TData {
  url: string;
}

interface TUrlContext {
  setState: (value: Partial<TData>) => void;
  data: TData;
}

interface TContextProvider {
  children: React.ReactNode;
}

const UrlContext = React.createContext<TUrlContext>({
  data: {
    url: "",
  },
  setState: () => {},
});

export const useUrlContext = () => {
  return React.useContext(UrlContext);
};

const UrlContextProvider: React.FC<TContextProvider> = ({ children }) => {
  const [state, setState] = useState<TData>({
    url: "",
  });

  const onSetData = (value: Partial<TData>) => {
    setState((prev) => ({
      ...prev,
      ...value,
    }));
  };

  return (
    <UrlContext.Provider
      value={{
        data: state,
        setState: onSetData,
      }}
    >
      {children}
    </UrlContext.Provider>
  );
};

export default UrlContextProvider;
