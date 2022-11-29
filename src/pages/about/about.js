import { useEffect } from "react";
import { Link } from "react-router-dom";
import useIsVisible from "../../hooks/useIsVisible.js";
import Header from "./../../components/Structure/Header/Header.js";
import Footer from "./../../components/Structure/Footer/Footer.js";
import img from "./../../assets/img/Bella.JPG";
import "./about.css";

const About = ({ setPageStatus }) => {
  useEffect(() => {
    setPageStatus("about");
  }, []);

  return (
    <>
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
      </main>
    </>
  );
};

export default About;
