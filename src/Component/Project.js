import "./Project.css";
import {  useParams  } from "react-router-dom";
import { useHistory } from "react-router-dom";
import React, {  useEffect } from 'react';


import "./AOS";



function Project() {

    let { albumID } = useParams();
    let history = useHistory();


    useEffect(() => {
    
        if(albumID)
        {
            window.open(`https://www.facebook.com/media/set/?vanity=759558020844572&set=a.${albumID}`);
            history.push("/");
        }
    

      });



  


  return (
    <>
      <div className="projectContainer" data-aos="fade-up">
        
        <h1 className="title">Link not available, please check out our facebook page for more information.</h1>

        {/* <Gallery photos={galleryData} direction={"column"} /> */}
      </div>
    </>
  );
}

export default Project;
