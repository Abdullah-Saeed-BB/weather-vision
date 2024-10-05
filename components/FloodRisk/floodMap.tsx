"use client"
import { Circle, MapContainer, TileLayer } from "react-leaflet";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

type Flood = {
    coords: [number, number],
    radius: number,
    dangers: number
}

export default function FloodMap({style, data}: {style: string, data: Flood[]}) {
    const [isClient, setIsClient] = useState(false);
    const coords = Cookies.get("coords")

    useEffect(() => {
        setIsClient(true);
    }, [])


    return isClient && typeof window !== "undefined" && coords && (
            <MapContainer className={style} center={JSON.parse(coords)} zoom={20}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Circle center={[50.5, 30.5]} radius={200} color="red" />
                {
                    data.map((flood: Flood, i) => (
                        <Circle key={i} center={flood.coords} radius={flood.radius}/>
                    ))
                }
            </MapContainer>
    )    
}