import React, { createContext, useState, useContext, ReactNode } from "react";

interface IsClickedContextType {
  isClicked: boolean;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

const IsClickedContext = createContext<IsClickedContextType | undefined>(
  undefined
);

export function useIsClicked(): IsClickedContextType {
  const context = useContext(IsClickedContext);
  if (!context) {
    throw new Error("useIsClicked must be used within an IsClickedProvider");
  }
  return context;
}

interface IsClickedProviderProps {
  children: ReactNode;
}

export function IsClickedProvider({
  children,
}: IsClickedProviderProps): JSX.Element {
  const [isClicked, setIsClicked] = useState(false);

  const value: IsClickedContextType = {
    isClicked,
    setIsClicked,
  };

  return (
    <IsClickedContext.Provider value={value}>
      {children}
    </IsClickedContext.Provider>
  );
}
