import React from "react";

function UpperNav() {
    return(
      <div className="left-nav-bar">
            <div className="nav-group">
            <a href="/login" className="Home">Home</a>
            <a href="/userpage" className="Home">Custmers</a>
            <a href="/carsinfo" className="Home">Cars</a>
        </div>
        <div className="nav-group">
            <a href="/adduser" className="Home">Add User</a>
            <a href="/update" className="Home">Update Status</a>
            <a href="/login" className="Home">History</a>
            <a href="/login" className="Home">Reminder</a>
            <a href="/vehicles" className="Home">Vehicles</a>
            <a href="/login" className="Home">Setting</a>
            <a href="/login" className="Home">Update Profile</a>
        </div>
      </div>
    )
}


export default UpperNav;