import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./views/Home";
import NotFound from "./views/NotFound";

const exclusionArray = [
  '/login',
  '/register',
]

function App() {
  return (
    <div className="h-screen flex flex-col">
      {/*{exclusionArray.indexOf(location.pathname) < 0 && <Header/>}*/}
      <div className="flex flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" >
            <Route index element={<Home />} />
            {/*<Route path="/login" element={<Login />} />*/}
            {/*<Route path="/register" element={<Register />} />*/}
            <Route path="/*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
