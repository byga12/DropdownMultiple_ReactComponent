# Dropdown multiple

A React component made in create-react-app with Sass.
Dropdown menu for multiple options, whenever an option is checked/unchecked it makes a console.log() showing the active options.

## Basic usage

    // <Dropdown/> receives two props, title="string" and options=["string", "string", "string"...]
    <Dropdown
      title="Filters"
      options={[
        "Free shipping",
        "On sale",
        "International Shipping",
        "Summer 2020 edition",
      ]}
    />
