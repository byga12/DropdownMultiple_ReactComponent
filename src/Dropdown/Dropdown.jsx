import React, { useState, useEffect } from "react";
import "./Dropdown.sass";
export const Dropdown = (props) => {
  const { title, options } = props;
  const handleChange = (e) => {
    e.preventDefault();
    const select = document.getElementById("select");
    const arrayOptions = [...select.options];
    const enabledOptions = arrayOptions.filter((option) => option.selected);

    console.log(enabledOptions.map((enabledOption) => enabledOption.text));
  };
  return (
    <div className="container">
      <label className="label" htmlFor="filters">
        Filter
      </label>
      <select className="select" id="select" onChange={handleChange} multiple>
        {options.map((option, index) => (
          <option className="multipleOption" key={index}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
