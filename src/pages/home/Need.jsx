import "./Need.css";
import need1 from "../../assets/images/need1.webp";
import need2 from "../../assets/images/need2.webp";
import need3 from "../../assets/images/need3.webp";
import need4 from "../../assets/images/need4.webp";

const Need = () => {
  return (
    <>
      <h2 className="need-heading">Why we need Ambuvians</h2>
      <div className="need">
        <div className="need-div">
          <div className="need-div1">
            <img src={need1} alt="Need" className="need-div1-img1" />
            <img src={need2} alt="Need" className="need-div1-img2" />
            <div>
              <h4>Ambuvians is on a mission to address these problems</h4>
              <p>
                Ambuvians is on a mission to address a wide range of problems,
                with the ultimate goal of making quality healthcare solutions
                accessible to everyone. We&#39;re here to simplify the complex and
                ensure healthcare is within reach for all.
              </p>
            </div>
          </div>
          <div className="need-div2">
            <img src={need3} alt="Need" className="need-div1-img3" />
            <img src={need4} alt="Need" className="need-div1-img4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Need;
