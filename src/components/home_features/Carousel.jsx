import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import css from "/portfolio_v1.0.1/portfolio_v1.0.1/src/styles/carousel.module.css";
import rightArrow from "../../images/rightArrow.png";
import project1 from "../../images/case1.png";
import { Link } from "react-router-dom";

const Carousels = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <Carousel
        responsive={responsive}
        className={css.container}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
      >
        <div>
          <figure
            className={css.imageBox}
            style={{
              backgroundImage: `url(${project1})`,
              backgroundSize: "100% 100%",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "left",
              objectFit: "fill",
            }}
          >
            {" "}
          </figure>
          <section className={css.messageBox}>
            <h2>Modern</h2>
            <p>
              {" "}
              Website adaptable to all devices, with ui components and animated
              interactions. asdasdasdsdsadasdasdas asdasd asdas asd asdasd
            </p>
            <Link to="/caseStudy1.sip&Savour">
              <div className={css.btnWeb}>
                {" "}
                Visit Project <img src={rightArrow} />
              </div>
            </Link>
          </section>
        </div>

        <div>
          <figure
            className={css.imageBox}
            style={{
              backgroundImage: `url(${project1})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              objectFit: "fill",
            }}
          >
            {" "}
          </figure>
          <section className={css.messageBox}>
            <h2>Modern</h2>
            <p>
              {" "}
              Website adaptable to all devices, with ui components and animated
              interactions. asdasdasdsdsadasdasdas asdasd asdas asd asdasd
            </p>

            <div className={css.btnWeb}>
              {" "}
              Visit Project <img src={rightArrow} />
            </div>
          </section>
        </div>

        <div>
          <figure
            className={css.imageBox}
            style={{
              backgroundImage: `url(${project1})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              objectFit: "fill",
            }}
          >
            {" "}
          </figure>
          <section className={css.messageBox}>
            <h2>Modern</h2>
            <p>
              {" "}
              Website adaptable to all devices, with ui components and animated
              interactions. asdasdasdsdsadasdasdas asdasd asdas asd asdasd
            </p>

            <div className={css.btnWeb}>
              {" "}
              Visit Project <img src={rightArrow} />
            </div>
          </section>
        </div>
      </Carousel>
    </div>
  );
};

export default Carousels;
