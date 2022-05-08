import './App.css';
import React, {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import MastersList from './components/MastersList';
import MasterInfo from './components/MasterInfo';
import MasterPage from './components/MasterPage';

function App() {

  function getList() {
    fetch("http://kaiaman.pythonanywhere.com/masters/")
    .then(response => response.json())
    .then(data => console.log(data))
  }

  useEffect(getList, []);

  const style = {
    nav: {
      marginLeft: "15px"
    }
  }
       

  return (
    <div>
      <Router>
      <nav>
        <Link to="/">Homepage</Link>|&nbsp;
        <Link to="/masters" style={style.nav}>Masters</Link>
      </nav>
        <Routes>
          <Route exact path="/" element={<MasterInfo />} />
          <Route exact path="/masters" element={<MastersList />} />
          <Route  path="/master/:id/" element={<MasterPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
