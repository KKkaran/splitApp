import React, { useState } from "react";

const PurchaseForm = () => {
    
    const [details, setDetails] = useState({
        desc: '',
        price: '',
        email:''
    })


    const submitForm = (e) => {
        e.preventDefault();
        console.log(details)
    }
    return (
        <div className="border border-dark p-3">
            <form onSubmit={submitForm}>
                <input type="text" placeholder="description" value={details.desc} onChange={(e) => setDetails({...details,desc:e.target.value})} required /><br /> <br />
                <input type="number" placeholder="price" value={details.price} onChange={(e) => setDetails({...details,price:e.target.value})} required /><br /> <br />
                <input type="email" placeholder="email" value={details.email} onChange={(e) => setDetails({...details,email:e.target.value})} required /><br /> <br />
                <input type="submit" />
            </form>
        </div>
    )
}


export default PurchaseForm