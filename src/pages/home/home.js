import img from "./../../assets/img/Bella.JPG";
import "./home.css";

export const Home = () => {
  return (
    <>
      <section className="home content">
        <img
          src={img}
          alt="Bella sitting in a chair, with her eyes closed, on a balcony facing the sun. In black and white."
          className="bella"
        />
        <div className="description">
          Sports, deep tissue, relaxing, pregnancy and remedial massage across
          London.
        </div>
      </section>
    </>
  );
};

export default Home;
