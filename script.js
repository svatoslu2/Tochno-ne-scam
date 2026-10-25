const detailsPass = document.querySelector('.details-password-content')
const detailsFlash = document.querySelector('.details-flashlight')
const details = document.querySelector('.details')
const detailsName = document.querySelector('.details-name')

let num = 1
let myName = 'magic228'
let myPass = 'krutiymag'

details.addEventListener('submit',function(e){
    e.preventDefault()
    if (detailsName.value == myName && detailsPass.value == myPass) {
        alert('Success')
        details.setAttribute('action','./homePage.html')
        details.submit()

    } else {
        alert('error')
    }
})

detailsFlash.addEventListener('click',function(){
    num++
    if (num%2==0) {
        detailsPass.setAttribute('type','text')
        detailsFlash.setAttribute('src','./flashlight-on.png')
    } else {
        detailsPass.setAttribute('type','password')
        detailsFlash.setAttribute('src','./flashlight-off.png')
    }
})
