function distanceFromHqInBlocks(streetNum){

    if (streetNum >= 42){
        return (streetNum-42)
    } else if (streetNum < 42) {
        return ((42-streetNum))
    }
}

function distanceFromHqInFeet(streetNum){
    return distanceFromHqInBlocks(streetNum)*264
}

function distanceTravelledInFeet(start, destination) {

    if (start >= destination){
        return (start-destination)*264

    } else if (destination > start){
         return (destination - start)*264
    }
}

function calculatesFarePrice(start, destination) {

    let localDistance = distanceTravelledInFeet(start,destination);
   
   if  (localDistance <= 400){
    return localDistance*0
   } else if (localDistance > 400 && localDistance <= 2000){
    return ((localDistance * 1) - 400)*.02
   } else if (localDistance > 2000 && localDistance < 2500){
    return 25
   } else {
     return 'cannot travel that far'
   }
  }
