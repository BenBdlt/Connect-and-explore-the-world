import React from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import './App.css';
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";
import Reset from "./Component/Reset/Reset";
import Logout from "./Component/Logout/Logout";
import Map from "./Component/Map/Map";
import { auth, onAuthStateChanged } from "./firebase";
// import useSwr from "swr";
  
  
function App() {

  // const fetcher = (...args) => fetch(...args).then(response => response.json());
  // const url =
  //   "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  // const { data, error } = useSwr(url, { fetcher });
  let isLoggedIn = false;

  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn = true;
    } else {
      isLoggedIn = false;
    }
});
console.log(isLoggedIn)
    
  return (
    <div className="app">

      
      <h1>Pin and explore the world !</h1>

      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/map" element={<Map />} />
        </Routes>
      </Router>

      {/* {isLoggedIn ? <Map /> : } */}
      
      {!isLoggedIn &&
      <Logout/>
      }
      
    </div>
    
  );
}
export default App;