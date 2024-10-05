"use client"
import { useState } from "react";
import styles from "./component.module.css";
import Image from "next/image";
import icon from "@/public/icon.png"
import Link from "next/link";
import EditLocation from "./EditLocation";


export default function PhoneHeader() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return (
        <header className={styles.phoneHeader}>
            <button className={styles.toggleButton} onClick={toggleMenu}>
                <Image src={icon} width="30" height="30" alt="Icon open links"/>
            </button>
            {isOpen && (
                <nav className={styles.phoneNav}>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="flood-risk">Flood Risk Map</Link></li>
                        <li><Link href="who-us">Who Us?</Link></li>
                        <li><EditLocation/></li>
                    </ul>
                </nav>
            )}
        </header>
    )
}