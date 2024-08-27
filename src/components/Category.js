import React, { useState } from "react";
import Widget from "./Widget";
import AddWidgetMenu from "./AddWidgetMenu";

const Category = ({ category, addWidget, removeWidget, allCategories }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleWidget = (categoryId, widgetId) => {
    const category = allCategories.find((cat) => cat.id === categoryId);
    const widget = category.widgets.find((wid) => wid.id === widgetId);

    if (widget.isSelected) {
      removeWidget(categoryId, widgetId);
    } else {
      addWidget(categoryId, widget);
    }
  };

  return (
    <div className="mx-2 my-4">
      <h2 className="text-lg font-bold my-2">{category.name}</h2>
      <div className="flex space-x-2">
        {category.widgets.map((widget) => (
          <Widget
            key={widget.id}
            widget={widget}
            removeWidget={() => removeWidget(category.id, widget.id)}
          />
        ))}
        <div className="bg-white border rounded-lg p-3 w-1/3 flex justify-center items-center">
          <button
            className="border-gray-300 p-2 border-2 rounded-md text-gray-400"
            onClick={() => setIsMenuOpen(true)}
          >
            + Add Widget
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <AddWidgetMenu
          categories={allCategories}
          selectedCategoryId={category.id}
          onToggleWidget={handleToggleWidget}
          onCloseMenu={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
};

export default Category;
