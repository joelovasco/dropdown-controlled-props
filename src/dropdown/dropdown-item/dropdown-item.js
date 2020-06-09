import React from "react";
import cn from "classnames";
import { useDropdownContext } from "../dropdown";

const DropdownItem = ({ item, index, className, ...rest }) => {
  const {
    getItemProps,
    highlightedIndex,
    getBlocksWith
  } = useDropdownContext();
  return (
    <li
      {...getItemProps({
        item,
        index,
        className: cn(
          highlightedIndex === index && getBlocksWith("__item--highlighted"),
          className
        ),
        ...rest
      })}
    >
      {item}
    </li>
  );
};

export default DropdownItem;
