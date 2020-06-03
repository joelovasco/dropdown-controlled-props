import React from "react";
import { useDropdownContext } from "../dropdown";

const DropdownMenu = ({ children }) => {
  const { isOpen, getMenuProps } = useDropdownContext();
  return <ul {...getMenuProps()}>{isOpen && children}</ul>;
};

export default DropdownMenu;
