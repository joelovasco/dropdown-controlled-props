import React from "react";
import { useDropdownContext } from "../dropdown";

const DropdownToggle = ({ item, index, ...rest }) => {
  const { getToggleButtonProps } = useDropdownContext();
  return (
    <button {...getToggleButtonProps({ item, index, ...rest })}>open</button>
  );
};

export default DropdownToggle;
