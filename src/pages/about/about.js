import { forwardRef, useContext, useEffect, useRef } from "react";
import useIsVisible from "../../hooks/useIsVisible.js";
import { MenuContext } from "./../../contexts/menu.context";
import "./about.css";

const About = forwardRef((props, ref) => {
  const { changePage } = useContext(MenuContext);

  const aboutRef = useRef(null);
  const isInViewport = useIsVisible(aboutRef);
  useEffect(() => {
    if (isInViewport === true) {
      console.log("we're looking at about ");
      changePage(1);
    }
    console.log("Viewport Detection About", isInViewport);
  }, [isInViewport]);

  return (
    <>
      <section className="about content skinny" ref={aboutRef}>
        <h2 className="pageNameMobile">About me</h2>
        <div className="content-item">
          <p>
            I qualified as a massage therapist in 2018, beginning my studies in
            osteopathy the same year. I am trained to provide sports and
            remedial massage, deep tissue as well as relaxing and holistic
            styles of{" "}
            <button
              className="withinText highlighted"
              onClick={() => ref.current.scrollTo(changePage(2))}
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
            healthcare professionals, and in this role thought especially about
            the importance of touch, communication and embodied experiences in
            how we understand our bodies, health and illness. I continue to be
            interested and involved in research around these topics, which
            influence the ways that I approach my practice. I am a member of the{" "}
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
    </>
  );
});

export default About;
