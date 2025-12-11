import db from "../db/db.js"

export default function analyzeMarketTrends() {




}



function topIncreasingStocks() {

    let big_change_list = [{chenge:0},{chenge:0},{chenge:0}]
    
    let small_change_list
    let chenge


    db.stocks.forEach(item => {
        if (item.previousPrices.length > 0) {

            chenge = item.previousPrices[0] - item.previousPrices[-1]
            small_change_list = big_change_list.currentPrice.hasMin('chenge')

            if (chenge > small_change_list) {

                let index = big_change_list.findIndex(item => item.chenge == small_change_list)
                big_change_list[index] = { name: item.name, chenge:chenge}
            }   
        }
        })
        return big_change_list
    }








        function topDecreasingStocks() {

        }



        function mostVolatileStock() {

        }



        function categoryStability() {


        }