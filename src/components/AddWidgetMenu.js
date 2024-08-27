import React, { useState, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";

const AddWidgetMenu = ({
  categories,
  selectedCategoryId,
  onToggleWidget,
  onCloseMenu,
}) => {
  const [activeTab, setActiveTab] = useState(selectedCategoryId);
  const [tempCategories, setTempCategories] = useState([]);

  // Initialize tempCategories with a deep copy of categories on component mount
  useEffect(() => {
    setTempCategories(JSON.parse(JSON.stringify(categories)));
  }, [categories]);

  const handleToggleWidget = (widgetId, categoryId) => {
    // Toggle the selection state in the tempCategories
    setTempCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              widgets: category.widgets.map((widget) =>
                widget.id === widgetId
                  ? { ...widget, isSelected: !widget.isSelected }
                  : widget
              ),
            }
          : category
      )
    );
  };

  const handleConfirm = () => {
    // Apply the temporary changes to the actual categories in the dashboard
    tempCategories.forEach((category) => {
      category.widgets.forEach((widget) => {
        if (
          widget.isSelected !==
          categories
            .find((c) => c.id === category.id)
            .widgets.find((w) => w.id === widget.id).isSelected
        ) {
          onToggleWidget(category.id, widget.id);
        }
      });
    });
    onCloseMenu(); // Close the menu
  };

  return (
    <div className="fixed inset-y-0 right-0 w-1/2 bg-gray-800 bg-opacity-80 z-50">
      <div className="bg-white h-full flex flex-col shadow-lg relative">
        <div className="flex justify-between items-center p-4 bg-blue-900">
          <h2 className="text-lg font-bold text-white">Add Widgets</h2>
          <button className="text-white" onClick={onCloseMenu}>
            <RxCross1 />
          </button>
        </div>

        <p className="ml-4 mt-4 mb-4">
          Personalize your dashboard by adding the following widgets
        </p>
        <div className="px-6 flex-1 overflow-y-auto">
          <div className="flex my-4">
            {tempCategories.map((category) => (
              <button
                key={category.id}
                className={`pr-4 py-2 border-b-2 font-semibold ${
                  activeTab === category.id
                    ? "border-blue-900 text-blue-900 font-bold"
                    : "border-transparent text-gray-400"
                }`}
                onClick={() => setActiveTab(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
          <div>
            {tempCategories
              .find((category) => category.id === activeTab)
              ?.widgets.map((widget) => (
                <div
                  key={widget.id}
                  className="flex space-x-2 items-center p-2 border-2 rounded-md font-semibold mb-2 border-blue-900 text-blue-900"
                >
                  <input
                    className="text-blue-900"
                    type="checkbox"
                    checked={widget.isSelected}
                    onChange={() => handleToggleWidget(widget.id, activeTab)}
                  />
                  <p>{widget.name}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="flex justify-end p-4">
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mr-2"
            onClick={onCloseMenu}
          >
            Cancel
          </button>
          <button
            className="bg-blue-900 text-white px-4 py-2 rounded-md"
            onClick={handleConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddWidgetMenu;
