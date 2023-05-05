import React, { useRef, useState, useEffect } from "react";
import css from "../styles/home.module.css";
import codepen from "../images/codepen.png";
import github from "../images/github.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitter.png";
import logo from "../images/logo.png";
import cresent from "../images/moon(1).png";
import menu from "../images/menu(2).png";
import prog from "../images/prog.jpg";
import programmer from "../images/programmer.jpg";
import download from "../images/download.png";
import javascript from "../images/javascript.png";
import html from "../images/html.png";
import cssLogo from "../images/css.png";
import redux from "../images/redux.png";
import react from "../images/react.png";
import tailwind from "../images/tailwind.png";
import bootstrap from "../images/bootstrap.png";
import git from "../images/git.png";
import githubLogo from "../images/githubs.png";
import typescript from "../images/typescript.png";
import sass from "../images/sass.png";
import sky from "../images/sky.jpg";
import Marquee from "react-fast-marquee";
import Carousels from "./home_features/Carousel";
import * as yup from "yup";
import { Form, Formik, Field, ErrorMessage } from "formik";
import location from "../images/locations.png";
import phone from "../images/phone.png";
import email from "../images/email.png";
import sendMessage from "../images/send.png";
import dark from "../images/night.png";
import light from "../images/day.png";
import mouse from "../images/mouse.png";
import downArrow from "../images/downArrow.png";
import Lenis from "@studio-freight/lenis";
import TypeWriterEffect from "react-typewriter-effect";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

