// Rover Object Goes Here
// ======================
let rover = {
  direction: "N",
  x: 0,
  y: 0
  travelLog: []
}
// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");

  if(rover.direction === "N"){
    rover.direction = "W";
}
  else if (rover.direction === "W"){
    rover.direction = "S";
  }
  else if (rover.direction === "S"){
    rover.direction = "E";
  }
  else if (rover.direction === "E"){
    rover.direction = "N"
  }

function turnRight(rover){
  console.log("turnRight was called!");
}

function moveForward(rover){
  console.log("moveForward was called")
}
}

//iterrAtion 3
function moveForward(rover){
  console.log("moveFoward was called")
}

if (rover.direction === "N"){
  rover.y--;
  // rover.y = rover.y - 1
} else if(rover.direction === "S"){
  rover.y++;
} else if(rover.direction === "E"){
  rover.x++;
} else if(rover.direction === "W"){
  rover.x--;
}

console.log('(${rover.x'}, ${rover.y}')

function commands(steps) {

  // 1 - for loop
  // 2 -
  for(let i = 0; i < steps.lenght; i++){
    conaole.log(step.charAT=t(i))

    let currentChar = steps.charAt(i);
    
    if(currentChar === '1') {
      turnLeft(rover);
    } else if(currentChar === 'r') {
      turnRight(rover);
    }else if(currentChar === 'f') {
      moveForward(rover);

    rover.travelLog.push(currentChar);
  }
  
console.log(rover.travelLog);


}

