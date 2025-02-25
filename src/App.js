import style from './css/App.module.css';
import { NavBar } from './components/NavBar'

function App() {
  return (
    <div style={{backgroundColor: "#0D1117"}}>
      <div>
        <NavBar />
      </div>
      <div className={style.pageComponents}>
        <div className={style.personalCard}>
          <img src="headshot.jpeg" alt="headshot" style={{ width: '200px', height: "auto" }} />
          <p>Liam Bouffard</p>
          <p>(503) 875-9854</p>
          <p>liamtbo@gmail.com</p>
          <a href="https://github.com/liamtbo" target="_blank" rel="noreferrer" >Github</a>
          <a href="https://www.linkedin.com/in/liam-bouffard" target="_blank" rel="noreferrer" >LinkedIn</a>
        </div>
        <div className={style.infoOverall}>
          <div className={style.portfolioSeg}> 
            <h1>Welcome to My Portfolio</h1>
            <p>Welcome to my portfolio website. I'm Liam, a senior Computer Science student at the <a href="https://www.uoregon.edu/" target="_blank" rel="noopener noreferrer">University of Oregon</a>.</p>
            <p>Hello! I'm Liam, a passionate Computer Science student focused on machine learning, network security, and robotics. I am about to finish my Bachelor’s degree in Computer Science from the University of Oregon, where I specialize in machine learning and reinforcement learning. I aim to work in the robotics and AI field, particularly focusing on autonomous systems and multi-agent coordination.</p>
          </div>
          <div className={style.portfolioSeg}> 
            <h2>My Experience</h2>
            <p>I have had the opportunity to work as a Learning Assistant (LA) for intro-level CS classes, where I helped students understand complex concepts and provided guidance on assignments. In addition, I currently work as a Machine Learning Research Assistant under Assistant Professor Yu Wang, studying spatial-temporal machine learning and text classification models to identify state-representative keywords in SBIR abstracts. This role has helped me develop my skills in machine learning research, data analysis, and Python programming.</p>
          </div>
          <div className={style.portfolioSeg}> 
            <h2>My Projects</h2>
            <p>Here are some of the exciting projects I’ve worked on:</p>
            <ul>
              <li><strong>Lunar Landing DQN</strong>: A Deep Q-Learning (DQN) project where I trained an AI to land a spacecraft autonomously. This project helped me dive deep into reinforcement learning and AI for robotics.</li>
              <li><strong>Military Vehicle Image Classifier</strong>: A convolutional neural network (CNN)-based project where I classified military vehicle images. This project enhanced my understanding of computer vision and machine learning techniques for real-world applications.</li>
              <li><strong>Multi-Agent Drone System (Conceptual)</strong>: I’m currently planning to develop a multi-agent reinforcement learning system where drones learn to cooperate autonomously. This will combine my interests in drones, multi-agent systems, and reinforcement learning.</li>
            </ul>
          </div>
          <div className={style.portfolioSeg}> 
            <h2>Education</h2>
            <p>I am currently completing my Bachelor's degree in Computer Science, with a concentration in Machine Learning, from the University of Oregon. My coursework has included subjects like network security, machine learning, algorithms, and robotics. I am also considering pursuing a Master's in Robotics to further hone my skills in autonomous systems and robotics engineering.</p>
          </div>
          <div className={style.portfolioSeg}> 
            <h2>My Interests</h2>
            <p>In addition to my academic and professional work, I have a variety of interests that shape my goals and aspirations. I am particularly excited about the fields of robotics, autonomous systems, and artificial intelligence, especially in the context of drones and multi-agent coordination. I enjoy exploring reinforcement learning and its applications in real-world environments. In my free time, I like to fly drones, study new algorithms, and keep up with the latest developments in AI and robotics. I am passionate about how technology can be used to solve real-world problems, and I am always looking for new challenges and opportunities to learn.</p>
          </div>
          <div className={style.portfolioSeg}> 
            <p>Feel free to explore my portfolio to learn more about my work and how I can contribute to the future of technology!</p>
          </div>
        </div>
        <div className={style.educationCard}>
          <h2>Education</h2>
          <img src="UO.png" alt="UO" style={{ width: '150px', height: "auto" }}></img>
          <img src="OSU.png" alt="OSU" style={{ width: '150px', height: "auto" }}></img>
        </div>
      </div>
    </div>
  );
}

export default App;
