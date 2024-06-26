import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import SEO from "./../../components/Structure/SEO/SEO.js";
import "../../components/Structure/Main/Main.js";
import "./book.css";

const Book = ({ setPageStatus }) => {
  useEffect(() => {
    setPageStatus("book");
  }, []);
  return (
    <>
      <SEO
        title="Book me"
        description="Sports, deep tissue, relaxing, pregnancy and remedial massage across
          London"
        name="Book me"
        type="article"
      />
      <main>
        <section className="book content">
          <h2 className="pageNameMobile">Book me</h2>
          <p className="content-item">
            I see clients at the beautiful{" "}
            <a
              href="https://www.instagram.com/studio.pinacle/"
              target="_blank"
              rel="noreferrer"
              className="highlighted"
            >
              studio.pinacle
            </a>{" "}
            in Peckham, and also do home visits across most parts of London;
            these appointments can be booked directly using my booking system
            below.{" "}
          </p>
          <p className="content-item">
            {" "}
            I also have appointments at Butterfield Osteopathy in Stoke
            Newington twice a week, which you have to book directly through
            their website:{" "}
            <a
              href="https://www.butterfieldosteopathy.co.uk"
              target="_blank"
              rel="noreferrer"
              className="highlighted"
            >
              www.butterfieldosteopathy.co.uk
            </a>
          </p>
          <div className="bookingWidget content-item">
            <iframe
              src="https://app.squarespacescheduling.com/schedule.php?owner=27159191"
              title="Schedule Appointment"
              width="100%"
              height="800"
              frameBorder="0"
            ></iframe>
            <script
              src="https://embed.acuityscheduling.com/js/embed.js"
              type="text/javascript"
            ></script>
          </div>
        </section>
      </main>
    </>
  );
};

export default Book;
