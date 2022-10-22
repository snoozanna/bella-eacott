import Main from "./../../components/Structure/Main/Main.js";

import img from "./../../assets/img/greenbottle.jpeg";
import "./pricing.css";

const Pricing = () => {
  return (
    <>
      <Main>
        <p>
          Whatever kind of massage you would like, treatments are priced by
          length: - 60 minutes: £75) - 90 minutes: £90)
        </p>

        <p>
          When you book, you will have the option to write a note if you’d like
          to let me know what kind of massage you are looking for, though there
          will always be time to discuss that on the day too.{" "}
        </p>

        <h3>Sliding scale payment options</h3>
        <p>
          I think bodywork is brilliant and want it to be available for
          everyone, so if you are unable to pay the full price as listed above,
          I also offer a sliding scale pricing option, starting from £40, to
          make it as accessible as possible, which can be booked using the same
          link as above. For guidance on deciding where you fall on the sliding
          scale, and how much to pay, please refer to the “Green Bottle Sliding
          Scale” model below:
        </p>
        <img src={img} alt="The Green Bottle Diagram" />
      </Main>
    </>
  );
};

export default Pricing;
