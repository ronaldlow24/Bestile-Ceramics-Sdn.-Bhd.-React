import "./Project.css";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import React, { useEffect } from "react";

import "./Component/AOS.js";

function Project() {
  let { albumID } = useParams();
  let history = useHistory();

  useEffect(() => {
    if (albumID) {
      window.open(
        `https://www.facebook.com/media/set/?vanity=759558020844572&set=a.${albumID}`
      );
      history.push("/work");
    }
  });

  return (
    <>
      <div className="projectContainer" data-aos="fade-up">
        <h1 className="title">
          Redirecting...
        </h1>
      </div>
    </>
  );
}

export default Project;
