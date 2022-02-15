import React from "react";

export const Button = () => {
  return <div>Button</div>;
};

export const ToggleButton = ({ id, options, setSelected, selected }) => {
  return (
    <div id={`${id}`}>
      {options.map(({ value, label }, index) => (
        <div key={`key-${value}`}>
          <label htmlFor={`id-${value}`}>{label}</label>
          <input
            type="radio"
            name={`${id}`}
            id={`id-${value}`}
            value={value}
            onChange={(e) => setSelected(e.target.value)}
            checked={value === selected}
          />
        </div>
      ))}
    </div>
  );
};
