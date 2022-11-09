import { forwardRef } from "react";

const About = forwardRef((props, ref) => {
  return (
    <>
      <section className="about-content skinny">
        <p>
          I qualified as a massage therapist in 2018, beginning my studies in
          osteopathy the same year. I am trained to provide sports and remedial
          massage, deep tissue as well as relaxing and holistic styles of
          treatment, and you can read more about how I work,{" "}
          <button
            className="withinText"
            onClick={() => ref.current.scrollTo(3)}
          >
            {" "}
            what to expect
          </button>
          ,{" "}
          <button
            className="withinText"
            onClick={() => ref.current.scrollTo(3)}
          >
            treatments
          </button>{" "}
          and{" "}
          <button
            className="withinText"
            onClick={() => ref.current.scrollTo(5)}
          >
            costs
          </button>{" "}
          below.
        </p>

        <p>
          I have always been interested in body and movement, with a background
          in dance and then studying history and philosophy of medicine at
          university. I worked for many years on a research and training
          initiative providing arts-based wellbeing programmes for healthcare
          professionals, and in this role thought especially about the
          importance of touch, communication and embodied experiences in how we
          understand our bodies, health and illness. I continue to be interested
          and involved in research around these topics, which influence the ways
          that I approach my practice. I am a member of the Federation of
          Holistic Therapists, and the XXX, and fully insured by XXX.
        </p>
      </section>
    </>
  );
});

export default About;
