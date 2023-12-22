import React from "react";
import UpperNav from "../componants/Nav";
import Sdata from "../data/Data";
import CarCard, {CarCard2} from "../componants/Carcard/CarCard";

function Vehicles() {

    return (
        <div className="bad">
            <UpperNav />
            <div className="box0">
                <div className="page1">
                <p className="box0p">Pending</p>
                    {Sdata.map((val) => (
                      val.status === "Pending" ? (
                        <CarCard2 
                        key={val.id}
                        vehicalimg={val.vehicalimg}
                        vehicalname={val.vehicalname}
                        id={val.id}
                        username={val.username}
                        status={val.status}
                       />
                      ) : null
                  ))}
                </div> 
                <div className="page2">
                <p className="box0p">Completed</p>
                {Sdata.map((val) => (
                      val.status === "completed" ? (
                        <CarCard2 
                        key={val.id}
                        vehicalimg={val.vehicalimg}
                        vehicalname={val.vehicalname}
                        id={val.id}
                        username={val.username}
                        status={val.status}
                       />
                      ) : null
                  ))}
                </div>
            </div>
        </div>
    );
}

export default Vehicles;


