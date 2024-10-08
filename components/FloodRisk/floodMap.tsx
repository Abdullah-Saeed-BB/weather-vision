"use client";
import { Circle, MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

type Flood = {
  coords: [number, number];
  radius: number;
  dangers: number;
};

export default function FloodMap({
  style,
  data,
  coords,
}: {
  style: string;
  data: Flood[];
  coords: [number, number];
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient && typeof window !== "undefined" && coords) {
    return (
      <MapContainer className={style} center={coords} zoom={9}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coords} />
        {data.map((flood: Flood, i) => (
          <>
            <Circle
              key={i}
              center={flood.coords}
              radius={flood.radius / 2}
              color="red"
              opacity={0}
            />
            <Circle
              key={i}
              center={flood.coords}
              radius={flood.radius}
              color="red"
              opacity={0}
            />
            <Circle
              key={i}
              center={flood.coords}
              radius={flood.radius * 1.5}
              color="red"
              opacity={0}
            >
              <Popup>
                <span>Dangers: {flood.dangers}%</span>
              </Popup>
            </Circle>
          </>
        ))}
      </MapContainer>
    );
  }
}
