import "./LocationCard.scss";
import { useWeather } from "../../context/WeatherContext";
import { getmonthOfTheYear } from "../../utility/Utility";
import { Link } from "react-router-dom";

const LocationCard = () => {
  const { currentWeather, forecast } = useWeather();

  if (!currentWeather || !forecast) {
    return <div>Loading...</div>;
  }

  const monthOfTheYear = getmonthOfTheYear(currentWeather.location.localtime);
  return (
    <div className="location-card">
      <div className="location-card__time">
        <div className="location-card__time--time">
          {currentWeather.location.localtime.slice(-5)}
        </div>
        <div className="location-card__time--date--month">{monthOfTheYear}</div>
        <div className="location-card__time--date">
          {currentWeather.location.localtime.slice(5, 7)}
        </div>
      </div>
      <div className="location-card__location">
        <div className="location-card__location--city">
          {currentWeather.location.region}
        </div>
        <div className="location-card__location--country">
          {currentWeather.location.country}
        </div>
      </div>
      <Link to={"/change-location"}>
        <div className="location-card__change-location"></div>
      </Link>
      <div className="location-card__links">
        <input className="location-card__input" type="text" />
        <p className="location-card__change">📍</p>
      </div>
    </div>
  );
};

export default LocationCard;
