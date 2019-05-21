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

function currenLine(cindyDeli){
  
  
  
  var deliLine = [ ];
  var i = 0;
  while(i<cindyDeli.length){
    deliLine.push([i+1] + '. ' + cindyDeli[i]);
    i++;
  }
  
  if(cindyDeli.length === 0){
    return "The line is currently empty.";
  } else {
    return (`The line is currently: ` + deliLine);
  }
  
}