import "./LoginPage.css";
import { Link } from "react-router-dom";
import googleDownload from "../../assets/images/Google Play Badge.svg";
import appleDownload from "../../assets/images/App Store Badge.svg";
import Ambuvians from "../../assets/images/Ambuvians (3508 x 4960 px) 1.png"
import Logo from "../../assets/images/Picsart_23-06-23_23-27-16-227-removebg-preview 1.png"
import googlesign from "../../assets/images/iconfinder_Google_1298745 1.png"
import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup} from "firebase/auth";
import { auth, googleProvider } from "../../firebase";
function LoginPage (){
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  //sign up with email and password
  const signUp=(e)=>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password)
     .then((userCredential)=>{
      console.log(userCredential);
     })
     .catch((error)=>{
      console.log(error);
     });
  };
  //sign uo with google
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch(err){
      console.error(err);
    }
  };


  return (
    <div className="LoginContainer">
      <div className="left">
        <div className="LiveLocationTracker">
          <h3>Live Location Tracker</h3>
        </div>
        <div className="leftImageContainer">
          <div className="img">
            <img src={ Ambuvians } alt="" loading="lazy" />
          </div>
          <div className="eclipse"></div>
        </div>
        <div className="AmbuviansHealthcare">
          <span className="Ambuvians1">Ambuvians </span>
          <span className="Healthcare1">Healthcare</span>
        </div>
      </div>
      <div className="right">
        <div className="head">
          <div className="rightImageConatiner">
            <img
              src={Logo}
              alt=""
            />
          </div>
          <div className="Ambuvians2">
            <span>
              Ambuvians <span className="ambu">Healthcare</span>{" "}
            </span>
          </div>
          <div className="create-account">
            <span>Create Account</span>
          </div>
          <span className="family">Be part of Ambuvians family</span>
        </div>
        <div className="input-box">


















          <form action="" className="form">
            <div>
              <div className="form-fields">
              <div className="box firstName">
                <label htmlFor="">Full name</label>
                <input type="text" name="" id="" placeholder="Ambuvians" />
              </div>
              </div>
              <div className="form-fields">
              <div className="box Email">
                <label htmlFor="">Email</label>
                <input type="email" name="" id="" placeholder="ambu.vians@example.com" value={email} required onChange={(e)=> setEmail(e.target.value)} />
              </div>
              <div className="box Dob">
                <label htmlFor="">
                  Date of birth <span>(MM/DD/YY)</span>
                </label>
                <input type="date" name="" id="" required />
              </div>
              </div>
              <div className="form-fields">
              <div className="box Password">
                <label htmlFor="">Password</label>
                <input type="password" name="" id="" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
              </div>
              <div className="box ConfirmPassword">
                <label htmlFor="">Confirm Password</label>
                <input type="password" name="" id="" required/>
              </div>
            </div>
            </div>
            <div className="rememberForgot">
              <div className="remember">
                <input type="checkbox" name="" id="" />
                <label htmlFor="" className="rem">
                  Remeber me
                </label>
              </div>
              <div className="forgot">
                <a href="/">Forgot password?</a>
              </div>
            </div>
            <div className="terms">
              <input type="checkbox" name="" id="" />
              <label htmlFor="" className="conditions">
                I agree to <span>Terms </span>
                and <span>Conditions</span>
              </label>
            </div>
          


























          <div className="createSign">
            <div className="createAccount">
              <button onClick={signUp} className="create">Create Account</button>
            </div>
            <div className="signAccount">
              
              <button className="sign" onClick={signInWithGoogle} >
                <div className="google">
                <img src={googlesign} alt="" loading="lazy"/>
                </div>
                <div className="signwithgoogle">
                Sign in with Google
                </div>
                </button>
                
            </div>
          </div>
          </form>
          <div className="DoyouHaveAccount">
            <p>
              Already have an account? <span><Link to="/signup">Log in</Link></span>{" "}
            </p>
          </div>
          <div className="download">
            <div className="downloadAndroid">
              <img src={googleDownload} alt="" loading="lazy"/>
            </div>
            <div className="downloadios">
              <img src={appleDownload} alt="" loading="lazy"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;