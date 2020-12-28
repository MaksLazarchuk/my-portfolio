import React from "react";
import "./PageLayout.css";

const PageLayout = function ({ children }) {
  return <div className="container-pages">{children}</div>;
};

export default PageLayout;
