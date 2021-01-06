import React from "react";
import "./PageLayout.css";
import Modal from "../modal/Modal";

const PageLayout = function ({ children, isModalVisible }) {
  return (
    <div className="container-pages">
      <div className="container-box">
        {children}
        {isModalVisible && <Modal />}
      </div>
    </div>
  );
};

export default PageLayout;
