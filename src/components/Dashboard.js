import React from "react";
import Category from "./Category";

const Dashboard = ({ categories, addWidget, removeWidget }) => {
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
