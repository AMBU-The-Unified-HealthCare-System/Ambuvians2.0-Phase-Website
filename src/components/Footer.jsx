import "./Footer.css";
import play from "../assets/images/play-store.svg";
import apple from "../assets/images/apple.svg";
import insta from "../assets/images/insta.svg";
import whatsapp from "../assets/images/whatsapp.svg";
import x from "../assets/images/x.svg";
import linkedin from "../assets/images/linkedin.svg";
import location from "../assets/images/Location.webp";
import gmail from "../assets/images/Gmail.svg";
import call from "../assets/images/call.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="top-footer">
        <div className="left1">
          <h2 className="headings">
            India’s First Unified Health Care Services
          </h2>
          <div>
            <h3 className="headings">Get the app</h3>
            <div className="apk">
              <abbr title="Download Now !">
                <button>
                  <div>
                    <img src={play} alt="" className="play-store-img" />
                  </div>
                  <div>
                    <p className="apk-p">
                      Get It On <br />
                      <span>Google Play</span>
                    </p>
                  </div>
                </button>
              </abbr>
              <abbr title="Download Now !">
                <button>
                  <div>
                    <img src={apple} alt="" className="apple-store-img" />
                  </div>
                  <div>
                    <p className="apk-p">
                      Download On The <br />
                      <span>App Store</span>
                    </p>
                  </div>
                </button>
              </abbr>
            </div>
          </div>
          <div>
            <h3 className="headings">Follow us on</h3>
            <div className="icons">
              <abbr title="instagram" className="first-icon">
                <a
                  href="https://www.instagram.com/official.ambuvians/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={insta} alt="instagram icon" />
                </a>
              </abbr>
              <abbr title="whatsapp" className="second-icon">
                <a
                  href="https://wa.me/+7505853812"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={whatsapp} alt="whatsapp icon" />
                </a>
              </abbr>
              <abbr title="twitter" className="third-icon">
                <a href="https://www.threads.net/@official.ambuvians">
                  <img src={x} alt="twitter icon" />
                </a>
              </abbr>
              <abbr title="linkedin" className="fourth-icon">
                <a href="https://www.linkedin.com/company/ambuvians-healthcare-pvt-ltd/?viewAsMember=true">
                  <img src={linkedin} alt="linkedin icon" />
                </a>
              </abbr>
            </div>
          </div>
        </div>
        <div className="links-section">
          <div className="Knowus">
            <h2>Know Us</h2>
            <ul>
              <li className="nav-item">
                <span>
                  <a href="/">Home</a>
                </span>
              </li>
              <li>
                <span>
                  <a href="/about">Enquiry</a>
                </span>
              </li>
              <li>
                <span>
                  <a href="https://heyzine.com/flip-book/c538e2deab.html#page/1">
                    Handbook
                  </a>
                </span>
              </li>
              <li>
                <span>
                  <a href="/hiring">Join Us</a>
                </span>
              </li>
            </ul>
          </div>
          <div className="Services">
            <h2>Services</h2>
            <ul>
              <li>
                <span>
                  <a href="/services">Categorized Ambulance</a>
                </span>
              </li>
              <li>
                <span>
                  <a href="/services">Medicine Delivery</a>
                </span>
              </li>
              <li>
                <span>
                  <a href="/services">Ambuvian Cloud</a>
                </span>
              </li>
              <li>
                <span>
                  <a href="/services">Home Lab Tests</a>
                </span>
              </li>
            </ul>
          </div>
          <div className="contact">
            <h2 className="about-h2">Contact Us</h2>
            <ul>
              <li>
                <img
                  className="contact-icon"
                  src={location}
                  alt="google map icon"
                />
                <span>
                  <p>
                    <a
                      href="geo:28.752470765577947, 77.49913956776183"
                      target="_blank"
                      className="add"
                      rel="noreferrer"
                    >
                      4th Floor TBI KIET Group Of Institutions
                      <br />
                      Ghaziabad Delhi NCR 201206
                    </a>
                  </p>
                </span>
              </li>
              <li>
                <img className="contact-icon" src={gmail} alt="gmail icon" />
                <span>
                  <p>
                    <a href="mailto:contact@ambuvians.in">
                      contact@ambuvians.in
                    </a>
                    <br />
                    <a href="mailto:info@ambuvians.in ">info@ambuvians.in</a>
                  </p>
                </span>
              </li>
              <li>
                <img className="contact-icon" src={call} alt="ringtone icon" />
                <span>
                  <p>
                    <a href="tel:+7505853812">7505853812</a>
                    <br />
                    <a href="tel:+8630729931">8630729931</a>
                  </p>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="copyright">
        <h6>&#169; AMBUvians Healthcare Pvt. Ltd.</h6>
      </div>
    </div>
  );
}

export default Footer;
