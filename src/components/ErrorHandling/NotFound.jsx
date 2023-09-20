import { Link } from "react-router-dom";
import React from "react";
export default function NotFound() {
  return (
    <div className="center fill">

      <p><b>Nothing to see here!</b><br /><Link to="/">Click here to go to the home page</Link></p>


    </div>
  );
}