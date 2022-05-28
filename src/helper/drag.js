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
    e.target.classList.remove('drag-over');
    const id = e.dataTransfer.getData('text/plain');

    const draggable = document.getElementById(id);
    if(shipIndex !== 0){
        droppedDivId = Number(e.target.id)
        droppedDivId = droppedDivId - shipIndex
    }
    document.getElementById(`${droppedDivId}`).appendChild(draggable)
    return droppedDivId
}

export {dragEnter, dragOver, drop,dragLeave}