export const Ship = (len)=>{
    const length = len;
    
    const hit = (hitPos)=>{
        return 'hit from ship'
    }
    
    const isSunk = ()=>{
        console.log('checks if ship sunk')
    } 

    return {hit, length} 
}