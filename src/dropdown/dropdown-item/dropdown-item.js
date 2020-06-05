import React from "react";
import { useDropdownContext } from "../dropdown";

const DropdownItem = ({ item, index, ...rest }) => {
  const { getItemProps, highlightedIndex } = useDropdownContext();
  return (
    <li
      {...getItemProps({ item, index, ...rest })}
      style={highlightedIndex === index ? { backgroundColor: "#bde4ff" } : {}}
    >
      {item}
    </li>
  );
};

export default DropdownItem;
