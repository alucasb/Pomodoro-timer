let countdown = document.getElementById('countdown')
let startTime = document.getElementById('startbtn')
let stopTime = document.getElementById('stopbtn')
let resetTime = document.getElementById('resetbtn')
let time = 1500
let timeInterval
let isRunning = false

function updateTime(){
    const minutes = Math.floor(time/60)
    const seconds = time % 60
    countdown.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function start(){
    //fazer o tempo contar
    if(time > 0 && isRunning==false){
        timeInterval = setInterval(function(){
            time--
            updateTime()

            if(time===0){
                clearInterval(timeInterval)
                alert('Hora de descansar')
            }
        }, 1000);
        isRunning = true
        startTime.innerHTML = 'Pausar';
    }

    //mudar a instancia do nome do botão
    else {
        clearInterval(timeInterval)
        isRunning= false
        startTime.innerHTML = 'Iniciar';
    }
    
}

function stop(){
    clearInterval(timeInterval)
    time = 300
    countdown.innerHTML = '5:00'
    startTime.innerHTML = 'Iniciar'
}

function reset(){
    clearInterval(timeInterval)
    time = 1500
    updateTime()
    startTime.innerHTML = 'Iniciar'
}