const investBtn = document.getElementById("invest-btn");
const investmentInput = document.getElementById("investment-amount");
const priceDisplay = document.getElementById("price-display");
const connectionStatus = document.getElementById("connection-status");

const dialog = document.getElementById("summary-dialog");
const amount = document.getElementById('amount')
const goldPrice = document.getElementById('price')
const goldBought = document.getElementById('gold')
const purchasedTime = document.getElementById('time')
const okBtn = document.getElementById("close-dialog");

let currentPrice = 0


async function getRandomPrice() {
    try {
        const response = await fetch('/api/price');
        const data = await response.json();
        currentPrice = data.price;
        connectionStatus.textContent = "Live Price 🟢";
        priceDisplay.textContent = currentPrice.toFixed(2);
    } catch (err) {
        priceDisplay.textContent = "----.--";
        connectionStatus.textContent = "Offline 🔴";
    }
}
getRandomPrice()
setInterval(getRandomPrice, 3000)

investBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    const investmentAmt = Number(investmentInput.value);

    if (!investmentAmt) {
        alert("Please fill the investment amount!");
        return;
    }
    investBtn.disabled = true;
    try {
        const response = await fetch("/api/invest", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                investment: investmentAmt
            }),
        });
        if (!response.ok) {
            throw new Error("Investment failed");
        }
        const data = await response.json();
        fillDataInHtml(data)

    } catch (err) {
        console.error(err);
    } finally {
        investBtn.disabled = false;
    }
});


function fillDataInHtml(data){
    amount.textContent = data.investment
    goldPrice.textContent = data.goldPrice
    goldBought.textContent = data.goldBought
    purchasedTime.textContent = data.time

    dialog.showModal();
}


okBtn.addEventListener("click", () => {
    dialog.close();
    investmentInput.value = "";
    investmentInput.focus();
});