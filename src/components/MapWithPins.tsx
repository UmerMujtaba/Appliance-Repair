"use client";

import { Location } from "@/types/types";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React from "react";

interface MapWithPinsProps {
  locations: Location[];
}

const containerStyle = {
  width: "100%",
  height: "400px",
};

const MapWithPins: React.FC<MapWithPinsProps> = ({ locations }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "",
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={locations[0]?.coordinates}
        zoom={10}
      >
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={location.coordinates}
            label={location.name}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default React.memo(MapWithPins);
