
import "./JoinUs_Cardlibrary.css";
import webdimg from "./../../assets/images/joinUs/webdeveloper.png"

const JoinUs_CardLibrary = ()=> {
    return (
        <>
            <div className="JoinUs-cardlibrary">
                <div className="JoinUs-Parent">
                    <div className="joinUs-child1">
                       <img src={webdimg} className="webd"/>
                       <img src={webdimg} alt="" className="ml" />
                       <img src={webdimg} alt="" className="video-editor"/>
                    </div>
                    <div className="joinUs-child2">
                        <img src={webdimg} alt="" className="graphic-designer" />
                        <img src={webdimg} alt="" className="android-developer"/>
                        <img src={webdimg} alt="" className="content-writing"/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default JoinUs_CardLibrary;