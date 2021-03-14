import GoogleMapReact from "google-map-react";
import { useEffect, useState } from "react";
import LocationInfo from "./LocationInfo";
import LocationMarker from "./LocationMarker";

const googleMapKey = process.env.REACT_APP_GOOGLE_MAP_KEY;

console.log(googleMapKey);

const EarthEvents = ({ center, zoom }) => {
  const [fire, setFire] = useState([]);

  const [infoDialog, setInfoDialog] = useState();

  useEffect(() => {
    const fetchEvents = async () => {
      const result = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      );

      const { events } = await result.json();
      setFire(events);
    };
    fetchEvents();
  }, []);

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleMapKey }}
        defaultZoom={zoom}
        defaultCenter={center}
      >
        {fire.map((events, index) => (
          <LocationMarker
            key={index}
            lat={events.geometries[0].coordinates[1]}
            lng={events.geometries[0].coordinates[0]}
            categoryId={events.categories[0].id}
            showInfo={() =>
              setInfoDialog({ id: events.id, title: events.title })
            }
          />
        ))}
      </GoogleMapReact>
      {infoDialog && <LocationInfo infoDialog={infoDialog} />}
    </div>
  );
};

EarthEvents.defaultProps = {
  zoom: 3,
  center: {
    lat: 12.11,
    lng: 76.6782,
  },
};
export default EarthEvents;
