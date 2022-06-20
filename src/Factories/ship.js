const  Ship = (length)=>{

    let shipLength = length;
    let shipArray = new Array(length);
    shipArray.fill("")
    
    const hit = (hitIndex)=>{
        if(shipArray[hitIndex] == "hit") return false
        shipArray[hitIndex] = "hit"
    }

    // checks if ship sunk
    // returns true if ship sunk 
    const isSunk = ()=>{
        
        const checkforHits = (currentValue)=> {
            return currentValue == "hit"
        }

        let result =  shipArray.every(checkforHits)
        return result
    }
    
    return{
        hit,
        isSunk,
        shipLength,
        shipArray
    }
}

export default Ship