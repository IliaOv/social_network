import preloader from "../../../assets/images/preloader.svg";
import React from "react";

let Preloader = (props) => {
  return <div>
    <img style={{width: '50px'}} src={preloader} alt='preloader'/>
  </div>
};

export default Preloader;
