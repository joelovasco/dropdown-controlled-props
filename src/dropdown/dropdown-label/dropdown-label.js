import React from "react";
import { useDropdownContext } from "../dropdown";

const DropdownLabel = props => {
  const { getLabelProps } = useDropdownContext();

  return <p {...getLabelProps()}>Select a fruit</p>;
};

export default DropdownLabel;
