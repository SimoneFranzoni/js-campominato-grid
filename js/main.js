let cellnum;

if (difficult.value == "easy"){
    cellnum = 100;
} else if (difficult.value == "normal"){
    cellnum = 81;
} else if (difficult.value == "hard"){
    cellnum = 49;
}

console.log(cellnum);

for (let i = 0; i < 100; i++){
    const sq = createSquare(container);
    sq.innerHTML = i + 1;
    sq.addEventListener('click',function(){
        this.classList.add('clicked');
    })
}

/**
 * Generatore di square
 * @param {HTMLDivElement} target 
 * @returns 
 */

function createSquare(target){
    const sq = document.createElement('div');
    sq.classList.add('square');
    target.append(sq);
    return sq;
}