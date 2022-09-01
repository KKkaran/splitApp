import axios from "axios"


export async function getAllPurchases() {
  try {
    let value = await axios({
      method: "get",
      url: "http://10.0.0.20:3002/purchases",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    return value.data.resource;
  } catch (error) {
    //window.location.href = "/error"
    console.log(error)
  }
}

export async function createUser(name,email) {
  let value = await axios.post("http://10.0.0.20:3002/createUser",  {
          name:name,
          email:email
        })
        .then(user_id => {
          //console.log(user_id.data)
          return user_id.data
        //   setClient_id(()=>client_id.data)
        //   //after getting client id we create schedule shift in db
        //   createNewShift(client_id.data)
        })
        .catch(err=>console.log(err))
}