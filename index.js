var cindyDeli = [ ];

function takeANumber(cindyDeli, n){
  cindyDeli.push(`${n}`);
  return `Welcome, ${n}. You are number ${cindyDeli.length} in line.`
}

function nowServing(cindyDeli){
  if(cindyDeli.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${cindyDeli.shift()}.`;
    
  }
}


function currentLine(cindyDeli){
var outputString;
if (line.length === 0){
outputString = “The line is currently empty.”
}
else{
outputString = “The line is currently: ”
for(var i = 0; i < line.length ; i++){
if (i === 0){

outputString = outputString + (i+1) + “. ” + line[i];
}
else{
outputString = outputString + “, ” + (i+1) + “. ” + line[i];
}
}
}
return outputString;
}



// function currenLine(cindyDeli){
  
//   if(cindyDeli === 0){
//     return "The line is currently empty.";
//   } else {
//     var i
//     var out = "The line is currently: ";
//     for(i = 0; i < cindyDeli.length; i++){
//       out += (i+1) + ". " + cindyDeli[i] + " ";
//     }
//     return out;
//   }
  
  // var i
  // for(i=0; i<cindyDeli.length; i++){
  //   deliLine.push([i+1] + `. ` + cindyDeli[i]);
  // }
  
  // return (`The line is currently: ` + deliLine);
  
  // if(cindyDeli === 0){
  //   return "The line is currently empty."
  // } else {
  //   return (`The line is currently: ` + deliLine);
  // }
  
}