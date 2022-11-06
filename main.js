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

let p1_front = document.getElementById('p1_front')
let p2_front = document.getElementById('p2_front')

p1_front.addEventListener('click',()=>{
    colors.forEach(color =>{
        color.addEventListener('click',function passo(){
            p1_front.style.background = color.style.background
            
    
        })
    })
    
    p1_front.style.border = '4px solid white'
    p2_front.style.border = 'none'
    p2_front.blur()

}
)

p2_front.addEventListener('click',()=>{
    colors.forEach(color =>{
        color.addEventListener('click',function passo(){
            p2_front.style.background = color.style.background
            
    
        })
    })
    
    p2_front.style.border = '4px solid white'
    p1_front.style.border = 'none'

}
)



