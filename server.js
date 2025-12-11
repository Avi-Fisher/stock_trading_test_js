import db from "./db.js"
import { input_int } from "./uttils.js"

export function searchStock(identifier) {

    const search = []

    const stockID = db.stocks.find(item => item.id == identifier)

    if (stockID !== undefined) {
        search.push(stockID)
        return search
    }

    const stockName = db.stocks.find(item => item.name == identifier)

    if (stockName !== undefined) {
        search.push(stockName)
        return search
    } else {
        console.log("The stock not fuond");
        return search;
    }
}


export function filterStocksByPrice(givenPrice, above) {

    if (typeof givenPrice !== "number") {

        return "Error \n Enter only number please"
    }

    let stock = []

    if (above) {
        stock = db.stocks.filter(item => item.currentPrice > givenPrice)

    } else {
        stock = db.stocks.filter(item => item.currentPrice < givenPrice)
    }

    if (stock.length > 0) {
        return stock
    } else {
        console.log("Not found stocs");
        return stock
    }
}


export function OperateOnStock(operation, identifier) {

    let index = db.stocks.findIndex(item => item.id == identifier)

    if (index == -1) {
        index = db.stocks.findIndex(item => item.name == identifier)
    }

    if (index == -1) {
        console.log("identifier not fuond");
        console.log("dsf");

        return false
    }

    switch (operation) {
        case "buy":
            let menyBuy = input_int("How meny stocs to buy")

            if (db.stocks[index].availableStocks >= menyBuy) {
                db.stocks[index].availableStocks -= menyBuy

                updateBuyPrice(index, db.stocks[index].category)

            } else {
                console.log("Not in stock");
                return false
            }

            break

        case "sell":
            let menySell = input_int("How meny stocs to sell")
            db.stocks[index].availableStocks += menySell

            updateSellPrice(index, db.stocks[index].category)

            break

    }
}


function updateBuyPrice(index, category) {

    db.stocks[index].previousPrices.push(db.stocks[index].currentPrice)

    db.stocks[index].currentPrice *= 1.05
    updateTime()


    for (let s of db.stocks) {

        if (s.category === category && s.name !== db.stocks[index].name) {
            s.previousPrices.push(s.currentPrice)
            s.currentPrice *= 1.1
            updateTime()
        }
    }
}


function updateSellPrice(index, category) {

    db.stocks[index].previousPrices.push(db.stocks[index].currentPrice)

    db.stocks[index].currentPrice -= db.stocks[index].currentPrice * 0.05
    updateTime()


    for (let s of db.stocks) {

        if (s.category === category && s.name !== db.stocks[index].name) {
            s.previousPrices.push(s.currentPrice)
            s.currentPrice -= s.currentPrice * 0.01
            updateTime()
        }
    }
}


function updateTime() {
    db.lastUpdated = new Date()
}











