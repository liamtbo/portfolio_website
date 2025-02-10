import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { NavBar } from '../components/NavBar'

export function Projects() {
  return (
    <div>
      < NavBar />
      <h1>Projects</h1>
      <div>
        <h2>Lunar Lander</h2>
        <Link to="lunar-lander">Lunar Lander</Link>
        <img src="lunar-lander.png" alt="lunar landing" style={{ width: '300px', height: '200px' }}/>
        <p>A reinforcement learning project using Deep Q-Learning (DQN) to train an AI agent to autonomously land a lunar module in a simulated environment. The agent learns to control thrust and rotation to achieve a smooth landing while optimizing fuel efficiency and minimizing crash landings.</p>
      </div>
      <div>
        <h2>Military Vehicle Image Classification</h2>
        <img src="drones.jpg" alt="drones" style={{ width: '300px', height: '200px' }}/>
        <p>A convolutional neural network (CNN) model trained to classify military vehicles from images. The model processes visual data to differentiate between various types of military assets, such as tanks, aircraft, and armored vehicles, aiding in automated reconnaissance and intelligence analysis.</p>
      </div>
    </div>
  )
}