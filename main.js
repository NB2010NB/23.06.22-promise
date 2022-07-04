//promise
let cont = document.getElementById("div1");
let btn1 = document.getElementById("btn1");
function dateTime() {
    new Promise(function (resolve, reject) {
        let time = new Date().getHours()
        console.log(time);
        if (time < 11) {
            resolve("good morning");
        }
        else {
            reject("good afterNoon");
        }
    }).then((res) => { cont.innerText = res }).catch((err) => { cont.innerText = err })
}


btn1.addEventListener("click", () => dateTime())
//***********3******** */
let input1 = document.getElementById("num1");
let input2 = document.getElementById("num2");
let btn2 = document.getElementById("btn2");
let cons = document.getElementById("div2");
function returnPromise(num1, num2) {
    return new Promise((resolve, reject) => {
        if (num2 % num1 === 0) {
            resolve("yes")
        }
        else {
            reject("no")
        }
    }).then((res) => { cons.innerText = res }).catch((err) => { cons.innerText = err })
}
btn2.addEventListener("click", () => returnPromise(+input1.value, +input2.value))
//****5**** */
let btn3 = document.getElementById("btn3");
let input3 = document.getElementById("num3");
let div3 = document.getElementById("div3");
const array = [3, 54, 6, 86, 68, 2];
function findNumber(number, array) {
    new Promise((resolve, reject) => {
        let num;
        for (let i = 0; i < array.length; i++) {
            if (number === array[i]) {
                resolve("yes");
                num = array[i]
            }
        }

        if(num === number){
            resolve('yes')
        }else{
            reject('no')
        }
    }).then((data) => { div3.innerText = data }).catch((err) => { div3.innerText = err })
}
findNumber(6,array)
btn3.addEventListener("click", () => findNumber(+input3.value, array))

const loader = document.querySelector(".loader")
function load() {
    loader.classList.add("display")
}
load()

function unload() {
    loader.classList.remove("display")
}














// mess fetch
function getMovie() {
    fetch("https://moviesmern.herokuapp.com/movies/all")
        .then((response) => { return response.json() })
        .then((data) => {
            console.log(data);
            unload()
        })
        .catch((err) => { console.log(err); })
}
// getMovie()