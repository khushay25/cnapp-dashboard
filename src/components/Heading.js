import React, { useState } from "react";
import { IoRefreshCircleOutline } from "react-icons/io5";
import { IoMdMore } from "react-icons/io";
import { FaClock } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import AddWidgetMenu from "./AddWidgetMenu";

function Heading({ category, addWidget, removeWidget, allCategories }) {
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

  if (!category) return null; // Early return if category is undefined

  return (
    <div className="flex justify-between items-center">
      <h1 className="font-bold text-xl py-4">CNAPP Dashboard</h1>
      <div className="flex items-center space-x-2">
        <button
          className="border-gray-300 bg-white p-2 text-sm border-2 rounded-md text-gray-400"
          onClick={() => setIsMenuOpen(true)}
        >
          Add Widget +
        </button>
        <button className="border-2 p-2 rounded-md border-gray-300 bg-white text-gray-400">
          <IoRefreshCircleOutline size={18} />
        </button>
        <button className="border-2 p-2 rounded-md border-gray-300 bg-white text-gray-400">
          <IoMdMore size={18} />
        </button>
        <button className="flex items-center border-2 p-2 rounded-md text-sm border-blue-900 bg-white text-blue-900 font-bold">
          <p className="border-r-2 border-blue-900 pr-2">
            <FaClock />
          </p>
          <p className="px-2">Last 2 days</p>
          <FaChevronDown />
        </button>
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
}

export default Heading;
