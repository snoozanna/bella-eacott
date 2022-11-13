import green1 from "./../../assets/img/green1.png";
import green2 from "./../../assets/img/green2.png";
import green3 from "./../../assets/img/green3.png";
import "./pricing.css";

const Pricing = () => {
  return (
    <>
      <section className="pricing content skinny">
        <div className="content-item">
          <p>
            Whatever kind of massage you would like, treatments are priced by
            length: - 60 minutes: £75) - 90 minutes: £90)
          </p>

          <p>
            When you book, you will have the option to write a note if you’d
            like to let me know what kind of massage you are looking for, though
            there will always be time to discuss that on the day too.{" "}
          </p>

          <h3>Sliding scale payment options</h3>
          <p>
            I think bodywork is brilliant and want it to be available for
            everyone, so if you are unable to pay the full price as listed
            above, I also offer a sliding scale pricing option, starting from
            £40, to make it as accessible as possible, which can be booked using
            the same link as above. For guidance on deciding where you fall on
            the sliding scale, and how much to pay, please refer to the “Green
            Bottle Sliding Scale” model below:
          </p>
        </div>
        <div className="content-item bottle">
          <h3>THE GREEN BOTTLE</h3>
          <span>Where you fall on the sliding scale</span>
          <div className="greenBottleWrapper">
            <img
              src={green1}
              alt="A diagram of the Green Bottle model for guidance on sliding scale payments, with the highest cost reflecting the true cost of the service and the lowest cost representing an acknowledgement that there are folks whose economic circumstances would prevent them from accessing the service if there was not a deliberate opportunity made for them, at a cost that is reflective of their economic realities."
              className="bottle"
            />
            <img
              src={green2}
              alt="A diagram of the Green Bottle model for guidance on sliding scale payments, with the highest cost reflecting the true cost of the service and the lowest cost representing an acknowledgement that there are folks whose economic circumstances would prevent them from accessing the service if there was not a deliberate opportunity made for them, at a cost that is reflective of their economic realities."
              className="bottle"
            />
            <img
              src={green3}
              alt="A diagram of the Green Bottle model for guidance on sliding scale payments, with the highest cost reflecting the true cost of the service and the lowest cost representing an acknowledgement that there are folks whose economic circumstances would prevent them from accessing the service if there was not a deliberate opportunity made for them, at a cost that is reflective of their economic realities."
              className="bottle"
            />
          </div>
          <p>NEED TO ADD THE OTHER INFO FROM DIAGRAM</p>
        </div>
      </section>
    </>
  );
};

export default Pricing;
