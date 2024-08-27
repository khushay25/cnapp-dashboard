import React, { useEffect, useState } from "react";
import Category from "./Category";
import { initialData } from "../utils/data";

const Dashboard = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const storedCategories = localStorage.getItem("dashboardCategories");
    if (storedCategories) {
      setCategories(JSON.parse(storedCategories));
    } else {
      setCategories(initialData.categories);
    }
  }, []);

  const updateLocalStorage = (updatedCategories) => {
    localStorage.setItem(
      "dashboardCategories",
      JSON.stringify(updatedCategories)
    );
  };

  const addWidget = (categoryId, widget) => {
    const updatedCategories = categories.map((category) =>
      category.id === categoryId
        ? { ...category, widgets: [...category.widgets, widget] }
        : category
    );
    setCategories(updatedCategories);
    updateLocalStorage(updatedCategories);
  };

  const removeWidget = (categoryId, widgetId) => {
    const updatedCategories = categories.map((category) =>
      category.id === categoryId
        ? {
            ...category,
            widgets: category.widgets.filter(
              (widget) => widget.id !== widgetId
            ),
          }
        : category
    );
    setCategories(updatedCategories);
    updateLocalStorage(updatedCategories);
  };

  return (
    <div className="p-4">
      {categories.map((category) => (
        <Category
          key={category.id}
          category={category}
          addWidget={addWidget}
          removeWidget={removeWidget}
          allCategories={categories}
        />
      ))}
    </div>
  );
};

export default Dashboard;
