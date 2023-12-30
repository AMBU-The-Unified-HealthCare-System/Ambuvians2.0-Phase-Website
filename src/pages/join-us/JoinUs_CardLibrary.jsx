import MachineLearning from "./MachineLearning";
import WebDeveloper from "./WebDeveloper";
import ContentWriter from "./ContentWriter";
import AndroidDeveloper from "./AndroidDeveloper";
import VideoEditor from "./VideoEditor";
import GraphicDesigner from "./GraphicDesigner";
import "./JoinUs_Cardlibrary.css";


const JoinUs_CardLibrary = ()=> {
    return (
        <>
            <div className="JoinUs-cardlibrary">
                <div className="JoinUs-Parent">
                    <div className="joinUs-child1">
                       <WebDeveloper/>
                       <ContentWriter/>
                       <MachineLearning />
                    </div>
                    <div className="JoinUs-child2">
                        <VideoEditor />
                        <AndroidDeveloper />
                        <GraphicDesigner />
                    </div>
                </div>
            </div>
        </>
    )
}
export default JoinUs_CardLibrary;