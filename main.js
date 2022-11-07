let select_p = document.querySelectorAll('.p_front')
let player_name = document.querySelector('.name')
let colors = document.querySelectorAll('.colors > .line_color > div')


select_p.forEach(e =>{
    e.addEventListener('click',()=>{
        player_name.innerHTML = e.innerHTML
        
    })
})

let p1_front = document.getElementById('p1_front')
let p2_front = document.getElementById('p2_front')
var background_p1 = ''
var background_p2 = ''
p1_front.addEventListener('click',()=>{
    
    p1_front.style.border = '4px solid white'
    p2_front.style.border = 'none'
    
    colors.forEach(color =>{
        color.addEventListener('click',()=>{
            
            background_p1 = color.style.background
            p1_front.style.background = background_p1
    background_p2 = background_p2

        })
    })
    


}
)
p2_front.addEventListener('click',()=>{
    
    colors.forEach(col =>{
        col.addEventListener('click',()=>{
            
            background_p2 = col.style.background
            p2_front.style.background = background_p2
            
            
    
        })
    })
   
    p2_front.style.border = '4px solid white'
    p1_front.style.border = 'none'

}
)



