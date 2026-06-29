export function getLivePrice() {
    let currentPrice = Number(
        (Math.random() * (14500 - 13800) + 13800).toFixed(2)
    );
    return currentPrice
}