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
        let useridd = 0;
        //send the info to first get the id of the user if the user already exists if not, we create
        //a new user and then get the id and create a new purchase in the database
        request.getUserByEmail(details.email)
        .then(data=>{
            if (data.length == 0){
                console.log("doesnt exist in db")
                let userId = request.createUser(details.name, details.email)
                userId.then(userid=>{
                    console.log("New used created with the id-> ",userid)
                    request.createPurchase(details,userid)
                    .then(p=>{
                    console.log("New purchase created:",p);
                 })
                    useridd = userid;
                    setUserId(userid)
                })
            }else{
                console.log("exists in db and id is ->", data[0].id)
                useridd = data[0].id;
                setUserId(data[0].id)
                request.createPurchase(details,useridd)
                    .then(p=>{
                    console.log("New purchase created:",p);
                })
            }
        })
        
        
        
        
      
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