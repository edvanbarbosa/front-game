let select_p = document.querySelectorAll('.p_front')
let player_name = document.querySelector('.name')
let colors = document.querySelectorAll('.colors > .line_color > div')
var background_c = undefined
console.log(background_c)

select_p.forEach(e =>{
    
    e.addEventListener('click',()=>{
        player_name.innerHTML = e.innerHTML
    })
})

colors.forEach(color =>{
    color.addEventListener('click',function passo(){
        background_c = color.style.background
        p_select.style.background = background_c
        

    })
})