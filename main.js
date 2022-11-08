let select_p = document.querySelectorAll('.p_front')
let player_name = document.querySelector('.name')
let colors_p1 = document.querySelectorAll('.colors_p1 .color')
let colors_p2 = document.querySelectorAll('.colors_p2 .color')
var player_name1 = 'P1'
var player_name2 = 'P2'
var msg = document.querySelector('.msg')
var player_select1= document.querySelector('.name1')
var player_select2 = document.querySelector('.name2')
var button_next = document.querySelector('.button_next')


p1_front.addEventListener('click',()=>{
    //propiedades relacionadas a nick
    p1_front.style.border = '4px solid white'
    p2_front.style.border = 'none'
    document.querySelector('.colors_p2').style.display = 'none'
    document.querySelector('.colors_p1').style.display = 'flex'

   
    colors_p1.forEach(color =>{
        color.addEventListener('click',()=>{
            p1_front.style.background = color.style.background

        })
    })
     //propiedades relacionadas ao nome
     
    msg.style.display = 'none'
    player_select2.style.display = 'none'
    player_select1.style.display = 'block'
    player_select1.focus()
    
     //
})
p2_front.addEventListener('click',()=>{
    //propiedades relacionadas a nick
    p2_front.style.border = '4px solid white'
    p1_front.style.border = 'none'
    document.querySelector('.colors_p1').style.display = 'none'
    document.querySelector('.colors_p2').style.display = 'flex'

    colors_p2.forEach(col =>{
        col.addEventListener('click',()=>{

            p2_front.style.background = col.style.background

        })
    })
    
    //Propiedades relacionadas ao nome
    
    msg.style.display = 'none' 
    player_select1.style.display = 'none'
    player_select2.style.display = 'block'
    player_select2.focus()
}
)

//propiedade relacionada ao nome
document.querySelector('.front').addEventListener('keypress', (event)=>{
        
    if(event.key === 'Enter'){
        
        player_select1.blur()
        player_name2.blur()
        player_name1 = player_select1.value
        player_name2 = player_name2.value
        player_select1.value = player_name1
        player_select2.value = player_name2

    }
})

button_next.addEventListener('click',()=>{
    document.querySelector('.front').style.display = 'none'
    document.querySelector('.modes').style.display = 'flex'
})




