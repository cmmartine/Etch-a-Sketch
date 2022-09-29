const blockContainer = document.getElementById('blockContainer');
let newBlock;

//Using a block CONTAINER size of 960x960px, createBlock auto sizes the blocks depending how many there are, and align them in an even box
function createBlock(number){
    for (let i = 0; i < number*number; i++ ){
        if(number > 100){
            alert('Error, number entered cannot be greater than 100.')
            return;
        } else{
        newBlock = document.createElement('div');
        newBlock.classList.add('block');
        const blocksize = 960 / number;
        blockContainer.appendChild(newBlock);
        blockContainer.style.gridTemplateRows =  'repeat(' + number +', ' + blocksize + 'px)';
        blockContainer.style.gridTemplateColumns =  'repeat(' + number +', ' + blocksize + 'px)';
        }
    }

    changeBlockColor();
};

function changeBlockColor(){
    const changeColor = document.getElementsByClassName('block');
    for(let j=0; j < changeColor.length; j++){
    changeColor[j].addEventListener('mouseover', function(){
     changeColor[j].style.backgroundColor = 'Black';
    });
    }
  };
  
 
