import EventCard from "../../components/eventCard/EventCard";
import "./Events.scss";

const Events = () => {
  return (
    <div className="events">
      <h3 className="events__head">Near me</h3>
      <EventCard />
      <EventCard />
      <EventCard />
    </div>
  );
};
export default Events;
