import React, { useRef } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../compontants/PageHaeaderContent";
import { Animate } from "react-simple-animate";
import emailjs from '@emailjs/browser';
import "./styles.scss";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log("the form is sumbitted");
    emailjs.sendForm("service_odeo8rd", "template_ocgepe5", form.current, 'UwoWehhQehK1kVDoH',
    )
      .then(
        (result) => {
          console.log(result.text)
          console.log('SUCCESS!');
          // clear the form to after the form summbit here
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          console.log('FAILED...');
        },
      );
  }

  return (
    <section id="contact" className="contact">
      < PageHeaderContent
        HeadersText="Contact Me"
        Icons={<BsInfoCircleFill size={60} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">
            Contact Me
          </h3>

        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="contact__content__form">
            <div className="contact__content__form__wrapper">
              <form ref={form} onSubmit={sendEmail}>
                <div>
                  <label htmlFor="name" className="nameLable">Name</label>
                  <input required type={'text'} name="name" className="inputName" placeholder="Enter Name Here" />

                </div>
                <div>
                  <label htmlFor="email" className="emailLable">Email</label>
                  <input required type={'email'} name="email" className="inputEmail" placeholder="Enter Your Email ID" />

                </div>
                <div>
                  <label htmlFor="description" className="descriptionLable">Message Me</label>
                  <input required type={'text'} name="description" className="inputDescription" placeholder="Enter Your Message " />

                </div>

                <div>
                  <label htmlFor="number" className="numberLable">Contact Me</label>
                  <input required type={'number'} name="number" className="inputNumber" placeholder="Enter Your Number " />

                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </Animate>
      </div>
    </section>
  );
}


export default Contact;