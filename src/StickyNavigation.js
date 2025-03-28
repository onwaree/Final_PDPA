import { useEffect, useState, useRef } from "react";
import "./VideoBackground.css";

const StickyNavigation = () => {
  const [currentId, setCurrentId] = useState(null);
  const tabContainerHeight = 70;
  const sliderRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      checkTabContainerPosition();
      findCurrentTabSelector();
    };

    const checkTabContainerPosition = () => {
      const tabsContainer = document.querySelector(".et-hero-tabs-container");
      const heroTabs = document.querySelector(".et-hero-tabs");

      if (heroTabs) {
        let offset = heroTabs.offsetTop + heroTabs.offsetHeight - tabContainerHeight;

        if (window.scrollY > offset) {
          tabsContainer.classList.add("et-hero-tabs-container--top");
        } else {
          tabsContainer.classList.remove("et-hero-tabs-container--top");
        }
      }
    };

    const findCurrentTabSelector = () => {
      let newCurrentId = null;
      let newCurrentTab = null;

      document.querySelectorAll(".et-hero-tab").forEach((tab) => {
        let id = tab.getAttribute("href");
        let section = document.querySelector(id);

        if (section) {
          let offsetTop = section.offsetTop - tabContainerHeight;
          let offsetBottom = section.offsetTop + section.offsetHeight - tabContainerHeight;

          if (window.scrollY > offsetTop && window.scrollY < offsetBottom) {
            newCurrentId = id;
            newCurrentTab = tab;
          }
        }
      });

      if (currentId !== newCurrentId) {
        setCurrentId(newCurrentId);
        setSliderCss(newCurrentTab);
      }
    };

    const setSliderCss = (tab) => {
      if (tab && sliderRef.current) {
        sliderRef.current.style.width = `${tab.offsetWidth}px`;
        sliderRef.current.style.left = `${tab.offsetLeft}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [currentId]);

  return (
    <section className="et-hero-tabs">
      <div className="video-container">
        <video className="video" autoPlay loop muted>
          <source src="./img/vi.mp4" type="video/mp4" />
        </video>


        <h3 aria-label="CreateBy Onwaree Srimaya">
          &nbsp;<span class="typewriter"></span>
        </h3>
      </div>


      <div className="et-hero-tabs-container">
        <a className="et-hero-tab" href="#tab-es6">Personal Data</a>
        <a className="et-hero-tab" href="#tab-flexbox">Education</a>
        <a className="et-hero-tab" href="#tab-react">Experience</a>
        <a className="et-hero-tab" href="#tab-angular">Achievement</a>
        <span className="et-hero-tab-slider" ref={sliderRef}></span>
      </div>
    </section>
  );
};

export default StickyNavigation;
