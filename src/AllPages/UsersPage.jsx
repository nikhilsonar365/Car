import React, { useState } from "react";
import UpperNav from "../componants/Nav";
import CustmerCard from "../componants/customer/CustomerCard";
import Sdata from "../data/Data";

function UserPage() {

    const [selectedCustomer, setSelectedCustomer] = useState(null);

    const handleCustomerClick = (customerId) => {
        console.log("Clicked Customer Id:", customerId);
        const clickedCustomer = Sdata.find((customer) => customer.id === customerId);
        console.log("Selected Customer Details:", clickedCustomer);
        setSelectedCustomer(clickedCustomer);
    };

    return (
        <div className="bad">
            <UpperNav />
            <div className="box0">
                <div className="page1">
                <p className="box0p">All Custmer's</p>
                    {Sdata.map((customer) => (
                        <CustmerCard 
                            key={customer.id}
                            id={customer.id}
                            imgscr={customer.imgscr}
                            username={customer.username}
                            phone={customer.phone}
                            vehicalname={customer.vehicalname}
                            onClick={() => handleCustomerClick(customer.id)}
                        />
                    ))}
                </div> 
                <div className="page2">
                    <p className="box0p">Profile</p>
                    {selectedCustomer && (
                        <div className="Customer">
                            <div className="Customer0">
                                <img alt="profile" src={selectedCustomer.imgscr} />
                                <h3>{selectedCustomer.username}</h3>
                            </div>
                            <div className="">
                               <h3>Customer Details</h3>
                               <p>Id: {selectedCustomer.id}</p>
                               <p>Mo No: {selectedCustomer.phone}</p>
                               <p>Car Name: {selectedCustomer.vehicalname}</p>
                               <p>email: {selectedCustomer.email}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default UserPage;