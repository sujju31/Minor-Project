"use client";
import { User } from "@/types/common";
// context.ts
import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
} from "react";

interface MyContextData {
  activeUser: User | undefined;
  setActiveUser: React.Dispatch<React.SetStateAction<User | undefined>>;
}

// Create the context with an initial value
const MyContext = createContext<MyContextData | undefined>(undefined);

// Create a provider component to wrap your app with
interface MyContextProviderProps {
  children: ReactNode;
}

export const MyContextProvider: React.FC<MyContextProviderProps> = ({
  children,
}) => {
  const [activeUser, setActiveUser] = useState<User>();
  // Provide the context value to the components in the tree
  const contextValue: MyContextData = { activeUser, setActiveUser };
  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

// Create a custom hook to use the context
export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};
