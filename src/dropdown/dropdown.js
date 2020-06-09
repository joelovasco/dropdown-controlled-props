import React, { createContext, useContext } from "react";
import { useSelect } from "downshift";
import cn from "classnames";
import { useBemBuilder } from "./utils/use-bem-builder";
import DropdownMenu from "./dropdown-menu/dropdown-menu";
import DropdownLabel from "./dropdown-label/dropdown-label";
import DropdownToggle from "./dropdown-toggle/dropdown-toggle";
import DropdownItem from "./dropdown-item/dropdown-item";
import DropdownContext from "./dropdown-context/dropdown-context";

const DDContext = createContext();

const extendGetter = (getter, controlledProps) => ({
  className: componentSpecficClassName,
  ...restOfAdditionalProps
} = {}) => {
  const { className: classList, ...rest } = getter({
    ...controlledProps,
    ...restOfAdditionalProps
  });

  return {
    ...rest,
    className: cn(classList, componentSpecficClassName)
  };
};

// const setClassList = (block, element, modifier) => {
//   const baseClassList = cn(
//     `eb-dropdown__${element}`,
//     modifier && `eb-dropdown__${element}--${modifier}`
//   );

//   if (!block) return baseClassList;

//   return cn(
//     baseClassList,
//     `${block}__${element}`,
//     modifier && `${block}__${element}--${modifier}`
//   );
// };

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
  className: consumerBlockClassName = "",
  type = "standard",
  items
}) => {
  const getBlocksWith = useBemBuilder(["eb-dropdown", consumerBlockClassName]);

  const {
    getItemProps: downshiftGetItemProps,
    getLabelProps: downshiftGetLabelProps,
    getToggleButtonProps: downshiftGetToggleButtonProps,
    getMenuProps: downshiftGetMenuProps,
    ...downshiftProps
  } = useSelect({ items });

  const controlledProps = {
    "data-consumer-block-class-name": consumerBlockClassName,
    "data-dropdown-type": type
  };

  const getMenuProps = extendGetter(downshiftGetMenuProps, {
    ...controlledProps,
    className: cn(getBlocksWith("__menu"), getBlocksWith(`__menu--${type}`))
  });

  const getLabelProps = extendGetter(downshiftGetLabelProps, {
    ...controlledProps,
    className: cn(getBlocksWith("__label"), getBlocksWith(`__label--${type}`))
  });

  const getToggleButtonProps = extendGetter(downshiftGetToggleButtonProps, {
    ...controlledProps,
    className: cn(
      getBlocksWith("__toggle-button"),
      getBlocksWith(`__toggle-button--${type}`)
    )
  });

  const getItemProps = extendGetter(downshiftGetItemProps, {
    ...controlledProps,
    className: cn(getBlocksWith("__item"), getBlocksWith(`__item--${type}`))
  });

  return (
    <DDContext.Provider
      value={{
        getBlocksWith,
        getMenuProps,
        getLabelProps,
        getToggleButtonProps,
        getItemProps,
        ...downshiftProps
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
