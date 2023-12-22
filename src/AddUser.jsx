import React from "react";
import UpperNav from "../componants/Nav";

function AddUser() {
    return (
        <div className="page3-container">
            <UpperNav />
            <div className="content3-container">
                <p>Add User</p>
                <div>
                    <div>
                        <img alt="profile"/>
                        <div><p>Add Profile Image</p></div>
                    </div>
                    <div>
                        <input type="text" placeholder="Full Name" />
                        <input type="text" placeholder="User Email Address" />
                        <input type="text" placeholder="User Phone No" />
                        <input type="text" placeholder="User Name" />
                    </div>
                </div>
                <hr />
                <div>
                    <div>
                        <img alt="profile"/>
                        <div><p>Add Car Image</p></div>
                    </div>
                    <div>
                        <input type="text" placeholder="Vehicle Name" />
                        <input type="text" placeholder="Vehicle No" />
                        <input type="text" placeholder="Vehicle Type" />
                        <button>Save Info</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUser;