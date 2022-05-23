let ws = new WebSocket('wss://stream.binance.com:9443/ws/etheur@trade')
let price = document.getElementById('price')
let lastPrice = null

ws.onmessage = (e) => {
    let stockObj = JSON.parse(e.data)
    let currentPrice = parseFloat(stockObj.p).toFixed(2) / 5
    price.innerText = currentPrice 

    price.style.color = !lastPrice || lastPrice === currentPrice ? '#fff' : currentPrice > lastPrice ? 'green' : 'red'

    lastPrice = currentPrice
}