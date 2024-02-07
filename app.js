let propic =document.getElementById('propic')
let inputfile =document.getElementById('myfile')
let uname =document.getElementById('username')
let uid =document.getElementById('uid')
let x = document.getElementsByTagName("h1")
let y = document.getElementsByTagName("p")
inputfile.onchange = function(){
    propic.src = URL.createObjectURL(inputfile.files[0])
}
uname.addEventListener("input",function(){
    x[0].textContent = uname.value
})
uid.addEventListener("input",function(){
    y[0].textContent = `@${uid.value}`
})