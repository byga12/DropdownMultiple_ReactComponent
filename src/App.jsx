import { DropdownMultiple } from "./DropdownMultiple/DropdownMultiple";

import React from "react";

export const App = () => {
  const getActiveOptions = (activeOptions) => {
    console.log(activeOptions);
  };

  return (
    <>
      <DropdownMultiple
        title="Filters"
        options={[
          "Free shipping",
          "On sale",
          "International Shipping",
          "Summer 2020 edition",
        ]}
        getActiveOptions={getActiveOptions}
      />
    </>
  );
};
