import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet"
import styles from "./component.module.css"
import { useEffect, useState } from "react";
import Cookies from 'js-cookie'
import { useRouter } from "next/navigation";

export default function EditLocPopup({setIsEditLocation}: {setIsEditLocation: React.Dispatch<React.SetStateAction<boolean>>}) {
    const coords = Cookies.get("coords")

    const [isClient, setIsClient] = useState(false);
    const [markerPos, setMarkerPos] = useState(coords? JSON.parse(coords): null)
    const router = useRouter();

    useEffect(() => {
        setIsClient(true)
    }, [])

    const handelSaveCoords = () => {
        Cookies.set("coords", JSON.stringify(markerPos))

        setIsEditLocation(false)
        router.refresh();
    }

    return (
        <div className={styles.popupOverlay}>
            <div className={styles.popupContent}>
                <div>
                    <h3>Edit you location</h3>
                    {typeof window !== "undefined" && isClient? (
                        <MapContainer className={styles.popupMap} center={markerPos || [0, 0]} zoom={14}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <MapEvents setMarkerPos={setMarkerPos}/>
                            <Marker position={markerPos}>

                            </Marker>
                        </MapContainer>
                    ): <p><em>Loading...</em></p>}
                </div>
                <button className={styles.popupButton} onClick={handelSaveCoords}>Save</button>
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