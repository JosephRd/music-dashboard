import React from "react";
import "./PageTitle.css";

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
  return (
    <div className="pagetitle">
      <h1>{props.title}</h1>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">
              <i className="bi bi-house-door"></i>
            </a>
          </li>
          <li className="breadcrumb-item active">Music Dashboard</li>
        </ol>
      </nav>
    </div>
  );
};

export default PageTitle;
