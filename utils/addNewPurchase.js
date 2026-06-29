import { getData } from "./getData.js";
import fs from "node:fs/promises";
import path from "node:path";

export async function addNewPurchase(purchase) {
  try {
    const pathForData = path.join("data", "data.json");
    const newDataFile = await getData();
    newDataFile.push(purchase);
    await fs.writeFile(
      pathForData,
      JSON.stringify(newDataFile, null, 2),
      "utf8",
    );
    return purchase;
  } catch (err) {
    throw new Error(`Error occurred: ${err.message}`);
  }
}
