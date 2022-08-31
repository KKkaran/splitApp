import React, { useEffect } from "react"
import axios from "axios"
import * as request from "../utils/request"
import 'bootstrap/dist/css/bootstrap.min.css';


const Purchases = () => {

    //useEffect runs on the intial render only to grab the purchases of the month
    useEffect(() => {
        request.getAllPurchases().then(r=>console.log(r))
    },[])


    return (
        <div className="border border-light p-4">
            <div>
                <h3>Purchases of September:</h3>
            </div>
        </div>
    )
}


export default Purchases