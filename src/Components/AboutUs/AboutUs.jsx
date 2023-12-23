import React, { useEffect, useState } from "react";
import "./AboutUs.css";
import SimpleImageSlider from "react-simple-image-slider";
import { AboutContent } from "../../utils/utilities";
import { SliderImages } from "../../utils/utilities";

const AboutUs = () => {
  /* This State and functions are responsible for responsive about page  */
  const [windowSize, setWindowSize] = useState(getWindowSize());
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className="about-page-container">

      {/* About Images and Text */}
        {AboutContent &&
          AboutContent?.map((item, index) => (
            <div
              key={index}
              className="about-card"
              style={{
                flexDirection:
                  windowSize.innerWidth > 650 &&
                  index % 2 === 0 &&
                  "row-reverse",
              }}
            >
              <div className="image-div">
                <img src={item.image} alt="" />
              </div>
              <div className="about-text-div">
                <h2>{item.heading}</h2>
                <p>{item.aboutText}</p>
              </div>
            </div>
          ))}
      

      {/* Image Slider */}
      <div className="image-slider-div">
        <h3>Our Offers</h3>
        <SimpleImageSlider
          width={ windowSize.innerWidth > 650 ?796:400}
          height={ windowSize.innerWidth > 650 ? 404 :200}
          images={SliderImages}
          showBullets={true}
          showNavs={true}
          style={{ borderRadius: "20px" }}
        />
      </div>
    </div>
  );
};

export default AboutUs;
