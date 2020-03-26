import React, { Component } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fas);

class Todoitem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{title}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success" onClick={handleEdit}>
            <FontAwesomeIcon icon={["fas", "pen"]} />
          </span>
          <span className="mx-2 text-danger" onClick={handleDelete}>
            <FontAwesomeIcon icon={["fas", "trash"]} />
          </span>
        </div>
      </li>
    );
  }
}

export default Todoitem;
