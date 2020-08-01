// add solution here

function theBeatlesPlay(musicians,instruments){
  var newArray=[];
  for(let i=0; i<musicians.length; i++){
    newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray;
}



function johnLennonFacts(array){
  let i=0;
  while(i<=array.length-1){
   array[i] = `${array[i]}!!!`
    i++;
  }
  return array;
}


function iLoveTheBeatles(number){
  var array = [];
  do{
  array.push(`I love the Beatles!`);
  number++;
  }
  while(number<15);
  return array;
}