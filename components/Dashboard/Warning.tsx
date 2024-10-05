type props = {
    temp: number,
    humidity: number,
    classN: string
}

export default function Warning({temp, humidity, classN}: props) {

    if (typeof temp == "number" && temp > 40) {
        return <div className={classN}>🔥 Extreme heatwave conditions are expected. Stay hydrated, avoid strenuous activity, and seek shade whenever possible.</div>
    } else if (typeof temp == "number" && temp <= 8) {
        return <div className={classN}>🧊 Temperatures will drop below freezing. Protect exposed skin, limit time outdoors, and be aware of signs of frostbite, such as numbness or tingling.</div>
    } else if (typeof humidity === "number" && humidity >= 70) {
        return <div className={classN}>🥵 High humidity levels can increase the heat index and make it feel hotter than it actually is. Stay hydrated and avoid strenuous activity.</div>
    }    

    return <></>
}