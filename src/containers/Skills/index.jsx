import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../compontants/PageHaeaderContent";
import { SkillsData } from "./utils";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";
import "./styles.scss";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      < PageHeaderContent
        HeadersText="My Skills"
        Icons={<BsInfoCircleFill size={60} />}
      />

      {/* here we write our sikkls code */}
      <div className="skills__content-wrapper">
        {
          SkillsData.map((item, i) => (
            <div key={i} className="skills__content-wrapper__inner-text">
              <Animate
                play
                duration={1}
                delay={0.3}
                start={{
                  transform: "translateX(-200px)"
                }}
                end={{
                  transform: "translateX(0px)"
                }}
              >
                <h3 className="skills__content-wrapper__inner-text__category-data">{item.label}</h3>
                <div className="skills__content-wrapper__inner-text__progressbar">
                  {
                    item.data.map((skillsItem, j) => (
                      <AnimateKeyframes
                        play
                        duration={1}
                        keyframes={["opacity : 1", "opacity : 0"]}
                        iterationCount="1"
                      >
                        <div key={j} className="progress-wrapper">
                          <p>{skillsItem.SkillName}</p>
                          <Line
                            percent={skillsItem.percentage}
                            strokeWidth="2"
                            strokeColor="var(--yellow-theme-main-color)"
                            trailWidth="2"
                            strokeLinecap="square"
                          />

                        </div>

                      </AnimateKeyframes>
                    ))
                  }
                </div>
              </Animate>
            </div>
          ))
        }
      </div>
    </section>

  );
}


export default Skills;