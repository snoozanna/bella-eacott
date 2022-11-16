import "./book.css";

const Book = () => {
  // console.log("ref in book", ref);
  return (
    <>
      <section className="book content">
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
          in Peckham, and also do home visits across most parts of London.
        </p>
        <p className="content-item">You can book below:</p>
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
    </>
  );
};

export default Book;
