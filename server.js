import db from "./db.js"

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
        return "The stock not fuond";

    }
}


export function filterStocksByPrice(givenPrice, above) {

    let stock = ""

    if (above) {

        stock = db.stocks.filter(item => item.currentPrice > givenPrice)

    } else {

        stock = db.stocks.filter(item => item.currentPrice < givenPrice)
    }

    if (stock.length > 0){
        return stock
    }else{
        return "Not found stocs"
    }
}










// console.log("=== product details ===")
// for (const [key, value] of Object.entries(prodect)) {
//     console.log(`${key}: ${value}`);
// }








