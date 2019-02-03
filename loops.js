
function forLoop (array) {

  for(i=0; i < 25; i++){
    if (i===1){
      message = `I am ${i} strange loop.`
      array.push(message)
    } else {
      message = `I am ${i} strange loops.`
      array.push(message)
    }
  }

  return array
}
