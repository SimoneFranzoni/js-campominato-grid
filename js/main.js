function init(tot){
    for(let i = 0; i < 64; i++){

        // creo l'elemento square e lo aggiungo al container
        const sq = createSquare(container);
    
        sq.addEventListener('click',function(){
          //  console.log(this);
            this.classList.add('clicked');
        })
    
    }
    
}