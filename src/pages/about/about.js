import SEO from "./../../components/Structure/SEO/SEO.js";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";

import useMediaQuery from "@mui/material/useMediaQuery";
import Testimonial from "../../components/Testimonial/Testimonial.js";
import img from "./../../assets/img/Bella.JPG";
import "./about.css";

const handleDragStart = (e) => e.preventDefault();

const About = () => {
  // CAROUSEL - MOBILE
  const items = [
    <Testimonial review="Bella’s massage was absolute bliss. I felt like I was floating afterwards. Exactly the right amount of pressure. This was the first time I’d had a massage at home and being able to get straight into bed afterwards was incredible. Highly recommend!" />,
    <Testimonial review="It's amazing how much difference an hour's massage can make with someone who understands anatomy and the psychological aspects of physical well-being. Bella Eacott does. Thank you!" />,
    <Testimonial review="Bella is great - she sorted my long term shoulder injury in one session and provided great follow up for progressive rehabilitation and home mobility guidance. I now have regular deep tissue sessions to keep my overall muscular health at peak. Highly recommended!" />,
    <Testimonial review="Bella is the best! She has tremendous skill, knowledge and intuition. On top of helping to relieve pain from a long standing knee injury, she offered very useful insight and advice about next steps to recovery. Couldn’t recommend highly enough!" />,
    <Testimonial review="Bella is diligent and knowledgeable and I’ve felt in such safe hands every time she’s worked with me. She takes great care in making you feel understood and every time I’ve felt more comfortable in my body. I couldn’t recommend her more!" />,
  ];

  var options = {
    responsive: {
      0: {
        items: 1,
      },
      1024: {
        items: 3,
        // itemsFit: "contain",
      },
    },
  };

  return (
    <>
      <SEO
        title="About me"
        description="Sports, deep tissue, relaxing, pregnancy and remedial massage across
          London"
        name="About me"
        type="article"
      />
      <main>
        <section className="about content skinny">
          <h2 className="pageNameMobile">About me</h2>
          <div className="aboutImgContainer">
            <img
              src={img}
              alt="Bella sitting in a chair, with her eyes closed, on a balcony facing the sun. In black and white."
              className="bella "
            />
          </div>
          <div className="content-item">
            <p>
              I qualified as a massage therapist in 2018, beginning my studies
              in osteopathy the same year. I am trained to provide sports and
              remedial massage, deep tissue as well as relaxing and holistic
              styles of{" "}
              <button
                className="withinText highlighted"
                // onClick={() => ref.current.scrollTo(changePage(2))}/
              >
                {" "}
                treatment
              </button>
              .
            </p>
          </div>
          <div className="content-item">
            <p>
              I have always been interested in body and movement, with a
              background in dance and then studying history and philosophy of
              medicine at university. I worked for many years on a research and
              training initiative providing arts-based wellbeing programmes for
              healthcare professionals, and in this role thought especially
              about the importance of touch, communication and embodied
              experiences in how we understand our bodies, health and illness. I
              continue to be interested and involved in research around these
              topics, which influence the ways that I approach my practice. I am
              a member of the{" "}
              <a
                href="https://www.thesma.org/"
                className="highlighted"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Association for Soft Tissue Therapists
              </a>{" "}
              , and fully insured by Protectivity Insurance.
            </p>
          </div>
        </section>
        <section className="testimonials content">
          <h3 className="subtitle center">Testimonials</h3>
          <div className="testimonialWrapper">
            <AliceCarousel
              mouseTracking
              items={items}
              responsive={options.responsive}
              disableButtonsControls={true}
            />
            {/* <Testimonial review="Bella’s massage was absolute bliss. I felt like I was floating afterwards. Exactly the right amount of pressure. This was the first time I’d had a massage at home and being able to get straight into bed afterwards was incredible. Highly recommend!" />
            <Testimonial review="Bella is great - she sorted my long term shoulder injury in one session and provided great follow up for progressive rehabilitation and home mobility guidance. I now have regular deep tissue sessions to keep my overall muscular health at peak. Highly recommended!" />
            <Testimonial review="Bella is the best! She has tremendous skill, knowledge and intuition. On top of helping to relieve pain from a long standing knee injury, she offered very useful insight and advice about next steps to recovery. Couldn’t recommend highly enough!" /> */}
          </div>
          <p className="readMore">
            Read more {""}
            <a
              href="https://goo.gl/maps/5GGuVb1WeuXE5he48"
              target="_blank"
              rel="noreferrer"
              className="highlighted"
            >
              testimonials
            </a>
          </p>
        </section>
      </main>
    </>
  );
};

export default About;
