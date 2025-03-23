import { createContext } from "react";

export const BioContext = createContext(); //context creation dont treat this as a variable it is a component
export const BioProvider = ({ children }) => {
  const name = "nerd";
  const age = 20;
  return (
    <BioContext.Provider value={{ name, age }}>{children}</BioContext.Provider>
  ); //mentioned childre is data provider
};
