import { cookies } from "next/headers";
import styles from "./page.module.css"
import Warning from "@/components/Dashboard/Warning";

export default async function Home() {
  const cookieStore = cookies();
  const coords = cookieStore.get("coords")

  if (coords?.value) {
    const [lat, lon] = JSON.parse(coords.value);

    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=2b672888da0b007a2fda9f5327cb7013`);
    
    const weatherData = await res.json();

    return (
      <div className={styles.container}>
        <div className={styles.weatherCard}>
          <div className={styles.map}>
            <iframe src={`https://embed.windy.com/embed.html?type=map&location=coordinates&metricRain=mm&metricTemp=°C&metricWind=m/s&zoom=900&overlay=ws&product=ecmwf&level=surface&lat=${lat}&lon=${lon}&detailLat=${lat}&detailLon=${lon}&marker=true&message=true&layer=clouds`}></iframe>
          </div>
          <div className={styles.weatherContent}>
            {weatherData.name && weatherData.sys.country && <h2 className={styles.cityName}>{weatherData.name}, {weatherData.sys.country}</h2>}
            <div className={styles.mainWeather}>
              <p className={styles.temperature}>{Math.round(weatherData.main.temp)}°C</p>
              <p className={styles.weatherDescription}>{weatherData.weather[0].description}</p>
            </div>
            
            <div className={styles.weatherDetails}>
              <div className={styles.detailItem}>
                <span>Feels like: {Math.round(weatherData.main.feels_like)}°C</span>
              </div>
              <div className={styles.detailItem}>
                <span>Humidity: {weatherData.main.humidity}%</span>
              </div>
              <div className={styles.detailItem}>
                <span>Wind: {weatherData.wind.speed} m/s</span>
              </div>
              {/* <div className={styles.detailItem}> 
                <span>Sunrise: {new Date(weatherData.sys.sunrise).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric' })}</span>
              </div>
              <div className={styles.detailItem}>
                <span>Sunset: {new Date(weatherData.sys.sunset).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric' })}</span>
              </div> */}
            </div>
          </div>
        </div>
          <Warning temp={weatherData.main.feels_like} classN={styles.warningMsg} humidity={weatherData.main.humidity}/>

        {/* <pre>{JSON.stringify(weatherData, undefined, 2)}</pre> */}
      </div>
    );
  } else {
    return <h3>Wait...</h3>
  }

}
