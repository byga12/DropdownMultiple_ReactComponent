// import React, { useState, useEffect } from "react";
import "./DropdownMultiple.sass";
export const DropdownMultiple = (props) => {
  const { title, options } = props;
  const handleChange = (e) => {
    const list = document.getElementById("list");
    const arrayOptions = [...list.children];
    const arrayOptionsEnabled = arrayOptions.filter(
      (option) => option.children[0].children[0].checked
    );
    const enabledFilters = arrayOptionsEnabled.map(
      (filter) => filter.children[0].textContent
    );
    props.getActiveOptions(enabledFilters);
  };
  return (
    <div
      className="container"
      onMouseLeave={() =>
        document.getElementById("list").classList.remove("dropdownShow")
      }
    >
      <h2
        onMouseOver={() =>
          document.getElementById("list").classList.add("dropdownShow")
        }
        className="title"
      >
        {title}
      </h2>
      <ul className="dropdown" id="list" onChange={handleChange} multiple>
        {options.map((option, index) => (
          <li key={index}>
            <label className="option" htmlFor={option}>
              <input className="checkbox" id={option} type="checkbox" />
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
