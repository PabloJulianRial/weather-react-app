import Events from "../events/Events";
import Travel from "../travel/Travel";
import "./InfoTravelEvents.scss";

const InfoTravelEvents = () => {
  return (
    <div className="infoTravelEvents">
      <Travel />
      <Events />
    </div>
  );
};

export default InfoTravelEvents;
