function dragEnter(e){
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

function drop(e, shipIndex) {
    let droppedDivId;
    let ypos = e.target.dataset.ypos;
    let  test = Number(ypos) + Number(shipIndex)
    console.log('shipIndex',shipIndex)
    console.log('e.target.dataset.ypos',e.target.dataset.ypos)
    console.log('tets',test)
    e.target.classList.remove('drag-over');
    const id = e.dataTransfer.getData('text/plain');

    const draggable = document.getElementById(id);


    if(shipIndex !== 0){
        droppedDivId = Number(e.target.id)
        droppedDivId = droppedDivId - shipIndex
    }
    document.getElementById(`${droppedDivId}`).appendChild(draggable)
}

export {dragEnter, dragOver, drop,dragLeave}