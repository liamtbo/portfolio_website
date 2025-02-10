import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Browser, Routes, Route, BrowserRouter } from 'react-router-dom'; // routing between pages
import { LunarLander } from './pages/lunar_lander' 
import { MilitaryClassifier } from './pages/military_image_classifier'
import { Projects } from './pages/projects'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route>
          {/* define app routes */}
          <Route index="/" element={<App />} /> {/* Home route */}
          <Route path="/projects" element={<Projects />} />
            <Route path="lunar-lander" element={<LunarLander />} />
            <Route path="military-classifier" element={<MilitaryClassifier />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
