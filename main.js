import jogo from "./jogo.js"





var select_p = document.querySelectorAll('.p_front')
var player_name = document.querySelector('.name')
//
var colors_p1 = document.querySelectorAll('.colors_p1 .color')
var colors_p2 = document.querySelectorAll('.colors_p2 .color')
//
var player_name1 = document.querySelector('.player_name1')
var player_name2 = document.querySelector('.player_name2')
//
var msg = document.querySelector('.msg')
//
var input_select1= document.querySelector('.name1')
var input_select2 = document.querySelector('.name2')
//
var button_next = document.querySelector('.button_next')
var button_play = document.querySelector('.button_play')
//
var player1 = document.querySelector('.player_one')
var player2 = document.querySelector('.player_two')
//
var player1_body = document.querySelector('.player1')
var player2_body = document.querySelector('.player2')



p1_front.addEventListener('click',()=>{
    //propiedades relacionadas a nick
    p1_front.style.border = '4px solid white'
    p2_front.style.border = 'none'
    document.querySelector('.colors_p2').style.display = 'none'
    document.querySelector('.colors_p1').style.display = 'flex'

   
    colors_p1.forEach(color =>{
        color.addEventListener('click',()=>{
            p1_front.style.background = color.style.background
            player1.style.background = color.style.background

        })
    })
     //propiedades relacionadas ao nome
     
    msg.style.display = 'none'
    input_select2.style.display = 'none'
    input_select1.style.display = 'block'
    input_select1.focus()
    
     //
})
p2_front.addEventListener('click',()=>{
    //propiedades relacionadas a nick
    p2_front.style.border = '4px solid white'
    p1_front.style.border = 'none'
    document.querySelector('.colors_p1').style.display = 'none'
    document.querySelector('.colors_p2').style.display = 'flex'

    colors_p2.forEach(color =>{
        color.addEventListener('click',()=>{

            p2_front.style.background = color.style.background
            player2.style.background = color.style.background

        })
    })
    
    //Propiedades relacionadas ao nome
    
    msg.style.display = 'none' 
    input_select1.style.display = 'none'
    input_select2.style.display = 'block'
    input_select2.focus()
}
)

//propiedade relacionada ao nome
document.querySelector('.front').addEventListener('keypress', (event)=>{
    //propiedade relacionada ao nome  
    if(event.key === 'Enter'){
        
        input_select1.blur()
        input_select2.blur()
        player_name1.innerHTML = input_select1.value
        player_name2.innerHTML = input_select2.value
    

}})
var position1_x = 0
var position1_y = 0
var position2_x = 0
var position2_y = 0
var body_player1 = document.querySelector('.player1')
var body_player2 = document.querySelector('.player2')
document.addEventListener('keyup',(event)=>{
    //player1 positions
    if(event.key == 'w'){
        position1_x -= 30
        body_player1.style.top = `${position1_x}px`

    }
    if(event.key == 's'){
        position1_x += 30
        body_player1.style.top = `${position1_x}px`
    }
    if(event.key == 'a'){
        position1_y -= 30
        body_player1.style.left = `${position1_y}px`
    }
    if(event.key == 'd'){
        position1_y += 30
        body_player1.style.left = `${position1_y}px`
    }
    if(position1_x > 430){
        position1_x = -640
        
    }
    position1_x 
    position1_y
    position1_y



   
}
)
document.addEventListener('keyup', (event)=>{
     //player2 positions

     if(event.key == 'ArrowUp'){
        position2_x -= 30
        body_player2.style.top = `${position2_x}px`

    }
    if(event.key == 'ArrowDown'){
        position2_x += 30
        body_player2.style.top = `${position2_x}px`
    }
        
    if(event.key == 'ArrowLeft'){
        position2_y -= 30
        body_player2.style.left = `${position2_y}px`
    }
        
    if (event.key == 'ArrowRight'){
        position2_y += 30
        body_player2.style.left = `${position2_y}px`
    }
    position2_y 
})
var option = document.querySelector('.option')

button_next.addEventListener('click',()=>{
    document.querySelector('.front').style.display = 'none'
    document.querySelector('.modes').style.display = 'flex'
})


option.addEventListener('click',()=>{
    button_play.style.background = 'blueviolet'
    button_play.style.color = '#fff'

    button_play.addEventListener('mouseover',()=>{
        button_play.style.top = '-0.3em'
        button_play.style.transform = 'scale(1.1)'
        button_play.style.color = 'rgba(255, 255, 255, 0.835)'
    })
    button_play.addEventListener('mouseout',()=>{
        button_play.style.top = '0'
        button_play.style.transform = 'scale(1)'
        button_play.style.color = 'rgba(255, 255, 255, 0.621))'
    })

    button_play.addEventListener('click',()=>{
        document.querySelector('.modes').style.display = 'none'
        document.querySelector('.game').style.margin = 0

    })
})



const run_forTime = document.getElementById('run_mode')
var minutos = document.querySelector('.minutes')
var min = 5
var segundos = document.querySelector('.seconds')
var seg = 0

    run_forTime.addEventListener('click', function run_forTime(){
        button_play.addEventListener('click',()=>{
            tempo()
        })
        

    })


function tempo(){
    setInterval(function(){
        
        if (seg > 0 && min >= 0){
            seg-= 1
            segundos.innerHTML = seg
        }
        else{
            minutos.innerHTML = "0"
            segundos.innerHTML = "00"
        }
        if(seg<1){
            min -= 1
            minutos.innerHTML = min
            seg = 59
        }
      
        
    },1000)
}

setInterval(()=>{
    jogo()
},3000)
