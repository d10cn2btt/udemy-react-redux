import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import PostsIndex from "../containers/posts_index";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Post List</Link>
          </li>
        </ul>

        <Route path="/" component={PostsIndex} />
      </div>
    </Router>
  )
}
