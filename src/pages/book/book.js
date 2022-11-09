import { forwardRef } from "react";
import "./book.css";

const Book = forwardRef((props, ref) => {
  // console.log("ref in book", ref);
  return (
    <>
      <section className="book-content">
        <div className="content-item">
          <p>
            I do home visits across most parts of London, and also see clients
            in Brixton.
          </p>
          <p>
            Find out more about how I work and{" "}
            <button
              className="withinText"
              onClick={() => ref.current.scrollTo(3)}
            >
              {" "}
              what to expect
            </button>
            , the type of{" "}
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
              prices
            </button>
            .
          </p>
        </div>
        <div className="bookingWidget content-item">BOOKING WIDGET</div>
      </section>
    </>
  );
});

export default Book;
