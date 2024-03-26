// Home.jsx

import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import carousel1 from "../assets/carousel1.png";
import carousel2 from "../assets/carousel2.png";
import carousel3 from "../assets/carousel3.png";
import carousel4 from "../assets/carousel4.png";
import carousel5 from "../assets/carousel5.png";

const Home = () => {
  return (
    <div className="flex justify-center flex-wrap align-middle">
      {/*Home component */}
      <Carousel
        className="mt-20 aspect-video container lg:-mb-32"
        autoPlay
        infiniteLoop
      >
        <div className="w-36 md:w-44 lg:w-auto md:text-center">
          <img src={carousel1} alt="logo" />
        </div>
        <div className="w-36 md:w-44 lg:w-auto md:text-center">
          <img src={carousel2} alt="logo" />
        </div>
        <div className="w-36 md:w-44 lg:w-auto md:text-center">
          <img src={carousel3} alt="logo" />
        </div>
        <div className="w-36 md:w-44 lg:w-auto md:text-center">
          <img src={carousel4} alt="logo" />
        </div>
        <div className="w-36 md:w-44 lg:w-auto md:text-center">
          <img src={carousel5} alt="logo" />
        </div>
      </Carousel>
      <div className="container mb-6">
        <div className="container lg:mx-12 mx-2 flex-wrap text-wrap">
        <p
          className="lg:text-justify font-normal text-wrap text-lg container"
          style={{ "text-rendering": "optimizelegibility" }}
        >
          <b>
            <u>What is GAGAN?</u>
          </b>{" "}
          <br />
          <br />
          GAGAN is an acronym for GPS Aided GEO Augmented Navigation. It is a
          Space Based Augmentation System (SBAS) jointly developed by ISRO and
          AAI to provide the best possible navigational services over Indian FIR
          (Flight Information Region) with the capability of expanding to
          neighbouring FIRs.
          <br />
          <br />
          GAGAN is a system of satellites and ground stations that provide GPS
          signal corrections, giving you better position accuracy.
          <br />
          <br />
          GPS alone does not meet the ICAOs navigational requirements for
          accuracy, integrity and availability. GAGAN corrects for GPS signal
          errors caused by Ionospheric disturbances, timing and satellite orbit
          errors and also it provides vital information regarding the health of
          each satellite.
          <br />
          <br />
          <b>
            <u>Services Offered</u>
          </b>
          <br />
          <br />
          Aviation, Forest management, Railways signalling, Scientific Research
          for Atmospheric Studies, Natural Resource and Land Management,
          Location based services, Mobile, Tourism. For more details click here.
          <br />
          <br />
          <b>
            <u>How it works?</u>
          </b>
          <br />
          <br />
          GAGAN consists of set of ground reference stations positioned across
          various locations in India called Indian Reference Station (INRES),
          which gathers GPS satellite data. A master station, Indian Master
          Control Centre (INMCC) collects data from reference stations and
          create GPS correction messages. The corrected differential messages
          are uplinked via Indian Uplink Station (INLUS) and then broadcasted on
          a signal from three geostationary satellites (GSAT-8, GSAT-10 and
          GSAT-15). The information on this signal is compatible with basic GPS
          signal structure, which means any SBAS enabled GPS receiver can read
          this signal.
          <br />
          <br />
          <b>
            <u>Coverage Area</u>
          </b>
          <br />
          <br />
          Two GEOs simultaneously transmit the GAGAN signal in space. GAGAN GEO
          footprint expands from Africa to Australia and GAGAN system has
          capability to cater 45 reference stations for expansion to
          neighbouring countries. <br />
          <br />
          GAGAN provides a civil aeronautical navigation signal consistent with
          International Civil Aviation Organization (ICAO) Standards and
          Recommended Practices (SARPs) as established by the Global Navigation
          Satellite System (GNSS) Panel. The GAGAN system provides Non-precision
          approach (NPA) service accurate to within the radius of 1/10th of a
          nautical mile (Required Navigation Performance or RNP-0.1) over the
          Indian FIR as well as precision approach service of APV-1.0 (Approach
          with Vertical guidance) over the Indian landmass on nominal days.
          <br />
          <br />
          The system is interoperable with other international SBAS systems such
          as the U.S. Wide Area Augmentation System (WAAS), the European
          Geostationary Navigation Overlay Service (EGNOS), and the Japanese
          MTSAT Satellite Augmentation System (MSAS), and provides seamless air
          navigation across regional boundaries.
          <br />
          <br />
        </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
