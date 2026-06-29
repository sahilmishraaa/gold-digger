export function getNewPurchase(amt, price){
    const timeStamp = new Date().toLocaleString();
    const gold = Number(amt / price).toFixed(2)
    const dataObject = {
        goldPrice : price,
        investment : amt,
        time : timeStamp,
        goldBought : gold
    }
    return dataObject
}