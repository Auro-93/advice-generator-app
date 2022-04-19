import { useMediaQuery } from "react-responsive";

/*HOOK TO MANAGE MEDIA QUERIES IN COMPONENTS*/
const useMediaQueryHook = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 769px)",
  });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return { isDesktopOrLaptop, isTabletOrMobile };
};

export default useMediaQueryHook;
