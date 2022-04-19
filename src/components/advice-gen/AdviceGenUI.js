import React from "react";
import { Animated } from "react-animated-css";
import "./style.scss";
import useMediaQueryHook from "../../hooks/useMediaQueryHook";
import dividerDesktop from "../../assets/images/pattern-divider-desktop.svg";
import dividerMobile from "../../assets/images/pattern-divider-mobile.svg";
import btnSvg from "../../assets/images/icon-dice.svg";
import Loader from "../loader/Loader";

const AdviceGenUI = ({ advice, fetchAdvice, error, loading }) => {
  const { isDesktopOrLaptop } = useMediaQueryHook();

  if (loading === true) {
    return <Loader />;
  } else {
  }
  return (
    <div className="advice_container">
      {advice && loading === false && (
        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
          <div className="advice_container_text">
            <p className="advice_container_text_id">ADVICE #{advice.id}</p>
            <p className="advice_container_text_sentence">
              &ldquo;{advice.sentence}&rdquo;
            </p>
          </div>
        </Animated>
      )}
      {error && (
        <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
          <div className="advice_container_text">
            <p className="advice_container_text_error">{error}</p>
          </div>
        </Animated>
      )}
      {loading && <Loader />}
      {isDesktopOrLaptop ? (
        <img
          src={dividerDesktop}
          className="advice_container_divider"
          alt="divider-pattern"
        />
      ) : (
        <img
          src={dividerMobile}
          className="advice_container_divider"
          alt="divider-pattern"
        />
      )}

      <button className="advice_container_generate-btn" onClick={fetchAdvice}>
        <img src={btnSvg} />
      </button>
    </div>
  );
};

export default AdviceGenUI;
