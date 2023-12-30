
import "./Card_Library.css";


const teamData = [
    {
    id : 1,
    name : "Mike Cannon" ,
    position : "Insert your title here" ,
    para : "There are many variatons of passages of Lorum Ipsum availbale",
    profile:"https://cdn.builder.io/api/v1/image/assets/TEMP/6855baf356cfc0260a11c86ebc4866dbb2cb06b0f0273b75148fba5c677e562f?apiKey=052693730d024b73b5367ca01ded0a96&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6855baf356cfc0260a11c86ebc4866dbb2cb06b0f0273b75148fba5c677e562f?apiKey=052693730d024b73b5367ca01ded0a96&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6855baf356cfc0260a11c86ebc4866dbb2cb06b0f0273b75148fba5c677e562f?apiKey=052693730d024b73b5367ca01ded0a96&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6855baf356cfc0260a11c86ebc4866dbb2cb06b0f0273b75148fba5c677e562f?apiKey=052693730d024b73b5367ca01ded0a96&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6855baf356cfc0260a11c86ebc4866dbb2cb06b0f0273b75148fba5c677e562f?apiKey=052693730d024b73b5367ca01ded0a96&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6855baf356cfc0260a11c86ebc4866dbb2cb06b0f0273b75148fba5c677e562f?apiKey=052693730d024b73b5367ca01ded0a96&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6855baf356cfc0260a11c86ebc4866dbb2cb06b0f0273b75148fba5c677e562f?apiKey=052693730d024b73b5367ca01ded0a96&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6855baf356cfc0260a11c86ebc4866dbb2cb06b0f0273b75148fba5c677e562f?apiKey=052693730d024b73b5367ca01ded0a96&",
    twitter : "https://twiiter.com",
    mail : "https://gmail.com",
    linkedin : "https://linkedin.com",
    },
    {
    id : 2,
    name : "Amanda Fischer" ,
    position : "Insert your title here" ,
    para : "There are many variatons of passages of Lorum Ipsum availbale",
    profile: "https://cdn.builder.io/api/v1/image/assets/TEMP/a09f0a00263c72e0e3444930aada32aa95f2f049da39f0895e8b9c0722e1ff08?apiKey=052693730d024b73b5367ca01ded0a96&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a09f0a00263c72e0e3444930aada32aa95f2f049da39f0895e8b9c0722e1ff08?apiKey=052693730d024b73b5367ca01ded0a96&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a09f0a00263c72e0e3444930aada32aa95f2f049da39f0895e8b9c0722e1ff08?apiKey=052693730d024b73b5367ca01ded0a96&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a09f0a00263c72e0e3444930aada32aa95f2f049da39f0895e8b9c0722e1ff08?apiKey=052693730d024b73b5367ca01ded0a96&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a09f0a00263c72e0e3444930aada32aa95f2f049da39f0895e8b9c0722e1ff08?apiKey=052693730d024b73b5367ca01ded0a96&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a09f0a00263c72e0e3444930aada32aa95f2f049da39f0895e8b9c0722e1ff08?apiKey=052693730d024b73b5367ca01ded0a96&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a09f0a00263c72e0e3444930aada32aa95f2f049da39f0895e8b9c0722e1ff08?apiKey=052693730d024b73b5367ca01ded0a96&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a09f0a00263c72e0e3444930aada32aa95f2f049da39f0895e8b9c0722e1ff08?apiKey=052693730d024b73b5367ca01ded0a96&",
    twitter : "https://twiiter.com",
    mail : "https://gmail.com",
    linkedin : "https://linkedin.com",
    },
    {
    id : 3,
    name : "Amanda Fischer" ,
    position : "Insert your title here" ,
    para : "There are many variatons of passages of Lorum Ipsum availbale",
    profile: "https://cdn.builder.io/api/v1/image/assets/TEMP/a09f0a00263c72e0e3444930aada32aa95f2f049da39f0895e8b9c0722e1ff08?apiKey=052693730d024b73b5367ca01ded0a96&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a09f0a00263c72e0e3444930aada32aa95f2f049da39f0895e8b9c0722e1ff08?apiKey=052693730d024b73b5367ca01ded0a96&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a09f0a00263c72e0e3444930aada32aa95f2f049da39f0895e8b9c0722e1ff08?apiKey=052693730d024b73b5367ca01ded0a96&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a09f0a00263c72e0e3444930aada32aa95f2f049da39f0895e8b9c0722e1ff08?apiKey=052693730d024b73b5367ca01ded0a96&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a09f0a00263c72e0e3444930aada32aa95f2f049da39f0895e8b9c0722e1ff08?apiKey=052693730d024b73b5367ca01ded0a96&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a09f0a00263c72e0e3444930aada32aa95f2f049da39f0895e8b9c0722e1ff08?apiKey=052693730d024b73b5367ca01ded0a96&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a09f0a00263c72e0e3444930aada32aa95f2f049da39f0895e8b9c0722e1ff08?apiKey=052693730d024b73b5367ca01ded0a96&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a09f0a00263c72e0e3444930aada32aa95f2f049da39f0895e8b9c0722e1ff08?apiKey=052693730d024b73b5367ca01ded0a96&", 
    twitter : "https://twiiter.com",
    mail : "https://gmail.com",
    linkedin : "https://linkedin.com",
    },
    {
    id : 4,
    name : "Erika Gofas" ,
    position : "Insert your title here" ,
    para : "There are many variatons of passages of Lorum Ipsum availbale",
    profile: "https://cdn.builder.io/api/v1/image/assets/TEMP/a09f0a00263c72e0e3444930aada32aa95f2f049da39f0895e8b9c0722e1ff08?apiKey=052693730d024b73b5367ca01ded0a96&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a09f0a00263c72e0e3444930aada32aa95f2f049da39f0895e8b9c0722e1ff08?apiKey=052693730d024b73b5367ca01ded0a96&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a09f0a00263c72e0e3444930aada32aa95f2f049da39f0895e8b9c0722e1ff08?apiKey=052693730d024b73b5367ca01ded0a96&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a09f0a00263c72e0e3444930aada32aa95f2f049da39f0895e8b9c0722e1ff08?apiKey=052693730d024b73b5367ca01ded0a96&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a09f0a00263c72e0e3444930aada32aa95f2f049da39f0895e8b9c0722e1ff08?apiKey=052693730d024b73b5367ca01ded0a96&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a09f0a00263c72e0e3444930aada32aa95f2f049da39f0895e8b9c0722e1ff08?apiKey=052693730d024b73b5367ca01ded0a96&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a09f0a00263c72e0e3444930aada32aa95f2f049da39f0895e8b9c0722e1ff08?apiKey=052693730d024b73b5367ca01ded0a96&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a09f0a00263c72e0e3444930aada32aa95f2f049da39f0895e8b9c0722e1ff08?apiKey=052693730d024b73b5367ca01ded0a96&",
    twitter : "https://twiiter.com",
    mail : "https://mail.com",
    linkedin : "https://linkedin.com",
    },
    {
        id : 5,
        name : "Erika Gofas" ,
        position : "Insert your title here" ,
        para : "There are many variatons of passages of Lorum Ipsum availbale",
        profile: "https://cdn.builder.io/api/v1/image/assets/TEMP/a09f0a00263c72e0e3444930aada32aa95f2f049da39f0895e8b9c0722e1ff08?apiKey=052693730d024b73b5367ca01ded0a96&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a09f0a00263c72e0e3444930aada32aa95f2f049da39f0895e8b9c0722e1ff08?apiKey=052693730d024b73b5367ca01ded0a96&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a09f0a00263c72e0e3444930aada32aa95f2f049da39f0895e8b9c0722e1ff08?apiKey=052693730d024b73b5367ca01ded0a96&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a09f0a00263c72e0e3444930aada32aa95f2f049da39f0895e8b9c0722e1ff08?apiKey=052693730d024b73b5367ca01ded0a96&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a09f0a00263c72e0e3444930aada32aa95f2f049da39f0895e8b9c0722e1ff08?apiKey=052693730d024b73b5367ca01ded0a96&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a09f0a00263c72e0e3444930aada32aa95f2f049da39f0895e8b9c0722e1ff08?apiKey=052693730d024b73b5367ca01ded0a96&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a09f0a00263c72e0e3444930aada32aa95f2f049da39f0895e8b9c0722e1ff08?apiKey=052693730d024b73b5367ca01ded0a96&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a09f0a00263c72e0e3444930aada32aa95f2f049da39f0895e8b9c0722e1ff08?apiKey=052693730d024b73b5367ca01ded0a96&",
        twitter : "https://twiiter.com",
        mail : "https://mail.com",
        linkedin : "https://linkedin.com",
    },
    {
        id : 6,
        name : "Erika Gofas" ,
        position : "Insert your title here" ,
        para : "There are many variatons of passages of Lorum Ipsum availbale",
        profile: "https://cdn.builder.io/api/v1/image/assets/TEMP/a09f0a00263c72e0e3444930aada32aa95f2f049da39f0895e8b9c0722e1ff08?apiKey=052693730d024b73b5367ca01ded0a96&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a09f0a00263c72e0e3444930aada32aa95f2f049da39f0895e8b9c0722e1ff08?apiKey=052693730d024b73b5367ca01ded0a96&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a09f0a00263c72e0e3444930aada32aa95f2f049da39f0895e8b9c0722e1ff08?apiKey=052693730d024b73b5367ca01ded0a96&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a09f0a00263c72e0e3444930aada32aa95f2f049da39f0895e8b9c0722e1ff08?apiKey=052693730d024b73b5367ca01ded0a96&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a09f0a00263c72e0e3444930aada32aa95f2f049da39f0895e8b9c0722e1ff08?apiKey=052693730d024b73b5367ca01ded0a96&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a09f0a00263c72e0e3444930aada32aa95f2f049da39f0895e8b9c0722e1ff08?apiKey=052693730d024b73b5367ca01ded0a96&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a09f0a00263c72e0e3444930aada32aa95f2f049da39f0895e8b9c0722e1ff08?apiKey=052693730d024b73b5367ca01ded0a96&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a09f0a00263c72e0e3444930aada32aa95f2f049da39f0895e8b9c0722e1ff08?apiKey=052693730d024b73b5367ca01ded0a96&",
        twitter : "https://twiiter.com",
        mail : "https://mail.com",
        linkedin : "https://linkedin.com",
    },
]
const Card_Library = () => {
    return (
        <div>
        <div className="member">
          
          <div className="member-cards">
            {teamData.map((member) => {
              return (
                <div key={member.id} className="member-card">
                  <img loading="lazy" src={member.profile} alt="profile-image" className="member-img" />
                  <div className="member-details">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-position">{member.position}</p>
                  <p className="member-para">{member.para}</p>
                  <div className="member-socials">
                    <a href={member.twitter}>
                        <div className="profile-image-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M16.2275 2.93061C15.4775 3.29811 14.7425 3.44736 13.9775 3.67311C13.1368 2.72436 11.8903 2.67186 10.6925 3.12036C9.49479 3.56886 8.71029 4.66536 8.72754 5.92311V6.67311C6.29379 6.73536 4.12629 5.62686 2.72754 3.67311C2.72754 3.67311 -0.408961 9.24786 5.72754 11.9231C4.32354 12.8584 2.92329 13.4891 1.22754 13.4231C3.70854 14.7754 6.41229 15.2404 8.75304 14.5609C11.438 13.7809 13.6445 11.7686 14.4913 8.75436C14.7439 7.83761 14.8693 6.8905 14.864 5.93961C14.8625 5.75286 15.9965 3.86061 16.2275 2.92986V2.93061Z" stroke="white" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </a>
                    <a href={member.linkedin}>
                        <div className="profile-image-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path  d="M4.5 3.5625C3.98223 3.5625 3.5625 3.98223 3.5625 4.5V13.5C3.5625 14.0178 3.98223 14.4375 4.5 14.4375H13.5C14.0178 14.4375 14.4375 14.0178 14.4375 13.5V4.5C14.4375 3.98223 14.0178 3.5625 13.5 3.5625H4.5ZM2.4375 4.5C2.4375 3.36091 3.36091 2.4375 4.5 2.4375H13.5C14.6391 2.4375 15.5625 3.36091 15.5625 4.5V13.5C15.5625 14.6391 14.6391 15.5625 13.5 15.5625H4.5C3.36091 15.5625 2.4375 14.6391 2.4375 13.5V4.5ZM6 7.6875C6.31066 7.6875 6.5625 7.93934 6.5625 8.25V12C6.5625 12.3107 6.31066 12.5625 6 12.5625C5.68934 12.5625 5.4375 12.3107 5.4375 12V8.25C5.4375 7.93934 5.68934 7.6875 6 7.6875ZM6.5625 6C6.5625 5.68934 6.31066 5.4375 6 5.4375C5.68934 5.4375 5.4375 5.68934 5.4375 6V6.0075C5.4375 6.31816 5.68934 6.57 6 6.57C6.31066 6.57 6.5625 6.31816 6.5625 6.0075V6ZM9.48036 7.95717C9.38156 7.79544 9.20339 7.6875 9 7.6875C8.68934 7.6875 8.4375 7.93934 8.4375 8.25V9.75V12C8.4375 12.3107 8.68934 12.5625 9 12.5625C9.31066 12.5625 9.5625 12.3107 9.5625 12V9.75C9.5625 9.50136 9.66127 9.2629 9.83709 9.08709C10.0129 8.91127 10.2514 8.8125 10.5 8.8125C10.7486 8.8125 10.9871 8.91127 11.1629 9.08709C11.3387 9.2629 11.4375 9.50136 11.4375 9.75V12C11.4375 12.3107 11.6893 12.5625 12 12.5625C12.3107 12.5625 12.5625 12.3107 12.5625 12V9.75C12.5625 9.20299 12.3452 8.67839 11.9584 8.29159C11.5716 7.9048 11.047 7.6875 10.5 7.6875C10.1394 7.6875 9.78845 7.78196 9.48036 7.95717Z" fill="white"/>
                            </svg>
                        </div>
                    </a>
                    <a href={member.mail}>
                        <div className="profile-image-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path  d="M3.05732 4.89794C3.1745 4.51381 3.5317 4.23438 3.95416 4.23438H14.4542C14.8766 4.23438 15.2338 4.51381 15.351 4.89794L9.20416 8.99583L3.05732 4.89794ZM1.89169 5.16157C1.89158 5.16757 1.89157 5.17357 1.89166 5.17957V12.6719C1.89166 13.811 2.81507 14.7344 3.95416 14.7344H14.4542C15.5933 14.7344 16.5167 13.811 16.5167 12.6719V5.17956M15.3917 6.22292V12.6719C15.3917 13.1896 14.9719 13.6094 14.4542 13.6094H3.95416C3.43639 13.6094 3.01666 13.1896 3.01666 12.6719V6.22292L8.89214 10.1399C9.08109 10.2659 9.32724 10.2659 9.51618 10.1399L15.3917 6.22292ZM16.5166 5.16158C16.5111 4.02723 15.5898 3.10938 14.4542 3.10938H3.95416C2.81851 3.10938 1.89723 4.02723 1.89169 5.16157" fill="white"/>
                            </svg>   
                        </div>
                    </a>
                  </div>
                  </div>
                </div>
                
              );
            })}
          </div>
        </div>
        </div>
      );
}
export default Card_Library ;