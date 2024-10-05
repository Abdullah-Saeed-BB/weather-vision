import FloodMap from "@/components/FloodRisk/floodMap"
import styles from "./flood-risk.module.css"

// Data could use needed
// coords: [lat, lon]
// range: Number 
// How bad its: Show precenteg %
const floodData: { coords: [number, number], radius: number, dangers: number}[] = [
    {
        coords: [21.6311866,39.0815574],
        radius: 20000,
        dangers: 40 
    },
    {
        coords: [24.0182676,39.8116146],
        radius: 35000,
        dangers: 40 
    },
    {
        coords: [26.7658761,48.5763119],
        radius: 14000,
        dangers: 30 
    },
]

function FloodRiskPage() {
    // const coords = cookieStore.get("coords")

    return (
        <div className={styles.container}>
            {/* <pre>{JSON.stringify(coords)}</pre> */}
            {/* <FloodMap coords={coords?.value ?? "[0, 0]"} style={styles.floodMap}/> */}
            <div className={styles.floodCard}>
                <FloodMap style={styles.floodMap} data={floodData}/>
                <ul>
                     {/* {floodData.map((flood) =>)} */}
                </ul>
            </div>
        </div>
    )
}

export default FloodRiskPage