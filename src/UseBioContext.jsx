import { useContext } from "react";
import { BioContext } from "./contextApi";

const useBioContext = () => {
  const context = useContext(BioContext);

  return context;
};

export default useBioContext;
