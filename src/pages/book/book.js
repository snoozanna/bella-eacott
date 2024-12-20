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
        description="Osteopathy & massage across London"
        name="Book me"
        type="article"
      />
      <main>
        <section className="book content">
          <h2 className="pageNameMobile">Book me</h2>
          <p className="content-item">
          I work at a number of clinics across London, and you can find details and how to book below.
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
