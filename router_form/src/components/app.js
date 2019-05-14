import React from "react";
import {Link} from "react-router-dom";

export default function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Post List</Link>
        </li>
        <li>
          <Link to="/post">Create a new post</Link>
        </li>
      </ul>
    </div>
  )
}
