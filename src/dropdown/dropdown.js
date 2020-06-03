import React, { createContext, useContext } from "react";
import { useSelect } from "downshift";
import cn from "classnames";
import DropdownMenu from "./dropdown-menu/dropdown-menu";
import DropdownLabel from "./dropdown-label/dropdown-label";
import DropdownToggle from "./dropdown-toggle/dropdown-toggle";
import DropdownItem from "./dropdown-item/dropdown-item";
import DropdownContext from "./dropdown-context/dropdown-context";

const DDContext = createContext();

const extendGetter = (getter, controlledProps) => additionalProps =>
  getter({
    ...controlledProps,
    ...additionalProps
  });

const setClassList = (block, element, modifier) => {
  const baseClassList = cn(
    `eb-dropdown__${element}`,
    modifier && `eb-dropdown__${element}--${modifier}`
  );

  if (!block) return baseClassList;

  return cn(
    baseClassList,
    `${block}__${element}`,
    modifier && `${block}__${element}--${modifier}`
  );
};

const useDropdownContext = () => {
  const context = useContext(DDContext);
  if (!context) {
    throw new Error(
      "Dropdown compound components cannot be rendered outside the Dropdown component"
    );
  }

  return context;
};

const Dropdown = ({
  children,
  className: consumerBlockClassName,
  type = "standard",
  items
}) => {
  const {
    isOpen,
    getItemProps: downshiftGetItemProps,
    getLabelProps: downshiftGetLabelProps,
    getToggleButtonProps: downshiftGetToggleButtonProps,
    getMenuProps: downshiftGetMenuProps,
    ...rest
  } = useSelect({
    items
  });

  const controlledProps = {
    "data-consumer-block-class-name": consumerBlockClassName,
    "data-dropdown-type": type
  };

  const getMenuProps = extendGetter(downshiftGetMenuProps, {
    ...controlledProps,
    className: setClassList(consumerBlockClassName, "menu", type)
  });

  const getLabelProps = extendGetter(downshiftGetLabelProps, {
    ...controlledProps,
    className: setClassList(consumerBlockClassName, "label", type)
  });

  const getToggleButtonProps = extendGetter(downshiftGetToggleButtonProps, {
    ...controlledProps,
    className: setClassList(consumerBlockClassName, "toggle-button", type)
  });

  const getItemProps = extendGetter(downshiftGetItemProps, {
    ...controlledProps,
    className: setClassList(consumerBlockClassName, "item", type)
  });

  return (
    <DDContext.Provider
      value={{
        isOpen,
        getMenuProps,
        getLabelProps,
        getToggleButtonProps,
        getItemProps,
        rest
      }}
    >
      {children}
    </DDContext.Provider>
  );
};

Dropdown.Context = DropdownContext;
Dropdown.Menu = DropdownMenu;
Dropdown.Toggle = DropdownToggle;
Dropdown.Label = DropdownLabel;
Dropdown.Item = DropdownItem;

export default Dropdown;
export { useDropdownContext };
