import FloodMap from "@/components/FloodRisk/floodMap";
import styles from "./flood-risk.module.css";
import { cookies } from "next/headers";

// Data could use needed
// coords: [lat, lon]
// range: Number
// How bad its: Show precenteg %
const floodData: {
  coords: [number, number];
  radius: number;
  dangers: number;
}[] = [
  {
    coords: [21.6311866, 39.0815574],
    radius: 20000,
    dangers: 40,
  },
  {
    coords: [24.0182676, 39.8116146],
    radius: 35000,
    dangers: 52,
  },
  {
    coords: [26.7658761, 48.5763119],
    radius: 14000,
    dangers: 30,
  },
];

function FloodRiskPage() {
  const cookieStore = cookies();
  const coords = cookieStore.get("coords");

  if (coords?.value) {
    const cords = JSON.parse(coords.value);

    const sortFloodData = floodData.sort((f1, f2) => {
      const disF1 = Math.sqrt(
        (cords[0] - f1.coords[0]) ** 2 + (cords[1] - f1.coords[1]) ** 2
      );
      const disF2 = Math.sqrt(
        (cords[0] - f2.coords[0]) ** 2 + (cords[1] - f2.coords[1]) ** 2
      );

      return disF1 - disF2;
    });

    return (
      <div className={styles.container}>
        <div className={styles.floodCard}>
          <FloodMap coords={cords} style={styles.floodMap} data={floodData} />
          <div className={styles.texts}>
            <h3>Nearst Floods ({floodData.length}):</h3>
            <ul className={styles.msgsList}>
              {sortFloodData.map((flood, index) => {
                const distanceKM = [
                  (cords[0] - flood.coords[0]) * 110.574,
                  (cords[1] - flood.coords[1]) * 111.32 * Math.cos(cords[0]),
                ];

                const distance = Math.sqrt(
                  distanceKM[0] ** 2 + distanceKM[1] ** 2
                );

                return (
                  <li key={index}>
                    <WarnMessage distance={distance} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
  return <></>;
}

function WarnMessage({ distance }: { distance: number }) {
  if (distance <= 10) {
    return (
      <div className={`${styles.warnMessage} ${styles.msgDang}`}>
        You are in an area at HIGH RISK OF FLOODING. Please be prepared to
        evacuate immediately.
      </div>
    );
  } else if (distance <= 20) {
    return (
      <div className={`${styles.warnMessage} ${styles.msgWarn}`}>
        🔴 <span>Distance: {Math.round(distance - 10)}KM</span> Flood Watch! Be
        aware of potential flooding in your area. Monitor the situation closely
        and be prepared to evacuate if necessary
      </div>
    );
  } else if (distance <= 30) {
    return (
      <div className={`${styles.warnMessage} ${styles.msgAlert}`}>
        ⚠️ <span>Distance: {Math.round(distance - 10)}KM</span> Be mindful of
        potential flooding in your area. Stay updated on weather conditions be
        prepared if needed, and caution those are nearest to the flood
      </div>
    );
  } else {
    return (
      <div className={`${styles.warnMessage} ${styles.msgSafe}`}>
        <span>Distance: {Math.round(distance - 10)}KM</span> You are too far
        from the flood, and caution those are nearest to the flood.
      </div>
    );
  }
}

export default FloodRiskPage;
