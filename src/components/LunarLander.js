import React from 'react';

export function LunarLander() {
  return (
    <div style={{ color: "#C9D1D9", backgroundColor: "#161B22", padding: "20px", borderRadius: "10px" }}>
      <h1>Lunar Lander DQN</h1>
      <img src="lunar-lander.png" alt="lunar lander" style={{ width: '500px', height: 'auto'}}></img>
      <h2>by Liam Bouffard</h2>
      
      <h3>Jumping Right In</h3>
      <p>To watch the network learn and review code:</p>
      <code>train_lunar_lander.ipynb</code>
      <p>To watch a previously trained network in action:</p>
      <code>run_prelearned.py</code>
      
      <h3>Description</h3>
      <p>
        The "LunarLander-v2" environment in OpenAI Gymnasium is a classic control problem where the objective is to
        safely land a lunar lander on the moon's surface. The environment simulates a lunar landing module with two
        lateral thrusters and a main engine that are learned/controlled by the agent. I deployed a deep q-learning
        network with a single hidden layer as a solution to this problem.
      </p>
      
      <h3>State Space</h3>
      <ul>
        <li><strong>x position:</strong> Horizontal coordinate of the lander (float).</li>
        <li><strong>y position:</strong> Vertical coordinate of the lander (float).</li>
        <li><strong>x velocity:</strong> Horizontal velocity of the lander (float).</li>
        <li><strong>y velocity:</strong> Vertical velocity of the lander (float).</li>
        <li><strong>Angle:</strong> Orientation of the lander (radians, float).</li>
        <li><strong>Angular velocity:</strong> Rate of change of the lander's angle (float).</li>
        <li><strong>Left leg contact:</strong> Boolean value indicating whether the left leg is in contact with the ground (0 or 1).</li>
        <li><strong>Right leg contact:</strong> Boolean value indicating whether the right leg is in contact with the ground (0 or 1).</li>
      </ul>
      
      <h3>Action Space</h3>
      <ul>
        <li><strong>Action 0:</strong> Do nothing.</li>
        <li><strong>Action 1:</strong> Fire the left orientation engine (applies a force to rotate the lander counterclockwise).</li>
        <li><strong>Action 2:</strong> Fire the main engine (applies a vertical force to slow the descent or lift the lander).</li>
        <li><strong>Action 3:</strong> Fire the right orientation engine (applies a force to rotate the lander clockwise).</li>
      </ul>
      
      <h3>Reward Space</h3>
      <ul>
        <li><strong>+100:</strong> Reward for a successful landing (varies based on landing quality).</li>
        <li><strong>-100:</strong> Penalty for crashing.</li>
        <li><strong>-0.3 per frame:</strong> Penalty for firing the main engine (discourages excessive use).</li>
        <li>Small positive/negative rewards are given for keeping the lander upright and minimizing velocity.</li>
      </ul>
      
    </div>
  )
}