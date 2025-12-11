import readline from "readline-sync"

export function input(print = ""){

    const input = readline.question(print)
    return input
}


export function input_int(print = ""){

    const input = readline.questionInt(print)
    return input
}