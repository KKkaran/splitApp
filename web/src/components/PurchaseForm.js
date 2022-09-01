import axios from "axios";
import React, { useState } from "react";
import * as request from "../utils/request"

const PurchaseForm = () => {
    
    const [details, setDetails] = useState({
        desc: '',
        price: '',
        email: '',
        name: ''
    })
    const [userid,setUserId] = useState(0)

    const submitForm = (e) => {
        e.preventDefault();
        
        //send the info to first get the id of the user if the user already exists if not, we create
        //a new user and then get the id and create a new purchase in the database
        let userId = request.createUser(details.name, details.email)
        console.log(userId)
      
    }
    return (
        <div className="border border-light p-3">
            <form onSubmit={submitForm}>
                <input type="text" placeholder="description" value={details.desc} onChange={(e) => setDetails({...details,desc:e.target.value})} required /><br /> <br />
                <input type="number" placeholder="price" value={details.price} onChange={(e) => setDetails({...details,price:e.target.value})} required /><br /> <br />
                <input type="email" placeholder="email" value={details.email} onChange={(e) => setDetails({ ...details, email: e.target.value })} required /><br /> <br />
                <input type="text" placeholder="name" value={details.name} onChange={(e) => setDetails({...details,name:e.target.value})} required /><br /> <br />
                <input type="submit" />
            </form>
        </div>
    )
}


export default PurchaseForm