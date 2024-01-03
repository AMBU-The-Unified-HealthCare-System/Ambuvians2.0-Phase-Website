import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import mainimg1 from "../../assets/images/about/about1.png"
import mainimg2 from "../../assets/images/about/about2.png"
import Card from "./Card"
import Card_Library from "./Card_Library"
import "./About.css"
const About = ()=>{
    return (
        <>
            <Navbar/>
            <div>
                <img src={mainimg1} alt=""  className="about-img1"/>
            </div>
            <div className="about-section-2">
                <div className="about-img-2">
                    <img src={mainimg2} alt="" className="img2About"/>
                </div>
                <div className="about-ourMission">
                    <h2>Our Mission</h2>
                    <p className="about-ourMission-P">As a dedicated team of individuals who deeply care
                        about your precious time and the well-being of 
                        your loved ones, we intimately understand the 
                        distress that ensues from the untimely response
                        of hospitals and ambulances during critical 
                        junctures. Our mission revolves around reshaping
                        the perception of medical facilities in India,
                        replacing fear with assurance. We aim to imbue
                        our fellow citizens with a renewed sense of 
                        security, trusting in a healthcare system that 
                        values both time and lives.</p>
                </div>
            </div>
            <div>
                <h6 className="about-heading1">Who we are</h6>
                <h1 className = "about-heading2">Meet Our team</h1>
            </div>
            <Card />
            <Card_Library/>
            {/* <Footer/> */}
        </>
    )
}
export default About