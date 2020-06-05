import React from "react";
import Dropdown from "./dropdown/dropdown";
import items from "./fruits.json";
import "./styles.scss";

export default function App() {
  return (
    <div className="App">
      <p>COMPOUND EXAMPLE</p>
      <Dropdown items={items} className="test" type="beta">
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
              className={item.name === "Grape" && "purple-text"}
            />
          ))}
        </Dropdown.Menu>
      </Dropdown>

      <hr />
      <p>COMPOUND AND CONTEXT EXAMPLE</p>
      <Dropdown items={items}>
        {/* Probably makes sense to buildout some sort of wrapper for the label and toggle lockup */}
        <div>
          <Dropdown.Label />
          <Dropdown.Toggle />
        </div>
        <Dropdown.Context>
          {({ getMenuProps, isOpen, getItemProps }) => (
            <ul {...getMenuProps()}>
              {isOpen &&
                items.map((item, index) => (
                  <>
                    <Dropdown.Item
                      key={`${item.name}-${index}`}
                      item={item.name}
                      index={index}
                    />

                    {index === items.length - 1 && (
                      <li
                        key={`${item.name}-${items.lenth}`}
                        {...getItemProps({
                          item: "Check out our vegtables",
                          index: items.length
                        })}
                      >
                        <button>{"Checkout our vegtables"}</button>
                      </li>
                    )}
                  </>
                ))}
            </ul>
          )}
        </Dropdown.Context>
      </Dropdown>
    </div>
  );
}
