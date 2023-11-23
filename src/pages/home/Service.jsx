import "./Service.css";
import service1 from "../../assets/images/service1.svg";
import service2 from "../../assets/images/service2.svg";
import service3 from "../../assets/images/service3.svg";
import service4 from "../../assets/images/service4.svg";
import serviceBackground from "../../assets/images/service.svg";

const Service = () => {
  return (
    <div className="service">
      <h2 className="service-heading">Services</h2>
      <div className="service-content">
        <div className="service-points">
          <div className="service-point">
            <img src={service1} alt="service 1" />
            <p>Customized Ambulances</p>
          </div>
          <div className="service-point">
            <img src={service2} alt="service 2" />
            <p>On Tap Medicine Delivery</p>
          </div>
          <div className="service-point">
            <img src={service3} alt="service 3" />
            <p>Home Lab Test</p>
          </div>
          <div className="service-point">
            <img src={service4} alt="service 4" />
            <p>Ambuvian cloud</p>
          </div>

          <img src={serviceBackground} alt="" className="service-background" />
        </div>
        <div className="service-text">
          <h4>
            Your Wellness, Our Priority: Streamlined Solutions for Modern
            Healthcare
          </h4>
          <p>
            With the advent of telemedicine, you can now consult doctors from
            the comfort of your home. This convenient and accessible approach to
            healthcare allows you to receive medical advice, prescriptions, and
            even treatment recommendations without the need for in-person
            visits. It&#39;s a game-changer in healthcare, offering convenience
            and safety.
          </p>
          <div className="explore">
            <button className="explore-btn e">Explore</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
