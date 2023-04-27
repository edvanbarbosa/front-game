

export default function jogo(){


        var gameSpace =  document.querySelector(".area-nascimento")
       let width = window.innerWidth
        let height = window.innerHeight
        

       let position_x = Math.floor(Math.random()*width) - 350
       let position_y =Math.floor(Math.random()*height) - 350

        position_x = position_x <0 ? 0 : position_x
        position_y = position_y < 0 ? 0 : position_y

        let ponto = document.createElement('div')
        gameSpace.appendChild(ponto)
        ponto.className = "bichinho"
        ponto.style.left = position_x+'px'
        ponto.style.top = position_y + 'px'


        
    
  
    
    

}