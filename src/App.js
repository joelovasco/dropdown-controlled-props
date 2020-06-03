import React from "react";
import Dropdown from "./dropdown/dropdown";
import items from "./fruits.json";

export default function App() {
  return (
    <div className="App">
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
    </div>
  );
}
