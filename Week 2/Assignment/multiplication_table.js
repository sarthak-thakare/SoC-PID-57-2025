const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter number: ', (input) => {
  let n = Number(input);
  for(let i=1;i<=10;i++){
      console.log(`${n} * ${i} = ${n*i}`);
    }
  rl.close();
});
