import React from "react";
import Dropdown from "./dropdown/dropdown";
import items from "./fruits.json";
import DropdownContext from "./dropdown/dropdown-context/dropdown-context";

export default function App() {
  return (
    <div className="App">
      <p>COMPOUND EXMAPLE</p>
      <Dropdown items={items}>
        {/* Probably makes sense to buildout some sort of wrapper for the label and toggle lockup */}
        <div>
          <Dropdown.Label />
          <Dropdown.Toggle />
        </div>
        <Dropdown.Menu>
          {items.map((item, index) => (
            <Dropdown.Item
              key={`${item.name}-${index}`}
              item={item.name}
              index={index}
            />
          ))}
        </Dropdown.Menu>
      </Dropdown>
      <hr />
      <p>CONTEXT EXMAPLE</p>
      <Dropdown items={items}>
        {/* Probably makes sense to buildout some sort of wrapper for the label and toggle lockup */}
        <div>
          <Dropdown.Label />
          <Dropdown.Toggle />
        </div>
        <DropdownContext>
          {({ getMenuProps, isOpen, getItemProps }) => (
            <div {...getMenuProps()}>
              {isOpen &&
                items.map((item, index) => (
                  <>
                    <Dropdown.Item
                      key={`${item.name}-${index}`}
                      item={item.name}
                      index={index}
                    />

                    {index === items.length - 1 && (
                      <p
                        {...getItemProps({
                          item: "Check out our vegtables",
                          index: items.length
                        })}
                      >
                        {"Checkout our vegtables"}
                      </p>
                    )}
                  </>
                ))}
            </div>
          )}
        </DropdownContext>
      </Dropdown>
    </div>
  );
}
