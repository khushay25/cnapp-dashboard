import React from "react";

const Widget = ({ widget, removeWidget }) => {
  return (
    <div className="bg-white border rounded-lg p-3">
      <h4 className="text-md font-bold">{widget.name}</h4>
      <p>{widget.content}</p>
      <button onClick={removeWidget}>Remove</button>
    </div>
  );
};

export default Widget;
