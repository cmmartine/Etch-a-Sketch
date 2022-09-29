const blockContainer = document.getElementById('blockContainer');

//Using a block CONTAINER size of 960, createBlock auto sizes the blocks depending how many there are, and align them in an even box
function createBlock(number){
    for (let i = 0; i < number*number; i++ ){
        if(number > 100){
            alert('Error, number entered cannot be greater than 100.')
            return;
        }
        const newBlock = document.createElement('div');
        newBlock.classList.add('block');
        const blocksize = 960 / number;
        blockContainer.appendChild(newBlock);
        blockContainer.style.gridTemplateRows =  'repeat(' + number +', ' + blocksize + 'px)';
        blockContainer.style.gridTemplateColumns =  'repeat(' + number +', ' + blocksize + 'px)';
    }
    const blocks = document.querySelectorAll('block');
};


