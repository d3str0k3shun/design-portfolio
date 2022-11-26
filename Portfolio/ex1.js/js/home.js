

    function AfficherDate(){
        let dateActuel = new Date();
        let nomDuJour = dateActuel.getDay();
        let tab_jour = new Array("Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi");
        //tab_jour[dateActuel.getDay()]
        let year = dateActuel.getFullYear();
        let month = dateActuel.getMonth() +1 +" "+"/";
        let day = dateActuel.getDate()+" "+"/";
        let hour = dateActuel.getHours();
        if(hour<10){
            hour = "0" + hour;
        }
        let minutes =dateActuel.getMinutes();
        if(minutes <10){
            minutes = "0" + minutes;
        }
        let secondes =dateActuel.getSeconds();
        if(secondes < 10){
            secondes = "0" + secondes;
        }
        let am
        if(hour < 12){
            am = "Am";
        }
        if(hour >12){
            am="Pm";
        }
        if(hour ==12){
            am="Pm";
        }
      
        
        let displayDate = document.getElementById("horloge");
        displayDate.innerHTML= tab_jour[dateActuel.getDay()] +" "+ year +" "+ month +" "+ day +" "  +hour +":" + minutes +":" + secondes +""+"/"+ am;
        }
        
        setInterval(AfficherDate, 1000);
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