import React from "react";
import { Link } from "react-router-dom";

function Breadcrumb({ items }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {items.map((item, index) =>
          item.active ? (
            <li key={index} className="breadcrumb-item active" aria-current="page">
              {item.label}
            </li>
          ) : (
            <li key={index} className="breadcrumb-item">
              <Link to={item.path}>{item.label}</Link>
            </li>
          )
        )}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
