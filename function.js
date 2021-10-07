//Замыкание 
function multiplier(factor) {

    return function (number) {
        return number * factor
    }
}
//возвращает кусок замороженого кода return function(number){return number * factor}
let t = multiplier(5)

console.log(t(2))


let createrLi = (counter) => {

    return function (classes) {
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

//не понятно


//выращивание функции 


function zeroPad(number, width) {
    let st = String(number);
    while (st.length < width) {
        st = "0" + st;
    }

    return st;
}

function printFarmInventory(cows, chickens, pigs) {
     console.log(zeroPad(cows, 3) + "	Коров"); 
     console.log(zeroPad(chickens, 3) + "	Куриц");
      console.log(zeroPad(pigs, 3) + "	Свиней"); 
    }

printFarmInventory(7, 16, 3);

//Упражнение
// 1.Напишите функцию	min,	принимающую	два	аргумента,	и возвращающую	минимальный	из	них

function min(a,b){
    let res = Math.min(a, b)
    return res;
}

console.log(min(5,6));



//Рекурсия
// Напишите	рекурсивную	функцию	isEven	согласно	этим правилам.	Она	должна	принимать	число	и	возвращать булевское	значение.
//выполнена не до конца

function isEven(number){
    if(number%2 == 0){
        return true;
    }else{
        return false;
    }
}

console.log(isEven(76));


//Напишите	функцию	countBs,	которая	принимает	строку	в качестве	аргумента,	и	возвращает	количество	символов “B”,	содержащихся	в	строке.

function countBs(string, simvol){
    let counter =0;
    for(let i =0; i<string.length; i++){
        //ищет символ в строке по индексу
        if(string.charAt(i).toLowerCase() == simvol){
           counter++;
        }
    }

    console.log(counter);
}


countBs("Тестовая строка, ответ не требуется", "о")