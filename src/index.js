import React from "react";
import ReactDOM from "react-dom";

import { Dropdown } from "./Dropdown/Dropdown";
ReactDOM.render(
  <React.StrictMode>
    <Dropdown
      title="Filters"
      options={[
        "Free shipping",
        "On sale",
        "International Shipping",
        "Summer 2020 edition",
      ]}
      isPluralOptionsEnabled={true}
    />
  </React.StrictMode>,
  document.getElementById("root")
);
