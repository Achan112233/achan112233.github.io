import profilePic from "./assets/ant.jpg"

function Card(){
    return(
        <div className="card">
            <img className="card-image"src={profilePic} alt="profile picture"></img>
            <p className="card-text">I am a current computer science student at the University of Maryland, interested in both front-end and back-end development. 
                This summer, I will be attending CodePath as a intermediate student learning and enhancing my abilities in data structures and algorithms.
            I'm also passionate about all things software engineering, especially when I can relate it back to real-life dilemmas. 
            You can view my experiences and accomplishments here! 😎</p>
            <p className="interests"> My Interests: <br></br> Hiking, golfing, Swimming, Gaming, PC-building</p>
        </div>
    );
}

export default Card