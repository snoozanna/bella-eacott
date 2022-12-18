import quotes from "./../../assets/img/yellowquotes.png";
import "./Testimonial.css";
const Testimonial = ({ review }) => {
  return (
    <div className="testimonialItem">
      <span className="quotes">
        <img
          src={quotes}
          alt="yellow quotation marks"
          className="upper quotes"
        />
      </span>
      <p>{review}</p>
      <span className="quotes">
        <img
          src={quotes}
          alt="yellow quotation marks"
          className="lower quotes"
        />
      </span>
    </div>
  );
};

export default Testimonial;
