"use client";

import { useEffect, useState } from "react";
import styles from "./component.module.css"
import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import Cookies from 'js-cookie'
import { useRouter } from "next/navigation";

type Coords = [number, number]

export default function AccessLocation() {
    const [isOpen, setIsOpen] = useState(false)
    const [isClient, setIsClient] = useState(false);
    const [markerPos, setMarkerPos] = useState<Coords | null>(null)
    const router = useRouter();

    const handelSaveCoords = () => {
        Cookies.set("coords", JSON.stringify(markerPos))

        setIsOpen(false)
        router.refresh();
    }

    useEffect(() => {
        setIsClient(true)

        if (!Cookies.get("coords")) {
            setIsOpen(true);
        }
    }, [])

    return isOpen && (
        <div>
            <div className={styles.popupOverlay + " open"}>
                <div className={styles.popupContent}>
                    <div>
                        <h3>Could you please share your location?</h3>
                        <p>Click on your current location on the map to see the weather condition where you are.</p>
                        {typeof window !== "undefined" && isClient? (
                            <MapContainer className={styles.popupMap}  center={[15, 0]} zoom={1}>
                                <TileLayer
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />
                                <MapEvents setMarkerPos={setMarkerPos}/>
                                {markerPos && <Marker position={markerPos}>

                                </Marker>}
                            </MapContainer>
                        ): <p><em>Loading...</em></p>}
                    </div>
                    <button className={styles.popupButton} onClick={handelSaveCoords} disabled={!markerPos}>Next</button>
                </div>
            </div>
        </div>
    )
}

function MapEvents({setMarkerPos}: {setMarkerPos: (coords: [number, number]) => void}) {
    useMapEvents({
        click: async (e) => {
            const {lat, lng} = e.latlng;
            setMarkerPos([lat, lng])
        },
    })
    return null
}