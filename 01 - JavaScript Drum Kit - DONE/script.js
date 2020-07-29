window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)

    //Audio Play
    if(!audio) return; // stop the function
    audio.currentTime = 0 
    audio.play();


    key.classList.add('playing') //Animation Toggle On

    })

    //Animation Toggle Off
    
    const keys = document.querySelectorAll('.key')

    function removeTransition(e) {
        if (e.propertyName !== 'transform') return;
        console.log(e.propertyName);
        this.classList.remove('playing')
        
        
    }

    keys.forEach(key => key.addEventListener('transitionend', removeTransition));

  

