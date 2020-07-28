import React    from "react";
import template from "./menu.jsx";

class menu extends React.Component {
  render() {
    return template.call(this);
  }
}

export default menu;
