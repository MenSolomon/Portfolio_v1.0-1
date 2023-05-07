import React, { useEffect } from "react";
import css from "../styles/chatteau.module.css";
import sipPic from "../images/food1.jpg";
import rightArrow from "../images/right-arrow.png";
import caseImage from "../images/case1.png";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { coverPage1Move } from "../animationVariants/sipAndSavour-Variant";
import { coverPage2Move } from "../animationVariants/sipAndSavour-Variant";
import { yoyoVariant } from "../animationVariants/sipAndSavour-Variant";
import { yoyoVariant2 } from "../animationVariants/sipAndSavour-Variant";
import { yoyoVariant3 } from "../animationVariants/sipAndSavour-Variant";
import { useLocation } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import { useInView } from "react-intersection-observer";

const Chatteau = () => {
  const lenis = new Lenis({});
  lenis.on("scroll", (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  //paralax effect
  const { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["-10%", "250%"]);

  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.9,
    triggerOnce: true,
  });

  const { ref: caseRef, inView: caseInView } = useInView({
    threshold: 0.9,
    triggerOnce: true,
  });

  const { ref: colorHide, inView: colorInView } = useInView({
    threshold: 0.9,
    // delay: 1000,
    triggerOnce: true,
  });

  const { ref: fontRef, inView: fontInView } = useInView({
    threshold: 0.9,
    triggerOnce: true,
  });

  return (
    <motion.div
      initial="hidden"
      animate="move"
      className={css.container}
      id="cont"
    >
      <motion.div
        className={css.coverPage}
        variants={coverPage1Move}
        // ref={scrollRef}
        //
        // -section
      ></motion.div>

      <motion.div className={css.coverPage2} variants={coverPage2Move}>
        <ul className={css.animateLi}>
          <motion.li variants={yoyoVariant}></motion.li>
          <motion.li variants={yoyoVariant2}></motion.li>
          <motion.li variants={yoyoVariant3}></motion.li>
        </ul>
      </motion.div>

      <ul className={css.menuStrip} id="menu">
        <Link to="/" style={{ color: "#292e41", textDecoration: "none" }}>
          {" "}
          <li> Home </li>{" "}
        </Link>{" "}
        <li onClick={() => scrollpage(nextwork)}> Next Work </li>{" "}
        <li> contact </li>
      </ul>
      <div
        className={`${css.section1} ${css.section} `}
        style={{
          backgroundImage: `url(${sipPic})`,
        }}
      ></div>
      <div className={`${css.section2} ${css.section} `}>
        <h1>SIP AND SAVOR</h1>

        <motion.h2
        // style={{ y }}
        >
          Introduction
        </motion.h2>
        <p>
          Sip And Savor aims to be a easy to use software <br />
          Sip And Savor aims to be a easy to use software <br />
          Sip And Savor aims to be a easy to use software <br />
          Sip And Savor aims to be a easy to use software
        </p>

        <div className={css.visitBtn}>
          Visit website <img src={rightArrow} />
        </div>
      </div>

      <div className={`${css.section3} ${css.section} `}>
        <div
          className={` ${css.analysisHeader}  ${
            headerInView ? css.analysisHeaderAnimation : ""
          }`}
          ref={headerRef}
        >
          <h2>Analysis & Preparations</h2>
          <h1> Branding </h1>
        </div>

        <div
          ref={caseRef}
          className={`${css.imageHolder} ${
            caseInView ? css.caseImageAnimation : ""
          } `}
          style={{
            backgroundImage: `url(${caseImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>

        <div className={css.customerMessage}>
          <h3>
            Built with customers in <br />
            mind, and love.
          </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit,
            porro labore. Ipsa molestiae minus tenetur assumenda, iure eum
            voluptate incidunt inventore. Amet quam beatae hic aspernatur
            recusandae, iure perferendis quaerat?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Blanditiis recusandae, odit inventore
            itaque quod ipsa magni adipisci consequatur nostrum sed.
          </p>
        </div>

        <ul
          className={`${css.projectColor}  ${
            colorInView ? css.colorCodesAnimation : ""
          } `}
          ref={colorHide}
        >
          <li>
            <div> </div> Deep Blue
          </li>
          <li>
            <div> </div> Red
          </li>
          <li>
            <div> </div> Light Blue
          </li>
        </ul>

        <div
          className={`${css.projectFont}  ${
            fontInView ? css.fontCodeAnimation : ""
          } `}
          ref={fontRef}
        >
          <div className={css.boldFont}>
            Bold{" "}
            <p>
              a b c d e f g h <br /> i j k l <br /> m n o p q r s t <br /> u v w
              x <br /> y z 1 2 3 4 5 <br /> 6 7 8 9
            </p>
          </div>
          <div className={css.regularFont}>
            {" "}
            Regular{" "}
            <p>
              a b c d e f g h <br /> i j k l <br /> m n o p q r s t <br /> u v w
              x <br /> y z 1 2 3 4 5 <br /> 6 7 8 9
            </p>{" "}
          </div>
        </div>
      </div>

      <Link to="/caseStudy2.cryptoYard">
        <div className={`${css.section4} ${css.section} `} id="nextwork">
          <h5>NextWork</h5>
          <h1>Crypto Yard</h1>
        </div>
      </Link>
      <div className={`${css.section5} ${css.section} `}>
        <h1 className={css.footerH1}>Michael</h1>
        <h3 className={css.footerH3}>Frontend developer</h3>
        <ul>
          <li>
            <h3 onClick={() => scrollpage(cont)}>Home</h3>
          </li>
          <li>
            <h3>NextWork</h3>
          </li>
          <li>
            <h3>Contact me</h3>
          </li>

          <li> &copy; mensolportfolio. All right reserved </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Chatteau;
