import "./EventCard.scss";

type EventCardProps = {
  artist: string;
  date: string;
  venue: string;
  price: number | string;
  address: string;
};

const EventCard = ({ artist, date, venue, price, address }: EventCardProps) => {
  return (
    <div className="event-card">
      <div className="event-card__head">{artist}</div>
      <div className="event-card__date">{date}</div>
      <div className="event-card__venue">{venue} </div>
      <div className="event-card__address">P.C.:{address}</div>
      <div className="event-card__price">From £{price}</div>
    </div>
  );
};

export default EventCard;
