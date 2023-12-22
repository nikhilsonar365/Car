import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Form from "./AllPages/Form";
import AddUser from "./AllPages/AddUser";
import CarsPage from "./AllPages/CarsPage";
import History from "./AllPages/History";
import Login from "./AllPages/Login";
import Signin from "./AllPages/Signin";
import Update from "./AllPages/Update";
import UserPage from "./AllPages/UsersPage";
import Vehicles from "./AllPages/Vehicles";

const App =()=>{
    return(
        <>
            <Router>
                <Routes>
                    <Route exact path = '/' element={<Login />}></Route>
                    <Route exact path="/adduser" element={<AddUser />}></Route>
                    <Route exact path="/carsinfo" element={<CarsPage />}></Route>
                    <Route exact path="/history" element={<History />}></Route>
                    <Route exact path="/login" element={<Form />}></Route>
                    <Route exact path="/signin" element={<Signin />}></Route>
                    <Route exact path="/update" element={<Update />}></Route>
                    <Route exact path="/userpage" element={<UserPage />}></Route>
                    <Route exact path="/vehicles" element={<Vehicles />}></Route>
                </Routes>
            </Router>
        </>
    )
}

export default App;