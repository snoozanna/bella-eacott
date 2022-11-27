import img from "./../../assets/img/Bella.JPG";
import "../../components/Structure/Main/Main.js";
import "./home.css";

export const Home = () => {
  // const { homeRef } = ref.current;
  return (
    <>
      <main class="home">
        <section className="home content" href="#home">
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
      </main>
    </>
  );
};

export default Home;
