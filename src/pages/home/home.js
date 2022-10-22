import Main from "../../components/Structure/Main/Main";
import img from "./../../assets/img/Bella.JPG";
import "./home.css";

export const Home = () => {
  return (
    <>
      <Main>
        <div className="description">
          Sports, deep tissue, relaxing, pregnancy and remedial massage across
          London.
        </div>
        <img src={img} alt="Bella Eacott in black and white " />
      </Main>
    </>
  );
};

export default Home;
