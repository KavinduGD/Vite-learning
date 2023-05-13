import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <h2>NavBar</h2>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/customer">Customer</Link>
      </div>
      <div>
        <Link to="/equipment">Equipment</Link>
      </div>
    </div>
  );
}
