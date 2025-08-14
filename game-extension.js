document.addEventListener('DOMContentLoaded', () => {

    const pikachu = document.querySelector('.pikachu')
    const pokeball = document.querySelector('.pokeball')
    const charizard = document.querySelector('.charizard')
    const scoreElement = document.getElementById('score')
    const clouds = document.querySelector('.clouds')
    var score = 0
    let loopId

      const jump = () => {
        pikachu.classList.add('jump');

        setTimeout(() => {
            pikachu.classList.remove('jump');
        }, 450);
    
   }
   
   const updatescore1 = () => {
    score++
    scoreElement.textContent = score
    if (score >= 1000) {
        setTimeout(() => {
            pokeball.classList.remove('pokeball');
            pokeball.classList.add('pokeball1');
    
            charizard.classList.remove('charizard');
            charizard.classList.add('charizard1');
        }, 450);
    }
}

const updatescore2 = () => {
    scoreElement.textContent = score
    if (score >= 2000) {
        setTimeout(() => {
            pokeball.classList.remove('pokeball1');
            pokeball.classList.add('pokeball2');
    
            charizard.classList.remove('charizard1');
            charizard.classList.add('charizard2');
        }, 475);
    }
}

const updatescore3 = () => {
    scoreElement.textContent = score
    if (score >= 3000) {
        setTimeout(() => {
            pokeball.classList.remove('pokeball2');
            pokeball.classList.add('pokeball3');
    
            charizard.classList.remove('charizard2');
            charizard.classList.add('charizard3');
        }, 500);
    }
}

const updatescore4 = () => {
    scoreElement.textContent = score
    if (score >= 4000) {
        setTimeout(() => {
            pokeball.classList.remove('pokeball3');
            pokeball.classList.add('pokeball4');
    
            charizard.classList.remove('charizard3');
            charizard.classList.add('charizard4');
        }, 1000);
    }
}

const updatescore5 = () => {
    scoreElement.textContent = score
    if (score >= 5000) {
        setTimeout(() => {
            pokeball.classList.remove('pokeball4');
            pokeball.classList.add('pokeball5');
    
            charizard.classList.remove('charizard4');
            charizard.classList.add('charizard5');
        }, 570);
    }
}

        const startGameLoop = () => {
    loopId = setInterval(() => {
    console.log('loop')

    const pokeballPosition = pokeball.offsetLeft;
    const pikachuPosition = +window.getComputedStyle(pikachu).bottom.replace('px', '')
    const cloudsPosition = clouds.offsetLeft;
    const charizardPosition = charizard.offsetLeft;
    
   if  (pokeballPosition <= 114 && pokeballPosition > 10 && pikachuPosition < 50) {
        pokeball.style.animation = 'none';
         pokeball.style.left = `${pokeballPosition}px`;
         
         clouds.style.animation = 'none';
         clouds.style.left = `${cloudsPosition}px`;

        pikachu.style.animation = 'none';
       pikachu.style.bottom = `${pikachuPosition}px`;

       charizard.style.animation = 'none';
       charizard.style.left = `${charizardPosition}px`

       pikachu.src = 'crash.png';

       clearInterval(loopId);

    }else if (charizardPosition <= 100 && charizardPosition > 1 && pikachuPosition > 100){      
        
        charizard.style.animation = 'none'
        charizard.style.left = `${charizardPosition}px`;

    pokeball.style.animation = 'none';
         pokeball.style.left = `${pokeballPosition}px`;

         clouds.style.animation = 'none';
         clouds.style.left = `${cloudsPosition}px`;

        pikachu.style.animation = 'none';
       pikachu.style.bottom = `${pikachuPosition}px`;

       charizard.style.animation = 'none';
       charizard.style.left = `${charizardPosition}px`

       pikachu.src = 'crash.png';

       clearInterval(loopId);

            } else {
        updatescore1();
        updatescore2();
        updatescore3();
        updatescore4();
        updatescore5();
             
    }
    
    }, 10);
}

    function restart() {
    score = 0
    scoreElement.textContent = score

    // restaura sprites
    pikachu.src = 'pikachu.gif'

    // limpa estilos inline que pausam as animações/posições
    pikachu.style.animation = ''
    pikachu.style.bottom = ''
    pokeball.style.animation = ''
    pokeball.style.left = ''
    clouds.style.animation = ''
    clouds.style.left = ''
    charizard.style.animation = ''
    charizard.style.left = ''

    // restaura classes iniciais
    pokeball.classList.remove('pokeball1','pokeball2','pokeball3','pokeball4','pokeball5')
    pokeball.classList.add('pokeball')

    charizard.classList.remove('charizard1','charizard2','charizard3','charizard4','charizard5')
    charizard.classList.add('charizard')

    // reinicia o loop do jogo
    if (loopId) clearInterval(loopId)
    startGameLoop()
}

    // expõe para o onclick inline do HTML
    window.restart = restart

    document.addEventListener('keydown', jump) 
    document.getElementById('restart').addEventListener('click', restart) 

    restart();

})