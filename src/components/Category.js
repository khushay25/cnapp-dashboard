import React from "react";
import Widget from "./Widget";
import AddWidgetMenu from "./AddWidgetMenu";

const Category = ({ category, addWidget, removeWidget }) => {
  return (
    <div className="mx-2 my-4">
      <h2 className="text-lg font-bold">{category.name}</h2>
      <div className="flex space-x-2">
        {category.widgets.map((widget) => (
          <Widget
            key={widget.id}
            widget={widget}
            removeWidget={() => removeWidget(category.id, widget.id)}
          />
        ))}
        <div className="bg-white border rounded-lg p-3">
          <button
            onClick={() =>
              addWidget(category.id, {
                id: Date.now(),
                name: "New Widget",
                content: "Random text",
              })
            }
          >
            + Add Widget
          </button>
        </div>
      </div>
      {/* <AddWidgetMenu
        availableWidgets={availableWidgets}
        onAddWidget={(widget) => addWidget(category.id, widget)}
      /> */}
    </div>
  );
};

export default Category;
