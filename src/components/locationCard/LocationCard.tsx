import { ChangeEvent, useState } from "react";
import "./LocationCard.scss";
import { useWeather } from "../../context/WeatherContext";
import { getmonthOfTheYear } from "../../utility/Utility";
import axios from "axios";

const LocationCard = () => {
  const { currentWeather, forecast } = useWeather();
  const [inputValue, setInputValue] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  if (!currentWeather || !forecast) {
    return <div>Loading...</div>;
  }

  const handleInputChange = async (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    if (event.target.value.length > 2) {
      fetchPlaceSuggestions(event.target.value);
    }
  };

  const fetchPlaceSuggestions = async (input: string) => {
    const apiKey = "AIzaSyAinljVXrdyKQB_h0OUtd15is_MjgKGunk";
    const response = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/autocomplete/json`,
      {
        params: {
          input,
          types: "(cities)",
          key: apiKey,
        },
      }
    );
    if (response.data.predictions.length > 0) {
      const placeId = response.data.predictions[0].place_id;
      fetchPlaceDetails(placeId);
    }
  };

  const fetchPlaceDetails = async (placeId: string) => {
    const apiKey = "AIzaSyAinljVXrdyKQB_h0OUtd15is_MjgKGunk";
    const response = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json`,
      {
        params: {
          place_id: placeId,
          fields: "photo",
          key: apiKey,
        },
      }
    );
    if (response.data.result.photos && response.data.result.photos.length > 0) {
      const photoReference = response.data.result.photos[0].photo_reference;
      fetchPlacePhoto(photoReference);
    }
  };
  console.log(imageUrl);

  const fetchPlacePhoto = async (photoReference: string) => {
    const apiKey = "AIzaSyAinljVXrdyKQB_h0OUtd15is_MjgKGunk";
    const response = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo`,
      {
        params: {
          maxwidth: 400,
          photoreference: photoReference,
          key: apiKey,
        },
        responseType: "blob",
      }
    );
    const url = URL.createObjectURL(response.data);
    setImageUrl(url);
    console.log(url);
  };

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
      <div className="location-card__links">
        <input
          className="location-card__input"
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <p className="location-card__change">📍</p>
      </div>
    </div>
  );
};

export default LocationCard;
