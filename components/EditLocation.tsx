"use client"
import styles from "./component.module.css"
import { useState } from "react";
import EditLocPopup from "./EditLocPopup";


export default function EditLocation() {
    const [isEditLocation, setIsEditLocation] = useState(false);
    const handleEditLoc = () => {
        setIsEditLocation(!isEditLocation)
    }
    
    return (
        <div>
            <button className={styles.headerBtn} onClick={handleEditLoc}>Edit Location</button>
            {isEditLocation && <EditLocPopup setIsEditLocation={setIsEditLocation}/>}
        </div>
    )
}