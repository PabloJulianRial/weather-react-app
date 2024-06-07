import "./Dashboard.scss";
import Weather from "../weather/Weather";
import Info from "../info/Info";
import { useWeather } from "../../context/WeatherContext";

const Dashboard = () => {
  const { currentWeather, forecast } = useWeather();
  if (!currentWeather || !forecast) {
    return <div>Loading...</div>;
  }
  let greeting = "";
  const dayNumber = Number(currentWeather.location.localtime.slice(11, 13));
  if (dayNumber >= 6 && dayNumber < 12) {
    greeting = "Morning";
  } else if (dayNumber >= 12 && dayNumber < 18) {
    greeting = "Afternoon";
  } else {
    greeting = "Evening";
  }

  return (
    <div className="dashboard">
      <h2 className="dashboard__greeting">
        Good {greeting} {}
      </h2>
      <Weather />
      <Info />
    </div>
  );
};

export default Dashboard;
