import React, { useState } from "react";
import UpperNav from "../componants/Nav";
import Sdata from "../data/Data";
import CarCard from "../componants/Carcard/CarCard";

function Update() {
  const [charges, setCharges] = useState({
    servicingCharges: '',
    sparePartsCharges: '',
    refuelingCharges: '',
    washingCharges: '',
    parkingCharges: '',
    totalAmount: '',
  });
  const [items, setItems] = useState([]);

  const handleUpdateStatus = () => {
    const updateData = { ...charges };

    if (!charges) {

    } else {
      setItems([ ...items, updateData]);
      setCharges({
        ...charges,
        servicingCharges: '',
        sparePartsCharges: '',
        refuelingCharges: '',
        washingCharges: '',
        parkingCharges: '',
        totalAmount: '',
      });
      
      console.log("Update Data:", updateData);
    };
  };
  
  const [selectedCar, setSelectedCar] = useState(null);
  const handleCarClick = (carId) => {
      console.log("Clicked Car Id:", carId);
      const clickedCar = Sdata.find((val) => val.id === carId);
      console.log("Selected Car Details:", clickedCar);
      setSelectedCar(clickedCar);
  };

  return (
    <div className="bad">
      <UpperNav />
      <div className="box0">
        <div className="page1">
          <p className="box0p">Pending</p>
          {Sdata.map((val) => (
            val.status === "Pending" ? (
              <CarCard 
                key={val.id}
                vehicalimg={val.vehicalimg}
                vehicalname={val.vehicalname}
                id={val.id}
                username={val.username}
                status={val.status}
                onClick={() => handleCarClick(val.id)}
              />
            ) : null
          ))}
        </div> 
        <div className="page2">
        {selectedCar && (
        <div className="page20">
          <div className="up1">
            <img alt="Profile" src={selectedCar.imgscr}></img>
            <h2>{selectedCar.username}</h2>
          </div>
          <div className="up21">
          <input type="text" placeholder="Servicing Charges" onChange={(e) => setCharges({ ...charges, servicingCharges: e.target.value })} value={charges.servicingCharges} />
            <input type="text" placeholder="Spare Parts Charges" onChange={(e) => setCharges({ ...charges, sparePartsCharges: e.target.value })} value={charges.sparePartsCharges} />
            <input type="text" placeholder="Refueling Charges" onChange={(e) => setCharges({ ...charges, refuelingCharges: e.target.value })} value={charges.refuelingCharges} />
            <input type="text" placeholder="Washing Charges" onChange={(e) => setCharges({ ...charges, washingCharges: e.target.value })} value={charges.washingCharges} />
            <input type="text" placeholder="Parking Charges" onChange={(e) => setCharges({ ...charges, parkingCharges: e.target.value })} value={charges.parkingCharges} />
            <input type="text" placeholder="Total Amount" onChange={(e) => setCharges({ ...charges, totalAmount: e.target.value })} value={charges.totalAmount} />
          </div>
          <div className="up3">
          <button onClick={handleUpdateStatus}>Paid</button>
          <button>Update Status</button>
          </div>
        </div>
        )}
        </div>
      </div>
    </div>
  );
}

export default Update;