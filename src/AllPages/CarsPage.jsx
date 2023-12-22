import React, { useState } from "react";
import UpperNav from "../componants/Nav";
import Sdata from "../data/Data";
import CarCard from "../componants/Carcard/CarCard";

function CarsPage() {

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
                <p className="box0p">All Car's</p>
                    {Sdata.map((car) => (
                    <CarCard 
                        key={car.id}
                        vehicalimg={car.vehicalimg}
                        vehicalname={car.vehicalname}
                        id={car.id}
                        username={car.username}
                        status={car.status}
                        onClick={() => handleCarClick(car.id)}
                    />
                  ))}
                </div> 
                <div className="page2">
                <p className="box0p">My Car's</p>
                {selectedCar && (
                    <div className="car">
                        <div className="car0">
                          <h3>{selectedCar.vehicalname}</h3>
                          <img alt="profile" src={selectedCar.vehicalimg} />
                        </div>
                        <div className="car1">
                          <h3>Car Details</h3>
                          <p>Id: {selectedCar.id}</p>
                          <p>Custmer Name: {selectedCar.username}</p>
                          <p>Status: {selectedCar.status}</p>
                          <p>Vehicle No: {selectedCar.vehicleno}</p>
                          <p>Vehical Type:- {selectedCar.vehicalType}</p>
                        </div>

                        {selectedCar.spending && (
                          <div className="lastSpend">
                            <h3>Last Spending</h3>
                            {selectedCar.spending.map((item, index) => (
                              <p key={index}>{Object.keys(item)[0]} Charges : {Object.values(item)[0]}</p>
                            ))}
                          </div>
                        )}
                      
                        {selectedCar.lastSixMonth && (
                          <div className="sixmonth">
                            <h3>Last Six Month Spending</h3>
                            {selectedCar.lastSixMonth.map((item, index) => (
                              <p key={index}>{Object.keys(item)[0]} Charges : {Object.values(item)[0]}</p>
                            ))}
                          </div>
                        )}
                    </div>
                  )}
                </div>
            </div>
        </div>
    );
}

export default CarsPage;