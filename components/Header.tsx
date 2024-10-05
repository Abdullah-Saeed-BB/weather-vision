import Image from "next/image";
import Link from "next/link";
import logo from "@/public/weather-vision-logo.jpg"
import styles from "./component.module.css"
import EditLocation from "./EditLocation";

export default function Header() {

    return (
        <header className={styles.header}>                
            <Link className={styles.logo} href="/">
                <Image width="60" height="60" src={logo} alt="weather vision logo"/>
                <h3>Weather Vision</h3>
            </Link>
            <nav className={styles.headerLinks}>
                <Link href="/">Home</Link>
                <Link href="flood-risk">Flood Risk Map</Link>
                <Link href="who-us">Who Us?</Link>
            </nav>
            <EditLocation />
        </header>
    )
}