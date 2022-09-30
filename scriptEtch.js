const blockContainer = document.getElementById('blockContainer');
let newBlock;

//Using a block CONTAINER size of 960x960px, createBlock auto sizes the blocks depending how many there are, and align them in an even box
function createBlock(number){
    for (let i = 0; i < number*number; i++ ){
        newBlock = document.createElement('div');
        newBlock.classList.add('block');
        const blocksize = 960 / number;
        blockContainer.appendChild(newBlock);
        blockContainer.style.gridTemplateRows =  'repeat(' + number +', ' + blocksize + 'px)';
        blockContainer.style.gridTemplateColumns =  'repeat(' + number +', ' + blocksize + 'px)';
        }
    
    changeBlockColor();
}


function changeBlockColor(){
    const changeColor = document.getElementsByClassName('block');
    for(let j=0; j < changeColor.length; j++){
    changeColor[j].addEventListener('mouseover', function(){
     changeColor[j].style.backgroundColor = 'Black';
    });
    }
};
  

const gridButton = document.getElementById('btn');
gridButton.addEventListener('click', function(){
    //grab newBlock from createBlock function to remove any created blocks
    newBlock = document.querySelectorAll('.block');
    newBlock.forEach(blocks => {
        blocks.remove();
    });
    //change size of grid
    let userInputNumber = prompt("Please enter a new number between 1 and 100 to specify the amount of both columns and rows in the new grid:");
    let userNumber = parseInt(userInputNumber);
    console.log(typeof userNumber);
    if(userNumber <= 0 || userNumber > 100 || typeof userNumber != 'number'){
        userInputNumber = prompt("Please enter a new number between 1 and 100 to specify the amount of both columns and rows in the new grid:");
        userNumber = parseInt(userInputNumber);
    }
    createBlock(userNumber);
});
 
