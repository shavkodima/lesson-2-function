//Замыкание 
function multiplier(factor) {

    return function(number) {
        return number * factor
    }
}
//возвращает кусок замороженого кода return function(number){return number * factor}
let t = multiplier(5)

console.log(t(2))


let createrLi = (counter) => {

    return function(classes) {
        let li = "";
        for (let i = 0; i < counter; i++) {
            li += "\n" + `<div class="${classes}"></div>`
        }
        return li;
    }

}


let li = createrLi(5);
let li2 = createrLi(8);
console.log(li("lishki"))
console.log("-------------------")
console.log(li2("lishki"))

//рекурсия