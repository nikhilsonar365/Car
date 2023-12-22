import React from 'react';

const CarCard = ({ vehicalimg, vehicalname, id, username, status, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(id)}>
      <img src={vehicalimg} alt={vehicalname} />
            <div>
              <h3>{vehicalname}</h3>
              <div>
                <p>ID: {id}</p>
                <p>User: {username}</p>
                <p>Status: {status}</p>
              </div>
            </div>
    </div>
  );
};

const CarCard2 = ({ vehicalimg, vehicalname, id, username, status, onClick }) => {
  return (
    <div className="card">
      <img src={vehicalimg} alt={vehicalname} />
            <div>
              <h3>{vehicalname}</h3>
              <div>
                <p>ID: {id}</p>
                <p>User: {username}</p>
                <p>Status: {status}</p>
              </div>
            </div>
    </div>
  );
};

export default CarCard;
export {CarCard2};


