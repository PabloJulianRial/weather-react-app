import "./Dashboard.scss";
import Weather from "../weather/Weather";
import Info from "../info/Info";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Weather />
      <Info />
    </div>
  );
};

export default Dashboard;
