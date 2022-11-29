import Header from "./../Header/Header";
import HeaderHome from "./../HeaderHome/HeaderHome";

const HeaderWrapper = ({ pageStatus }) => {
  if (pageStatus === "landing") {
    return null;
  } else if (pageStatus === "home") {
    return <HeaderHome />;
  } else {
    return <Header />;
  }
};

export default HeaderWrapper;
