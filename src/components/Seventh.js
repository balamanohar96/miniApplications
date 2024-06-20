import React from "react";

const Seventh = () => {
  return (
    <div className="para first">
      <div className="dropdown-container">
        <button className="dropdown-btn">Electronics</button>
        <div className="dropdown-content">
          <a href="#blank">TV</a>
          <a href="#blank">Camera</a>
          <a href="#blank">Laptop</a>
          <a href="#blank">Tablet</a>
        </div>
      </div>
      <div className="dropdown-container">
        <button className="dropdown-btn">Mobile Brands</button>
        <div className="dropdown-content">
          <a href="#blank">Samsung</a>
          <a href="#blank">Motrola</a>
          <a href="#blank">Apple</a>
          <a href="#blank">One-Plus</a>
          <a href="#blank">Redmi</a>
          <a href="#blank">Vivo</a>
          <a href="#blank">Oppo</a>
        </div>
      </div>
    </div>
  );
};

export default Seventh;
