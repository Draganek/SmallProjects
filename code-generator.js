//Moja propozycja

const data = process.argv.splice(2);
const make = data[0].split(':')[1];
const methods = data[2].split('=')[1].split(',');
 const results = methods.map(action => `\t${action}(${data[1].toLowerCase()}) {}`).join('\n');

console.log(`${make} ${data[1]} {\n${results}\n}`);



//Oryginał
/*const getParams = (args) => {
    const params = {};
    args.splice(2).forEach(x => {
      const parts = x.split('=');
      params[parts[0]] = parts[1].split(',');
    });
    return params;
  }
  
  const generateClas = (className, params) => {
    let code = `class ${className} {\n`;
    params.methods.forEach(method => {
      code += `\t${method}(${className.toLowerCase()}) {}\n`
    });
    code += `}`;
    return code;
  }
  
  const arg = process.argv.splice(2);
  const type = arg[0].split(':')[1];
  const name = arg[1];
  const params = getParams(arg);
  
  let code;
  if (type === 'class') {
    code = generateClas(name, params);
  }
  
  console.log(code);*/
