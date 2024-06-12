import "./EventCard.scss";

const EventCard = () => {
  return (
    <div className="event-card">
      <div className="event-card__head">Guns and roses</div>
      <div className="event-card__date">14/12/24</div>
      <div className="event-card__venue">O2</div>
      <div className="event-card__price">$500</div>
    </div>
  );
};

const eventsUrl =
  "https://app.ticketmaster.com/discovery/v2/events?apikey=kCl7cTQ8wCZw7257GtES8thJWAgACb4j&keyword=music&latlong=51.6493005,-0.0629173&radius=5&unit=miles&source=ticketmaster&locale=*&startDateTime=2024-06-12T17:06:00Z&endDateTime=2024-06-18T17:07:00Z";

export default EventCard;
