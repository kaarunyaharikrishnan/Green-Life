import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './Components/SideBar Section/SideBar';
import Body from './Components/Body Section/Body';
import Plant from './Components/Plant/plant';
import Explore from './Components/Explore/explore'
import Seeds from './Components/Seeds/seeds';
import Gifting from './Components/Gifting/gifting';
import HelpCenter from './Components/HelpCenter/helpcenter'
const App = () => {
  return (
    <Router>
      <div className='container'>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/plant" element={<Plant />} />
          <Route path="/explore" element={<Explore/>}/>
          <Route path="/seeds" element={<Seeds/>}/>
          <Route path="/gifting" element={<Gifting/>}/>
          <Route path="/helpcenter"element={<HelpCenter/>}/>
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
