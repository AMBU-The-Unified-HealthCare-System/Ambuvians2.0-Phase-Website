import "./Statistics.css";
import stats1 from "../../assets/images/stats1.webp";
import stats2 from "../../assets/images/stats2.webp";
import stats3 from "../../assets/images/stats3.webp";
import stats4 from "../../assets/images/stats4.webp";
import stats5 from "../../assets/images/stats5.webp";

const Statistics = () => {
  return (
    <div className="statistic">
      <h2 className="statistics-heading">Statistics</h2>
      <div className="stats-details">
        <div className="stats-detail">
          <img src={stats1} alt="statistic 1" />
          <h4>46,328+</h4>
          <p>Ambulances</p>
        </div>
        <div className="stats-detail">
          <img src={stats2} alt="statistic 2" />
          <h4>46,328+</h4>
          <p>Health Personals</p>
        </div>
        <div className="stats-detail">
          <img src={stats3} alt="statistic 3" />
          <h4>1,00,000+</h4>
          <p>Patients</p>
        </div>
        <div className="stats-detail">
          <img src={stats4} alt="statistic 4" />
          <h4>5,000+</h4>
          <p>Health Policies</p>
        </div>
        <div className="stats-detail">
          <img src={stats5} alt="statistic 5" />
          <h4>46,328+</h4>
          <p>Hospital Tie ups</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
