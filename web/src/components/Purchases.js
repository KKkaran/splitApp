import React, { useEffect, useState } from "react"
import axios from "axios"
import * as request from "../utils/request"
import 'bootstrap/dist/css/bootstrap.min.css';
import PurchaseForm from "./PurchaseForm";

const Purchases = () => {

    const [purchase, setPurchase] = useState([])
    const [loading,setLoading] = useState(true)
    //useEffect runs on the intial render only to grab the purchases of the month
    useEffect(() => {
        request.getAllPurchases()
            .then(list => {
                setPurchase(list)
                setLoading(false)
               })
    },[])


    return (
        <div className="border border-light p-4 ">
            <div>
                <PurchaseForm/>
            </div>
            <div>
                <h3>Purchases of September:</h3>
                <div>
                    {
                        loading ? (
                         <h3>Loading...</h3>
                    ):(
                            purchase.map((p) => {
                                return (
                                    <div className="card m-2" style={{"width":"18rem"}}>
                                        <div className="border border-light p-2 card-body">
                                            <h5 className="card-title">{p.user.split(":")[0]}</h5>
                                            <p className="card-text">{p.description}  ${p.price}</p>
                                        </div>
                                    </div>
                                )
                        })
                    )
                    }
                    
                </div>
                
            </div>
        </div>
    )
}


export default Purchases