import profilePic from './assets/ant.jpg'

function Card(){
    return(
        <div className="card">
            <img className="card-image"src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Anthony Chan</h2>
            <p className="card-text">Hi, I'm Anthony! I am a current computer science student at the University of Maryland,  interested in both front-end and back-end development. 
            I am very enthusiastic about leveraging modern advancements and technology to address real-world challenges, particularly in software development. 
            You can view my experiences and accomplishments here. 😎</p>
        </div>
    );
}

export default Card