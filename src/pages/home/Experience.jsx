import "./Experience.css";
import experienceImg from "../../assets/images/experience.svg";
import check from "../../assets/images/check.svg";

const Experience = () => {
  return (
    <>
      <h2 className="experience-heading">What makes us Different</h2>
      <div className="experience">
        <div className="exp">
          <div className="experience-text">
            <h4>Experience the all in one portal for all your needs like</h4>
            <div className="experiences-points">
              <div className="experience-points">
                <ul>
                  <li>
                    <img src={check} alt="tick" />
                    <p className="experience-point">24/7 patient support</p>
                  </li>
                  <li>
                    <img src={check} alt="" />
                    <p className="experience-point">
                      Customized and Reliable Ambulance Service{" "}
                    </p>
                  </li>
                  <li>
                    <img src={check} alt="" />
                    <p className="experience-point">Book medicines on one tap</p>
                  </li>
                </ul>
                <button className="explore exp-btn">Explore</button>
              </div>
              <div className="experience-points">
                <ul>
                  <li>
                    <img src={check} alt="" />
                    <p className="experience-point">Track your daily dosage</p>
                  </li>
                  <li>
                    <img src={check} alt="" />
                    <p className="experience-point">
                      Emergency assistance time of 15 minutes or less
                    </p>
                  </li>
                  <li>
                    <img src={check} alt="" />
                    <p className="experience-point">
                      Get one tap analysis of your medicines, prescriptions
                    </p>
                  </li>
                </ul>
                <button className="download exp-btn">Download the App</button>
              </div>
            </div>
          </div>
          <div className="experience-img">
            <img src={experienceImg} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
