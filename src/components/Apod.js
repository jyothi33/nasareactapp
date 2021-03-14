import React from "react";

export const Apod = () => {
  return (
    <>
      <h1 className="apodHeading">NASA's API</h1>
      <h3 className="information">
        This APP is based on NASA's API Portal and React Google Maps. The main
        objective of this APP is to demonstrate REACT concepts interpolating
        with React Google Maps package, React Routing and usage of NASAs public
        API's to display astronomy information on the screen.
      </h3>
      <div className="information">
        <h3>In this APP, we are using two of NASA's API.</h3>
        <h3>1. Astronomy Picture of Day API ( APOD API)</h3>
        <h3>2. Earth Observatory Natural Event Tracker ( EONET API).</h3>

        <h3>
          There are two different components which loads these two API's when
          each of the links - Picture of the Day and Earth Events are clicked.
        </h3>
      </div>
      <h3 className="information">
        Astronomy picture of the Day shows different astronomical imagery from
        the APOD API along with the detail information of the picture.
      </h3>
      <h3 className="information">
        Clicking on Earth Events link shows the natural events as captured by
        NASA's EONET API, here we are displaying earth events like wildfires,
        volcanoes and sea and lake ice happenning on the entire earth as per NRT
        (Near Real Time). We can also click on this markers to get some more
        information like title of the event.
      </h3>
    </>
  );
};
