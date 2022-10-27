import React from "react";
import RootStore from "../store/rootStore";

const StoresContext = React.createContext(new RootStore());
export const useStore = () => React.useContext(StoresContext);
