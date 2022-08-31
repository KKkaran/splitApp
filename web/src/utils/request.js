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
    console.log("error", error);
  }
}