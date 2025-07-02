import React from "react";
import { BsInfoCircleFill } from "react-icons/bs"
import PageHeaderContent from "../../compontants/PageHaeaderContent";
import { Animate } from "react-simple-animate";
import "./styles.scss";


const PersonalDetails = [
  {
    label: "Name:",
    value: "Gourav",
  },
  {
    label: "Age:",
    value: "20",
  },
  {
    label: "Phone Number:",
    value: 9368963104,
  },
  {
    label: "Address:",
    value: "ModiNager",
  },
  {
    label: "Language:",
    value: "Hindi , English",
  },
  {
    label: "Email:",
    value: "gouravchouhan6103@gmail.com",
  },
]

const AboutMe = `As a passionate and enthusiastic front-end developer, I specialize in crafting engaging and intuitive user interfaces.
A skilled frontend developer proficient in HTML, CSS, and Bootstrap and Tailwind CSS creates visually appealing and responsive web designs. With expertise in JavaScript and React, I build dynamic and interactive user interfaces. Additionally, i know the fundamental Basic of C programming language   my knowledge of Data Structures and Algorithms (DSA) in programming language C++ equips me with strong problem-solving skills and efficient coding practices. This combination of front-end development tools and algorithmic understanding enables me to develop both user-friendly and technically robust web applications. With a focus on user experience, I am dedicated to improving my skills in web design and development to deliver functional and attractive interfaces. I am eager to collaborate and learn from experienced developers to further refine my abilities and contribute to exciting web projects.`;

const About = () => {
  return (
    <section id="about" className="about">
      < PageHeaderContent
        HeadersText="About Me"
        Icons={<BsInfoCircleFill size={60} />}
      />
      <div className="about__content">
        {/* this one represent the both about or persional details section */}
        <div className="about__content__details">
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}

            end={{
              transform: "translateX(0px)",
            }}

          >
            <h2>Front end Developer</h2>
            <p>{AboutMe}</p>

          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}

            end={{
              transform: "translateX(0px)",
            }}

          >

            <h2>Personal Details</h2>
            <ul>
              {
                PersonalDetails.map((item, index) => (
                  <li key={index}>
                    <span className="tittle ">{item.label}</span>
                    <span className="value">{item.value}</span>
                  </li>
                ))
              }
            </ul>
          </Animate>
        </div>
        {/* this is our image section here */}
        <div className="about__content__images">
          {/* image */}
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}

            end={{
              transform: "translateX(0px)",
            }}

          >
            <img src="src/assets/AboutMeSecationImage.jpg" alt="" />
          </Animate>
        </div>
      </div>
    </section>
  );
}


export default About;