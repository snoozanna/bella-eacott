import Header from "./../Header/Header";
import HeaderHome from "./../HeaderHome/HeaderHome";

const HeaderWrapper = ({ headerStatus }) => {
  if (headerStatus === "landing") {
    return null;
  } else if (headerStatus === "home") {
    return <HeaderHome />;
  } else {
    return <Header />;
  }
};

export default HeaderWrapper;
