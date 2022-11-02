import Main from "../../components/Structure/Main/Main";
import "./book.css";

export const Book = (props) => {
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
              onClick={() => props.paraRef.current.scrollTo(3)}
            >
              {" "}
              what to expect
            </button>
            , the type of{" "}
            <button
              className="withinText"
              onClick={() => props.paraRef.current.scrollTo(3)}
            >
              treatments
            </button>{" "}
            and{" "}
            <button
              className="withinText"
              onClick={() => props.paraRef.current.scrollTo(5)}
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
};

export default Book;