const Home = () => {
  const form = useRef();
  const nameRef = document.querySelector(".container");

  const lenis = new Lenis({});

  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  const [theme, setTheme] = useState("#191624");
  const [color, setColor] = useState("white");

  const handleTheme = () => {
    if (theme == "#191624") {
      setTheme("white");
    } else {
      setTheme("#191624");
    }

    if (color == "white") {
      setColor("black");
    } else {
      setColor("white");
    }
    // alert(theme);
  };

  const styleColor = {
    color: `${color}`,
  };

  const btnColor = {
    color: "white",
  };

  const scrollpage = (component) => {
    lenis.scrollTo(component, {
      duration: 2,
      immediate: false,
      direction: "vertical",
      easing: (x) =>
        x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2,
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });
  };

  return (
    <>
      <style>
        {`

// .menuStrips{
//     background-color: red
// }

.globe1::before{
          background-image: url(${javascript}) ;
         background-size: contain;
     
}


.globe1::after {
    background-image: url(${typescript}) ;
    background-size: cover;
  }


.globe2::before{
    background-image: url(${html}) ;
   background-size: contain;
}

.globe3::before{
    background-image: url(${cssLogo}) ;
   background-size: cover;
}

.globe3::after {
    background-image: url(${sass}) ;
   background-size: cover;
  }

.globe4::before{
    background-image: url(${redux}) ;
   background-size: cover;
}

.globe5::before{
    background-image: url(${react}) ;
   background-size: cover;
}

.globe6::before{
    background-image: url(${bootstrap}) ;
   background-size: cover;
   z-index:10
}

.globe7::before{
    background-image: url(${git}) ;
   background-size: contain;
}

.globe8::before{
    background-image: url(${githubLogo}) ;
   background-size: cover;
}

.sectionTheme{
background-color:${theme} ;
color:${color} ;
transition: 0.5s
}

.pcMenuStrip{

  background-color:${theme} ;
}

.pcMenuStrip li{
  cursor: pointer
}

`}
      </style>

      <div className={`${css.container} container `} id="homes">
        <ul className={`${css.pcMenuStrip} sectionTheme pcMenuStrip`}>
          <li>Michael</li>

          <li onClick={() => scrollpage(homes)}> Home </li>
          <li onClick={() => scrollpage(about)}> About </li>
          <li onClick={() => scrollpage(skills)}> Skills </li>
          <li onClick={() => scrollpage(portfolio)}> Portfolio </li>
          <li onClick={() => scrollpage(contact)}> Contactme </li>
          <li>
            <img src={color == "white" ? light : dark} onClick={handleTheme} />
          </li>
        </ul>
        <div className={`${css.section} ${css.section1} sectionTheme `}>
          <ul className={css.socials}>
            <li>
              <img src={github} />
            </li>
            <li>
              <img src={linkedin} />
            </li>
            <li>
              <img src={codepen} />
            </li>
            <li>
              <img src={twitter} />
            </li>
          </ul>

          <img className={css.logo} src={logo} alt="Name Logo" />
          <div className={css.messageBox}>
            <h1>
              <TypeWriterEffect
                textStyle={{ fontFamily: "Red Hat Display", fontSize: "0.9em" }}
                startDelay={50}
                cursorColor="black"
                text="Hi, I am Michael Solomon "
                typeSpeed={90}

                // scrollArea={myAppRef}
              ></TypeWriterEffect>
            </h1>
            <h3>Frontend Developer</h3>
            <p>
              I am a software engineer living in the San Francisco Bay Area. I
              am passionate about learning, building apps, and coding. I love to
              play with my friends and family.
            </p>
          </div>

          <div className={css.btnaboutMe} style={btnColor}>
            About Me
          </div>
          <ul className={css.scrollDown} onClick={() => scrollpage(foot)}>
            <li>
              <img src={mouse} className={css.mouse} />
            </li>
            <li>scroll down</li>
            <li>
              <img src={downArrow} />
            </li>
          </ul>

          <ul className={`${css.menuStrip} menuStrips`}>
            <li> Michael </li>
            <li>
              <img
                src={color == "white" ? light : dark}
                onClick={handleTheme}
              />
            </li>
            <li>
              <img src={menu} />
            </li>
          </ul>
        </div>

        <div
          className={`${css.section} ${css.section2} sectionTheme `}
          id="about"
        >
          <span>
            <h1>About Me</h1> <h4>My Introduction</h4>
          </span>

          <img className={css.programmerImage} src={prog} />
          <div className={css.developmentProgressBox}>
            <p>
              A passionate Frontend Web developer using web technologies to
              build amazing products and focusing on solving problems for
              different niches and different industries using the power of
              technology.
            </p>

            <ul className={css.developmentProgress}>
              <li>
                18+
                <br />
                Months <br />
                experience
              </li>
              <li>
                8+
                <br />
                Completed <br />
                projects
              </li>
            </ul>
          </div>

          <div className={css.btnDownload} style={btnColor}>
            Download CV <img src={download} />
          </div>
        </div>

        <div
          className={`${css.section} ${css.section3} sectionTheme `}
          id="skills"
          style={{ backgroundImage: `url(${sky})`, backgroundSize: "cover" }}
        >
          {/* <div className={`${css.space}`}>
          <div className={`${css.sun} ${css.spun} `}></div>
          <div className={`${css.planet} ${css.planet1} ${css.spun}`}></div>
          <div className={`${css.planet} ${css.planet2} ${css.spun}`}></div>
          <div className={`${css.planet} ${css.planet3} ${css.spun}  `}></div>
          <div className={`${css.planet} ${css.planet4} ${css.spun}   `}></div>
          <div className={`${css.planet} ${css.planet5} ${css.spun}  `}></div>
          <div className={`${css.planet} ${css.planet6} ${css.spun}  `}></div>
          <div className={`${css.planet} ${css.planet7} ${css.spun}  `}></div>
          <div className={`${css.planet} ${css.planet8} ${css.spun}  `}></div>
        </div> */}
          <h1>Skills And Tools</h1>
          <div className={`${css.solarSystem}`}>
            <div className={`${css.sun} ${css.spun}`}>
              <span>Me</span>
            </div>
            <div
              className={`${css.globe} ${css.globe1} ${css.spun} globe1 `}
            ></div>
            <div
              className={`${css.globe} ${css.globe2} ${css.spun} globe2`}
            ></div>
            <div
              className={`${css.globe} ${css.globe3} ${css.spun} globe3`}
            ></div>
            <div
              className={`${css.globe} ${css.globe4} ${css.spun} globe4`}
            ></div>
            <div
              className={`${css.globe} ${css.globe5} ${css.spun} globe5`}
            ></div>
            <div
              className={`${css.globe} ${css.globe6} ${css.spun} globe6`}
            ></div>
            <div
              className={`${css.globe} ${css.globe7} ${css.spun} globe7`}
            ></div>
            <div
              className={`${css.globe} ${css.globe8} ${css.spun} globe8`}
            ></div>
          </div>
          <div className={css.skillsMessage}>
            <Marquee
              style={{
                // border: "1px solid white",
                marginTop: "10vh",
                maxWidth: "90vw",
                height: "5vh",
                fontSize: "1.6em",
                color: "white",
              }}
            >
              &nbsp; My tools and skills include javascript, typescript , html,
              css ,sass ,react ,redux ,bootstrap ,tailwind ,wordpress ,shopify
              ,git ,github ,vscode &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Marquee>
          </div>
        </div>

        <div
          className={`${css.section} ${css.section4} sectionTheme `}
          id="portfolio"
        >
          <h1 style={styleColor}>Portfolio</h1>
          <h3 style={styleColor}> Most recent works </h3>

          <Carousels className={css.carousel} />
        </div>

        <div
          className={`${css.section} ${css.section5} sectionTheme `}
          id="contact"
        >
          <h1 style={styleColor}> Contact Me </h1>
          <h3 style={styleColor}> Get in touch </h3>

          <ul className={css.contactInfo}>
            <li>
              <img src={phone} />
              <span>
                <h2> Call Me </h2> +233 50-343-9290
              </span>
            </li>

            <li>
              <img src={email} />
              <span>
                <h2> Email </h2> ekmensolomon@gmail.com
              </span>
            </li>

            <li>
              <img src={location} />
              <span>
                <h2> Location </h2>
                Ghana - Pokuase Holy-Hills, Virginia Walk
              </span>
            </li>
          </ul>

          <Formik
            className={css.Formik}
            initialValues={{
              Email: "",
              Name: "",
              Subject: "",
              Message: "",
            }}
            validationSchema={yup.object({
              Email: yup
                .string()
                .email("Invalid email address")
                .required("email cannot be left blank"),
              Name: yup.string().required("Name cannot be left blank"),
              Subject: yup.string().required("Subject cannot be left blank"),
            })}
            onSubmit={(values, event) => {
              // alert(JSON.stringify(values));
            }}
          >
            {(props) => (
              <div className={css.form}>
                <Form style={{ height: "90vh" }} className={css.allform}>
                  <ul>
                    <li>
                      <Field
                        className={`${css.nameField} ${css.Field}`}
                        name="Name"
                        type="text"
                        placeholder="Name"
                      ></Field>
                      <label className={css.nameError}>
                        <ErrorMessage name="Name"></ErrorMessage>
                      </label>
                    </li>

                    <li>
                      <Field
                        className={`${css.emailField} ${css.Field}`}
                        name="Email"
                        type="text"
                        placeholder="Email"
                      ></Field>
                      <label className={css.emailError}>
                        <ErrorMessage name="Email"></ErrorMessage>
                      </label>
                    </li>

                    <li>
                      <Field
                        className={`${css.subjectField} ${css.Field}`}
                        name="Subject"
                        type="text"
                        maxLength={15}
                        placeholder="Subject"
                      ></Field>
                      <label className={css.subjectError}>
                        <ErrorMessage name="Phone"></ErrorMessage>
                      </label>
                    </li>

                    <li>
                      <Field
                        className={`${css.messageField} ${css.Field}`}
                        name="Comments"
                        type="text"
                        as="textarea"
                        maxLength={200}
                        placeholder="Message"
                      ></Field>
                    </li>
                  </ul>
                  <button
                    type="submit"
                    disabled={!props.isValid}
                    className={css.btnSend}
                  >
                    Submit <img src={sendMessage} />
                  </button>
                </Form>
              </div>
            )}
          </Formik>
        </div>

        <div
          className={`${css.section} ${css.section6} sectionTheme `}
          id="foot"
          style={{
            backgroundColor: color == "black" ? "#6a5bd0" : "#0D0E1C",
            color: "white",
          }}
        >
          <h1 style={{ color: "white" }} onClick={() => scrollpage(homes)}>
            Michael
          </h1>
          <h3 style={{ color: "white" }}>Frontend developer</h3>
          <ul>
            <li onClick={() => scrollpage(about)}>
              <h3>About Me</h3>
            </li>
            <li onClick={() => scrollpage(skills)}>
              <h3>Skills</h3>
            </li>
            <li onClick={() => scrollpage(portfolio)}>
              <h3>Portfolio</h3>
            </li>
            <li onClick={() => scrollpage(contact)}>
              <h3>Contact me</h3>
            </li>

            <li> &copy; mensolportfolio. All right reserved </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
