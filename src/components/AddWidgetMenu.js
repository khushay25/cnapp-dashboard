import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const AddWidgetMenu = ({
  categories,
  selectedCategoryId,
  onToggleWidget,
  onCloseMenu,
}) => {
  const [activeTab, setActiveTab] = useState(selectedCategoryId);
  const [widgetSelections, setWidgetSelections] = useState(() =>
    categories.reduce((acc, category) => {
      acc[category.id] = category.widgets.reduce((widgetAcc, widget) => {
        widgetAcc[widget.id] = widget.isSelected;
        return widgetAcc;
      }, {});
      return acc;
    }, {})
  );

  const handleToggleWidget = (widget, categoryId) => {
    const updatedSelections = { ...widgetSelections };
    updatedSelections[categoryId][widget.id] =
      !updatedSelections[categoryId][widget.id];
    setWidgetSelections(updatedSelections);
  };

  const handleConfirm = () => {
    // Notify parent about all widget selections changes
    categories.forEach((category) => {
      category.widgets.forEach((widget) => {
        if (widgetSelections[category.id]?.[widget.id] !== widget.isSelected) {
          onToggleWidget(category.id, widget.id); // Update dashboard
        }
      });
    });
    onCloseMenu();
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
            {categories.map((category) => (
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
            {categories
              .find((category) => category.id === activeTab)
              ?.widgets.map((widget) => (
                <div
                  key={widget.id}
                  className="flex space-x-2 items-center p-2 border-2 rounded-md font-semibold mb-2 border-blue-900 text-blue-900"
                >
                  <input
                    className="text-blue-900"
                    type="checkbox"
                    checked={widgetSelections[activeTab]?.[widget.id] || false}
                    onChange={() => handleToggleWidget(widget, activeTab)}
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
