import React from "react";
import { useDropdownContext } from "../dropdown";

const DropdownItem = ({ item, index, ...rest }) => {
  const { getItemProps } = useDropdownContext();
  return <li {...getItemProps({ item, index, ...rest })}>{item}</li>;
};

export default DropdownItem;
