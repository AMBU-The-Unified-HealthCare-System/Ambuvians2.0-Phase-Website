import "./Service.css";
import image from "./../../assets/images/home/videoCall.png"
const Home_Service =()=> {
  return (
    <>  
        <h2 className="home-service-heading">Services</h2>
        <div className="home-service">
            
            <div className="home-service-image">
                <img src={image} alt="image" />
            </div>
            <div className="home-service-content">
                <h4>Your Wellness, Our Priority: Streamlined Solutions for Modern Healthcare</h4>
                <p>With the advent of telemedicine, you can now consult doctors from the comfort of your home. This convenient and accessible approach to healthcare allows you to receive medical advice, prescriptions, and even treatment recommendations without the need for in-person visits. It{"'"}s a game-changer in healthcare, offering convenience and safety.</p>
                <button className="home-service-explore">Explore</button>
            </div>
        </div>
    </>
  );
}
export default Home_Service ;