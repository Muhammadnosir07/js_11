let elModel = document.querySelector('.model')
let elMarka = document.querySelector('.marka')
let elYil = document.querySelector('.yil')
let elPositsiya = document.querySelector('.positsiya')
let elRang = document.querySelector('.rang')
let elBtn = document.querySelector('.btn')

const data = []

elBtn.addEventListener('click', function(){
const mashina ={
    model: elModel.value,
    marka: elMarka.value,
    yil: elYil.value,
    positsiya: elPositsiya.value,
    rang:elRang.value
}
data.push(mashina)
console.log(data);
})