import React, { useState } from "react";
import UpperNav from "../componants/Nav";
import Sdata from "../data/Data";
import CarCard from "../componants/Carcard/CarCard";

function History() {

    const [selectedCar, setSelectedCar] = useState(null);

    const handleCarClick = (carId) => {
        console.log("Clicked Car Id:", carId);
    const clickedCar = Sdata.find((car) => car.id === carId);
    console.log("Selected Car Details:", clickedCar);
    setSelectedCar(clickedCar);
    };

    return (
        <div className="bad">
            <UpperNav />
            <div className="box0">
                <div className="page1">
                <p>All Car's</p>
                    {Sdata.map((val) => (
                    <CarCard 
                        key={val.id}
                        vehicalimg={val.vehicalimg}
                        vehicalname={val.vehicalname}
                        id={val.id}
                        username={val.username}
                        status={val.status}
                        onClick={() => handleCarClick(val.id)}
                    />
                  ))}
                </div> 
                <div className="page2">
                <p>All Car's</p>
                  {selectedCar && (
                    <div>
                       <h3>Car Details</h3>
                       <p>Id: {selectedCar.id}</p>
                       <p>User: {selectedCar.username}</p>
                       <p>Status: {selectedCar.status}</p>
                    </div>
                  )}
                </div>
            </div>
        </div>
    );
}

export default History;

