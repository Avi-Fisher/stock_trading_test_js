import { input, input_int } from "./uttils"

function printCli() {
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
        0. exit\n`);
}



let flag = true
while (flag) {
    printCli()
    let choice = input("please enter your choice from menu: ")

    switch (choice) {
        case "1":

            break

        case "2":

            break

        case "3":
            let running = true
            while (running) {
                printCliBuyOrSell()
                let choiceBOS = input()

                switch (choiceBOS) {

                    case "1":

                        break

                    case "2":

                        break
                    default:
                        console.log("\ninvalid input please enter from menu!\n ");
                }
            }
            break

        case "0":
            flag = false
            break

        default:
            console.log("\ninvalid input please enter from menu!\n ");

    }
}