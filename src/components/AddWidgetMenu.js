import React, { useState } from "react";

const AddWidgetMenu = ({ availableWidgets, onAddWidget }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedWidget, setSelectedWidget] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleAddWidget = () => {
    if (selectedWidget) {
      onAddWidget(selectedWidget);
      setIsOpen(false); // Close the menu after adding
    }
  };

  return (
    <div>
      <button onClick={toggleMenu}>
        {isOpen ? "Close Menu" : "Add Widget"}
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          <select onChange={(e) => setSelectedWidget(e.target.value)}>
            <option value="">Select Widget</option>
            {availableWidgets.map((widget) => (
              <option key={widget.id} value={widget.name}>
                {widget.name}
              </option>
            ))}
          </select>
          <button onClick={handleAddWidget}>Add</button>
        </div>
      )}
    </div>
  );
};

export default AddWidgetMenu;
