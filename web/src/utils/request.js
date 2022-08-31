import axios from "axios"


export async function getAllPurchases() {
  try {
    let value = await axios({
      method: "get",
      url: "http://localhost:3002/purchases",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    });
    return value.data.resource;
  } catch (error) {
    console.log("error", error);
  }
}