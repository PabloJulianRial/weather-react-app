import axios from "axios";
import { useEffect, useState } from "react";
import EventCard from "../../components/eventCard/EventCard";
import { useWeather } from "../../context/WeatherContext";

import "./Events.scss";

const Events = () => {
  const { currentWeather, forecast } = useWeather();
  const [events, setEvents] = useState<Events[]>([]);

  useEffect(() => {
    if (!currentWeather || !forecast) {
      return;
    }
    const fetchEvents = async () => {
      try {
        const localtime = currentWeather.location.localtime;
        const startTime =
          localtime.slice(0, 10) + "T" + localtime.slice(11, 16) + ":00Z";
        const month = (Number(localtime.slice(8, 10)) + 7).toString();
        const endTime =
          localtime.slice(0, 8) +
          month +
          "T" +
          localtime.slice(11, 16) +
          ":00Z";

        const lat = currentWeather.location.lat;
        const lon = currentWeather.location.lon;
        const apiKeyEvents = process.env.REACT_APP_TM_API_KEY;
        const baseUrlEvents =
          "https://app.ticketmaster.com/discovery/v2/events?apikey=kCl7cTQ8wCZw7257GtES8thJWAgACb4j&locale=*";
        const eventsResponse = await axios.get(baseUrlEvents, {
          params: {
            classificationName: "music",
            latlong: `${lat},${lon}`,
            radius: 50,
            unit: "miles",
            startDateTime: startTime,
            endDateTime: endTime,
            apikey: apiKeyEvents,
            size: 5,
          },
        });
        if (eventsResponse.data._embedded) {
          setEvents(eventsResponse.data._embedded.events);
        } else {
          setEvents([]);
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchEvents();
    console.log(events);
  }, [currentWeather, forecast]);

  return (
    <div className="events">
      <h3 className="events__head">Concerts near me this week</h3>

      {events.map((event, index) => {
        const price =
          event.priceRanges && event.priceRanges[0]
            ? event.priceRanges[0].min
            : "N/A";
        return (
          <EventCard
            key={index}
            artist={event.name}
            date={event.dates.start.localDate}
            venue={event._embedded.venues[0].name}
            price={price}
            address={event._embedded.venues[0].postalCode}
          />
        );
      })}
    </div>
  );
};

export default Events;
