import "./../home/Home.css";
import Experience from "./../home/Experience";
import Feedback from "./../home/Feedback";
import FeedbackForm from "./../home/FeedbackForm";
import Mentor from "./../home/Mentor";
import Need from "./../home/Need";
import Partners from "./../home/Partners";
import Service from "./../home/Service";
import Statistics from "./../home/Statistics";
import Title from "./../home/Title";
import Vision from "./../home/Vision";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <>
    <Navbar/>
    <div style={{ marginTop: "9vh" }}>
      <Title />
      <Statistics />
      <Vision />
      <Service />
      <Experience />
      
      <Need />
      <div className="backing">
        <Mentor />
        <Partners />
        <Feedback />
      </div>
      <FeedbackForm /> 
    </div>
    {/* <Footer/> */}
    </>
  );
};

export default Home;
