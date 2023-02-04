import React, { useEffect } from "react";
import { Marker, Popup, useMap } from "react-leaflet";
import icon from "./icon";

export default function MarkerPosition({ position }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(position, 13, {
      animate: true,
    });
  }, [position]);
  return (
    <div>
      <Marker icon={icon} position={position}>
        <Popup>You are now here</Popup>
      </Marker>
    </div>
  );
}