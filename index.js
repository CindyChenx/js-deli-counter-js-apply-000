var cindyDeli = [ ];

function takeANumber(cindyDeli, n){
  cindyDeli.push(`${n}`);
  return `Welcome, ${n}. You are number ${cindyDeli.length} in line.`
}

function nowServing(cindyDeli){
  if(cindyDeli.length === 0){
    return "There is nobody waiting to be served!";
  } else {
    
  }
}