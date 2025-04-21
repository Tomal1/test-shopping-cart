import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <>
      <h1>404 Not Found</h1>
      <Link to="/rock-paper-scissors/">Back</Link>
    </>
  );
};

export default NotFoundPage;
