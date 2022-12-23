import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize("UA-000000000-0");
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
  console.log("location", location);
};

export default usePageTracking;
