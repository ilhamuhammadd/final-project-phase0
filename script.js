var body = document.getElementsByTagName('body')[0]

var bulet1 = document.getElementsByClassName('bulet1')[0]
bulet1.addEventListener('click',function() {
    body.style.backgroundColor = 'lightblue'
    bulet1.style.border = '1px solid lightblue'
})
// bulet1.style.backgroundColor = 'lightgreen'
var bulet2 = document.getElementsByClassName('bulet2')[0]
bulet2.addEventListener('click',function() {
    body.style.backgroundColor = 'lightgreen'
    bulet2.style.border = '1px solid lightgreen'
})

var bulet3 = document.getElementsByClassName('bulet3')[0]
bulet3.addEventListener('click',function() {
    body.style.backgroundColor = 'pink'
    bulet3.style.border = '1px solid pink'
})

var bulet4 = document.querySelector('.bulet4')
bulet4.addEventListener('click',function() {
    body.style.backgroundColor = 'orange'
    bulet4.style.border = '1px solid orange'
})

var bulet5 = document.getElementsByTagName('div')[4]
bulet5.addEventListener('click',function() {
    body.style.backgroundColor = 'lightcoral'
    bulet5.style.border = '1px solid lightcoral'
})

var bulet6 = document.querySelectorAll('div')[5]
bulet6.addEventListener('click',function() {
    body.style.backgroundColor = 'lightcyan'
    bulet6.style.border = '1px solid lightcyan'
})

var bulet7 = document.querySelectorAll('.bulet7')[0]
bulet7.addEventListener('click',function() {
    body.style.backgroundColor = 'lawngreen'
    bulet7.style.border = '1px solid lawngreen'
})
bulet7.addEventListener('mouseenter',function() {
    bulet7.style.backgroundColor = 'lightgreen'
})
bulet7.addEventListener('mouseleave',function(){
    bulet7.style.backgroundColor = 'lawngreen'
})
