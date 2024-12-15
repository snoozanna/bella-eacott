import { useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import SEO from "./../../components/Structure/SEO/SEO.js";
import "react-alice-carousel/lib/alice-carousel.css";
import useMediaQuery from "@mui/material/useMediaQuery";
import green1 from "./../../assets/img/green1.png";
import green2 from "./../../assets/img/green2.png";
import green3 from "./../../assets/img/green3.png";
import "../../components/Structure/Main/Main.js";
import "./pricing.css";

const handleDragStart = (e) => e.preventDefault();

const Pricing = ({ setPageStatus }) => {
  useEffect(() => {
    setPageStatus("pricing");
  }, []);

  const matches = useMediaQuery("(max-width:768px)");

  // CAROUSEL - MOBILE
  const items = [
    <img
      src={green1}
      onDragStart={handleDragStart}
      alt="A diagram of the Green Bottle model for guidance on sliding scale payments, with the highest cost reflecting the true cost of the service and the lowest cost representing an acknowledgement that there are folks whose economic circumstances would prevent them from accessing the service if there was not a deliberate opportunity made for them, at a cost that is reflective of their economic realities."
      role="presentation"
      className="bottle"
    />,
    <img
      src={green2}
      onDragStart={handleDragStart}
      alt="A diagram of the Green Bottle model for guidance on sliding scale payments, with the highest cost reflecting the true cost of the service and the lowest cost representing an acknowledgement that there are folks whose economic circumstances would prevent them from accessing the service if there was not a deliberate opportunity made for them, at a cost that is reflective of their economic realities."
      role="presentation"
      className="bottle"
    />,
    <img
      src={green3}
      onDragStart={handleDragStart}
      alt="A diagram of the Green Bottle model for guidance on sliding scale payments, with the highest cost reflecting the true cost of the service and the lowest cost representing an acknowledgement that there are folks whose economic circumstances would prevent them from accessing the service if there was not a deliberate opportunity made for them, at a cost that is reflective of their economic realities."
      role="presentation"
      className="bottle"
    />,
  ];

  return (
    <>
      <SEO
        title="Pricing"
        description="Osteopathy & massage across London"
        name="Pricing"
        type="article"
      />
      <main>
        <section className="pricing content skinny">
          <h2 className="pageNameMobile">Pricing</h2>
          <div className="content-item">
            <p>
            Whatever kind of massage you would like, treatments are priced by length. Initial Osteopathy appointments are slightly longer and more expensive than follow up osteopathy appointments. 
            </p>

<p>I work at a number of different clinics which have differing fee structures which you can find on my booking page. </p>

<p>At Studio Pinacle, in Peckham, my prices are: </p>

            <ul>
              <li className="massageType ">
                <h3>Massage: 
                 
                £75 (60 minutes) £95 (90 minutes) </h3>
              </li>
              <li className="massageType ">
                <h3>Osteopathy: 
               
              £90 (initial appt)
              £70 (follow up)</h3>
              </li>
            </ul>
<br/>
            <h3 className="subtitle">Sliding scale payment options</h3>
            <p>
              I think bodywork is brilliant and want it to be available for
              everyone, so if you are unable to pay the full price as listed
              above, I also offer a sliding scale pricing option, starting from
              £40, to make it as accessible as possible, which can be booked
              using the same link as above. For guidance on deciding where you
              fall on the sliding scale, and how much to pay, please refer to
              the “Green Bottle Sliding Scale” model:
            </p>
          </div>
         <br/>
          <div className="content-item bottle">
            <h3 className="subtitle">THE GREEN BOTTLE</h3>

            {matches ? (
              // MOBILE GREEN BOTTLE CAROUSEL
              <>
                <div className="greenBottleContainer">
                  <div class="carousel-wrapper">
                    <div className="priviledge scale">
                      Financial priviledge -->{" "}
                    </div>
                    <AliceCarousel mouseTracking items={items} />
                  </div>
                  <div className="scale personal">
                    {" "}
                    Personal Financial Experience -->{" "}
                  </div>
                  <p className="explanation">
                    Basic needs include food, housing and transportation.
                    Expendable income might mean that you are able to buy a
                    coffee or tea at a shop, go to movies or a concert, or buy
                    new clothes, books, and similar items each month, etc.
                  </p>
                  <p>Diagram created by Alexis J Cunningfolk</p>
                </div>
              </>
            ) : (
              <>
                {/* // DESKTOP GREEN BOTTLE IMAGE  */}
                <div className="greenBottleContainer">
                  <div className="priviledge scale">
                    Financial priviledge -->{" "}
                  </div>
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
                <div className="scale"> Personal Financial Experience --> </div>
                <p className="explanation">
                  Basic needs include food, housing and transportation.
                  Expendable income might mean that you are able to buy a coffee
                  or tea at a shop, go to movies or a concert, or buy new
                  clothes, books, and similar items each month, etc.
                </p>
                <p>Diagram created by Alexis J Cunningfolk</p>
              </>
            )}
          </div>
        </section>
      </main>
    </>
  );
};

export default Pricing;
