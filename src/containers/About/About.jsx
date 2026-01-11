import React, {useState , useEffect} from 'react';
import {motion} from "framer-motion";
import {urlFor, client} from "../../client"
import "./About.scss"

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
    .then((data)=>{
      setAbouts(data);
    })
  }, []);
  

  return (
    <>
      <h2 className="head-text">
        Everyday life is like <span>programming</span>, I guess.
        <br/>
        If you love something, you can put <span>beauty😉</span> into it
      </h2>

      <div className="app__profiles">
        {abouts.map((about,index)=>(
          <motion.div
            whileInView={{y:[100,0],opacity:[0,1]}}
            whileHover={{scale:1.1}}
            transition={{ duration: 0.5, type:"tween"}}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{marginTop:20}}>{about.title}</h2>
            <p className="p-text" style={{marginTop:10}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About;