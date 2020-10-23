const Typing = function(txtElement, phrases, waiting=1500){
    this.txtElement = txtElement;
    this.phrases = phrases;
    this.txt = "";
    this.wordIndex = 0;
    this.waiting = parseInt(waiting, 10);
    this.type();
    this.isDeleting = false;
}

// Typing characters method
Typing.prototype.type = function(){
    const currentWord = this.wordIndex % this.phrases.length;         // index of current word
    const fullText = this.phrases[currentWord];                       // get full text of current word

    // is deleting?
    if(this.isDeleting)
        this.txt = fullText.substring(0, this.txt.length - 1);          // remove char
    else
        this.txt = fullText.substring(0, this.txt.length + 1);          // add char
        
    this.txtElement.innerHTML = `<span class="text">${this.txt}</span>`;// insert text into element

    // set typing speeds
    let marvisBeacon = 100;
    if(this.isDeleting)
        marvisBeacon = 90;

    // check if full text from array was printed
    if(!this.isDeleting && this.txt === fullText){
        marvisBeacon = this.waiting;                                     // pause after typing full sentence
        this.isDeleting = true;
        if(currentWord === 5)
            marvisBeacon = 60000;
    } else if(this.isDeleting && this.txt === ""){
        this.isDeleting = false;
        this.wordIndex++;                                                 // start typing next word
        marvisBeacon = 500;
    }
    
    setTimeout(() => this.type(), marvisBeacon);
}

// initialize DOM and load data from document
document.addEventListener('DOMContentLoaded', function(){
    const txtElement = document.querySelector(".text-type");
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const waiting = txtElement.getAttribute("data-wait");

    new Typing(txtElement, words, waiting);
});