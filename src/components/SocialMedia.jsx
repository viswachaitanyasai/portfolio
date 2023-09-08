import React from "react";
import {BsTwitter,BsInstagram,BsLinkedin} from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <BsLinkedin/>
        </div>
        <div>
            <BsInstagram/>
        </div>
        <div>
            <BsTwitter/>
        </div>
    </div>
  )
}

export default SocialMedia