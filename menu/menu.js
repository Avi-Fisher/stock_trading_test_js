import { filterStocksByPrice, OperateOnStock, searchStock } from "../server/server.js";
import { input, input_int } from "../server/uttils.js"

function printCliMenu() {
    console.log(`    === Stock Trading App ===
        1. Search for a stock by name or id
        2. Show all stocks above or below a given price
        3. Buy or sell a stock
        0. exit\n`);
}

function printCliBuyOrSell() {
    console.log(`    === Buy or Sell ===
        1. buy
        2. sell
        0. back to menu\n`);
}


export default function fullMenu(){
    let flag = true
    while (flag) {
        printCliMenu()
        let choice = input("please enter your choice from menu: ")

        switch (choice) {
            case "1":

                const identifier = input("Enter id or name to search: \n")
                const search = searchStock(identifier)

                if (search.length > 0) {
                    console.log(search);
                }
                break

            case "2":

                let typeSearch = input("Enter: \n 1. if you wont to serch above \n 2. if you wont to serch below \n 0. to get back")
                if (typeSearch == 1) { typeSearch = true }
                else if (typeSearch == 2) { typeSearch = false }
                else{break}

                const price = input_int("\nenter price to search")
                
                const filterStock = filterStocksByPrice(price, typeSearch)
                if (filterStock.length > 0){console.log(filterStock)};

                break

            case "3":
                let running = true
                while (running) {
                    printCliBuyOrSell()
                    let choiceBOS = input_int()

                    switch (choiceBOS) {

                        case 1:
                                const identifierBuy = input("Enter id or name to search")
                                OperateOnStock("buy",identifierBuy)
                            break

                        case 2:
                                const identifierSell = input("Enter id or name to search")
                                OperateOnStock("sell",identifierSell)
                            break

                        case 0:
                            running = false
                            break
                        default:
                            console.log("\ninvalid input please enter from menu!\n ");
                    }
                }
                break

            case "0":
                console.log("\n Goodbye");
                
                flag = false
                break

            default:
                console.log("\ninvalid input please enter from menu!\n ");

        }
    }
}