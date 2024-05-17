/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import "./NotFound.css";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-text">
        <div>
          <h1 className="font-lato text-center text-4xl">404</h1>
        </div>
        <div className="mt-4">
          <h2 className="font-lato text-center text-xl">Page Not Found</h2>
        </div>
        <div className="mt-6">
          <Link to="/">
            <h1 className="font-lato text-center text-2xl">Back To HomePage</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
