function distanceFromHqInBlocks(blocks) {
  return Math.abs(blocks - 42)
}

function distanceFromHqInFeet(feet) {
  return Math.abs(42 - feet) * 264
}

function distanceTravelledInFeet(startingblock, endingblock) {
    if(endingblock > startingblock){
       return(endingblock - startingblock) * 264 
    }else{
      return (startingblock - endingblock) * 264
    }
    
}

function calculatesFarePrice(startingblock, endingblock){
  let feet = distanceTravelledInFeet(startingblock, endingblock)
   
  
  let scuber = "cannot travel that far";

  if (feet <=400){
    scuber = 0
  }
    else if(feet > 400 && feet <= 2000){
      scuber = 2.56;
    }

    else if(feet > 2000 && feet <= 2500){
      scuber = 25;
    }
    return scuber;  
}