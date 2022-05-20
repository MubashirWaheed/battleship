const  Ship = (length)=>{
    
    let shipLength = length;
    let shipCordinates = new Array(length);
    
    const hit = (index)=>{}

    const isSunk = ()=>{
        return false
    }
    
    
    return{
        hit,
        isSunk,
        placeShip,
        shipLength
    }
}

export default Ship