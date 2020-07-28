import "./main.css";
import React from "react";
import Header from '../header/header';
import Menu from '../menu/menu';
import Category from '../category/category';

function template() {
  return (
    <div className="main">
      <h1>
        main<Header />
      <Menu />
      <Category />
      </h1>
      
    </div>
  );
};

export default template;
