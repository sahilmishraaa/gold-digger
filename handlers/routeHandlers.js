import { sendResponse } from "../utils/sendResponse.js";
import { getLivePrice } from "../utils/getLivePrice.js";
import { parseJSONBody } from "../utils/parseJSONBody.js";
import { addNewPurchase } from "../utils/addNewPurchase.js";
import { getNewPurchase } from "../utils/getNewPurchase.js";


let currentPrice = getLivePrice();

setInterval(() => {
  currentPrice = getLivePrice();
}, 3000);
export async function handleGetPrice(res) {
  const data = {
    price: currentPrice,
  };
  sendResponse(res, 200, "application/json", JSON.stringify(data));
}

export async function handlePostInvestment(req, res) {
  try {
    const parsedData = await parseJSONBody(req);
    const updatedData = getNewPurchase(parsedData.investment, currentPrice);
    await addNewPurchase(updatedData);
    sendResponse(res, 201, "application/json", JSON.stringify(updatedData));
  } catch (err) {
    sendResponse(res, 400, "application/json", JSON.stringify({ error: err }));
  }
}
