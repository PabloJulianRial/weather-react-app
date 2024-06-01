import InfoTravelEvents from "../infoTravelEvents/InfoTravelEvents";
import ToDo from "../toDo/ToDo";
import "./Info.scss";

const Info = () => {
  return (
    <div className="info">
      <ToDo />
      <InfoTravelEvents />
    </div>
  );
};

export default Info;
