import React from "react";
import css from "../styles/sip.module.css";
import sipPic from "../images/sipPic.jpg";
import rightArrow from "../images/right-arrow.png";
import caseImage from "../images/case1.png";
import { Link } from "react-router-dom";

const SipAndSavor = () => {
  return (
    <div className={css.container}>
      <ul className={css.menuStrip}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          {" "}
          <li> Home </li>{" "}
        </Link>{" "}
        <li> Next page </li> <li> contact </li>
      </ul>
      <div
        className={`${css.section1} ${css.section} `}
        style={{
          backgroundImage: `url(${sipPic})`,
        }}
      ></div>
      <div className={`${css.section2} ${css.section} `}>
        <h1>SIP AND SAVOR</h1>

        <h2>Introduction</h2>
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
        <h2>Analysis & Preparations</h2>
        <h1> Branding </h1>

        <div
          className={css.imageHolder}
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

        <ul className={css.projectColor}>
          <li>
            <div> </div> Yellow
          </li>
          <li>
            <div> </div> Black
          </li>
          <li>
            <div> </div> White
          </li>
        </ul>

        <div className={css.projectFont}>
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
      <div className={`${css.section4} ${css.section} `}>
        <h5>NextWork</h5>
        <h1>Chatteau Nourriture</h1>
      </div>
      <div className={`${css.section5} ${css.section} `}>
        <h1 className={css.footerH1}>Michael</h1>
        <h3 className={css.footerH3}>Frontend developer</h3>
        <ul>
          <li>
            <h3>Home</h3>
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
    </div>
  );
};

export default SipAndSavor;
