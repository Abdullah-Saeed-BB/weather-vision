import styles from "./who.module.css";

function WhoUsPage() {
  return (
    <div className={styles.main}>
      <p>
        By utilizing satellite data and advanced predictive modeling, the
        <i>Weather Vision</i> project can help mitigate the impacts of flash
        floods in urban areas by:
      </p>
      <ol className={styles.points}>
        <li>
          <h3>Real-time flood monitoring:</h3>
          <ul>
            <li>
              Use satellite imagery and remote sensing data to monitor rainfall
              and surface water levels in real time, providing early warning of
              potential flash flood events.
            </li>
          </ul>
        </li>
        <li>
          <h3>Predictive modeling for flood risk:</h3>
          <ul>
            <li>
              Develop machine learning models that analyze historical weather
              patterns, land use, and drainage systems to forecast flood risk in
              specific urban areas.
            </li>
          </ul>
        </li>
        <li>
          <h3>Public alert systems:</h3>
          <ul>
            <li>
              Implement a notification system that informs residents and local
              authorities about impending flood risks, allowing them to take
              precautionary measures.
            </li>
          </ul>
        </li>
        <li>
          <h3>Urban planning and infrastructure recommendations:</h3>
          <ul>
            <li>
              Provide insights to city planners on how to improve drainage
              systems and infrastructure resilience to better handle heavy
              rainfall and reduce flooding risk.
            </li>
          </ul>
        </li>
        <li>
          <h3>Community education and preparedness:</h3>
          <ul>
            <li>
              Create educational materials for residents on flood preparedness,
              including evacuation routes and safety measures during flooding.
            </li>
          </ul>
        </li>
      </ol>
    </div>
  );
}

export default WhoUsPage;
