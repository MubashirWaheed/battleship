const  Ship = (length)=>{
    
    let shipLength = length;
    let shipCordinates = new Array(length);
    shipCordinates.fill("")
    

    const checkforHits = (currentValue)=> {
        return currentValue == "hit"
    }

    const hit = (index)=>{
        shipCordinates[index] = "hit"
    }

    const isSunk = ()=>{
        let result =  shipCordinates.every(checkforHits)
        return result
    }
    
    return{
        hit,
        isSunk,
        shipLength,
        shipCordinates
    }
}


export default Ship