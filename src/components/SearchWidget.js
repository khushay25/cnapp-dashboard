import React, { useState } from "react";

const SearchWidget = ({ widgets }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredWidgets = widgets.filter((widget) =>
    widget.name.toLowerCase().includes(searchQuery)
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search Widgets..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <div>
        {filteredWidgets.map((widget) => (
          <div key={widget.id}>{widget.name}</div>
        ))}
      </div>
    </div>
  );
};

export default SearchWidget;
