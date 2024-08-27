import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Heading from "./components/Heading";
import { initialData } from "./utils/data";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState(initialData.categories);

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const filteredCategories = categories.map((category) => ({
    ...category,
    widgets: category.widgets.filter((widget) =>
      widget.name.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  const defaultCategory = categories.length > 0 ? categories[0] : null;

  const addWidget = (categoryId, widget) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              widgets: [...category.widgets, { ...widget, isSelected: true }],
            }
          : category
      )
    );
  };

  const removeWidget = (categoryId, widgetId) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              widgets: category.widgets.filter(
                (widget) => widget.id !== widgetId
              ),
            }
          : category
      )
    );
  };

  return (
    <div>
      <Header onSearchChange={handleSearchChange} />
      <div className="bg-blue-50 px-10 pb-10">
        <Heading
          category={defaultCategory}
          addWidget={addWidget}
          removeWidget={removeWidget}
          allCategories={categories}
        />
        <Dashboard
          categories={filteredCategories}
          addWidget={addWidget}
          removeWidget={removeWidget}
        />
      </div>
    </div>
  );
}

export default App;
