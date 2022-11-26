function boutonJoue(){
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
    document.getElementById(touche).addEventListener('click', boutonJoue)

    function mafonction(){
        console.log("Le Js fonctionne bien !");
    }