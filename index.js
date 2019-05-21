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

var deliLine = [ ];

function currenLine(cindyDeli){
  
  if(cindyDeli === 0){
    return "The line is currently empty.";
  } else {
    
  }
  
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