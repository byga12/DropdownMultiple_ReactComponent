import { Dropdown } from "./Dropdown/Dropdown";

import React from "react";

export const App = () => {
  const getActiveOptions = (activeOptions) => {
    console.log(activeOptions);
  };

  return (
    <Dropdown
      title="Filters"
      options={[
        "Free shipping",
        "On sale",
        "International Shipping",
        "Summer 2020 edition",
      ]}
      getActiveOptions={getActiveOptions}
    />
  );
};
