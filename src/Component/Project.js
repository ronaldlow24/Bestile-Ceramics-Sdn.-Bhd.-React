import "./Project.css";
import Gallery from "react-photo-gallery";
import {  useParams  } from "react-router-dom";
import { useHistory } from "react-router-dom";

import useSWR from 'swr'

import "./AOS";

const fetcher = url => fetch(url).then(res => res.json());


function Project() {
    let { albumID } = useParams();
    // const { data, error } = useSWR('/api/user', fetcher)

    // if (error) return <div>failed to load</div>
    // if (!data) return <div>loading...</div>

    window.open(`https://www.facebook.com/media/set/?vanity=759558020844572&set=a.${albumID}`);

    let history = useHistory();
    history.push("/");


  return (
    <>
      <div className="projectContainer" data-aos="fade-up">
        
        <h1 className="title">Gallery</h1>
        <h1 className="title">{albumID}</h1>

        {/* <Gallery photos={galleryData} direction={"column"} /> */}
      </div>
    </>
  );
}

export default Project;
