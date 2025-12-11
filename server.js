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










// console.log("=== product details ===")
// for (const [key, value] of Object.entries(prodect)) {
//     console.log(`${key}: ${value}`);
// }








