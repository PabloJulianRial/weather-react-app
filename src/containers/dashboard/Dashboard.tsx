import "./Dashboard.scss";
import Weather from "../weather/Weather";
import Info from "../info/Info";
import { ForecastResponse, WeatherResponse } from "../../types/WeatherResponse";

type DashboardProps = {
  currentWeather: WeatherResponse | null;
  forecast: ForecastResponse | null;
};

const Dashboard = ({ currentWeather, forecast }: DashboardProps) => {
  return (
    <div className="dashboard">
      <Weather />
      <Info />
    </div>
  );
};

export default Dashboard;
