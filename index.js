function* foreverGenerator() {
  let i = 0;
  while (true) {
    yield i++;
  }
  return "done";
}

let g = foreverGenerator();
//.prototype.return();
//returns the given value and finishes the generator itself.
console.log({value, done} = g.next())
console.log({value, done} = g.next())
console.log({value, done} = g.next())
console.log({value, done} = g.next())

//Ok, let's kill it:
g.return('20');


function someCrazyFunc(){
  return new Promise(function(resolve , reject) {
    setTimeout(function(){
      resolve('Answer!')
    },5000);
  })
}


//async
async function waiting(){
  let result = await someCrazyFunc();
  console.log(result);
}

waiting();
