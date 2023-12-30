import "./Join-Us.css"
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Section1 from "./Section-1-Join-Us";
import JoinUs_CardLibrary from "./JoinUs_CardLibrary";
const Join_Us = () =>{
    return (
        <div className="JoinUs-container">
            
        <Navbar />
        <Section1 />
        <JoinUs_CardLibrary />
        
        
        {/* <Footer/> */}
        </div>
    )
}
export default Join_Us;