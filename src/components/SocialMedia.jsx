import React from "react";
import {BsTwitter,BsInstagram,BsLinkedin} from "react-icons/bs";
import "./SocialMedia.scss";

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div className="app__social-icons">
          <a href="https://www.linkedin.com/in/viswa-chaitanya"><BsLinkedin /></a>
        </div>
        <div className="app__social-icons">
          <a href="https://instagram.com/viswa_chaitanya_sai?igshid=MzMyNGUyNmU2YQ=="><BsInstagram /></a>
        </div>
        <div className="app__social-icons">
          <a href="https://x.com/viswa628"><BsTwitter /></a>
        </div>
    </div>
  )
}

export default SocialMedia