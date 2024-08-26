import React, { useState } from "react";
import Category from "./Category";
import SearchWidget from "./SearchWidget";
import { initialData } from "../utils/data";

const Dashboard = () => {
  const [data, setData] = useState(initialData);

  const addWidget = (categoryId, widget) => {
    setData((prevData) => {
      const updatedCategories = prevData.categories.map((category) => {
        if (category.id === categoryId) {
          return { ...category, widgets: [...category.widgets, widget] };
        }
        return category;
      });
      return { ...prevData, categories: updatedCategories };
    });
  };

  const removeWidget = (categoryId, widgetId) => {
    setData((prevData) => {
      const updatedCategories = prevData.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            widgets: category.widgets.filter(
              (widget) => widget.id !== widgetId
            ),
          };
        }
        return category;
      });
      return { ...prevData, categories: updatedCategories };
    });
  };

  return (
    <div>
      {data.categories.map((category) => (
        <Category
          key={category.id}
          category={category}
          addWidget={addWidget}
          removeWidget={removeWidget}
        />
      ))}
      {/* <SearchWidget widgets={allWidgets} /> */}
    </div>
  );
};

export default Dashboard;
