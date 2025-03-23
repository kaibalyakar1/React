import React, { useContext } from "react";
import { BioContext } from "./contextApi";
import useBioContext from "./UseBioContext";

const Home = () => {
  const { name, age } = useBioContext();
  return (
    <div>
      my name is {name} <br /> and my age is {age}
    </div>
  ); //data consuming
};

export default Home;
