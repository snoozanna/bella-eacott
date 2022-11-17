import green1 from "./../../assets/img/green1.png";
import green2 from "./../../assets/img/green2.png";
import green3 from "./../../assets/img/green3.png";
import "./pricing.css";

const Pricing = () => {
  return (
    <>
      <section className="pricing content skinny">
        <h2 className="pageNameMobile">Pricing</h2>
        <div className="content-item">
          <p>
            Whatever kind of massage you would like, treatments are priced by
            length:
          </p>
          <ul>
            <li>
              <h3>60 minutes: £75</h3>
            </li>
            <li>
              <h3>90 minutes: £90</h3>
            </li>
          </ul>

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
            Bottle Sliding Scale” model:
          </p>
        </div>
        <div className="content-item bottle">
          <h3>THE GREEN BOTTLE</h3>
          <span>Where you fall on the sliding scale</span>
          {/* <div className="greenBottleWrapper"> */}
          <div className="greenBottleContainer">
            <div className="priviledge scale">Financial priviledge</div>
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
          <div className="scale"> Personal Financial Experience</div>
          {/* </div> */}

          <p className="explanation">
            Basic needs include food, housing and transportation. Expendable
            income might mean that you are able to buy a coffee or tea at a
            shop, go to movies or a concert, or buy new clothes, books, and
            similar items each month, etc.
          </p>
        </div>
      </section>
    </>
  );
};

export default Pricing;
