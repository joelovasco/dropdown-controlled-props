import React from "react";
import { useDropdownContext } from "../dropdown";

const DropdownContext = ({ children }) => {
  const context = useDropdownContext();
  return children(context);
};

export default DropdownContext;
