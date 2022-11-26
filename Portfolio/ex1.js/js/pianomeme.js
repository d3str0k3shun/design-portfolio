function boutonJoue(e){
    console.log(e);
    joueSon(this.getAttribute("data-key"));
    }
    function toucheJoue(e){
        console.log(e);
        joueSon(e.keyCode);
    }
    
    function joueSon(touche){
    let son = document.querySelector('audio[data-key="' + touche + '"]');
    son.currentTime=0;
    son.play();
    }
    window.addEventListener('keydown', toucheJoue);
   

    document.querySelector(".a").addEventListener('click', boutonJoue);
    document.querySelector(".s").addEventListener('click', boutonJoue);
    document.querySelector(".d").addEventListener('click', boutonJoue);
    document.querySelector(".e").addEventListener('click', boutonJoue);
    document.querySelector(".f").addEventListener('click', boutonJoue);
    document.querySelector(".g").addEventListener('click', boutonJoue);
    document.querySelector(".h").addEventListener('click', boutonJoue);
    document.querySelector(".i").addEventListener('click', boutonJoue);
    document.querySelector(".j").addEventListener('click', boutonJoue);
    document.querySelector(".k").addEventListener('click', boutonJoue);
    document.querySelector(".1").addEventListener('click', boutonJoue);
    document.querySelector(".2").addEventListener('click', boutonJoue);
    document.querySelector(".3").addEventListener('click', boutonJoue);
    document.querySelector(".4").addEventListener('click', boutonJoue);
    document.querySelector(".5").addEventListener('click', boutonJoue);
    document.querySelector(".6").addEventListener('click', boutonJoue);
    document.querySelector(".7").addEventListener('click', boutonJoue);