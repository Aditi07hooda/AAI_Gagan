// Home.jsx

import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Home = () => {
  return (
    <div className="flex justify-center flex-wrap align-middle">
      {/*Home component */}
      <Carousel
        className="mt-24 aspect-video"
        autoPlay
        infiniteLoop
        width={1000}
      >
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU3jP5F8BPQRW79aiKDBw4Xx_Vy3g21_yjYQ&usqp=CAU" />
        </div>
        <div>
          <img src="https://content3.jdmagicbox.com/comp/bangalore/j6/080pxx80.xx80.181203162411.k6j6/catalogue/gagan-complex-brookefield-bangalore-shopping-centres-8yl9ip6do5.jpg" />
        </div>
        <div>
          <img
            src="https://mediaindia.eu/wp-content/uploads/2017/07/Gagan.png"
            className="aspect-video"
          />
        </div>
      </Carousel>
      <div className="container mt-6 mb-6">
        <p className="text-justify font-normal text-wrap text-lg">
          GAGAN is the acronym for GPS Aided GEO Augmented Navigation. The GAGAN
          uses a system of ground stations to provide necessary augmentations to
          the GPS standard positioning service(SPS) navigation signal. A network
          of precisely surveyed ground reference stations (INdianReference
          Stations ? INRES) is strategically positioned across the country to
          collect GPS satellite data. Using this information, the master control
          centre (INdian Master Control Centre ? INMCC) generates messages to
          correct any signal errors. These correction messages are then uplinked
          through (INdian Land Uplink Station ? INLUS) and broadcast through
          communication satellites (Geostationary) to receivers onboard aircraft
          using the same frequency as GPS. The GAGAN is designed to provide the
          additional accuracy, availability, and integrity necessary to enable
          users to rely on GPS for all phases of flight, from en route through
          approach for all qualified airports within the GAGAN service volume.
          GAGAN will also provide the capability for increased accuracy in
          position reporting, allowing for more uniform and high-quality Air
          Traffic Management (ATM). In addition, GAGAN will provide benefits
          beyond aviation to all modes of transportation, including maritime,
          highways, and railroads.
          <br />
          <br />
          GAGAN is the acronym for GPS Aided GEO Augmented Navigation. The GAGAN
          uses a system of ground stations to provide necessary augmentations to
          the GPS standard positioning service(SPS) navigation signal. A network
          of precisely surveyed ground reference stations (INdianReference
          Stations ? INRES) is strategically positioned across the country to
          collect GPS satellite data. Using this information, the master control
          centre (INdian Master Control Centre ? INMCC) generates messages to
          correct any signal errors. These correction messages are then uplinked
          through (INdian Land Uplink Station ? INLUS) and broadcast through
          communication satellites (Geostationary) to receivers onboard aircraft
          using the same frequency as GPS. The GAGAN is designed to provide the
          additional accuracy, availability, and integrity necessary to enable
          users to rely on GPS for all phases of flight, from en route through
          approach for all qualified airports within the GAGAN service volume.
          GAGAN will also provide the capability for increased accuracy in
          position reporting, allowing for more uniform and high-quality Air
          Traffic Management (ATM). In addition, GAGAN will provide benefits
          beyond aviation to all modes of transportation, including maritime,
          highways, and railroads.
          <br />
          <br />
          GAGAN is the acronym for GPS Aided GEO Augmented Navigation. The GAGAN
          uses a system of ground stations to provide necessary augmentations to
          the GPS standard positioning service(SPS) navigation signal. A network
          of precisely surveyed ground reference stations (INdianReference
          Stations ? INRES) is strategically positioned across the country to
          collect GPS satellite data. Using this information, the master control
          centre (INdian Master Control Centre ? INMCC) generates messages to
          correct any signal errors. These correction messages are then uplinked
          through (INdian Land Uplink Station ? INLUS) and broadcast through
          communication satellites (Geostationary) to receivers onboard aircraft
          using the same frequency as GPS. The GAGAN is designed to provide the
          additional accuracy, availability, and integrity necessary to enable
          users to rely on GPS for all phases of flight, from en route through
          approach for all qualified airports within the GAGAN service volume.
          GAGAN will also provide the capability for increased accuracy in
          position reporting, allowing for more uniform and high-quality Air
          Traffic Management (ATM). In addition, GAGAN will provide benefits
          beyond aviation to all modes of transportation, including maritime,
          highways, and railroads
        </p>
      </div>
    </div>
  );
};

export default Home;
