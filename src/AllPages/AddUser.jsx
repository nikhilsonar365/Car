import React from "react";
import UpperNav from "../componants/Nav";

function AddUser() {
    return (
        <div className="bad">
            <UpperNav/>
            <div className="page3">
                <h3 className="page31">Add User</h3>
                    <div className="page34">
                        <img alt="profile"/>
                        <p>Add Profile Image</p>
                    </div>
                    <div className="page32" >
                        <input type="text" placeholder="Full Name" />
                        <input type="text" placeholder="User Email Address" />
                        <input type="text" placeholder="User Phone No" />
                        <input type="text" placeholder="User Name" />
                    </div>
            
                {/* <hr /> */}
                    <div className="page35">
                        <img alt="profile"/>
                        <div><p>Add Car Image</p></div>
                    </div>
                    <div className="page33">
                        <input type="text" placeholder="Vehicle Name" />
                        <input type="text" placeholder="Vehicle No" />
                        <input type="text" placeholder="Vehicle Type" />
                        <button>Save Info</button>
                    </div>

            </div>
        </div>
    )
}

export default AddUser;