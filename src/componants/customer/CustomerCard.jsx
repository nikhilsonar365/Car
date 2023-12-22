import React from "react";

function CustmerCard({imgscr, phone, vehicalimg, vehicalname, id, username, status, onClick }) {
    return(
        <div className="card" onClick={() => onClick(id)}>
            <img src={imgscr} alt="profile"/>
            <div>
              <h3>{username}</h3>
              <div>
                <p>Id:- {id}</p>
                <p>Car:-{vehicalname}</p>
                <p>Phone No:-{phone}</p>
              </div>
            </div>
        </div>
    );
}

export default CustmerCard;