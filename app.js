
let input = document.querySelector("#number-input")
let div = document.querySelector("#code")
let btn = document.querySelector("#generator")
let array = []
const generator = (length) => {

    for (let i = 0; i < length; i++) {
        var num = Math.floor(Math.random() * 10)
        console.log(num);
        array.push(num)
    }
    return array.join("")
}

btn.addEventListener("click", () => {
    let value = input.value
    if (value > 5) {
        value = 5
        input.value = 5
    }
    div.innerHTML = generator(value)
    array.length = 0
})