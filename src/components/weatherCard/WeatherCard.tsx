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
            <div className="weather-card__feels--text">Feels</div>
            <div className="weather-card__feels--temp">26c</div>
          </div>
        </div>
      </div>
      <div className="weather-card__temp">23c</div>
      <div className="weather-card__range">
        <div className="weather-card__range--min">
          <div className="weather-card__range--min--text">12</div>
          <div className="weather-card__range--min--temp">min</div>
        </div>
        <div className="weather-card__range--max">
          <div className="weather-card__range--max--text">26</div>
          <div className="weather-card__range--max--temp">max</div>
        </div>
      </div>
      <div className="weather-card__stats">
        <div className="weather-card__stats--wind">
          <div className="weather-card__stats--wind--text">wind</div>
          <div className="weather-card__stats--wind--int">14 mph</div>
        </div>
        <div className="weather-card__stats--humidity">
          <div className="weather-card__stats--humidity--text">humidity</div>
          <div className="weather-card__stats--humidity--int">78%</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
