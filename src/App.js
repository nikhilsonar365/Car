import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from "./AllPages/Form";
import AddUser from "./AllPages/AddUser";
import CarsPage from "./AllPages/CarsPage";
import History from "./AllPages/History";
import Login from "./AllPages/Login";
import Signin from "./AllPages/Signin";
import Update from "./AllPages/Update";
import UserPage from "./AllPages/UsersPage";
import Vehicles from "./AllPages/Vehicles";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/carsinfo" element={<CarsPage />} />
          <Route path="/history" element={<History />} />
          <Route path="/login" element={<Form />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/update" element={<Update />} />
          <Route path="/userpage" element={<UserPage />} />
          <Route path="/vehicles" element={<Vehicles />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

