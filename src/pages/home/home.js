import Main from "../../components/Structure/Main/Main";
// import Book from "./../book/book.js";
// import Expect from "./../expect/expect";
// import About from "./../about/about";
// import Pricing from "./../pricing/pricing";
import img from "./../../assets/img/Bella.JPG";
import "./home.css";

export const Home = () => {
  return (
    <>
      <section className="home-content">
        <img src={img} alt="Bella Eacott in black and white " />
        <div className="description">
          Sports, deep tissue, relaxing, pregnancy and remedial massage across
          London.
        </div>
      </section>
    </>
  );
};

export default Home;
