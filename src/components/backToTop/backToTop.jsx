import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import { useState } from "react";
import "./backToTop.css";
const BackToTop = function () {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 1000) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 1000) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);
  return (
    <div
      onClick={scrollTop}
      className="float"
      style={{ display: showScroll ? "flex" : "none" , zIndex:"99999"}}
    >
      <ArrowUpwardIcon />
    </div>
  );
};

export default BackToTop;
