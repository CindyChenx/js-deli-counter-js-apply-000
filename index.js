var katzDeli = [ ];

function takeANumber(katzDeli, n){
  katzDeli.push(`${n}`);
  return `Welcome, ${n}. You are number ${katzDeli.length} in line.`
}

function nowServing(katzDeli){
  if(katzDeli.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    return `Currently serving ${katzDeli.shift()}.`;
    
  }
}

var line = [ ];
function currentLine(katzDeli) {
  var i = 0;
  while (i < cindyDeli.length) {
    line.push(` `+[i+1]+`. `  + katzDeli[i])
    i++;
  }
  if (katzDeli.length === 0) {
    return "The line is currently empty.";
  } else
  return(`The line is currently:` + line);
}

  
  // var i
  // for(i=0; i<cindyDeli.length; i++){
  //   deliLine.push([i+1] + `. ` + cindyDeli[i]);
  // }
  
  // if(cindyDeli === 0){
  //   return "The line is currently empty."
  // } else {
  //   return (`The line is currently: ` + deliLine);
  // }
  
