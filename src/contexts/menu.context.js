import { createContext, useState } from "react";

//we provide empty fn as defaults so it doesn't break the app if forget to pass a fn
export const MenuContext = createContext({
  menu: {
    // isOpen: false,
    currentPage: null,
    ref: null,
    // open: () => {},
    // close: () => {},
    changePage: () => {},
  },
});

// keep track of where we are in the parallax and show that title in the header
// use context instead of forwardRef that enables the header nav bar functionality (scrollTo)
// TBC use   const history = useHistory() to allow users to go back in browser?

export const MenuProvider = (props) => {
  // const [isOpen, setState] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  // const open = () => setState(true);
  // const close = () => setState(false);
  console.log("current page in context", currentPage);
  const changePage = (page) => {
    setCurrentPage(page);
    return page;
  };

  return (
    <MenuContext.Provider
      value={{
        // isOpen,
        // open,
        // close,
        // toggle,
        currentPage,
        changePage,
      }}
    >
      {props.children}
    </MenuContext.Provider>
  );
};
