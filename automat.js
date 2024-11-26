/*
readme
That exercise is about making node.js program that use type of drink and how much ml we want for drink machines.
*/


//My take
const data = process.argv.splice(2);
const result = data.reduce((acc, item) => {
    const [key, value] = item.split("=");
    switch (value) {
        case "coffe": acc[key] = "Kawę"; break;
        case "juice": acc[key] = "Sok"; break;
        default: acc[key] = value;
    }
    return acc;
}, {});
console.log(`Przygotowuję ${result.name} o pojemności ${result.size}ml`);




//Original
/*
const options = {};
const arg = process.argv.splice(2).forEach(x => {
  const parts = x.split('=');
  options[parts[0]] = parts[1];
});


function makeDrink(name, size) {
  let drink;
  switch (name) {
    case 'juice': drink = 'Sok'; break;
    case 'coffe': drink = 'Kawę'; break;
    default: throw new Error('Nie ma takiego napoju!')
  }
  
  const text = `Przygotowuję ${drink} o pojemności ${size}ml`;
  console.log(text);
}

makeDrink(options.name, options.size)
*/
