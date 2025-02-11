import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from '../components/NavBar'
import styles from '../css/Projects.module.css'
import { LunarLander } from '../components/LunarLander'
import { MilitaryVehicleCNN } from '../components/MilitaryVehicleCNN'

export function Projects() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");

  function handleSumbit(e) {
    e.preventDefault();
    setResult(value)
  }

  function handleChange(e) {
    setValue(e.target.value);
    setResult("");
  }

  return (
    <div>
      < NavBar />
      <div className={styles.pageTitle}>
        <h1>Projects</h1>
        <form onSubmit={handleSumbit}>
          <label>Which project would you like more information on? </label>
          <input
            valye={value}
            onInput={handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
        <p><strong>Options:</strong> Lunar Lander, Vehicle Classification</p>

        {result.toLowerCase() === "lunar lander" && (
          <div className={styles.longProjectDescription}>
            < LunarLander />
          </div>)
        }

        {result.toLowerCase() === "vehicle classification" && (
          <div className={styles.longProjectDescription}>
            < MilitaryVehicleCNN />
          </div>
        )}

        {/*makes projects display horizontally */}
        <div className={styles.projectsContainer}>
          {/*makes project descriptions become column */}
          <div className={styles.projectsCard}>
            <a href="https://github.com/liamtbo/lunar_landing_dqn" target="_blank" rel="noreferrer" className={styles.projectNames}>Lunar Lander</a>
            <img src="lunar-lander.png" alt="lunar landing" style={{ width: '300px', height: '200px' }}/>
            <p>A reinforcement learning project using Deep Q-Learning (DQN) to train an AI agent to autonomously land a lunar module in a simulated environment. The agent learns to control thrust and rotation to achieve a smooth landing while optimizing fuel efficiency and minimizing crash landings.</p>
          </div>
          <div className={styles.projectsCard}>
            <a href="https://github.com/liamtbo/military_classification_cnn" target="_blank" rel="noreferrer" className={styles.projectNames}>Vehicle Classification</a>
            <img src="drones.jpg" alt="drones" style={{ width: '300px', height: '200px' }}/>
            <p>A convolutional neural network (CNN) model trained to classify military vehicles from images. The model processes visual data to differentiate between various types of military assets, such as tanks, aircraft, and armored vehicles, aiding in automated reconnaissance and intelligence analysis.</p>
          </div>
          <div className={styles.projectsCard}>
            <Link to="arp-poisoning" className={styles.projectNames}>Arp-Cache Poisoning</Link>
            <img src="arp-cache-poisoning.png" alt="arp-cache" style={{ width: '300px', height: '200px' }}/>
            <p>In this project, I performed an ARP cache poisoning attack to redirect network traffic using Scapy in a containerized environment. This enabled a Man-in-the-Middle (MITM) attack, allowing interception and modification of Telnet and Netcat communications. I also analyzed packet behavior using Wireshark and tcpdump, highlighting ARP spoofing risks.</p>
          </div>
          <div className={styles.projectsCard}>
            <Link to="tcp-attack" className={styles.projectNames}>TCP-Attack</Link>
            <img src="tcp_attack.jpg" alt="tcp-attack" style={{ width: '300px', height: '200px' }} />
            <p>In this project, I executed TCP/IP attacks, including SYN flooding, TCP reset, and session hijacking to disrupt or take over connections. I also used a reverse shell to gain persistent access to a victim machine, highlighting key TCP vulnerabilities and countermeasures.</p>
          </div>
        </div>
      </div>
    </div>
  )
}