import "./Section-1-JoinUs.css"
import image1 from "./../../assets/images/joinUs/Illustration.svg"
const Secton_1_JoinUs = () =>{
    return (
        
            <div className="LandingJoinUs">
                <div className="landingJoinUs1">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="109" height="90" viewBox="0 0 109 90" fill="none">
                        <   path d="M50.3094 0.641878C40.2733 1.41846 30.689 4.366 22.5807 9.16952C14.4723 13.973 8.14465 20.452 4.27376 27.9142C0.402871 35.3764 -0.865755 43.5413 0.603434 51.5365C2.07262 59.5317 6.22441 67.0567 12.6152 73.3075C19.0059 79.5583 27.3955 84.2999 36.8874 87.0257C46.3793 89.7515 56.6169 90.3591 66.5061 88.7834C76.3954 87.2078 85.5648 83.5082 93.0344 78.08C100.504 72.6518 105.993 65.6989 108.916 57.9643L85.8318 52.3615C84.1761 56.7437 81.0661 60.683 76.834 63.7585C72.6019 66.834 67.4067 68.9301 61.8037 69.8228C56.2007 70.7155 50.4004 70.3713 45.0225 68.8269C39.6446 67.2826 34.8913 64.5961 31.2705 61.0545C27.6496 57.513 25.2973 53.2495 24.4649 48.7196C23.6325 44.1898 24.3513 39.5637 26.5444 35.3358C28.7376 31.108 32.3227 27.4371 36.9167 24.7156C41.5106 21.994 46.9409 20.324 52.6271 19.884L50.3094 0.641878Z" fill="url(#paint0_linear_5571_1644)"/>
                            <defs>
                        <linearGradient id="paint0_linear_5571_1644" x1="82.6306" y1="102.452" x2="-2.09788" y2="22.0278" gradientUnits="userSpaceOnUse">
                        < stop stopColor="#FFC5C8"/>
                        <stop offset="1" stopColor="#EBEBEB"/>
                        </linearGradient>
                        </defs>
                        </svg>
                    </div>
                    <div className="img2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="117" height="61" viewBox="0 0 117 61" fill="none">
                            <path d="M2.00668 60.4259C1.55753 41.0934 14.3349 34.7991 40.3387 41.5429C66.3425 48.2868 79.1198 41.9925 78.6707 22.66C78.2215 3.32751 90.9989 -2.96681 117.003 3.77703" stroke="white" strokeWidth="2"/>
                        </svg>
                    </div>
                </div>
                <div className="flexdivJoinUs">
                    
                    <div>
                        <h1 className="h1JoinUs">
                        Find a work that suits your interest & skills.
                        </h1>
                        <p className="pJoinUs">
                        Look no further! Ambuvians is a vibrant startup offering
                         exciting internship opportunities in various fields. Whether you{"'"}re
                          into software development, marketing, design, or data analysis,
                           we have a place for you. Gain hands-on experience, mentorship,
                            and exposure to innovative projects. Our program is designed 
                            for skill development, networking, and personal growth. 
                            Collaborate with industry professionals, contribute to real 
                            projects, and kick-start your career.
                        </p>
                    </div>
                    <div className="landingJoinUs3">
                        <img src={image1}  className="image1" alt="" />

                    </div>
                    
                </div>
                <button className="buttonJoinUs">
                        Join us as Campus Ambassador
                    </button>
                <div>
                {/* <JobSearchComponent/> */}
                </div>
            </div>

            )
        }
export default Secton_1_JoinUs;
