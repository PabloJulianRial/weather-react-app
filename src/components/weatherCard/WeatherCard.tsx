import "./WeatherCard.scss";

const WeatherCard = () => {
  return (
    <div className="weather-card">
      <div className="weather-card__head">
        <img
          className="weather-card__image"
          src="src\assets\cloud.png"
          alt="weather icon"
        />
        <div className="weather-card__links">
          <div className="weather-card__forecast">weekly</div>
          <div className="weather-card__feels">
            <div className="weather-card__feels--text">
              Feels <br />
              <span>like</span>
            </div>
            <div className="weather-card__feels--temp">26c</div>
          </div>
        </div>
      </div>
      <div className="weather-card__temp">23c</div>
      <div className="weather-card__range">
        <div className="weather-card__range--min">12</div>
        <div className="weather-card__range--max">26</div>
      </div>
      <div className="weather-card__stats">
        <div className="weather-card__stats--wind">Wind</div>
        <div className="weather-card__stats--humidity">Humidity</div>
      </div>
    </div>
  );
};

export default WeatherCard;
