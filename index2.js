require('dotenv').config({path:'.env.'})
console.log('index');

function usevars() {
  let fromEnvFile = process.env.ENV_VAR;
  console.log(fromEnvFile);
  return fromEnvFile;
}

usevars()

module.exports = {usevars}
