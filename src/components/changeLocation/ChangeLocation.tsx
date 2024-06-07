import React, { useRef, useEffect } from "react";
import "./ChangeLocation.scss";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const ChangeLocation = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null); // Explicitly define the type
  const mapRef = useRef<L.Map | null>(null); // Explicitly define the type
  const markerRef = useRef<L.Marker | null>(null); // Explicitly define the type

  useEffect(() => {
    if (mapContainerRef.current && !mapRef.current) {
      mapRef.current = L.map(mapContainerRef.current).setView(
        [51.505, -0.09],
        13
      );

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapRef.current);

      markerRef.current = L.marker([51.505, -0.09]).addTo(mapRef.current);

      mapRef.current.on("click", function (e) {
        const lat = e.latlng.lat;
        const lng = e.latlng.lng;

        markerRef.current?.setLatLng([lat, lng]); // Optional chaining for safety

        alert("Selected Coordinates: " + lat + ", " + lng);
      });
    }
  }, []);

  return <div id="map" className="map" ref={mapContainerRef}></div>;
};

export default ChangeLocation;
