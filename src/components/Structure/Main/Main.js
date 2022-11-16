import { forwardRef, useContext } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { MenuContext } from "./../../../contexts/menu.context";
import Home from "./../../../pages/home/home";
import Book from "./../../../pages/book/book";
import Contact from "./../../../pages/contact/contact";
import Expect from "./../../../pages/expect/expect";
import About from "./../../../pages/about/about";
import Pricing from "./../../../pages/pricing/pricing";

import "./Main.css";

// Using forwardRef
const Main = forwardRef((props, ref) => {
  // console.log("container in Main", ref.current.container);
  return (
    <>
      <main className={"test"}>
        {props.children}
        <Parallax
          pages={7}
          style={{ top: "0", left: "0" }}
          ref={ref}
          factor={0.8}
        >
          <ParallaxLayer
            offset={0.7}
            speed={3}
            style={{ backgroundColor: "#ff6d6d" }}
          />
          <ParallaxLayer offset={0.1} speed={0.5}>
            <Home />
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.5}>
            <About ref={ref} />
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={0.5}
            style={{ backgroundColor: "#ff6d6d" }}
          >
            <Expect />
          </ParallaxLayer>
          <ParallaxLayer
            offset={3}
            speed={0.5}
            style={{ backgroundColor: "#ff6d6d" }}
          >
            <Pricing />
          </ParallaxLayer>
          <ParallaxLayer offset={4} speed={0.5}>
            <Book />
          </ParallaxLayer>
          <ParallaxLayer offset={5} speed={0.5}>
            <Contact />
          </ParallaxLayer>
        </Parallax>
      </main>
    </>
  );
});

export default Main;

// const Main = (props, ref) => {
//   return (
//     <>
//       <main className={"test"}>
//         {props.children}
//         {/* <Parallax pages={7} style={{ top: "0", left: "0" }} ref={ref}> */}
//         <Parallax pages={7} style={{ top: "0", left: "0" }}>
//           <ParallaxLayer
//             offset={0.7}
//             speed={2}
//             style={{ backgroundColor: "#ff6d6d" }}
//           />

//           <ParallaxLayer offset={0.1} speed={0.5}>
//             <Home />
//           </ParallaxLayer>

//           <ParallaxLayer offset={1} speed={0.5}>
//             <About ref={ref} />
//             {/* <About /> */}
//           </ParallaxLayer>
//           {/* <ParallaxLayer
//             offset={1.1}
//             speed={2}
//             style={{ backgroundColor: "#ff6d6d" }}
//           /> */}
//           <ParallaxLayer
//             offset={2}
//             speed={0.5}
//             style={{ backgroundColor: "#ff6d6d" }}
//           >
//             <Expect />
//           </ParallaxLayer>
//           <ParallaxLayer
//             offset={3}
//             speed={0.5}
//             style={{ backgroundColor: "#ff6d6d" }}
//           >
//             <Pricing />
//           </ParallaxLayer>
//           <ParallaxLayer offset={4} speed={0.5}>
//             {/* <Book ref={ref} /> */}
//             <Book />
//           </ParallaxLayer>
//           <ParallaxLayer offset={5} speed={0.5}>
//             {" "}
//             <Contact />
//           </ParallaxLayer>
//         </Parallax>
//       </main>
//     </>
//   );
// };

// export default Main;
