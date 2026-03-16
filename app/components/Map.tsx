"use client";

import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export interface CityMarker {
  name: string;
  lat: number;
  lng: number;
  country: string;
  cohort: number;
  mayor: string;
  mayorImage?: string;
  legacyGoal: string;
}

interface MapProps {
  cities: CityMarker[];
}

export default function Map({ cities }: MapProps) {
  return (
    <MapContainer
      center={[0, 20]}
      zoom={3}
      scrollWheelZoom={false}
      className="h-full w-full"
      style={{ minHeight: "500px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      />
      {cities.map((city) => (
        <CircleMarker
          key={`${city.name}-${city.lat}`}
          center={[city.lat, city.lng]}
          radius={8}
          fillColor="#e05109"
          fillOpacity={1}
          color="#f3f4f6"
          weight={2}
        >
          <Popup>
            <div style={{ minWidth: 200, maxWidth: 280 }}>
              <h3 style={{ margin: "0 0 4px", fontSize: 16, fontWeight: 800, color: "#111" }}>
                {city.name}
              </h3>
              <p style={{ margin: "0 0 8px", fontSize: 12, color: "#666", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                {city.country} &middot; Cohort {city.cohort}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "0 0 8px" }}>
                {city.mayorImage && (
                  <img
                    src={city.mayorImage}
                    alt={city.mayor}
                    style={{ width: 48, height: 48, objectFit: "cover", flexShrink: 0 }}
                  />
                )}
                <p style={{ margin: 0, fontSize: 13, color: "#333" }}>
                  <strong>{city.mayor.split(" ")[0]}</strong> {city.mayor.split(" ").slice(1).join(" ")}
                </p>
              </div>
              <p style={{ margin: 0, fontSize: 12, color: "#555", lineHeight: 1.5 }}>
                <strong style={{ color: "#333" }}>Legacy Goal:</strong> {city.legacyGoal}
              </p>
            </div>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
