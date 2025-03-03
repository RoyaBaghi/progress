const progress = document.getElementById('progress')
const pre = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click',()=>{
    currentActive++
    if(currentActive> circles.length){
        currentActive = circles.length
    }
    updade()
})

pre.addEventListener('click',()=>{
    currentActive--
    if(currentActive < 1){
        currentActive = 1
    }
    updade()
})

function updade (){
    circles.forEach((circle,idx)=>{
        if(idx<currentActive){
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width =(actives.length -1) / (circles.length -1) * 100 +'%'


    if(currentActive === 1){
        pre.disabled = true
    } else if (currentActive === circles.length) {
        next.disabled = true
    } else {
        pre.disabled = false
        next.disabled = false
    }
}