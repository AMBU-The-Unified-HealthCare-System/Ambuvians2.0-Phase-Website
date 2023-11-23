import "./Title.css";
import titleImg from "../../assets/images/title.webp";
import instagram from "../../assets/images/instagram.svg";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";

const Title = () => {
  return (
    <div className="title">
      <div className="title-content">
        <h1 className="title-content-heading">
          Ambuvians <span>Healthcare</span>
        </h1>
        <p className="title-content-para">
          &#34;Empowering health and wellness, we the &#39;Ambuviance&#39; is
          dedicated to providing cutting-edge solutions and compassionate care.
          With a team of skilled professionals and a commitment to innovation,
          we strive to make a positive impact on lives. Your well-being is our
          priority, and we are here to offer you rapid ambulance services
          organized by skilled medical professionals and advanced
          technologies.&#34;
        </p>
        <div className="btns">
          <div className="social-btn">
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={twitter} alt="twitter" />
          </div>
          <div className="explore">
            <button className="explore-btn">Explore</button>
          </div>
        </div>
      </div>
      <div className="title-image">
        <img src={titleImg} alt="" />
      </div>
    </div>
  );
};

export default Title;
