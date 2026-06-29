import path from "node:path";
import fs from "node:fs/promises";

export async function getData() {
  try {
    const jsonData = path.join("data", "data.json");
    const newJsonData = await fs.readFile(jsonData, "utf8");
    const data = JSON.parse(newJsonData);
    return data;
  } catch (err) {
    return [];
  }
}
