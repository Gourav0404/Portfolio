import React from "react";
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate'
import "./styles.scss";

const Home = () => {
  const Navigate = useNavigate();
  const handleNavigaterContactMePage = () => {
    Navigate("/Contact");
  }
  return (
    <div className="main__page">
      <section id="home" className="home">

        <div className="home__text-wrapper">

          <h1>Hello I,m Gourav Chouhan
            <br />
            MERN Stack Developer
          </h1>
        </div>
        {/* this div present our button section in our home page so let go start our button part */}


      </section >
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(550px)",
        }}

        end={{
          transform: "translateX(0px)",
        }}

      >
        <div className="home__contact-me">
          <button onClick={handleNavigaterContactMePage}>Hire Me</button>
        </div>
      </Animate>
    </div>

  );
}


export default Home;